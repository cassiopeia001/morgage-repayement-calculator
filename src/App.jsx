import { useState } from 'react'
import './App.css'
import MortgageCalculator from './components/MortgageCalculator'
import Results from './components/Results'

function App() {

  const [monthlyRepayment, setMonthlyRepayment]= useState(null)
  const [totalRepayment, setTotalRepayment]= useState(null)

  const [inputs, setInputs]= useState({
    amount: "",
    term:"",
    rate: "",
    type: ""
  })

  const [errors, setErrors]= useState({
    amount: "",
    term: "",
    rate: "",
    type: ""
  })

  function handleChange (event){

    const name= event.target.name
    const value= event.target.value
    setInputs(i=>({...i, [name]: value}));
    setErrors(e=>({...e, [name]: ""}));
  }

  function calculateRepayments (event){
    
    event.preventDefault();
    
    const amount= inputs.amount.trim()
    const rate= inputs.rate.trim()
    const term= inputs.term.trim()
    
    if(amount!=="" && !isNaN(amount) && term!=="" && !isNaN(term) && rate!=="" && !isNaN(rate) && inputs.type!=="" ){

      const r= parseFloat(rate)
      const a= parseFloat(amount)
      const t= parseFloat(term)
      const mr= r/100/12 
      const n= t* 12
      
      let monthly, total
      
      if(inputs.type== "repayment") {
        if(mr=== 0){
          
          monthly = a / n;
          total = a;

        } else{
          
          monthly= a* (mr* Math.pow(1 + mr, n))/ (Math.pow(1 + mr, n) -1)
          total= monthly* n
        }
        
      } else{
        
        monthly= a* mr
        total=monthly* n
      }
      setMonthlyRepayment(Number(monthly.toFixed(2)))
      setTotalRepayment(Number(total.toFixed(2))) 
      console.log({ a, r, t, mr, n, monthly, total });
    } else {

      for(let key in inputs){
        if(inputs[key].trim()===""){
          setErrors(e=>({...e,[key]: "This field is required"}))
        }
  
        if(isNaN(inputs[key].trim())){
          
          if(key!=="type"){
            setErrors(e=>({...e,[key]: "Please enter a valid numeric value"}))
          }
        }
      }
    }

  }
  function clearAll(){
    setInputs({
      amount: "",
      term: "",
      rate: "",
      type: ""
    });
    setErrors({
      amount: "",
      term: "",
      rate: "",
      type: ""
    });
    setMonthlyRepayment(null);
    setTotalRepayment(null);
  }

  return (
    <div className='font-Plus-Jakarta-Sans h-screen w-full flex items-center justify-center bg-Slate-100 text-base'>
      <div className='flex flex-col bg-White h-full w-full md:flex-row md:max-w-5xl md:h-auto md:rounded-2xl'>
        <MortgageCalculator inputs={inputs}  handleInputChange={handleChange} calculate= {calculateRepayments} errors={errors} handleClear={clearAll}/>
        <Results monthly={monthlyRepayment} total={totalRepayment} />
      </div>
    </div>
  )
}

export default App
