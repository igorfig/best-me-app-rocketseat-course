const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quais metas foram cumpridas hoje?",
    "Você está com dúvidas em algum assunto? Se sim quais?"
]
const ask = ( index = 0 ) => {
    process.stdout.write(questions[index] + " > ")
}

ask()

const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if(answers.length < questions.length) {
        ask(answers.length);

    } else {
        console.log(answers)
        process.exit()
    }
})


process.on("exit", () => {
    let message 
    // if() {
    //     message = "Não desita, vá atrás de entender aquilo que está com dúvidas"
    // }
    console.log(`
        Bacana!

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu e você poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}  

        Suas metas cumpridas hoje:
        ${answers[3]}

        Suas dúvidas de hoje:
        ${message}
        ${answers[4]}
    
        
        Volte amanhã para novas reflexões!!
    `)
})