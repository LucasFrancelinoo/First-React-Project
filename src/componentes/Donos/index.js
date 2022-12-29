import Cards from "../Cards";
import "./donos.css";

const Donos = (props) => {
  const css = { backgroundColor: props.corPrimaria };
  const border = { borderBottom: `4px solid ${props.corSecundaria}` };

  return (
    props.motos.length > 0 && (
      <section className="dono" style={css}>
        <h3 style={border}>{props.nome}</h3>
        <div className="colaboradores">
          {props.motos.map((moto) => (
            <Cards
              corDeFundo={props.corSecundaria}
              nome={props.nome}
              modelo={moto.modelo}
              placa={moto.placa}
              key={props.nome}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Donos;
