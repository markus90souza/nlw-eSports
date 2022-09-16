import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
const CallToAction = () => {
  return (
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

        <Dialog.Trigger
          className={
            'flex items-center gap-3 py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600'
          }
        >
          <MagnifyingGlassPlus size={24} />
          Publicar anúcio
        </Dialog.Trigger>
      </div>
    </div>
  )
}

export { CallToAction }
