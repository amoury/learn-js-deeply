class User {

    constructor(usr) {
        this.username = usr.username;
        this.first = usr.first;
        this.last = usr.last;
    }

    get displayName() {
        return `${this.first} ${this.last}`;
    }

    set displayName(displayName) {
        var name = displayName.split(' ');
        this.first = name[0];
        this.last = name[1];
    }

}

var zgordon = new User({
    username: 'zgordon',
    first: 'Zac',
    last: 'Gordon'
});

// console.log( zgordon );
// console.log( zgordon.displayName );
//
// zgordon.displayName = 'ZacPress Wordstein';
//
// console.log( zgordon);


// // Native Object get and set
// var user = {
//   first: 'Zac',
//   last: 'Gordon',
//   get fullName() {
//     return `${this.first} ${this.last}`;
//   },
//   set fullName(fullName) {
//     var name = fullName.split(' ');
//     this.first = name[0];
//     this.last = name[1];
//     return `${this.first} ${this.last}`;
//   }
// }
//
// console.log(user.fullName);
// user.fullName = 'ZacPress Wordstein';
// console.log(user);
// console.log(user.fullName);