import HashLoader from 'react-spinners/HashLoader';

import { css } from '@emotion/react';

const override = css`
  left: 50%;
`;

const LoadingIndicator = () => <HashLoader color='#36D7B7' css={override} />;

export default LoadingIndicator;
