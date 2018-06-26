var post = {
  id: 1,
  title: 'Hello JS'
};

Object.defineProperty (
  post,
  'location',
  {
    value: 'DXB',
    configurable: true,
    enumerable: true,
    writable: true
  }
);

console.log( post );
console.log( Object.getOwnPropertyDescriptor(post, 'location'));
console.log( Object.getOwnPropertyDescriptors(post));
