var latestId = 0,
    content = {
        id: getNewId(),
        title: 'Hello',
        render() {
            console.log(this);
        }

    },
    post,
    comment;


post = Object.assign({}, content, { id: getNewId() });
comment = Object.assign({}, post, { id: getNewId(), postId: post.id });


function getNewId() {
    return ++latestId;
}

post.render();
comment.render();


/* 
Notes - Basically Object.assign creates a new copy of the copy and the new copy is totally independent of the original object. It is not a reference to the old object.
*/

// Proof

var originalObj = {
        id: 20,
        name: "John Doe",
        occupation: "Student"
    },
    duplicateObj;

// This is how to create reference to OrginalObj
duplicateObj = originalObj;

console.log(duplicateObj);

originalObj.country = "Germany";

console.log(duplicateObj);

duplicateObj.street = "New Street";

console.log(originalObj);

// This is how to create a copy of the object that is independent of the original

duplicateObj = Object.assign({}, originalObj);
console.log(duplicateObj);

originalObj.university = "New University";
console.log("Duplicate Object: ", duplicateObj); // Doesn't show University Property

console.log("Original Object : ", originalObj);