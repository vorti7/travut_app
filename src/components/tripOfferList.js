import React from 'react';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'
import { compose } from 'react-apollo'

import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements'
import { Api } from '../lib/api'

import TripOfferItem from './tripOfferItem'

class TripOfferList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
      };
    }
    componentDidMount(){
        // this.props.subscribeToNewTripOffers()
    }
    
    _renderItem = ({item}) => (
        <TripOfferItem
            componentId = {this.props.componentId}
            item={item}
        />
    );


    render(){
        // console.log('Trip Offer List ==================================')
        // console.log(this.props)
        return(
            <FlatList
                data={this.props.tripOffers}
                renderItem={this._renderItem}
            />
        )
    }
}

// const TripOfferItem = () => {
//     return(
//         <View>
//             <Text>TripOfferItem</Text>
//         </View>
//     )
// }

export default compose(
    Api.TripOffer.queries.listTripOffersByRequestID()
    // Api.TripOffer.subscriptions.onCreateTripOffer()
)(TripOfferList)