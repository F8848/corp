import React from 'react'
import reliabilitySrc from '../reliability/reliability.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title : 'Reliability',
}

export default function Page() {
    return (
      <Hero imgUrl={reliabilitySrc} altTxt='Reliability' content='Super high reliability hosting.'/>
    )
}
