export class GrandAllianceSelection extends React.Component {

    selectGrandAlliance(alliance) {
        this.props.state.grandAlliance = alliance;
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <button className="btn btn-lg btn-block" onClick={() => this.selectGrandAlliance('order')}>Order</button>
                    </div>
                </div>
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <button className="btn btn-lg btn-block" onClick={() => this.selectGrandAlliance('chaos')}>Chaos</button>
                    </div>
                </div>
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <button className="btn btn-lg btn-block" onClick={() => this.selectGrandAlliance('destruction')}>Destruction</button>
                    </div>
                </div>
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <button className="btn btn-lg btn-block" onClick={() => this.selectGrandAlliance('death')}>Death</button>
                    </div>
                </div>
            </div>);
    }
}

export default GrandAllianceSelection;