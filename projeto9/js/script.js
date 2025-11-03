function imprimirMensagem(){
    // alert("Olá Mundo");
    var iptNome = document.querySelector("#iptNome");
    var nome = iptNome.value;
    
    var spn = document.querySelector("#spnMensagem");
    // spn.textContent = "Olá Mundo";
    spn.textContent = nome;
    spn.style.display = "block";
    spn.style.marginTop = "10px";
    spn.style.border = "3px solid black";
    spn.style.backgroundColor = "white";
    spn.style.padding = "10px";
    spn.style.width = "50%";
    spn.style.textAlign = "center";
    spn.style.borderRadius = "25px";

}

function backgroundRed(){
    var bd = document.querySelector("body");
    bd.style.backgroundColor = "red";

    apagarMensagem();
}

function backgroundWhite(){
    var bd = document.querySelector("body");
    bd.style.backgroundColor = "white";
}

function apagarMensagem(){
    var spn = document.querySelector("#spnMensagem");
    spn.textContent = "";
    spn.style.border = "";
    spn.style.backgroundColor = "";
    spn.style.padding = "";
    spn.style.width = ""; 
}