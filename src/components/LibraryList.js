import React, { Component } from 'react'
import { connect } from 'react-redux'

class LibraryList extends Component {
    render() {
        console.log(this.props)
        return 
    }
}

// takes global state, and maps it as props to this component (LibraryList)
// if we want this.props.libraries
// we return { libraries: state.libraries }
const mapStateToProps = (state) => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)