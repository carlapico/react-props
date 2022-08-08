import React, {useState} from 'react';

function Coffee(){
    const  [coffeeList, setCoffeeList] =useState()
    const getCoffee = (temperature) => {
        //fetch coffee API 
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
            .then(results => results.json()) //grab me the json body and returns it as a second promise
            .then(data => setCoffeeList(data)) //for now we are only console.loging the data
            .catch(err => alert(err)) //handling our errors 
        // `https://api.sampleapis.com/coffee/${temperature}`
        //take the results and dump to setCoffee List (result -> setCoffeeList)
    }
    return (
        <>
            <button onClick={() => getCoffee('hot')}>HOT</button>
            <button onClick={() => getCoffee('iced')}>ICED</button>
            <section>
                <h2>Coffee List</h2>
                {!coffeeList
                    ?<p>Loading ...</p>
                    : coffeeList.map(coffee => (
                    <p key={coffee.id}> {coffee.title} </p>
                    ))
                    }
            </section>
        </>
    )
}

export default Coffee