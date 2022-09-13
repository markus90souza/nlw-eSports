import './styles/boot.css'
import { MagnifyingGlassPlus } from 'phosphor-react'
import brand from './assets/brand.svg'
const App = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={brand} alt="" />
      <h1 className={'text-6xl text-white font-black mt-20'}>
        Seu
        <span className="text-transparent bg-nlw-esports bg-clip-text mx-2">
          duo
        </span>
        está aqui.
      </h1>

      <div className={'grid grid-cols-6 gap-6 mt-16'}>
        <a href="" className={'relative rounded-lg overflow-hidden'}>
          <img src="/g-01.png" alt="" />
          <div
            className={
              ' bg-box-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'
            }
          >
            <strong className={'font-bold text-white block'}>
              League of Legends
            </strong>
            <span className={'text-zinc-300 block'}>4 Anuncios</span>
          </div>
        </a>

        <a href="" className={'relative  rounded-lg overflow-hidden'}>
          <img src="/g-02.png" alt="" />
          <div
            className={
              ' bg-box-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'
            }
          >
            <strong className={'font-bold text-white block'}>
              League of Legends
            </strong>
            <span className={'text-zinc-300 block'}>4 Anuncios</span>
          </div>
        </a>

        <a href="" className={'relative  rounded-lg overflow-hidden'}>
          <img src="/g-03.png" alt="" />
          <div
            className={
              ' bg-box-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'
            }
          >
            <strong className={'font-bold text-white block'}>
              League of Legends
            </strong>
            <span className={'text-zinc-300 block'}>4 Anuncios</span>
          </div>
        </a>

        <a href="" className={'relative  rounded-lg overflow-hidden'}>
          <img src="/g-04.png" alt="" />
          <div
            className={
              ' bg-box-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'
            }
          >
            <strong className={'font-bold text-white block'}>
              League of Legends
            </strong>
            <span className={'text-zinc-300 block'}>4 Anuncios</span>
          </div>
        </a>

        <a href="" className={'relative  rounded-lg overflow-hidden '}>
          <img src="/g-05.png" alt="" />
          <div
            className={
              ' bg-box-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'
            }
          >
            <strong className={'font-bold text-white block'}>
              League of Legends
            </strong>
            <span className={'text-zinc-300 block'}>4 Anuncios</span>
          </div>
        </a>

        <a href="" className={'relative  rounded-lg overflow-hidden'}>
          <img src="/g-06.png" alt="" />
          <div
            className={
              ' bg-box-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'
            }
          >
            <strong className={'font-bold text-white block'}>
              League of Legends
            </strong>
            <span className={'text-zinc-300 block'}>4 Anuncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 bg-nlw-esports self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
          <div className="">
            <strong className={'text-2xl text-white font-black block'}>
              Não encontrou seu duo?
            </strong>
            <span className={'text-zinc-400 block'}>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button
            className={
              'flex items-center gap-3 py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600'
            }
          >
            <MagnifyingGlassPlus size={24} />
            Publicar anúcio
          </button>
        </div>
      </div>
    </div>
  )
}

export { App }
