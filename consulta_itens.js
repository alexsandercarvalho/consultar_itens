let itemProcurado = 'machado';  // ENTRADA DE DADOS 
const itensNaMochila = ['flecha', 'porção', 'escudo', 'machado'];
const quantidade = [10, 3, 2, 20];

function solucao() {
const found = itensNaMochila.find(element => element === itemProcurado);
if (found === itemProcurado) {
result = itensNaMochila.indexOf(found);
console.log(quantidade[result]);  
}
else
{ if (found !== itemProcurado) {console.log(0);}
}}
const event = solucao(); 
 
 