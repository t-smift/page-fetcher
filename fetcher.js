const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);

// characters = something.Content-Length

request(args[1], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(args[0], body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${args[0]}`);
  });
});




