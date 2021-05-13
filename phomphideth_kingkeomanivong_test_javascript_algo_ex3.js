// check erreurs par lignes
function checkLineError(table) {

    for (let i = 0; i < table.length; i++) {
        let testLine = table[i];
        let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        readLineTable(testLine, matrix);
        let res = isUniqDigit9Table(matrix);

        if (!res) {
            let id = 'table-error-line' + i;
            afficheErrorTable(matrix, 'Line', i, id);
            numberOfError++;
        }
    }
}

// check erreurs par colonnes
function checkColError(table) {

    for (let i = 0; i < table.length; i++) {

        let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        readColTable(table, i, matrix);
        console.log(matrix);
        let res = isUniqDigit9Table(matrix);

        if (!res) {
            let id = 'table-error-column' + i;
            afficheErrorTable(matrix, 'Column', i, id);
            numberOfError++;
        }
    }
}

// check erreurs par regions
function checkRegionError(table) {

    for (let i = 0; i < table.length; i++) {

        let matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

        console.log('Testing R:' + i);
        readRegionTable(table, i, matrix);

        let res = isUniqDigit9Table(matrix);

        if (!res) {
            let id = 'table-error-region' + i;
            afficheErrorTable(matrix, 'Region', i, id);
            numberOfError++;
        }
    }
}

// Affichage Erreur Lignes/Col/Region
function afficheErrorTable(table, typeError, num, idTableHTML) {
    num++;
    let myTableHTML = '<tr><td>' + typeError + ' ' + num + ' incorrect:</td>';
    for (let i = 0; i < table.length; i++) {

        for (let j = 0; j < table[i].length; j++) {
            myTableHTML += '<td>' + table[i][j] + '</td>';
        }

    }
    myTableHTML += '</tr>';
    let elt = document.getElementById(idTableHTML);
    elt.innerHTML = myTableHTML;
}

// Lecture tables
function readLineTable(tableLineSource, tableTarget) {
    console.log('readTableLine:tableLineSource.length=' + tableLineSource.length);
    let l = 0;
    let c = 0;
    for (let i = 0; i < 9; i++) {

        tableTarget[l][c++] = parseInt(tableLineSource.charAt(i * 2));
        if (c > 2) { c = 0; l++; }
    }
}

function readColTable(tableSource, colNumber, tableTarget) {

    let l = 0;
    let c = 0;
    for (let i = 0; i < 9; i++) {
        tableTarget[l][c++] = parseInt(tableSource[i][colNumber]);
        if (c > 2) { c = 0; l++; }
    }
}

function readRegionTable(tableSource, regionNumber, tableTarget) {

    let l = 0;
    let c = 0;
    let startLine;
    let startColumn;

    switch (regionNumber) {
        case 0:
            startLine = 0;
            startColumn = 0;
            break;

        case 1:
            startLine = 0;
            startColumn = 3;
            break;

        case 2:
            startLine = 0;
            startColumn = 6;
            break;

        case 3:
            startLine = 3;
            startColumn = 0;
            break;

        case 4:
            startLine = 3;
            startColumn = 3;
            break;

        case 5:
            startLine = 3;
            startColumn = 6;
            break;

        case 6:
            startLine = 6;
            startColumn = 0;
            break;

        case 7:
            startLine = 6;
            startColumn = 3;
            break;

        case 8:
            startLine = 6;
            startColumn = 6;
            break;
    }
    console.log('startLine:'+startLine);
    console.log('startColumn:'+startColumn);
    for (let i = startLine; i < (startLine + 3); i++) {
        for (let j = startColumn; j < (startColumn + 3); j++) {
            tableTarget[l][c++] = parseInt(tableSource[i][j]);
            if (c > 2) { c = 0; l++; }
        }
    }
}

let numberOfError = 0;
checkLineError(array_number);
checkColError(toVerify);
checkRegionError(toVerify);

let resultHTML = document.getElementById('check-result');
if (numberOfError > 0) {
    resultHTML.innerHTML = '<a></a>There are error(s):';
} else {
    resultHTML.innerHTML = '<a>The table is correct.</a>';
}

