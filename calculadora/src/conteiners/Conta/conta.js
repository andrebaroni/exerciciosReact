import React from 'react'
import Button from '../../components/Button'
import './conta.css'

const ContaContainer = (props) => (
  <div>
    <h2>Resultado: </h2>
    <h1> {props.resultado}</h1>
    <h1> {props.num1}</h1>
    <h1> {props.num2}</h1>
    <input type="number" onChange={e => props.changeNumber1(e.target.value)} value={props.num1} />
    <input type="number" onChange={e => props.changeNumber2(e.target.value)} value={props.num2} />
    <h1> </h1>
    
    <Button onClick={props.mais} name="Soma"/>
    <Button onClick={props.menos} name="Subtrair"/>
    <Button onClick={props.zerar} name="Zerar"/>

  </div>

)

export default ContaContainer
