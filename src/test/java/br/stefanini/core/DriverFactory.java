package br.stefanini.core;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class DriverFactory {
	
	private static WebDriver driver;
	private static String PAGE_URL="http://www.aprendendotestar.com.br/treinar-automacao.php";
	public static ThreadLocal<WebDriver> threadDriver = new ThreadLocal<WebDriver>() {
		@Override
		protected synchronized WebDriver initialValue() {
			return iniciarDrive();
			
		}
	};
	public static WebDriver getDriver(){
		return threadDriver.get();
	}
	public static void fechaDriver(){
		driver.quit();
	}
	
	
	public static WebDriver iniciarDrive() {
		ChromeOptions options = new ChromeOptions();
//		options.addArguments("--headless");
		System.setProperty("webdriver.chrome.driver", "chromedriver/chromedriver.exe");
		driver = new ChromeDriver(options);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get(PAGE_URL);
		return driver;
	}


}
