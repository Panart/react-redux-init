export default class Auth extends React.Component {
  
  render() {
    return (
      <div className="auth">
        <input value={ this.props.login } onChange={ (e) => { this.props.changeLogin(e.target.value) } } />
      </div>
    )
  }
}