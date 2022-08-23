import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button } from 'rsuite';
import 'rsuite/styles/index.less'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button appearance="default">Default</Button>
    <Button appearance="primary">Primary</Button>
    <Button appearance="link">Link</Button>
    <Button appearance="subtle">Subtle</Button>
      <Button appearance="ghost">Ghost</Button>
      <Button color="violet" appearance="primary">
        Violet
      </Button>
      <Button>Hola</Button>
    </div>
  )
}

export default App
