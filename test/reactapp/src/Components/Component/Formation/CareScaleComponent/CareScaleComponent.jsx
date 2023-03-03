import React, { Component } from 'react';
import { StarFill, StarHalf, Star } from 'react-bootstrap-icons';
import { formations } from '../../../../datas/formations';
import './CareScaleComponent.css'

const CareScaleComponent = ({ note }) => {

    const quantityLabel = [
        <div> <Star color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> </div>,
        <div> <StarHalf color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /></div>,
        <div> <StarFill color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /></div>,
        <div> <StarFill color='#FFD60A' /> <StarHalf color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /></div>,
        <div> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> </div>,
        <div> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarHalf color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /> </div>,
        <div> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <Star color='#FFD60A' /> <Star color='#FFD60A' /></div>,
        <div> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarHalf color='#FFD60A' /> <Star color='#FFD60A' /></div>,
        <div> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <Star color='#FFD60A' /> </div>,
        <div> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarHalf color='#FFD60A' /></div>,
        <div> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> <StarFill color='#FFD60A' /> </div>
    ]

    return (
        <div>
            {quantityLabel[note]}
            

        </div>
    )
}
export default CareScaleComponent 