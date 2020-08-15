import React from 'react';
import './App.css';
// import styled from 'styled-components'



class App extends React.Components {


  state= {

    valorMensagem: [

      {
        nomeUsuario:"olivia",
        textoMensagem:"oioioi"
      },
      
    ],

        inputNomeUsuario:"",
        inputTextoMensagem:""
  };

 novamensagem =() =>{

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
      type="text" placeholder="Usuário" onChange="this.onChangeinputNomeUsuario" value="this.inputNomeUsuario"/>
      <input type="text" placeholder="Mensagem" onChange="this.onChangeinputTextoMensagem" value="this.inputTextoMensagem"/>
          <button onClick="">Enviar</button>


      




    </div>

    );
  }
  


  
}

export default App;

