import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type  Categoria from '../../../model/Categoria';
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from 'react-loader-spinner';

function DeletarCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();


  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
    
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-empty
      if (error.toString().includes("403")) {
        
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`, {
        
      });

      alert("Categoria apagada com sucesso");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-empty
      if (error.toString().includes("403")) {
        
      } else {
        alert("Erro ao deletar a categoria.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-[#4a3f35] text-white font-bold text-2xl">
          Categoria
        </header>

        <div className="p-4">
          <p className="text-xl h-full">{categoria.nome}</p>
          <p>{categoria.descricao}</p>
        </div>

        <div className="flex">
          <button
            className="text-slate-100 bg-[#918af3] hover:bg-indigo-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-[#7d9d92] hover:bg-red-700 flex items-center justify-center"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;

