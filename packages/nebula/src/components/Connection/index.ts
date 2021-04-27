import * as React from "react";

export interface NebulaConnectionProps {
  children: object
}

declare const NebulaConnection: React.FC<NebulaConnectionProps>;

export type NebulaConnectionType = NebulaConnectionProps

export default NebulaConnection
