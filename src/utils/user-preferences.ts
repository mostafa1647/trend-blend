import { UserPreferences } from '../types/general-types.ts';

import { localStorageKeys } from './constants.ts';

export const getUserPreferences = (): UserPreferences | null => {
  const userPref = localStorage.getItem(
    localStorageKeys.USER_PREFERENCES_LS_KEY,
  );

  return userPref ? JSON.parse(userPref) : null;
};
