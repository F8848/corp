import React from 'react'
import scaleSrc from '../scale/scale.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title : 'Scale',
}

export default function Page() {
    return (
      <Hero imgUrl={scaleSrc} altTxt='Scale' content='Scale your app to infinity.'/>
    )
}
