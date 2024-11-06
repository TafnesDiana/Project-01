import useFormStore from '../localStorage/useFormStore';
import TextComponent from '../_component/text/textComponent';
import InputComponent from '../_component/input/inputRadioComponent';
import Dropdown from '../_component/input/inputSelectComponent';
import Link from 'next/link';
import ButtonComponent from '../_component/button/buttonComponent';


const FormularioThree: React.FC = () => {
    const { selectInputSquare, setSelectInputSquare, radioInputSquare, setRadioInputSquare } = useFormStore();


    const handleSelectChange = (option: string) => {
        setSelectInputSquare(option);

    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioInputSquare(event.target.value);
    };

    const handleClickSkip = () => {
        setSelectInputSquare("indefinido");
        localStorage.setItem("selectInputRound", "indefinido");
        
        setRadioInputSquare("indefinido");
        localStorage.setItem("radioInputRound", "indefinido");
    };

    return (
        <div className="w-full flex flex-col items-start">
            <form action="">
                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">How do you decide to invest?</TextComponent>
                <Dropdown options={['I have not invested yet.']} onSelect={handleSelectChange} />
                <TextComponent className="font-sans text-[26px] font-bold pb-3 mt-3 mb-3 text-justify tracking-tighter leading-tight">What resources have you used or are you using for your training?</TextComponent>
                <InputComponent type="radio" id='Books and articles' value='Books and articles' placeholder="Selecione uma opção" onChange={handleRadioChange} label="Books and articles" className="radio-square" checked={radioInputSquare === 'Books and articles'} />
                <InputComponent type="radio" id='YouTube tutorial videos' value='YouTube tutorial videos' placeholder="Selecione uma opção" onChange={handleRadioChange} label="YouTube tutorial videos" className="radio-square" checked={radioInputSquare === 'YouTube tutorial videos'} />
                <InputComponent type="radio" id='online or face to face courses' value='online or face to face courses' placeholder="Selecione uma opção" onChange={handleRadioChange} label="online or face to face courses" className="radio-square" checked={radioInputSquare === 'online or face to face courses'} />
                <InputComponent type="radio" id='experience with little investment' value='experience with little investment' placeholder="Selecione uma opção" onChange={handleRadioChange} label="experience with little investment" className="radio-square" checked={radioInputSquare === 'experience with little investment'} />
            </form>
            <div className="w-full flex flex-col items-start">
                <div className='flex mt-3  sm:flex-row gap-4 lg:gap-6 justify-center'>
                    <Link href={'/pages/pageTwo'}>
                        <ButtonComponent className=" custom-button mt-3 font-bold">Back</ButtonComponent>
                    </Link>
                    <Link href={'/pages/pageFour'}>
                        <ButtonComponent className="custom-button mt-3 font-bold">Next</ButtonComponent>
                    </Link>
                </div>
                <div className='mt-3 mb-4 flex flex-col sm:flex-row gap-1 lg:gap-6 justify-center'>
                    <Link href={'/pages/pageFour'}>
                        <ButtonComponent  onClick={handleClickSkip} className="custom-buttons font-bold">Skip</ButtonComponent>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FormularioThree;
