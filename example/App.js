/*
 * Copyright 2020 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An Example class for demonstrating the magnetic stripe reader function
 *
 * @author Phu Le
 * @date 2020-10-01
 */

import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MagneticStripeReader from 'react-native-magnetic-stripe-reader';

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            bankTrackData: {},
            bankData: {}
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red'
                }}
                      onPress={() => {
                          MagneticStripeReader.readBankCardData('%B5350290149345177^F45177=16042010000056700100?', 1, (data) => {
                              this.setState({
                                  bankTrackData: data
                              });
                              console.log(JSON.stringify(this.state.bankTrackData))
                          });
                      }}
                >
                    <Text>Track</Text>
                </TouchableOpacity>
                <Text>
                    {JSON.stringify(this.state.bankTrackData)}
                </Text>
                <TouchableOpacity style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red'
                }}
                  onPress={() => {
                      MagneticStripeReader.readBankCardData('%B5350290149345177^FATEHI/SUALEH^16042010000000000000000000000000000567001000?;5350290149345177=16042010000056700100?', 2, (data) => {
                          this.setState({
                              bankData: data
                          });
                          console.log(JSON.stringify(this.state.bankData))
                      });
                  }}
                >
                    <Text>Bank</Text>
                </TouchableOpacity>
                <Text>
                    {JSON.stringify(this.state.bankData)}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
