export function getCoinIconUri(coinName) {
    switch (coinName) {
        case 'Bitcoin':
        case 'Ethereum':
        default:
            return 'https://i.pinimg.com/originals/73/22/69/732269033ecd731cf7bd942efe3e1280.gif'
    }
}

export function getCoinYoutubeUri(coinName) {
    switch (coinName) {
        case 'Bitcoin':
        case 'Ethereum':
        default:
            return 'https://youtu.be/YNidKztWNTk'
    }
}