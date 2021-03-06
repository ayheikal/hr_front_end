import React, {Component} from 'react'



class Timer extends Component {


    constructor(props){
        super(props)
        this.state = {
            secondsElapsed: this.props.secondes
        }

        this.handelStartInterview()
    }

    // getInitialState = () =>{
    //     this.setState({
    //         secondsElapsed: 0
    //     })
    // }

    getSeconds = () => {
        return ('0' + this.state.secondsElapsed % 60).slice(-2)

    }

    getMinutes = () =>{
        return (Math.floor(this.state.secondsElapsed / 60))
    }

    handelStartInterview = () => {
        this.incrementer = setInterval(() =>{
            this.setState({
                secondsElapsed: this.state.secondsElapsed - 1
            })
        }, 1000)
    }

    handelStopClick = () =>{
        clearInterval(this.incrementer)
    }

    render(){
        return(
            <div>
                <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
                {/* <button onClick={this.handelStartClick} type="button">Start</button>
                <button onClick={this.handelStopClick} type="button">Stop</button> */}
            </div>
        )
    }
}
    

export default Timer