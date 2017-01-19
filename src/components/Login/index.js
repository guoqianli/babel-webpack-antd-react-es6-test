import '../../css/login.scss';

export default class Login {
  constructor() {
    this.render();
    this.event();
  }

  render() {
    $('#app').html(require('./login.tpl')());
  }

  event() {
    $('#loginBtn').click(() => location.hash = '#index');
  }
}
