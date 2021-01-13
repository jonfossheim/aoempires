import { useState, useEffect } from 'react';
import axios from 'axios';
import Civilization from './components/Civilization';

function App() {
   const [civs, setCivs] = useState([]);

   useEffect(() => {
      axios
         .get(
            'https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'
         )
         .then((res) => setCivs(res.data.civilizations));
   }, []);

   return (
      <div className='App'>
         {civs?.length > 0 ? (
            <div className={'wrapper'}>
               {civs.map((civ, idx) => (
                  <Civilization key={idx} {...civ} />
               ))}
            </div>
         ) : null}
      </div>
   );
}

export default App;
