import { ClipboardText } from 'phosphor-react';

export function NoTaskMessage() {
	return (
		<div className="border-t border-gray-400 rounded-md">
			<div className="flex flex-col items-center pt-16">
				<ClipboardText size={56} />

				<p className="font-bold mt-4">Você ainda não tem tarefas cadastradas</p>
				<p>Crie tarefas e organize seus itens a fazer</p>
			</div>
		</div>
	);
}
