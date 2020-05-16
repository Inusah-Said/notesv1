import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckIcon from 'react-native-vector-icons/Entypo';
const {width, height} = Dimensions.get('window');
export default class AddNotes extends Component {
  state = {
    title: '',
    body: '',
  };
  //  notes: {
  //         title: '',
  //         notes: '',
  //       },
  //   this.state = {
  //    someProperty: {
  //       flag:true
  //    }
  // }
  //this.setState({ someProperty: { ...this.state.someProperty, flag: false} });
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.categoryName}
          placeholder="Title"
          placeholderTextColor="#4b0082"
          enablesReturnKeyAutomatically
          autoCapitalize="sentences"
          underlineColorAndroid="#4b0082"
          value={this.state.title}
          onChangeText={(text) => {
            // this.setState({notes: {...this.state.notes, title: text}});
            this.setState({title: text});
          }}
        />
        {console.log(this.state)}
        <ScrollView style={{paddingBottom: 0.1 * height}}>
          <TextInput
            placeholder="Notes"
            placeholderTextColor="#4b0082"
            enablesReturnKeyAutomatically
            autoCapitalize="sentences"
            multiline
            value={this.state.body}
            style={styles.noteItem}
            onChangeText={(text) => {
              // this.setState({notes: {...this.state.note, notes: text}});
              this.setState({body: text});
            }}
          />
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            alert('done');
            this.props.navigation.goBack();
          }}>
          <CheckIcon
            name="check"
            size={50}
            color="#ff0bac"
            style={{
              paddingTop: 0.48 * height,
              paddingLeft: 0.8 * width,
              paddingBottom: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    padding: 10,
  },
  categoryName: {
    color: '#4b0082',
    height: 0.1 * height,
    fontSize: 30,
    lineHeight: 20,
  },
  noteItem: {
    fontSize: 25,
    lineHeight: 20,
    color: '#4b0082',
  },
});
