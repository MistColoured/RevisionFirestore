/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, ActivityIndicator, Dimensions, Text } from "react-native";
import db, { auth, provider, serverTimestamp } from "./components/firebase";
import RevisionList from "./components/RevisionList";
import RoundAddButton from "./components/RoundAddButton";
import Loader from "./components/Loader";
import Instructions from "./components/Instructions";
import Settings from "./components/Settings";
import InstructionsButton from "./components/InstructionsButton";
import SettingsButton from "./components/SettingsButton";
import GoToListButton from "./components/GoToListButton";
import MenuOptionsButton from "./components/MenuOptionsButton";

export default class App extends Component {
  state = {
    revisionList: [],
    loading: false,
    showKeyboard: false,
    showMenu: false,
    showInstructions: false,
    showSettings: false,
    text: "",
    // user: null,
    user: { uid: "2QfgNSNHwGQi1W53lYORVmn65l53" },
    error: null,
    embedLevel: "",
    activeRowKey: ""
  };

  componentDidMount = () => {
    this.loadRevisionData();
    // this.setDummyData();
  };

  loadRevisionData = (embedLevel = "") => {
    db.collection(`RevisionFirestore${embedLevel}`)
      .get()
      .then(querySnapshot => {
        const newState = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // console.log("HERE:", doc.id, " => ", doc.data().revision);
          newState.push({
            timestamp: doc.data().timestamp.seconds,
            _key: doc.id,
            revision: doc.data().revision
          });
        });
        console.log("toBeSorted...", newState);
        newState.sort((a, b) => a.timestamp - b.timestamp);
        console.log("...sorted");
        this.setState({
          embedLevel,
          revisionList: newState,
          showKeyboard: false
        });
      });
  };

  sortData = toBeSorted => {
    console.log("toBeSorted...", toBeSorted);
    toBeSorted.sort((one, two) => one.timestamp - two.timestamp);
    console.log("...sorted");
  };

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

  handleAddRevision = addRevisionText => {
    if (!addRevisionText) {
      this.setState({
        showKeyboard: false
      });
      return;
    }
    const {
      user: { uid },
      embedLevel
    } = this.state;
    db.collection(`RevisionFirestore${embedLevel}`)
      .add({
        timestamp: serverTimestamp,
        revision: addRevisionText
      })
      .then(() => this.loadRevisionData(embedLevel))
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
      showMenu: !prevState.showMenu
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

  handleDeleteRevision = id => {
    const { embedLevel } = this.state;
    console.log("Delete something", id);
    db.collection(`RevisionFirestore${embedLevel}`)
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.loadRevisionData(embedLevel);
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

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };
  renderLoading = () => {
    return <ActivityIndicator size="large" color="#0000ff" />;
  };

  handleClickRevision = _key => {
    console.log("Clicked", _key);
    const { embedLevel } = this.state;
    this.loadRevisionData(embedLevel.concat("/", _key, "/01"));
  };

  handleUpOneLevel = () => {
    const { embedLevel } = this.state;
    if (embedLevel === "") {
      return;
    }
    const re = /(.*)\/.*\/01/;
    // console.log(embedLevel.match(re)[1]);
    this.loadRevisionData(embedLevel.match(re)[1]);
  };

  render() {
    const {
      revisionList,
      embedLevel,
      loading,
      showKeyboard,
      showMenu,
      showInstructions,
      showSettings
    } = this.state;
    console.log("Render");
    return (
      <View>
        {showMenu ? (
          <MenuOptionsButton
            handleToggleMenu={this.handleToggleMenu}
            handleToggleInstructions={this.handleToggleInstructions}
            showInstructions={showInstructions}
            handleToggleSettings={this.handleToggleSettings}
            showSettings={showSettings}
          />
        ) : loading ? (
          <Loader loading={loading} />
        ) : (
          <View
            style={{
              minHeight: "100%"
            }}
          >
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
            {!showKeyboard ? (
              <RoundAddButton handleShowKeyboard={this.handleShowKeyboard} />
            ) : null}
          </View>
        )}
      </View>
    );
  }
}
