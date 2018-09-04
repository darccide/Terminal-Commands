const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
      const filesToString = files.reduce((acc, file) => {
        return `${acc} ${file} `;
      }, '');

      console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('new-file.txt', 'File was created', 'utf8', (err) => {
    if (err) throw err;

    console.log("File created successfully!");
  })
};

module.exports.mkdir = () => {
  fs.mkdir('/new-directory', (err) => {
    if (err) throw err;
    console.log("Directory created successfully!");
  })
};
