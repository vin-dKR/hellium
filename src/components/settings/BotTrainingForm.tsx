import React from 'react'


const BotTrainingForm = ({ id }: BotTrainingFormProps) => {
    return (
        <div className="py-5 mb-10 flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-2xl">Bot Training</h2>
                <p className="text-sm font-light">
                    Set FAQ questions, create questions for capturing lead information and
                    train your bot to act the way you want it to.
                </p>
            </div>
        </div>
    )
}

export default BotTrainingForm