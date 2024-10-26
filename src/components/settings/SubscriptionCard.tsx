import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card"
import { FormLabel } from "../ui/form"
import { Input } from "../ui/input"

export default const SubscriptionCard = ({
	title,
	description,
	price,
	payment,
	onPayment,
	id
}: SubscriptionCardProps ) => {
	return (
		<FormLabel htmlFor={id} >
			<Card 
				className={cn(
					'w-full cursor-pointer',
					payment == id && 'border-orange'
			)} >
				<CardContent className="flex justify-center p-2" >
					<div className="flex items-center gap-3">
						<Card className={cn('flex justify-center p-3 border-none')} >
							<CardTitle>
								${price}
							</CardTitle>
						</Card>
						<div>
							<CardDescription className="font-bold">{title}</CardDescription>
							<CardDescription className="font-bold">
								{description}
							</CardDescription> 
						</div>
					</div>
					
					<div>
						<div
							className={cn(
								'w-4 h-4 rounded-full',
								payment == id ? 'bg-peach' : 'pg-platinum'
							)}
						/>
						<Input
							onClick={() => onPayment(title)}
							value={id}
							id={id}
							className="hidden"
							type="radio"
						/>
					</div>
				</CardContent>	
			</Card>
		</FormLabel>
	)
}
