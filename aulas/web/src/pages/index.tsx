// interface HomeProps{
//   count: number;
// }
import Image from "next/image";
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import logImg from "../assets/logo.svg";
import usersAvatarExempleImg from "../assets/users-avatar-example.png";
import iconCheckImg from "../assets/icon-check.svg";

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
      <main>
        <Image src={logImg} alt="NLW Copa" />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu Próprio Bolão da copa e compartilhe entre amigos!!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExempleImg} alt="" />

          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.500</span> Pessoas ja estão
            usando
          </strong>
        </div>

        <form className="mt-10 flex gap-2 ">

          <input 

          className="flex-1 px-6 py-4 rounded bg-gray-800 border-gray-600 text-sm" 
          type="text" 
          required 
          placeholder="Qual nome do seu Bolão?" 

          />

          <button 

          className="bg-yellow-500 px-6 py-4 rounded" 
          type="submit"
          
          >
            Criar meu bolão

          </button>

        </form>

        <p>
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas
        </p>

        <div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <span>+2.000</span>
            <span>Bolões Criados</span>
          </div>
          <div>
            <Image src={iconCheckImg} alt="" />
            <span>+2.000</span>
            <span>Bolões Criados</span>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="Imagem de dois celulares de preview" />
    </div>
  );
}

// export const getServerSideProps = async ()=>{
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()

//   return{
//     props:{
//       count: data.count,
//     }
//   }
// }
