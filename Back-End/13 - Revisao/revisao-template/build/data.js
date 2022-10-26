"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = exports.movies = void 0;
const type_1 = require("./type");
exports.movies = [
    {
        id: 1,
        title: "X-men: O Filme",
        year: 2000
    },
    {
        id: 2,
        title: "Deadpool",
        year: 2016
    },
    {
        id: 3,
        title: "Mãos Talentosa",
        year: 1999
    }
];
exports.characters = [
    {
        id: 1,
        name: "Storm",
        gender: type_1.GENDER.FEMALE
    },
    {
        id: 2,
        name: "Deadpool",
        gender: type_1.GENDER.OTHER,
        description: "Sexy motherf***"
    },
    {
        id: 3,
        name: "Colossus",
        gender: type_1.GENDER.MALE
    }
];
//# sourceMappingURL=data.js.map