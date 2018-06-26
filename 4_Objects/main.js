// 'use strict';

var post = {
  id: 1,
  title: 'New Post'
};

Object.defineProperty(
  post,
  'location',
  {
    value: 'AE',
    writable: false,
    configurable: true,
    enumerable: false
  }
);


// delete post.location;

console.log(post)

for(var article in post) {
  console.log(article);
}

post.location = 'DXB';
console.log(post);