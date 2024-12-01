import { PetI } from "./pets"

export interface PropostaI {
  id: number
  clienteId: string
  petId: number
  pet: PetI
  descricao: string
  resposta: string | null
  createdAt: string
  updatedAt: string | null
}