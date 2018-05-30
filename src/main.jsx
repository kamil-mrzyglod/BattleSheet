import { BrowserRouter, Route } from 'react-router-dom';

import * as modules from './modules/modules';

export class Main extends React.Component {

    render() {
        return (<BrowserRouter>
            <div className="container">
                <div className="columns">
                    <div className="col-8 col-mx-auto text-center">
                        <h1>Battle Sheet</h1>
                    </div>
                </div>
                <div className="columns">
                    <div className="column col-12">
                        <Route exact path="/" component={modules.Start} />
                        <Route exact path="/new" component={modules.NewBattle} />
                    </div>
                </div>
            </div>
        </BrowserRouter>);
    }
}

export default Main;