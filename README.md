Anotações:

npx: Esse comando, normalmente, é utilizado para rodarmos comandos de forma remota.

npm: Normalmente, esse comando é utilizado para rodarmos scripts de forma local.

Reatividade

O React foi criado para ser reativo. Ele quer que o DOM do HTML reaja às mudanças de estado do componente.

Antes, era tudo feito através do MVC. Clicávamos em uma página, as nossas informações era direcionadas para o servidor, o servidor executava as ações, a página recarregava e as informações eram atualizadas.

Atualmente, temos uma aplicação dinâmica. A página não é renderizada novamente. Pelo contrário, as chamadas para o back-end são feitas por baixo dos panos e as pequenas porções da página ficam sendo atualizadas e se alterando conforme interagimos com a página.

Com o React, podemos montar layouts, sites, e deixar a interação com o usuário mais fluída, impedindo a atualização da página a cada nova atualização que queiramos fazer.

Com o JS Vanilla, até conseguiriamos fazer isso, porém, teríamos que nos preocupar com os momentos para atualizarmos o DOM.

No Facebook, por exemplo, temos uma página com muitas coisas acontecendo ao mesmo tempo, sem precisarmos recarregar a página para visualizarmos as alterações. Esse é propósito de uma SPA (Single Page Application).

---

O React é uma biblioteca, e não um framework.

Uma biblioteca é algo muito menor, feita para um propósito específico. Um framework é algo bem mais robusto, feito para solucionar diversos problemas.

O React é uma biblioteca pois ele possui uma proposta muito específica, que é a criação de componentes e etc.

O componente que utilizará o React será apenas o "div", no arquivo principal, que possuir o id "root". Se criarmos uma nova "div" no arquivo principal fora da "div" que utiliza o id "root", ela não estará sendo gerenciada pelo React.

Como o React é apenas uma biblioteca, muitas soluções são disponibilizadas por terceiros, e não apenas pelo React.

O Virtual DOM é inserido no projeto quando, no arquivo "index.js", temos o comando "ReactDOM.createRoot(document.getElementById('root'))", e, após isso, temos o comando "root.render(App)". Dessa forma, tudo o que estiver dentro do "App", que é o componente principal da aplicação será gerenciado pelo React.

Qualquer coisa que for inserida fora do VirtualDOM não será manipulada pelo React.

Basicamente, o React cuida apenas da parte do DOM que foi fornecida para ele, que é chamada de VirtualDOM.

O React enxerga um componente como se ele fosse uma peça de lego. Todos os componentes do React possuem as suas características comuns, porém, cada um possui um "encaixe" diferente. Esse "encaixe" é chamado de "props".

---

Assim que realizamos uma mudança de estado, através do "onChange()", por exemplo, o React faz uma diferença de como o navegador estaria antes da mudança para como o navegador estaria após a mudança. Através da diferença entre como o navegador está e como o navegador deveria estar, ele realiza a renderização apenas das coisas que precisam ser alteradas no React.

---

O Angular e alguns outros frameworks utilizam o two way data binding. Ele permite que o pai envie informações para o filho e que o filho envie informações para o pai. O React é "one way data binding", assim, ele consegue enviar propriedades apenas do pai para o filho.

O React funciona assim pois ele espera que as coisas mudem, para que ele possa reverberar essas informações para baixo. Se ele permitisse mudanças de baixo para cima, todas as vezes que algo mudasse no código, ele precisaria verificar o VirtualDOM e a sua árvore para verificar se existe alguma alteração, e isso geraria um problema de performance.

Por ser "two way data binding", sempre que realizamos uma alteração, o React sabe que precisa verificar apenas no próprio componente e nos filhos de seu componente, e não na árvore inteira.
