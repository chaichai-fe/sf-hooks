import { useTimeout } from './packages/useTimeout'

function App() {
  useTimeout(()=>{
    console.log('逻辑执行了');
  },2000)
  return <div className="App">this is app</div>
}

export default App
