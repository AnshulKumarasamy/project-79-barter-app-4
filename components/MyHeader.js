import * as React from 'react';
import { Header } from 'react-native';

export const MyHeader = props => {
    return (
        <Header
            centerComponent={{ text: props.title, style: { color: '#90a5a9', fontSize: 20, fontWeight: "bold" } }}
            backgroundColor="#eaf8fe"
        />
    )
}