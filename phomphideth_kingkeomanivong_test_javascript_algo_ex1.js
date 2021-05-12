let toVerify = [[], [], [], [], [], [], [], [], []];

function readTable(tableSource, tableTarget) {
    if (tableSource.length === 9)
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                tableTarget[i][j] = tableSource[i].charAt(j * 2);
            }
        }
}

function affiche(table) {
    let myTableHTML = ''; // '<table id="sudoku-table">';
    for (let i = 0; i < 9; i++) {
        myTableHTML += '<tr>'
        for (let j = 0; j < 9; j++) {
            myTableHTML += '<td>'+table[i][j]+'</td>';
        }
        myTableHTML += '</tr>'
    }
    let elt = document.getElementById('sudoku-table');
    elt.innerHTML = myTableHTML;
}

// Lecture de la table array_number dans toVerify
readTable(array_number,toVerify);
affiche(toVerify);