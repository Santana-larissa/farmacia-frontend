import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="flex flex-col items-center bg-[#f4f7f5] px-4 py-8 gap-6">
      <h2 className="text-3xl font-bold text-[#070707] text-center">
        Bem-vindo à Farmácia Gen 🌿
      </h2>

      <p className="text-base text-[#070707] text-center max-w-md">
        Aqui você encontra uma seleção especial de produtos de saúde e bem-estar.
        Explore nossas categorias e escolha o que há de melhor para sua saúde!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/categorias"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Ver Categorias
        </Link>
        <Link
          to="/produtos"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Ver Produtos
        </Link>
      </div>

      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1555633514-abcee6ab92e1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem Home Farmácia"
          width="500"
          className="rounded-2xl shadow-lg"
        />
      </div>
    </main>
  );
}

export default Home;
