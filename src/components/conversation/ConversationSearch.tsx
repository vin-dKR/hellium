import React from 'react'


const ConversationSearch = ({ register, domains }: ConversationSearchProps) => {
    return (
        <div className="flex flex-col py-3">
            <select
                {...register('domain')}
                className="px-3 py-4 text-sm border-[1px] rounded-lg mr-5"
            >
                <option
                    disabled
                    selected
                >
                    Domain name
                </option>
                {domains?.map((domain) => (
                    <option
                        value={domain.id}
                        key={domain.id}
                    >
                        {domain.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ConversationSearch