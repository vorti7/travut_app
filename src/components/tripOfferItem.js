import React from 'react';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'
import { compose } from 'react-apollo'

import { View, FlatList } from 'react-native';
import { Text } from 'react-native-elements'
import { Api } from '../lib/api'

class TripOfferItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <View>
                
            </View>
        )
    }
}

export default compose(
    // Api.Provider.queries.getProvider()
)(TripOfferItem)