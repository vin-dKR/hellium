import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {AnimatedBeamMultipleOutputDemo} from "@/components/ui/custom/AnimatedBeamMultipleOutputDemo";
import {AnimatedListDemo} from "@/components/ui/custom/AnimatedListDemo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { GlobeDemo } from "@/components/ui/custom/GlobeDemo";


const features = [
  {
    Icon: FileTextIcon,
    name: "Real time conversaation",
    description: "Make strong customer realtion.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1", 
    background: (
      <GlobeDemo className="absolute"/>
    ),
  },
  {
    Icon: BellIcon,
    name: "Email Marketing",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute h-[350px] w-full transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 border-0" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export default function Bento() {
  return (
    <BentoGrid className="z-10 lg:grid lg:grid-cols-3 lg:w-4/6">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}