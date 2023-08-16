import Schooling from './Schooling'
import React, {useState} from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) =>{
    setInputValue(event.target.value);
    console.log(event.target.value);
  }
  const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.terget.files[0];
        setSelectedFile(file);
    };
  
  return (
    <div className="App">

      <div>
        <h1>Student Registration </h1>
        <h4>please enter your Name and Email for first step</h4>
      </div>
      <form>
        Full Name : <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Name'/><br/>
        Date of Birth : <input type='date'/><br/>
        Email : <input type='email' placeholder='Email'/><br/>
       Contact : <input type='number' placeholder='Phone No.'/><br/>
        Address : <input type='address' placeholder='Address'/><br/>
        Pincode : <input type='number' maxLength="6" placeholder='Pincode'/><br/>
        
        Origin : <label for="country"></label>
        <select id="country" name="country">
        <option value="india">India</option>
        </select><br/>

       <label for="state">State : </label>
        <select id="state" name="state">
        </select><br/>

        City : <label for="city"></label>
        <select id="city" name="city">
          </select><br/>

        Enter Aadhar Number : <input type = 'text' />
        Choose Aadhar Card : <input type='file' accept='.pdf' onChange={handleFileInputChange}/><br/>
        {selectedFile && (
                <div>
                    <p>Selected pdf: {selectedFile.name}</p>
                </div>
            )}


        {/* <input type='submit' value='Next' disabled={inputValue === ''} onClick={Schooling}/> */}
      </form>
    </div>
  );
}

export default App;
