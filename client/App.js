import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import axios from 'axios'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: 'Hit the button'
    };

    mostCommonWords = [
      'the',
      'at',
      'there',
      'some',
      'my',
      'of',
      'be',
      'use',
      'her',
      'than',
      'and',
      'this',
      'an',
      'would',
      'first',
      'a',
      'have',
      'each',
      'make',
      'water',
      'to',
      'from',
      'which',
      'like',
      'been',
      'in',
      'or',
      'she',
      'him',
      'call',
      'is',
      'one',
      'do',
      'into',
      'who',
      'you',
      'had',
      'how',
      'time',
      'oil',
      'that',
      'by',
      'their',
      'has',
      'its',
      'it',
      'word',
      'if',
      'look',
      'now',
      'he',
      'but',
      'will',
      'two',
      'find',
      'was',
      'not',
      'up',
      'more',
      'long',
      'for',
      'what',
      'other',
      'write',
      'down',
      'on',
      'all',
      'about',
      'go',
      'day',
      'are',
      'were',
      'out',
      'see',
      'did',
      'as',
      'we',
      'many',
      'number',
      'get',
      'with',
      'when',
      'then',
      'no',
      'come',
      'his',
      'your',
      'them',
      'way',
      'made',
      'they',
      'can',
      'these',
      'could',
      'may',
      'I',
      'said',
      'so',
      'people',
      'part'
    ]

    changeCurrentWord = () => {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      let numberOfWords = mostCommonWords.length
      let randomNumber = getRandomInt(numberOfWords);
      let word = mostCommonWords[randomNumber];

      this.setState({currentWord: word});
      console.log(word + ' set as the new word.');

      return axios.post('http://10.0.0.30:4000/api/words', {word})
    };
  }

  render() {
    let currentWord = this.state.currentWord
    return (
      <View style={styles.container}>
        <Text style={styles.currentWord}>{currentWord}</Text>
        <Button onPress={changeCurrentWord} title="Get a new word" color="#841584"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  currentWord: {
    fontSize: 30
  }
});