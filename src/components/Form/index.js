import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

const Form = ({ onRegisterCollaborator, registerTeam, teams }) => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [favorito, setFavorito] = useState(false);

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const onSave = (evento) => {
    /* Estamos impedindo que o comportamento padrão seja realizado, ou seja, que, ao submetermos o formulário, que a página seja atualizada. */
    evento.preventDefault();
    onRegisterCollaborator({
      id: id,
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });
    setId(uuidv4());
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    setFavorito(false);
  };

  return (
    <section className="form">
      {/* O "onSubmit" é uma forma do React para escutarmos eventos. Quando esse formulário for submetido, essa função será ativada. */}

      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={nome}
          onChangeText={(value) => setNome(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={cargo}
          onChangeText={(valor) => setCargo(valor)}
        />
        <TextField
          required={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          onChangeText={(valor) => setImagem(valor)}
        />
        <Dropdown
          required={true}
          label="Time"
          itens={teams}
          value={time}
          onChangeText={(valor) => setTime(valor)}
        />
        <Button text="Criar Card">
          {/* Tudo o que estiver dentro do botão serão os "children", que serão passados para o componente "Button". */}
          Criar Card
        </Button>
      </form>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          registerTeam(nomeTime, corTime);
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>

        <TextField
          required
          label="Nome"
          placeholder="Digite o nome do time"
          value={nomeTime}
          onChangeText={(value) => setNomeTime(value)}
        />
        <TextField
          type="color"
          required
          label="Cor"
          placeholder="Digite a cor do time"
          value={corTime}
          onChangeText={(valor) => setCorTime(valor)}
        />

        <Button>
          {/* Tudo o que estiver dentro do botão serão os "children", que serão passados para o componente "Button". */}
          Criar Time
        </Button>
      </form>
    </section>
  );
};

export default Form;
