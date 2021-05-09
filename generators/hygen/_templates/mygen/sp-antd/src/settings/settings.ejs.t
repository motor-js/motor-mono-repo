---
to: <%= name %>/src/settings/index.js
---

export const footer = {
  footerText: "Copyright Motor © 2021",
};

export const qlikConfig = {
  //Enter your app config here..
  host: "<%= host %>", // Qlik Sense Host
  secure:  <%= secure %>, // Whether your host is secure of not (HTTPS / HTTP)
  port:  <%= port %>, // Qlik Sense site port
  prefix:  "<%= prefix %>", // Prefix
  appId:  "<%= appId %>", // Application Id
  webIntId:  "<%= webIntId %>", // Web Integration Id, for connection to Qlik cloud
  qcs:  <%= qcs %>, // whether you are connecting to a Qlik Cloud site or not
};

export const appSettings = {
  theme: "light", // light or dark
  showThemeSwitch: true, // Show the toggle to change theme
  primaryColor: "", // Primary color for Login & Not Connected Components,

  /* For the settings below, note that the login component is only available when connecting to Qlik cloud */
  logo: "/static/media/motor-red.99524ab9.png", // Path to logo used for the Login box
  logoHeight: "40px", // Login logo height
  logoWidth: "120px", // Login logo width
  buttonColor: "#FF7171", // Button color
  buttonFontColor: "white", // Button font color
  body: "Please login to get started 🎉", // Login text
  loginfontFamily: '"NoirPro", sans-serif', //Login & Not Connected modal font
  NotConnectedheader: "Connection lost", // Not Connected header text
  NotConnectedBody: "Please refresh to continue", // Not Connected body text
};
