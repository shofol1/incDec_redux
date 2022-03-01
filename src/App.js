import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import store from './store';
import { useDispatch } from 'react-redux';
import { decNum, incNum } from './Action';


store.subscribe(()=>console.log(store.getState()))
function App() {
  const myState=useSelector(state=>state.changeNum)
  const dispatch=useDispatch();
  return (
    <div className="App">
     <h1>{myState}</h1>
     <button onClick={()=>dispatch(incNum())}>Increament</button>
     <button onClick={()=>dispatch(decNum())}>decreament</button>
    </div>
  );
}

export default App;
