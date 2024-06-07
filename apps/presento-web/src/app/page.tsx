import { Suspense } from 'react';

import { SceneV1 } from '@presento/presento-web-scenes';
import { Button } from '@presento/presento-web-design-system';

import { TestSuspense } from './TestSuspense';

const Loading = () => {
  return <p>Loading</p>;
};

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <>
      <Suspense fallback={<Loading />}>
        <TestSuspense />
      </Suspense>
      <Button>Normal button</Button>
      <Button color="primary" size="large">
        Large button
      </Button>
      <Button color="secondary" size="small">
        Small button
      </Button>
      <SceneV1 />
    </>
  );
}
