import React, { useState } from 'react'


interface TodosInputProps{
    addTodoHandler: (value: string) => void;
}

// addTodoHandler
const TodosInput = ({addTodoHandler}: TodosInputProps) => {
    const [inputText, setInputText] = useState<string>("")
    const changeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputText(e.target.value)

    }
    const onClickHandler = () => {
        addTodoHandler(inputText)
        setInputText('')
    }
  return (
    <div>
        <input value={inputText} onChange={changeHandler}/>
        <button onClick={onClickHandler}>Add Todo</button>
    </div>
  )
}

export default TodosInput