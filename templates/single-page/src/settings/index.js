
export const footer = {
  footerText: "Copyright Motor © 2021",
};

/*
export const qlikConfig = {
  //Enter your app config here..
  host: "localhost", // Qlik Sense Host
  secure: false, // Whether your host is secure of not (HTTPS / HTTP)
  port: 19076, // Qlik Sense site port
  prefix: "", // Prefix
  appId: "Wearables2", // Application Id
};
*/

export const qlikConfig = {
  //Enter your app config here..
  host: "motor-demo.com", // Qlik Sense Host
  secure: true, // Whether your host is secure of not (HTTPS / HTTP)
  port: 443, // Qlik Sense site port
  prefix: "", // Prefix
  appId: "Wearables2", // Application Id
};


/*
export const qlikConfig = {
  //Enter your app config here..
  host: "juno-ui.eu.qlikcloud.com", // Qlik Sense Host
  secure: true, // Whether your host is secure of not (HTTPS / HTTP)
  port: null, // Qlik Sense site port
  prefix: "", // Prefix
  appId: "0294cf88-eb02-484a-b315-cf06b45ac347", // Application Id
  webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
  qcs: true, // whether you are connecting to a Qlik Cloud site or not
};
*/

export const appSettings = {
  theme: "light", // light or dark
  showThemeSwitch: true, // Show the toggle to change theme
  primaryColor: '', // Primary color for Login & Not Connected Components,
  
  /* For the settings below, note that the login component is only available when connecting to Qlik cloud */
  
  logo: "/static/media/motor-red.99524ab9.png", // Path to logo used for the Login box
  logoHeight: "40px", // Login logo height
  logoWidth: "120px", // Login logo width
  buttonColor: '#FF7171', // Button color
  buttonFontColor: 'white', // Button font color
  body: "Please login to get started 🎉", // Login text
  loginfontFamily: '"NoirPro", sans-serif', //Login & Not Connected modal font
  NotConnectedheader: "Connection lost", // Not Connected header text
  NotConnectedBody: "Please refresh to continue", // Not Connected body text 
};
