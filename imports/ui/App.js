import React from 'react'
import PropTypes from 'prop-types'

import PlayersList from './PlayersList'
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';

export default class App extends React.Component{
    render(){
        return(
            <div>
								<TitleBar title={this.props.title} subTitle='Created by Gerald'/>
                <div className="wrapper">									
									<PlayersList players={this.props.players} />
                	<AddPlayer/>  
								</div>
                
            </div>
        );
    }
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.array
}