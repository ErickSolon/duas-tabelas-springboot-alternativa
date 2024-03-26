export interface PessoasModel {
    id?: BigInteger,
    nome?: string,
    sobrenome?: string,
    documentosModel?: DocumentosModel
}

export interface DocumentosModel {
    id?: BigInteger,
    cpf?: string
}