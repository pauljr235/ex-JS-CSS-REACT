import { VagasDisponiveis, TituloVagas, DescricaoVagas, Link } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagasDisponiveis>
    <TituloVagas>{props.titulo}</TituloVagas>
    <DescricaoVagas>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </DescricaoVagas>
    <Link href="#">Ver detalhes e candidatar-se</Link>
  </VagasDisponiveis>
)

export default Vaga
