import React from 'react';
import { View, Text, StyleSheet, Image, Timestamp } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature, name, icon, pressure, humidity, windSped, windDeg, weatherDate }) => {
    const iconUrl = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    return (
        <View
            style={[
                styles.weatherContainer,
                { backgroundColor: '#87cefa' }
            ]}
        >
            <View style={styles.headerContainer}>
                <Image style={{ width: 160, height: 160 }} source={{ uri: iconUrl }}></Image>
                <Text style={styles.tempText}>{temperature}˚C</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.details}>Luftdruck: {pressure} hPa</Text>
                <Text style={styles.details}>Feuchtigkeit: {humidity}%</Text>
                <Text style={styles.details}>Windgeschwindigkeit: {windSped} m/sec</Text>
                <Text style={styles.details}>Windrichtung: {windDeg}</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                <Text style={styles.subtitle}>
                    {weatherConditions[weather].subtitle}
                </Text>
                <Text>Wettermessung: {weatherDate}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150
    },
    tempText: {
        fontSize: 48,
        color: 'black'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 40,
        color: 'black'
    },
    subtitle: {
        fontSize: 20,
        color: 'black'
    },
    details: {
        fontSize: 18,
        color: 'black'
    }
});

export default Weather;