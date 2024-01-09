const fs = require('fs');
const path = require('path');
// Made by
// https://www.youtube.com/@flytothespace

const files = fs.readdirSync(path.join(__dirname, 'files'));
files.forEach(fileName => {
    const Extention = path.extname(fileName).replace('.', '')
    try {
        fs.mkdirSync(path.join(__dirname, `files/${Extention}`))
    } catch (error) {
        if (error.message.includes('file already exists')){}
        else {
            console.log(error.message)
        }
    }
    fs.renameSync(path.join(__dirname, `files/${fileName}`), path.join(__dirname, `files/${Extention}/${fileName}`))
});
console.log(files)
