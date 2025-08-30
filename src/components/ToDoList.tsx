import { ToDoCard } from './ToDoCard';

type listProps = {
    todos: {input: string, complete: boolean}[]
    activeTab: string
    deleteTodo: (index: number) => void
    completeTodo: (index: number) => void
}

export function ToDoList(props: listProps){
    const { todos, activeTab, deleteTodo, completeTodo} = props
    const filteredList = 
        activeTab === 'Completed' ? todos.filter(val => val.complete) :
        activeTab === 'Open' ? todos.filter(val => !val.complete):
        todos

    return (
        <>
            {filteredList.map((todo, index) => {
                const cardProps = {todo, index, deleteTodo, completeTodo}
                return(
                    <ToDoCard key={index} {...cardProps}/>
                )
            })}
        </>
    )
}