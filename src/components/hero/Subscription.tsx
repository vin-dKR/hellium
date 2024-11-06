import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { pricingCards } from '@/constants/pricing';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import Link from 'next/link';

const Subscription = () => {
  return (
    <>
      <div className='flex justify-center items-center flex-col gap-4 mt-10'>
        <h2 className='text-4xl text-center'> Choose what fits you right</h2>
        <p className='text-muted-foreground text-center max-w-lg'>
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not ready to commit you can get started for free.
        </p>
      </div>
      <div className='flex  justify-center gap-4 flex-wrap mt-6'>
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className='text-orange'>{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className='text-4xl font-bold'>{card.price}</span>
              <span className='text-muted-foreground'>
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className='flex flex-col items-start gap-4'>
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className='flex gap-2'>
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className='bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md text-black'
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Subscription;
