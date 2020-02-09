import React from 'react'
import Layout from '../components/layout'

const s = {
  gween: { color: '#65A300' },
  woyal: { color: '#005C9E' },
  mel: { color: '#0096DB' },
  pwink: { color: '#FF52A3' },
  pweach: { color: '#FF5757' },
  purp: { color: '#B24DFF' },
  weal: { color: '#29A0A8' },
  wed: { color: '#FF2929' }
}

const cx = {
  main: 'vh-100 dt w-100',
  container: 'dtc v-mid tc',
  article: 'measure-narrow center sans-serif f3 fw2 ph2',
  h1: 'lh-title fw2 f2',
  h1a: 'no-underline',
  ul: 'list pl0 tl',
  li: 'lh-title mv2',
  liLast: 'lh-title mb2 mt4',
  a: 'link underline',
  hr: 'b--none',
  img: 'br-100 h5 w5 center dib ma3'
}

const Index = () => (
  <Layout className={cx.main}>
    <div className={cx.container}>
      <article className={cx.article}>
        <img
          className={cx.img}
          src='/static/uglytarantula-commission.jpg'
          title='commission by @uglytarantula'
        />
        <h1 className={cx.h1}>
          <a
            className={cx.h1a}
            href='/'
          >
            {'Hi! My name is Melanie.'}
          </a>
        </h1>

        <ul className={cx.ul}>
          <li className={cx.li}>
            {'i link blog at '}
            <a
              style={s.mel}
              className={cx.a}
              rel='me'
              href='https://melkat.link'
            >
              {'melkat.link'}
            </a>
          </li>
          <li className={cx.li}>
            {'i code at '}
            <a
              style={s.mel}
              className={cx.a}
              rel='me'
              href='https://melkat.dev'
            >
              {'melkat.dev'}
            </a>
          </li>
          <li className={cx.li}>
            {'i have a gif library at '}
            <a
              style={s.pwink}
              className={cx.a}
              rel='me'
              href='https://myhot.pics'
            >
              {'myhot.pics'}
            </a>
          </li>
          <li className={cx.li}>
            {'i make siri shortcuts on '}
            <a
              style={s.weal}
              className={cx.a}
              rel='me'
              href='https://routinehub.co/user/zicklepop'
            >
              {'routinehub'}
            </a>
          </li>
          <li className={cx.li}>
            {'i make miku sing ska on '}
            <a
              style={s.woyal}
              className={cx.a}
              rel='me'
              href='https://soundcloud.com/ZicklePop'
            >
              {'soundcloud'}
            </a>
          </li>
          <li className={cx.li}>
            {'i play games on '}
            <a
              style={s.purp}
              className={cx.a}
              rel='me'
              href='https://twitch.tv/melkat39'
            >
              {'twitch'}
            </a>
            {' & '}
            <a
              style={s.wed}
              className={cx.a}
              rel='me'
              href='https://www.youtube.com/channel/UCslys3G1X4VbjNPPclfmwDQ'
            >
              {'yt'}
            </a>
          </li>
          <li className={cx.li}>
            {'do you need to '}
            <a
              style={s.gween}
              className={cx.a}
              rel='me'
              href='http://givemel.cash'
            >
              {'givemel.cash'}
            </a>
            {'?'}
          </li>
          <li className={cx.liLast}>
            {'artwork by '}
            <a
              style={s.pweach}
              className={cx.a}
              href='https://www.uglytarantula.com'
            >
              {'Ugly Tarantula'}
            </a>
          </li>
        </ul>
      </article>
    </div>
    <style global jsx>
      {`
          ul > li::before {
            content: '*';
            color: #8F8F8F;
            width: 1rem;
            display: inline-block;
          }
      `}
    </style>
  </Layout>
)

export default Index
