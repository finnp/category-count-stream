var fold = require('fold-stream')

function categorycount(key, cb) {
  var count = fold(function (acc, curr) {
    var category = curr[key] || 'missing'
    if(acc[category]) {
      acc[category]++
    } else {
      acc[category] = 1
    }
    return acc
  }, {})
  
  return count(cb)
}

module.exports = categorycount