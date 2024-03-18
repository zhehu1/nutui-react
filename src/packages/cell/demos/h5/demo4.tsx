import React from 'react'
import { Warning, ArrowRight } from '@nutui/icons-react'
import { Cell, Switch, Tag, Avatar } from '@nutui/nutui-react'

const App = () => {
  return (
    <Cell.Group>
      <Cell title="Switch" extra={<Switch defaultChecked />} />
      <Cell title="Tag" extra={<Tag type="primary">6个</Tag>} />
      <Cell title="Icon" extra={<Warning />} />
      <Cell
        title="Avatar"
        extra={
          <>
            <Avatar
              size={20}
              src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
            />
            <ArrowRight />
          </>
        }
      />
    </Cell.Group>
  )
}
export default App
