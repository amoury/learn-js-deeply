'use strict';
var container = document.getElementById( 'primary' ),
    posts = [
      {
        id: 1,
        slug: 'hello-world',
        title: 'Hello World!',
        content: 'Lorem to the ipsum'
      },
      {
        id: 2,
        slug: 'hello-js',
        title: 'Hello JavaScript!',
        content: 'Ipsum var lorum'
      },
      {
        id: 3,
        slug: 'advanced-js',
        title: 'Advanced JS',
        content: 'Mar vax exelum'
      }
    ];


for ( let post of posts ) {

  renderPost( post );

}


function renderPost( post ) {

    var h2 = document.createElement( 'h2' ),
        markup = '';

    markup += `<a href="#${post.slug}" data-id="${post.id}">`;
    markup += post.title;
    markup += '</a>';

    h2.innerHTML = markup;

    h2.querySelector( 'a' ).addEventListener( 'click', logTitle.bind(post), false );

    container.appendChild( h2 );

}

function logTitle( event ) {
  // console.log( this );
  console.log( this.title + ': ' + this.content );
}
