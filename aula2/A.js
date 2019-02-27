var zipper = require("zip-local");
 
// zipping a file
zipper.zip("./hello-world.cpp", function(error, zipped) {
 
    if(!error) {
        zipped.compress(); // compress before exporting
 
        var buff = zipped.memory(); // get the zipped file as a Buffer

        zipped.save("../aula2.zip", function(error) {
            if(!error) {
                console.log("saved successfully !");
            }
        });
    }
});