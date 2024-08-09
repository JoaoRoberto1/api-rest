//Consumir a api de cep viaCep e criar uma função no qual eu passo o cep e retorno no console os dados do endereço


const buscarEndereco = (cep) => {{
    fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    .then(response => response.json())
    .then(data => console.log(data))
}}
buscarEndereco('60130530')

