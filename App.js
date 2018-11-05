/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import db, { auth, provider, serverTimestamp } from "./components/firebase";
import RevisionList from "./components/RevisionList";
import RoundAddButton from "./components/RoundAddButton";
import Loader from "./components/Loader";

export default class App extends Component {
  state = {
    revisionList: [],
    loading: false,
    showKeyboard: false,
    text: "",
    // user: null,
    user: { uid: "2QfgNSNHwGQi1W53lYORVmn65l53" },
    error: null,
    embedLevel: "",
    activeRowKey: ""
  };

  componentDidMount = () => {
    const { embedLevel } = this.state;
    this.loadRevisionData(embedLevel);
    // this.setDummyData();
  };

  loadRevisionData = embedLevel => {
    db.collection(`RevisionFirestore${embedLevel}`).onSnapshot(
      querySnapshot => {
        const newState = [];
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          console.log("HERE:", doc.id, " => ", doc.data().revision);
          newState.push({
            timestamp: doc.data().timestamp,
            _key: doc.id,
            revision: doc.data().revision
          });
        });
        this.setState({
          embedLevel,
          revisionList: newState
        });
      }
    );
    // const { user, embedLevel } = this.state;
    // const revisionRef = firebase
    //   .database()
    //   .ref(`users/${user.uid}/revisionList/${embedLevel}`);
    // this.setState({ loading: true });
    // revisionRef.on("value", snapshot => {
    //   console.log("Loading data...");
    //   const newState = [];
    //   if (snapshot.exists()) {
    //     const items = snapshot.val();
    //     Object.entries(items).forEach(([key, val]) => {
    //       newState.push({
    //         revision: val.revision,
    //         _key: key
    //       });
    //     });
    //   }
    //   this.setState({
    //     revisionList: newState,
    //     loading: false
    //   });
    //   console.log("...Data loaded");
    // });
  };

  setDummyData = () => {
    db.collection("RevisionFirestore").add({
      timestamp: serverTimestamp,
      revision: "appState"
    });
  };

  handleAddRevision = addRevisionText => {
    const {
      user: { uid },
      embedLevel
    } = this.state;
    // const postObject = {
    //   revision: addRevisionText,
    //   timestamp: serverTimestamp
    // };

    db.collection(`RevisionFirestore${embedLevel}`).add({
      timestamp: serverTimestamp,
      revision: addRevisionText
    });
    this.setState({ showKeyboard: false });
    // const revisionWrapper = {};
    // revisionWrapper[postKey] = postObject;

    // firebase
    //   .database()
    //   .ref(`users/${uid}/revisionList/${embedLevel}`)
    //   .update(revisionWrapper);
    // this.setState({ showKeyboard: false });
  };

  handleToggleKeyboard = () => {
    console.log("Toggle keyboard");
    this.setState({ showKeyboard: true });
  };

  handleDeleteRevision = id => {
    const {
      user: { uid },
      embedLevel
    } = this.state;
    const deleteRef = firebase
      .database()
      .ref(`users/${uid}/revisionList/${embedLevel}/${id}`);
    deleteRef.remove();
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
    const { revisionList, embedLevel, loading, showKeyboard } = this.state;
    console.log("Render");
    return (
      <View>
        {loading ? (
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
              embedLevel={embedLevel}
              showKeyboard={showKeyboard}
            />
            {!showKeyboard ? (
              <RoundAddButton
                handleToggleKeyboard={this.handleToggleKeyboard}
              />
            ) : null}
          </View>
        )}
      </View>
    );
  }
}
