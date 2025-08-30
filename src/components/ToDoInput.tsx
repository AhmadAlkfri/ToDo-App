import { useState } from 'react'

type inputProps = {
    handleAddTodo: (todo:string) => void
}

export function ToDoInput(props: inputProps){
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')
    return (
        <div className='input-container'>
            <input 
            value={inputValue} 
            onChange={(e)=>{setInputValue(e.target.value)}} 
            placeholder='Add task...' 
            />
            <button 
            onClick={()=>{
                if(!inputValue) {return}
                handleAddTodo(inputValue)
                setInputValue('')
            }}
            disabled={!inputValue}
            >

                <i className='fa-solid fa-plus'></i>
            </button>

        </div>
    )
}