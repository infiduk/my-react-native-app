import * as React from 'react';
import { WebView } from 'react-native-webview';
import { getCoinYoutubeUri } from '../libs/Constants.js';

export default class Youtube extends React.Component {
    render() {
        const title = this.props.navigation.getParam('title', '');
        const uri = getCoinYoutubeUri(title);

        return (
            <WebView
                source={{uri: uri}}
                style={{backgroundColor: '#fef0ef'}}
            />
        )
    }
}