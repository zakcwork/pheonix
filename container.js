// require dependable and create path
const dependable = require('dependable');

const path = require('path');

const container = dependable.container();

const dependencyList = [
    ['_', 'lodash']
];

dependencyList.forEach(function(val) {
    container.register(val[0], function() {
        return require(val[1]);
    })
})


//create paths to control and assist functions
container.load(path.join(__dirname, '/controlFunctions'));
container.load(path.join(__dirname, '/assistFunctions'));

container.register('container', function() {
    return container;
});

module.exports = container;