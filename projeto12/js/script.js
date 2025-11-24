function executar(){

    let qtd = parseInt(document.getElementById("iptQtd").value);

    var container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = "300px";
    container.style.border = "2px solid black";

    for (let k=0; k<qtd; k++){

        let box = document.createElement("div");

        box.setAttribute("id","bx"+k);

        box.textContent = k;

        box.style.display = "inline-block";
        box.style.backgroundColor = "cyan";
        box.style.width = "100px";
        box.style.height = "100px";
        box.style.border = "2px solid black";

        box.addEventListener("mouseover", 
            function (){
                // alert(box.style.backgroundColor);
                let corAtual = box.style.backgroundColor;

                console.log('Alterando para o elemento: '+box.getAttribute("id"));
                // if (corAtual == 'cyan'){
                //     box.style.backgroundColor = "green";
                // }else if (corAtual == 'green'){
                //     box.style.backgroundColor = "cyan";
                // }

                // Operador ternário
                box.style.backgroundColor = (corAtual == 'cyan')?'green':'cyan';
                
            }
        );

        box.addEventListener("click", 
            function (){
                console.log('removendo o elemento: '+box.getAttribute("id"));
                box.remove();
            }
        )

        container.appendChild(box);
    }

    document.querySelector("body").appendChild(container);    

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