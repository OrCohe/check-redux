import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from '../../containers/App';
import usersReducer from '../../store/reducers/users.reducer';
import nameReducer from '../../store/reducers/name.reducer';
import countryReducer from '../../store/reducers/country.reducer';

const rootReducer = combineReducers({usersReducer, nameReducer, countryReducer});
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

export default Root;    