import Card from "../Card";
import "./style.css";
import hexToRgba from "hex-to-rgba";

/* Esse componente não possui nenhum comportamento. Ele apenas recebe as "props" e exibe elas na tela. Esses componentes são chamados de "dumb components". Eles são mais fáceis de testar e de dar manutenção, pois a lógica de negócios está extraída em outro lugar. */

const Team = ({
  collaborators,
  id,
  nome,
  color,
  handleDelete,
  changeColor,
}) => {
  return (
    /* Se a expressão for "true", o JSX retornará o componente. Se for "false", o JSX não renderizará o componente. */

    collaborators.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(color, 0.6) }}
      >
        <input
          type="color"
          className="input-cor"
          value={hexToRgba(color, 0.6)}
          onChange={(event) => changeColor(event.target.value, id)}
        />
        <h3 style={{ borderColor: color }}>{nome}</h3>
        <div className="cards">
          {collaborators.map((collaborator) => {
            console.log("Renderizando Colaborador");

            /* O React enxerga um componente como se ele fosse um objeto. */

            return (
              <Card
                key={collaborator.nome}
                nome={collaborator.nome}
                cargo={collaborator.cargo}
                imagem={collaborator.imagem}
                primaryColor={color}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
