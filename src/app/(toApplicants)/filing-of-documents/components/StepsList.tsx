import React from "react";

interface StepsListProps {
    steps: string[];
}

const StepsList: React.FC<StepsListProps> = ({ steps }) => {
    return (
        <ol className="list wwtext mt-[25px] flex flex-col gap-[20px]">
            {steps.map((step, index) => {
                if (step.includes("https://abit.bsu.by")) {
                    return (
                        <li key={index}>
                            <strong>{index + 1}.</strong> Создание личного кабинета по ссылке:{" "}
                            <a
                                href="https://abit.bsu.by"
                                className="underline underline-offset-4 hover:text-red"
                            >
                                https://abit.bsu.by ⤴
                            </a>
                        </li>
                    );
                }

                return <li key={index}><strong>{index + 1}.</strong> {step}</li>;
            })}
        </ol>
    );
};

export default StepsList;
