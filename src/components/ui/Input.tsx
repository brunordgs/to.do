import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export function Input({ className, ...props }: ComponentPropsWithoutRef<'input'>) {
	return (
		<input
			className={clsx(
				'bg-gray-500 border border-gray-700 rounded-lg h-[54px] w-[638px] px-4 placeholder:text-gray-300',
				className,
			)}
			{...props}
		/>
	);
}
