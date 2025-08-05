import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-emerald-500 text-white'>
            
                <div className="container flex justify-between text-lg">
                    FarmaGen 💊

                    <div className='flex gap-4'>
                        Home
                        <p>

                        </p>
                        <Link to='/cadastrarproduto' className='hover:underline'>Cadastrar Produto</Link>
                        <p>
                        
                        </p>
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
