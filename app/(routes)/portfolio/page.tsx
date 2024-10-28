

import { dataPortfolio } from "@/data";

import TransitionPage from "@/components/TransitionPage";
import ContainerPage from "@/components/ContainerPage";
import PortfolioBox from "@/components/PortfolioBox";
import { CoverParticles } from "@/components/CoverParticles";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <CoverParticles/>
            <TransitionPage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis proyectos <span className="font-extrabold text-secondary">principales</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;