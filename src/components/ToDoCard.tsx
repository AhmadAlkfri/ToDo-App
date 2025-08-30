type cardProps = {
    todo: {input: string, complete: boolean}
    index: number
    deleteTodo: (index: number) => void
    completeTodo: (index: number) => void
}

export function ToDoCard(props: cardProps){
    const { todo, index, deleteTodo, completeTodo } = props
    return (
        <div className='card todo-item'>
            <p>{todo.input}</p>
            <div className='todo-buttons'>
                <button 
                onClick={()=>{completeTodo(index)}}
                disabled={todo.complete}
                >
                    <i className='fa-solid fa-check'></i>
                </button>
                <button
                onClick={()=>{deleteTodo(index)}}
                >
                    <i className='fa-solid fa-x'></i>
                </button>
            </div>
        </div>
    )
}