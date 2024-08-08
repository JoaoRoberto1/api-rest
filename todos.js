// const listaAllTodos = () => {
//     fetch ('https://jsonplaceholder.typicode.com/todos')
//         .then ((response) => response.json())
//         .then(data => console.log(data))
// }

// const listaAllTodosQtd = () => {
//     fetch ('https://jsonplaceholder.typicode.com/todos')
//         .then ((response) => response.json())
//         .then(data => console.log({
//             qtd: data.length,
//             data: data
//         }))}

// // 2 - Exibir um objeto com quantidade e data somente de um usuário específico

// const listaTodosUser = (id) => {
//     fetch ('https://jsonplaceholder.typicode.com/todos')
//     .then ((response) => response.json())
//     .then(data => {
//         let dataFiltered = data.filter(i => i.userId === id )
//         console.log({
//             qtd: dataFiltered.lenght,
//             data: dataFiltered.lenght,
//         })
//     })
// }

// listaTodosUser(3)

// // 3 - Exibir um obj com qtd e data somente de um id específico

//  const listaAllTodosById = id => {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     .then((response) => response.json())
//     .then(data => console.log(data))
//  }

//  listaAllTodosById(2)

 //4 - Criar um recurso utilizando o REST API do jsonplaceholder
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: 2,
            title: 'Teste',
            body: 'Teste2',
        })
    })
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json, null, 4)))
 

