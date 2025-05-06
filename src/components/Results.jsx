import MonthlyRepayment from './MonthlyRepayment';
import TotalRepayment from './TotalRepayment';
export default function Results({monthly, total}){

    console.log(monthly, total)

    return(

        <div className='bg-Slate-900  px-4 py-5 flex flex-col gap-3 w-full md:rounded-r-2xl md:rounded-bl-[70px] md:p-8'>
            
            {monthly===null || total===null ?  (
                <div className='flex flex-col gap-3 items-center text-center justify-center h-full'>
                    <img src="/morgage-repayement-calculator/assets/images/illustration-empty.svg" alt="empty illustration" />
                    <h1 className='text-xl text-White font-bold'>Results shown here</h1>
                    <p className='text-Slate-300 mb-3 font-medium'>Complete the form and click "calculate repayments" to see what you monthly repayments would be.</p>
                </div>
            )  
            :  (
                <>
                    <h1 className='text-xl text-White font-bold'>Your results</h1>
                    <p className='text-Slate-300 mb-3 font-medium'>Your results are shown below based on the information you provided. 
                    To adjust the results, edit the form and click "calculate repayments" again.</p>
                    <div className='bg-[hsl(201,_75.60%,_8.00%)] px-4 py-5 rounded-lg border-t-4 border-t-Lime flex flex-col gap-7 md:p-6'>
                        <MonthlyRepayment monthlyRepayment={monthly}/>
                        <hr className='border-Slate-900' />
                        <TotalRepayment totalRepayment={total} />
                    </div>
                </>
            )}
        </div>
       
    )
}