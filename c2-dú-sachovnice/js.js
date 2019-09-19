let table = "";
let column = prompt("Zadejte sem prosim pocet sloupcu");
let row = prompt("Zadej sem prosim pocet radku");

for(let a = 0;a < row; a++) {
    table += '<tr>';
    for(let b = 0;b < column; b++) {
        table += '<td>';
    }
    table += '</tr>';
}
document.write('<table>' + table + '</table>');
