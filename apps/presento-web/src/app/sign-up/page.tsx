import React from 'react';
import * as process from 'node:process';
import { AuthActions } from '@presento/presento-web-modules/auth';
import { redirect } from 'next/navigation';

import { Breadcrumbs, SignUpForm } from '@presento/presento-web-design-system';

const CatalogPage: React.FC = async () => {
  const handleSignUpByGoogle = async (params: { token: string }) => {
    'use server';
    await AuthActions.signUpWithGoogleToken({ token: params.token });
    redirect('/');
  };

  return (
    <>
      <Breadcrumbs items={[{ label: 'Sign Up' }]} />
      <SignUpForm
        google={{
          enabled: true,
          clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '',
          onSuccess: handleSignUpByGoogle,
        }}
      />
    </>
  );
};

export default CatalogPage;
