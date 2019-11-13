<CHeader
  title="Internet Acessível"
  subtitle="Guia de Acessibilidade para Desenvolvedores Web"
  contributeMessage="Contribua com o projeto"
/>

Olá! Você já parou para pensar em como um deficiente visual consegue acessar um conteúdo web em seu site? Ou como um deficiente auditivo pode entender um vídeo no YouTube? Há muita gente trabalhando para que pessoas com deficiência (e não são poucas) possam acessar a internet de forma que o conteúdo possa ser acessível a elas. Mas se você já pesquisou um pouco sobre o tema, sabe que ele é muito difuso na rede, e meio complicado de compreendê-lo, isso sem contar a documentação extensa da W3C. Este guia se destina a qualquer pessoa que queira compreender como transformar o conteúdo da rede em um conteúdo acessível. E só te peço um favor: compartilhe esta informação e contribua, aumentando o conteúdo ou o compartilhando, para que ela possa crescer mais e mais.

O objetivo desse projeto é trabalhar com duas frentes:

1. A iniciativa do site em questão, que tem por finalidade ser um guia para os desenvolvedores; e
2. A iniciativa do [fórum no Github](https://github.com/acessibilidade-for-devs/forum). Se você possui alguma dúvida, compartilhe conosco. E não deixe de acessar e ajudar outras pessoas lá também.

::: tip Tim Berners-Lee
“O poder da web está em sua universalidade. Ser acessada por todos, independente de deficiência, é um aspecto essencial”
:::

## O que você irá ver

[[toc]]

## O que é acessibilidade na Web?

Acessibilidade é a capacidade de tornar um conteúdo acessível à diferentes dispositivos ou diferentes usuários. É aqui que entra uma questão interessante: tornar a web acessível não vai beneficiar somente deficientes. A seguir alguns exemplos de alguns cenários que a accesibilidade no site ajuda.

* Internet lenta;
* Usar um dispositivo, como o smartphone, com apenas uma mão;
* Deficiência provisória, como uma cirurgia nos olhos; entre outros...

Portanto, tornar a internet acessível, não é somente para deificientes visuais ou auditivos. É uma necessidade. **Há diferentes usuários em diferentes situações e disponibilizar o conteúdo de forma que todos possam acessá-lo é uma contribuição para que a internet se torne universal**. Há mais exemplos de situações em que uma aplicação ser acessível é importante na [introdução a Acessibilidade da W3C](http://www.w3c.br/pub/Materiais/PublicacoesW3C/cartilha-w3cbr-acessibilidade-web-fasciculo-I.html#capitulo3)

## Por que um site deve ser acessível?

Ok, você me mostrou o que é acessibilidade. Mas porquê preciso me ater a isso? Como convenco meu chefe?

Em primeiro lugar, existem as **estatísticas**. Segundo o censo do IBGE (Instituto Brasileiro de Geografia e Estatística), em 2010, há 45.606.048 de brasileiros, 23,9% da população total, com algum tipo de deficiência. Se formos para uma amplitude mundial, há mais de 650 milhoes de pessoas com alguns tipo de deficiência. Portanto, o conteúdo não ser acessível impede uma grande parcela da populacão de acessá-lo.

Por fim, é lei. Segundo a [lei 13.146 de 2015](http://www.planalto.gov.br/ccivil_03/_Ato2015-2018/2015/Lei/L13146.htm), a qualquer site de empresa com sede no Brasil e sites governamentais, é obrigatório ter boas práticas de acessibilidade.

## Quais as tecnologias para acessibilidade?

* **Leitor de tela** permite ao usuário com deficiência visual “ouvir” o conteúdo web que está na tela do dispositivo;
* **Navegador Textual** este tipo de navegador preza pelo carregamento somente de textos, não carregando imagens e conteúdos ilustrativos. Usado por deficientes visuais ou conexão lenta;
* **Display em Braile** este dispositivo de saída imprime textos em braile para deficientes visuais. A partir de circuitos eletrônicos e mecânicos, ele imprime as letras em um dispositivo tátil no sistema braile;
* **Navegador com voz** permite a navegação através de comandos de voz. Usado por pessoas com alguma incapacitação motora;
* **Ampliador de tela** são softwares que ampliem os textos na tela para pessoas com dificuldade de enxergar;

## Boas práticas em desenvolvimento de sites

A seguir, inúmeras boas práticas para o desenvolvimento de sites que se proponhem inclusivos:

### Especifique o idioma do seu site

Use o atributo `lang` do HTML 5 na página, de preferência, no elemento html. Se caso, em alguma parte do site, houver um texto de linguagem diferente da linguagem principal, também especifique o idioma de leitura daquele texto.

### Use a semântica do HTML 5

Alguns leitores de tela leem um parágrafo da seguinte forma: “paragrafo: [ texto que você colocou ]”. Ou seja, eles foram programados para entenderem a semântica HTML, portanto, não a negligencie!

### Coloque âncoras no topo da página para partes importantes do seu site

Imagine um leitor de tela ter que ler cada menu e submenu da página em um site de notícias que o usuário entrou para uma notícia específica? Por isso, é importante colocar, no topo, um link para a parte mais importante do site, que no caso de um portal de notícia é a notícia principal.

### Coloque uma barra de acessibilidade no topo do site

Itens que precisam estar lá: alto contraste (colocar o fundo preto com letras brancas) e recurso para aumenta ou diminuir a fonte. Esse recurso é muito comum encontrar em sites governamentais.

### Recurso de alto contraste

Fundo preto, links geralmente amarelos, linhas brancas, e letras brancas. Este recurso é muito útil em cenários de alta luminosidade.

### Possibilite uma navegação via teclado

Ofereça uma navegação via teclado, a partir de teclas de atalhos, por exemplo. Alguns leitores de tela já vem com algumas teclas de atalho importantes, como 'Vá para o conteúdo principal', 'Visualizar links' entre outros.

### Verifique o contraste textual do seu site

Há ferramentas interessantes, uma delas é o [Check My Colours](http://www.checkmycolours.com/). O contraste é fundamental para a **legibilidade**.

### Coloque uma linguagem de sinais (libras) no site

Segundo a [Lei 10.436/2002](http://www.planalto.gov.br/ccivil_03/leis/2002/L10436.htm), libras é a segunda língua oficial no Brasil e para muitos surdos é a única língua.

### Não dependa de cores!

Assegure que a informação de um determinado elemento, como um link, não dependa cores. Por exemplo, um botão que seja verde indicando uma ação positiva, poderá não ser interpretado corretamente por um daltônico.

---

A seguir, algumas recomendações da W3C para o desenvolvimento de sites acessíveis

## WCAG – Recomendações de Acessibilidade para o conteúdo Web

A [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) é um conjunto de recomendações da W3C para que o conteúdo Web seja acessível. Ela tem como objetivo fornecer técnicas de codificação para que o conteúdo se torne acessível. Sua primeira versão, de 1999, já previa inúmeras técnicas. Atualmente, em 2019, estamos na versão WCAG 2.1. Ela é dividida em:

* **Princípios** são a base para a acessibilidade na Web;
* **Diretrizes** são os 12 objetivos básicos sobre os princípios;
* **Critérios de sucesso** para cada diretriz há critérios para as cumpri-las, que vão de A (mais baixo) a AAA (mais alto);
* **Técnicas de tipo suficientes e aconselhadas suficientes** são as que já cumprem as diretrizes, porem as aconselhadas são as que vão além de inúmeras barreiras de acessibilidade;

---

Abaixo, segue um resumo de cada princípio com as diretrizes principais e técnicas para as cumprir

### Perceptível: o usuário deve poder perceber o conteúdo. Este, não pode ser invisível para alguns sentidos

#### Diretriz 1.1 – É necessário ter uma alternativa em texto

Dica 1: use o atributo alt nas imagens.
```html
<img src="logo.jpg" alt="Este é o Logo da Empresa">
```

Dica 2: Coloque os links para uma página explicando os diagramas que tenham na página, por exemplo, se aquele diagrama veio de um pesquisa do IBGE, ou um texto próximo ao diagrama o explicando.

Dica 3: caso você tenha um formulário, basta indexar os inputs aos respectivos labels, ou colocar um title nos inputs caso ELES NÃO POSSUAM LABEL, ou para inputs tipo img, colocar um alt.

```html
<label for="email"> Insira seu email <label>

<input type="text" title="Código de Área">

<input type="img" alt="Enviar Formulário">
```

Dica 4: o elemento não textual que deve ser ignorado pelas tecnologias assistivas, basta inserí-lo via CSS. O exemplo abaixo é com uma imagem como background

```css
div {
  background: ulr(‘imagens/minha_imagem.jpg’) no-repeat;
}
```

#### Diretriz 1.2 - conteúdo em áudio e vídeo

Dica 1: ofereça um texto alternativo, como uma transcrição do vídeo ou do áudio, próximo à mídia. Exemplo disso é o site de palestras [TED](https://www.ted.com/#/).

Dica 2: como já exposto aqui, ofereça uma possibilidade de colocar linguagem de sinais.

#### Diretriz 1.3 – adaptável

Dica 1: use bastante a semântica HTML.

Dica 2: como já dito aqui e repito: não faça com que o conteúdo dependa da sua forma, cor ou qualquer característica que dependa da visão ou audicão.

#### Diretriz 1.4 – discernível

Dica 1: forneça formas para que o usuário possa modificar o tamanho das fontes

Dica 2: forneça formas para que o usuário dê alto contraste na página

Dica 3: caso o site tenha áudio automático, após 3 segundos o usuário deve ter uma forma de controlar este áudio

Dica 4: a página deve possuir um contraste para leitura.

### Operável: o conteúdo deve ser acessível de forma que qualquer usuário possa interagir com ele

#### Diretriz 2.1 – acessível via teclado

Dica 1: ofereça uma navegação alternativa via teclado. Lembre-se: link, por padrão, já recebem foco, botões também.

Dica 2: não deixe que o usuário fique bloqueado na página devido a falta de um teclado.

#### Diretriz 2.2 – tempo suficiente: dê ao usuário tempo suficiente para navegar pela página e ler o conteúdo

#### Diretriz 2.3 – convulsões: não coloque elementos na página que pisquem mais de 3 vezes num segundo. Quem não se lembra do caso polêmico envolvendo o desenho animado Pokémon

#### Diretriz 2.4 – tempo suficiente: dê ao usuário tempo suficiente para navegar pela página e ler o conteúdo

Dica 1: coloque um link no início da página para o conteúdo principal

Dica 2: utilize sempre cabeçalhos para estruturar os títulos das seções da página

Dica 3: crie uma sequência lógica entre os links da página

Dica 4: utilize breadcrumbs no topo da seção para que o usuário saiba onde está na página, ou num conjunto de páginas

### Compreensível: toda a interface precisa ser intuitiva, compreensível

#### Diretriz 3.1 – legível: utilize o atributo lang do HTML para que os mecanismo de leitura de tela possam saber em qual linguagem está aquela página

#### Diretriz 3.2 – previsível:

Dica 1: não crie menus *dropdowns* que ao usuário passar o mouse, os links relacionados sejam mostrados abaixo, dificultando sua interação

Dica 2: não modifique um estado automaticamente a menos que você avise ao usuário que isso irá acontecer

#### Diretriz 3.3 – Assistência de entrada

Dica 1: forneça mecanismos para que o usuário não cometa erros

Dica 2: caso o usuário cometa erros, o informe qual erro cometeu e como corrigi-lo

### Robusto: O conteúdo deve ser colocado de forma que qualquer usuário possa acessa-lo com qualquer tecnologia de acesso a web

#### Diretriz 4.1 – compatível: use e abuse da semântica HTML e construa páginas que possam ser compatíveis com a maioria dos dispositivos, inclusive com tecnologias assistivas

Um conteúdo incrivel foi construído pelo [Marcelo Sales](https://twitter.com/msales) que é o [Todos por Acessibilidade](http://acessibilida.de/). Não deixe de conferir!

## WAI-ARIA – Tornando a Web ainda mais semântica

O HTML 5 tornou a web muito semântica, trazendo tag novas como header, footer, nav, section, aside entre outras. Porém, há situações em que estes elementos são insuficientes para leitores de tela, como por exemplo, um menu drop-down. Ai surgiu o WAI-ARIA. O objetivo dela é fazer com que o conteúdo web seja mais acessível às tecnologias assistivas, como leitores de tela. Ela é uma recomendação da W3C, e independe de versão do HTML, sendo usada fora do HTML 5. Alguns elementos da WAI-ARIA:

### Roles

* **Abstract Roles**: definem conceitos gerais;
* **Widgets Roles**: definem widgtes da interface do usuário. Geralmente interfaces soltas, como caixa de diálogo e alertas;
* **Document Structure Roles**: definem conteúdos estruturais da página, como cabeçalho e artigos;
* **Landmark Roles**: definem áreas de navegação na página;

### Estados e propriedades

Um determinado elemento pode assumir um determinado estado. Para tanto, há as ***arias***, que definem uma determinada propriedade e para tal, um determinado estado. Exemplo: uma popup modal que terá a propriedade haspopup e poderá estar como true ou false. Isso facilita ao leitor de tela identificar que aquele elemento, uma div por exemplo, é um modal popup, que está ativado ou não

A seguir, links interessantes para você estudar e ver alguns exemplos práticos de como aplicar a WAI-ARIA no seu HTML, e também o link da documentação da W3C (em inglês)

* [Slides de uma conferência feita pela Talita Paggani](http://slides.com/talitapagani/wcag-aria-webbr2015#/1)
* [Artigo muito interessante do Tableless](https://tableless.com.br/wai-aria-estendendo-o-significado-das-interacoes/)
* [Um descrição detelhada de cada estado e propriedade direto da documentação da W3C](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties)
* [Descrição detelhada de cada role direto da documentação da W3C](https://www.w3.org/TR/wai-aria-1.1/#roles)

## Ferramentas de Acessibilidade

### Ferramentas para teste

* [axe](https://www.deque.com/axe/)
* [Lighthouse](https://developers.google.com/web/tools/lighthouse)
* [Toolkit da Microsoft](https://accessibilityinsights.io/)
* [Série de Patters do Ebay](http://ebay.github.io/mindpatterns/index.html)

## Iniciativas para se acompanhar

* [Movimento web para todos](https://mwpt.com.br/)
* [Dosvox - Sistema Operacional para deficientes visuais](http://intervox.nce.ufrj.br/dosvox/)
* [Bold - Um Design System focado em Acessibilidade](https://bold.bridge.ufsc.br/en/)

## Onde encontrar mais conteúdo?

* [Todos por Acessibilidade](http://acessibilida.de/);
* [Site da Acessibilidade Legal](http://www.acessibilidadelegal.com/);
* [Site da Bengala Legal](http://www.bengalalegal.com/acessibilidade);
* [Técnicas CSS para Acessibilidade no site do Maujor](https://www.maujor.com/w3c/tec_css_acess.html);
* [Validação de Código HTML da W3C](https://validator.w3.org/);
* [Validação de Código CSS da W3C](https://jigsaw.w3.org/css-validator/);
* [Site Awesome A11y](https://brunopulis.com/awesome-a11y/);
* [Conheça o projeto A11y](https://a11yproject.com/).
* [Páginas Acessíveis](http://talitapagani.com/paginas-acessiveis/).
