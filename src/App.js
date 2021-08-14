import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandom } from './actions/randomAction'
function App() {
  const counter1 = useSelector(state => state.mycountappNormal);
  const counter2 = useSelector(state => state.mycountappDouble);
  const counter3 = useSelector(state => state.mycountappRandom);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandom());
  }, [])
  
  return (
    <div className="App">
      <button onClick={(e) => dispatch({ type: "INCREMENT" })}>Increment</button>
      <h1>{counter1.count}</h1>
      <button onClick={(e) => dispatch({ type: "DICREMENT" })}>Dicrement</button>
      <hr />
      <button onClick={(e) => dispatch({ type: "INCREMENT2" })}>Increment</button>
      <h1>{counter2.count}</h1>
      <button onClick={(e) => dispatch({ type: "DICREMENT2" })}>Dicrement</button>
      <hr />
      <button onClick={(e) => dispatch({ type: "INCREMENT3" })}>Increment</button>
      <h1>{counter3.count}</h1>
      <button onClick={(e) => dispatch({ type: "DICREMENT3" })}>Dicrement</button>
    </div >

  );
}






export default App;
