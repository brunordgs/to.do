import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Task } from './components/shared/Task';
import { TaskList } from './components/Task/TaskList';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';

export function App() {
	const [task, setTask] = useState({ id: 0, text: '', isCompleted: false } as Task);
	const [tasks, setTasks] = useState<Task[]>([]);

	function handleAddTask() {
		if (!task.text.length) return;

		setTasks([...tasks, task]);
		setTask({ id: 0, text: '', isCompleted: false });
	}

	return (
		<>
			<Header />

			<Container className="pb-8">
				<div className="flex flex-col sm:flex-row gap-2 -mt-[30px]">
					<Input
						value={task.text}
						onChange={(e) =>
							setTask({
								id: Math.random(),
								text: e.target.value,
								isCompleted: false,
							})
						}
						placeholder="Adicione uma nova tarefa"
					/>

					<Button icon={PlusCircle} onClick={handleAddTask} aria-label="Adicionar tarefa">
						Criar
					</Button>
				</div>

				<TaskList tasks={tasks} onUpdateTask={setTasks} />
			</Container>
		</>
	);
}
