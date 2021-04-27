import * as React from "react";

export interface NebulaContainerProps {
  render: object,
  styles: object
}

declare const NebulaContainer: React.FC<NebulaContainerProps>;

export type NebulaContainerType = NebulaContainerProps

export default NebulaContainer
