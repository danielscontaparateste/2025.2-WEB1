function imprimir2(){

    let qtd = parseInt(document.getElementById("iptQtd").value);

    for (let k=0; k<qtd; k++){

        let mensagem = document.createElement("span");

        console.log("Mensagem Número : "+k);

        mensagem.textContent = "Mensagem Número : "+k;

        mensagem.style.display = "block";
        mensagem.style.marginTop = "20px";
        mensagem.style.padding = "20px";
        mensagem.style.border = "2px solid black";
        mensagem.style.backgroundColor = "gray";
        mensagem.style.borderRadius = "12px";
        mensagem.style.width = "50%";

        document.querySelector("body").appendChild(mensagem);    
    }

    

    
}


// function imprimir(){

//     let qtd = parseInt(document.getElementById("iptQtd").value);

//     var spnMsg = document.querySelector("#spnMsg");

//     var msg = "";

//     for (let k=0; k<qtd; k++){
//         // console.log("Mensagem Número : "+k);

//         msg = msg + "<br> Mensagem Número : "+k+"<br>";
//     }

//     // spnMsg.textContent = msg;

//     spnMsg.innerHTML = msg;

// }