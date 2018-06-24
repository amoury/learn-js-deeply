const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts';
const postsDiv = document.getElementById('posts');

let posts;


xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    posts = xhr.response;
    posts.forEach(function(element) {


      var title = document.createElement("h1");
      var content = document.getElementById("content");
      content.appendChild(title);
      title.innerText += element.title;



      var body = document.createElement("p");
      content.appendChild(body);
      body.innerText = element.body;

      var hr = document.createElement("hr");
      content.appendChild(hr);
    });
  }
}

xhr.open('GET', url);
xhr.send();
