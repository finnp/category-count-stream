var categorycount = require('./')

var countFood = categorycount('food', function (result) {
  console.log(result)
})

countFood.write({food: 'banana'})
countFood.write({food: 'tofu'})
countFood.write({food: 'tofu'})
countFood.write({bla: 'blub'})
countFood.end()