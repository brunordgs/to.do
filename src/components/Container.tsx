import { ReactNode } from 'react';

export function Container({ children }: { children: ReactNode }) {
	return <main className="max-w-2xl mx-auto px-4 md:px-0">{children}</main>;
}
