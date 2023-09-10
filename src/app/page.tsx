import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export default function Home() {
	return (
		<div className='w-full h-screen flex justify-center items-center'>
			<Card className='w-1/4'>
				<CardHeader>
					<CardTitle>Redoable</CardTitle>
					<CardDescription>Your just-in-time checklist.</CardDescription>
				</CardHeader>
				<CardContent>
					<ChecklistItem />
          <ChecklistItem />
          <ChecklistItem />
				</CardContent>
				<CardFooter></CardFooter>
			</Card>
		</div>
	);
}

function ChecklistItem() {
	return (
		<Card className='px-4 py-2 my-1 border-transparent hover:border-gray-200 shadow-none'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<input
						type='checkbox'
						className='mr-2 w-4 h-4 border border-gray-400 rounded-sm'
					/>
					<span>Item 1</span>
				</div>
			</div>
		</Card>
	);
}
