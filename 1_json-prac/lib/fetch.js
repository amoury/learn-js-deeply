'use strict';

/* 
** Using Fetch to make API calls
*/

var url = 'https://jsonplaceholder.typicode.com/posts';
var content = document.getElementById('content');

fetch(url).then(function (response) {
  response.json().then(function (data) {

    data.forEach(function (element) {

      var title = document.createElement("h2");
      content.appendChild(title);
      title.innerText = element.title;

      var body = document.createElement("p");
      content.appendChild(body);
      body.innerText = element.body;
    });
  });
}).catch(function (err) {
  return console.log('Fetch Error : ', err);
});