import { increment, decrement, reset } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

    const dispactch = useDispatch();

    const counter = useSelector((state) => state.counter)

    return(
        <main>
            {counter}
            <button onClick={() => dispactch(increment())}> + </button>
            <button onClick={() => dispactch(decrement())}> - </button>
            <button onClick={() => dispactch(reset())}> Reset </button>
        </main>
    )
}

export default Counter;