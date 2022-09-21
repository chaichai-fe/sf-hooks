import { useLocalStorage } from './packages'

function App() {
  const [value, setStorageValue] = useLocalStorage('hook-key', 'cp123')
  const setClickHandler = () => {
    setStorageValue('123cp')
  }
  return (
    <div className="App">
      this is app:{value}
      <button onClick={setClickHandler}>setStorage</button>
    </div>
  )
}

export default App
