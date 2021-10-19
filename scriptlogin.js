function mostrarSenha(){ //Quando a checkbox e clicada a senha se torna visivel
    var senha = document.getElementById("Senha");
    if (senha.type === "password"){
        senha.type = "text";
    }
    else{
        senha.type = "password";
    }
    if (document.getElementById("ConfirmSenha")){ //testa para saber se existe o confirmar senha
        var conf = document.getElementById("ConfirmSenha")
        if (conf.type === "password"){
            conf.type = "text";
        }
        else{
            conf.type = "password";
        }
    } 
}