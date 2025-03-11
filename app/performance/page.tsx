import React from 'react'
import performanceSrc from '../performance/performance.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

//指定页面头名字
export const metadata: Metadata = {
  title : 'Performance',
}

export default function Page() {
    return (
      <Hero imgUrl={performanceSrc} altTxt='Performance' content='Performance--------'/>
    )
}
