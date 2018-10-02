import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hasMore: true,
      item: [],
      cursor: 1
    }
  }
 componentDidMount(){
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=210faf4ab82b8d0fdd0e13dc09080003&per_page=20&page=1&format=json&nojsoncallback=1&auth_token=72157701739829544-45eff7bf0469d894&api_sig=7b06914a1520a874d134fdaf507c6991`)
    .then((response)=>{
      
      console.log(response);
      let picArray  = response.data.photos.photo.map((pic)=>{
        let srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return (
        <div class="hvrbox">
          <img alt="" src={srcPath} class="hvrbox-layer_bottom"></img>
          <div class="hvrbox-layer_top hvrbox-layer_slideright">
				    <div class="hvrbox-text">Title:  {pic.title} ||| Owner: {pic.owner}  </div>
			    </div>
      </div>
        )
      
    })
    this.setState({item : picArray})
    })
    
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
         {this.state.item}
         
        </p>
      </div>

    )
  }
}

export default App;
