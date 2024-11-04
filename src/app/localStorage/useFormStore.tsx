import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FormState {
  textInput: string|undefined;
  textareaInput: string| ' ';
  emailInput: string;
  ageInput: string;
  selectInputRound: string| undefined ;
  selectInputSquare: string| undefined;
  radioInputRound: string| undefined;
  radioInputSquare: string| undefined;
  setTextInput: (value: string) => void;
  setTextareaInput: (value: string| undefined) => void;
  setEmailInput: (value: string) => void;
  setAgeInput: (value: string) => void;
  setSelectInputRound: (value: string| undefined) => void;
  setSelectInputSquare: (value: string| undefined) => void;
  setRadioInputRound: (value: string| undefined) => void;
  setRadioInputSquare: (value: string| undefined) => void;
}

const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      textInput: undefined, // começar como undefined
      textareaInput: '',
      emailInput: '',
      ageInput: '',
      selectInputRound: '',
      selectInputSquare: '',
      radioInputRound: '',
      radioInputSquare: '',
      setTextInput: (value) => {
        set({ textInput: value })
        localStorage.setItem('textInput', value)
      }, // Exemplo, implementar
      setTextareaInput: (value) => {
        set({ textareaInput: value })
        localStorage.setItem(' textareaInput', value || '')
      },
      setEmailInput: (value) => {
        set({ emailInput: value })
        localStorage.setItem('emailInput', value)
      },
      setAgeInput: (value) => {
        set({ ageInput: value })
        localStorage.setItem('ageInput',value)
      },
      setSelectInputRound: (value) => {
        set({ selectInputRound: value })
        localStorage.setItem('selectInputRound',value || '')
      },
      setSelectInputSquare: (value) =>{
        set({ selectInputSquare: value })
        localStorage.setItem('selectInputSquare', value || '')
      },
      setRadioInputRound: (value) => {
        set({ radioInputRound: value })
        localStorage.setItem('radioInputRound', value || '')
      },
      setRadioInputSquare: (value) => {
        set({ radioInputSquare: value })
        localStorage.setItem('radioInputSquare', value || '')
      },
    }),
    {
      name: 'form-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFormStore;

