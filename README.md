# Installation
> `npm install --save @types/react-otp-input`

# Summary
This package contains type definitions for react-otp-input (https://github.com/devfolioco/react-otp-input).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-otp-input.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-otp-input/index.d.ts)
````ts
// Type definitions for react-otp-input 2.0
// Project: https://github.com/devfolioco/react-otp-input
// Definitions by: Anup Bhatkhande <https://github.com/anupbui>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import * as React from 'react';

export interface OTPInputProps {
    value: number | string;
    onChange: any;
    numInputs: number;
    separator?: JSX.Element | undefined;
    isDisabled?: boolean | undefined;
    shouldAutoFocus?: boolean | undefined;
    hasErrored?: boolean | undefined;
    isInputNum?: boolean | undefined;
    containerStyle?: string | React.CSSProperties | undefined;
    inputStyle?: string | React.CSSProperties | undefined;
    focusStyle?: string | React.CSSProperties | undefined;
    disabledStyle?: string | React.CSSProperties | undefined;
    errorStyle?: string | React.CSSProperties | undefined;
}

export default class extends React.Component<OTPInputProps> { }

````

### Additional Details
 * Last updated: Thu, 08 Jul 2021 22:41:24 GMT
 * Dependencies: [@types/react](https://npmjs.com/package/@types/react)
 * Global values: none

# Credits
These definitions were written by [Anup Bhatkhande](https://github.com/anupbui).
