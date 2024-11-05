'use client'
import Image from "next/image";
import ContainerComponent from "@/app/_component/container/containerComponent";
import DisplayFormData from "@/app/formPage/formPageDisplay";


const App = () => {

    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-evenly h-[100vh] p-6 lg:p-0">
            <Image
                src="/imagens/five.svg"
                alt="Welcome"
                width={431}
                height={661}
                className="mt-8 lg:mt-[146px] lg:ml-[87.49px] lg:mr-[637] lg:mb-[133.99px] w-[80%] sm:w-[60%] lg:w-auto"
            />

            <ContainerComponent className="w-6/12 text-center lg:text-center mt-6 lg:mt-0 mb-4">
                <h1 className="text-[50px] font-bold">Informações Armazenadas</h1>
                <DisplayFormData/>
            </ContainerComponent>

        </div>
    );
}

export default App;