'use client'
import Image from "next/image";
import ContainerComponent from "@/app/_component/container/containerComponent";
import DisplayFormData from "@/app/formPage/formPageDisplay";


const App = () => {

    return (
        <div className="flex sm:flex-col lg:flex-row justify-evenly">
            <Image
                src="/imagens/five.svg"
                alt="Welcome"
                width={431}
                height={661}
            />

            <ContainerComponent className="w-6/12">
                <h1 className="text-[50px] font-bold">Informações Armazenadas</h1>
                <DisplayFormData/>
            </ContainerComponent>

        </div>
    );
}

export default App;