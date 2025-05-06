export default function MonthlyPayment({monthlyRepayment}){
    return (
        <div>
            <p className="text-Slate-300 font-medium mb-2">Your monthly repayments</p>
            <h1 className="text-5xl text-Lime font-bold">£ {monthlyRepayment}</h1>
        </div>
    )
}