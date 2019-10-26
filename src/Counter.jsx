import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from './store/actions.js/counterActions';

const Counter = (props) => {
    console.log(props)
    return (<>
        <div style={{ width: '30vw', height: '30vh', backgroundColor: 'white', }}>
            <h2 style={{ color: 'black' }}>Counter</h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button
                    onClick={() => { props.decrementCount() }}
                    disabled={props.count < 1}
                >
                    Decrement
                </button>
                <h4 style={{ color: 'black', margin: 'auto 2vw' }}>{props.count}</h4>
                <button
                    onClick={() => { props.incrementCount() }}
                >
                    Increment
                </button>
            </div>
        </div>
    </>);
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: () => { dispatch(incrementCount()) },
        decrementCount: () => { dispatch(decrementCount()) }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);