import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FormState {
  textInput: string|undefined;
  textareaInput: string|undefined;
  emailInput: string|undefined;
  ageInput: string|undefined;
  selectInputRound: string|undefined;
  selectInputSquare: string|undefined;
  radioInputRound: string|undefined;
  radioInputSquare: string|undefined;
  setTextInput: (value: string) => void;
  setTextareaInput: (value: string|undefined) => void;
  setEmailInput: (value: string) => void;
  setAgeInput: (value: string) => void;
  setSelectInputRound: (value: string|undefined) => void;
  setSelectInputSquare: (value: string|undefined) => void;
  setRadioInputRound: (value: string|undefined) => void;
  setRadioInputSquare: (value: string|undefined) => void;
}

const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      textInput: undefined, // começar como undefined
      textareaInput: undefined,
      emailInput: undefined,
      ageInput: undefined,
      selectInputRound: undefined,
      selectInputSquare: undefined,
      radioInputRound: undefined,
      radioInputSquare: undefined,
      setTextInput: (value) => {
        set({ textInput: value })
        localStorage.setItem('textInput', value)
      }, // Exemplo, implementar
      setTextareaInput: (value) => {
        set({ textareaInput: value});
        localStorage.setItem('textareaInput', value ?? "indefinido");
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
        set({ selectInputRound: value });
        localStorage.setItem('selectInputRound', value ?? "indefinido");
    },
      setSelectInputSquare: (value) =>{
        set({ selectInputSquare: value })
        localStorage.setItem('selectInputSquare', value ?? "indefinido")
      },
      setRadioInputRound: (value) => {
        set({ radioInputRound: value });
        localStorage.setItem('radioInputRound', value ?? "indefinido" );
    },
      setRadioInputSquare: (value) => {
        set({ radioInputSquare: value })
        localStorage.setItem('radioInputSquare', value ?? "indefinido")
      },
    }),
    {
      name: 'form-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFormStore;

