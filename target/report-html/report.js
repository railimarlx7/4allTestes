$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("automacao.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Iniciando em automação de testes",
  "description": "Objetivo: Validar os critérios de aceite estabelecidos.",
  "id": "iniciando-em-automação-de-testes",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@automacao"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 7,
      "name": "@1_dadosincompletos"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "preencho o campo usuário: \"\u003cusuario\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "preencho o campo senha: \"\u003csenha\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "preencho o campo nome: \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "valido a mensagem: \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha",
        "nome",
        "mensagem"
      ],
      "line": 17,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;1"
    },
    {
      "cells": [
        "",
        "123",
        "Junior",
        "Preencha este campo."
      ],
      "line": 18,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;2"
    },
    {
      "cells": [
        "jrlima",
        "",
        "Junior",
        "Preencha este campo."
      ],
      "line": 19,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;3"
    },
    {
      "cells": [
        "jrlima",
        "123",
        "",
        "Existem campos em branco."
      ],
      "line": 20,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 18,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@automacao"
    },
    {
      "line": 7,
      "name": "@1_dadosincompletos"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "preencho o campo usuário: \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "preencho o campo senha: \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "preencho o campo nome: \"Junior\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "valido a mensagem: \"Preencha este campo.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoUsuRio(String)"
});
formatter.result({
  "duration": 7108779400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 25
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoSenha(String)"
});
formatter.result({
  "duration": 91237000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Junior",
      "offset": 24
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoNome(String)"
});
formatter.result({
  "duration": 71399800,
  "status": "passed"
});
formatter.match({
  "location": "TesteStefaniniSteps.clicoEmEnviar()"
});
formatter.result({
  "duration": 60278300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha este campo.",
      "offset": 20
    }
  ],
  "location": "TesteStefaniniSteps.validoAMensagem(String)"
});
formatter.result({
  "duration": 30799500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Preencha este campo.]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat br.stefanini.pages.HomePage.mensagens(HomePage.java:52)\r\n\tat br.stefanini.steps.TesteStefaniniSteps.validoAMensagem(TesteStefaniniSteps.java:34)\r\n\tat ✽.Entao valido a mensagem: \"Preencha este campo.\"(automacao.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@automacao"
    },
    {
      "line": 7,
      "name": "@1_dadosincompletos"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "preencho o campo usuário: \"jrlima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "preencho o campo senha: \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "preencho o campo nome: \"Junior\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "valido a mensagem: \"Preencha este campo.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "jrlima",
      "offset": 27
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoUsuRio(String)"
});
formatter.result({
  "duration": 57017800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoSenha(String)"
});
formatter.result({
  "duration": 56521300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Junior",
      "offset": 24
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoNome(String)"
});
formatter.result({
  "duration": 69486400,
  "status": "passed"
});
formatter.match({
  "location": "TesteStefaniniSteps.clicoEmEnviar()"
});
formatter.result({
  "duration": 33885400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preencha este campo.",
      "offset": 20
    }
  ],
  "location": "TesteStefaniniSteps.validoAMensagem(String)"
});
formatter.result({
  "duration": 16741500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Preencha este campo.]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat br.stefanini.pages.HomePage.mensagens(HomePage.java:52)\r\n\tat br.stefanini.steps.TesteStefaniniSteps.validoAMensagem(TesteStefaniniSteps.java:34)\r\n\tat ✽.Entao valido a mensagem: \"Preencha este campo.\"(automacao.feature:14)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 20,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@automacao"
    },
    {
      "line": 7,
      "name": "@1_dadosincompletos"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "preencho o campo usuário: \"jrlima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "preencho o campo senha: \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "preencho o campo nome: \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "valido a mensagem: \"Existem campos em branco.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "jrlima",
      "offset": 27
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoUsuRio(String)"
});
formatter.result({
  "duration": 53264000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 25
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoSenha(String)"
});
formatter.result({
  "duration": 154944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoNome(String)"
});
formatter.result({
  "duration": 48845900,
  "status": "passed"
});
formatter.match({
  "location": "TesteStefaniniSteps.clicoEmEnviar()"
});
formatter.result({
  "duration": 296602500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Existem campos em branco.",
      "offset": 20
    }
  ],
  "location": "TesteStefaniniSteps.validoAMensagem(String)"
});
formatter.result({
  "duration": 25128400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 23,
      "name": "@2_dadoscompletos"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "preencho o campo usuário: \"\u003cusuario\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "preencho o campo senha: \"\u003csenha\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "preencho o campo nome: \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "clico em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "valido usuario: \"\u003cusuario\u003e\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 31,
  "name": "valido senha: \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "valido nome: \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha",
        "nome"
      ],
      "line": 34,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;1"
    },
    {
      "cells": [
        "jrlima",
        "123",
        "Junior"
      ],
      "line": 35,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;2"
    },
    {
      "cells": [
        "jrlima2",
        "1234",
        "Raimundo"
      ],
      "line": 36,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 35,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@automacao"
    },
    {
      "line": 23,
      "name": "@2_dadoscompletos"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "preencho o campo usuário: \"jrlima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "preencho o campo senha: \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "preencho o campo nome: \"Junior\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "clico em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "valido usuario: \"jrlima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 31,
  "name": "valido senha: \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "valido nome: \"Junior\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "jrlima",
      "offset": 27
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoUsuRio(String)"
});
formatter.result({
  "duration": 75921200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 25
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoSenha(String)"
});
formatter.result({
  "duration": 69263000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Junior",
      "offset": 24
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoNome(String)"
});
formatter.result({
  "duration": 68599000,
  "status": "passed"
});
formatter.match({
  "location": "TesteStefaniniSteps.clicoEmEnviar()"
});
formatter.result({
  "duration": 325030500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jrlima",
      "offset": 17
    }
  ],
  "location": "TesteStefaniniSteps.validoUsuario(String)"
});
formatter.result({
  "duration": 29682900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 15
    }
  ],
  "location": "TesteStefaniniSteps.validoSenha(String)"
});
formatter.result({
  "duration": 22646900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Junior",
      "offset": 14
    }
  ],
  "location": "TesteStefaniniSteps.validoNome(String)"
});
formatter.result({
  "duration": 19946800,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@automacao"
    },
    {
      "line": 23,
      "name": "@2_dadoscompletos"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "preencho o campo usuário: \"jrlima2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 27,
  "name": "preencho o campo senha: \"1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 28,
  "name": "preencho o campo nome: \"Raimundo\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "clico em enviar",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "valido usuario: \"jrlima2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 31,
  "name": "valido senha: \"1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "valido nome: \"Raimundo\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "jrlima2",
      "offset": 27
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoUsuRio(String)"
});
formatter.result({
  "duration": 74572100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 25
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoSenha(String)"
});
formatter.result({
  "duration": 70572500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raimundo",
      "offset": 24
    }
  ],
  "location": "TesteStefaniniSteps.preenchoOCampoNome(String)"
});
formatter.result({
  "duration": 70771500,
  "status": "passed"
});
formatter.match({
  "location": "TesteStefaniniSteps.clicoEmEnviar()"
});
formatter.result({
  "duration": 330998500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jrlima2",
      "offset": 17
    }
  ],
  "location": "TesteStefaniniSteps.validoUsuario(String)"
});
formatter.result({
  "duration": 25884000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 15
    }
  ],
  "location": "TesteStefaniniSteps.validoSenha(String)"
});
formatter.result({
  "duration": 19770600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raimundo",
      "offset": 14
    }
  ],
  "location": "TesteStefaniniSteps.validoNome(String)"
});
formatter.result({
  "duration": 16842200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 38,
      "name": "@3_apagarusuario"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "que eu clico em apagar",
  "keyword": "Dado "
});
formatter.step({
  "line": 42,
  "name": "valido usuario: \"\u003cusuario\u003e\" foi apagado.",
  "keyword": "Entao "
});
formatter.step({
  "line": 43,
  "name": "valido senha: \"\u003csenha\u003e\" foi apagado.",
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "valido nome: \"\u003cnome\u003e\" foi apagado.",
  "keyword": "E "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha",
        "nome"
      ],
      "line": 46,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;1"
    },
    {
      "cells": [
        "jrlima2",
        "1234",
        "Raimundo"
      ],
      "line": 47,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 47,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@automacao"
    },
    {
      "line": 38,
      "name": "@3_apagarusuario"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "que eu clico em apagar",
  "keyword": "Dado "
});
formatter.step({
  "line": 42,
  "name": "valido usuario: \"jrlima2\" foi apagado.",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 43,
  "name": "valido senha: \"1234\" foi apagado.",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 44,
  "name": "valido nome: \"Raimundo\" foi apagado.",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "location": "TesteStefaniniSteps.queEuClicoEmApagar()"
});
formatter.result({
  "duration": 504834900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jrlima2",
      "offset": 17
    }
  ],
  "location": "TesteStefaniniSteps.validoUsuarioFoiApagado(String)"
});
formatter.result({
  "duration": 25501800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 15
    }
  ],
  "location": "TesteStefaniniSteps.validoSenhaFoiApagado(String)"
});
formatter.result({
  "duration": 19374300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raimundo",
      "offset": 14
    }
  ],
  "location": "TesteStefaniniSteps.validoNomeFoiApagado(String)"
});
formatter.result({
  "duration": 18452900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 49,
      "name": "@4_atualizar"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "que eu clico em atualizar",
  "keyword": "Dado "
});
formatter.step({
  "line": 53,
  "name": "valido usuario: \"\u003cusuario\u003e\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 54,
  "name": "valido senha: \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 55,
  "name": "valido que o nome: \"\u003cnome\u003e\" continuam exibibidos na tela.",
  "keyword": "E "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha",
        "nome"
      ],
      "line": 57,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;1"
    },
    {
      "cells": [
        "jrlima",
        "123",
        "Junior"
      ],
      "line": 58,
      "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 58,
  "name": "Validar que os criterios de aceite exigidos.",
  "description": "",
  "id": "iniciando-em-automação-de-testes;validar-que-os-criterios-de-aceite-exigidos.;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@automacao"
    },
    {
      "line": 49,
      "name": "@4_atualizar"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "que eu clico em atualizar",
  "keyword": "Dado "
});
formatter.step({
  "line": 53,
  "name": "valido usuario: \"jrlima\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 54,
  "name": "valido senha: \"123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 55,
  "name": "valido que o nome: \"Junior\" continuam exibibidos na tela.",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.match({
  "location": "TesteStefaniniSteps.queEuClicoEmAtualizar()"
});
formatter.result({
  "duration": 294037300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jrlima",
      "offset": 17
    }
  ],
  "location": "TesteStefaniniSteps.validoUsuario(String)"
});
formatter.result({
  "duration": 26399800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 15
    }
  ],
  "location": "TesteStefaniniSteps.validoSenha(String)"
});
formatter.result({
  "duration": 25969100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Junior",
      "offset": 20
    }
  ],
  "location": "TesteStefaniniSteps.validoQueONomeContinuamExibibidosNaTela(String)"
});
formatter.result({
  "duration": 21590900,
  "status": "passed"
});
});