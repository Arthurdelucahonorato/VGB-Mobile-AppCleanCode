# VGB

Bem-vindo ao repositório do VGB!

## Integrantes

- Arthur de Luca Honorato
- Diego Hahn
- João Eduardo Milak Farias

## Como executar

### 1. Clone o repositório

Abra o terminal/cmd, escolha um local para baixar o projeto e digite o seguinte comando:

```bash
git clone https://github.com/Arthurdelucahonorato/TrabalhoCleanCodeRefatorado.git
```

### 2. Navegue para o diretório

```bash
cd TrabalhoCleanCodeRefatorado
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm start
```

### 5. Abra no VS Code (opcional)

```bash
code .
```

## Scripts Disponíveis

- **`npm start`**: Inicia o servidor de desenvolvimento Expo
- **`npm run android`**: Executa no emulador Android
- **`npm run ios`**: Executa no simulador iOS
- **`npm run web`**: Executa no navegador web
- **`npm run lint`**: Verifica problemas de código com ESLint
- **`npm run lint:fix`**: Corrige automaticamente problemas do ESLint

## Tecnologias Utilizadas

- **React Native** com **Expo**
- **Expo Router** para navegação
- **SQLite** para banco de dados local
- **ESLint** para qualidade de código

## Estrutura do Projeto

```
├── components/          # Componentes reutilizáveis
├── constants/          # Constantes e cores
├── database/           # Configuração e operações do banco
├── hooks/              # Custom hooks
├── src/app/            # Páginas da aplicação
└── .github/workflows/  # CI/CD com GitHub Actions
```

## CI/CD

O projeto possui um workflow do GitHub Actions que executa automaticamente o linter em todos os Pull Requests para verificar a qualidade do código.