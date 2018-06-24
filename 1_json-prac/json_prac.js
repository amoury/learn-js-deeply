var jsonObj = '{ "id": 2, "title": "First JSON String", "content": "loremElit in adipisicing adipisicing Lorem est nostrud tempor." }';

const objInit = {
  id: 5,
  title: "lorem Fugiat anim officia amet ex.",
  content: "loremCupidatat deserunt incididunt enim occaecat elit eiusmod esse incididunt nulla. Sit velit sit quis sunt pariatur. Reprehenderit laboris laboris reprehenderit cupidatat ut ex ea duis Lorem minim voluptate aliqua. Consequat laborum nulla amet magna adipisicing quis anim veniam commodo pariatur deserunt qui nostrud. Minim ad ipsum consequat commodo deserunt aliquip labore dolor ipsum elit. Tempor sunt sit velit ad consectetur consequat commodo pariatur laboris id elit cillum tempor amet."
}

function replacer( key, value ) {
  return value;
}

console.log(JSON.parse(jsonObj));

console.log(JSON.stringify(objInit, replacer, ' '));
