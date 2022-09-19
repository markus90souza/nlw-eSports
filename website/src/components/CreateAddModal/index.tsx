import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
// import * as Select from '@radix-ui/react-select'
import { Check, GameController } from 'phosphor-react'
import { Input } from './../Form/Input'
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'

type Game = {
  id: string
  title: string
}

export const CreateAddModal = () => {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  const handleCreateAd = async (event: FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)

    const data = Object.fromEntries(formData)

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel,
      })
      alert('Anuncio criado com suceeo')
    } catch (error) {
      alert('Anuncio Erro')
    }
  }

  useEffect(() => {
    const getGames = () => {
      axios('http://localhost:3333/games').then((response) => {
        setGames(response.data)
      })
    }
    getGames()
  }, [])

  return (
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

        <form onSubmit={handleCreateAd} className={'mt-8 flex flex-col gap-4'}>
          <div className={'flex flex-col gap-2'}>
            <label className={'font-semibold'} htmlFor="game">
              Qual o game ?
            </label>

            <select
              id={'game'}
              name={'game'}
              className={
                'bg-zinc-900 rounded py-3 px-4 text-sm placeholder:text-zinc-500 appearance-none'
              }
              defaultValue={''}
            >
              <option disabled>{'Qual o jogo que deseja jogar?'}</option>
              {games.map((game) => {
                return (
                  <option key={game.id} value={game.id}>
                    {game.title}
                  </option>
                )
              })}
            </select>

            {/* <Select.Root>
              <Select.Trigger>
                <Select.Value />
                <Select.Icon />
              </Select.Trigger>

              <Select.Portal>
                <Select.Content
                  className={
                    'bg-zinc-900 rounded py-3 px-4 text-sm placeholder:text-zinc-500'
                  }
                ></Select.Content>
              </Select.Portal>
            </Select.Root> */}
          </div>

          <div className={'flex flex-col gap-2'}>
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input
              id={'name'}
              name={'name'}
              type="text"
              placeholder={'Qual o seu nome no game?'}
            />
          </div>
          <div className={'grid grid-cols-2 gap-6'}>
            <div className={'flex flex-col gap-2'}>
              <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
              <Input
                id={'yearsPlaying'}
                name={'yearsPlaying'}
                type="number"
                placeholder={'Tudo bem ser ZERO'}
              />
            </div>

            <div className={'flex flex-col gap-2'}>
              <label htmlFor="discord">Qual seu Discord?</label>
              <Input
                id={'discord'}
                name={'discord'}
                type="text"
                placeholder={'Usuario#0000'}
              />
            </div>
          </div>

          <div className={'flex gap-6'}>
            <div className={'flex flex-col gap-2'}>
              <label htmlFor="">Quando costuma jogar?</label>
              <ToggleGroup.Root
                type={'multiple'}
                className={'grid grid-cols-4 gap-2'}
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value={'0'}
                  title={'Domingo'}
                  className={`h-8 w-8 rounded ${
                    weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                  } `}
                >
                  D
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value={'1'}
                  title={'Segunda'}
                  className={`h-8 w-8 rounded ${
                    weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                  } `}
                >
                  S
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value={'2'}
                  title={'Terça'}
                  className={`h-8 w-8 rounded ${
                    weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                  } `}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value={'3'}
                  title={'Quarta'}
                  className={`h-8 w-8 rounded ${
                    weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                  } `}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value={'4'}
                  title={'Quinta'}
                  className={`h-8 w-8 rounded ${
                    weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                  } `}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value={'5'}
                  title={'Sexta'}
                  className={`h-8 w-8 rounded ${
                    weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                  } `}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value={'6'}
                  title={'Sábado'}
                  className={`h-8 w-8 rounded ${
                    weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                  } `}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className={'flex flex-1 flex-col gap-2 '}>
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className={'grid grid-cols-2 gap-2'}>
                <Input
                  type={'time'}
                  id={'hourStart'}
                  name={'hourStart'}
                  placeholder={'De'}
                />
                <Input
                  type={'time'}
                  id={'hourEnd'}
                  name={'hourEnd'}
                  placeholder={'Até'}
                />
              </div>
            </div>
          </div>

          <label className={'mt-2 flex gap-2 text-sm items-center'}>
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChannel(true)
                } else {
                  setUseVoiceChannel(false)
                }
              }}
              className={'h-6 w-6 p-1 rounded bg-zinc-900'}
            >
              <Checkbox.Indicator>
                <Check className={'w-4 h-4 text-emerald-400'} />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz?
          </label>

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
  )
}
