'use client';

import React from 'react';
import { HuddleClient, HuddleProvider } from '@huddle01/react';

const HuddleContextProvider = ({ children }) => {
  const huddleClient = new HuddleClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID ?? '',
  });

  return <HuddleProvider client={huddleClient}>{children}</HuddleProvider>;
};
export default HuddleContextProvider;
