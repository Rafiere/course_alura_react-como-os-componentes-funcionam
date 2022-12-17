import "./style.css";
import { AiFillCloseCircle } from "react-icons/ai";

/* Estamos desestruturando as propriedades e recebendo-as diretamente. Todas as propriedades abaixo poderão ser recebidas por esse componente, e deverão ser passadas pelo componente-pai, que, nesse exemplo, é o componente "Team". */

const Card = ({ nome, cargo, imagem, primaryColor, handleDelete }) => {
  return (
    <div className="card">
      <AiFillCloseCircle size={25} className="delete" onClick={handleDelete} />
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="footer">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Card;
