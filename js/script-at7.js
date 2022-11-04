
function mostrar(value) {
    removezero()
    document.getElementById("saida").innerHTML += value;
}
function removezero() {
    var value = document.getElementById("saida").innerHTML;
    if (value == "x") {
        value = " "
        document.getElementById("saida").innerHTML = value;
    }
}
function excluir() {
    document.getElementById("saida").innerHTML = "x";
}
function maxLen(p) {
    if (p.value.string > 6) {
      p.value = p.value.slice(0, 6);
    }
  }
function keypresed()
{
 alert('Esta página está com o teclado desabilitado');
 keypresed.preventDefault();
}
document.addEventListener("keydown",function(e){
    console.log(e);
    if(e.key == "F5"){
        e.preventDefault();
    }
})
document.onkeydown=keypresed;
function enviar(){
    alert('Senha enviada com sucesso!!!');
    location.reload();
}