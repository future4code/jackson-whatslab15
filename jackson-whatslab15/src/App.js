import React from 'react';
import './App.css';
// import styled from 'styled-components'


class App extends React.Component {


  state = {

    valorMensagem: [

      {
        nomeUsuario:"",
        textoMensagem:""
      },
      
    ],

        inputNomeUsuario:"",
        inputTextoMensagem:""
  };

 novamensagem =() =>{

 	console.log("ola mundo")

  const valores = {

    nomeUsuario: this.state.inputNomeUsuario,
    textoMensagem: this.state.inputTextoMensagem

  };
  

  const novosValores = [...this.state.valorMensagem, valores];

  this.setState({valorMensagem: novosValores});

  }

  onChangeinputNomeUsuario = (event) =>{
    this.setState({inputNomeUsuario: event.target.value});
  };

  onChangeinputTextoMensagem = (event) =>{ 
    this.setState({inputTextoMensagem: event.target.value});
  }


  render(){

    const mensagens = this.state.valorMensagem.map((valorMensagem) =>{

      return(

        <div>
          <span>{valorMensagem.nomeUsuario}</span>
          <span>{valorMensagem.textoMensagem}</span>
        </div>

      

      )

     })
     
    return (

    <div>

      <input 
<<<<<<< HEAD
      type="text" placeholder={"Usuário"} onChange={this.onChangeinputNomeUsuario} 
      
      />

      <input type="text" placeholder={"Mensagem"} onChange={this.onChangeinputTextoMensagem} 
      
      />

          <button onClick={this.novamensagem}>Enviar</button>
	
	<div>{mensagens}</div>

    </div>
=======
      type="text" placeholder="Usuário" onChange="this.onChangeinputNomeUsuario" value="this.inputNomeUsuario"/>
      <input type="text" placeholder="Mensagem" onChange="this.onChangeinputTextoMensagem" value="this.inputTextoMensagem"/>
          <button onClick="">Enviar</button>

      </div>
>>>>>>> 6e2ec14d015659e97c2e6acc7bec7059b4591f21

    
    
    );
<<<<<<< HEAD
  }  
=======
  } 
>>>>>>> 6e2ec14d015659e97c2e6acc7bec7059b4591f21
}

export default App;