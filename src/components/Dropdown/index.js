import "./style.css";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        required={props.required}
        value={props.valor}
        onChange={(event) => props.onChangeText(event.target.value)}
      >
        {/* Precisamos utilizar o "map()" para percorrermos uma lista de itens e devolvermos uma lista de "option" com os nomes de cada grupo já inseridos. */}

        {/* A "key" serve para o React controlar a renderização e saber quando ele precisa ou não atualizar um item. Ela precisa ser algo único para cada elemento que está realizando a iteração. */}

        {/* Não é recomendado colocarmos o index como a propriedade "key". Normalmente, essas informações são enviadas de um back-end, e, dessa forma, teremos um ID que deverá ser utilizado. */}

        {/* É com base na chave que o React perceberá se deve ou não renderizar um componente novamente. */}
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
