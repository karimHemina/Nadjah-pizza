import React from 'react'
import {
    FeatureContainer,
    FeaturedButton
} from './FeaturedElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
            <FeaturedButton>Order Now</FeaturedButton>
        </FeatureContainer>
    )
}

export default Feature
