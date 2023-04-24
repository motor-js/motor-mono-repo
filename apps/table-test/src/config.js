/*
export const qlikConfig={
  host: "motor.eu.qlikcloud.com",
  secure: true,
  port: null,
  prefix: "",
  appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605",
  webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
  qcs: true,
}
*/

/*
export const qlikConfig={
  host: "motor.eu.qlikcloud.com",
  secure: true,
  port: null,
  prefix: "",
  appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605",
  webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i",
  qcs: true,
}
*/

export const qlikConfig = {
  host,
  secure: true,
  port: 4243,
  prefix: "motor-ticket",
  appId,
  redirectFileName: "auth4.html",
  qsServerType: "onPrem",
  authType: "ticket",
  global: false,
};
