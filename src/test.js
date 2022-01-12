import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("user")
  .doc("2TKRZKCuCZqYtorqPOKW")
  .collection("cartItems")
  .doc("lrVw1O2Vjk7eQ7MYsfPy");

firestore.doc("/user/2TKRZKCuCZqYtorqPOKW/cartItems/lrVw1O2Vjk7eQ7MYsfPy");
