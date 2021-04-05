# Price scan

Esse projeto foi feito com [React-native]('https://reactnative.dev/') utilizando o [Expo]('https://expo.io/'), no projeto utilizo o recurso nativo de câmera para realizar a leitura de código de barras, e com o auxílio da API de mercadorias do [Brasil API]('http://brasilapi.simplescontrole.com.br/') é realizada a pesquisa daquele código de barras, retornando uma imagem, descrição do produto, preço mínimo, preço médio e preço máximo de acordo com a API. O objetivo do price scan é o usuário final saber no ponto de venda se o produto que ele está adquirindo está acima ou abaixo da média.

###### Funcionamento.

![Gif](https://raw.githubusercontent.com/Simplicio-b/price-scan/master/assets/price-scan.gif)

### Libs utilizadas no projeto

* [Styled-Components]('https://styled-components.com/')
* [Expo-Barcode-Scanner]('https://docs.expo.io/versions/latest/sdk/bar-code-scanner/')
* [Axios](https://github.com/axios/axios')

O [Styled-Components]('https://styled-components.com/') foi utilizado para fazer a estilização dos componentes, o [Expo-Barcode-Scanner]('https://docs.expo.io/versions/latest/sdk/bar-code-scanner/') foi utilizado para a recuperação de dados assim que a camera capta um codigo de barras, já o [Axios](https://github.com/axios/axios') foi utilizado na leitura da API. 

### Como rodar o projeto ?

##### Requisitos

  * [NODE js]('https://nodejs.org/en/')
  * [NPM]('https://www.npmjs.com/') ou [Yarn]('https://yarnpkg.com/')  
  * [Expo]('https://expo.io/')

### Como rodar o projeto
  
  * Faça o download do projeto
  * Localize o diretório do mesmo via terminal
  * execute um dos comandos abaixo 

Isso vai assegurar que você instale todas as dependências

  ```sh
    expo install
```

Após a instalação das dependências execute 

```sh
    expo start
```

Garanta que seu computador esteja na mesma rede que seu o smartphone que você vai usar para debugar o projeto, utilize o [app da expo]('https://play.google.com/store/apps/details?id=host.exp.exponent') para realizar o debug e é isso. 
