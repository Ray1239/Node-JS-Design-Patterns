const fs = require('fs');
function loadModule(filename, module, require) {
    var wrappedSrc = 
        '(function(module, exports, require) {' + 
        fs.readFileSync(filename, 'utf-8') + 
        '}) (module, module.exports, require);';
    eval(wrappedSrc);
}

var requireSim = function(moduleName) {
    console.log('Require invoked for module: ' + moduleName);
    var id = requireSim.resolve(moduleName);
    if (requireSim.cache[id]) {
        return requireSim.cache[id].exports;
    }

    var module = {
        exports: {},
        id: id
    }

    requireSim.cache[id] = module;
    loadModule(id, module, requireSim);
    return module.exports; 
};

requireSim.cache = {};
requireSim.resolve = function(moduleName) {
    
}