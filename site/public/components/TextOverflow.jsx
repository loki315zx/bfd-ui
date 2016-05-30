import React from 'react'
import TextOverflow from 'c/TextOverflow'
import Pre from '../Pre'
import Warn from '../Warn'

const TextOverflowDemo = React.createClass({
  render() {
    return (
      <TextOverflow>
        <p style={{width: '100px'}}>我是很长的一段文字，鼠标滑过可显示全部</p>
      </TextOverflow>
    )
  }
})

const code = `import TextOverflow from 'bfd-ui/lib/TextOverflow'

const TextOverflowDemo = React.createClass({
  render() {
    return (
      <TextOverflow>
        <p style={{width: '100px'}}>我是很长的一段文字，鼠标滑过可显示全部</p>
      </TextOverflow>
    )
  }
})`

export default () => {
  return (
    <div>
      <h1>文字溢出</h1>
      <Pre>{code}</Pre>
      <TextOverflowDemo />
      <Warn>TextOverflow 只能包裹单个元素</Warn>
    </div>
  )
}