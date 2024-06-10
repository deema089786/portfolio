import React, { useMemo } from 'react';
import Link from 'next/link';
import LinkMUI from '@mui/material/Link';
import BreadcrumbsMUI from '@mui/material/Breadcrumbs';

import { BreadcrumbsProps } from './breadcrumbs.types';
import { Typography } from '../../core';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { items } = props;

  const renderItems = useMemo(
    () =>
      items.map((item) => {
        if (!item.href) {
          return (
            <Typography fontWeight="bold" key={item.label} color="primary.main">
              {item.label}
            </Typography>
          );
        }

        return (
          <LinkMUI
            key={item.label}
            component={Link}
            underline="hover"
            color="inherit"
            href={item.href}
          >
            {item.label}
          </LinkMUI>
        );
      }),
    [items],
  );

  return (
    <BreadcrumbsMUI aria-label="breadcrumb">
      <LinkMUI component={Link} underline="hover" color="inherit" href="/">
        Presento
      </LinkMUI>
      {renderItems}
    </BreadcrumbsMUI>
  );
};
