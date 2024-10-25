import React, { useEffect, useState } from 'react';
import useFormStore from '../useStore/useFormStore';
import TextComponent from '../component/textComponent';


const FormularioSelectThree: React.FC = () => {
    const { selectInputSquare, setSelectInputSquare } = useFormStore();
    const { radioInputSquare, setRadioInputSquare } = useFormStore();

    useEffect(() => {
        const savedSelectSquad = localStorage.getItem('selectInputSquare');
        if (savedSelectSquad ) {
            setSelectInputSquare(savedSelectSquad );
        }
    }, [setSelectInputSquare]);

    useEffect(() => {
        localStorage.setItem('selectInputSquare', selectInputSquare);
    }, [selectInputSquare]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectInputSquare(event.target.value);
    };


    useEffect(() => {
        const savedRadioSquad = localStorage.getItem(' radioInputSquare');
        if (savedRadioSquad) {
            setRadioInputSquare(savedRadioSquad);
        }
    }, [setRadioInputSquare]);

    useEffect(() => {
        localStorage.setItem(' radioInputSquare',  radioInputSquare);
    }, [ radioInputSquare]);

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioInputSquare(event.target.value);
    };


    return (
        <div className="relative w-full">
            <form action="">
                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">How do you decide to invest?</TextComponent>
                <select className=' w-full mt-3 p-3 rounded-[20px] h-[52px] text-[27px] border-[1px] border-[#00000040] focus:border-[#475242] outline-none resize-none' id="option" value={selectInputSquare} onChange={handleSelectChange}>
                    <option value=""></option>
                    <option value="opcao1">I have not created an account yet.</option>
                </select>
                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">What resources have you used or are you using for your training?</TextComponent>
                <div className=" radio-square text-[27px]">
                    <label htmlFor="opcao1">
                        <input
                            type="radio"
                            id="opcao1"
                            name="options"
                            value="opcao1"
                            checked={radioInputSquare === 'opcao1'}
                            onChange={handleRadioChange}
                        />
                        stock market
                    </label>
                </div>
                <div className="radio-square text-[27px]">
                    <label id='radio' htmlFor="opcao2">
                        <input
                            type="radio"
                            id="opcao2"
                            name="options"
                            value="opcao2"
                            checked={radioInputSquare === 'opcao2'}
                            onChange={handleRadioChange}
                        />
                        foreign exchange
                    </label>
                </div>
                <div className="radio-square text-[27px]">
                    <label id='radio' htmlFor="opcao3">
                        <input
                            type="radio"
                            id="opcao3"
                            name="options"
                            value="opcao3"
                            checked={radioInputSquare === 'opcao3'}
                            onChange={handleRadioChange}
                        />
                        commodity
                    </label>
                </div>
                <div className="radio-square text-[27px]">
                    <label id='radio' htmlFor="opcao4">
                        <input
                            type="radio"
                            id="opcao4"
                            name="options"
                            value="opcao4"
                            checked={radioInputSquare === 'opcao4'}
                            onChange={handleRadioChange}
                        />
                        bond market
                    </label>
                </div>
                <div className="radio-square text-[27px]">
                    <label id='radio' htmlFor="opcao5">
                        <input
                            type="radio"
                            id="opcao5"
                            name="options"
                            value="opcao5"
                            checked={radioInputSquare === 'opcao5'}
                            onChange={handleRadioChange}
                        />
                        cryptocurrency market
                    </label>
                </div>
            </form>
        </div>
    );
};

export default FormularioSelectThree;
