import styled from 'styled-components'

export const VagasDisponiveis = styled.form`
  border: 1px solid #a7727d;
  background-color: #f9f5e7;
  color: #a7727d;
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: #a7727d;
    color: #f9f5e7;

    &_a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

export const Link = styled.a`
  border-color: var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
`

export const TituloVagas = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const DescricaoVagas = styled.ul`
    border-color: #a7727d;
    background-color: #f9f5e7;
    color: #a7727d;
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
    }
  }
`
