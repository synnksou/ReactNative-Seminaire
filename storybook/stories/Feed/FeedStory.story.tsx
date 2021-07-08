import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import FeedScreen  from "../../../src/screens/FeedScreen";

import { storiesOf } from '@storybook/react-native';
const queryClient = new QueryClient();

storiesOf('FeedScreen', module).add('default', () => (

<QueryClientProvider  client={queryClient}>
    <FeedScreen/>
</QueryClientProvider>

  
));