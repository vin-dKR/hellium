import React from 'react';
import { pricingCards } from '@/constants/pricing';
import PricingCard from './PricingCard';
import RadialBlur from '../ui/RadialBlur';

const Subscription = () => {
  return (
    <div className='h-full mt-52'>
      <RadialBlur
                color='#FF9D2D'
                size='400px'
                blur='100px'
                position={{ top: '2700px', left: '-180px' }}
            />
      <div className='flex justify-center items-center flex-col gap-4'>
        <h2 className='text-6xl text-center'>Choose what fits you right</h2>
        <p className='text-muted-foreground text-center max-w-lg'>
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
      </div>
      <div className="flex items-center gap-5 justify-center flex-wrap my-6 mt-20">
        {pricingCards.map((card) => (
          <PricingCard
            key={card.title}
            title={card.title}
            price={card.price}
            description={card.description}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
