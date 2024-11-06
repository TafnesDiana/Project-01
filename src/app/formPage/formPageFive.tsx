import React, { useState } from 'react';
import useFormStore from '../localStorage/useFormStore';
import TextComponent from '../_component/text/textComponent';
import Link from 'next/link';
import ButtonComponent from '../_component/button/buttonComponent';
import { useRouter } from 'next/navigation';  

const FormularioFive: React.FC = () => {
    const { textInput, setTextInput, emailInput, setEmailInput, ageInput, setAgeInput } = useFormStore();
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();  

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
       
        if (!textInput || !emailInput || !ageInput) {
            setError('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        setError(null); 
        router.push('/pages/pageDisplay');  
    };

    return (
        <div className="relative w-full">
            <form onSubmit={handleSubmit}>
                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">Full Name:</TextComponent>
                <input
                    type="text"
                    id="TextInput"
                    placeholder='Nasser Toghiri'
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    className='w-full mt-3 p-3 rounded-[20px] h-[52px] text-[27px] border-[1px] border-[#00000040] focus:border-[#475242] outline-none resize-none'
                />

                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">Email:</TextComponent>
                <input
                    type="email"
                    id="EmailInput"
                    placeholder='N.Toghiri@Gmail.com'
                    value={emailInput}
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
                    value={ageInput}
                    onChange={(e) => setAgeInput(e.target.value)}
                    className='block w-[152px] mt-3 ml-0 p-3 rounded-[20px] h-[52px] text-[27px] border-[1px] border-[#00000040] focus:border-[#475242] outline-none resize-none'
                />
                
                {error && <p className="text-red-500 mt-2">{error}</p>}

                <div className='flex-col mt-4'>
                    <Link href={'/pages/pageFour'}>
                        <ButtonComponent className="custom-buttons mt-3 font-bold">Back</ButtonComponent>
                    </Link>
                    <ButtonComponent type="submit" className="custom-buttons mt-3 font-bold">Submit</ButtonComponent>
                </div>
            </form>
        </div>
    );
};

export default FormularioFive;

