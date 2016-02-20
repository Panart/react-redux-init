import { Kit } from 'globalComponents'

export default class Frame extends React.Component {

  constructor() {
    super()
    this.state = {
      globalComponents: ['button'],
      useCases: ['registration']
    }
  }
  
  render() {
    return (
      <div className="frame">
        <Kit
          globalComponents={ this.state.globalComponents }
          useCases={ this.state.useCases }
        />
        {
          this.props.children
        }
      </div>
    )
  }

}