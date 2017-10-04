import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, NativeModules, LayoutAnimation } from 'react-native'
import { CardSection } from './common/CardSection'
import { connect } from 'react-redux'
// imports all action creators
// ie: actions.selectLibrary()
import * as actions from '../actions'

// These are needed to make LayoutAnimation.spring() work on Android
const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring()
    }

    renderDescription() {
        const { descriptionText } = styles
        const { library, expanded } = this.props

        if (expanded) return (
            <CardSection>
                <Text style={descriptionText}>{library.description}</Text>
            </CardSection>
        )
    }

    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.library

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionText: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#f0f0f0'
    }
}

// if no mapStateToProps, pass in null
// pass actions into the component on this.props
// ie: this.props.selectLibrary()

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id
    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)

// variables we pass into a Component are available as this.props and ownProps
// const mapStateToProps = (state, ownProps) => {
//     //const expanded = state.selectedLibraryId === ownProps.library.id
//     return { selectedLibraryId: state.selectedLibraryId }                  <-- before refactor
// }