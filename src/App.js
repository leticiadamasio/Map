import React,{Component} from 'react'
import './App.css'

//Crie um array de objetos no STATE com pelo menos 6 objetos
class App extends Component {
state = {
  persons: [
    {
      Nome: "Letícia",
      Idade: 18,
      Cidade: "São Gonçalo",
      Profissão: "Desempregada no momento"

  },
    {
      Nome: "Elaine",
      Idade: 42,
      Cidade: "São Gonçalo",
      Profissão: "Professora"

  },
    {
      Nome: "Lara",
      Idade: 10,
      Cidade: "São Gonçalo",
      Profissão: "Estudante"
    
  },
    {
      Nome: "Walcir",
      Idade: 44,
      Cidade: "São Gonçalo",
      Profissão: "Metalúrgico"

  },
    {
      Nome: "Artur",
      Idade: 18,
      Cidade: "Rio de Janeiro",
      Profissão: "Arquiteto"

  },
    {
      Nome: "Dan",
      Idade: 23,
      Cidade: "Rio de Janeiro",
      Profissão: "Professor e Developer"

  },
    {
      Nome: "Fernando",
      Idade: 24,
      Cidade: "Rio de Janeiro",
      Profissão: "Facilitador e Developer/Semideus"

  },
    {
      Nome: "Ana Paula",
      Idade: 43,
      Cidade: "São Gonçalo",
      Profissão: "Doméstica"

  },
    {
      Nome: "Ana Júlia",
      Idade: 12,
      Cidade: "São Gonçalo",
      Profissão: "Estudante"

  }
]
}
render(){
return (
  <main>
    {this.state.persons.map((item) => 
(
      <div className="container">
       <h2>Nome: {item.Nome}</h2>
       <p>Idade: {item.Idade}</p>
       <p>Cidade: {item.Cidade}</p>
       <p>Profissão: {item.Profissão}</p>
      </div>
    ))}
  </main>
)
}
}
export default App