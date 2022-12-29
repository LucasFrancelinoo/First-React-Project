import "./cards.css";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="cabecalho" style={{backgroundColor: props.corDeFundo}}>
        <img
          src="https://cdn.motor1.com/images/mgl/WXmQq/s1/4x3/atualizada-honda-biz-125-linha-2016-chega-por-r-8790.webp"
          alt=""
        />
      </div>

      <div className="rodapee">
        <h4>{props.nome}</h4>
        <h5>{props.modelo}</h5>
        <h6>{props.placa}</h6>
      </div>
    </div>
  );
};

export default Cards;
