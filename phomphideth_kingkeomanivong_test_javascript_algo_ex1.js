let toVerify = [[], [], [], [], [], [], [], [], []];

function readTable(tableSource, tableTarget) {
    //if (tableSource.length === 9) {
        for (let i = 0; i < tableSource.length ; i++) {
            for (let j = 0; j < 9 ; j++) {
                tableTarget[i][j] = tableSource[i].charAt(j * 2);
            }
        }
    //}
}
function affiche(table,tabId) {
    let myTableHTML = ''; // '<table id="sudoku-table">';
    for (let i = 0; i < table.length; i++) {
        myTableHTML += '<tr>'
        for (let j = 0; j < table.length; j++) {
            myTableHTML += '<td>'+table[i][j]+'</td>';
        }
        myTableHTML += '</tr>'
    }
    let elt = document.getElementById(tabId);
    elt.innerHTML = myTableHTML;
}

// Lecture de la table array_number dans toVerify
readTable(array_number,toVerify);
affiche(toVerify,'sudoku-table');
