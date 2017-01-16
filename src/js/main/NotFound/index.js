import './notFound.scss';
export default class NotFound {
    constructor() {
        this.render();
    }
    render() {
        $('#app').html(require('./notFound.tpl')());
    }
}