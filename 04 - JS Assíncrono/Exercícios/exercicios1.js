var checaIdade = parseInt(prompt('Digite aqui a sua idade: '), 10);

function verificar(checaIdade){
    return new Promise(function(resolve,reject){
        if(checaIdade > 18){
            resolve()
        }else{
            reject()
        }
    })
}

verificar()
.then(
    setTimeout(
        function(){
            console.log('Maior de 18 anos')
        },2000
    )
    
)
.catch(
    setTimeout(
        function(){
            console.log('Menor de 18 anos')
        },2000
    )
)