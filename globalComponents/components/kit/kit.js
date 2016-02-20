import { Link } from 'react-router'

export default class Kit extends React.Component {
  
  render() {  
    return (
      <div>
        <div>
          {
            this.props.globalComponents.map((component, key) => {
              return (
                <Link to={ `/${ component }` } key={ key }>{ component }</Link>
              )
            })
          }
        </div>
        <div>
          {
            this.props.useCases.map((usecase, key) => {
              return (
                <Link to={ `/${ usecase }` } key={ key }>{ usecase }</Link>
              )
            })
          }
        </div>
      </div>
    )
  }

}