using System.Collections.Generic;
using OpenQA.Selenium.Chrome;

namespace Control_App.WebDriverClasses
{
    public class WebDriverFactory
    {
        public ChromeDriver CreateDriver()
        {
            var chromeOptions = new ChromeOptions();
            var chromeDriverService = ChromeDriverService.CreateDefaultService();

             //chromeOptions.AddArgument("headless");
             chromeOptions.AddArgument("no-sandbox");
             chromeDriverService.HideCommandPromptWindow = true;

            ChromeDriver driver = new ChromeDriver(chromeDriverService, chromeOptions);
            driver.Manage().Window.Maximize();
            return driver;
        }
    }
}
