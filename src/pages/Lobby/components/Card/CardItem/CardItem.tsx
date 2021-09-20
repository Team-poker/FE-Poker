import React from 'react';

export interface ItemProps {
    title: string,
    count: number,
    storyPoint: true
}

const CardItem = ({ title, count, storyPoint } : ItemProps) => {
    return (
        <div>

        </div>
    );
};

export default CardItem;