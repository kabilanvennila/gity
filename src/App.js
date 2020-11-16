import './App.css';
import gityimg from './gityimg.png'
import Button from '@material-ui/core/Button';
import {AppBar,Toolbar,Typography,MenuItem,Card,CardContent,CardActions,TextField,Avatar} from '@material-ui/core'
import { useState,useEffect } from 'react';


function App() {
  
  const [name,setName]=useState('')
  const [url,setUrl]=useState('https://api.github.com/users');
  const [users,setUsers]=useState([])
  const [mydata,setMydata]=useState('')


  const Gname = (e) =>
  {
    e.preventDefault();
    
    /* let val = name
    console.log(val)
    console.log(url)

    */
    
  }
  
    
  useEffect(() =>
  {
    if(url !== 'https://api.github.com/users'){
    fetcher()
    setUrl('')
    }  
  },)


  let  fetcher = async () => {
    const response = await fetch(url);
    let data= await response.json();
    let val=data
    console.log(data)
    setMydata(val);

  }


  return (
    <div className="App">
     <AppBar color="transparent" position="sticky">
      <Toolbar>
    <h3>Gity</h3>
  </Toolbar>
 
  </AppBar> 
      <h1 id="fir">Gity </h1>
      <img src={ gityimg }  alt="Welcome"  className="myimg" />
      <section className="des">
      <div className="card">
      <h5 className="card-header">How to Use ?</h5>
        <div className="card-body">
          <h4>Enter a valid Github Username <br /> and hit enter </h4>
        <form  onSubmit={Gname}>
        <TextField
            id="outlined-secondary"
            label="Github Username"
            variant="outlined"
            color="secondary"
            onChange={(e) => {setName(e.target.value);
              setUrl(`https://api.github.com/users/${e.target.value}?client_id=c734a2e186e9a934ee74&client_secret= 99017c7d7942a183d4b9350a3a53c91db9d5994f`)
            } }
        />
        </form>
      </div>
      </div>
      </section>
      <div id="helo" className="container">
      </div>

      

      <div className="prof">
      <div className="card">
        <h3 >Name : {mydata.login}</h3>
        <img className ="card-img-top" id="ka" src={mydata.avatar_url} />
        <h3 className="nam"><a href={mydata.html_url} >Github Account</a></h3>
        <h3 className="nam">Repositories : {mydata.public_repos}</h3>
        <h3 className="nam">Followers : {mydata.followers}</h3>
        <h3 className="nam">Following : {mydata.following}</h3>
        </div>
      </div>
      

    </div>
  );}  

export default App;

