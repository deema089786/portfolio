import React from 'react';

import { SCENES } from '@presento/presento-web-scenes';
import { Breadcrumbs, PageHeader } from '@presento/presento-web-design-system';

const ScenePage: React.FC<{ params: { sceneId: string } }> = (props) => {
  const { params } = props;
  const scene = SCENES.find((scene) => scene.id === params.sceneId);
  if (!scene) return 'Scene not found';

  return (
    <>
      <Breadcrumbs
        items={[{ label: 'Catalog', href: '/catalog' }, { label: 'Scene v1' }]}
      />
      <PageHeader title={scene.title} description={scene.description} />
      <scene.component renderEnabled />
    </>
  );
};

export default ScenePage;
