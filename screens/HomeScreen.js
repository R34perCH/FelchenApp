import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, FlatList, AsyncStorage, ActivityIndicator } from 'react-native';
import HomeListItem from '../components/HomeListItem';
import Firebase from '../js/Firebase';
import NewCatch from '../components/newCatch';
import moment from 'moment';


export default class HomeScreen extends Component {

    componentDidMount() {
        Firebase.init();
        this._retrieveData();
    }

    state = { showNewCatchScreen: false, catches: [], isLoading: true };

    _retrieveData = async () => {
        try {
            let catches = [];
            let query = await Firebase.db.collection('catches').get();
            query.forEach(element => {
                catches.push({
                    id: element.id,
                    nymphenName: element.data().nymphenName,
                    nymphenFarbe: element.data().nymphenFarbe,
                    hakenGroesse: element.data().hakenGroesse,
                    koepfchen: element.data().koepfchen,
                    gewaesserName: element.data().gewaesserName,
                    tiefeStandort: element.data().tiefeStandort,
                    tiefeFischfang: element.data().tiefeFischfang,
                    wasserTemperatur: element.data().wasserTemperatur,
                    wetter: element.data().wetter,
                    luftdruck: element.data().luftdruck,
                    windgeschwindigkeit: element.data().windgeschwindigkeit,
                    luftTemperatur: element.data().luftTemperatur,
                    fangDatum: TimeStamp(element.data().fangDatum)
                });
            });
            this.setState({ catches, isLoading: false });
        } catch (error) {
            alert('Keine Internetverbindung');
            this.setState({ isLoading: false });
        }
    }

    _saveCatchToDB = async (nymphenName, nymphenFarbe, hakenGroesse, koepfchen, gewaesserName, tiefeStandort, tiefeFischfang, wasserTemperatur, wetter, luftdruck, windgeschwindigkeit, luftTemperatur, catches) => {
        const date = new Date();
        docRef = await Firebase.db.collection('catches').add({ nymphenName, nymphenFarbe, hakenGroesse, koepfchen, gewaesserName, tiefeStandort, tiefeFischfang, wasserTemperatur, wetter, luftdruck, windgeschwindigkeit, luftTemperatur, fangDatum: date });
        catches[catches.length - 1].id = docRef.id;
    }

    _removeCatchFromDB(id) {
        Firebase.db.collection('catches').doc(id).delete();
    }

    _storeData(catches) {
        AsyncStorage.setItem('CATCHES', JSON.stringify(catches));
    }

    _refresh = () => {
        this.setState({ isLoading: true });
        this._retrieveData();
    }

    _addCatch = (nymphenName, nymphenFarbe, hakenGroesse, koepfchen, gewaesserName, tiefeStandort, tiefeFischfang, wasserTemperatur, wetter, luftdruck, windgeschwindigkeit, luftTemperatur) => {
        let { catches } = this.state;
        if (nymphenName) {
            catches.push({ nymphenName, nymphenFarbe, hakenGroesse, koepfchen, gewaesserName, tiefeStandort, tiefeFischfang, wasserTemperatur, wetter, luftdruck, windgeschwindigkeit, luftTemperatur });
            this._saveCatchToDB(nymphenName, nymphenFarbe, hakenGroesse, koepfchen, gewaesserName, tiefeStandort, tiefeFischfang, wasserTemperatur, wetter, luftdruck, windgeschwindigkeit, luftTemperatur, catches);
        }
        this.setState({ showNewCatchScreen: false, catches: catches });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={style.container}>
                    <ActivityIndicator size='large' color='darkorange' />
                </View>
            )
        }
        let { catches } = this.state;
        return (
            <View style={style.container}>
                <View style={style.newButton}>
                    <Button title="Fang hinzufügen" onPress={() => this.setState({ showNewCatchScreen: true })}></Button>
                </View>
                <NewCatch visible={this.state.showNewCatchScreen}
                    onSave={this._addCatch}
                ></NewCatch>
                {
                    catches.length <= 0 ? (
                        <Text style={style.noData}>Keine Daten gespeichert</Text>
                    ) : (
                            <FlatList
                                data={catches}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <HomeListItem fang={item} onPress={() =>
                                        this.props.navigation.navigate('Detail', { fang: item })}>

                                    </HomeListItem>
                                )}
                                onRefresh={() => this._refresh()}
                                refreshing={this.state.isLoading}
                                ItemSeparatorComponent={() => <View style={style.listSeperator} />}
                            >
                            </FlatList>
                        )
                }

            </View>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingTop: 40
    },
    listSeperator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'lightsalmon',
        marginVertical: 5
    },
    newButton: {
        position: 'absolute',
        right: 0,
        top: 10,
    },
    noData: {
        fontSize: 28,
        alignSelf: 'center'
    }

})

function TimeStamp(unix) {
    console.log(unix.seconds);
    var date = moment(unix.seconds * 1000)
    return (
        date.format('DD-MM-YYYY HH:mm')
    );
}