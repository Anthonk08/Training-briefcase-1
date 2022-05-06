using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using Control_App.Entities;
using System;

namespace Control_App.Utility
{
    class Utility
    {
        public static List<Senator> LoadJson()
        {
            using (StreamReader r = new StreamReader(GetProjectPath() + "Utility\\senadores.json"))
            {
                string json = r.ReadToEnd();
                List<Senator> senadores = JsonConvert.DeserializeObject<List<Senator>>(json);
                return senadores;
            }
        }
        static public string GetProjectPath()
        {
            string path = System.Reflection.Assembly.GetCallingAssembly().CodeBase;
            string actualPath = path.Substring(0, path.LastIndexOf("bin"));
            string projectPath = new Uri(actualPath).LocalPath;
            return projectPath;
        }

        static public void LoadEnvVariable()
        {
            string envPath = GetProjectPath() + "Utility\\.env";
            DotNetEnv.Env.Load(envPath);
        }

    }
}
