function somar(){
    var iptX = document.querySelector("#iptX");
    var x = parseInt(iptX.value);

    var iptY = document.querySelector("#iptY");
    var y = parseInt(iptY.value);

    var spnRes = document.querySelector("#spnRes");

    spnRes.style.display = "block";
    spnRes.style.marginTop = "20px";

    var s = x + y;

    spnRes.textContent = "O resultado da soma é "+s+".";
}