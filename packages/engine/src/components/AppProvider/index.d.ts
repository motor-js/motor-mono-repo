import * as React from "react";

export interface AppProviderProps {
  children: React.ReactNode
  app: String,
}

declare const AppProvider: React.FC<AppProviderProps>;

export type AppProviderType = AppProviderProps

export default AppProvider
