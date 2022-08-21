import clsx from 'clsx';
import { IconProps } from 'phosphor-react';
import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
	icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export function Button({ className, icon: Icon, children, ...props }: Props) {
	return (
		<button
			className={clsx(
				'bg-blue-300 hover:bg-blue-200 h-[52px] w-full sm:max-w-[90px] rounded-lg text-gray-100 font-bold text-sm flex items-center justify-center gap-2 transition-colors duration-300 focus:outline-none focus:outline focus:outline-offset-2 focus:outline-blue-200 disabled:bg-blue-300/80 disabled:text-gray-100/40',
				className,
			)}
			{...props}
		>
			{children}
			{Icon && <Icon size={16} />}
		</button>
	);
}
