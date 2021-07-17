import React, { Component } from "react";
import axios from 'axios'
import loader from '../../assets/loader.svg'
import "./Home.css";

export default class Home extends Component {
    static defaultProps = {
        API_KEY:process.env.REACT_APP_APIKEY,
        days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        months:["January","February","March","April","May","June","July","August","September","October","Novenmer","December"]
    }
    constructor(props){
        super(props);
        this.state = {
            city:"Paris",
            wind:"",
            sunRise:"",
            sunSet:"",
            seaLevel:"",
            minTemp:"",
            maxTemp:"",
            temp:"",
            description:"",
            cityName:"",
            loading:true,
            dayDate:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.getData=this.getData.bind(this);
        this.changeTime=this.changeTime.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            loading:true
        })
        this.getData()
    }
    handleChange(e){
        this.setState({
            city:e.target.value
        })
    }
    componentDidMount(){
        this.getData();
        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth();
        this.setState({
            dayDate:`${this.props.days[day]}, ${date.getDate()} ${this.props.months[month]}`
        })
        // console.log(this.props.days[day],)
    }
    getData(){
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${this.props.API_KEY}&units=metric`)
        .then((response) =>{
            this.setState({
                cityName:response.data.city.name,
                sunRise:response.data.city.sunrise,
                sunSet:response.data.city.sunset,
                seaLevel:response.data.list[0].main.sea_level,
                temp:(response.data.list[0].main.temp).toFixed(1),
                maxTemp:(response.data.list[0].main.temp_max).toFixed(1),
                minTemp:(response.data.list[0].main.temp_min).toFixed(1),
                wind:response.data.list[0].wind.speed,
                description:response.data.list[0].weather[0].description,
                city:"",
                loading:false
            })
            // console.log(response);
        })
        .catch(function (error) {
            alert(error);
        })
    }
    changeTime(UNIX_timestamp){
      var a = new Date(UNIX_timestamp * 1000);
      var hour = a.getHours();
      var min = a.getMinutes();
      var time = hour + ':' + min;
      return time;
    }
  render() {
    return (
      <div className="home-container">
        <form className="input-container" onSubmit={this.handleSubmit}>
          <input type="text" name="city" placeholder="Enter City Name" value={this.state.city} required onChange={this.handleChange}/>
          <button type="submit">Get Forecast</button>
        </form>
        {!this.state.loading ? 
        <div className="content-container">
        <div className="top-container">
          <p>{this.state.dayDate}</p>
          <h3>{this.state.cityName}</h3>
        </div>
        <div className="content">
          <div>
            <h1>{this.state.temp}°</h1>
          </div>
          <div className="description-box">
            <p className="description">{this.state.description}</p>
            <p className="grey">The high today will be {this.state.maxTemp}° and the low will be {this.state.minTemp}°</p>
          </div>
        </div>
        <div className="cards-container">
          <div>
              <p>Wind Speed</p>
            <i class="fas fa-wind"></i>
              <p>{this.state.wind}</p>
          </div>
          <div>
              <p>Sun Rise</p>
              <i class="fas fa-sun"></i>
              <p>{this.changeTime(this.state.sunRise)}</p>
          </div>
          <div>
              <p>Sun Set</p>
              <i class="fas fa-cloud-sun"></i>
              <p>{this.changeTime(this.state.sunSet)}</p>
          </div>
          <div>
              <p>Sea Level</p>
            <i class="fas fa-tint"></i>
              <p>{this.state.seaLevel}</p>
          </div>
        </div>
      </div> : <div className="content-container">
          <img src={loader} alt="Loading..." />
          </div>}
      </div>
    );
  }
}
