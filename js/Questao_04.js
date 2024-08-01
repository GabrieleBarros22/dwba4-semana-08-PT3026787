class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

let alunos = [
    new Aluno("Ariel", "Mares", 7, 8.5),
    new Aluno("Rapunzel", "Torres", 6, 9),
    new Aluno("Cinderela", "Sapatins", 8, 7.5),
    new Aluno("Aladin", "Tapetes", 5, 6.5),
    new Aluno("Bela", "Amarela", 9, 8)
];

alunos.forEach(aluno => {
    console.log(`Nome Completo: ${aluno.nomeCompleto()}`);
    console.log(`Média: ${aluno.media()}`);
    console.log(`Situação: ${aluno.situacao()}`);
});
