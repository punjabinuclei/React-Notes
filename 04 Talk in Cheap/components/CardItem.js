import React from 'react'




const BurgerKing = {
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fco6bt4rjqr7hztnqwxo",
    name: 'Burger King',
    location: 'Koramangala 5th Block',
    type: ['Burger', 'Fast Food', 'Beverages'],

}


const CardItem = () => {
    return (
        <div className='card-style'>
            <img src={BurgerKing.img} alt='restaurant' />
            <h1>{BurgerKing.name}</h1>
            <h3>{BurgerKing.location}</h3>
            <p>{BurgerKing.type.join(", ")}</p>
        </div>
    )
}

export default CardItem