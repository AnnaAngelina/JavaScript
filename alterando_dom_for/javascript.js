var lista = ['Maçã', 'Banana', 'Limão', 'Arroz', 'Feijão', 'Queijo', 'Pessego', 'Pães', 'Ovo'];
var itens = document.getElementById('lista_mes');
for (var i = 0; i< lista.length; i++) {
    var liol = document.createElement('li');
    var textli = document.createTextNode(lista[i]);
    liol.appendChild(textli);
    itens.appendChild(liol);
}
var n = 2;
console.log(++n)
