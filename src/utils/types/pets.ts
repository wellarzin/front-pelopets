import { SpecieI } from "./specie"

export interface PetI {
  id: number
  nome: string
  idade: number
  alimentacao: number
  destaque: boolean
  tricks: string
  foto: string
  createdAt: Date
  updatedAt: Date
  specie: SpecieI
  specieId: number
}