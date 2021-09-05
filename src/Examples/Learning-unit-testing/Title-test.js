const React = require('react')
const ReactDOM = require('react-dom')
const ReactDOMServer = require('react-dom/server') // Permite gerar uma string pra representar a marcação do dom que pode ser executada no servidor.
const $ = require('whacko') // É igual ao JQuery praticamente. Ele veio depois do cheerio. O cheerio é praticamente um fork do jquery para rodar no node. O criador do whacko está deprecando ele com a intenção de colocar as melhorias que ele fez do whacko dentro do cheerio.

const Title = require('./title')

const TitleComponent = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Title)
)

console.log($(TitleComponent).get(0).tagName)