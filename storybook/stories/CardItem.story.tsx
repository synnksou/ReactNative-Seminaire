
import React from 'react';
import { storiesOf } from "@storybook/react-native";
import CardItem from '../../src/components/cardItem'
storiesOf("CardItem", module).add("default", () => (

    <CardItem 
    name={'Test Name'}
    crew={'Horde'}
    manufacturer={'By Toinou'}
    hyperdrive_rating={'100/100'}
    cost_in_credits={'1000000'}
    />
    
));

