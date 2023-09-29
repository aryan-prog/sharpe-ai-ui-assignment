import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [typingTimeout, setTypingTimeout] = useState(null);

  // Handle input change
  const handleInputChange = (event) => {
    const newValue = event.target.value;

    // Clear any previous typing timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a new typing timeout
    const newTypingTimeout = setTimeout(() => {
      setInputValue(newValue);
    }, 1000); // Adjust the delay (in milliseconds) as needed

    setTypingTimeout(newTypingTimeout);
  };

  useEffect(() => {
    // Clear the typing timeout if the component unmounts
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [typingTimeout]);


  return (
    <div className='App'>
      <div className='buttons'>
        <button id='tops'>Open</button>
        <button id='tops'>Close</button>
        <button id='tops'>Boost</button>
      </div>
      <div class="grid">
        <div class="rectangle" >
          <div className='inp1'>
            <span id='heads'>Select asset</span>
            <input value='ETH' id='fill'></input>
          </div>
          <div className='inp2'>
            <span id='heads'>Borrow Amount</span>
            <button className='max-amount'> Max Held Amount : 200</button>
            <input value={inputValue} onChange={handleInputChange} placeholder='Enter Supply Amount' id='fill'></input>
          </div>
          <button className='execute'>Execute</button>
        </div>
        <div class="rectangle"></div>
        <div class="rectangle"></div>
      </div>

    </div>

  )
}

export default App
