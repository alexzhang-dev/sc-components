import { render } from '@solidjs/testing-library'
import { Avatar } from '..'

describe('Avatar', () => {
  it('render', () => {
    expect(render(() => <Avatar url="https://example.com" />).container).toMatchInlineSnapshot(`
      <div>
        <img
          class=""
          src="https://example.com"
        />
      </div>
    `)
  })
  it('render rounded', () => {
    expect(render(() => <Avatar url="https://example.com" rounded></Avatar>).container).toMatchInlineSnapshot(`
      <div>
        <img
          class="_rounded_82f0a3"
          src="https://example.com"
        />
      </div>
    `)
  })
  it('should click', () => {
    const onClick = vitest.fn()
    const { getByRole } = render(() => <Avatar url="https://example.com" onClick={onClick} />)
    getByRole('img').click()
    expect(onClick).toBeCalledTimes(1)
  })
})
