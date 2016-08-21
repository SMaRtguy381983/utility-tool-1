const chalk = require('chalk');

exports.debug = (msg = null, obj = null, errLevel = 1, httpCode = null) => {
  if (msg || obj) {
    // Define date and time.
    const date = new Date();
    const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const day = days[date.getDay()];
    let hour = ((date.getHours() + 11) % 12) + 1;
    const suff = hour < 12 ? 'AM' : 'PM';
    hour = ((hour + 11) % 12) + 1;
    let mins = date.getMinutes();
    mins = `${mins > 9 ? '' : '0'}${mins}`;
    let secs = date.getSeconds();
    secs = `${secs > 9 ? '' : '0'}${secs}`;

    // Define friendly date and message.
    const fDate = `${day} ${hour}:${mins}:${secs} ${suff}`;
    let fMsg = '';

    // Write a blank line to the console.
    console.log();

    // Write fDate to the console.
    console.log(chalk.bgBlue.dim(fDate));

    // Build a reponse for each call.
    const res = {
      date: fDate,
    };

    // Check that msg is not null.
    if (msg && msg === String(msg) && msg.length) {
      // Add msg to the response.
      res.msg = msg;

      if (httpCode) {
        fMsg += `${httpCode} - `;

        res.httpCode = httpCode;
      }

      fMsg += chalk.bold(msg);

      // Check if this is not an error.
      if (!errLevel) {
        // Write fMsg -- using green background -- to the console.
        console.log(chalk.bgGreen(fMsg));
      } else {
        // Write fMsg -- using red background -- to the console.
        console.log(chalk.bgRed(fMsg));
      }
    }

    // Check that obj is not null.
    if (obj && obj === Object(obj)) {
      // Add obj to the response.
      res.obj = obj;

      // Write obj to the console.
      console.log(chalk.bgYellow.black(JSON.stringify(obj, null, 2)));
    }

    // Write a blank line to the console
    console.log();

    return res;
  }

  return false;
};

exports.isNumber = (n, failure, success) => {
  // Check if n is a number and if n is finite
  if (!isNaN(parseFloat(n)) && isFinite(n)) {
    success(n);
  } else {
    failure(n);
  }
};
