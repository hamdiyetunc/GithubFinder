import ReactDOM from 'react-dom'
import React, { useState,useEffect } from 'react'

// class, stateless function component
// state, lifecycle
// 16.8: function component + hook => stateful function component

// class component te state teki count u setState kullanarak degistirme:
// import React, { Component, setState } from 'react'

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             text: ''
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <p>Butona {this.state.count} kez tikladiniz.</p>
//                 <button onClick={() => this.setState({count: this.state.count + 1})}>+1</button>
//             </div>
//         )
//     }
// }

// function component te state bilgiyi useState kullanarak degistirme:
const App = (props) => {
    const [count,setCount] = useState(props.count);
    const [text,setText] = useState(props.text);

    // text degisince/calisinca
    useEffect (() => {
        console.log('text')
    }, [text])

    // count degigince/calisinca
    useEffect (() => {
        console.log('count')

        localStorage.setItem('count', count)
    }, [count])

    // componentdidmount calisinca birkez calistirmak icin [] kullanilir
    useEffect(() => {
        console.log('componentdidmount')

        const countData = localStorage.getItem('count');

        if(countData) {
            setCount(Number(countData))
        }
    }, [])

    // componentdidmount(), componentdidupdate() ikisi calisir
    useEffect (() => {
        console.log('componentdidmount componentdidupdate'); 1
    })

    return (
        <div>
            <p>Butona {count} kez tikladiniz.</p>
            <p>Girilen text: {text }</p>
            <button onClick={() => setCount(count-1)}>-1</button>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}
App.defaultProps = {
    count: 0,
    text: ''
}

ReactDOM.render(<App />, document.getElementById('root'));