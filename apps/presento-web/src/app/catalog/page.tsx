import React from 'react';

import { Breadcrumbs, SceneList } from '@presento/presento-web-design-system';
import { SCENES } from '@presento/presento-web-scenes';

const CatalogPage: React.FC = () => {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Catalog' }]} />
      <SceneList
        scenes={SCENES.map((scene) => ({
          id: scene.id,
          imageSrc: scene.previewImageSrc,
          title: scene.title,
          description: scene.description,
          tags: scene.tags,
        }))}
      />
    </>
  );
};

export default CatalogPage;
