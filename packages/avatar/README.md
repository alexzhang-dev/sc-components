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

| Prop | Type | Description |
| --- | --- | --- |
| `url` | enum | The button type. |
| `onClick` | `function` | The function to call when the button is clicked. |
