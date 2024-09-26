# ChallengeFront

- [Translations](#translations)
- [About](#about)
- [Instalation](#instalation)
- [References](#references)
- [Terms of use](#terms-of-use)

<br>

## Translations

- [Português brasileiro](./.multilingual_readmes/README_pt-br.md)
- [English / Inglês](https://github.com/AndreKuratomi/ChallengeFront/)

<br>

## About

The project <b>ChallengeFront</b> is a fullstack simulation of operations on <b>Instagram</b>, with user register, login and dashboard access with the possibility to join and unjoin contacts. Mobile responsive.

This project uses the language <strong>[Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction)</strong> and its library <strong>[React](https://pt-br.legacy.reactjs.org/)</strong> .

The backend repository uses the <b>fakeAPI</b> <strong>JSON-Server</strong> available [here](https://github.com/AndreKuratomi/ChallengeFront-FakeAPI).

Check out how the application behaves in this <b>[link](https://drive.google.com/file/d/1HejJXwH4-K4otlNum1nPzuMoX-BCZQ-M/view?usp=sharing)</b>.


<br>


## Instalation

<h3>0. It is first necessary to have instaled the following devices:</h3>

- The code versioning <b>[Git](https://git-scm.com/downloads)</b>.

- The virtual environment <b>[Node](https://nodejs.org/pt)</b>. Version 16th used.

- Its version manager <b>[NVM](https://github.com/nvm-sh/nvm)</b>.

- The package manager <b>[Yarn](https://yarnpkg.com/)</b>.

- A <b>code editor</b>, also known as <b>IDE</b>. For instance, <strong>[Visual Studio Code (VSCode)](https://code.visualstudio.com/)</strong> that is going to be used here.

- <p>And versioning your directory to receive the aplication clone:</p>


```
git init
```

<br>
<h3>1. Clone the repository <b>ChallengeFront</b> by your machine terminal or by the IDE's:</h3>

```
git clone https://github.com/AndreKuratomi/ChallengeFront.git
```

WINDOWS:

Obs: In case of any mistake similar to this one: 

```
unable to access 'https://github.com/AndreKuratomi/ChallengeFront.git/': SSL certificate problem: self-signed certificate in certificate chain
```

Configure git to disable SSL certification:

```
git config --global http.sslVerify "false"
```

<h3>2. After cloning the repository:</h3>


<p>Enter the directory:</p>

```
cd ChallengeFront
```
<p>Install the project's dependencies:</p>

```
yarn
```

<p>Open the aplication with your IDE:</p>

```
code .
```

<p>And by the IDE's terminal run <b>yarn</b> to exibit the frontend:</p>

```
yarn start
```

For the functionalities of this project work the <b>fakeAPI</b> <strong>JSON-Server</strong> needs to already have its server running. Check it out how [here](https://github.com/AndreKuratomi/ChallengeFront-FakeAPI).

Obs: Because of Instagram's logo legal issues and the use of HTTP Post for register and login the application's vercel link is unabled to be used by the browser. So it is only possible to run the application by running it locally.

<br>

## References

- [Git](https://git-scm.com/downloads)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction)
- [React](https://pt-br.legacy.reactjs.org/)
- [Node](https://nodejs.org/pt)
- [NVM](https://github.com/nvm-sh/nvm)
- [Yarn](https://yarnpkg.com/)
- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)

Obs: Inside the project's 'src/' directory there is a folder called <b>'references/</b>' that contain images and links used to inspire this humble project.

<br>

## Terms of use

This project is exclusively for didatic purposes and has no commercial intent.
