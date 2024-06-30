import React, { Fragment } from 'react';

const Card = (props) => {
    const { name, email, id } = props
    return (
        <Fragment>
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
            <img alt='robots' src={`https://robohash.org/${id}test?200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>       
        </Fragment>
    );
}

export default Card