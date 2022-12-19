import type { Component, JSX } from 'solid-js'
import { NOOP } from '@sc-components/shared'

export enum Type {
  Primary = 'primary',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
}

export interface Props {
  type?: Type
  children: JSX.Element
  onClick?: () => void
}

export const Button: Component<Props> = (
  { type = Type.Primary, children, onClick = NOOP },
) => {
  return (
    <button data-type={type} onclick={onClick}>
      {children}
    </button>
  )
}
