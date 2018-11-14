/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import db, { auth, provider, serverTimestamp } from "./database/firebase";
import Container from "./components/Container";
import RevisionList from "./components/RevisionList";
import RoundAddButton from "./buttons/RoundAddButton";
import SplashScreen from "./screens/SplashScreen";
import MenuOptions from "./buttons/MenuOptions";
import dataIO from "./database/loadRevisionData";

type State = {
  embedLevel: string,
  revisionList: Array<string>,
  showKeyboard: boolean,
  splashScreen: boolean,
  showPlusButton: boolean,
  showMenu: boolean,
  showPlusButton: boolean,
  showInstructions: boolean,
  showSettings: boolean
};

export default class App extends Component<null, State> {
  state = {
    revisionList: [],
    splashScreen: true,
    showKeyboard: false,
    showPlusButton: false,
    showMenu: false,
    showInstructions: false,
    showSettings: false,
    text: "",
    // user: null,
    user: { uid: "2QfgNSNHwGQi1W53lYORVmn65l53" },
    error: null,
    embedLevel: "",
    activeRowKey: "",
    user: ""
  };

  componentDidMount = () => {
    const { embedLevel } = this.state;
    this.loadData(embedLevel);
    // this.setDummyData();
  };

  loadData(embedLevel: string = "") {
    dataIO
      .loadRevisionData(embedLevel)
      .then(newState => {
        console.log("Data loaded");
        this.setState({
          embedLevel,
          revisionList: newState,
          showKeyboard: false,
          splashScreen: false,
          showPlusButton: true
        });
      })
      .catch(() => this.setState({ splashScreen: false }));
  }

  setDummyData = () => {
    db.collection("RevisionFirestoreNext")
      .add({
        timestamp: serverTimestamp,
        revision: "banana"
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  handleAddRevision = (addRevisionText: string) => {
    console.log("Add a new item");
    if (!addRevisionText) {
      this.setState({
        showKeyboard: false
      });
      return;
    }
    const { embedLevel } = this.state;
    dataIO
      .addDoc(embedLevel, addRevisionText)
      .then(() => this.loadData(embedLevel))
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  handleShowKeyboard = () => {
    console.log("Toggle keyboard");
    this.setState({ showKeyboard: true });
  };

  handleToggleMenu = () => {
    console.log("Toggle menu");
    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
      showPlusButton: !prevState.showPlusButton
    }));
  };

  handleToggleInstructions = () => {
    console.log("Toggle instructions");
    this.setState(prevState => ({
      showInstructions: !prevState.showInstructions
    }));
  };

  handleToggleSettings = () => {
    console.log("Toggle settings");
    this.setState(prevState => ({
      showSettings: !prevState.showSettings
    }));
  };

  handleDeleteRevision = (id: string) => {
    const { embedLevel } = this.state;
    console.log("Delete something", id);
    dataIO
      .deleteDoc(embedLevel, id)
      .then(() => {
        console.log("Document successfully deleted!");
        this.loadData(embedLevel);
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: "100%",
          backgroundColor: "#fff"
          // marginLeft: "14%"
        }}
      />
    );
  };

  renderLoading = () => {
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  handleClickRevision = (_key: string) => {
    console.log("Clicked", _key);
    const { embedLevel } = this.state;
    this.loadData(embedLevel.concat("/", _key, "/01"));
  };

  handleUpOneLevel = () => {
    const { embedLevel } = this.state;
    if (embedLevel === "") {
      return;
    }
    const re = /(.*)\/.*\/01/;
    // $FlowFixMe
    this.loadData(embedLevel.match(re)[1]);
  };

  render() {
    const {
      revisionList,
      embedLevel,
      splashScreen,
      showKeyboard,
      showPlusButton,
      showMenu,
      showInstructions,
      showSettings
    } = this.state;
    console.log("Render");
    return (
      <Container>
        <KeyboardAvoidingView behavior="padding">
          {splashScreen ? (
            <SplashScreen />
          ) : showMenu ? (
            <MenuOptions
              handleToggleMenu={this.handleToggleMenu}
              handleToggleInstructions={this.handleToggleInstructions}
              showInstructions={showInstructions}
              handleToggleSettings={this.handleToggleSettings}
              showSettings={showSettings}
            />
          ) : (
            <RevisionList
              revisionList={revisionList}
              handleUpOneLevelButton={this.handleUpOneLevel}
              handleClickRevision={this.handleClickRevision}
              handleDeleteRevision={this.handleDeleteRevision}
              handleAddRevision={this.handleAddRevision}
              handleToggleMenu={this.handleToggleMenu}
              embedLevel={embedLevel}
              showKeyboard={showKeyboard}
            />
          )}
          {showPlusButton ? (
            <RoundAddButton handleShowKeyboard={this.handleShowKeyboard} />
          ) : null}
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
