import React, { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: ReactElement | ReactElement[];
}

const DataProvider = ({ children }: Props) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default DataProvider;
