import React, { Component } from 'react'
import TopMenu from './TopMenu'
import MainAlbumContainer from './MainAlbumContainer';






export default class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             queryParams: []
            
        }
    }
    
    componentDidMount = ()=> {this.setState({
         queryParams: this.props.query
    })
   this.setState({
       isLoading:false
    })
    }

    render() {
        return (
            <div className="col-6 col-sm-8 col-md-9 col-lg-9 col-xl-10 pl-4 position-relative" id="parent">
            <TopMenu/>
            {this.state.queryParams.length > 0 &&
            <MainAlbumContainer query={this.state.queryParams}/>
            }
       
            </div>
        )
    }
}
