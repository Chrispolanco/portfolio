import React, {Component} from 'react'; 
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';

import profile1 from '../assets/profile1.jpeg'

class App extends Component{

    state = { displayBio: false}; 

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio }); 
    }

    render(){
        return(
            <div>
                <img src= {profile1} alt = 'profile picture' className='profile'/> 
                <h1>Welcome to world of tomorrow</h1>
                <p>My name is Chris.</p>
                <Title/> 
                <p>I'm alwawys looking forward to working on meangingful projects.</p> 
                {this.state.displayBio ? (                
                        <div>
                            <p>I live in Los Angeles, and code pretty much everyday.</p>
                            <p>My favorite language is between Javascript and Java.</p>
                            <p>Beisides coding, I love sushi.</p>
                            <button onClick = {this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick = {this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App; 