'use client'
import TextComponent from "@/app/_component/text/textComponent";
import ButtonComponent from "@/app/_component/button/buttonComponent";
import ContainerComponent from "@/app/_component/container/containerComponent";
import Image from "next/image";
import Link from "next/link";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-evenly h-[100vh] p-6 lg:p-0">
      <Image
        src="/imagens/one.svg"
        alt="Welcome"
        width={552.51}
        height={480.01}
        className="mt-8 lg:mt-[146px] lg:ml-[87.49px] lg:mr-[637] lg:mb-[133.99px] w-[80%] sm:w-[60%] lg:w-auto"
      />

      <ContainerComponent className="max-w-xl text-center lg:text-center mt-6 lg:mt-0">
        <h1 className="text-[32px] lg:text-[39px] font-bold">
          Necessities of working in financial markets
        </h1>
        <TextComponent className="font-sans text-[20px] lg:text-[29px] pb-8 lg:pb-12 leading-[28px] lg:leading-[32.81px]">
          This research is to find the reasons for the failure of people in financial markets. The results of this survey will be emailed to you along with the analysis of our experienced experts.
        </TextComponent>
        <div className=" flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center sm: mb-8">
          <Link href={'/'}>
            <ButtonComponent className="custom-button font-bold">
              Back to Home
            </ButtonComponent>
          </Link>
          <Link href={'/pages/pageTwo'}>
            <ButtonComponent className="custom-button font-bold">
              Fill out the form
            </ButtonComponent>
          </Link>
        </div>
      </ContainerComponent>
    </div>
  );
};

export default App;
