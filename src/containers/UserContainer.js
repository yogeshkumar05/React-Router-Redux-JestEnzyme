import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';
import User from '../components/User';
import loadingGif from '../../images/loading.gif';

class UserContainer extends Component {
    constructor(props) {
        super(props);
    }
    clickHandler = () => {
        this.props.getData();
    }
    render() {
        const {username,showLoader} = this.props;
        return(
            <div>
                <button onClick={this.clickHandler}>Click</button>
                {
                    showLoader && <img src={loadingGif}/>
                }
                <User name={username}/>
            </div>
        )
    }
}
const mapDispatchToProps = {
    getData: getData,
};
const mapStateToProps = (state) => ({
    username: state.reducer.name,
    showLoader: state.reducer.showLoader
})
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);