import React from 'react';

const Card = ({name, email, id}) => {
  
	return (

		<div className='tc dib br5 pa3 ma3 grow bw2 shadow-4'>
		<img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
		<div>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
		</div>
	);
}

export default Card;
