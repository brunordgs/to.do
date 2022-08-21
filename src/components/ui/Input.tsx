import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

export function Input({ type, className, ...props }: ComponentPropsWithoutRef<'input'>) {
	return (
		<input
			type={type ?? 'text'}
			maxLength={70}
			className={clsx(
				'bg-gray-500 border border-gray-700 rounded-lg h-[54px] w-full max-w-[638px] px-4 text-gray-100 placeholder:text-gray-300 focus:outline	focus:outline-offset-2 focus:outline-blue-200 focus:ring-0 focus:border-transparent',
				className,
			)}
			{...props}
		/>
	);
}
