import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';

export default class DetailScreen extends Component {
    render() {
        const { navigation, route } = this.props;
        const { fang } = route.params;
        return (
            <ScrollView
                style={style.ScrollView}
                contentContainerStyle={style.container}>
                <Text style={style.label}>Fangdatum:</Text>
                <Text style={style.daten}>{fang.fangDatum}</Text>
                <Text style={style.label}>Nymphenname:</Text>
                <Text style={style.daten}>{fang.nymphenName}</Text>
                <Text style={style.label}>Nymphenfarbe:</Text>
                <Text style={style.daten}>{fang.nymphenFarbe}</Text>
                <Text style={style.label}>Hackengrösse:</Text>
                <Text style={style.daten}>{fang.hakenGroesse}</Text>
                <Text style={style.label}>Köpfchen:</Text>
                <Text style={style.daten}>{fang.koepfchen}</Text>
                <Text style={style.label}>Gewässer:</Text>
                <Text style={style.daten}>{fang.gewaesserName}</Text>
                <Text style={style.label}>Tiefe des Standorts:</Text>
                <Text style={style.daten}>{fang.tiefeStandort} Meter</Text>
                <Text style={style.label}>Tiefe des Fangs:</Text>
                <Text style={style.daten}>{fang.tiefeFischfang} Meter</Text>
                <Text style={style.label}>Wassertemperatur:</Text>
                <Text style={style.daten}>{fang.wasserTemperatur} ˚C</Text>
                <Text style={style.label}>Wetter:</Text>
                <Text style={style.daten}>{fang.wetter}</Text>
                <Text style={style.label}>Luftdruck:</Text>
                <Text style={style.daten}>{fang.luftdruck} hPa</Text>
                <Text style={style.label}>Windgeschwindigkeit:</Text>
                <Text style={style.daten}>{fang.windgeschwindigkeit} m/sec</Text>
                <Text style={style.label}>Lufttemperatur:</Text>
                <Text style={style.daten}>{fang.luftTemperatur} ˚C</Text>
            </ScrollView>
        );
    }
}
const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    ScrollView: {
        backgroundColor: '#fff',
    },
    daten: {
        paddingBottom: 15,
        fontSize: 16
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    }

})