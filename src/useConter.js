import {useState} from 'react'

const useConter = (initialValue = 0, step = 1, min = 1, max = 10) => {
    if(initialValue < min || initialValue > max) initialValue = min

    const [count, setCount] = useState(initialValue)

    const increment = () => {
        if(count < max) setCount((prevCount) => prevCount + step)
    }

    const decrement = () => {
        if(count > min) setCount((prevCount) => prevCount - step)
    }

  return (
    {count,
    increment,
    decrement}
  )
}

export default useConter