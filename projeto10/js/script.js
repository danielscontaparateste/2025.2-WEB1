function somar(){
    var iptX = document.querySelector("#iptX");
    var x = parseInt(iptX.value);

    console.log('x recebido: '+x);

    var iptY = document.querySelector("#iptY");
    var y = parseInt(iptY.value);

    console.log('y recebido: '+y);

    var spnRes = document.querySelector("#spnRes");

    spnRes.style.display = "block";
    spnRes.style.marginTop = "20px";

    var s = x + y;

    var bx = document.querySelector("#boxParImpar");
    if (s % 2 == 0){
        bx.style.backgroundColor = "green";
    }else{
        bx.style.backgroundColor = "red";
    }

    bx.textContent = s;
    bx.style.fontSize = "300%";
    bx.style.display = "flex";
    bx.style.justifyContent = "center";
    bx.style.alignItems = "center";

    spnRes.textContent = "O resultado da soma é "+s+".";
}



function limpar(){
    var iptX = document.querySelector("#iptX");
    var iptY = document.querySelector("#iptY");
    var spnRes = document.querySelector("#spnRes");
    var bx = document.querySelector("#boxParImpar");

    iptX.value = "";
    iptY.value = "";
    spnRes.textContent = "";
    bx.textContent = "";
    bx.style.backgroundColor = "white";
}