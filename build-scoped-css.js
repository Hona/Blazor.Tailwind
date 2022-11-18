const glob = require('glob');
const {exec} = require('child_process');

glob("**/*.razor.scss", function (er, files) {
    files.forEach(function (file) {
        const command = `npx postcss "${file}" -o "${file.replace('.razor.scss', '.razor.css')}"`;
        console.log(command)
        exec(command)
    });
})
