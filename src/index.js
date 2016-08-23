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
        console.error(chalk.bgRed(fMsg));
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

/** I set up a new function with 2 parameters:
* vn (Version Number)
* vt (Version Type)
**/
exports.vni = (vn, vt) => {
  const split = vn.split('.');

// I created three (3) variables for the three possible version types
  let major = split[0];
  let minor = split[1];
  let patch = split[2];

// Run nested if/else statement to get to proper message
// If the version type (vt) is major...
  if (vt.toLowerCase() === 'major') {
    // major assumes the version number (vn) entered...
    major++;
    // and this line is output
    exports.debug(`You have changed your major number to ${major}`);
    // If the vt is minor...
  } else if (vt.toLowerCase() === 'minor') {
    // minor assumes the vn entered...
    minor++;
    // and this line is output
    exports.debug(`You have changed your minor number to ${minor}`);
    // If the vt is patch...
  } else if (vt.toLowerCase() === 'patch') {
    // patch assumes the vn entered...
    patch++;
    // and this line is output
    exports.debug(`You have changed your patch number to ${patch}`);
  } else {
    exports.debug('There has been no change to your version number.');
  }

// I create a variable that will display the completed version number..
  const version = `${major}.${minor}.${patch}`;
// when returned
  return version;
};
