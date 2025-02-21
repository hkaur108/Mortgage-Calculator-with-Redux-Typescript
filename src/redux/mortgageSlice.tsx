import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../redux/store'

interface mortgageState {
  amount: number ,
  term:number,
  interest:number,
  type: String,
  repaymentAmount?:number | string,
  totalInterest?:number | string,
  monthlyPayments?:number |string,
  isClicked?:Boolean,
}

const initialState: mortgageState = {
  amount: 0,
  term:0,
  interest:0,
  type:"repayment",
  repaymentAmount:0,
  totalInterest:0,
  monthlyPayments:0,
  isClicked:false
}

export const mortgageSlice = createSlice({
  name: 'mortgage',
  initialState,
  reducers: {
    getData: (state,action: PayloadAction<mortgageState>)=>{
      console.log(action.payload,"in slice")
            let {amount,term,interest,type}=action.payload;
            let rate= (interest/100)/12;
            let n= term*12; 
            let calculatedRate=(1+rate);
            let finalRate=Math.pow(calculatedRate,n);
            let x=(finalRate*rate)/(finalRate -1)
            let mp=(x*amount)
            let totalPay= mp * term * 12
            let totalInterest=totalPay-amount
            return {...state,
              type:type,
              isClicked:true,
              monthlyPayments:mp.toLocaleString("en-US",{
                     style: 'currency',
                    currency: 'GBP'
                }), 
                repaymentAmount:totalPay.toLocaleString("en-US",{
                     style: 'currency',
                    currency: 'GBP'
                }), 
                totalInterest:totalInterest.toLocaleString("en-US",{
                     style: 'currency',
                    currency: 'GBP'
                })}}},})
export const {getData } = mortgageSlice.actions

export const mortgageSelector = (state:RootState) => state.mortgageReducer

export default mortgageSlice.reducer
