using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace Control_App.Pages
{
    class PageVotation
    {
        private IWebDriver driver { get; }
        private WebDriverWait wait { get; }
        public PageVotation(IWebDriver webDriver)
        {
            driver = webDriver;
            wait = new WebDriverWait(driver, TimeSpan.FromSeconds(60));
        }
        private IWebElement btnVotarSi => wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.Id("votarSi")));
        private IWebElement btnVotarNo => wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementToBeClickable(By.Id("votarNo")));
        private IWebElement lblResultado => wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(By.Id("resultado")));

        public string getResultado => lblResultado.Text;

        public void clkVotarSi()
        {
            try
            {
                btnVotarSi.Click();
            }
            catch (Exception e){}
        }

        public void clkVotarNo()
        {
            try
            {
                btnVotarNo.Click();
            }
            catch (Exception e) { }
        }
    }

}
