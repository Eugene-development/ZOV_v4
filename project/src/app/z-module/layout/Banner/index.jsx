"use client"
import Link from "next/link"

import CloseButton from './CloseButton';
import { useStore } from '../../store'
import {  PhoneIcon, EnvelopeIcon } from '@heroicons/react/20/solid'

const { visibleBanner } = useStore

export default function Banner() {
  const { currentVisibleBanner } = visibleBanner();

  return (
    currentVisibleBanner && 
      <div className="relative isolate flex items-center py-2.5 px-4 sm:px-3.5 bg-gray-900 justify-between">
        <svg
          viewBox="0 0 577 310"
          aria-hidden="true"
          className="absolute top-1/2 left-[max(-7rem,calc(30%-12rem))] -z-10 w-[20rem] -translate-y-1/2 transform-gpu blur-2xl"
        >
          <path
            id="a906133b-f855-4023-a54c-38d70c72fe9c"
            fill="url(#be47b6c9-9c22-49b2-a209-168b52fa0ada)"
            fillOpacity=".3"
            d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
          />
          <defs>
            <linearGradient
              id="be47b6c9-9c22-49b2-a209-168b52fa0ada"
              x1="614.778"
              x2="-42.453"
              y1="26.617"
              y2="96.115"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-1 justify-start">
          <div className="hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-indigo-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="ml-1 text-sm text-gray-50">Москва</span>
          </div>
          <div className="flex md:hidden">
            <EnvelopeIcon className="mt-0.5 h-5 w-5 text-indigo-100" aria-hidden="true" />
            <span className="ml-2 text-base text-gray-50">info@zov.top</span>
          </div>
        </div>

        <p className="hidden md:block text-sm leading-6 text-gray-50">
            <strong className="font-semibold">У вас есть готовый проект?</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current text-indigo-300" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            Отправьте нам на просчёт &nbsp;<span aria-hidden="true" > <span className='text-indigo-300'>&rarr; &nbsp;</span> info@zov.top</span>
        </p>
        <div className="hidden md:flex flex-1 justify-end">
          <CloseButton/>
        </div>
        <div className="md:hidden flex justify-end">
          <PhoneIcon className="h-5 w-5 text-indigo-100" aria-hidden="true" />
          <Link href="tel:+79154000020" className="ml-1 text-base text-gray-50">8 (915) 400-00-20</Link>
        </div>
      </div>
  )
}
