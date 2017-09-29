import React from 'react'
import { shallow, render } from 'enzyme'
import toJson from 'enzyme-to-json'

import Tooltip from '../Tooltip'

describe('Tooltip', () => {

  const doRender = (overrides = {}) => render(
    <Tooltip {...overrides}>Helper text</Tooltip>
  )

  const doShallow = (overrides = {}) => shallow(
    <Tooltip {...overrides}>Helper text</Tooltip>
  )

  it('renders', () => {
    const tooltip = doRender()

    expect(toJson(tooltip)).toMatchSnapshot()
  })

  it('renders an HTML div tag', () => {
    const tooltip = doShallow()

    expect(tooltip).toHaveTagName('div')
  })

  it('has a trigger'), () => {
    const tooltip = doShallow()

    expect(tooltip.find('button')).toContainReact(<DecorativeIcon symbol="questionMarkCircle" size={16} />)
  }

  it('has a bubble', () => {
    const tooltip = doShallow()

    expect(tooltip.find('span').text()).toEqual('Helper text')
  })

  // it('can set direction', () => {
  //   let tooltip = doShallow()
  //   expect(tooltip).toHaveClassName('right')
  //
  //   tooltip = doShallow({ direction: 'left' })
  //   expect(tooltip).toHaveClassName('left')
  //
  // })

  it('passes additional attributes to the element', () => {
    const tooltip = doShallow({ id: 'the-id', 'data-some-attr': 'some value' })

    expect(tooltip).toHaveProp('id', 'the-id')
    expect(tooltip).toHaveProp('data-some-attr', 'some value')
  })

  it('does not allow custom CSS', () => {
    const tooltip = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(tooltip).not.toHaveProp('className', 'my-custom-class')
    expect(tooltip).not.toHaveProp('style')
  })
})
