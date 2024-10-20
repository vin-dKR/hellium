import { useAnswers } from '@/hooks/email-marketing/useEmailMarketing'
import React from 'react'
import { Loader } from '@/components/loader/Loader'
import { CardDescription } from '../ui/card'

const CustomerAnswer = ({ id }: IdProps) => {
    const { answers, loading } = useAnswers(id)

    return (
        <div className="flex flex-col gap-5 mt-10">
            <Loader loading={loading}>
                {answers.map((answer) =>
                    answer.customer.map((customer) =>
                        customer.questions.length > 0 &&
                        customer.questions.map((question, key) => (
                            <div key={key}>
                                <p>{question.question}</p>
                                <CardDescription>{question.answered}</CardDescription>
                            </div>
                        ))
                    )
                )}
            </Loader>
        </div>
    )
}

export default CustomerAnswer