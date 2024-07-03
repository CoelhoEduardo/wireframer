# Wireframer

#### Aplicação frontend para consumo da API de busca do Youtube com: HTML5, CSS, Javascript, Node.Js e Docker. ####

## Instruções para Compilar, Testar e Rodar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Chave da API do YouTube](https://developers.google.com/youtube/v3/getting-started?hl=pt-br/)

### Passos

1. Clone o repositório:
   ```sh
   git clone git@github.com:CoelhoEduardo/wireframer.git
   cd wireframer

2. Rodando a aplicação com Docker:
    ```sh
    # Build da imagem Docker
    docker build -t wireframe .
    # Rodando o contêiner com a chave da API do YouTube
    docker run --env API_KEY=YOUR_YOUTUBE_API_KEY -p 3000:3000 wireframe

3. Rodando a aplicação com Node.js (alternativa):
    ```sh
    cd src/server
    
    #Adicione a chave da API do Youtube em um arquivo dotenv

    echo "CHAVE_API_YOUTUBE" > .env

    # Rode o servidor
    
    node server.js

4. Usando a aplicação:

    - Acesse http://localhost:3000 no navegador.

    - A aplicação abrirá uma página com um campo de busca onde você poderá fazer
    requisições para a API do Youtube.

    - Após realizar a busca, um grid com vídeos da requisição aparecerá. Cada vídeo terá um
    botão para marcar como favorito.

    - Ao clicar no botão de estrela, o vídeo será adicionado à lista de favoritos.

    - Acesse a aba "Favoritos" pelo sidebar para visualizar a lista de vídeos favoritados. A aba
    "Favoritos" mostrará um contador indicando o número de vídeos na lista.


5. Parando a aplicação com Docker:
    ```sh
    # Para listar os contêineres em execução e obter o ID do contêiner
    docker ps

    # Para parar o contêiner
    docker stop {CONTAINER_ID}

### Teste com Jest

##### Realizando testes de funcionalidade da navegação do sidebar e do campo de busca dos vídeos #####

1. Para testar:
    ```sh
    # Estar no diretório /server
    cd src/server

    # Rodar o tester
    npm run test

2. Resultado esperado:

    ![test_result]()