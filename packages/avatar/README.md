# Button Component

Base Component for use in SolidJS applications.

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

| Prop | Type | Description |
| --- | --- | --- |
| `Type` | enum | The button type. |
| `onClick` | `function` | The function to call when the button is clicked. |
