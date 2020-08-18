package br.stefanini.steps;

import br.stefanini.pages.HomePage;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Então;

public class TesteStefaniniSteps {

	@Dado("^preencho o campo usuário: \"([^\"]*)\"$")
	public void preenchoOCampoUsuRio(String usuario) throws Throwable {
		HomePage.inserirUsuario(usuario);
	}

	@E("^preencho o campo senha: \"([^\"]*)\"$")
	public void preenchoOCampoSenha(String senha) throws Throwable {
		HomePage.inserirSenha(senha);
	}

	@E("^preencho o campo nome: \"([^\"]*)\"$")
	public void preenchoOCampoNome(String nome) throws Throwable {
		HomePage.inserirNome(nome);
	}

	@E("^clico em enviar$")
	public void clicoEmEnviar() throws Throwable {
		HomePage.enviar();
	}

	@Então("^valido a mensagem: \"([^\"]*)\"$")
	public void validoAMensagem(String mensagem) throws Throwable {

		HomePage.mensagenss(mensagem);
		HomePage.mensagens(mensagem);
	}

	@Então("^valido usuario: \"([^\"]*)\"$")
	public void validoUsuario(String usuario) throws Throwable {
		HomePage.validarUsuario(usuario);
	}

	@E("^valido senha: \"([^\"]*)\"$")
	public void validoSenha(String senha) throws Throwable {
		HomePage.validarSenha(senha);
	}

	@E("^valido nome: \"([^\"]*)\"$")
	public void validoNome(String nome) throws Throwable {
		HomePage.validarNome(nome);
	}

	@Dado("^que eu clico em apagar$")
	public void queEuClicoEmApagar() throws Throwable {
		HomePage.apagarUsuario();
	}

	@Então("^valido usuario: \"([^\"]*)\" foi apagado\\.$")
	public void validoUsuarioFoiApagado(String usuario) throws Throwable {
		HomePage.validarUsuarioApagado(usuario);

	}

	@E("^valido senha: \"([^\"]*)\" foi apagado\\.$")
	public void validoSenhaFoiApagado(String senha) throws Throwable {
		HomePage.validarsenhaApagada(senha);
	}

	@E("^valido nome: \"([^\"]*)\" foi apagado\\.$")
	public void validoNomeFoiApagado(String nome) throws Throwable {
		HomePage.validarNomeApagado(nome);
	}

	@Dado("^que eu clico em atualizar$")
	public void queEuClicoEmAtualizar() throws Throwable {
		HomePage.atualizarPagina();

	}

	@Então("^valido que o nome: \"([^\"]*)\" continuam exibibidos na tela\\.$")
	public void validoQueONomeContinuamExibibidosNaTela(String nome) throws Throwable {
		HomePage.validarNome(nome);
	}
}
