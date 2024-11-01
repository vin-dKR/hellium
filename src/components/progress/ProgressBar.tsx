'use client';

import { Progress } from '../ui/progress';

const ProcessBar = ({ credits, label, end }: ProgressBarProps) => {
  return (
    <div className='flex flex-col w-full md:w-7/12 gap-1'>
      <h2 className='font-bold'>{label}</h2>
      <div className='flex flex-col'>
        <div className='flex justify-between text-sm'>
          <p>{credits}div</p>
          <p>{end}</p>
        </div>
        <Progress value={(credits / end) * 100} className='w-full' />
      </div>
    </div>
  );
};

export default ProcessBar;
