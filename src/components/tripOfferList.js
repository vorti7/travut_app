import React from 'react';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'
import { compose } from 'react-apollo'

import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements'
import { Api } from '../lib/api'

class TripOfferList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
      };
    }
    
    _renderItem = ({item}) => (
        <TripOfferItem
            item={item}
        />
    );


    render(){
        // console.log(this.props)
        return(
            <FlatList
                data={this.props.tripOffers}
                renderItem={this._renderItem}
            />
        )
    }
}

const TripOfferItem = () => {
    return(
        <View>
            <Text>TripOfferItem</Text>
        </View>
    )
}

export default compose(
    Api.TripOffer.queries.listTripOffersByRequestID()
)(TripOfferList)