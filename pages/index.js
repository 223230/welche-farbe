import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Inter_Tight } from 'next/font/google'
import { useState } from 'react';
import ColorPicker from '@/components/ColorPicker';
import { ChromePicker } from 'react-color';

const inter = Inter({ subsets: ['latin'] })
const interTight = Inter_Tight({ subsets: ['latin'] })

export default function Home() {
  const [state, setState] = useState({
    displayColorPicker: false,
    color: {
      r: '0',
      g: '0',
      b: '0',
      a: '1',
    },
  });

  const handleChange = (color) => {
    setState({...state, color: color.rgb });
  };

  return (
    <>
      <Head>
        <title>Welche Farbe</title>
        <meta
          name="description"
          content="Sagt in normalen Worten, wie eine Farbe heißt"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`
        ${inter.className}
        w-screen
        h-screen
        flex
        justify-center
        items-center
        sm:p-4
        bg-zinc-900
        text-zinc-400
        text-base
        lg:text-lg
      `}>
        <div className='
          sm:px-12
          sm:py-8
          lg:px-16
          lg:py-12
          lg:box-content
          min-h-[20rem]
          max-w-3xl
          h-full
          sm:h-fit
          bg-zinc-800
          sm:border
          sm:rounded-2xl
          sm:shadow-lg
          lg:shadow-2xl
          border-zinc-700
          flex
          flex-col
          gap-y-6
          lg:gap-y-8
          grow
        '>
          <div className='space-y-2 px-6 pt-8 sm:p-0'>
            <h1
              className={`
                text-5xl
                lg:text-6xl
                text-center
                font-bold
                ${interTight.className}
                text-zinc-100
                mb-1
                lg:mb-2
              `}
            >
              Welche Farbe
            </h1>
            <p className='text-center'>
              Sagt in normalen Worten, wie eine Farbe heißt. 100% wahr.
            </p>
            <p className='text-center pt-8 text-xl lg:text-2xl font-bold'>
              NAME
            </p>
            <p className='text-center'>
              Nerds würden sagen, es sei NAME
            </p>
          </div>
          <div className='mx-6 sm:mx-16'>
            <ChromePicker color={ state.color } onChange={ handleChange }/>
          </div>
          <div className='grow'></div>
          <div className='text-sm lg:text-base p-6 sm:p-0 bg-zinc-900 sm:bg-transparent'>
            <div className='text-zinc-500'>
              Gemacht von {' '}
              <Link href='https://twitter.com/_223230' className='text-zinc-400'>
                Luna (@_223230)
              </Link>
            </div>
            <div className='text-zinc-500'>
              Credit an {' '}
              <Link href='https://twitter.com/HansGurkenbauer/' target='blank' className='text-zinc-400'>
                Hans Gurkenbauers (@HansGurkenbauer)
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
