import styled from 'styled-components'

export const FormularioGeral = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BotaoPesquisar = styled.button`
  height: 40px;
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  color: var(--cor-secundaria);
  padding: 0 16px;
  font-size: 18px;
  margin-left: 8px;
  cursor: pointer;
`

export const BarraPesquisa = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
