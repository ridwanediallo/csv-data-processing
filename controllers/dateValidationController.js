const csvToJson = require('../utils/csvToJson');

const csvFilePath = './data/ecriture_comptable_test.csv';

csvToJson(csvFilePath, (err, jsonData) => {
  if (err) {
    console.error('Error reading CSV file:', err);
    return;
  }

  // Example validation
  jsonData.forEach((row) => {
    const date_de_valeur = row.date_de_valeur;
    const moisComptable = row.mois_comptable;
    const anneeComptable = row.annee_comptable;

    // Extract month and year from date_de_valeur
    const monthInValueDate = parseInt(date_de_valeur.substring(3, 5));
    const yearInValueDate = parseInt(date_de_valeur.substring(6));

    // Extract month and year from mois_comptable
    const month = parseInt(moisComptable.substring(1));
    const year = parseInt(anneeComptable.substring(2));

    // Checking Date validation
    if (month !== monthInValueDate || year !== yearInValueDate) {
      console.log('Date does not match in row:', row.numero);
    } else {
      console.log('Date is valid');
    }
  });
});
