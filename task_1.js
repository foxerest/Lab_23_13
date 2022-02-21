const str = 'Javascript (JS) is a scripting languages, primarily used on the Web. It is used to enhance HTML pages and is commonly found embedded in HTML code';
const separators = ['\\. ', '\\.', ' \\(', '\\) ', '\\!', '\\?', '\\', '\\/', '\\+', '\\-', '\\*', '\\, ', '\\; ', ' '];
const words = str.split(new RegExp(separators.join('|'), 'g'));
console.log(`Here is your string: ${str}`);
console.log(words);
