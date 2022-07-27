import React from "react";
import Card from './Card';


// Destructured the robots array
const CardList = ({ robots }) => {

    // Used to test the ErrorBoundary Component.
    // if (true) {
    //     throw new Error('Error has occured.');
    // }

    // Used map to return multiuple components
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;