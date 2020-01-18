import React, { Component } from 'react'
import Item from '../../components/Item/Item'

class Items extends Component {

    state = {
        items: null
    }


    componentDidMount() {
        fetch("../../data/data.json")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            this.setState({
                items: data
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container">
                <Item items={this.state.items} />
            </div>
        )
    }
}

export default Items