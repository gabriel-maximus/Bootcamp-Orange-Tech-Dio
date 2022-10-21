class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }
    classificarIMC(){
        let imc = this.calcularIMC();
        if (imc < 18.5){
            return "Abaixo do Peso";
        }
        else if (imc>=18.5 && imc<25){
            return "Peso Normal";
        }
        else if(imc>=25 && imc<30){
            return "Acima do Peso";
        }
        else{
            return "Obesidade";
        }
    }
}

const Jose = new Pessoa("Jose", 70, 1.75);
console.log(Jose.calcularIMC());
console.log(Jose.classificarIMC());

const Gabriel = new Pessoa("Gabriel", 55, 1.70);
console.log(Gabriel.calcularIMC());
console.log(Gabriel.classificarIMC());
