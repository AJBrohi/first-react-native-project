import React, { Component } from 'react'
import { Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fire from '../Fire';

export default class ChatScreen extends Component {
    state = {
        messages: [],
        is_users_modal_visible: false
    }

    get user() {
        return {
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }

    componentDidMount() {
        Fire.get(message =>
            this.setState(previous => ({
                messages: GiftedChat.append(previous.message, message)
            }))
        );
    }

    componentWillUnmount() {
        Fire.off();
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user}></GiftedChat>

        if (Platform.OS === 'android') {
            return (
                <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset={30} enabled>
                    {chat}
                </KeyboardAvoidingView>
            );
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                {chat}
            </SafeAreaView>
        );
    }
}