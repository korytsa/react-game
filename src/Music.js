import React, {Component} from 'react';

export default class Music extends Component {
    constructor(props) {
    super(props);
    this.state = {
        play: false,
        pause: true,
    }
    this.url = "https://topmyz.com/uploads/files/2019-11/1574054851_s108lc0u0cf6.mp3";
    this.audio = new Audio(this.url);
    }

    play = () => {
        this.setState({ play: true, pause: false })
        this.audio.play();
    }

    pause = () => {
        this.setState({ play: false, pause: true })
        this.audio.pause();
    }

    render() {
        return (
        <div className='buttons'>
            <button onClick={this.play}>Play &#9834;</button>
            <button onClick={this.pause}>Pause &#9834;</button>
        </div>
        );
    }
}
