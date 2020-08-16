import React from 'react';
import './App.css';
import styled from 'styled-components';
const Container =  styled.div`
display:flex;
height:90vh;
max-width:700px;
align-items:center;
align-self:center;
border:1px solid black;
flex-direction:column-reverse;
`
const ContainerMensagens = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`

const Mensagens = styled.div`
  display: flex;
  flex-direction:row;
`
const Bold = styled.span`
display:inline;
font-weight: bold;
text-align:left;
`

class App extends React.Component {


  state = {

    valorMensagem: [

      // {
      //   nomeUsuario:"",
      //   textoMensagem:""
      // },

    ],

        inputNomeUsuario:"",
        inputTextoMensagem:"",
        inputPressKey:""
  };

 novamensagem =() =>{


  console.log("ola mundo")

  const valores = {

    nomeUsuario: this.state.inputNomeUsuario,
    textoMensagem: this.state.inputTextoMensagem

  };


  const novosValores = [...this.state.valorMensagem, valores];

  this.setState({valorMensagem: novosValores, inputTextoMensagem: ""});
  };

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
          <p>
          <span><Bold>{valorMensagem.nomeUsuario}</Bold></span>
          <span>{": " + valorMensagem.textoMensagem}</span>
          </p>
        </div>
      )

     })
     
    return (
    <ContainerMensagens>
      <Container>
        <div>
          <Mensagens><div>{mensagens}</div></Mensagens>
            <input 
            type="text" placeholder={"Usuário"} onChange={this.onChangeinputNomeUsuario}
             
      
            />

            <input type="text" placeholder={"Mensagem"} onChange={this.onChangeinputTextoMensagem } value={this.state.inputTextoMensagem} onKeyPress={this.keyPressed}
              
            />
            <output>{this.state.value}</output>

          <button onClick={this.novamensagem}>Enviar</button>
  
        </div>
      </Container>
    </ContainerMensagens> 
    
    );
  }  
}

export default App;