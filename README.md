# FrontEnd Challenge

## Repositório criado para resolução de um case para vaga de desenvolvedor FrontEnd

## Explicando o case

    Implementação de um enxuto sistema que tem conexão com a [FakeStoreAPI]('https://fakestoreapi.com/').
    Features: 
    Contém uma listagem dos produtos em tabela 
    Contém uma página para criação de um produto 
    Contém uma página para visualização detalhada de um produto
    - Nessa página é possível editar e apagar o produto

## Tecnologias/Ambiente

### Para construir o app

NextJS, Shadcn UI, Tailwind CSS, Axios, CustomHooks, React-Hook-Forms, Zod

### Para testar o app

Jest - React Testing Library

### Para documentar os components

StoryBook

## Como rodar na sua máquina

### Clone o repositório

```bash
git clone https://github.com/bruch0/portfolio-front-end.git
```

### Acesse o projeto pelo terminal

```bash
cd portfolio-front-end
```

### Abra na sua IDE favorita

```bash
code .
```

### Instale as dependências

```bash
npm i
```

### Use a linha de comando para rodar os scripts

```bash
npm run dev -> Inicia o app na porta 3000
npm run lint -> Linta o app
npm run test -> Roda os testes produzidos
npm run storybook -> Inicia o StoryBook na porta 6006
```

## Explicação da arquitetura

### Pasta src

    - app
        - Inclui a estrutura de pastas que geram as páginas do NextJS
    - components
        - X.tsx
            - Abstração do componente X do Shadcn
        - Form
            - Inclui o componente genérico de formulário, juntamente com os inputs necessários para construir ele
        - Toast
            - Inclui a implementação genérica do Toast do Sonner
        - ui
            - Pasta de componentes do Shadcn - Todos foram abstraidos para os arquivos na raíz dessa pasta
    - hooks
        - Inclui todos os hooks customizados
    - lib
        - Pasta criada para manter os arquivos úteis para o projeto como um todo
    - services
        - api
            - Exporta o objeto de API utilizado
        - X
            - Contém a typagem e o serviço da entidade X
    - stories
        - Contém os stories do StoryBook

### Pasta test

    - compoments
        - Contém os teste com Jest dos componentes

### Design
    Foi utilizado esse Figma construído por mim como base para o design - https://www.figma.com/design/SN9yCbrZZ9yVbmi8nM1FpY/Design?node-id=0-1&t=jr2sEO5A8xsV0KRq-1
