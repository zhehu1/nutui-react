import React, { useState } from 'react'
import { ShortPassword, Cell, Toast } from '@/packages/nutui.react.taro'

const ShortPasswordDemo = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [value, setValue] = useState<string | number>('')
  const change = (value: number | string) => {
    console.log(value)
    setValue(value)
  }
  const onTips = () => {
    Toast.text('执行忘记密码提示语')
  }
  return (
    <div className="demo">
      <h2>基础用法</h2>
      <Cell
        title="基础用法"
        isLink
        onClick={() => {
          setVisible1(true)
        }}
      />
      <ShortPassword
        visible={visible1}
        modelValue={value}
        onClose={() => setVisible1(false)}
        change={(value) => change(value)}
      />
      <h2>显示按钮组</h2>
      <Cell
        title="显示按钮组"
        isLink
        onClick={() => {
          setVisible2(true)
        }}
      />
      <ShortPassword
        visible={visible2}
        onClose={() => setVisible2(false)}
        noButton={false}
        onOk={() => setVisible2(false)}
        onCancel={() => setVisible2(false)}
      />
      <h2>自定义密码长度4</h2>
      <Cell
        title="自定义密码长度4"
        isLink
        onClick={() => {
          setVisible3(true)
        }}
      />
      <ShortPassword
        visible={visible3}
        onClose={() => setVisible3(false)}
        length={4}
      />
      <h2>忘记密码提示语事件回调</h2>
      <Cell
        title="忘记密码提示语事件回调"
        isLink
        onClick={() => {
          setVisible4(true)
        }}
      />
      <ShortPassword
        visible={visible4}
        onClose={() => setVisible4(false)}
        onTips={() => onTips()}
      />
    </div>
  )
}

export default ShortPasswordDemo
