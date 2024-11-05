import React from 'react'; // remover useState
import useFormStore from '../localStorage/useFormStore';
import TextComponent from '../_component/text/textComponent';
import InputComponent from '../_component/input/inputRadioComponent';
import Dropdown from '../_component/input/inputSelectComponent';
import ButtonComponent from '../_component/button/buttonComponent';
import Link from 'next/link';


const FormularioTwo: React.FC = () => {
    const { selectInputRound, setSelectInputRound, radioInputRound, setRadioInputRound } = useFormStore();

    const handleSelectChange = (option: string) => {
        setSelectInputRound(option);

    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioInputRound(event.target.value);
    };

    const handleClickSkip = () =>{
        setSelectInputRound ("indefinido");
        setRadioInputRound ("indefinido");
    }


    return (
        <div className="relative w-full ">
            <form action="">  
                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">What is the status of your account?</TextComponent>
                <Dropdown options={['I have not created an account yet.']} onSelect={handleSelectChange} />
                <TextComponent className="font-sans lg:text-[26px] text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">In which financial markets do you operate?</TextComponent>
                <InputComponent type="radio" id='stockMarket' value='stock market' placeholder="Selecione uma opção" onChange={handleRadioChange} label="stock market" className="radio-round " checked={radioInputRound === 'stock market'} />
                <InputComponent type="radio" id='foreigExchange' value=' foreign exchange' placeholder="Selecione uma opção" onChange={handleRadioChange} label=" foreign exchange" className="radio-round" checked={radioInputRound === ' foreign exchange'} />
                <InputComponent type="radio" id='commodity' value='commodity' placeholder="Selecione uma opção" onChange={handleRadioChange} label="commodity" className="radio-round" checked={radioInputRound === 'commodity'} />
                <InputComponent type="radio" id='bondMarket' value='bond market' placeholder="Selecione uma opção" onChange={handleRadioChange} label="bond market" className="radio-round" checked={radioInputRound === 'bond market'} />
                <InputComponent type="radio" id='cryptocurrencyMarket' value='cryptocurrency market' placeholder="Selecione uma opção" onChange={handleRadioChange} label="cryptocurrency market" className="radio-round" checked={radioInputRound === 'cryptocurrency market'} />
            </form>
            <div className="w-full flex flex-col items-start">
                <div className='flex mt-3  sm:flex-row gap-4 lg:gap-6 justify-center'>
                    <Link href={'/pages/pageOne'}>
                        <ButtonComponent className=" custom-button mt-3 font-bold">Back</ButtonComponent>
                    </Link>
                    <Link href={'/pages/pageThree'}>
                        <ButtonComponent className="custom-button mt-3 font-bold">Next</ButtonComponent>
                    </Link>
                </div>
                <div className='mt-3 flex flex-col sm:flex-row gap-1 lg:gap-6 justify-center'>
                    <Link href={'/pages/pageThree'}>
                        <ButtonComponent onClick={handleClickSkip} className="custom-buttons font-bold" >Skip</ButtonComponent>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FormularioTwo;