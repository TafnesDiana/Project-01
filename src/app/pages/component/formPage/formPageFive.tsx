import React, { useEffect, useState } from 'react';
import useFormStore from '../useStore/useFormStore';
import TextComponent from '../component/textComponent';


const FormularioText: React.FC = () => {
    const { textInput, setTextInput } = useFormStore();
    const { emailInput, setEmailInput } = useFormStore();
    const [ageInput, setAgeInput] = useState<number>(0);

    useEffect(() => {
        const savedText = localStorage.getItem('textInput');
        if (savedText) {
            setTextInput(savedText);
        }
    }, [setTextInput]);

    useEffect(() => {
        localStorage.setItem('textInput', textInput);
    }, [textInput]);


    useEffect(() => {
        const savedEmail = localStorage.getItem('emailInput');
        if (savedEmail ) {
            setEmailInput(savedEmail);
        }
    }, [setEmailInput]);

    useEffect(() => {
        localStorage.setItem('emailInput', emailInput);
    }, [emailInput]);

    useEffect(() => {
        const savedAge = localStorage.getItem('ageInput');
        if (savedAge ) {
            setAgeInput(Number(savedAge));
        }
    }, [setAgeInput]);

    useEffect(() => {
        localStorage.setItem('ageInput', ageInput.toString());
    }, [ageInput]);


    return (
        <div className="relative w-full">
            <form action="">
                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">Full Name:</TextComponent>
                <input
                    type="text"
                    id="TextInput"
                    placeholder='Nasser Toghiri'
                    onChange={(e) => setTextInput(e.target.value)}
                    className='w-full mt-3 p-3 rounded-[20px] h-[52px] text-[27px] border-[1px] border-[#00000040] focus:border-[#475242] outline-none resize-none'
                />

                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">Email:</TextComponent>
                <input
                    type="email"
                    id="EmailInput"
                    placeholder='N.Toghiri@Gmail.com'
                    onChange={(e) => setEmailInput(e.target.value)}
                    className='w-full mt-3 p-3 rounded-[20px] h-[52px] text-[27px] border-[1px] border-[#00000040] focus:border-[#475242] outline-none resize-none'
                />

                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">Age:</TextComponent>
                <input 
                type="number" 
                id="ageInput"
                min="0"
                max="120"
                placeholder='-- --'
                onChange={(e) => setAgeInput(Number(e.target.value))}
                className='block w-[152px] mt-3 ml-0 p-3 rounded-[20px] h-[52px] text-[27px] border-[1px] border-[#00000040] focus:border-[#475242] outline-none resize-none'
                />

            </form>
        </div>
    );
};

export default FormularioText;
