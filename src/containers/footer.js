import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render () {
        return (
            <div>
                <footer>
                    <div className="footer">
                        <h5>{this.props.info.name}</h5>
                        <h5>{this.props.info.address}</h5>
                        <h5>{this.props.info.city}</h5>
                        <h5>{this.props.info.state}</h5>
                        <h5>{this.props.info.zipCode}</h5>
                    </div>
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { info: state.info };
}

export default connect(mapStateToProps)(Footer);
