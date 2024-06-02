export type TypographyPropsVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption';
export type TypographyPropsComponent = 'p' | 'span' | 'h1' | 'h2' | 'h3';
export type TypographyProps = {
  variant?: TypographyPropsVariant;
  component?: TypographyPropsComponent;
  className?: string;
  gutterBottom?: boolean;
};
