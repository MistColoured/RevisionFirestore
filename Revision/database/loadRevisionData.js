import db, { auth, provider, serverTimestamp } from "./firebase";

export default (dataIO = {
  async loadRevisionData(embedLevel = "") {
    const newState = [];
    await db
      .collection(`RevisionFirestore${embedLevel}`)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // console.log("HERE:", doc.id, " => ", doc.data().revision);
          newState.push({
            timestamp: doc.data().timestamp.seconds,
            _key: doc.id,
            revision: doc.data().revision
          });
        });
      });
    newState.sort((a, b) => a.timestamp - b.timestamp);
    return newState;
  },
  async deleteDoc(embedLevel = "", id) {
    db.collection(`RevisionFirestore${embedLevel}`)
      .doc(id)
      .delete();
  },
  async addDoc(embedLevel = "", addRevisionText) {
    await db.collection(`RevisionFirestore${embedLevel}`).add({
      timestamp: serverTimestamp,
      revision: addRevisionText
    });
  }
});
