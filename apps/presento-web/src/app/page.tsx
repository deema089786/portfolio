import { styled } from '@pigment-css/react';

const Button = styled('button')<{
  size?: 'large' | 'small';
  color?: 'primary' | 'secondary';
}>({
  border: 'none',
  padding: '0.75rem',
  // ...other base styles
  variants: [
    {
      props: { size: 'large' },
      style: { padding: '1rem' },
    },
    {
      props: { size: 'small' },
      style: { padding: '0.5rem' },
    },
    {
      props: { color: 'primary' },
      style: { background: 'red' },
    },
    {
      props: { color: 'secondary' },
      style: { background: 'blue' },
    },
  ],
});

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <>
      <Button>Normal button</Button>
      <Button color="primary" size="large">
        Large button
      </Button>
      <Button color="secondary" size="small">
        Small button
      </Button>
    </>
  );
}
