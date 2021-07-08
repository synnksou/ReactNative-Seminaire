import React, { ReactElement } from "react";
import { NetworkProvider, NetworkConsumer } from "react-native-offline";
import Offline from "../../Offline";

interface Props {
  children: ReactElement | ReactElement[];
}

const providerOflline = ({ children }: Props) => {
  return (
    <NetworkProvider>
      <NetworkConsumer>
        {({ isConnected }) => (!isConnected ? <Offline /> : <>{ children }</>)}
      </NetworkConsumer>
    </NetworkProvider>
  );
};

export default providerOflline;
