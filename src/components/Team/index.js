import Card from "../Card";
import "./style.css";

/* Esse componente não possui nenhum comportamento. Ele apenas recebe as "props" e exibe elas na tela. Esses componentes são chamados de "dumb components". Eles são mais fáceis de testar e de dar manutenção, pois a lógica de negócios está extraída em outro lugar. */

const Team = (props) => {
  return (
    /* Se a expressão for "true", o JSX retornará o componente. Se for "false", o JSX não renderizará o componente. */

    props.collaborators.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
        <div className="cards">
          {props.collaborators.map((collaborator) => {
            return (
              <Card
                key={collaborator.nome}
                nome={collaborator.nome}
                cargo={collaborator.cargo}
                imagem={collaborator.imagem}
                primaryColor={props.primaryColor}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Team;
