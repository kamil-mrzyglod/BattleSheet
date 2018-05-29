export class Start extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <h1>Battle Sheet</h1>
                    </div>
                </div>
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <button class="btn btn-primary btn-lg btn-block">New battle</button>
                    </div>
                </div>
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <button class="btn btn-lg disabled btn-block">Load previous</button>
                    </div>
                </div>
            </div>);
    }
}

export default Start;