const chalk = require('chalk');
const fs = require('fs');

function write(str = '') {
  // process.stout.write(`${str}\n`);
  console.log(str);
}

exports.debug = (msg, obj = null, errLevel = 1, status = null) => {
  // Check that DEBUG is true
  if (process.env.DEBUG) {
    // Define date
    const date = new Date();
    const ds = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const d = date.getDay();
    const h = date.getHours();
    const hr = ((h + 11) % 12) + 1;
    const m = date.getMinutes();
    const s = date.getSeconds();
    const suf = h < 12 ? 'AM' : 'PM';

    // Make friendly date and message
    const fDate = `${ds[d]} ${hr}:${m > 9 ? '' : '0'}${m}:${s > 9 ? '' : '0'}${s} ${suf}`;
    const fMsg = `${status ? `${status} - ` : ''}${chalk.bold(msg)}`;

    // Write a blank line to the console
    write();

    // Write fDate to the console
    write(chalk.bgBlue.dim(fDate));

    // Check if this is not an error
    if (!errLevel) {
      // Write fMsg -- using green background -- to the console
      write(chalk.bgGreen(fMsg));
    } else {
      // Write fMsg -- using red background -- to the console
      write(chalk.bgRed(fMsg));
    }

    // Check if obj is not empty
    if (obj && Object.keys(obj).length) {
      // Write obj to the console
      write(chalk.bgYellow.black(JSON.stringify(obj, null, 2)));
    }

    // Write a blank line to the console
    write();

    // Log to file
    let pretty = date + '\n';
    pretty += (status ? status + ' - ' : '') + msg + '\n';
    // Check if obj is not empty
    if (obj && (obj.length > 0 || Object.keys(obj).length > 0)) {
      pretty += JSON.stringify(obj, null, 2) + '\n';
    }
    pretty += '\n';
    fs.appendFile('logs/console.log', pretty, (err) => {
      if (err) {
        write(`\n${chalk.red(err)}\n`);
      }
    });
  }
};
