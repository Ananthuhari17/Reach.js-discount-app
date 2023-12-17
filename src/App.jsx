import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  let [Amount, setAmount] = useState(0);
  let [discount, setdiscount] = useState(0);
  let [saving, setsaving] = useState(0)
  let[totalD,settotalD]=useState(0)
  



  const calculate = (e) => {
    if (Amount != "" && discount != "" && Amount > 0 && discount >= 0 && discount <100) {
      const discountamount = (Amount*discount)/100;
    const  savings=Amount-discountamount;
      setsaving(savings);
      settotalD(discountamount)
      console.log(savings);
      console.log(discountamount);
    } else {
      alert("please fill Correctly")
      setAmount(0);
      setdiscount(0);
      setsaving(0);
      settotalD(0)
    }
  }
  const reset = () => {
    setAmount(0);
    setdiscount(0);
    setsaving(0);
    settotalD(0);
  }


  return (
    <div className='Fdiv'>
    <div className="App">
      <div className='maindiv'>
        <div className="header">
          <h1 style={{ textDecoration: 'underline' }}>CHECK YOUR DISCOUNT</h1>
          <p> Calculate your Discount price  ✌️</p>
        </div>

        <div className="Output_box">
          <div>
            <h2> &#8377;{ saving}  </h2>
            <h4>Total Saving</h4>
          </div>

          <div>
            <h2> &#8377;{totalD }  </h2>
            <h4>Total Discount</h4>
          </div>

        </div>


        <div className='text_field'>
          <div className='text'><TextField value={Amount||""} onChange={(e) => setAmount(e.target.value)} className="outlined-basic" label=" Total Amount" /></div>

          <div className='text'><TextField value={discount || ""} onChange={(e) => setdiscount(e.target.value)} className="outlined-basic" label="Discount %" /></div>
        </div>

        <div className='buttons'>

          <Button onClick={reset} color="secondary" variant="contained" >Reset</Button>
          <Button onClick={e=>calculate(e)} variant="contained" color="success">Calculate</Button>

        </div>




      </div>
    </div >
    </div>
  );
}

export default App;
