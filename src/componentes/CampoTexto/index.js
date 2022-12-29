import { useState } from 'react'
import './CampoTexto.css'

const Form = (props) => {

  const placeholderModificada = `${props.placeholder}...`


  const onType = (evento) => {
    props.aoAlterado(evento.target.value)    
  }

  return (
      <div className='campo-texto'>
          <label> {props.label} </label>
          <input value={props.valor} onChange={onType} required={props.obrigatorio} placeholder= {placeholderModificada} />
      </div>
  )
}

export default Form