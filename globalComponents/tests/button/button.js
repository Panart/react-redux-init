import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { Button } from 'globalComponents'

function setup(props, content) {

  let renderer = TestUtils.createRenderer()

  renderer.render (
    <Button { ...props }>{ content }</Button>
  )

  let output = renderer.getRenderOutput()

  return {
    output
  }
}

describe('globalComponent', () => {
  describe('Button', () => {
    it('should render correctly with all props', () => {

      const { output } = setup({
        disabled: true
      }, 'Button test1')

      expect(output.type).toBe('button')
      expect(output.props.className).toBe('button button_disabled')
      expect(output.props.children).toBe('Button test1')

    })

    it('should render correctly with some props', () => {

      const { output } = setup({}, 'Button test2')

      expect(output.type).toBe('button')
      expect(output.props.className).toBe('button')
      expect(output.props.children).toBe('Button test2')

    })

  })
})