var bodyStyle = document.body.style;
var prefixes = ['', '-webkit-', '-moz-'];

/**
 * Change the browser `cursor`.
 *
 * @param {String} type
 */
module.exports = function(type) {
  type = type || 'default';

  for (var i = 0; i < 3; i++) {
    // Prefix browser vendor
    bodyStyle.cursor = prefixes[i] + type;

    // Check if the style was applied
    if (~bodyStyle.cursor.indexOf(type)) return;
  }
};
