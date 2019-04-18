import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Header, ScrollableTab, Tab, Tabs, TabHeading, Container } from 'native-base';
import AddCardTab from './tabOne';
import AddCardNetBanking from './tabTow';

export default class TabsExample extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            currentTab: 0
        }
    }

    render() {
        return (
            <Container>
                <Tabs
                    tabBarUnderlineStyle={{ backgroundColor: '#2c2c2c' }}
                    initialPage={this.state.currentPage} onChangeTab={({ i }) => this.setState({ currentTab: i })}>
                    <Tab
                        tabStyle={{ backgroundColor: 'red' }}
                        activeTabStyle={{ backgroundColor: 'blue' }}
                        heading={
                            <TabHeading style={this.state.currentTab === 0 ? styles.activeTabStyle : styles.tabStyle}>
                                <Text style={this.state.currentTab === 0 ? styles.activeTextStyle : styles.tabTextStyle} >Card</Text>
                            </TabHeading>
                        }>
                        <AddCardTab />
                    </Tab>
                    <Tab
                        tabStyle={{ backgroundColor: 'red' }}
                        activeTabStyle={{ backgroundColor: 'blue' }}
                        heading={
                            <TabHeading style={this.state.currentTab === 1 ? styles.activeTabStyle : styles.tabStyle}>
                                <Text style={this.state.currentTab === 1 ? styles.activeTextStyle : styles.tabTextStyle} >Net Banking</Text>
                            </TabHeading>
                        }>
                        <AddCardNetBanking />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    activeTabStyle: {
        backgroundColor: 'white'
    },
    tabStyle: {
        backgroundColor: 'white'
    },
    activeTextStyle: {
        color: 'black'
    },
    tabTextStyle: {
        color: '#9D9FA2'
    },
})

