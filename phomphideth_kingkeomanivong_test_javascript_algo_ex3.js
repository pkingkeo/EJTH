// Liste erreur par lignes
function listLineError(table) {

    for (let i = 0; i < table.length; i++) {
        let testLine = table[i];
        let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        console.log('Testing L:' + i);
        readLineTable(testLine, matrix);
        let res = isUniqDigit9Table(matrix);

        if (!res) {
            let id = 'table-error-line' + i;
            afficheTableLine(matrix, i, id);
        }
    }
}


function afficheTableLine(tableLine, numLine, idTableHTML) {
    let myTableHTML = '<tr><td>Line ' + numLine + ' incorrect:</td>';
    for (let i = 0; i < tableLine.length; i++) {

        for (let j = 0; j < tableLine[i].length; j++) {
            myTableHTML += '<td>' + tableLine[i][j] + '</td>';
        }

    }
    myTableHTML += '</tr>';
    let elt = document.getElementById(idTableHTML);
    elt.innerHTML = myTableHTML;
}

function readLineTable(tableLineSource, tableTarget) {
    console.log('readTableLine:tableLineSource.length=' + tableLineSource.length);
    let l = 0;
    let c = 0;
    for (let i = 0; i < 9; i++) {

        tableTarget[l][c++] = parseInt(tableLineSource.charAt(i * 2));
        if (c > 2) { c = 0; l++; }
    }
}

listLineError(array_number);