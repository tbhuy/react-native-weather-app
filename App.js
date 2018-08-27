/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

type Props = {};
export default class App extends Component<Props> {
	state=
	{
		data:{
	"coord": {
		"lon": 105.78,
		"lat": 10.03
	},
	"weather": [{
		"id": 804,
		"main": "Clouds",
		"description": "overcast clouds",
		"icon": "04n"
	}],
	"base": "stations",
	"main": {
		"temp": 298.838,
		"pressure": 1023.28,
		"humidity": 91,
		"temp_min": 298.838,
		"temp_max": 298.838,
		"sea_level": 1023.43,
		"grnd_level": 1023.28
	},
	"wind": {
		"speed": 2.25,
		"deg": 246.5
	},
	"clouds": {
		"all": 88
	},
	"dt": 1532963582,
	"sys": {
		"message": 0.0072,
		"country": "VN",
		"sunrise": 1532904374,
		"sunset": 1532949617
	},
	"id": 1586203,
	"name": "Can Tho",
	"cod": 200
}
	}
	componentDidMount = () => {
      fetch('http://api.openweathermap.org/data/2.5/weather?id=1586203&appid=4233d0d336fafa04967c82834ccbcb34', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
        // alert( JSON.stringify(responseJson));
         this.setState({
            data: responseJson
         });
		 
      })
      .catch((error) => {
		 alert(error); 
         console.error(error);
      });
   }
   
  render() {
	const img= "http://openweathermap.org/img/w/"
	+this.state.data.weather[0].icon+".png"; 
    const temp=Math.round(this.state.data.main.temp - 273.15,1);
	const day=new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear()
	const time=new Date().getHours()+":"+new Date().getMinutes();
	return (
      <View style={styles.container}>
	       <Text style={styles.city}>
		 	{this.state.data.name.toUpperCase()}
		</Text>
		<Text style={styles.day}>
		 	Ngày {day} 
		</Text>
	    <Text style={styles.day}>
		 	{time}
		</Text>
				
	  <Swiper style={styles.wrapper}   showsButtons={true}>
		<View style={styles.topview}>	
	       <Image source={{uri: img}} style={styles.weatherImage}/> 		
           <Text style={styles.weather}>
		 	{this.state.data.weather[0].main} &nbsp; 
			{this.state.data.clouds.all}% 
		 </Text>
		
			
		</View>
		<View style={styles.topview}>	
	       <Image source={{uri: img}} style={styles.weatherImage}/> 		
           <Text style={styles.weather}>
		 	{this.state.data.weather[0].main} &nbsp; 
			{this.state.data.clouds.all+1}% 
		 </Text>
		</View>
			
		</Swiper>
		<View style={{alignItems: 'center'}}>
		<Image style={{width: 400, height: 96}} source = {require('./line2.png')} />
		</View>
		<View style={styles.bottomview}>
		   <Text style={styles.temp}>
		 	  {temp}&deg; 
			</Text>	
			
		   <View style={styles.bottomrightview}>
		   	 <Text style={styles.stats}>
		 	   &nbsp;
			 </Text>
			<View style={styles.bottomview}> 
			  <Image style={{width: 48, height: 48}} source = {require('./wind.png')} />
			 <Text style={styles.stats}>
		 	     &nbsp; {this.state.data.wind.speed} m/s 
			 </Text>
			</View> 
			<View style={styles.bottomview}> 
			 <Image style={{width: 48, height: 48}} source = {require('./drop.png')} />
	        <Text style={styles.stats}>
		 	    &nbsp;   {this.state.data.main.humidity}% 
			</Text>
			</View>
			<View style={styles.bottomview}> 
			 <Image style={{width: 48, height: 48}} source = {require('./press.png')} />
	        
			<Text style={styles.stats}>
		 	    &nbsp;   {this.state.data.main.pressure}hPa 
			</Text>
	      </View>
				</View>
       </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

	backgroundColor:'#808B96',


  },
  weatherImage:{
	  marginTop:10,
	  width: 200,
	  height: 200
	  
  },
  bottomrightview:
  {

	marginLeft:5,
	height:200
  },
  topview:
  {
	  flex:1,
	  alignItems: 'center',


  },
   bottomview:
  {
	  flex:1,
	  flexDirection: 'row',
	  alignItems: 'flex-start' 

  },
  city:
  { 
    margin:5,
	fontSize: 30,  
    textAlign: 'right',
	fontWeight:'bold',
	color:'#F5EEF8'

  },
  day:
  { 
    margin:5,
	fontSize: 30,  
	textAlign: 'right',
	color:'#F5EEF8'
  },
  
    weather:
  { 
   
	fontSize: 60,  
	textAlign: 'center',
	color:'#F5EEF8'
  },
  
   stats:
  { 
    marginTop:2,
	fontSize: 35,
	color:'#F5EEF8'	
	
  },
  

  temp: {
     fontSize: 200,
	 color:'#F5EEF8'


	
  },
});

