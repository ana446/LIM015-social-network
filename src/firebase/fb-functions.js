// SignIn With Email and Password Function
const loginEmail = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

// Register With Email and Password Function
const registerEmail = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

// SignIn With Google
const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

//Actualizar profile 
const updateProfile = (nombre) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: `${nombre}`,
    photoURL: './img/usuario.png',
  });
};

// Obtener el usuario de la sesion actual
const currentUser = () => firebase.auth().currentUser;

//Actualizar foto
//const UserPhoto = (photoURL) => firebase.auth().currentUser
//  .updateProfile({ photoURL });

// SignOut
const signOut = () => firebase.auth().signOut();

export { loginEmail, registerEmail, loginGoogle, signOut, updateProfile, currentUser};
