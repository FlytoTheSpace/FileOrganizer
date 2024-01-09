const fs = require('fs');
const path = require('path');

// Made by
// https://www.youtube.com/@flytothespace
// https://github.com/flytothespace/
// Discord: flytothespace.

const files = fs.readdirSync(path.join(__dirname, 'files'));
files.forEach(fileName => {
    const Extention = path.extname(fileName).replace('.', '')
    try {
        fs.mkdirSync(path.join(__dirname, `files/${Extention}`))
        console.log(`Created new Directory ${Extention}`)
    } catch (error) {
        if (error.message.includes('file already exists')){}
        else {
            console.log(error.message)
        }
    }
    
    console.log(`Moving ${fileName} to Directory /files/${ Extention }/${ fileName }`)
    fs.renameSync(path.join(__dirname, `files/${fileName}`), path.join(__dirname, `files/${Extention}/${fileName}`))
});
Console.log("Done! enjoy")