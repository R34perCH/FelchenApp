import React, { Component } from 'react';
import { Text, View, StyleSheet, SectionList, Linking, TouchableOpacity } from 'react-native';

function SettingItem(props) {
    return <Text style={style.item}>{props.text}</Text>
}

function SettingsHeader(props) {
    return <Text style={style.section}>{props.text}</Text>
}

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={style.container}>

                <SectionList
                    sections={
                        [
                            {
                                title: 'Version',
                                data: [{ key: '1', info: '1.0.0' }]
                            },
                            {
                                title: 'Impressum',
                                data: [
                                    { key: '3', info: 'tomasi-developing' },
                                    { key: '4', info: 'Copyright 2020' },
                                ]
                            },
                        ]
                    }
                    renderItem={({ item }) => <SettingItem text={item.info} />}
                    renderSectionHeader={({ section }) => <SettingsHeader text={section.title} />}
                />
            </View>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30
    },
    section: {
        backgroundColor: 'whitesmoke',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey',
        fontSize: 18,
        padding: 5,
        textAlign: 'center'
    },
    item: {
        color: 'dimgrey',
        fontSize: 18,
        padding: 5,
        textAlign: 'center'
    }

})