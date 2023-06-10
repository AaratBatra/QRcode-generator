// window obj doesn't exist instead there is global object
// all variables and functions are scoped with this file called index.js
// Node JS is a runtime environment where we can access libraries of node, modules and also create our own modules

// There are core modules in node for network, os, file system etc. that are constant in all node updates
// all variables and functions defined in this file remain local to this file only called as "module"

// In node, every file is a module and each variable and fuction assigned in this module is local to this module so we need to 
// explicitly change the scope from private to public in order to access data from one module to another 
//const identity = require('./logger.js');
//identity.sayName("hello");
//const fs = require("fs")
import superheroes from "superheroes";
console.log(`my name is ${superheroes.random()}`);
//QR code generator project
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'link',
        message: "Please enter a link to generate qr code. See the qr in qr_img file",
    }
  ])
  .then((answers) => {
    console.log(answers.link)
    let qr_svg = qr.image(`${answers.link}`, {type: 'png', parse_url: answers.link});
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    var i = 1;
    fs.appendFile('C:/Users/Aarat Batra/Dropbox/PC/Desktop/practise/nodepractice/yourLinks.txt', `${answers.link}\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      console.log('some error has occurred')
    }
  });

// identity.sayName('Aarat Batra');

// fabonacci series is a sequence where last two numbers add up and create another number until number of terms satisfies
// It starts with 0 and 1 then 0+1 is 1 then 1+1 is 2 then 2 + 1 is 3 and so on...
// If we use an array, then the last two elements should add at every iteration until condition is met 
function fabonacci(n) {
    fabo_terms = [0,1];
    for(i=1; i<=n; i++) {
        if (i<=2) {
            console.log(fabo_terms);
        }
        else {
            fabo_terms.length = n;
            nextTerm = fabo_terms[n-2] + fabo_terms[n-1]
            fabo_terms[n-2] = fabo_terms[n-1]
            console.log(fabo_terms)
        }  
    }
}
//To get data from an existing file
//fs.readFile('C:/Users/Aarat Batra/Dropbox/PC/Desktop/practise/nodepractice/yourLinks.txt', 'utf8', (err, data) => {
    //if (err) throw err;
    //console.log(data);
//})
//To write on an existing file
// fs.writeFile('C:/Users/Aarat Batra/Dropbox/PC/Desktop/practise/nodepractice/yourLinks.txt', 'This file is now rewritten', (err) => {
//     if (err) throw err;
//     console.log("This file is now written")
// })

/* 
In Node JS, we understand about node modules and npm.
Node is a runtime environment that provides various node modules to do some tasks with JS
http and fs are the most common
http is used to create node js server and fs is for file system.
npm means node package manager that contains all node packages created by community of developers that are open source and provide us useful functions
we can also create packages on our own for our projects and  use them.
*/


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

