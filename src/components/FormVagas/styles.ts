import styled from 'styled-components'

export const FormularioGeral = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: #a7727d;
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BotaoPesquisar = styled.button`
  height: 40px;
  background-color: #a7727d;
  border: 1px solid #a7727d;
  color: #f9f5e7;
  padding: 0 16px;
  font-size: 18px;
  margin-left: 8px;
  cursor: pointer;
`

export const BarraPesquisa = styled.input`
  padding: 0 16px;
  outline-color: #a7727d;
`
