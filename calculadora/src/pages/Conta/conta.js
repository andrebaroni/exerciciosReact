import React, { Component } from 'react'
import ContaConteiner from '../../conteiners/Conta/conta'

class ContaPage extends Component{
  state = {
    resultado: 0,
    num1: 0,
    num2: 0,
  }


  mais = () =>{
    var num1 = parseFloat(this.state.num1)
    var num2 = parseFloat(this.state.num2)
    const resultado = num1 + num2
    this.setState({ resultado })
  }
  menos = () =>{
    var num1 = parseFloat(this.state.num1)
    var num2 = parseFloat(this.state.num2)
    const resultado = num1 - num2
    this.setState({ resultado })
  }

  zerar = () =>{
    const resultado = 0
    var num1 = 0
    var num2 = 0
    this.setState({ resultado, num1, num2 })
    
  }
  
  changeNumber1 = (value) => {
    this.setState({ num1: value })
  }
  changeNumber2 = (value) => {
    this.setState({ num2: value })
  }

  render(){ 
    return (
      <ContaConteiner
        mais={this.mais}
        menos={this.menos}
        zerar={this.zerar}
        num1={this.state.num1}
        num2={this.state.num2}
        changeNumber1={this.changeNumber1}
        changeNumber2={this.changeNumber2}
        resultado={this.state.resultado}
      />
      
    )
  }

}

export default ContaPage
