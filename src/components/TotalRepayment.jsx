export default function TotalPayment({totalRepayment}){
    return (
        <div>
            <p className="text-Slate-300 font-medium mb-2">Total you'll repay over the term</p>
            <h1 className="text-2xl font-bold text-White">£ {totalRepayment}</h1>
        </div>
    )
}