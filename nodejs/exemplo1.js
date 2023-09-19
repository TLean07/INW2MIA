function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'OI turma 2MIA')
.then(frase => frase.concat(" texto da promise!!!"))
.then(novaFrase => console.log(novaFrase))
