import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    // Try-Catch Life Cycle Hook - If it catches an error
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops. That is not good</h1>
        }
        return this.props.children // Render the children (Whatever is inside ErrorBoundary).
    }


}

export default ErrorBoundary;