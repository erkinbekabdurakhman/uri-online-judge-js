var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const number = parseInt(lines[0]);
let message;
switch (number) {
        case 12:
        message = 'December';
        break;
        case 11:
        message = 'November';
        break;
        case 10:
        message = 'October';
        break;
        case 9:
        message = 'September';
        break;
        case 8:
        message = 'August';
        break;
        case 7:
        message = 'July';
        break;
        case 6:
        message = 'June';
        break;
        case 5:
        message = 'May';
        break;
        case 4:
        message = 'April';
        break;
        case 3:
        message = 'March';
        break;
        case 2:
        message = 'February';
        break;
        case 1:
        message = 'January';
        break;
        }
console.log(message);