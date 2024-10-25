import React, { useEffect, useState } from 'react';
import useFormStore from '../useStore/useFormStore';
import TextComponent from '../component/textComponent';


const FormularioTwo: React.FC = () => {
    const { selectInputRound, setSelectInputRound } = useFormStore();
    const { radioInputRound, setRadioInputRound } = useFormStore();

    useEffect(() => {
        const savedSelectRound = localStorage.getItem('selectInputRound');
        if (savedSelectRound) {
            setSelectInputRound(savedSelectRound);
        }
    }, [setSelectInputRound]);

    useEffect(() => {
        localStorage.setItem('selectInputRound', selectInputRound);
    }, [selectInputRound]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectInputRound(event.target.value);
    };


    useEffect(() => {
        const savedRadioRound = localStorage.getItem('radioInputRound');
        if (savedRadioRound) {
            setRadioInputRound(savedRadioRound);
        }
    }, [setRadioInputRound]);

    useEffect(() => {
        localStorage.setItem('radioInputRound', radioInputRound);
    }, [radioInputRound]);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioInputRound(event.target.value);
    };


    return (
        <div className="relative w-full">
            <form action="">
                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">What is the status of your account?</TextComponent>
                <select className=' w-full mt-3 p-3 rounded-[20px] h-[52px] text-[27px] border-[1px] border-[#00000040] focus:border-[#475242] outline-none resize-none' id="option" value={selectInputRound} onChange={handleSelectChange}>
                    <option value=""></option>
                    <option value="opcao1">I have not created an account yet.</option>
                </select>
                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">In which financial markets do you operate?</TextComponent>
                <div className=" radio-round text-[27px]">
                    <label htmlFor="opcao1">
                        <input
                            type="radio"
                            id="opcao1"
                            name="options"
                            value="opcao1"
                            checked={radioInputRound === 'opcao1'}
                            onChange={handleRadioChange}
                        />
                        stock market
                    </label>
                </div>
                <div className="radio-round text-[27px]">
                    <label id='radio' htmlFor="opcao2">
                        <input
                            type="radio"
                            id="opcao2"
                            name="options"
                            value="opcao2"
                            checked={radioInputRound === 'opcao2'}
                            onChange={handleRadioChange}
                        />
                        foreign exchange
                    </label>
                </div>
                <div className="radio-round text-[27px]">
                    <label id='radio' htmlFor="opcao3">
                        <input
                            type="radio"
                            id="opcao3"
                            name="options"
                            value="opcao3"
                            checked={radioInputRound === 'opcao3'}
                            onChange={handleRadioChange}
                        />
                        commodity
                    </label>
                </div>
                <div className="radio-round text-[27px]">
                    <label id='radio' htmlFor="opcao4">
                        <input
                            type="radio"
                            id="opcao4"
                            name="options"
                            value="opcao4"
                            checked={radioInputRound === 'opcao4'}
                            onChange={handleRadioChange}
                        />
                        bond market
                    </label>
                </div>
                <div className="radio-round text-[27px]">
                    <label id='radio' htmlFor="opcao5">
                        <input
                            type="radio"
                            id="opcao5"
                            name="options"
                            value="opcao5"
                            checked={radioInputRound === 'opcao5'}
                            onChange={handleRadioChange}
                        />
                        cryptocurrency market
                    </label>
                </div>
            </form>
        </div>
    );
};

export default FormularioTwo;