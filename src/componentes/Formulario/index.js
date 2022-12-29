import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import Lista from "../ListaSuspensa";
import Botao from "../Botão";
import { useState } from "react";
import App from "../../App";
import addOnEstoque from "../../App";

const Formulario = (props) => {

  const [modelo, setModelo] = useState('')
  const [placa, setPlaca] = useState('')
  const [renavam, setRenavam] = useState('')
  const [preco, setPreco] = useState('')
  const [dono, setDono] = useState('')

  const onSave = (evento) => {
    evento.preventDefault()
    props.addOnEstoque({
      dono,
      modelo,
      placa,
      renavam,
      preco
    })
    setModelo('')
    setPlaca('')
    setRenavam('')
    setPreco('')
    setDono('')
 }

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para adicionar a moto ao estoque</h2>
      
       <Lista 
          itens={props.donos}
          label="Donos"
          valor={dono}
          aoAlterado={valor => setDono(valor)}
        /> 

        <CampoTexto
          obrigatorio={false}
          label="Modelo"
          placeholder="Digite o modelo do veiculo"
          valor={modelo}
          aoAlterado={valor => setModelo(valor)}
        />
        <CampoTexto
          obrigatorio={false}
          label="Placa"
          placeholder="Digite a placa do veiculo"
          valor={placa}
          aoAlterado={valor => setPlaca(valor)}
        />
        <CampoTexto
          obrigatorio={false}
          label="Renavam"
          placeholder="Digite o renavam do veiculo"
          valor={renavam}
          aoAlterado={valor => setRenavam(valor)}
        />
        <CampoTexto
          obrigatorio={false}
          label="Valor"
          placeholder="Digite o valor do veiculo"
          valor={preco}
          aoAlterado={valor => setPreco(valor)}
        />

  
        <Botao
          texto="Adicionar ao estoque"/>
      </form>
    </section>
  );
};

export default Formulario;
