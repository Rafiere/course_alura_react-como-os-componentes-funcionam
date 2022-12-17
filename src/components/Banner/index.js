import "./style.css";

const Banner = () => {
  /* Isso é o JSX. É a forma que o React trabalha com a forma visual. Por baixo dos panos, o React interpreta isso e realiza a conversão do JSX em um elemento do DOM. No vanilla, seria algo parecido com "document.createElement('img')", e etc, assim, ele realiza a leitura dessa função e, de acordo com os padrões do JSX, sempre que utilizarmos essa função, o React criará esse elemento do DOM. */

  /* O "class" é uma palavra reservada do JavaScript, dessa forma, como estamos trabalhando com o JSX, temos que utilizar o "className" para evitarmos conflitos entre o JS Vanilla e o JSX. */

  return (
    <header className="banner">
      <img
        src="/assets/banner.png"
        alt="O banner principal da página do Organo."
      />
    </header>
  );
};

export default Banner;
