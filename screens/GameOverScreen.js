import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={400}
          source={require("../assets/success.png")}
          // source={{
          //   uri:
          //     "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultsContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed
          <Text style={styles.highlight}> {props.roundsNumber}</Text>
          rounds to guess the number
          <Text style={styles.highlight}>{props.roundsNumber}</Text>
        </BodyText>
      </View>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  resultsContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});
export default GameOverScreen;
