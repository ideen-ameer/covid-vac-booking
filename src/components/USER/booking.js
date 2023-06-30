import React, { useState } from 'react';

const Booking = () => {


  const [centreName, setCentreName] = useState('');
  const [dosage, setDosage] = useState('');
  const [date,setDate] = useState('');



  const handleApply = () => {
    
     setCentreName(centreName);
     setDosage(dosage);
     setDate(date);
      console.log(centreName,dosage,date);
  };

  return (
    <div>
      <h2>Vaccination Slot Booking</h2>
     
      <form>
            <label>enter the date</label>
            <input name="date" value={date} id='date' type='date' onChange={(e) => setDate(e.target.value)} placeholder='00/00/0000' ></input><br/>
            <label>enter the VaccinationCentre</label>
            <input type="text" placeholder="Centre Name" value={centreName} onChange={(e) => setCentreName(e.target.value)} /><br/>
            <lable>enter dosage</lable>
            <input type="text" placeholder="dosage" value={dosage} onChange={(e) => setDosage(e.target.value)} />
            <button type="Submit">book</button><br/>
      </form>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default Booking;
