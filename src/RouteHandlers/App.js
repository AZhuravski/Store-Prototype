import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux' // Redux functionality. It connects Root component with Store.

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store={store}>
            	<div>
            		<div className="store-title">
                        Store Application
                    </div>
                	{this.props.children}
                </div>
            </Provider>
        )
    }
}

export default App