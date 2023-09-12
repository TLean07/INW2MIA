function falarDepoisde(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        },  segundos * 1000)
    })
}

falarDepoisde(3, 'Oi turma 2MIA')
.then(frase => frase.concat(" texto da promise!!"))
.then(novaFrase => console.log(novaFrase))
