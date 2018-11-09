# Estudo de React

Estudo de react
___

# Repositório do curso:

https://github.com/cod3rcursos/curso-react-redux

# Apostila do curso:

http://files.cod3r.com.br/apostila-react-redux.pdf

# Exemplo de permissões linux:

https://www.todoespacoonline.com/w/2015/06/usuarios-grupos-e-permissoes-no-linux-ubuntu/

# Instalar o MongoDB:

https://www.mongodb.com/download-center/community

Copiar Node em /opt/mongodb: `sudo mv node /opt/mongodb`
Modificar environment: `sudo nano /etc/environment`
Adicionar no final: `/etc/mongodb/bin`
Compilando a modificação: `source /etc/environment`
Criar pasta /data/db: `/data/db`

Adicionar a pasta ao grupo do usuário:
- Listar grupos: `less /etc/group`
- Listar usuários: `getent passwd | cut -d \: -f1`
- Dando a permissão: `sudo chown daniel.oliveira:’domain users’ /data -R`
- Permissão na pasta: `sudo chmod 2770 /data/ -R`

# MongoDB Compass:

https://www.mongodb.com/download-center/compass

# Instalar o Node.js:

https://nodejs.org/en/

# Servidor Nodemon:

https://nodemon.io/

# Variáveis de ambiente Linux: Exemplo instalando Node.js:

Copiar Node em /opt/node: `sudo mv node /opt/node`
Modificar environment: `sudo nano /etc/environment`
Adicionar no final: `/etc/node/bin`
Compilando a modificação: `source /etc/environment`


# Webpack
https://webpack.js.org/

# Pastas de estudo:

`mkdir exercicios_webpack && cd exercicios_webpack`

# Iniciando um projeto:

`npm init -y`

# Instalando o webpack-cli:

`npm i -D webpack-cli`

# Instalando webpack no projeto:

`npm i --save-dev webpack webpack-dev-server`

# Padrão de mensagem de commit (CHANGELOG automatizados):

O projeto terá o controle de versão e a geração do CHANGELOG automatizados com mensagens de confirmação  convencionais seguindo o padrão estabelecido por este documento.

`Lembrando: A mensagem de commit será pré-estabelecida no issue`

Para os commites do projeto, se o mensagem do commite não for definida no issue, usar o padrão definido abaixo:

_Para bugs:_

```sh
git commit -m "fix: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para os demais:_

```sh
git commit -m "feat: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para escopo opcional de um commit:_

```sh
git commit -m "feat(optional_scope): texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Algumas regras:_

1. Commits deve ser prefixado com um tipo, o qual consiste de um substantivo, `feat`, `fix`, etc, seguida de dois pontos e um espaço.
2. O tipo `feat`DEVE ser usado quando um commit adiciona um novo recurso ao seu aplicativo ou biblioteca.
3. O tipo `fix` DEVE ser usado quando um commit representa uma correção de bug para seu aplicativo.
4. Um escopo opcional pode ser fornecido após um tipo. Um escopo é uma frase que descreve uma seção da base de código entre parênteses, por exemplo, `fix(parser)`:

### Gerando o CHANGELOG do projeto

```sh
npm run release -- --release-as X.X.X
```

### Referências:
[Standard Version](https://github.com/conventional-changelog/standard-version/blob/master/README.md)
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)