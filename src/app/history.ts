// Core
import { createMemoryHistory } from 'history';


export const getUserConfirmation = (message, callback) => (
    callback(window.confirm(message))
);


export default createMemoryHistory({
    initialEntries: ['/login'],
    initialIndex: 0,
    keyLength: 6,
    getUserConfirmation,
});