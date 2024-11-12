import { Check } from 'lucide-react';
import Link from 'next/link';
import RadialBlur from '../ui/RadialBlur';

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
}

const PricingCard = ({ title, price, description, features }: PricingCardProps) => {
    return (
        <div
            className="relative bg-gradient-to-t from-mistorg from-10% via-orange to-night to-96% pricing-card w-64 h-96 rounded-xl p-8 border border-t-black border-r-black border-l-black border-b-white dark:border-t-white dark:border-r-white dark:border-l-white dark:border-b-black"
        >
            <div className="absolute inset-0 -z-10 ">
                <RadialBlur
                    color="#FF8800"
                    size="200px"
                    blur="100px"
                    position={{ top: '45%', left: '20px' }}
                />
            </div>
            <h2 className="text-3xl text-darkorg font-bold">{title}</h2>
            <div className="price">
                <span className="text-6xl">{price}</span>
                <span>/ month</span>
            </div>
            <p className="text-sm">{description}</p>

            <Link
                href={`/dashboard?plan=${title}`}
                className="flex justify-center mt-8 border rounded-xl border-t-black border-b-white bg-gradient-to-b from-slate-50 from-0% via-fade-org to-dark-org py-2 hover:border-2"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-900 to-slate-400 text-shadow-lg rotate-[-2deg] inline-block">
                    Get Started
                </span>
            </Link>

            <ul className="features-list container px-0 mt-8">
                {features.map((feature) => (
                    <li key={feature} className="feature flex">
                        <Check color="#FF8800" />
                        <p className='pl-3'>{feature}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;