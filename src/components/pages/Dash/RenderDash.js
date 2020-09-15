import { ParentDash } from '../ParentDash';
import React, { useEffect, useState } from 'react';

const RenderDash = () => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {}, [current]);

  const currentPage = () => {
    if (current === 'parent') {
      return <ParentDash />;
    } else {
      return null;
    }
  };

  return <>{currentPage()}</>;
};

export default RenderDash;
