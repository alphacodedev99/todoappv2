import { useState } from "react";

function TodoTaskComponent({ todoItems,setTodoItems }) {
    const [currentId, setCurrentId] = useState('');
    function handleCheck(id) {
        setCurrentId(id);
    }

    function handleDelete(id) {
        // console.log(id);
        // setTodoItems()
        let removeTodo = todoItems.filter((item) => item.id !== id);

        setTodoItems(removeTodo);

    }

	return (
		<div className='border-2 border-green-500 p-[20px] mt-[20px] flex flex-col gap-[20px]'>
			{todoItems.length > 0 ? todoItems.map((todo,index) => {
				return (
					<div
						key={todo.id}
						className='border border-red-500 p-[10px] rounded-[20px] flex items-center justify-between'>
						<h1 className={currentId === todo.id ? 'text-green-500 line-through' : 'text-red-500'}>{todo.task}</h1>
						<button className='bg-red-500 text-white px-[16px] py-[8px] rounded-[10px]'
                        onClick={() => handleDelete(todo.id)}
                        >
							Remove
						</button>
                        <button onClick={() => handleCheck(todo.id)}>Check</button>
					</div>
				);
			}) : <h2 className="text-[48px] uppercase text-center text-green-600 font-bold">Hej Nidzo unesi zadatak...</h2>}
		</div>
	);
}

export default TodoTaskComponent;
