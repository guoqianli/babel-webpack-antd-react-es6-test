import login from './main/Login';

class Router {
    constructor() {
        $(window).on('hashchange', () => {
            this._loadModule();
        });
        this._loadModule();
    }

    _loadModule() {
        const hash = location.hash;

        switch (hash) {
            case '':
            case '#login': return new login();
            default: require.ensure([], () => {
                const NotFound = require('./main/NotFound').default;
                return new NotFound();
            });
        }
    }
}

export default Router;