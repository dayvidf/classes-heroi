class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;

        switch (this.tipo) {
            case "Mago":
                ataque = "Magia";
                break;
            case "Guerreiro":
                ataque = "Espada";
                break;
            case "Monge":
                ataque = "Artes marciais";
                break;
            case "Ninja":
                ataque = "Shuriken";
                break;
            default: "Ataque não registrado"
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
const heroi1 = new heroi("Shiro", 18, "Mago");
heroi1.atacar();

const heroi2 = new heroi("Shiyva", 20, "Guerreiro");
heroi2.atacar();

const heroi3 = new heroi("Guil", 30, "Monge");
heroi3.atacar();

const heroi4 = new heroi("Wolf", 40, "Ninja");
heroi4.atacar();

