let toVerify = [[], [], [], [], [], [], [], [], []];

function readTable(tableSource, tableTarget) {
    //console.log('readTable:tableSource.length='+tableSource.length )

    for (let i = 0; i < tableSource.length; i++) {
        for (let j = 0; j < tableTarget.length; j++) {
            tableTarget[i][j] = tableSource[i].charAt(j * 2);
        }
    }
}

function affiche(table,tabId) {
    let myTableHTML = '';
    for (let i = 0; i < table.length; i++) {
        myTableHTML += '<tr>'
        for (let j = 0; j < table[i].length; j++) {
            myTableHTML += '<td>'+table[i][j]+'</td>';
        }
        myTableHTML += '</tr>'
    }
    let elt = document.getElementById(tabId);
    elt.innerHTML = myTableHTML;
}


// Lecture de la table array_number dans toVerify
readTable(array_number, toVerify);
affiche(toVerify, 'sudoku-table');
