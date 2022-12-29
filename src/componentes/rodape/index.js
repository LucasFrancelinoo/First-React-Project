import "../rodape/rodape.css"

const Rodape = () => {
  return (
    <div className="rodape">
      <div className="imgs"> 
        <img id="fb" src='/imgs/fb.png' />
        <img id="tw" src='/imgs/tw.png'/>
        <img id="ig" src='/imgs/ig.png'/>
      </div>

      <img className="logo1" src='/imgs/logo.png'/>

      <h1 className="text" >Criado por Lucas Francelino </h1>

    </div>
  );
}



export default Rodape;