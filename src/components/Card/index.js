import "./style.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="header" style={{ backgroundColor: props.primaryColor }}>
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="footer">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  );
};

export default Card;
