"use client"

import ContainerPage from "@/components/ContainerPage";
import CounterServices from "@/components/CounterServices";
import { CoverParticles } from "@/components/CoverParticles";
import TimeLine from "@/components/TimeLine";
import TransitionPage from "@/components/TransitionPage";

const AboutMePage = () => {
    return (
        <>
            <CoverParticles/>
            <TransitionPage />
            <ContainerPage>
                
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-extrabold ">
                        trayectoria profesional
                    </span>
                </h1>

                <CounterServices />

                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;