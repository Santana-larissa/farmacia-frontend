import { useEffect, useState } from "react"
import CardCategorias from "../cardCategoria/CardCategoria";
import type Categoria from "../../../model/Categoria";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import { Link } from 'react-router-dom';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line no-empty
      if (error.toString().includes('401')) {
      
      }
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          width={350}
          height={350}
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      
      <div className="container mx-auto px-4 py-4">

        
        <div className="mb-6 text-right">
          <Link
            to="/cadastrarcategoria"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Cadastrar Categoria
          </Link>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categorias.map((categoria) => (
            <CardCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
