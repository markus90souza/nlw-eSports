import './styles/boot.css'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import brand from './assets/brand.svg'
import { CallToAction } from './components/CallToAction'
import { GameCard } from './components/GameCard'
import { GameController } from 'phosphor-react'
import { Input } from './components/Form/Input'

type Game = {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}
const App = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    const getGames = () => {
      fetch('http://localhost:3333/games')
        .then((response) => response.json())
        .then((data) => {
          setGames(data)
        })
        .catch((e) => {
          console.log(e)
        })
    }

    getGames()
  }, [])

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
        {games.map((game) => (
          <GameCard
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>
      <Dialog.Root>
        <CallToAction />
        <Dialog.Portal>
          <Dialog.Overlay className={'bg-black/60 inset-0 fixed'} />
          <Dialog.Content
            className={
              'bg-[#2a2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25 '
            }
          >
            <Dialog.Title className={'text-3xl font-black'}>
              Publique um anúncio
            </Dialog.Title>

            <form className={'mt-8 flex flex-col gap-4'}>
              <div className={'flex flex-col gap-2'}>
                <label className={'font-semibold'} htmlFor="game">
                  Qual o game ?
                </label>
                <Input
                  id={'game'}
                  type={'text'}
                  placeholder={'Qual o jogo que deseja jogra?'}
                />
              </div>

              <div className={'flex flex-col gap-2'}>
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input
                  id={'name'}
                  type="text"
                  placeholder={'Qual o seu nome no game?'}
                />
              </div>
              <div className={'grid grid-cols-2 gap-6'}>
                <div className={'flex flex-col gap-2'}>
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input
                    id={'yearsPlaying'}
                    type="number"
                    placeholder={'Tudo bem ser ZERO'}
                  />
                </div>

                <div className={'flex flex-col gap-2'}>
                  <label htmlFor="discord">Qual seu Discord?</label>
                  <Input
                    id={'discord'}
                    type="text"
                    placeholder={'Usuario#0000'}
                  />
                </div>
              </div>

              <div className={'flex gap-6'}>
                <div className={'flex flex-col gap-2'}>
                  <label htmlFor="">Quando costuma jogar?</label>
                  <div className={'grid grid-cols-4 gap-2'}>
                    <button
                      title={'Domingo'}
                      className={'h-8 w-8 rounded bg-zinc-900'}
                    >
                      D
                    </button>

                    <button
                      title={'Domingo'}
                      className={'h-8 w-8 rounded bg-zinc-900'}
                    >
                      D
                    </button>

                    <button
                      title={'Domingo'}
                      className={'h-8 w-8 rounded bg-zinc-900'}
                    >
                      D
                    </button>
                    <button
                      title={'Domingo'}
                      className={'h-8 w-8 rounded bg-zinc-900'}
                    >
                      D
                    </button>
                    <button
                      title={'Domingo'}
                      className={'h-8 w-8 rounded bg-zinc-900'}
                    >
                      D
                    </button>
                    <button
                      title={'Domingo'}
                      className={'h-8 w-8 rounded bg-zinc-900'}
                    >
                      D
                    </button>
                    <button
                      title={'Domingo'}
                      className={'h-8 w-8 rounded bg-zinc-900'}
                    >
                      D
                    </button>
                  </div>
                </div>
                <div className={'flex flex-1 flex-col gap-2 '}>
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className={'grid grid-cols-2 gap-2'}>
                    <Input type={'time'} id={'hourStart'} placeholder={'De'} />
                    <Input type={'time'} id={'hourEnd'} placeholder={'Até'} />
                  </div>
                </div>
              </div>

              <div className={'mt-2 flex gap-2 text-sm'}>
                <Input type={'checkbox'} />
                Costumo me conectar ao chat de voz
              </div>

              <footer className={'mt-4 flex justify-end gap-4'}>
                <Dialog.Close
                  className={
                    'flex items-center px-5 bg-zinc-500 h-12 rounded-md font-semibold hover:bg-zinc-600'
                  }
                >
                  Cancelar
                </Dialog.Close>
                <button
                  className={
                    'px-5 bg-violet-500 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
                  }
                >
                  <GameController className={'h-6 w-6'} />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export { App }
