const fs = require('fs');
const csv = require('csv-parser');

// Function to convert CSV to JSON
module.exports = function csvToJson(csvFilePath, callback) {
  const results = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      callback(null, results);
    })
    .on('error', (err) => {
      callback(err, null);
    });
}
