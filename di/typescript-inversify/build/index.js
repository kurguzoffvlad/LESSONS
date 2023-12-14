"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_config_1 = require("./inversify.config");
var types_1 = require("./types");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.createDog = function () {
        var dog = inversify_config_1.myContainer.get(types_1.TYPES.Dog);
        dog.bark('bow-wow');
    };
    return App;
}());
var app = new App();
app.createDog();
