function isDigit9Table(table) {
    let listDigit9 = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if ((table.length === 9)) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {

                if (listDigit9.indexOf(table[i][j]) < 0) {
                    return false;
                } else {
                    listDigit9 = listDigit9.filter( elmt => elmt !== table[i][j]);
                }
            }

        }
    } else {
        return false;
    }
    return true;
}
