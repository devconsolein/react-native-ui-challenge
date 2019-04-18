/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import TabsExample from './components/Tabs'
import { Container, Header, Content, Body, CheckBox, Footer, Card } from 'native-base';


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      isChecked: true,
      hideTab: true
    }
  }

  _checkToggle = () => {
    this.setState((state) => {
      return state.isChecked ? { isChecked: false } : { isChecked: true }
    })

    this.setState((state) => {
      return state.hideTab ? { hideTab: false } : { hideTab: true }
    })
  }

  render() {
    return (
      <Container style={styles.container} >
        <Card >
          <Header transparent={true} >
            <Text style={{ color: 'black', fontWeight: '700', alignSelf: 'center' }}>CHECKOUT</Text>
          </Header>
        </Card>

        <Content >
          <Card noShadow={true}
            style={{ paddingVertical: 10 }} >
            <Body style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }} >
              <Image style={{
                width: 100,
                height: 50
              }}
                source={{ uri: "https://nssdata.s3.amazonaws.com/images/galleries/13931/HO16-BB-KobeA-D-FTW-E-hd-1600.jpg" }}
              />
              <View style={{ alignItems: 'center' }}>
                <Text style={{ marginBottom: 10, color: 'black' }}>NIKE RUNNING SHOES</Text>
                <Text style={{ color: 'black' }}>SUB TOTAL</Text>
                <Text style={{ color: '#00db83', fontWeight: '500' }} >$1402.30</Text>
              </View>
            </Body>
          </Card>
          <Text style={{ paddingVertical: 10 }} >YOUR SAVED CARDS</Text>
          <Card noShadow={true}
            style={{ paddingVertical: 10 }} >
            <Body style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }} >
              <CheckBox style={{ borderRadius: 50 }}
                color='blue'
                onPress={() => this._checkToggle()}
                checked={this.state.isChecked} />
              <Image style={{
                width: 50,
                height: 30,
              }}
                source={
                  require('../checkout/assets/visa.png')
                }
              />
              <Text >4370 43XX XXXX 9900</Text>
              <TextInput placeholder='CVV'></TextInput>
            </Body>
          </Card>
          {
            this.state.hideTab ? null :
              <View>
                <Text style={{ paddingVertical: 10 }} >OTHER PAYMENT METHODS</Text>
                <Card noShadow={true}  >
                  <TabsExample />
                </Card>
              </View>

          }
        </Content>
        {
          this.state.hideTab ? <Footer style={{ backgroundColor: null, marginBottom: '5%' }} ><TouchableHighlight><Button title='Pay Now' color='#00db83' ></Button></TouchableHighlight></Footer> :
            null
        }
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
