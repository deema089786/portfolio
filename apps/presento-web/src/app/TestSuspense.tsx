import { Button } from '@presento/presento-web-design-system';

export const TestSuspense = async () => {
  const res = await new Promise<string>((resolve) =>
    setTimeout(() => resolve('DONE'), 2000),
  );
  return (
    <h1>
      Done: {res} <Button>test suspense</Button>
    </h1>
  );
};
