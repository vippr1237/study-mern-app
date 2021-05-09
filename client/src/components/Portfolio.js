import React, { Component} from 'react';
import axios from 'axios'

class Portfolio extends Component {
    state = {
        portfolio: []
    }
    constructor(props) {
        super();
        this.getPortfolio()
    }

    getPortfolio = async () => {
        let respone = await axios.get('/api/portfolio')
        console.log(respone.data)
        this.setState({portfolio: respone.data})
    }
    render() {
        return (
            <div>
             <table class="table">
                <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Github</th>
            </tr>
            </thead>
             <tbody>
             {this.state.portfolio.map(item =>  
             <tr>
             <td>{item.name}</td>
             <td>{item.description}</td>
             <td><a href= {item.github}>{item.github}</a></td>
             </tr> 
             )}
             </tbody>
            </table>
            </div>
        )
    }
}

export default Portfolio;