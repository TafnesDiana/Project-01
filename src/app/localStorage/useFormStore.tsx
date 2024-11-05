import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FormState {
  textInput: string|undefined;
  textareaInput: string;
  emailInput: string;
  ageInput: string;
  selectInputRound: string;
  selectInputSquare: string;
  radioInputRound: string;
  radioInputSquare: string;
  setTextInput: (value: string) => void;
  setTextareaInput: (value: string) => void;
  setEmailInput: (value: string) => void;
  setAgeInput: (value: string) => void;
  setSelectInputRound: (value: string) => void;
  setSelectInputSquare: (value: string) => void;
  setRadioInputRound: (value: string) => void;
  setRadioInputSquare: (value: string) => void;
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
        localStorage.setItem(' textareaInput', value)
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
        localStorage.setItem('selectInputRound',value)
      },
      setSelectInputSquare: (value) =>{
        set({ selectInputSquare: value })
        localStorage.setItem('selectInputSquare', value)
      },
      setRadioInputRound: (value) => {
        set({ radioInputRound: value })
        localStorage.setItem('radioInputRound', value)
      },
      setRadioInputSquare: (value) => {
        set({ radioInputSquare: value })
        localStorage.setItem('radioInputSquare', value)
      },
    }),
    {
      name: 'form-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFormStore;

