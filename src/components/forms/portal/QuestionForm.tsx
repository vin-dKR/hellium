import React from 'react'
import FormGenerator from '../form-generator/FormGenerator'
import { Button } from 'react-day-picker'


const QuestionsForm = ({ questions, register, error, onNext }: QuestionsFormProps) => {
    return (
        <div className="flex flex-col gap-5 justify-center">
            <div className="flex justify-center">
                <h2 className="text-4xl font-bold mb-5">Details</h2>
            </div>
            {questions.map((question) => (
                <FormGenerator
                    defaultValue={question.answered || ''}
                    key={question.id}
                    name={`question-${question.id}`}
                    errors={error}
                    register={register}
                    label={question.question}
                    type="text"
                    inputType="input"
                    placeholder={question.answered || 'Not answered'}
                />
            ))}

            <Button
                className=""
                type="button"
                onClick={onNext}
            >
                Next
            </Button>
        </div>
    )
}

export default QuestionsForm