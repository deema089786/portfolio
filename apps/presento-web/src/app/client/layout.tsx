import React, { PropsWithChildren } from 'react';

import { Providers } from './providers';

const ClientLayout: React.FC<PropsWithChildren> = async (props) => {
  const { children } = props;

  return <Providers>{children}</Providers>;
};

export default ClientLayout;
