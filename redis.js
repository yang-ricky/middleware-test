var redis = require('redis')

var client = redis.createClient(6379, '101.132.172.54')
client.on('error', function (err) {
  console.log('Error ' + err);
});

// 1 键值对
client.set('name', 'ricky', redis.print);
client.get('name', function(err, value) {
  if (err) throw err;
  console.log('Got: ' + value)
})