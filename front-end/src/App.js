import './App.css';
import ChallengeList from './components/ChallengeList';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [challenges, setChallenges] = useState([
    {id: 1 , month: 'January', description: 'First Challenge Description'},
    {id: 2 , month: 'February', description: 'Second Challenge Description'}
  ]);

  useEffect(() => {
    const fetchChallenges = async () => {
      const response = await axios.get('http://localhost:8080/challenges')
    };

    fetchChallenges();
  }, []);

  return (
    <div className="App">
      <h1>Monthly Challenges</h1>
      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
