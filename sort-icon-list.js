const input = ``;

const output = input.split('\n').sort((a, b) => {
  var x = a.split('|')[2] ? parseInt(a.split('|')[2].replace(/,/g, '')) : 0;
  var y = b.split('|')[2] ? parseInt(b.split('|')[2].replace(/,/g, '')) : 0;
  return x === y ? 0 : x > y ? -1 : 1;
}).join('\n');

console.log(output);
