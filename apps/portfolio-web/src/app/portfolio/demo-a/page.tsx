import { MDXPage } from '@portfolio-web-design-system';

export default async function DemoAPage() {
  const res = await fetch(
    'https://raw.githubusercontent.com/deema089786/demo-A/refs/heads/main/README.md',
  );
  const markdown: string = await res.text();

  return (
    <MDXPage
      content={markdown
        .replaceAll('style', 'styles')
        .replaceAll(
          'readme-assets',
          'https://raw.githubusercontent.com/deema089786/demo-A/refs/heads/main/readme-assets',
        )}
    />
  );
}
