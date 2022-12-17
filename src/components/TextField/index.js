/* Normalmente, ao invés de criarmos uma função "function TextField(){}", é recomendado criarmos uma constante, e, nessa constante, atribuirmos uma função anônima que terá o componente. Isso é utilizado para organizarmos o projeto de uma melhor forma. */

/* Quando o nome do arquivo do componente é apenas "index", não temos que, no import, utilizar, por exemplo, a estrutura "/components/TextField/TextField", dessa forma, podemos utilizar apenas "/components/TextField". */

import { useState } from "react";
import "./style.css";

/* Por padrão, o React entrega o parâmetro "props". Esse parâmetro contém as propriedades que o componente "TextField" recebeu. */

/* Abaixo, estamos desestruturando essas props. */

const TextField = ({
  type = "text",
  label,
  placeholder,
  required,
  value,
  onChangeText,
}) => {
  const changedPlaceholder = `${placeholder}...`;

  /* O "useState" é uma forma de mantermos um estado dentro de uma função. Por padrão, uma função não teria um estado. */

  /* O hook retornará dois valores. O valor do estado e um setter para atribuirmos a função. Todas as modificações nesse estado deverão ser feitas através da função "setter" que é devolvida pelo hook. */

  /* Abaixo, estamos desestruturando o array retornado pelo hook "useState()" e obtendo a primeira e a segunda posição desse array. */

  /* Ao utilizarmos o "set" disponibilizado pelo hook, o React faz com que esse valor passe pelo ciclo de vida do React, e, por exemplo, atualize os componentes necessários. */

  /* A cada vez que o valor de "inputValue" é alterado, isso significa que o estado foi alterado, dessa forma, o React sabe que ele tem que renderizar o componente novamente. */

  // const [inputValue, setInputValue] = useState("");

  /* A cada tecla digitada, alteraremos o valor final do input. */
  const onType = (event) => {
    onChangeText(event.target.value);
  };

  return (
    <div className={`text-field ${type}-field`}>
      <label>{label}</label>
      <input
        type={type}
        onChange={onType}
        required={required}
        placeholder={changedPlaceholder}
        value={value}
      />
    </div>
  );
};

export default TextField;
