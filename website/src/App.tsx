import './styles/boot.css'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import brand from './assets/brand.svg'
import { CallToAction } from './components/CallToAction'
import { GameCard } from './components/GameCard'
import { CreateAddModal } from './components/CreateAddModal'

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
  }, [games])

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
        <CreateAddModal />
      </Dialog.Root>
    </div>
  )
}

export { App }
