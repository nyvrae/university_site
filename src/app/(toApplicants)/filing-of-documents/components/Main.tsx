import React from "react";
import { filingSteps } from "@/data/filing-of-documents/filingData";
import StepsList from "./StepsList";
import { filingHeadlines } from "@/data/filing-of-documents/filingData";

const Main = () => {
    return (
        <section className="filing-of-documents flex-center">
            <div className="filing-of-documents__wrapper wrapper--my">
                <h1 className="wwtitle--bold">{filingHeadlines.h1}</h1>

                <article className="if-have-cabinet mt-[75px] lg:mt-[100px]">
                    <h2 className="wwtitle">
                        {filingHeadlines.h2HaveCabinet.h2Part1} <span className="text-blue">{filingHeadlines.h2HaveCabinet.lightEl}</span> {filingHeadlines.h2HaveCabinet.h2Part2}
                    </h2>
                    <StepsList steps={filingSteps.withCabinet.steps} />
                </article>

                <article className="if-havent-cabinet mt-[75px] lg:mt-[100px]">
                    <h2 className="wwtitle">
                        {filingHeadlines.h2HaventCabinet.h2Part1} <span className="text-blue">{filingHeadlines.h2HaveCabinet.lightEl}</span> {filingHeadlines.h2HaventCabinet.h2Part2}
                    </h2>
                    <StepsList steps={filingSteps.withoutCabinet.steps} />
                </article>

                <div className="mt-[50px] lg:mt-[60px]">
                    <a href={filingSteps.additionalInfo.link} className="underline underline-offset-4 text-blue font-semibold hover:text-red">
                        {filingSteps.additionalInfo.text}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Main;
