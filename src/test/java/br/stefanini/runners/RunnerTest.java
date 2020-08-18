package br.stefanini.runners;
import org.junit.AfterClass;
import org.junit.FixMethodOrder;
import org.junit.runner.RunWith;

import br.stefanini.core.DriverFactory;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runners.MethodSorters;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/",
		glue = {"br.stefanini.steps"},
		tags = {"@automacao"},
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false,
		strict = false
		)
public class RunnerTest {

	@AfterClass
	public static void fechaBrowser() {
		DriverFactory.fechaDriver();
	}
	
}
