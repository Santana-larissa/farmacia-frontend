import axios from "axios";

const api = axios.create({
  baseURL: 'https://farmacianest.onrender.com'
})

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types, @typescript-eslint/no-unsafe-function-type
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types, @typescript-eslint/no-unsafe-function-type
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type, @typescript-eslint/no-wrapper-object-types
export const buscar = async (url: string, setDados: Function, headers: Object) => {
  const resposta = await api.get(url, headers)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types, @typescript-eslint/no-unsafe-function-type
export const cadastrar = async (url: string, dados: Object, setDados: Function, headers: Object) => {
  const resposta = await api.post(url, dados, headers)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types, @typescript-eslint/no-unsafe-function-type
export const atualizar = async (url: string, dados: Object, setDados: Function, headers: Object) => {
  const resposta = await api.put(url, dados, headers)
  setDados(resposta.data)
}

// eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
export const deletar = async (url: string, headers: Object) => {
  await api.delete(url, headers)
}

export default api;
