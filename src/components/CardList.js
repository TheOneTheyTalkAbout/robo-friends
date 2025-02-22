import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return <Card
        key={i} id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        />
    })
    return (
        <Fragment>
        <div>
            {cardComponent}
        </div>
        </Fragment>
    );
}

export default CardList