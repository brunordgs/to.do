import clsx from 'clsx';
import { Trash } from 'phosphor-react';
import { Task as TaskProps } from '../shared/Task';

interface Props {
	task: TaskProps;
	tasks: TaskProps[];
	onUpdateTask(tasks: TaskProps[]): void;
}

export function Task({ task, tasks, onUpdateTask }: Props) {
	return (
		<div className="max-w-[736px] p-4 flex items-start bg-gray-500 border border-gray-400 rounded-lg shadow-[0_2px_8x_rgba(0,0,0,0.6)]">
			<div className="flex items-end flex-1">
				<input
					type="checkbox"
					checked={task.isCompleted}
					onChange={() => {
						const updatedTasks = tasks.map((t) =>
							t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t,
						);
						onUpdateTask(updatedTasks);
					}}
					className="focus:ring-blue-300 h-4 w-4 text-purple-200 bg-transparent border-2 border-blue-200 hover:bg-blue-200/20 hover:border-blue-200/70 cursor-pointer transition-colors duration-300 rounded-full"
				/>

				<div className="px-4">
					<p
						className={clsx(
							task.isCompleted ? 'line-through' : 'no-underline text-gray-100',
							'text-sm',
						)}
					>
						{task.text}
					</p>
				</div>
			</div>

			<button
				type="button"
				className="hover:text-red-300 hover:bg-gray-400 rounded-md p-1 transition-colors duration-300 focus:outline-none focus:outline focus:outline-offset-2 focus:outline-blue-200"
				onClick={() => onUpdateTask(tasks.filter((t) => t.id !== task.id))}
				aria-label="Deletar tarefa"
			>
				<Trash size={16} />
			</button>
		</div>
	);
}
