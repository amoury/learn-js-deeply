/* 
 ** CHILD CONSTRUCTOR FUNCTIONS - 
 ** Constructor functions that inherit properties and methods from other constructor functions
 */

var latestId = 0,
    draft,
    post;


function Content(obj) {

    this.id = obj.id || null;
    this.title = obj.title || null;
    this.slug = obj.slug || null;

    this.render = function render() {
        console.log(this);
    }

}

function Post(obj) {
    //.call allows us to assign any object to the keyword 'this'. So in this case, it assigns Post to the keyword 'this'.
    // This allow us to use Content function and direct 'this' in 'this.id' to Post instead of Content.
    /* 
    It is as if  
  
      this.id = obj.id || null;
      this.title = obj.title || null;
      this.slug = obj.slug || null;

      this.render = function render() {
        console.log(this);
      }

    this whole code was here.
  
    */

    Content.call(this, obj);
    this.status = obj.status || 'publised';
    this.categories = obj.categories || [];

}

function Draft(obj) {

    obj.title = `DRAFT: ${obj.title}`;
    Post.call(this, obj);
    this.status = 'draft';


}

draft = new Draft({
    id: getNewId(),
    title: 'New Post!',
    categories: [1]
});

post = new Post({
    id: getNewId(),
    title: 'New Post!',
    categories: [1, 2, 3]
});


// draft.render();
// post.render();

console.log(
    'Post.isPrototypeOf( post ):',
    Post.isPrototypeOf(post)
);
console.log(
    'post.constructor === Post:',
    post.constructor === Post
);
console.log(
    'post.constructor.name:',
    post.constructor.name
);
console.log(
    'post instanceof Post:',
    post instanceof Post
);


function getNewId() {
    return ++latestId;
}