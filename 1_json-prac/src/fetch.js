/* 
** Using Fetch to make API calls
*/

const url = 'https://jsonplaceholder.typicode.com/posts';
const content = document.getElementById('content');

fetch(url)
  .then(response => {
    response.json().then(data => { 
      
      data.forEach(element => {

        var title = document.createElement("h2");
        content.appendChild(title);
        title.innerText = element.title;

        var body = document.createElement("p");
        content.appendChild(body);
        body.innerText = element.body;
      });
    });
  })
  .catch( err => console.log('Fetch Error : ', err));

