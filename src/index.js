import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/* O "createRoot()" recebe o componente principal da aplicação. Após isso, o componente "App" foi renderizado. O componente "App" é o "App.js". */

/* O "index.js" é o ponto de entrada da aplicação. É dentro desse arquivo que a aplicação começará. */

/* O "React.StrictMode", em produção, não terá nenhuma utilidade. Em ambiente de desenvolvimento, ele tentará gerar mensagens de erro mais amigáveis para o desenvolvedor. Essas mensagens de erro mais amigáveis serão inseridas no console do navegador. */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* O "React.StrictMode" será utilizado apenas em ambiente de desenvolvimento. Nesse ambiente, ele poderá realizar algumas renderizações a mais no componente, justamente para realizar mais verificações. No ambiente de produção, esse modo não estará ativo. */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
