import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import Weather from '../components/Weather';
import WindDirection from '../utils/WindDirections';
import moment from 'moment';

export default class WeatherScreen extends Component {
    state = {
        isLoading: true,
        temperature: 0,
        weatherCondition: null,
        name: null,
        error: null,
        icon: null,
        pressure: null,
        humidity: null,
        windSped: null,
        windDeg: null,
        weatherDate: null,
        date: null,
        error: false,
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: 'Error Getting Weather Conditions'
                });
            }
        );
    }

    _refresh = () => {
        this.setState({ isLoading: true });
        this.fetchWeather();
    }

    fetchWeather = async (lat = position.coords.latitude, lon = position.coords.longitude, ) => {
        try {
            const KEY = '849338767c0e95025b5559533d26b7c4';
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${KEY}&units=metric`);
            const responseJSON = await response.json();
            this.setState({
                temperature: responseJSON.main.temp,
                weatherCondition: responseJSON.weather[0].id,
                name: responseJSON.name,
                icon: responseJSON.weather[0].icon,
                pressure: responseJSON.main.pressure,
                humidity: responseJSON.main.humidity,
                windSped: responseJSON.wind.speed,
                windDeg: responseJSON.wind.deg,
                weatherDate: responseJSON.dt,
                isLoading: false
            });
        } catch (error) {
            alert('Keine Internetverbindung');
            this.setState({ isLoading: false, error: true });
        }
    }
    render() {

        return (
            <View style={styles.container}>
                {this.showDisplay()}
            </View>
        );
    }
    showDisplay() {
        if (this.state.isLoading) {
            return <ActivityIndicator size="large" color="darkorange" />;
        }
        if (!this.state.error) {
            return <Weather
                weather={this.state.weatherCondition}
                temperature={this.state.temperature}
                name={this.state.name}
                icon={this.state.icon}
                pressure={this.state.pressure}
                humidity={this.state.humidity}
                windSped={this.state.windSped}
                windDeg={WindDirection(this.state.windDeg)}
                weatherDate={TimeStamp(this.state.weatherDate)}
            />
        }
        else {
            return (
                <View style={styles.container}>
                    <Text>weatherDaten konnten leider nicht abgerufen werden</Text>
                    <Button title="Daten neu laden" onPress={() => this._refresh()}></Button>
                </View>
            )
        }
    }
}
function TimeStamp(unix) {
    var date = moment(unix * 1000)
    return (
        date.format('DD-MM-YYYY HH:mm:ss')
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
});