import './App.css';
import ChallengeList from './components/ChallengeList';
import { useState } from 'react';



function App() {

  const [challenges, setChallenges] = useState([
    {id: 1 , month: 'January', description: 'First Challenge Description'},
    {id: 2 , month: 'February', description: 'Second Challenge Description'}
  ]);

  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
