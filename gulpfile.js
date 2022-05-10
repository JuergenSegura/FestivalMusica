const { src, dest, watch } = require ("gulp");
const sass = require ("gulp-sass")(require("sass"));

function css(done) {

    src('src/scss/app.scss')//Identificar
        .pipe( sass() )//Compilar
        .pipe( dest("build/css"));//Almacenrla en el disco duro

    done();//callback que avisa a gulp cuando llegamos al final
}


function dev(done) {
    watch("src/scss/app.scss", css)
}

exports.css = css;

exports.dev = dev;