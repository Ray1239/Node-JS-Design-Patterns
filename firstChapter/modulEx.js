function Log() {
    console.log('Hello from this module');
}

module.exports.run = function() {
    Log();
}