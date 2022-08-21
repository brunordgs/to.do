import clsx from 'clsx';
import { HTMLAttributes } from 'react';

export function Container({ className, children }: HTMLAttributes<HTMLDivElement>) {
	return <main className={clsx('max-w-2xl mx-auto px-4 md:px-0', className)}>{children}</main>;
}
