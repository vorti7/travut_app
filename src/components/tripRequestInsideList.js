import React from 'react';
import AuthClass from '../lib/auth'
import {Navigator, ScreenConst} from '../navigation'
import { compose } from 'react-apollo'

import { View, SectionList } from 'react-native';
import { Text } from 'react-native-elements'
import { Api } from '../lib/api'

import TripOfferItem from './tripOfferItem'

class TripRequestInsideList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render(){
        console.log(this.props)
        return(
            <SectionList
                renderItem={({item, index, section}) => <TripOfferItem componentId = {this.props.componentId} item={item}/>}
                sections={[
                    {title: 'Section1', data: this.props.tripOffers},
                    // {title: 'Section2', data: ['dsagas', 'fgdsagsadg']}
                ]}
            />
        )
    }
}


export default compose(
    Api.TripOffer.queries.listTripOffersByRequestID()
)(TripRequestInsideList)