import React from 'react'
import Bento from './Bento'
import RadialBlur from '../ui/RadialBlur'

type Props = {}

const BentoWrapper = (props: Props) => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <RadialBlur
                color='#FF9D2D'
                size='500px'
                blur='100px'
                position={{ top: '1600px', right: '-150px' }}
            />
            <div className='mb-20'>
                <div className='flex flex-col items-center'>
                    <h1 className="text-3xl lg:text-6xl">Better Sales Representative</h1>
                    <h1 className="text-xl lg:text-3xl">Automation & Fast</h1>
                </div>
            </div>
            <Bento />
        </div>
    )
}

export default BentoWrapper