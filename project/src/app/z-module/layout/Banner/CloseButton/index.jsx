"use client"
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useStore } from '../../../store'
const { visibleBanner } = useStore

export default function closeButton() {
    const { changeVisibleBanner } = visibleBanner();

    return(
        <button onClick={changeVisibleBanner} type="button" className="relative isolate -m-3 p-3 focus-visible:outline-offset-[-4px] z-20">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-indigo-300 hover:text-red-400" aria-hidden="true" />
        </button>
    )
}