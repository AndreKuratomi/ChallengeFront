# ChallengeFront

- [Traduções](#traduções)
- [Sobre](#sobre)
- [Instalação](#instalação)
- [Referências](#referências)
- [Termos de uso](#termos-de-uso)

<br>

## Traduções

- [Português brasileiro](./README_pt-br.md)
- [English / Inglês](https://github.com/AndreKuratomi/ChallengeFront/)

<br>

## Sobre

O projeto <b>ChallengeFront</b> é uma simulação fullstack de operações no <b>Instagram</b>, com cadastro, login e acesso ao dashboard com a possibilidade de adicionar e excluir contatos.
A aplicação utiliza como frontend a linguagem <strong>[Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction)</strong> e sua biblioteca <strong>[React](https://pt-br.legacy.reactjs.org/)</strong>.

O repositório backend utiliza a fakeAPI <strong>JSON-Server</strong> disponível [aqui](https://github.com/AndreKuratomi/ChallengeFront-FakeAPI).

<br>


## Instalação

<h5>0. Primeiramente, é necessário já ter instalado na própria máquina:</h5>

- O versionador de codigo <b>[Git](https://git-scm.com/downloads)</b>.

- O ambiente de desenvolvimento <b>[Node](https://nodejs.org/pt)</b>.

- Seu gerenciador de versões <b>[NVM](https://github.com/nvm-sh/nvm)</b>.

- O gerenciador de pacotes <b>[Yarn](https://yarnpkg.com/)</b>.

- Um <b>editor de código</b>, conhecido também como <b>IDE</b>. Por exemplo, o <b>[Visual Studio Code (VSCode)](https://code.visualstudio.com/)</b>.

- <p> E versionar o diretório escolhido para receber o clone da aplicação:</p>


```
git init
```

<br>
<h5>1. Fazer o clone do repositório <b>ChallengeFront</b> na sua máquina pelo terminal do computador ou pelo do IDE:</h5>

```
https://github.com/AndreKuratomi/ChallengeFront.git
```

WINDOWS:

Obs: Caso apareca algum erro semelhante a este: 

```
unable to access 'https://github.com/AndreKuratomi/ChallengeFront.git': SSL certificate problem: self-signed certificate in certificate chain
```

Configure o git para desabilitar a certificação SSL:

```
git config --global http.sslVerify "false"
```

<p>Entrar na pasta criada:</p>

```
cd ChallengeFront
```

<p>Instalar as dependências:</p>

```
yarn
```

<p>Abrir a aplicação no seu IDE:</p>

```
code .
```

<p>E para exibir o frontend para o usuário utlizando o VSCode utilizamos no terminal o seguinte comando:</p>

```
yarn start
```

OBS: Por problemas legais com o uso do logo do Instagram e com uso dos métodos HTTP Post para cadastro e login o link vercel da aplicação foi inviabilizado pelo navegador. Logo só é possível rodar a aplicação localmente.

<br>

## Referências

- [Git](https://git-scm.com/downloads)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction)
- [React](https://pt-br.legacy.reactjs.org/)
- [Node](https://nodejs.org/pt)
- [NVM](https://github.com/nvm-sh/nvm)
- [Yarn](https://yarnpkg.com/)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

<br>

## Termos de uso

Esse projeto atende a fins exclusivamente didáticos sem nenhum intuito comercial.
