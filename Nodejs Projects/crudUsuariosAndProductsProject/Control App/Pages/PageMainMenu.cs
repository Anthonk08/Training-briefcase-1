using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace Control_App.Pages
{
    class PageMainMenu
    {
        private IWebDriver driver { get; }
        private WebDriverWait wait { get; }

        public PageMainMenu(IWebDriver webDriver)
        {
            driver = webDriver;
            wait = new WebDriverWait(driver, TimeSpan.FromSeconds(20));
        }
        public void Logout()
        {
            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.XPath("/html/body/div/header/ul/li/a"))).Click();
            wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.Id("logout"))).Click();

            try
            {
                wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.AlertIsPresent());
                driver.SwitchTo().Alert().Accept();
            }
            catch (Exception e) { }
        }
    }
}
