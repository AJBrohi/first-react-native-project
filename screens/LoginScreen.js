import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'

export default class LoginScreen extends Component {
    state = {
        name: ''
    }

    continue = () => {
        this.props.navigation.navigate('Chat', { name: this.state.name })
    };

    render() {
        return (
            <View style={styles.container}>
                <Text> Screen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f5f7'
    }
})
