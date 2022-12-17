import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  /* O "useState" retorna dois valores, por isso que o retorno desse useState é inserido dentro de um array. O primeiro valor corresponde a um estado, e o segundo valor é uma função que realiza a alteração desse estado. */

  const [teams, setTeams] = useState([
    {
      nome: "Programação",
      color: "#D9F7E9",
    },
    {
      nome: "Front-End",
      color: "#E8F8FF",
    },
    {
      nome: "Data Science",
      color: "#F0F8E2",
    },
    {
      nome: "DevOps",
      color: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      color: "#FAE9F5",
    },
    {
      nome: "Mobile",
      color: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const onRegisterCollaborator = (collaborator) => {
    /* Essa é uma instrução para a V8 do Chrome interromper as ações que estão sendo executadas na tela. */
    // debugger;
    console.log(collaborator);
    /* Estou espalhando os colaboradores antigos e adicionando o novo colaborador, que acabou de ser criado, ao final do array. */
    setCollaborators([...collaborators, collaborator]);
  };

  const changeTeamColor = (color, name) => {
    console.log(color, name);
    setTeams(
      teams.map((team) => {
        if (team.nome === name) {
          team.color = color;
        }
        return team;
      })
    );
  };

  const deleteCard = () => {
    console.log("Deletando Colaborador");
  };

  return (
    <div className="App">
      {/* Estamos chamando o componente "Banner". */}
      <Banner />
      {/* Estamos passando a prop "onRegisterCollaborator", que será uma função que */}
      <Form
        onRegisterCollaborator={(collaborator) =>
          onRegisterCollaborator(collaborator)
        }
        teams={teams.map((team) => team.nome)}
      />
      {teams.map((team) => {
        /* O "key" serve para controlar quando um filho deve ser renderizado ou não. Se tivermos vários filhos e atualizarmos apenas um, é através da "key" que o React saberá se deve atualizar um filho ou não. */
        return (
          <Team
            key={team.nome}
            nome={team.nome}
            color={team.color}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.time === team.nome
            )}
            handleDelete={deleteCard}
            changeColor={changeTeamColor}
          ></Team>
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
