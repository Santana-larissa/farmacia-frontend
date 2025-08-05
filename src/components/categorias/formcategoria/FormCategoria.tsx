import { useEffect, useState, type ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type Categoria from '../../../model/Categoria';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';

function FormCategoria() {

  const token = localStorage.getItem("token") || "";
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {id} = useParams<{id: string}>()
  

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
})
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-empty
      if(error.toString().includes('401')) {
        
      }
    }
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  function retornar() {
    navigate('/categorias')
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if(id !== undefined) {
      try {
        await atualizar('/categorias', categoria, setCategoria, {

        })
        alert('A categoria foi atualizado...')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        // eslint-disable-next-line no-empty
        if (error.toString().includes('401')) {

        } else {
          alert('Erro ao atualizar a categoria')
        }
      }
    } else {
      try {
        await cadastrar('/categorias', categoria, setCategoria, {
            headers: {
    Authorization: token
  }
        })
        alert('O categoria foi cadastrado...')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        // eslint-disable-next-line no-empty
        if (error.toString().includes('403')) {

        } else {
          alert('Erro ao cadastrar o categoria')
        }
      }
    }

    setIsLoading(false)
    retornar()
  }


  useEffect(() => {
    if(id !== undefined) {
      buscarPorId(id)
    }
  }, [id])



  return (
  <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                  {id ? "Atualizar Categoria" : "Cadastrar Categoria"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria} >
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do Tema</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu tema"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400  hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
  );
}

export default FormCategoria;