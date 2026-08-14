// PEGANDO OS ELEMENTOS DO HTML

const formulario = document.getElementById("formCadastro");

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");
const cep = document.getElementById("cep");

const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");


// BUSCAR ENDEREÇO PELO CEP

cep.addEventListener("blur", function () {

    // Retira o hífen e outros caracteres
    const cepDigitado = cep.value.replace(/\D/g, "");

    // Verifica se possui 8 números
    if (cepDigitado.length !== 8) {
        alert("Digite um CEP válido com 8 números.");
        return;
    }

    // Faz a requisição para a API do ViaCEP
    fetch("https://viacep.com.br/ws/" + cepDigitado + "/json/")

        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (dados) {

            // Verifica se o CEP existe
            if (dados.erro) {
                alert("CEP não encontrado.");
                return;
            }

            // Preenche os campos automaticamente
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            estado.value = dados.uf;

        })

        .catch(function () {
            alert("Não foi possível consultar o CEP.");
        });

});


// FORMATAÇÃO DO CEP

cep.addEventListener("input", function () {

    let valor = cep.value.replace(/\D/g, "");

    if (valor.length > 5) {
        valor = valor.substring(0, 5) + "-" + valor.substring(5);
    }

    cep.value = valor;

});


// VALIDAÇÃO DO FORMULÁRIO

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    // Verifica o nome
    if (nome.value.trim() === "") {
        alert("Digite seu nome.");
        nome.focus();
        return;
    }

    // Verifica o e-mail
    if (email.value.trim() === "") {
        alert("Digite seu e-mail.");
        email.focus();
        return;
    }

    // Verifica o telefone
    if (telefone.value.trim() === "") {
        alert("Digite seu telefone.");
        telefone.focus();
        return;
    }

    // Verifica a senha
    if (senha.value.length < 6) {
        alert("A senha deve possuir pelo menos 6 caracteres.");
        senha.focus();
        return;
    }

    // Verifica o CEP
    const cepNumeros = cep.value.replace(/\D/g, "");

    if (cepNumeros.length !== 8) {
        alert("Digite um CEP válido.");
        cep.focus();
        return;
    }

    // Se tudo estiver correto
    alert("Cadastro realizado com sucesso!");

});