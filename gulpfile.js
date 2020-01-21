const { src, dest, parallel } = require('gulp');
const toc = require('gulp-markdown-toc');
const jshint = require('gulp-jshint');
const awesomeLint = require('awesome-lint');

// TODO: Add awsome-lint for local checks

function js() {
    return src('*.js')
        .pipe(jshint({esversion: 6}))
        .pipe(jshint.reporter('default'));
}

function gentoc() {
    return src('*.md')
        .pipe(toc())
        .pipe(dest('.'));   
}

exports.gentoc = gentoc;
exports.js = js;

exports.default = parallel(gentoc,js);
