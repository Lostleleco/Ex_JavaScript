class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`${this.nome} está fazendo um som.`);
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome} está latindo.`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        console.log(`${this.nome} está miando.`);
    }
}


const rex = new Cachorro('Rex', 5, 'Labrador');
const bella = new Cachorro('Bella', 3, 'Bulldog');
const whiskers = new Gato('Whiskers', 2, 'Cinza');

rex.emitirSom();  
bella.emitirSom();  
whiskers.emitirSom();  
