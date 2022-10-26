"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
function deleteCharacter(req, res) {
    const id = Number(req.params.id);
    const index = data_1.characters.findIndex(character => character.id === id);
    data_1.characters.splice(index, 1);
    res.status(200).end();
}
exports.default = deleteCharacter;
//# sourceMappingURL=deleteCharacter.js.map