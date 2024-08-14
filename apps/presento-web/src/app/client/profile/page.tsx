'use client';

import React from 'react';
import { AuthActions } from '@presento/presento-web-modules/auth';
import { useRouter } from 'next/navigation';

import {
  EditProfileForm,
  Breadcrumbs,
} from '@presento/presento-web-design-system';

const ProfilePage: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Breadcrumbs items={[{ label: 'Profile' }]} />
      <EditProfileForm onUpdated={() => router.push('/')} />
      <form action={AuthActions.logout}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default ProfilePage;
