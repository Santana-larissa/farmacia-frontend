import { Link } from 'react-router-dom'
import type Categoria from '../../../model/Categoria';

type CardCategoriasProps = {
categoria: Categoria;
};


function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#4a3f35] text-white font-bold text-2xl'>
                <button>Categoria</button>
            </header>
            <p className='p-8 text-3xl bg-gray-50 h-full'>{categoria.descricao}</p>
            
            <div className="flex"> 
                <Link to={`/editartema/${categoria.id}`} 
                    className='w-full text-slate-100 bg-[#918af3] hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${categoria.id}`}  
                className='text-slate-100 bg-[#7d9d92] hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias