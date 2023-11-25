import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { beforeAll } from 'vitest';

beforeAll(() => {
  cleanup();
});
