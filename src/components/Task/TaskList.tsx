import { Task } from '.';
import { Task as TaskProps } from '../shared/Task';
import { NoTaskMessage } from './NoTaskMessage';

interface Props {
	tasks: TaskProps[];
	onUpdateTask(tasks: TaskProps[]): void;
}

export function TaskList({ tasks, onUpdateTask }: Props) {
	const totalTasks = tasks.length;
	const finishedTasks = tasks.reduce((acc, cur) => acc + Number(cur.isCompleted), 0);

	return (
		<section>
			<header className="flex justify-between mt-16 mb-6">
				<div className="flex items-center gap-2 font-bold">
					<p className="text-blue-200 text-sm">Tarefas criadas</p>
					<span className="text-xs text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full">
						{totalTasks}
					</span>
				</div>

				<div className="flex items-center gap-2 font-bold">
					<p className="text-purple-200 text-sm">Concluídas</p>
					<span className="text-xs text-gray-200 bg-gray-400 px-2 py-[2px] rounded-full">
						{totalTasks > 0 ? `${finishedTasks} de ${totalTasks}` : 0}
					</span>
				</div>
			</header>

			{tasks.length ? (
				tasks.map((task) => (
					<div key={task.id} className="mb-2 last:mb-0">
						<Task task={task} tasks={tasks} onUpdateTask={onUpdateTask} />
					</div>
				))
			) : (
				<NoTaskMessage />
			)}
		</section>
	);
}
