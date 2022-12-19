import type { Component } from 'solid-js'
import { Button, Type } from '@sc-components/button'
import { Avatar } from '@sc-components/avatar'

const onClick = () => {
  // eslint-disable-next-line no-console
  console.log('click')
}

const url = 'https://images.unsplash.com/photo-1671399513401-3cfccef3b274'

const App: Component = () => {
  return (
    <>
      <Button type={Type.Primary} onClick={onClick}>222</Button>
      <Avatar url={url}></Avatar>
    </>
  )
}

export default App
