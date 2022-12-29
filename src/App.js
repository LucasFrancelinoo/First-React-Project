import { useState } from 'react';
import Banner from './componentes/Banner';
import Cards from './componentes/Cards';
import Donos from './componentes/Donos';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/rodape';


function App() {
  
  const listaDonos = [
    {
      nome: 'Goga',
      corSecundaria: '#E06869',
      corPrimaria: '#FDE7E8',
      imagem: '',
    },
    {
      nome: 'Diego',
      corSecundaria: '#57c278',
      corPrimaria: '#D9F7E9',
      imagem: '',
    },
    {
      nome: 'Cagelino',
      corSecundaria: '#FFBA05',
      corPrimaria: '#FFF5D9',
    }, 
    {
      nome: 'Misa',
      corSecundaria: '#DB6EBF',
      corPrimaria: '#FAE9F5',
    },
  ]

  const [motos, setMotos] = useState([])
  
  const motoAdicionada = (moto) => {
    setMotos([...motos, moto])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario donos={listaDonos.map(listaDonos => listaDonos.nome)}addOnEstoque={motos => motoAdicionada(motos)}/>

      {listaDonos.map
        (listaDonos => <Donos 
          key={listaDonos.nome} 
          imagem={listaDonos.imagem}
          nome={listaDonos.nome} 
          corPrimaria={listaDonos.corPrimaria}
          corSecundaria={listaDonos.corSecundaria}
          motos={motos.filter(moto => moto.dono == listaDonos.nome )}
      /> )}
      <Rodape/>
    </div>
  );
}

export default App;
                                                                 