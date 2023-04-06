import 'sample/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }: AppProps) {

  const router=useRouter()
  useEffect(()=>{
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
  })
  const [progress, setProgress] = useState(0)
  return <div>
    <LoadingBar
        color='#f11946'
        height={5}
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
    <Navbar/> 
  <Component {...pageProps} />
  </div>
}
