import React, { Component } from 'react';
import { Button, TextInput, Modal, View, StyleSheet, Text, ActivityIndicator, ScrollView } from 'react-native';

import { weatherConditions } from '../utils/WeatherConditions';


export default class NewCtach extends Component {

    state = {
        nymphenName: '',
        nymphenFarbe: '',
        hakenGroesse: null,
        koepfchen: null,
        gewaesserName: null,
        tiefeStandort: null,
        tiefeFischfang: null,
        wasserTemperatur: null,
        wetter: null,
        luftdruck: null,
        windgeschwindigkeit: null,
        luftTemperatur: null,
        isLoading: true
    };
    componentDidMount() {
        this.setState({ isLoading: true });
        try {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.fetchWeather(position.coords.latitude, position.coords.longitude);
                })
        } catch (error) {
            alert('GPS Position konnte nicht ermittelt werden');
            this.setState({ isLoading: false });
        }
    }

    fetchWeather = async (lat = position.coords.latitude, lon = position.coords.longitude, ) => {
        try {
            const KEY = '849338767c0e95025b5559533d26b7c4';
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`);
            const responseJSON = await response.json();
            this.setState({
                luftdruck: responseJSON.main.pressure.toString(),
                windgeschwindigkeit: responseJSON.wind.speed.toString(),
                wetter: weatherConditions[responseJSON.weather[0].id].subtitle,
                luftTemperatur: responseJSON.main.temp.toString(),
                isLoading: false
            })
        } catch (error) {
            alert('Keine Internetverbindung');
            this.setState({ isLoading: false });
        }
    }
    render() {
        const { visible, onSave } = this.props;
        const { nymphenName,
            nymphenFarbe,
            hakenGroesse,
            koepfchen,
            gewaesserName,
            tiefeStandort,
            tiefeFischfang,
            wasserTemperatur,
            wetter,
            luftdruck,
            windgeschwindigkeit,
            luftTemperatur } = this.state;
        return (
            <Modal
                visible={visible}
                onRequestClose={() => {
                    this.setState({
                        nymphenName: null,
                        nymphenFarbe: null,
                        hakenGroesse: null,
                        koepfchen: null,
                        gewaesserName: null,
                        tiefeStandort: null,
                        tiefeFischfang: null,
                        wasserTemperatur: null,
                        wetter: null,
                        luftdruck: null,
                        windgeschwindigkeit: null,
                        luftTemperatur: null,
                    })
                        ; onSave(null, null);
                }}
                animationType='slide'>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.label}>Name der Nymphe:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Name der Nymphe'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            onChangeText={text => this.setState({ nymphenName: text })} />
                        <Text style={styles.label}>Nymphenfarbe:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nymphenfarbe'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            onChangeText={text => this.setState({ nymphenFarbe: text })} />
                        <Text style={styles.label}>Hakengrösse:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Hakengrösse'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            onChangeText={text => this.setState({ hakenGroesse: text })} />
                        <Text style={styles.label}>Köpfchen der Nymphe:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Köpfchen der Nymphe'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            onChangeText={text => this.setState({ koepfchen: text })} />
                        <Text style={styles.label}>Gewässername:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Gewässername'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            onChangeText={text => this.setState({ gewaesserName: text })} />
                        <Text style={styles.label}>Tiefe des Standorts in Meter:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Tiefe des Standorts'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            onChangeText={text => this.setState({ tiefeStandort: text })} />
                        <Text style={styles.label}>Tiefe des Fischfangs in Meter:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Tiefe des Fischfangs'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            onChangeText={text => this.setState({ tiefeFischfang: text })} />
                        <Text style={styles.label}>Wassertemperatur in ˚C:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Wassertemperatur'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            onChangeText={text => this.setState({ wasserTemperatur: text })} />
                        <Text style={styles.label}>Wetter beim Fang:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Wetter'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            value={wetter}
                            onChangeText={text => this.setState({ wetter: text })} />
                        <Text style={styles.label}>Lufttemperatur in ˚C:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Lufttemperatur'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            value={luftTemperatur}
                            onChangeText={text => this.setState({ luftTemperatur: text })} />
                        <Text style={styles.label}>Luftdruck in hPa:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Luftdruck'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            value={luftdruck}
                            keyboardType={"numeric"}
                            onChangeText={text => this.setState({ luftdruck: text })} />
                        <Text style={styles.label}>Windgeschwindigkeit in m/sec:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Windgeschwindigkeit'
                            underlineColorAndroid='transparent'
                            multiline={true}
                            value={windgeschwindigkeit}
                            onChangeText={text => this.setState({ windgeschwindigkeit: text })} />
                        <Button title="speichern" onPress={() => {
                            this.setState({
                                nymphenName: null,
                                nymphenFarbe: null,
                                hakenGroesse: null,
                                koepfchen: null,
                                gewaesserName: null,
                                tiefeStandort: null,
                                tiefeFischfang: null,
                                wasserTemperatur: null,
                                wetter: null,
                                luftdruck: null,
                                windgeschwindigkeit: null,
                                luftTemperatur: null,
                            })
                            onSave(nymphenName,
                                nymphenFarbe,
                                hakenGroesse,
                                koepfchen,
                                gewaesserName,
                                tiefeStandort,
                                tiefeFischfang,
                                wasserTemperatur,
                                wetter,
                                luftdruck,
                                windgeschwindigkeit,
                                luftTemperatur)
                        }}></Button>
                        {
                            this.state.isLoading ? (
                                <View>
                                    <ActivityIndicator size='large' color='darkorange'></ActivityIndicator>
                                    <Text>Daten werden geladen . . .</Text>
                                </View>
                            ) : (
                                    <View style={styles.reload}>
                                        <Button title='Live-Daten laden' onPress={() => this.componentDidMount()}></Button>
                                    </View>
                                )
                        }
                    </View>
                </ScrollView>
            </Modal>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40
    },
    input: {
        borderWidth: 1,
        borderColor: 'deepskyblue',
        borderRadius: 4,
        width: '80%',
        marginBottom: 20,
        fontSize: 20,
        padding: 10,
        height: 50,
    },
    label: {
        fontSize: 20,
        alignSelf: 'flex-start',
        paddingLeft: 40
    },
    reload: {
        paddingTop: 40,
        paddingBottom: 40
    }
});
export class Catch {
    constructor() {
        nymphenName,
            nymphenFarbe,
            hakenGroesse,
            koepfchen,
            gewaesserName,
            tiefeStandort,
            tiefeFischfang,
            wasserTemperatur,
            wetter,
            luftdruck,
            windgeschwindigkeit,
            luftTemperatur
    }
}