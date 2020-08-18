package br.stefanini.pages;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import br.stefanini.core.DriverFactory;
import br.stefanini.core.ElementsPages;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HomePage extends ElementsPages {

	public static void inserirUsuario(String usuario) {
		usuario = String.valueOf(usuario);
		WebElement campoUsuario = DriverFactory.getDriver().findElement(By.name("form_usuario"));
		campoUsuario.clear();
		campoUsuario.sendKeys(usuario);

	}

	public static void inserirSenha(String senha) {
		WebElement campoSenha = DriverFactory.getDriver().findElement(By.name("form_senha"));
		campoSenha.clear();
		campoSenha.sendKeys(senha);
	}

	public static void inserirNome(String nome) {
		WebElement campoNome = DriverFactory.getDriver().findElement(By.name("form_nome"));
		campoNome.clear();
		campoNome.sendKeys(nome);
	}

	public static void enviar() {
		WebElement botaoEnviar = DriverFactory.getDriver().findElement(By.cssSelector("input.btn.btn-info"));
		botaoEnviar.click();
	}

	public static void mensagenss(String mensagem) {
//		WebElement botaoEnviar = 
//		System.out.println(b);

	}

	public static void mensagens(String mensagem) {
		WebElement mens = DriverFactory.getDriver().findElement(
				By.cssSelector("body > section > section.wrapper > div > form > table > tbody > tr:nth-child(7)"));
		assertEquals(mensagem, mens.getText());

	}

	public static void validarUsuario(String usuario) {
		WebElement userValido = DriverFactory.getDriver().findElement(By.cssSelector(
				"body > section > section.wrapper > div > table > tbody > tr:nth-child(2) > td:nth-child(3)"));
		assertEquals(usuario, userValido.getText());
	}

	public static void validarSenha(String senha) {
		WebElement senhaValida = DriverFactory.getDriver().findElement(By.cssSelector(
				"body > section > section.wrapper > div > table > tbody > tr:nth-child(2) > td:nth-child(4)"));
		assertEquals(senha, senhaValida.getText());
	}

	public static void validarNome(String nome) {
		WebElement nomeValido = DriverFactory.getDriver().findElement(By.cssSelector(
				"body > section > section.wrapper > div > table > tbody > tr:nth-child(2) > td:nth-child(2)"));
		assertEquals(nome, nomeValido.getText());
	}

	public static void validarUsuarioApagado(String usuario) {
		WebElement userValido = DriverFactory.getDriver().findElement(By.cssSelector(
				"body > section > section.wrapper > div > table > tbody > tr:nth-child(2) > td:nth-child(3)"));
		assertNotEquals(usuario, userValido.getText());
	}

	public static void validarNomeApagado(String nome) {
		WebElement nomeValido = DriverFactory.getDriver().findElement(By.cssSelector(
				"body > section > section.wrapper > div > table > tbody > tr:nth-child(2) > td:nth-child(2)"));
		assertNotEquals(nome, nomeValido.getText());
	}

	public static void apagarUsuario() {
		WebElement botaoApagar = DriverFactory.getDriver().findElement(By.cssSelector(
				"body > section > section.wrapper > div > table > tbody > tr:nth-child(2) > td:nth-child(5) > a"));
		botaoApagar.click();

	}

	public static void validarsenhaApagada(String senha) {
		WebElement senhaValida = DriverFactory.getDriver().findElement(By.cssSelector(
				"body > section > section.wrapper > div > table > tbody > tr:nth-child(2) > td:nth-child(4)"));
		assertNotEquals(senha, senhaValida.getText());
	}

	public static void atualizarPagina() {
		WebElement botaoAtualizar = DriverFactory.getDriver()
				.findElement(By.cssSelector("body > section > section.wrapper > div > p:nth-child(3) > a"));
		botaoAtualizar.click();
	}

}
