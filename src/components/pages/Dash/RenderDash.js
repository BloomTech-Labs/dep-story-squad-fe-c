import SecureRoute from '@okta/okta-react/dist/SecureRoute';
import { ParentDash } from './components/pages/ParentDash';
import React, { useEffect, useState } from 'react';

const RenderDash = () => {
  const [current, setCurrent] = useState(null);

  useEffect(() => {}, [current]);

  const currentPage = () => {
    if (current === 'parent') {
      return <SecureRoute path="/dashboard" component={ParentDash} />;
    } else {
      return null;
    }
  };

  return <>{currentPage()}</>;
};
