import React from 'react';
import { Motor } from '@motor-js/engine'
//import { ThemeProvider } from 'styled-components'
import { ThemeProvider, defaultTheme } from '@motor-js/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Motor
      config={{
        host: "motor.eu.qlikcloud.com", // Qlik Sense Host
        secure: true, // Whether your host is secure of not (HTTPS / HTTP)
        port: null, // Qlik Sense site port
        prefix: "", // Prefix
        appId: "f3c7c25f-90da-4286-ac1d-ca9885d89605", // Application Id
        webIntId: "4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i", // Web Integration Id, for connection to Qlik cloud
        qcs: true, // whether you are connecting to a Qlik Cloud site or not 
      }}
      licenseKey="U2FsdGVkX19vjmrWbhnS5zEHEGj2PxXnorHHCxZ55lg="
    >
      <ThemeProvider theme={defaultTheme}>
        <div style={{ margin: '0.5em' }}>
          <Story />
        </div>
      </ThemeProvider>
    </Motor>
  ),
];