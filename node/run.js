const exec = require('child_process').exec;
const removeDist = "cd ../dist && DEL /F/Q/S *.*"
// const build = "cd ../ && npm run build --prefix ../"; // to run build
const build = "cd ../ && npm run build"; // to run build

const removeDistTask = exec(removeDist +' && ' + build,
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
