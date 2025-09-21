function mostrarDados(){
    var nome = document.getElementById("iptNome").value;
    var sb = document.getElementById("iptSobrenome").value;
    var idade = document.getElementById("iptIdade").value;

    idade = parseInt(idade);

    var spnDados = document.getElementById("spnDados");

    spnDados.innerText = nome + ' | ' + sb + ' | ' + idade;

    

}