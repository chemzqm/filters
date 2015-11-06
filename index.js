/**
 * Format date to YYYY-MM-DD format
 *
 * @param {Mixed} date
 * @return {String}
 * @api public
 */
exports.ymd = function (date) {
  if(!(date instanceof Date)) date = new Date(date)
  if (!date.getTime()) throw new TypeError('Date [' + date + ']is not a valid argument for Date')
  return date.getFullYear() +
    '-' + ('0' + (1 + date.getMonth())).slice(-2) +
    '-' + ('0' + date.getDate()).slice(-2);
}

/**
 * Format a value to number, with optional precision
 *
 * @param {Mixed} val
 * @param {Number} precision
 * @return {String} format the val to number
 * @api public
 */
exports.number = function (val, precision) {
  var n = parseFloat(val, 0)
  precision || 0
  if (!n) return Number(0).toFixed(precision)
  return n.toFixed(precision)
}

/**
 * Format a number to percentage format
 * 0.34 => 34%
 *
 * @param {Number|String} val
 * @param {Number} precision
 * @return {String}
 * @api public
 */
exports.percentage = function (val, precision) {
  precision = precision || 0
  var n = parseFloat(val)
  if (!n) throw new TypeError('Invalid number [' + val + ']')
  return (n*100).toFixed(precision) + '%'
}

/**
 * typeof for debuging
 *
 * @param {Mixed} val
 * @api public
 */
exports.typeof = function (val) {
  return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

/**
 * Round a number by a specific precision or method
 * @param  {integer} val
 * @param  {integer} precision
 * @param  {string} method
 * @return {string}
 */
exports.round = function (val, precision, method) {
    precision = precision || 0;
    var factor = Math.pow(10, precision);
    var rounder;

    if (method == 'ceil') {
        rounder = Math.ceil;
    } else if (method == 'floor') {
        rounder = Math.floor;
    } else {
        rounder = Math.round;
    }

    return rounder(val * factor) / factor;
}

/**
 * Trim a string, removing leading and trailing whitespace
 * @param  {string} input
 * @return {string} trimmed string
 */
exports.trim = function(input){
  return input && input.replace(/^\s*|\s*$/g, '');
}
