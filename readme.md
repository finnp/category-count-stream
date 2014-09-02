# category-count-stream

Count occurances of nominal categories in a JSON object streams of a given key.

Install with `npm install category-count-stream`.

## Example

```js
var categorycount = require('category-count-stream')

var countFood = categorycount('food', function (result) {
  console.log(result) // outputs { banana: 1, tofu: 2, missing: 1 }
})

countFood.write({food: 'banana'})
countFood.write({food: 'tofu'})
countFood.write({food: 'tofu'})
countFood.write({bla: 'blub'})
countFood.end()
```

## CLI

If you install it with `npm install category-count-stream -g`, there will
be the `category-count` tool available.

Given a file `food.ldjson`
```
{"food": "tofu"}
{"food": "tofu"}
{"food": "tofu"}
{"food": "banana"}
{"bla": "blub"}
```

This command will return the following:
```
$ category-count food < food.ldjson
{"tofu":3,"banana":1,"missing":1}
```