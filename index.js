import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
.prompt([
{"message":"Type your URL",name:"URLName"}
])
.then((answers) => {
    var answer=answers.URLName;
    var qr_svg = qr.image(answer);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    fs.writeFile("url.txt",answer,(err)=>{
          if(err) throw err;
         console.log("Data Inserted")
    })
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});

