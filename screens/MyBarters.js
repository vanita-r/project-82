import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native';
import { ListItem } from "react-native-elements";
import firebase from 'firebase';

export default class MyBartersScreen extends React.Component{
    constructor(){
        super()
        this.state={
            data:""
        }
    }
    getAllBarters(){
        db.collection("users").doc(this.state.DocID)
        return(
            <FlatList 
                data={this.state.addBarters}
            />
        )
    }
}