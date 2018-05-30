import { Link } from 'react-router-dom';

export class Start extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <Link to="new">
                            <button className="btn btn-primary btn-lg btn-block">New battle</button>
                        </Link>
                    </div>
                </div>
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <button className="btn btn-lg disabled btn-block">Load previous</button>
                    </div>
                </div>
            </div>);
    }
}

export default Start;