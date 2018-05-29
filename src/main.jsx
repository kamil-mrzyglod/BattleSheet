import { BrowserRouter, Route } from 'react-router-dom';

import * as modules from './modules/modules';

export class Main extends React.Component {

    render() {
        return (<BrowserRouter>
            <div className="container">
                <div className="columns">
                    <div className="column col-12">
                        <Route path="/" component={modules.Start} />
                    </div>
                </div>
            </div>
        </BrowserRouter>);
    }
}

export default Main;