import { useAppSelector } from '../redux/hooks';
import { mortgageSelector } from '../redux/mortgageSlice';

export default function FinalResults() {
    const info =useAppSelector(mortgageSelector);
    const {repaymentAmount, totalInterest,monthlyPayments, type}=info;  
    return (
    <aside className="mt-3 result-cont" aria-label="final values">
        <header>
            <p className='text-light fw-bold result-heading'>Your results</p>
            <p>Your results are shown below based on the information you provided. To adjust the result. edit the form and click "calculate repayments" again.</p>
        </header>
        <article className="py-3 px-4 my-3 finalRepayment">
            <header><p className='result-desc'>{(type==="repayment") ? "Your monthly repayments" :"Your total Interest"} </p> </header>
            <p className='fs-1 fw-bold displayAmount'>{(type=="repayment") ? monthlyPayments:totalInterest}</p>
            <p className='result-desc'>Total you'll repay over the term</p>
            <p className='fw-bold text-light totalAmount'>{repaymentAmount}</p>
        </article>
    </aside>
  )
}
