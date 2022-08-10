"use strict";
const sayHello = (name) => {
    console.log("Hello", name || "Wordl");
};
(sayHello(`Aurélio`));
function method(condition, callback) {
    if (condition) {
        callback();
    }
}
function buscarCarroPorNome(frota, marca) {
    if (marca == undefined) {
        return frota;
    }
    return frota.filter((carro) => {
        return carro === marca;
    });
}
const frota = [
    "Ford", "Toyota", "Fiat", "Chervolet", "Susuk", "Kia"
];
console.log(buscarCarroPorNome(frota, "Kia"));
//# sourceMappingURL=funcao.js.map