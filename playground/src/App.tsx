import type { Component } from 'solid-js'
import { Button, Type } from '@sc-components/button'

const onClick = () => {
  // eslint-disable-next-line no-console
  console.log('click')
}

const App: Component = () => {
  return (
    <Button type={Type.Primary} onClick={onClick}>222</Button>
  )
}

export default App
