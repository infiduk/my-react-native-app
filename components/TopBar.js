import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TopBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: '#fb7c91'}}>Left</Text>
                <View>
                    <Text style={{fontSize: 20, color: '#fb3191', textAlign: 'center'}}>{this.props.title || 'TITLE'}</Text>
                    <Text style={{fontSize: 12, color: '#fb3191', textAlign: 'center', paddingTop: 2}}>{this.props.refreshDate || '-'}</Text>
                </View>
                <Text style={{color: '#fb7c91'}}>Right</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 45,
        flexDirection: 'row',
        backgroundColor: '#fedad9',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 18,
        paddingRight: 18
    }
});