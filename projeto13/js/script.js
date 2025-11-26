var qtdTentativas = 0;

var qtdMaximaBlocos = 10;

function criarJogo(){

    document.querySelector("#btnCriar").disabled = true;
    document.querySelector("#btnCriar").textContent = "Reiniciar";

    // Obter a quantidade de blocos
    var qtd = parseInt(document.querySelector("#iptQtd").value);

    // Criar caixa de mensagem
    var spnMsg = document.createElement("span");

    if (qtd<1 || qtd>qtdMaximaBlocos){
        spnMsg.textContent = "Quantidade de blocos não permitida";
        document.querySelector("#saida").appendChild(spnMsg);
        return;
    }
    
    // Sortear o número
    var numeroSorteado = Math.floor(Math.random()*(qtd)) + 1; // revisar
    console.log("Número sorteado :"+numeroSorteado);

    

    for (let k=0; k<qtd; k++){
        let bx = document.createElement("div");
        bx.setAttribute("class","box");
        bx.setAttribute("id","bx"+(k+1));
        bx.textContent = k+1;

        
        bx.addEventListener("click", function (){
            // alert(bx.getAttribute("id"));
            qtdTentativas++;
            if (bx.id == "bx"+numeroSorteado){
                bx.setAttribute("class","boxSorteado"); 
                // spnAcerto.textContent = "Parabéns, você acertou em "+qtdTentativas+" tentativas"; 
                spnMsg.textContent = `Parabéns, você acertou em ${qtdTentativas} tentativas!`;
                document.querySelector("#saida").appendChild(spnMsg);
            }else{
                // qtdTentativas++;
                bx.remove();
            }

        }); 

        document.querySelector("#area").appendChild(bx);
    }
}

