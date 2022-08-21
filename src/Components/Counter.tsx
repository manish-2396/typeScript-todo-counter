import React, { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
    // let temp: number[]
    // let temp: Array<number> ; Generic types
    const [count, setCount] = useState(0)
    const handleClick= (value: number) => {
        setCount(count + value)
        
    }

  return (
    <div>
        <Header label={"Counter"}/>
        <Header label={`${count}`}/>
        <Header>
            <div>First child div</div>
            <div>Second child div</div>
            <div>3rd child div</div>
        </Header>
        <Button label="Add" handleClick={() => handleClick(1)}/>
        <Button label="Substract" handleClick={() => handleClick(-1)}/>
    </div>
  )
}

export default Counter

