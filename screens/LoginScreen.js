import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native';


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
                <View style={styles.circle}>
                    <View style={{ marginTop: 64 }}>
                        <Image source={require('../assets/chat.png')} style={{ width: 100, height: 100, alignSelf: 'center' }} />
                    </View>
                    <View style={{ marginHorizontal: 32 }}>
                        <Text style={styles.header}>
                            Username
                        </Text>
                        <TextInput style={styles.input} placeholder='Enter Your Username' onChangeText={name => {
                            this.setState({ name });
                        }} value={this.state.name}></TextInput>
                        <View style={{ alignSelf: 'flex-end', marginTop: 64 }}>
                            <TouchableOpacity style={styles.continue} onPress={this.continue}>
                                <Text style={{ color: 'white', fontSize: 20, fontWeight: '500' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f5f7'
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: '#FFF',
        position: 'absolute',
        left: -120,
        top: -20
    },
    header: {
        fontWeight: '800',
        fontSize: 30,
        color: '#514e5a',
        marginTop: 32,
        left: 30,
        alignSelf: 'center'
    },
    input: {
        marginTop: 32,
        height: 50,
        borderRadius: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#bab7c3',
        paddingHorizontal: 16,
        color: "#514e5a",
        fontWeight: '600',
        alignSelf: 'center'
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: '#9075e3',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
