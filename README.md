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
