import * as React from "react";
import {
  configType,
  sizeType
} from '../../../utils'

export interface QSELoginProps {
  config?: configType
  header: React.ReactNode
  body: React.ReactNode
  size: sizeType
  buttonText: string
  backgroundColor: string
  buttonFontColor: string
  buttonColor: string
}

declare const QSELogin: React.FC<QSELoginProps>;

export type QSELoginType = QSELoginProps

export default QSELogin
