// eslint-disable-next-line import/no-unresolved
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

import ErrorImage from '../../assets/images/error-image.svg?react';
import { paths } from '../../router/paths.ts';
import { DEFAULT_ERROR_MESSAGE } from '../../utils/constants.ts';

export const PageError = ({ message }: { message?: string }) => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[100vh] w-full flex-col items-center justify-center gap-4">
      <div className="m-0 flex items-center justify-center">
        <ErrorImage width={60} height={60} />
      </div>
      <p className="text-body-medium text-onErrorContainer m-0 mt-2 text-center">
        {message || DEFAULT_ERROR_MESSAGE}
      </p>
      <Button color="primary" onClick={() => navigate(paths.home.href)}>
        Back to home
      </Button>
    </div>
  );
};
