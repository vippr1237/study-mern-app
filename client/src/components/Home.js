import React, { Component} from 'react';
import axios from 'axios'


class About extends Component {
    state = {
        day: {}
    }
    constructor(props) {
        super();
        this.getDay(this.getDayString(new Date().getDay()))
    }
    getDayString = (n) => {
    switch (n) {
    case 0:
    return "Sunday";
    case 1:
    return "Monday";
    case 2:
    return "Tuesday";
    case 3:
    return "Wednesday";
    case 4:
    return "Thursday";
    case 5:
    return "Friday";
    case 6:
    return "Saturday";
    }
    }
    getDay = async (day) => {
        let respone = await axios.get(`/api/date/${day}`)
        this.setState({day : respone.data})
    }
    
    render() {
        
        return (
            <div>
            <h1>Hôm nay là {this.state.day.date}</h1>
            <h3>{this.state.day.quote}</h3>
            </div>
        )
    }
}

export default About;