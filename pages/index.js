import React from 'react'
import Head from 'next/head'
import { insertRule, css, style, rehydrate } from 'glamor'
import { tachyons, reset, wrap } from 'glamor-tachyons'

let darkModeEnabled = true
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids)
  darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches
}
reset({ insertRule })
const t = (classNames) => css(tachyons(classNames))
const white = '#fff'
const black = '#000'
const nearBlack = '#111'
css.global('body, a', {
  color: darkModeEnabled ? white : nearBlack,
  backgroundColor: darkModeEnabled ? black : white
})

const styles = {
  bullet: style({
    '> li::before': {
      content: '*',
      color: '#8F8F8F',
      width: '1rem',
      display: 'inline-block'
    }
  }),
  gween: style({ color: '#65A300' }),
  woyal: style({ color: '#005C9E' }),
  mel: style({ color: '#0096DB' }),
  pwink: style({ color: '#FF52A3' }),
  pweach: style({ color: '#FF5757' }),
  purp: style({ color: '#B24DFF' }),
  weal: style({ color: '#29A0A8' }),
  wed: style({ color: '#FF2929' })
}

const classNames = wrap({
  main: 'vh-100 dt w-100',
  container: 'dtc v-mid tc',
  article: 'measure-narrow center sans-serif f3 fw2 ph2',
  h1: 'lh-title fw2 f2',
  ul: 'list pl0 tl',
  li: 'lh-title mv2',
  liLast: 'lh-title mb2 mt4',
  a: 'link underline',
  hr: 'b--none',
  img: 'br-100 h5 w5 center dib ma3'
}, css)

export default () => (
  <main className={classNames.main}>
    <Head>
      <title>Melanie Kat</title>
    </Head>
    <div className={classNames.container}>
      <article className={classNames.article}>
        <img
          className={classNames.img}
          src={'/static/uglytarantula-commission.jpg'}
          title={'commission by @uglytarantula'}
        />
        <h1 className={classNames.h1}>
          <a
            className={t('no-underline')}
            href='/'
          >
            {'Hi! My name is Melanie.'}
          </a>
        </h1>

        <ul {...styles.bullet} className={classNames.ul}>
          <li className={classNames.li}>
            {'i link blog at '}
            <a
              {...styles.mel}
              className={classNames.a}
              rel='me'
              href='https://melkat.links'
            >
              {'melkat.links'}
            </a>
          </li>
          <li className={classNames.li}>
            {'i code at '}
            <a
              {...styles.mel}
              className={classNames.a}
              rel='me'
              href='https://melkat.dev'
            >
              {'melkat.dev'}
            </a>
          </li>
          <li className={classNames.li}>
            {'i make siri shortcuts on '}
            <a
              {...styles.weal}
              className={classNames.a}
              rel='me'
              href='https://routinehub.co/user/zicklepop'
            >
              {'routinehub'}
            </a>
          </li>
          <li className={classNames.li}>
            {'i have a gif library at '}
            <a
              {...styles.pwink}
              className={classNames.a}
              rel='me'
              href='https://myhot.pics'
            >
              {'myhot.pics'}
            </a>
          </li>
          <li className={classNames.li}>
            {'i make miku sing ska on '}
            <a
              {...styles.woyal}
              className={classNames.a}
              rel='me'
              href='https://soundcloud.com/ZicklePop'
            >
              {'soundcloud'}
            </a>
          </li>
          <li className={classNames.li}>
            {'i play games on '}
            <a
              {...styles.purp}
              className={classNames.a}
              rel='me'
              href='https://twitch.tv/melkat39'
            >
              {'twitch'}
            </a>
            {' & '}
            <a
              {...styles.wed}
              className={classNames.a}
              rel='me'
              href='https://www.youtube.com/channel/UCslys3G1X4VbjNPPclfmwDQ'
            >
              {'yt'}
            </a>
          </li>
          <li className={classNames.li}>
            {'do you need to '}
            <a
              {...styles.gween}
              className={classNames.a}
              rel='me'
              href='http://givemel.cash'
            >
              {'givemel.cash'}
            </a>
            {'?'}
          </li>
          <li className={classNames.liLast}>
            {'artwork by '}
            <a
              {...styles.pweach}
              className={classNames.a}
              href='https://www.uglytarantula.com'
            >
              {'Ugly Tarantula'}
            </a>
          </li>
        </ul>
      </article>
    </div>
  </main>
)
