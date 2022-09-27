/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

const readFile = Promise.promisify(fs.readFile);
const requestGet = Promise.promisify(request.get);

// TypeError: failed to fetch (the text may vary)
// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return readFile(filePath, 'utf-8')
    .then(file => file.split('\n')[0])
    .catch(err => Promise.reject(err))
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return requestGet(url)
    .then(response => response.statusCode)
    .catch(err => Promise.reject(err))
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
