import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
  
    const routeToForm = (e) => {
      history.push('/pizza');
    }
    
    return (
      <div>
        <button onClick={routeToForm}>grep pizza! go! </button>
      </div>
    );
  }
  
  export default Home;