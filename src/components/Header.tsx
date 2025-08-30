type headerProps = {
    todos: {input: string, complete: boolean}[]
}

export function Header(props: headerProps){
    const { todos } = props
    const todosLength = todos.length
    const task_s = (todos.length != 1) ? 'tasks' : 'task'
    return (
        <header>
            <h1 className='text-gradient'>You have {todosLength} open {task_s}.</h1>
        </header>
    )
}