import React from 'react';

import { SceneV1 } from '@presento/presento-web-scenes';
import { Breadcrumbs } from '@presento/presento-web-design-system';

const ScenePage: React.FC = () => {
  return (
    <>
      <Breadcrumbs
        items={[{ label: 'Catalog', href: '/catalog' }, { label: 'Scene v1' }]}
      />
      <SceneV1 renderDisabled />
    </>
  );
};

export default ScenePage;
