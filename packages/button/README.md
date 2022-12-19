# Button Component

Base button component for use in SolidJS applications.

## Installation

```bash
pnpm install @sc-components/button
```

## Usage

```jsx
import { Button } from '@sc-components/button';

export default function App() {
  return (
    <Button>Click Me</Button>
  );
}
```

## Acceptable Props

```ts
enum Type {
  Primary = 'primary',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
}

interface Props {
  // button type
  type?: Type
  // button children
  children: JSX.Element
  // onClick handler
  onClick?: () => void
}
```
