import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import { robots } from "./robots";

class App extends Component {
    constructor() {
        super(); // Calls the component
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    // New function when we're using the SearchBox component. Changes the state when there is new input.
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }); 
    }

    render() {
        // Filter the robots array to only include the search field name.
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className='tc'>
                <h1> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} /> {/** Send the function as a prop to the component */}
                <CardList robots={filteredRobots} /> {/** Send the filtered data as a prop (pure functions) */}
            </div>
        );
    }
}

export default App;