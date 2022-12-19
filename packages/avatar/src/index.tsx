import type { Component } from 'solid-js'
import css from './index.module.css'

export interface Props {
  url: string
  rounded?: boolean
  onClick?: () => void
}

export const Avatar: Component<Props> = (
  { url, rounded = false, onClick }: Props,
) => {
  return (
    <img src={url} class={rounded ? css.rounded : ''} onclick={onClick} />
  )
}
