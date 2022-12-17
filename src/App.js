import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      nome: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      nome: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      nome: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      nome: "DevOps",
      primaryColor: "#ED6B69",
      secondaryColor: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      nome: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const onRegisterCollaborator = (collaborator) => {
    /* Essa é uma instrução para a V8 do Chrome interromper as ações que estão sendo executadas na tela. */
    // debugger;
    console.log(collaborator);
    /* Estou espalhando os colaboradores antigos e adicionando o novo colaborador, que acabou de ser criado, ao final do array. */
    setCollaborators([...collaborators, collaborator]);
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
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.time === team.nome
            )}
          ></Team>
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
