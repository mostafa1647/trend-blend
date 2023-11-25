import { describe, expect, test, vitest } from 'vitest';

import { UserPreferences } from '../../types/general-types.ts';
import { localStorageKeys } from '../constants.ts';
import { getUserPreferences } from '../user-preferences.ts';

const mockPreferences: UserPreferences = {
  sources: ['abc-news', 'abc-news-au', 'aftenposten'],
  categories: ['business', 'entertainment'],
  authors: ['USA Today'],
};

describe('user preferences', () => {
  test('getUserPreferences returns user preferences when they exist in local storage', () => {
    localStorage.setItem(
      localStorageKeys.USER_PREFERENCES_LS_KEY,
      JSON.stringify(mockPreferences),
    );

    const localStorageSpy = vitest.spyOn(localStorage, 'getItem');

    localStorageSpy.mockReturnValueOnce(JSON.stringify(mockPreferences));

    const result = getUserPreferences();

    expect(result).toEqual(mockPreferences);

    localStorageSpy.mockRestore();
  });

  test('getUserPreferences returns null when preferences do not exist in local storage', () => {
    localStorage.setItem(
      localStorageKeys.USER_PREFERENCES_LS_KEY,
      JSON.stringify(null),
    );

    const localStorageSpy = vitest.spyOn(localStorage, 'getItem');

    localStorageSpy.mockReturnValueOnce(null);

    const result = getUserPreferences();

    expect(result).toBeNull();

    localStorageSpy.mockRestore();
  });

  test('getUserPreferences returns null when parsing invalid JSON', () => {
    const localStorageSpy = vitest.spyOn(localStorage, 'getItem');

    localStorageSpy.mockReturnValueOnce('invalid JSON');

    const result = getUserPreferences();

    expect(result).toBeNull();

    localStorageSpy.mockRestore();
  });
});
