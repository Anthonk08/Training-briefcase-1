using OpenQA.Selenium;
using Control_App.Pages;

namespace Control_App.Entities
{
    class User
    {
        public string username;
        public Pages pages = new Pages();
        public IWebDriver driver;
    }
}
