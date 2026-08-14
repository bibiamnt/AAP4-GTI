<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Clientes</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
        }

        body {
            background: #eef3f8;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            width: 700px;
            max-width: 95%;
            background: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, .15);
            overflow: hidden;
        }

        header {
            background: #1565c0;
            color: white;
            text-align: center;
            padding: 25px;
        }

        nav {
            background: #0d47a1;
        }

        .container-flex {
            display: flex;
        }

        .coluna {
            flex: 1;
            text-align: center;
            padding: 15px;
            color: white;
            font-weight: bold;
        }

        .coluna:hover {
            background: #1565c0;
        }

        main {
            padding: 30px;
        }

        a {
            display: inline-block;
            margin-bottom: 25px;
            color: #1565c0;
            text-decoration: none;
            font-weight: bold;
        }

        form div {
            margin-bottom: 18px;
        }

        label {
            display: block;
            margin-bottom: 6px;
            font-weight: bold;
            color: #333;
        }

        input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 16px;
        }

        input:focus {
            border-color: #1565c0;
            outline: 2px solid #90caf9;
        }

        input.erro {
            border-color: #d32f2f;
        }

        .mensagem-erro {
            display: block;
            color: #d32f2f;
            font-size: 14px;
            margin-top: 5px;
        }

        .mensagem-sucesso {
            color: #2e7d32;
            background: #e8f5e9;
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 18px;
            display: none;
        }

        .endereco {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        button {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 6px;
            background: #1565c0;
            color: white;
            font-size: 17px;
            cursor: pointer;
        }

        button:hover {
            background: #0d47a1;
        }

        @media (max-width: 600px) {
            .endereco {
                grid-template-columns: 1fr;
            }

            .container-flex {
                flex-direction: column;
            }
        }
    </style>
</head>

<body>

    <div class="container">

        <header>
            <h1>Cadastro de Clientes</h1>
        </header>

        <nav>
            <div class="container-flex">
                <div class="coluna">INÍCIO</div>
                <div class="coluna">MENU</div>
            </div>
        </nav>

        <main>

            <a href="#">CADASTRO</a>

            <div id="mensagemSucesso" class="mensagem-sucesso">
                Dados cadastrados com sucesso!
            </div>

            <form id="formCadastro" novalidate>

                <div>
                    <label for="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite seu nome"
                        required>
                    <span id="erroNome" class="mensagem-erro"></span>
                </div>

                <div>
                    <label for="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        required>
                    <span id="erroEmail" class="mensagem-erro"></span>
                </div>

                <div>
                    <label for="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        placeholder="(11) 99999-9999"
                        required>
                    <span id="erroTelefone" class="mensagem-erro"></span>
                </div>

                <div>
                    <label for="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Digite sua senha"
                        required>
                    <span id="erroSenha" class="mensagem-erro"></span>
                </div>

                <div>
                    <label for="cep">CEP</label>
                    <input
                        type="text"
                        id="cep"
                        placeholder="00000-000"
                        maxlength="9"
                        required>
                    <span id="erroCep" class="mensagem-erro"></span>
                </div>

                <div class="endereco">

                    <div>
                        <label for="logradouro">Endereço</label>
                        <input
                            type="text"
                            id="logradouro"
                            placeholder="Endereço"
                            readonly>
                    </div>

                    <div>
                        <label for="bairro">Bairro</label>
                        <input
                            type="text"
                            id="bairro"
                            placeholder="Bairro"
                            readonly>
                    </div>

                    <div>
                        <label for="cidade">Cidade</label>
                        <input
                            type="text"
                            id="cidade"
                            placeholder="Cidade"
                            readonly>
                    </div>

                    <div>
                        <label for="estado">Estado</label>
                        <input
                            type="text"
                            id="estado"
                            placeholder="Estado"
                            readonly>
                    </div>

                </div>

                <br>

                <button type="submit">
                    Cadastrar
                </button>

            </form>

        </main>

    </div>

    <script src="script.js"></script>

</body>

</html>