import React from 'react';
import useFormStore from '../localStorage/useFormStore';
import Link from 'next/link';
import ButtonComponent from '../_component/button/buttonComponent';

const FormularioFour: React.FC = () => {
    const { textareaInput, setTextareaInput } = useFormStore();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (value.length <= 250) {
            setTextareaInput(value);
        }
    };

    const handleSkip = () => {
        setTextareaInput(undefined);
    };

    return (
        <div className="relative w-full">
            <textarea
                id="textInput"
                value={textareaInput}
                onChange={handleChange}
                className="w-full p-3 rounded-[20px] h-[225px] text-[27px] border-[1px] border-[#00000040] focus:border-[#475242] outline-none resize-none"
                minLength={10}
                required
            />
            <div className="flex justify-between mt-1">
                <div className="p-2 text-[#00000040]">{(textareaInput || '').length}/250</div>
            </div>
            {(textareaInput === undefined || textareaInput.length < 10) ? (
                <div className="text-red-500 text-sm mt-1">
                    O texto deve ter no mínimo 10 caracteres.
                </div>
            ) : (
                <div className="text-[#3EB25E] text-sm mt-1">
                    Quantidade mínima de caracteres atingida.
                </div>
            )}

            <div className="w-full flex flex-col">
                <div className='flex mt-3 sm:flex-row gap-4 lg:gap-6 justify-center'>
                    <Link href={'/pages/pageThree'}>
                        <ButtonComponent className="custom-button mt-3 font-bold">Back</ButtonComponent>
                    </Link>
                    <Link href={textareaInput && textareaInput.length >= 10 ? '/pages/pageFive' : '#'}>
                        <ButtonComponent
                            className="custom-button mt-3 cursor-pointer font-bold"
                            disabled={!textareaInput || textareaInput.length < 10} >
                            Next
                        </ButtonComponent>
                    </Link>
                </div>
                <div className='mt-3 flex flex-col sm:flex-row gap-1 lg:gap-6 justify-center'>
                    <Link href={'/pages/pageFive'}>
                        <ButtonComponent className="custom-buttons font-bold" onClick={handleSkip}>Skip</ButtonComponent>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FormularioFour;
