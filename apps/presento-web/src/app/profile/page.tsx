import React from 'react';
import { AuthActions } from '@presento/presento-web-modules';
import { redirect } from 'next/navigation';

import { Breadcrumbs } from '@presento/presento-web-design-system';

const ProfilePage: React.FC = async () => {
  const handleLogout = async () => {
    'use server';
    await AuthActions.logout();
    redirect('/');
  };

  return (
    <>
      <Breadcrumbs items={[{ label: 'Profile' }]} />
      <form action={handleLogout}>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};

export default ProfilePage;
