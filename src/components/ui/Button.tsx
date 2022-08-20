import clsx from 'clsx';
import { IconProps } from 'phosphor-react';
import { ComponentPropsWithoutRef, ForwardRefExoticComponent, RefAttributes } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
	icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export function Button({ className, icon: Icon, children }: Props) {
	return (
		<button
			className={clsx(
				'bg-blue-300 h-[52px] w-[90px] rounded-lg text-gray-100 font-bold text-sm flex items-center justify-center gap-2',
				className,
			)}
		>
			{children}
			{Icon && <Icon size={16} />}
		</button>
	);
}
