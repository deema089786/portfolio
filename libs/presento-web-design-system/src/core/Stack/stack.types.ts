import { Property } from 'csstype';

export type StackProps = {
  spacing?: number;
  direction?: Property.FlexDirection | undefined;
  align?: Property.AlignItems | undefined;
  justify?: Property.JustifyContent | undefined;
};
