
const fs = require('fs');
const csvParser = require('csv-parser');
const { resolve } = require('path');

// Fonction pour télécharger et traiter un fichier CSV
async function downloadAndProcessCSV(filepath) {
    try {

        // Créer un flux de lecture du fichier CSV
        const readStream = fs.createReadStream(filepath);
        const csvData = [];
        readStream.pipe(csvParser({
            delimiter: ';',
            columns: true,
            trim: true, //ignore all whitespaces around the delimiter
            relax_column_count: true,
            skip_empty_lines: true,
            skip_records_with_empty_values: true
        })).on('data', (data) => csvData.push(data))
            .on('end', () => {
                //Here you have the entire contents of the file and can process it  according to your needs
                console.log(csvData);
            });

        //Data validation part


    } catch (err) {
        console.error(`Error while processing csv file ${filename} : `, err);
    }
}

const filepath = './data/ecriture_comptable_test.csv';
const data = downloadAndProcessCSV(filepath);
console.log(data);

