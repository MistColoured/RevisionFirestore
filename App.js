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
    this.listenForItems();
  };

  listenForItems = () => {
    db.collection("RevisionFirestore")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      });

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

  handleAddRevision = addRevisionText => {
    const {
      user: { uid },
      embedLevel
    } = this.state;
    const postKey = firebase
      .database()
      .ref(`users/${uid}/revisionList${embedLevel}`)
      .push().key;
    const postObject = {
      revision: addRevisionText
    };
    const revisionWrapper = {};
    revisionWrapper[postKey] = postObject;

    firebase
      .database()
      .ref(`users/${uid}/revisionList/${embedLevel}`)
      .update(revisionWrapper);
    this.setState({ showKeyboard: false });
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
    const { embedLevel } = this.state;
    this.setState(
      {
        embedLevel: embedLevel.concat("/", _key)
      },
      () => this.listenForItems()
    );
  };

  handleUpOneLevel = () => {
    const { embedLevel } = this.state;
    if (embedLevel === "") {
      return;
    }
    const re = /.*(?=\/)/;
    this.setState(
      {
        embedLevel: embedLevel.match(re)[0]
      },
      () => this.listenForItems()
    );
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
