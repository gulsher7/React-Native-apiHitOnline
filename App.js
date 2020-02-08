import React, { Component } from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';

export default class App extends Component{
  constructor(props)
  {
    super()
    this.state = {
      apiData: []
    }
  }
  componentDidMount()
  {
    this.callApi();
  }

  async callApi()
  {
      let resp = await fetch('http://dummy.restapiexample.com/api/v1/employees')
      let respJson = await resp.json();
      this.setState({apiData: respJson.data});
  }
  
  render(){
    const {apiData} = this.state;
    console.warn(apiData)

        return (
      <SafeAreaView>
      
      <View>
        <FlatList 
        data = {apiData}
        renderItem = {({item}) => 
            
            <Text> Id: {item.id} Employee Name:  {item.employee_name} Salary: {item.employee_salary} </Text>
            
      }
         />
      </View>


      </SafeAreaView>
    )
  }
}