'use strict';
exports.__esModule = true;
var axios_1 = require('axios');
var url = 'http://jsonplaceholder.typicode.com/todos/6';
axios_1['default'].get(url).then(function(response) {
  const todo = response.data;

  const Id = todo.ID;
});
