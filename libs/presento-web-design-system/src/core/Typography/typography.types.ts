export type TypographyPropsVariant = 'body' | 'header' | 'subheader';
export type TypographyPropsComponent = 'p' | 'span' | 'h1' | 'h2';
export type TypographyProps = {
  variant?: TypographyPropsVariant;
  component?: TypographyPropsComponent;
  className?: string;
};
