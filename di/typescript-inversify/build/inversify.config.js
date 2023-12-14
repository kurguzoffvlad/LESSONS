"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
require("reflect-metadata");
var types_1 = require("./types");
var cli_output_1 = require("./cli-output");
var dog_1 = require("./dog");
var myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind(types_1.TYPES.IOutput).to(cli_output_1.CliOutput);
myContainer.bind(types_1.TYPES.Dog).to(dog_1.Dog);