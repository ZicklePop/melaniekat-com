import React from 'react'
import Layout from '../components/layout'
import ListLink from '../components/list-link'

const colors = {
  gween: '#65A300',
  mel: '#0096DB',
  pweach: '#FF5757',
  pwink: '#FF52A3'
}

const cx = {
  main: 'vh-100 dt w-100',
  container: 'dtc v-mid tc',
  article: 'measure-narrow center sans-serif f3 fw2 ph2',
  h1: 'lh-title fw2 f2',
  h1a: 'no-underline',
  ul: 'list pl0 tl',
  liLast: 'lh-title mb2 mt4',
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
          <ListLink
            prefix='i link blog at '
            text='melkat.link'
            rel='me'
            url='https://melkat.link'
          />
          <ListLink
            prefix='i code at '
            text='melkat.dev'
            rel='me'
            url='https://melkat.dev'
          />
          <ListLink
            prefix='my gif library is at '
            text='myhot.pics'
            rel='me'
            url='https://myhot.pics'
          />

          <ListLink
            className={cx.liLast}
            color={colors.pwink}
            prefix='i make siri shortcuts on '
            text='routinehub'
            rel='me'
            url='https://routinehub.co/user/zicklepop'
          />
          <ListLink
            color={colors.gween}
            prefix='do you need to '
            text='givemel.cash'
            postfix='?'
            rel='me'
            url='http://givemel.cash'
          />
          <ListLink
            className={cx.liLast}
            color={colors.pweach}
            prefix='artwork by '
            text='Ugly Tarantula'
            url='https://www.uglytarantula.com'
          />
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
