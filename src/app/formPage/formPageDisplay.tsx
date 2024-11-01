import React from 'react';
import useFormStore from '../localStorage/useFormStore';
const DisplayFormData = () => {
  const {
    textInput,
    textareaInput,
    emailInput,
    ageInput,
    selectInputRound,
    selectInputSquare,
    radioInputRound,
    radioInputSquare,
  } = useFormStore();

  return (
    <div className='border border-slate-500  p-3 w-full'>
      <p><strong>Full Name:</strong> {textInput}</p>
      <p><strong>Email:</strong> {emailInput}</p>
      <p><strong>Age:</strong> {ageInput}</p>
      <p><strong>If you or someone close to you has already made a loss on the investment, write down the details:</strong> {textareaInput}</p>
      <p><strong>What is the status of your account?:</strong> {selectInputRound}</p>
      <p><strong>In which financial markets do you operate?:</strong> {radioInputRound}</p>
      <p><strong>How do you decide to invest?:</strong> {selectInputSquare}</p>
      <p><strong>What resources have you used or are you using for your training?:</strong> {radioInputSquare}</p>
    </div>
  );
};

export default DisplayFormData;