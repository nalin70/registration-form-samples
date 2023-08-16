import React, {useState} from 'react';

function PdfUploader() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInputChange = (event) => {
        const file = event.terget.files[0];
        setSelectedFile(file);
    };
    
    return(
        <div>
            <h2>Acadamic Details</h2>
            
            <h3>Enter HSC Details : </h3>
            Enter School Name: <input type='text'/>
            Enter Percentage: <input type='text'/><br/>
             Submit HSC Marksheet<input type='file' accept='.pdf' onChange={handleFileInputChange}/>
             <br/>
             <br/>

            <h3>Enter SSC Details : </h3>
            Enter School Name: <input type='text'/>
            Enter Percentage: <input type='text'/><br/>
            Submit SSC Marksheet<input type='file' accept='.pdf' onChange={handleFileInputChange}/>
            <br/>
            <br/>
            <h3>Enter Graduation Details : </h3>
            Enter Collage/University <input type='text'></input>
            Enter Highest Qualification<input type='text'></input>
            Enter Stream <input type='text'></input><br/>
            <br/>
            Enter GPA <input type='number'></input>
            Enter BackLogs IFAny<input type='number'></input>
            Year Gap<input type='number'></input><br/>
            Submit Marksheet : <input type='file' accept='.pdf' onChange={handleFileInputChange}/>




            {/* {selectedFile && (
                <div>
                    <p>Selected pdf: {selectedFile.name}</p>
                </div>
            )} */}
        </div>
    )
}
export default PdfUploader;
