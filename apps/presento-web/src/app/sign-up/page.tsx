import React from 'react';
import * as process from 'node:process';
import { AuthActions, AuthApi } from '@presento/presento-web-modules';

import { Breadcrumbs, SignUpForm } from '@presento/presento-web-design-system';

const CatalogPage: React.FC = async () => {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Sign Up' }]} />
      <SignUpForm
        google={{
          enabled: true,
          clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
          onSuccess: AuthActions.signUpWithGoogleToken,
        }}
      />
    </>
  );
};

export default CatalogPage;
