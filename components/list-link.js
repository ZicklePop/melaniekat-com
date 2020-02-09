import React from 'react'
import PropTypes from 'prop-types'

const cx = {
  li: 'lh-title mv2',
  a: 'link underline'
}

const ListLink = ({ className, color, text, rel, prefix, postfix, url, urlClassName }) => (
  <li className={className}>
    {prefix}
    <a
      style={{ color }}
      className={urlClassName}
      rel={rel}
      href={url}
    >
      {text}
    </a>
    {postfix}
  </li>
)

ListLink.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  rel: PropTypes.string,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  url: PropTypes.string,
  urlClassName: PropTypes.string
}

ListLink.defaultProps = {
  className: cx.li,
  urlClassName: cx.a,
  color: '#0096DB',
  text: '',
  prefix: '',
  postfix: ''
}

export default ListLink
