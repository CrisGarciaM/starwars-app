import React from 'react';
import { PageHeader } from 'antd';

const Header = (props) => {
  const { title, subtitle } = props;
  return (
    <PageHeader
      className="site-page-header"
      title={title}
      subTitle={subtitle}
    />
  );
};

export default Header;
