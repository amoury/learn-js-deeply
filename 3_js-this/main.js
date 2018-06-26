var post = {
  id: 1,
};

var UI = {
  render: function(id = 0, section = 'body' ) {
    console.log(this.id, id, section);
  }
};

/* 
** Both 'CALL' and 'APPLY' methods bind the object and call the function at the same time.
*/

// CALL 
UI.render.call(post, 10, 'div');

// APPLY
UI.render.apply(post, [10, 'div']);


/* 
** 'Bind' also can be used to bind the 'this' to a specific Object, but it does not call the function
*/

var r = UI.render.bind(post);
r(3, 'h1');


