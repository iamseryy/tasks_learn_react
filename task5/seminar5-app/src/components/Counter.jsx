import { connect } from 'react-redux'
import { incrementCounter, decrementCounter} from "../redux/actions";

function Counter(props) {
    console.log('render > ', props)
    return (
        <div>
            <h1>Count: {props.counter} </h1>
            <button onClick={props.onIncrementCount}>+</button>
            <button onClick={props.onDecrementCount}>-</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapStateToProps > ' , state)
    const { counterReducer } = state
    return {
        counter: counterReducer.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementCount: () => dispatch(incrementCounter()),
        onDecrementCount: () => dispatch(decrementCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
