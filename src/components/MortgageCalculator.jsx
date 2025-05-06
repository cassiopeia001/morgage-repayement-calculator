import CalculatorButton from "./CalculatorButton"
export default function MortgageCalculator({inputs, handleInputChange, calculate, errors, handleClear}){


    return (

        <div className="bg-White px-4 py-5 w-full md:rounded-l-2xl md:px-8 md:p-8">

            <div className="mb-5 md:flex md:justify-between">

                <h1 className="text-Slate-900 font-bold text-xl mb-1">Mortgage Calculator</h1>
                <button className="text-Slate-700 font-medium underline hover:cursor-pointer" onClick={handleClear}>Clear All</button>
            </div>
            
            
            <form onSubmit={calculate}>
                
                <div className="mb-5">
                    <label htmlFor="amount" className="text-Slate-700 font-medium">Mortgage Amount</label>
                    <div className={`mt-2 rounded-md border-Slate-500 flex ${errors.amount? "outline-2 outline-Red border-0": "border-[1px] focus-within:outline-2 focus-within:outline-Lime focus-within:border-none" }  cursor-pointer group`}>
                        <div className={`w-[10%] h-full px-1 py-2 rounded-l-md flex justify-center font-bold ${errors.amount? "bg-Red text-White": "bg-Slate-100 text-Slate-700 group-focus-within:bg-Lime group-focus-within:text-Slate-900" } `}>£</div>
                        <input 
                            type="text" 
                            id="amount" 
                            name="amount"
                            className="w-full px-3 rounded-r-md text-Slate-900 font-bold focus:outline-none cursor-pointer"
                            value={inputs.amount}
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.amount && <p className="text-Red text-sm mt-2">{errors.amount}</p> }
                </div>    
                
                <div className="md:flex gap-5 mb-6">
                    <div>
                        <label htmlFor="term" className="text-Slate-700 font-medium">Mortgage Term</label>
                        <div className={`mt-2 rounded-md border-Slate-500 flex focus-within:outline-2 ${errors.term? "outline-2 outline-Red border-0": "border-[1px] focus-within:outline-Lime focus-within:border-none" }  cursor-pointer group`}>
                            <input 
                                type="text" 
                                id="term" 
                                name="term"
                                className="w-full px-3 rounded-l-md text-Slate-900 font-bold focus:outline-none cursor-pointer"
                                value={inputs.term}
                                onChange={handleInputChange}
                                />
                            <div className={`w-fit h-full py-2 px-4 rounded-r-md flex justify-center font-bold ${errors.term? "bg-Red text-White": "bg-Slate-100 text-Slate-700 group-focus-within:bg-Lime group-focus-within:text-Slate-900" } `}>years</div>
                        </div>
                        {errors.term && <p className="text-Red text-sm mt-2">{errors.term}</p> }
                    </div>
                    <div>
                        <label htmlFor="rate" className="text-Slate-700 font-medium">Interest Rate</label>
                        <div className={`mt-2 rounded-md border-Slate-500 flex focus-within:outline-2 ${errors.rate? "outline-2 outline-Red border-0": "border-[1px]  focus-within:outline-Lime focus-within:border-none" } cursor-pointer group`}>
                            <input 
                                type="text" 
                                id="rate" 
                                name="rate"
                                className="w-full px-3 rounded-l-md text-Slate-900 font-bold focus:outline-none cursor-pointer"
                                value={inputs.rate}
                                onChange={handleInputChange}
                                />
                            <div className= {`w-[10%] h-full px-5 py-2 rounded-r-md flex justify-center font-bold ${errors.rate? "bg-Red text-White": "bg-Slate-100 text-Slate-700 group-focus-within:bg-Lime group-focus-within:text-Slate-900" } `}>%</div>
                        </div>
                        {errors.rate && <p className="text-Red text-sm mt-2">{errors.rate}</p> }
                    </div>
                </div>
                <fieldset className="flex flex-col gap-1 mb-8">
                    <legend className="text-Slate-700 font-medium">Mortgage Type</legend>

                    <div  className={`border-[1px] rounded-md px-3 py-2 mt-2 font-bold text-Slate-900 hover:cursor-pointer hover:border-Lime-50 ${inputs.type==="repayment"? "bg-Lime-25 border-Lime" : "border-Slate-500"}`}>
                        <input 
                            type="radio" 
                            name="type" 
                            id="type1" 
                            className="mr-3 "
                            checked= {inputs.type==="repayment"}
                            value="repayment"
                            onChange={handleInputChange}
                            />
                        <label htmlFor="type1">Repayment</label>
                    </div>
                        
                    <div  className={`border-[1px] rounded-md  px-3 py-2 mt-2 font-bold text-Slate-900 hover:cursor-pointer hover:border-Lime-50 ${inputs.type==="interestOnly"? "border-Lime bg-Lime-25" : "border-Slate-500 "}`}>
                        <input 
                            type="radio" 
                            name="type" 
                            id="type2" 
                            className="mr-3 peer"
                            checked= {inputs.type==="interestOnly"}
                            value="interestOnly"
                            onChange={handleInputChange}
                            />
                        <label htmlFor="type2" className="">Interest Only</label>
                    </div>
                    {errors.type && <p className="text-Red text-sm">{errors.type}</p> }
                </fieldset>
                <CalculatorButton />
            </form>
        </div>
    )
}