class Carro {
    marca;
    cor;
    gasto;

    constructor(cMarca, cCor, cGasto){
        this.marca = cMarca;
        this.cor = cCor;
        this.gasto = cGasto;
    }

    calcularViagem(distancia, preço){
        let calculo = (distancia * this.gasto) * preço;
        return calculo;
    }
}

const uno = new Carro("Fiat", "Prata", 1/12);
const palio = new Carro("Fiat", "Preto", 1/10);

console.log(uno.calcularViagem(70, 5));
console.log(palio.calcularViagem(70, 5));
