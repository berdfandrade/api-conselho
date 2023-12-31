
# API de Conselhos Aleatórios

Uma API simples construída com Node.js e Express que fornece conselhos aleatórios.

## Instalação

Certifique-se de ter o Node.js instalado em sua máquina.

1. Clone este repositório para o seu computador:
```
git clone https://github.com/seu-usuario/api-conselhos.git
```

2. Navegue até o diretório do projeto:
```
cd api-conselhos
```

3. Instale as dependências do projeto:
```
npm install
```

4. Inicie o servidor local:
```
npm start
```

A API estará acessível em `http://localhost:3001/`.

## Endpoints

### GET /

Retorna um objeto JSON com um conselho aleatório.

Exemplo de resposta:
```json
{
  "Conselho": "Acredite em sua capacidade de alcançar seus objetivos."
}
```

## Dependências

- cors: ^2.8.5
- express: ^4.18.2
- nodemon: ^3.0.1

## Autor

Bernardo Andrade

## Licença

Este projeto está licenciado sob a Licença ISC - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.


