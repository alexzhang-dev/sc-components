# Button Component

Base avatar component for use in SolidJS applications.

## Installation

```bash
pnpm install @sc-components/avatar
```

## Usage

```jsx
import { Avatar } from '@sc-components/avatar';

export default function App() {
  return (
    <Avatar url="https://www.exmaple.com" rounded />
  );
}
```

## Acceptable Props

```ts
interface Props {
  // avatar url
  url: string
  // is rounded
  rounded?: boolean
  // other dom attributes (such as class, style, etc.)
  attr?: JSX.ImgHTMLAttributes<HTMLImageElement>
  // onClick handler
  onClick?: () => void
}
```
