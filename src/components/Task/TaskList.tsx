import { NoTaskMessage } from "./NoTaskMessage";

export function TaskList() {
	return (
		<section>
			<header className="flex justify-between mt-16 mb-6">
				<div className="flex items-center gap-2 font-bold">
					<p className="text-blue-200 text-sm">Tarefas criadas</p>
					<span className="text-xs text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full">0</span>
				</div>

				<div className="flex items-center gap-2 font-bold">
					<p className="text-purple-200 text-sm">Concluídas</p>
					<span className="text-xs text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full">0</span>
				</div>
			</header>

			<NoTaskMessage />
		</section>
	);
}
