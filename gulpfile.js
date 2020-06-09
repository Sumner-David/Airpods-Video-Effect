
//Easy npm bunch install
// npm i --save-dev gulp gulp-sass gulp-autoprefixer gulp-concat gulp-clean-css


const gulp = require("gulp");
const browserSync = require('browser-sync').create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");

//enter main sass directory here
const mainSassFile = "./src/scss/main.scss";
const mainsassFileOutput = "./src"



const baseDirectoryFolder = './';
//Main index file in base directory folder to watch
const indexFile = 'index.html';

function server() {
    console.log("\r\n Starting BrowserSync \r\n" );

    browserSync.init({
        server: {
            baseDir: baseDirectoryFolder,
            index: indexFile
        },
    });
};

function reload(done) {
    browserSync.reload();
    done();
};



function watchFiles() {
    console.log("\r\n **Beginning Watch** \r\n");
    // gulp.watch('./src/*.html', reload);

    gulp.watch('./index.html', reload);
    gulp.watch("./styles.css", reload);
    gulp.watch("./app.js", reload);
    

  
    
};



//Make a server and watch HTML, JS, & SCSS files
exports.watch = gulp.parallel(server, watchFiles);

