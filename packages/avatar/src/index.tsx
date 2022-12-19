import type { Component, JSX } from 'solid-js'
import css from './index.module.css'

export interface Props {
  url: string
  rounded?: boolean
  attr?: JSX.ImgHTMLAttributes<HTMLImageElement>
  onClick?: () => void
}

export const Avatar: Component<Props> = (
  { url, rounded = false, onClick, attr = {} }: Props,
) => {
  return (
    <img src={url} class={rounded ? css.rounded : ''} onclick={onClick} {...attr} />
  )
}
