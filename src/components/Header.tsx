export function Header() {
	return (
		<header className="bg-gray-700 pt-[72px] pb-20 flex justify-center">
			<div className="flex items-start gap-3 select-none">
				<img src="/assets/rocket.svg" className="w-6" alt="Foguete" />
				<h1 className="text-[40px] leading-8 font-black text-blue-200">to.<span className="text-purple-300">do</span></h1>
			</div>
		</header>
	)
}