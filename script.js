    var num = document.getElementById('txtn')
    let selc = document.getElementById('selc')
    var res = document.getElementById('res')
    let nums = []

function inselc (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true 
    } else {
         return  false
    }
    
} 

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true 
    } else {
        return false 
    }
}

function adicionar() {
    if(isNumber(num.value) && !inselc(num.value , nums)){
        nums.push(Number(num.value))
        let item = document.createElement('option')
         item.text = `O Valor ${num.value} foi adicionado.`
         selc.appendChild(item)
         res.innerHTML =''
    } else {
        window.alert('Valor Invalido ou ja Adicionado Na Lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (nums == 0){
        window.alert('Adicione Valores Antes de Finalizar!')
    } else {
        let tot = nums.length
        let maior = nums[0]
        let menos = nums[0]
        let soma = 0
        let media = 0

        for(var pos in nums){
            soma += nums[pos]
            
            if(nums[pos] > maior){
                maior = nums[pos]

            } else {
                menor = nums[pos]
            }
        }

        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, Temos ${tot} Numeros Cadastrados!</p>`
        res.innerHTML += `<p>O Maior Numero Cadastrado Foi O ${maior}</p> `
        res.innerHTML += `<p>O Menor Numero Cadastrado Foi O ${menor}</p> `
        res.innerHTML += `<p>A Soma De Todos Os Valore Foi De: ${soma}</p> `
        res.innerHTML += `<p>A Media Entre Todos os Numeros Eh De: ${media}</p> `
    }
}

    


/*function adicionar(){
    
    
    var txtn = document.getElementById('txtn')
    let selc = document.getElementById('selc')
    var res = document.getElementById('res')
    let nums = []
    var num = Number(txtn.value)
    nums.push(num)
    
    
    if (txtn.length == 0 || num < 1 || num > 100 ) {

        window.alert('[ERROR] Numero ja Adicionado ou Incapaz De Adicionar')
    } else {
        
         let item = document.createElement('option')
         item.text = `O Valor ${num} foi adicionado.`
         selc.appendChild(item)
    }
    
}

function finalizar(){
    
    
    var num = Number(txtn.value)   
    nums.push(num)
    if (nums == 0){ 
        window.alert('[ERROR] Digite Um Numero')

    } else{
        for( var pos = 0 ; pos < nums.length ; pos++)
        res.innerHTML = `Temos Um Total De ${nums.length} numeros.`
    }
}
*/
//Pra quem ta com muita duvida, eu indico ir no mini-curso de JS (pq a maioria dos videos tem menos de 5 min) da Rocketseat (O Starter) e ir no modulo 4, ele faz um exercício parecido com esse, que vai te dar um base maneira pra entender melhor esse ai