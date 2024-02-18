/**
 * 1. visit console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. register app (create config)
 * 4. install firebase
 * 5. add config file to you project
 * 6. DANGER: Do not publish or make firebase config to public by pushing those to github
 * 7. visit: go to Docs > Build < Authentication > Web > Get Started
 * 8. export app from the firebase.config.js file: export default app
 * 9. Login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 * 11. import googleAuthProvider and cerate a new provider
 * 12. use singInWithPopUp and pass auth and provider
 * 13. activate sing-in method (google, facebook, twitter, github etc.)
 */