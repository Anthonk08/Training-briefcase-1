using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using Control_App.Entities;
using Control_App.Pages;
using Control_App.Utility;
using Control_App.WebDriverClasses;
using System.Threading;

namespace Control_App
{

    public partial class ControlMaster : Form
    {
        private List<Senator> senators;
        private string loginPass;
        private string mainPage;
        private WebDriverFactory factory;
        private int senatorsLogged = 0;

        public ControlMaster()
        {
            InitializeComponent();
            FormBorderStyle = FormBorderStyle.FixedSingle;
            Utility.Utility.LoadEnvVariable();
            factory = new WebDriverFactory();
            loginPass = Environment.GetEnvironmentVariable("GLOBAL_PASSWORD");
            senators = Utility.Utility.LoadJson();
            mainPage = Environment.GetEnvironmentVariable("MAIN_PAGE");
        }

        private void btnAprobada_Click(object sender, EventArgs e)
        {
            List<Thread> senatorVotationThreads = new List<Thread>();

            foreach (Senator senator in senators)
            {

                Thread votationThread = new Thread(() => senatorVotationProcess(senator, true));
                votationThread.Start();
                senatorVotationThreads.Add(votationThread);

            }
            foreach (Thread thread in senatorVotationThreads)
            {
                thread.Join();
            }
        }

        private void btnRechazada_Click(object sender, EventArgs e)
        {
            List<Thread> senatorVotationThreads = new List<Thread>();

            foreach (Senator senator in senators)
            {

                Thread votationThread = new Thread(() => senatorVotationProcess(senator, false));
                votationThread.Start();
                senatorVotationThreads.Add(votationThread);

            }
            foreach (Thread thread in senatorVotationThreads)
            {
                thread.Join();
            }
        }

        private void btnRandom_Click(object sender, EventArgs e)
        {
            List<Thread> senatorVotationThreads = new List<Thread>();
            bool random;

            foreach (Senator senator in senators)
            {
                random = new Random().NextDouble() > 0.5;
                Thread votationThread = new Thread(() => senatorVotationProcess(senator, random));
                votationThread.Start();
                senatorVotationThreads.Add(votationThread);

            }
            foreach (Thread thread in senatorVotationThreads)
            {
                thread.Join();
            }
        }

        private void btnEmpate_Click(object sender, EventArgs e)
        {
            List<Thread> senatorVotationThreads = new List<Thread>();
            int i = 0;
            foreach (Senator senator in senators)
            {
                i++;
                Thread votationThread = new Thread(() => senatorVotationProcess(senator, i % 2 == 0));
                votationThread.Start();
                senatorVotationThreads.Add(votationThread);

            }
            foreach (Thread thread in senatorVotationThreads)
            {
                thread.Join();
            }
        }
        private void ControlMaster_Load(object sender, EventArgs e)
        {
            initializeSenators();
            lblLogueados.Text = string.Concat(senatorsLogged, "/32");

        }
        private void initializeSenators()
        {
            List<Thread> webDriverThreads = new List<Thread>();
            foreach (Senator senator in senators)
            {
                Thread webDriverThread = new Thread(() => {
                    senator.driver = factory.CreateDriver();
                    senator.driver.Navigate().GoToUrl(mainPage);
                    senator.pages.pageLogin = new PageLogin(senator.driver);
                    senator.pages.pageLogin.login(senator.username, loginPass);
                    senator.pages.pageMainMenu = new PageMainMenu(senator.driver);
                    senatorsLogged++;
                });
                webDriverThread.Start();
                webDriverThreads.Add(webDriverThread);
            }
            foreach (Thread thread in webDriverThreads)
            {
                thread.Join();
            }
        }

        private void ControlMaster_FormClosing(object sender, FormClosingEventArgs e)
        {
            List<Thread> senatorLoginThreads = new List<Thread>();
            foreach (Senator senator in senators)
            {
                Thread senatorLoginThread = new Thread(() => {
                    try
                    {
                        senator.pages.pageMainMenu.Logout();
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine($"Senator: {senator.fullname} did not log out {e}");
                    }
                    senator.driver.Close();
                    senator.driver.Quit();
                });
                senatorLoginThread.Start();
                senatorLoginThreads.Add(senatorLoginThread);
            }
            foreach (Thread thread in senatorLoginThreads)
            {
                thread.Join();
            }
        }
        private void senatorVotationProcess(Senator senator, bool vote)
        {
            senator.pages.pageVotation = new PageVotation(senator.driver);

            if (vote)
            {
                senator.pages.pageVotation.clkVotarSi();
            }
            else
            {
                senator.pages.pageVotation.clkVotarNo();

            }

        }

        private void btnResultado_Click(object sender, EventArgs e)
        {
            string resultado = senators[0].pages.pageVotation.getResultado;
            lblResultado.Text = resultado;
            if (resultado.Contains("APROBADA"))
            {
                lblResultado.ForeColor = Color.Green;
            }
            else if (resultado.Contains("EMPATE"))
            {
                lblResultado.ForeColor = Color.DarkGray;
            }
            else
            {
                lblResultado.ForeColor = Color.Red;
            }
        }
    }
}
