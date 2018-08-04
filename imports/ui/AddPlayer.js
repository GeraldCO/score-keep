import React from 'react';
import {Players} from './../../imports/api/players';

export default class AddPlayer extends React.Component {
    constructor(props){
        super(props);
    }
    handleSubmit (e) {
        let playerName=e.target.playerName.value;
        e.preventDefault();
        
        if(playerName){
          e.target.playerName.value="";
          Players.insert({ 
            name: playerName,
            score: 0
          });
        }  
      }

    render(){
        return(
            <div className="item">
							<form className="form" onSubmit={this.handleSubmit}>
									<input className="form__input" type="text" name="playerName" placeholder="Player Name"/> 
									<input className="button" type="submit" value="Add Player"/>
							</form>
            </div>
        );
    }
}