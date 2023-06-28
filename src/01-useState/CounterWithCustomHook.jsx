import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter} </h1>
            <hr />

            <button className="btn btn-primary" onClick={()=> increment({counter}) }>+1</button>
            <button className="btn btn-primary" onClick={()=>reset({counter})}>reset</button>
            <button className="btn btn-primary"onClick={()=> decrement({counter})}>-1</button>
        
        </>
    )
}
