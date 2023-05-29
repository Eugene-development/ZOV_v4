"use client"
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useBannerStore } from '../../../store'
const { visibleBanner } = useBannerStore

export default function closeButton() {
    const { changeVisibleBanner } = visibleBanner();

    return(
        <button onClick={changeVisibleBanner} type="button" className="relative isolate -m-3 p-3 focus-visible:outline-offset-[-4px] z-20">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-indigo-300" aria-hidden="true" />
        </button>
    )
}