import React from 'react'
import renderer from 'react-test-renderer'
import ListLink from '../components/list-link'

const MOCK = {
  text: 'Ugly Tarantula',
  url: 'https://www.uglytarantula.com'
}

describe('component - layout', () => {
  it('should render', () => {
    const component = renderer.create(<ListLink />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render with props', () => {
    const component = renderer.create(<ListLink {...MOCK} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
