import { GrandAllianceSelection } from "./grandAllianceSelection";

export class NewBattle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            grandAlliance: ''
        }
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <ul className="step">
                            <li className="step-item active">
                                <a href="#" className="tooltip" data-tooltip="Choose a Grand Alliance">Step 1</a>
                            </li>
                            <li className="step-item">
                                <a href="#" className="tooltip" data-tooltip="Select Faction">Step 2</a>
                            </li>
                            <li className="step-item">
                                <a href="#" className="tooltip" data-tooltip="Select Allegiance">Step 3</a>
                            </li>
                            <li className="step-item">
                                <a href="#" className="tooltip" data-tooltip="Summary">Step 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <GrandAllianceSelection state={this.state} />
            </div>);
    }
}

export default NewBattle;