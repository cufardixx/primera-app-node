const inputName = document.querySelector('#productoNombre')
const inputPreice = document.querySelector('#productoPrecio')

const buttom = document.querySelector('button')

buttom.addEventListener('click', (e)=>{
    //console.log({name: inputName.value, price: inputPreice.value});
    const name = inputName.value;
    const price = inputPreice.value;

    //libreria fetch para hacer peticones, pide a donde vamos  a haer la request

    fetch("/api/v1/products", {method: 'POST', headers:{
        "Content-Type":'application/json'
    },
    //en el body es lo q vamos a mandar, q no va ser un json en si, sino un string q es un json con la propieda stringitfy
    
    body: JSON.stringify({
        name,
        price,
    })
})
})

console.log({inputName,inputPreice});