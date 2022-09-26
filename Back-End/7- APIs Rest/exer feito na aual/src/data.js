"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.USER_ROLE = void 0;
var USER_ROLE;
(function (USER_ROLE) {
    USER_ROLE["NORMAL"] = "NORMAL";
    USER_ROLE["ADMIN"] = "ADMIN";
})(USER_ROLE = exports.USER_ROLE || (exports.USER_ROLE = {}));
exports.users = [
    {
        id: 1,
        name: "Aurélio",
        email: "aurelio@email.com",
        type: USER_ROLE.ADMIN,
        age: 22,
    },
    {
        id: 2,
        name: "Ana",
        email: "Ana@email.com",
        type: USER_ROLE.NORMAL,
        age: 16,
    },
    {
        id: 3,
        name: "Castro",
        email: "castro@email.com",
        type: USER_ROLE.ADMIN,
        age: 41,
    },
    {
        id: 4,
        name: "Israel",
        email: "israel@email.com",
        type: USER_ROLE.NORMAL,
        age: 30,
    },
    {
        id: 5,
        name: "Zeferina",
        email: "zeferina@email.com",
        type: USER_ROLE.ADMIN,
        age: 37,
    },
    {
        id: 6,
        name: "Manasse",
        email: "manasse@email.com",
        type: USER_ROLE.NORMAL,
        age: 33,
    },
];
