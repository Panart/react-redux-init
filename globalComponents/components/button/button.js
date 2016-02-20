export default class Button extends React.Component {
  
  render() {
    return (
      <button
        className={
          'button' + 
          (this.props.disabled ? ' button_disabled' : '')
        }
      >
        {
          this.props.children
        }
      </button>
    )
  }

}