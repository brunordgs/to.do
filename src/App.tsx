import { PlusCircle } from 'phosphor-react';
import { Header } from './components/Header';
import { TaskList } from './components/Task/TaskList';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';

export function App() {
	return (
		<>
			<Header />

			<main className="max-w-2xl mx-auto">
				<div className="flex gap-2 -mt-[30px]">
					<Input placeholder="Adicione uma nova tarefa" />
					<Button icon={PlusCircle}>Criar</Button>
				</div>

				<TaskList />
			</main>
		</>
	);
}
