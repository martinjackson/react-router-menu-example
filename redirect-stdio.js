var util = require('util');


function hook_stdout(callback) {
    var old_write = process.stdout.write

    process.stdout.write = (function(write) {
        return function(string, encoding, fd) {
            write.apply(process.stdout, arguments)
            callback(string, encoding, fd)
        }
    })(process.stdout.write)

    return function() {
        process.stdout.write = old_write
    }
}

var unhook = hook_stdout(function(string, encoding, fd) {
    util.debug('stdout: ' + util.inspect(string))
})

console.log('Starting the dev web server...');

unhook();

