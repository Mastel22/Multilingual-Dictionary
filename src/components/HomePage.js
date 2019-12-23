import React from 'react';
import { connect } from 'react-redux';
import { getDefinition, getTranslation  } from '../redux/actions/actions';
import Display from './Display';
import store from '../redux/store';


class HomePage extends React.Component{
    
    render(){
        return(
            <div className= "container">
                <div className="languages">
                    <button type="submit" onClick={this.changeLanguage}  value="es">SPANISH</button>
                    <button type="submit" onClick={this.changeLanguage}  value="fr">FRENCH</button>
                    <button type="submit" onClick={this.changeLanguage}  value="pt">PORTIGUESE</button>
                </div>
                <div className="HomePage">
                <input id="text" type="text" placeholder="Search.." name="search"/>
                <button type="submit" onClick={this.searchHandler}>Search</button>
                </div>
                <Display className="display" definition={this.props.definition}/>
            </div>
            
        )
    }

    searchHandler(e) {
        e.preventDefault();
        getDefinition(document.getElementById(`text`).value)
    }
  
    changeLanguage(e) {
        const definition = store.getState().searchedState.definition
        getTranslation(e.target.value, definition)
        console.log(store.getState().searchedState.definition);
        
    }

}

const mapToProps = (store) => {
    
    return{
        definition: store.searchedState.definition
    }
    
}

export default connect(mapToProps)(HomePage)