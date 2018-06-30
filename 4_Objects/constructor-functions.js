var latestId = 0,
    post;

function getNewId() {
    return ++latestId;
};

function Content(obj) {

    this.id = getNewId();
    this.title = obj.title || null;
    this.slug = obj.slug || null;

    this.render = function render() {
        console.log(this);
    }

}

post = new Content({ title: 'Hello POST' });
console.log(post);

console.log('Content.isPrototypeOf( post ): ', Content.isPrototypeOf(post));
console.log('post.constructor === Content: ', post.constructor === Content);

/* 
 ** NOTES obj instaceof Func - checks for function as a constructor in an object's inheritance chain.
 */
console.log('post instanceof Content: ', post instanceof Content);