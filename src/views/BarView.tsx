import * as React from 'react';
import Clock from "./../core/Clock";
import AttackScore from "./../models/model_attackScore";
import { RouteComponentProps } from 'react-router';

export interface BarViewState {
    timeText: string;
}



export default class BarView extends React.Component<RouteComponentProps, BarViewState> {

    private readonly _clock: Clock;

    constructor(props: any) {
        super(props);

        this.state = {
            timeText: ""
        }

        this._clock = new Clock((time: string) => {
            this.setState({ timeText: time });
        });

    }

    componentDidMount() {
        this._clock.run();
    }

    componentWillUnmount() {
        this._clock.stop();
    }

    onGotoFooClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Navigating to Foo view");
        this.props.history.push("/");
    };

    public render() {
        return (
            <div>
                <h3>BAR</h3>
                <p>Is this the right time?</p>
                <p>{this.state.timeText}</p>
                <button onClick={this.onGotoFooClick}>Go to Foo</button>
            </div>
        );
    }
}
