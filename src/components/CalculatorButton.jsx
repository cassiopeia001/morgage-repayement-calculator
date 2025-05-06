export default function CalculatorButton(){
    return (
        <button type="submit" className="flex w-full bg-Lime justify-center px-7 py-3 rounded-3xl text-Slate-900 font-bold gap-2 md:w-fit hover:cursor-pointer hover:bg-Lime-50">
            <img src="/morgage-repayement-calculator/assets/images/icon-calculator.svg" alt="" />
            Calculate Repayments
        </button>
    )
}