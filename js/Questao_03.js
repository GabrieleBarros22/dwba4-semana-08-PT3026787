function mostrarDadosAluno(nome, nota1, nota2) {
    let multiplicacaoNota1 = nota1 * 0.6;
    let multiplicacaoNota2 = nota2 * 0.4;
    let notaTotal = multiplicacaoNota1 + multiplicacaoNota2;

    alert(`Nome: ${nome}\nNota 1: ${nota1}\nNota 2: ${nota2}`);
    alert(`Nota Total: ${notaTotal}`);
}

let alunos = [
    { nome: "João da Silva", nota1: 7, nota2: 8.5 },
    { nome: "Gabriele Oliveira", nota1: 9, nota2: 6.5 },
    { nome: "Maria Morais", nota1: 8, nota2: 5.5 }
];

alunos.forEach(aluno => {
    mostrarDadosAluno(aluno.nome, aluno.nota1, aluno.nota2);
});
