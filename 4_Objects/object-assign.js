var latestId = 0,
    content = {
        id: getNewId(),
        title: 'Hello',
        render() {
            console.log(this);
        }

    },
    post;


post = Object.assign({}, content, { id: getNewId() });


function getNewId() {
    return ++latestId;
}

post.render();
// console.log(content);

// console.log(content.isPrototypeOf(post));