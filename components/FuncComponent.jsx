import {useState} from 'react'

const FuncComponent = () => {

    const [count, setcount] = useState(0)

  return (
    <div>
     <button onClick={() => setcount(count+1)}>+</button>
        <li>El punto {count} ha sido añadido a la lista</li>
    </div>
  )
}

export default FuncComponent