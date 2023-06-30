import React, { useState } from 'react';
import "./VaccinationCentres.css"
const AddVaccinationCentre = () => {
  const [centreName, setCentreName] = useState('');
  const [dosage, setDosage] = useState('');

  const handleAddCentre = ({centreName,dosage}) => {
    // Handle adding a vaccination centre here
    // You can make an API call to your backend to save the new centre
     setCentreName(centreName);
     setDosage(dosage);
  };

  return (
    <div className='VACCONT'>
      <h2>Add Vaccination Centre</h2>
      <input type="text" placeholder="Centre Name" value={centreName} onChange={(e) => setCentreName(e.target.value)} />
      <input type="text" placeholder="dosage" value={dosage} onChange={(e) => setDosage(e.target.value)} />
      <button onClick={handleAddCentre}>Add Centre</button>
    </div>
  );
};

export default AddVaccinationCentre;
