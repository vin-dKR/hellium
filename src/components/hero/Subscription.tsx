import React from 'react';
import { pricingCards } from '@/constants/pricing';
import PricingCard from './PricingCard';

const Subscription = () => {
  return (
    <div className='h-full mt-36'>
      <div className='flex justify-center items-center flex-col gap-4'>
        <h2 className='text-6xl text-center'>Choose what fits you right</h2>
        <p className='text-muted-foreground text-center max-w-lg'>
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
      </div>
      <div className="flex items-center gap-5 justify-center flex-wrap my-6">
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
