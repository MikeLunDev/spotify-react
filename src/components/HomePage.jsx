import React, { Component } from 'react'
import TopMenu from './TopMenu'
import MainAlbumContainer from './MainAlbumContainer';





/* /*  <!-- COL OF MAIN CONTENT -->
            <div class="col-6 col-sm-8 col-md-9 col-lg-9 col-xl-10 pl-4 position-relative" id="parent">
                


                <!--  -->
                <div class="main-albums-container">
                </div><!-- End of album container -->


            </div><!-- END OF MAIN CONTENT --> */






export default class HomePage extends Component {
    render() {
        return (
            <div className="col-6 col-sm-8 col-md-9 col-lg-9 col-xl-10 pl-4 position-relative" id="parent">
            <TopMenu/>
            <MainAlbumContainer/>
            </div>
        )
    }
}
