import React from 'react'

type GameCardProps = {
  bannerUrl: string
  title: string
  adsCount: number
}

const GameCard = ({ bannerUrl, adsCount, title }: GameCardProps) => {
  return (
    <a href="" className={'relative rounded-lg overflow-hidden'}>
      <img src={bannerUrl} alt={title} />
      <div
        className={
          ' bg-box-game-gradient w-full pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0'
        }
      >
        <strong className={'font-bold text-white block'}>{title}</strong>
        <span className={'text-zinc-300 block'}>{adsCount} Anuncios</span>
      </div>
    </a>
  )
}

export { GameCard }
