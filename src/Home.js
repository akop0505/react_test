import React, {Component} from "react";
import './App.css';
import Progress from './components/Progress';
import ScreenComponent from './components/ScreenComponent';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            visible: true,
            position: 'horizontal'
        }
    }

    closeProgressBar() {
        this.setState({
            visible: false
        })
    };

    componentWillMount() {
        this.checkAndOrientate();
    }

    componentDidMount() {
        let interval = setInterval(() => {
            if (this.state.progress > 100) {
                this.closeProgressBar();
                clearInterval(interval);
                return;
            }
            this.setState({
                progress: parseInt(this.state.progress + 5, 10)
            })
        }, 100);

        window.addEventListener("resize", () => {
            this.checkAndOrientate();
        });
    };

    checkAndOrientate() {
        if (navigator.userAgent.match(/iPhone|iPad|iPod|BlackBerry/i) !== null) {
            this.orientationHandle("phone");
        } else {
            this.orientationHandle();
        }
    }

    orientationHandle(device = "pc") {
        if (device === "phone") {
            let wOrientation = window.orientation !== undefined ? Math.abs(window.orientation) : window.screen.orientation.angle;
            switch (wOrientation) {
                case 0:
                case 180:
                    this.setState({position: "vertical"});
                    break;
                case 90:
                case 270:
                    this.setState({position: "horizontal"});
                    break;
            }
        } else {
            let width = window.screen.width;
            let height = window.screen.height;
            if (width > height) {
                this.setState({position: "horizontal"});
            } else {
                this.setState({position: "vertical"});
            }
        }
    }

    render() {
        const {state} = this;
        return (
            <div className={`container`}>
                {!this.state.visible && <div className='close'><FontAwesomeIcon icon={faTimesCircle}/></div>}
                <ScreenComponent position={state.position}/>
                {
                    this.state.visible && <Progress percent={this.state.progress}></Progress>
                }
            </div>
        );
    }

}