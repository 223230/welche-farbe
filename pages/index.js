import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter, Inter_Tight } from 'next/font/google'
import { useEffect, useState } from 'react';
import { ChromePicker } from 'react-color';
import ColorNamer from 'color-namer';

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

  const [colorName, setColorName] = useState("");
  const [nerdName, setNerdName] = useState("");

  const handleChange = (color) => {
    setState({...state, color: color.rgb });
    let c = ColorNamer(color.hex, { pick: ['roygbiv', 'ntc'] });
    let simpleName = "Poah keine Ahnung";
    let hue = color.hsl.h;
    


    if(color.hsl.s > .1) {
      if(hue < 19 || hue >= 350) { simpleName = "rot" }
      if(hue >= 19 && hue < 43) { simpleName = "orange" }
      if(hue >= 43 && hue < 70) { simpleName = "gelb" }
      if(hue >= 70 && hue < 166) { simpleName = "grün" }
      if(hue >= 166 && hue < 263) { simpleName = "blau" }
      if(hue >= 263 && hue < 280) { simpleName = "lila" }
      if(hue >= 280 && hue < 350) { simpleName = "pink" }
      
      if(color.hsl.l < .40) { simpleName = `dunkel${simpleName}`; }
      if(color.hsl.l < .10) { simpleName = `schwarz`; }
      if(color.hsl.l > .75) { simpleName = `hell${simpleName}`; }
      if(color.hsl.l > .90) simpleName = "weiß";
    } else {
      if(color.hsl.l < .10) simpleName = "schwarz";
      else if(color.hsl.l < .25) simpleName = "dunkelgrau";
      else if(color.hsl.l < .75) simpleName = "grau";
      else if(color.hsl.l < .90) simpleName = "hellgrau";
      else simpleName = "weiß";
    }

    simpleName = simpleName.charAt(0).toUpperCase() + simpleName.slice(1);
    setColorName(simpleName);
    setNerdName(c.ntc[0].name);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Welche Farbe</title>
        <meta name="title" content="Welche Farbe"/>
        <meta name="description" content="Sagt in normalen Worten, wie eine Farbe heißt. 100% Farbgarantie."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://farbe.stxarixdust.tech/"/>
        <meta property="og:title" content="Welche Farbe"/>
        <meta property="og:description" content="Sagt in normalen Worten, wie eine Farbe heißt. 100% Farbgarantie."/>
        <meta property="og:image" content="https://farbe.stxarixdust.tech/card-img.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://farbe.stxarixdust.tech/"/>
        <meta property="twitter:title" content="Welche Farbe"/>
        <meta property="twitter:description" content="Sagt in normalen Worten, wie eine Farbe heißt. 100% Farbgarantie."/>
        <meta property="twitter:image" content="https://farbe.stxarixdust.tech/card-img.png"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{backgroundColor: `rgb(${state.color.r}, ${state.color.g}, ${state.color.b})`}}>
        <main className={`
          ${inter.className}
          w-screen
          min-h-screen
          flex
          justify-center
          items-center
          sm:p-4
          bg-black/80
          text-white/60
          text-base
        `}>
          <div className='
            sm:px-12
            sm:py-8
            lg:px-16
            lg:py-12
            lg:box-content
            min-h-[20rem]
            max-w-xl
            h-full
            sm:h-fit
            bg-black/40
            sm:border
            sm:rounded-2xl
            sm:shadow-lg
            lg:shadow-2xl
            border-white/20
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
                  text-white/80
                  mb-1
                  lg:mb-2
                `}
              >
                Welche Farbe
              </h1>
              <p className='text-center'>
                Sagt in normalen Worten, wie eine Farbe heißt (100% Farbgarantie)
              </p>
              {colorName != "" && nerdName != "" ? (<div className='flex pt-8 gap-4 align-middle'>
                <div
                  className='w-16 aspect-square shrink-0 rounded-lg border border-white/30 shadow-lg'
                  style={{backgroundColor: `rgb(${state.color.r}, ${state.color.g}, ${state.color.b})`}}
                />
                <div>
                  <p className='text-xl lg:text-2xl font-bold text-white/80'>
                    {colorName}
                  </p>
                  <p className=''>
                    &quot;{nerdName}&quot; 🤓
                  </p>
                </div>
              </div>) : (<>
                <p className='text-center pt-8 text-xl lg:text-2xl font-bold select-none opacity-0'>
                  .
                </p>
                <p className='text-center select-none opacity-0'>
                  .
                </p>
              </>)}
            </div>
            <div className='mx-6 sm:mx-0'>
              <ChromePicker color={ state.color } onChange={ handleChange }/>
            </div>
            <div className='grow'></div>
            <div className='text-xs lg:text-sm p-6 sm:p-0 bg-black/20 sm:bg-transparent'>
              <div className='text-white/30'>
                Gemacht von {' '}
                <Link
                  href='https://twitter.com/_223230'
                  className='text-white/60 hover:underline hover:text-white/80'
                >
                  Luna
                </Link>,{' '}
                Credit geht an {' '}
                <Link
                  href='https://twitter.com/HansGurkenbauer/'
                  target='blank'
                  className='text-white/60 hover:underline hover:text-white/80'
                >
                  Hans Gurkenbauer
                </Link>.
                Inspiriert durch {' '}
                <Link
                  href='https://twitter.com/HansGurkenbauer/status/1651726821761724419'
                  target='blank'
                  className='text-white/60 hover:underline hover:text-white/80'
                >
                  diesen Tweet
                </Link>
              </div>
              <div className='text-white/30'>
                Quellcode: {' '}
                <Link
                  href='https://github.com/223230/welche-farbe'
                  target='blank'
                  className='text-white/60 hover:underline hover:text-white/80'
                >
                  223230/welche-farbe
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
