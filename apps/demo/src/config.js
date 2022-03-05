export const qlikConfig = {
  host: "sense-motor.adviseinc.co.uk",
  secure: true,
  port: 19077,
  prefix: "",
  appId: "4359f6e1-0df6-43f8-bcd2-9aa13616f53b",
  redirectFileName: "auth.html",
  qsServerType: "onPrem",
  global: false
};

export const qlikApp2 = {
  host: "sense-motor.adviseinc.co.uk",
  secure: true,
  port: 19077,
  prefix: "",
  appId: "4359f6e1-0df6-43f8-bcd2-9aa13616f53b",
  redirectFileName: "auth4.html",
  qsServerType: "onPrem"
};

export const qlikAppProxy = {
  host: "sense-motor.adviseinc.co.uk",
  secure: true,
  prefix: "motor",
  appId: "4359f6e1-0df6-43f8-bcd2-9aa13616f53b",
  redirectFileName: "auth4.html",
  qsServerType: "onPrem"
};


export const globalConfig = {
  host: "sense-motor.adviseinc.co.uk",
  secure: true,
  port: 19077,
  prefix: "",
  appId: "4359f6e1-0df6-43f8-bcd2-9aa13616f53b",
  redirectFileName: "auth.html",
  qsServerType: "onPrem",
  global: true
};

export const globalSAASConfig = {
  host: "motor.eu.qlikcloud.com", // Qlik Sense Host
  secure: true, // Whether your host is secure of not (HTTPS / HTTP)
  port: null, // Qlik Sense site port
  prefix: "", // Prefix
  appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605", // Application Id
  webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
  qcs: true, // whether you are connecting to a Qlik Cloud site or not
  global: true
};


export const qlikSAASConfig = {
  host: "motor.eu.qlikcloud.com", // Qlik Sense Host
  secure: true, // Whether your host is secure of not (HTTPS / HTTP)
  port: null, // Qlik Sense site port
  prefix: "", // Prefix
  appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605", // Application Id
  webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
  //qcs: true, // whether you are connecting to a Qlik Cloud site or not
  qsServerType: "cloud",
};

export const qlikSAASConfig2 = {
  host: "motor.eu.qlikcloud.com", // Qlik Sense Host
  secure: true, // Whether your host is secure of not (HTTPS / HTTP)
  port: null, // Qlik Sense site port
  prefix: "", // Prefix
  appId: "c4b779cc-7433-434c-a029-f6617d874cc3", // Application Id
  webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
  qcs: true, // whether you are connecting to a Qlik Cloud site or not
};
