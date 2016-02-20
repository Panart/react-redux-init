import { connect } from 'react-redux'
import { Auth } from 'components'
import { changeLogin } from 'Actions'

class _Home extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Auth
          login={ this.props.login }
          changeLogin={ this.props.changeLogin }
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    login: state.user.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLogin: (login) => {
      dispatch(changeLogin(login))
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Home)

export default Home