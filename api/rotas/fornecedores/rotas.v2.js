const roteador = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const SerializadorFornecedor = require('../../Serializador').SerializadorFornecedor

SerializadorFornecedor

roteador.options('/', (requisicao, resposta) => {
  resposta.set('Acces-Control-Allow-Methods', 'GET')
  resposta.set('Acces-Control-Allow-Header', 'Content-Type')
  resposta.status(204)
  resposta.end()
})

roteador.get('/', async (requisicao, resposta) => {
  const resultados = await TabelaFornecedor.listar()
  resposta.status(200)
  const serializador = new SerializadorFornecedor(
      resposta.getHeader('Content-Type')
  )
  resposta.send(
      serializador.serializar(resultados)
  )
})

module.exports = roteador