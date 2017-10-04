import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        // take this list of libraries and use it
        // to render a list of data to the user
        this.dataSource = ds.cloneWithRows(this.props.libraries)
    }

    renderRow(library) {
        return (
            <ListItem library={library} />
        )
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

// takes global state, and maps it as props to this component (LibraryList)
// if we want this.props.libraries
// we return { libraries: state.libraries }
const mapStateToProps = (state) => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)