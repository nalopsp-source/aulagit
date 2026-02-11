function validar(){
    const idade = document. getElementById("idade").value;
    const nivel = document. getElementById("nivel").value;
    const mensagem = document. getElementById("mensagem");

    if(idade >= 16 && nivel <= 5){
    mensagem.innerText =  "inscriçao aceita, Categoria Pro";
    mensagem.style.color =  "green";
    }else if (idade >= 16 && nivel < 5){
    mensagem.innerText= "inscriçao aceita, Categoria INICIANTE";
    mensagem.style.color = "blue";
}else {

mensagem.innerText = "inscriçao negada, Idade minima 16";
 mensagem.style.color = "red";
}
}