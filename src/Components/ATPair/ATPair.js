import React from 'react';
import './ATPair.css';
import {AlbumBlock} from '../AlbumBlock/AlbumBlock';
import {TrackList } from '../TrackList/TrackList';

export const ATPair = (props) => {
    return (
        <>
            <AlbumBlock query={props.query}/>
            <TrackList name={props.query.name}/>
        </>
    )
}