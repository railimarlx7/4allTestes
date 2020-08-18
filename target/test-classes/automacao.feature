#language: pt

@automacao
Funcionalidade: Iniciando em automação de testes
		Objetivo: Validar os critérios de aceite estabelecidos.

@1_dadosincompletos
  Esquema do Cenário: Validar que os criterios de aceite exigidos.
   
    Dado preencho o campo usuário: "<usuario>"
    Quando preencho o campo senha: "<senha>"
    E preencho o campo nome: "<nome>"
    E clico em enviar
    Entao valido a mensagem: "<mensagem>" 

    Exemplos: 
      | usuario  	| senha | nome  	|mensagem						 |
      |  					| 123	  | Junior 	|Preencha este campo.|
      |  	jrlima	| 		  |	Junior	|Preencha este campo.|
      |  	jrlima	| 123	  | 			 	|Existem campos em branco.|
     

@2_dadoscompletos
  Esquema do Cenário: Validar que os criterios de aceite exigidos.
   
    Dado preencho o campo usuário: "<usuario>"
    Quando preencho o campo senha: "<senha>"
    E preencho o campo nome: "<nome>"
    E clico em enviar
    Entao valido usuario: "<usuario>"
    E valido senha: "<senha>"
    E valido nome: "<nome>"
    Exemplos: 
      | usuario  		| senha 	| nome  	|
      |  jrlima	  	| 123	  	| Junior 	|
      |  jrlima2	  | 1234	  | Raimundo 	|
  
  @3_apagarusuario
  Esquema do Cenário: Validar que os criterios de aceite exigidos.
   
    Dado que eu clico em apagar
    Entao valido usuario: "<usuario>" foi apagado.
    E valido senha: "<senha>" foi apagado.
    E valido nome: "<nome>" foi apagado.
    Exemplos: 
      | usuario  		| senha 	| nome  		|
			|  jrlima2	  | 1234	  | Raimundo 	|
 
  @4_atualizar
  Esquema do Cenário: Validar que os criterios de aceite exigidos.
   
    Dado que eu clico em atualizar
   Entao valido usuario: "<usuario>"
    E valido senha: "<senha>"
    E valido que o nome: "<nome>" continuam exibibidos na tela.
    Exemplos: 
      | usuario  		| senha 	| nome  	|
      |  jrlima	  	| 123	  	| Junior 	|
      
    
     
    
 