import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css'

class App extends Component {
    constructor() {
        super(); // Calls the component
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // If the component mounted onto the page.
    // No need to use arrow functions since this is part of the React library.
    componentDidMount() {
        // Go to this website -> Convert to JSON -> Update state with every object in the JSON.
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // New function when we're using the SearchBox component. Changes the state when there is new input.
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state
        // Filter the robots array to only include the search field name.
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        // Adding in a loading screen via ternary operator.
        return !robots.length ?

            // If there's no robots
            <h1>Loading</h1> :

            // If we have robots in the array.
            (
                <div className='tc'>
                    <h1 className='f1'> RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} /> {/** Send the function as a prop to the component */}
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} /> {/** Send the filtered data as a prop (pure functions) */}
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;