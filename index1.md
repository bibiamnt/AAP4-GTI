<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cadastro de Clientes</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#eef3f8;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
}

.container{
    width:700px;
    background:white;
    border-radius:12px;
    box-shadow:0 5px 15px rgba(0,0,0,.15);
    overflow:hidden;
}

header{
    background:#1565c0;
    color:white;
    text-align:center;
    padding:25px;
}

nav{
    background:#0d47a1;
}

.container-flex{
    display:flex;
}

.coluna{
    flex:1;
    text-align:center;
    padding:15px;
    color:white;
    font-weight:bold;
}

.coluna:hover{
    background:#1565c0;
}

main{
    padding:30px;
}

a{
    display:inline-block;
    margin-bottom:25px;
    color:#1565c0;
    text-decoration:none;
    font-weight:bold;
}

a:hover{
    text-decoration:underline;
}

form div{
    margin-bottom:18px;
}

label{
    display:block;
    margin-bottom:6px;
    font-weight:bold;
    color:#333;
}

input{
    width:100%;
    padding:12px;
    border:1px solid #ccc;
    border-radius:6px;
    font-size:16px;
}

input:focus{
    border-color:#1565c0;
    outline:none;
}

button{
    width:100%;
    padding:14px;
    border:none;
    border-radius:6px;
    background:#1565c0;
    color:white;
    font-size:17px;
    cursor:pointer;
}

button:hover{
    background:#0d47a1;
}

@media(max-width:768px){

.container{
    width:95%;
}

.container-flex{
    flex-direction:column;
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

<form>

<div>
<label for="nome">Nome</label>
<input type="text" id="nome" placeholder="Digite seu nome">
</div>

<div>
<label for="email">E-mail</label>
<input type="email" id="email" placeholder="Digite seu e-mail">
</div>

<div>
<label for="telefone">Telefone</label>
<input type="tel" id="telefone" placeholder="(11) 99999-9999">
</div>

<div>
<label for="senha">Senha</label>
<input type="password" id="senha" placeholder="Digite sua senha">
</div>

<button type="submit">Cadastrar</button>

</form>

</main>

</div>

</body>
</html>