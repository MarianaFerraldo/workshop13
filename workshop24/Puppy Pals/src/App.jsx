import './App.css'
import './index.css'
import {puppyList} from './data.js'
import { useState } from 'react'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  
  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}
      {featPupId !== null && (
        <div>
          <h2>{puppies.find((pup) => pup.id === featPupId).name}</h2>
          <ul>
            <li>Age: {puppies.find((pup) => pup.id === featPupId).age}</li>
            <li>Email: {puppies.find((pup) => pup.id === featPupId).email}</li>
            <li>Is Cute: {puppies.find((pup) => pup.id === featPupId)?.isCute ? 'Yes' : 'No'}</li>
            <li>ID: {puppies.find((pup) => pup.id === featPupId).id}</li>
            <li>Tricks: {puppies.find((pup) => pup.id === featPupId).tricks.length > 0? puppies.find((pup) =>pup.id === featPupId).tricks.map((trick) => trick.title).join(', '): "No tricks available"}</li>          </ul>
        </div>
      )}
    </div>
  );
}


console.log(puppyList)
export default App
