import { useState } from 'react';

function TodoInputComponent({ todoItems, setTodoItems }) {
	const [currentTask, setCurrentTask] = useState('');

	function handleInput(event) {
		setCurrentTask(event.target.value);
	}

	function handleAddTodo() {
		// DODAJEMO ZADATAK
		setTodoItems([...todoItems, {task:currentTask, id: new Date().getTime()}]);
		// console.log(currentTask)
		setCurrentTask('');
	}

	return (
		<div className='flex items-center justify-center gap-[10px]'>
			<input
				type='text'
				placeholder='Add Task..'
				className='border border-green-500 rounded-[15px] px-[12px] py-[6px] text-green-700 outline-none placeholder:text-red-600'
				onChange={handleInput}
        value={currentTask}
			/>
			<button
				className='bg-green-500 px-[12px] py-[6px] rounded-[15px] text-white'
				onClick={handleAddTodo}>
				Add Task
			</button>
		</div>
	);
}

export default TodoInputComponent;
