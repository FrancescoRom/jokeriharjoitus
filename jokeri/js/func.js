// Haetaan tarvittavat DOM-elementit
const newRowBtn = document.getElementById('newRowBtn');
const jokerTable = document.getElementById('jokerTable');
const rowCountElement = document.getElementById('rowCount');

let rowCount = 0;  // Alustetaan rivien lukumäärä

// Lisätään kuuntelija painikkeelle
newRowBtn.addEventListener('click', addNewRow);

function addNewRow() {
    const newRow = jokerTable.insertRow();  // Lisätään uusi rivi taulukkoon

    // Luodaan 7 uutta solua ja lisätään ne riviin
    for (let i = 0; i < 7; i++) {
        const cell = newRow.insertCell();
        cell.textContent = Math.floor(Math.random() * 10); // Arvotaan numero 0-9 väliltä
    }

    // Päivitetään rivien lukumäärä
    rowCount++;
    rowCountElement.textContent = rowCount;
}
