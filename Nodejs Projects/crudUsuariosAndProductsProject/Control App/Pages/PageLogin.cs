using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace Control_App.Pages
{
    class PageLogin
    {
        private IWebDriver driver { get; }
        private WebDriverWait wait { get; }

        public PageLogin(IWebDriver webDriver)
        {
            driver = webDriver;
            wait = new WebDriverWait(driver, TimeSpan.FromSeconds(20));
        }

        private IWebElement txtUserName => wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.Name("loginModel.Username")));
        private IWebElement txtPassword => wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.Name("loginModel.Password")));
        private IWebElement btnLogin => wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath("/html/body/div/section[2]/div/div/div[1]/form/fieldset/button")));
        public void setUserName(string userName) => txtUserName.SendKeys(userName);
        public void sePassword(string password) => txtPassword.SendKeys(password);
        public void clkLogin() => btnLogin.Click();

        public void login(string username, string password)
        {
            setUserName(username);
            sePassword(password);

            clkLogin();
        }
        
    }
}
