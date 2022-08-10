"use strict";
const n1 = 3;
const n2 = 4;
function sum(n1, n2) {
    return n1 + n2;
}
const sayHello = (name) => {
    console.log("Hello", name || "world");
};
function method(condition, callback) {
    if (condition) {
        callback();
    }
}
function buscarCarroPorNome(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    return frota.filter((carro) => {
        return carro === marca;
    });
}
const frota = ["Ford", "Toyota", "Fiat", "Sabaru", "Chevrolet"];
console.log(buscarCarroPorNome(frota, "Toyota"));
console.log(sum(n1, n2));
sayHello();
//# sourceMappingURL=funcao.js.map