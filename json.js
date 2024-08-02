console.log('antes do fetch')

fetch('https://jsonplaceholder.typicode.com/users', console.log('executando o fetch'))
      .then(function (response) {
        console.log('pegando o response', response)
        return response.json()
      })

      .then(function(json) {
        console.log("pegando o json", json)
      })

      console.log("finalizando o fetch")

      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))