import React, { useEffect } from 'react';
import useFormStore from '../useStore/useFormStore';

const FormularioTextarea: React.FC = () => {
    const { textareaInput, setTextareaInput } = useFormStore();

    useEffect(() => {
        const savedTextarea = localStorage.getItem(' textareaInput');
        if (savedTextarea) {
            setTextareaInput(savedTextarea);
        }
    }, [setTextareaInput]);

    useEffect(() => {
        localStorage.setItem(' textareaInput',  textareaInput);
    }, [ textareaInput]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (value.length <= 250) {
            setTextareaInput(value);
        }
    };

    return (
        <div className="relative w-full">
            <textarea
                id="textInput"
                value={ textareaInput}
                onChange={handleChange}
                className="w-full p-3 rounded-[20px] h-[225px] text-[27px] border-[1px] border-[#00000040] focus:border-[#475242] outline-none resize-none"
                minLength={10} 
                required 
            />
            <div className="flex justify-between mt-1">
                <div className="p-2  text-[#00000040]">{ textareaInput.length}/250</div>
            </div>
            { textareaInput.length < 10 && (
                <div className="text-red-500 text-sm mt-1">
                    O texto deve ter no mínimo 10 caracteres.
                </div>
            )}
            { textareaInput.length > 10 && (
                <div className="text-[#3EB25E] text-sm mt-1">
                    Quantidade mínima de caracteres atingido.
                </div>
            )}
        </div>
    );
};

export default FormularioTextarea;
