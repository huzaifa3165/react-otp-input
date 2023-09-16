// Type definitions for react-otp-input 2.0
// Project: https://github.com/devfolioco/react-otp-input
// Definitions by: Anup Bhatkhande <https://github.com/anupbui>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from "react";

export interface OTPInputProps {
  value: number | string;
  onChange: (otp: number | string) => void;
  numInputs?: number;
  inputType?: string;
  renderSeparator?: React.ReactNode;
  renderInput?: (props: any) => React.ReactNode;
}

export default class extends React.Component<OTPInputProps> {}
