import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function (props) {
    const { fang, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={style.container}>
                <Text>Datum: {fang.fangDatum} Nymphenfarbe: {fang.nymphenFarbe} Hakengrösse: {fang.hakenGroesse}</Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10
    }
});