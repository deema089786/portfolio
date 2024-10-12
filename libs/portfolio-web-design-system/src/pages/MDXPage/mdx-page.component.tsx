import React from 'react';
import { Box, Typography } from '@mui/material';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import './mdx-page.styles.css';

import { ScreenLayout } from '../../layout';

const components: MDXRemoteProps['components'] = {
  h1: (props) => (
    <Typography variant="h3" component="h1" gutterBottom>
      {props.children}
    </Typography>
  ),
  h2: (props) => (
    <Typography variant="h4" component="h2" gutterBottom>
      {props.children}
    </Typography>
  ),
  p: (props) => <Typography gutterBottom>{props.children}</Typography>,
  li: (props) => <Typography component="li">{props.children}</Typography>,
};

type MDXPageProps = {
  content: string;
};

export const MDXPage: React.FC<MDXPageProps> = (props) => {
  const { content } = props;
  return (
    <ScreenLayout>
      <Box color="text.primary">
        <MDXRemote source={content} components={components} />
      </Box>
    </ScreenLayout>
  );
};
