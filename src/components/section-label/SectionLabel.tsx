import React from 'react'

const SectionLabel = ({ label, message }: SelectionLabel) => {
    return (
        <div>
            <p className='text-sm font-medium'>{label}</p>
            <p className='text-sm font-light'>{message}</p>
        </div>
    )
}

export default SectionLabel