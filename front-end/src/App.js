import "./App.css";
import ChallengeList from "./components/ChallengeList";
import { useEffect, useState } from "react";
import axios from "axios";
import AddChallenge from "./components/AddChallenge";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get("http://localhost:8080/challenges");
        setChallenges(response.data);
      } catch (error) {
        console.error("Error fetching challenges : ", error);
      }
      
    };

    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const response = await axios.get("http://localhost:8080/challenges");
      setChallenges(response.data);
    } catch (error) {
      console.error("Error fetching challenges : ", error);
    }
  }
    
    const handleChallengeAdded = () => {
      fetchChallenges();
    };

    return (
      <div className="App">
        <h1>Monthly Challenges</h1>
        <AddChallenge onChallengeAdded={handleChallengeAdded} />
        <ChallengeList challenges={challenges} />
      </div>
    );
  }
  export default App;
