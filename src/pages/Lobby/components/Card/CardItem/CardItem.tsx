import React from 'react';
import './CardItem.scss';

export interface ItemProps {
    title: string,
    count: number,
    storyPoint: true
}

const CardItem = ({ title, count, storyPoint } : ItemProps) => {
    return (
        <>
        <div className="card-item">
            <div>{title}<div className="main-card"/></div>
            <div>{count}</div>
            <div>{storyPoint}</div>
        </div>

        </>
    );
};

export default CardItem;