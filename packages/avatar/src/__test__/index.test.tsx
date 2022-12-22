/// <reference types="vitest/globals" />

import { render } from '@solidjs/testing-library'
import { Avatar } from '..'

describe('Avatar', () => {
  it('render', () => {
    const { container, unmount } = render(() => <Avatar url="https://example.com" />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <img
          class=""
          src="https://example.com"
        />
      </div>
    `)
    unmount()
  })
  it('render rounded', () => {
    const { container, unmount } = render(() => <Avatar url="https://example.com" rounded></Avatar>)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <img
          class="_rounded_82f0a3"
          src="https://example.com"
        />
      </div>
    `)
    unmount()
  })
  it('should click', () => {
    const onClick = vitest.fn()
    const { getByRole, unmount } = render(() => <Avatar url="https://example.com" onClick={onClick} />)
    getByRole('img').click()
    expect(onClick).toBeCalledTimes(1)
    unmount()
  })
  it('acceptable html attribute', () => {
    const { container, unmount } = render(() => <Avatar url="https://example.com" attr={{
      alt: 'avatar',
      style: {
        width: '300px',
        height: '300px',
      },
    }} />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <img
          alt="avatar"
          class=""
          src="https://example.com"
          style="width: 300px; height: 300px;"
        />
      </div>
    `)
    unmount()
  })
})
