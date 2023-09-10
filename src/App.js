
import './App.css';
import HocCompo, { HocCompoTwo } from './hoc/HocCompo';
import PersonOne from './hoc/PersonOne';
import PersonTwo from './hoc/PersonTwo';
import ParentCompo from './purecomponent/ParentCompo';


function App() {
  return (
    <div className="App">
      <h1 style={{fontSize:50}}>Q1: EXAMPLE OF  PURE COMPONENT PLEASE CHECK CONSOLE</h1>
      <ParentCompo/>
      <h1 style={{fontSize:50}}>Q2: EXAMPLE OF  HOC COMPONENT</h1>
      <HocCompo value={PersonOne}/>
      <HocCompoTwo value={PersonTwo}/>
    </div>
  );
}

export default App;
