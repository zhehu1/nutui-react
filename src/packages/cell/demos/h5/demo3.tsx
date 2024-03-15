import React from 'react'
import { Cell } from '@nutui/nutui-react'
import { Apps, User, Warning } from '@nutui/icons-react'

const Demo3 = () => {
  return (
    <Cell.Group>
      <Cell
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <User />
            <span style={{ marginLeft: '5px' }}>我是标题</span>
          </div>
        }
        description={
          <span>
            我是描述<b style={{ color: 'red' }}>1</b>
          </span>
        }
        extra="描述文字"
      />
      <Cell
        title={
          <div style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Apps />
            <span style={{ marginLeft: '5px', marginRight: '2px' }}>
              我是标题
            </span>
            <Warning width={12} height={12} />
          </div>
        }
        extra="描述文字"
      />
    </Cell.Group>
  )
}
export default Demo3
