import { InjectionToken } from '@angular/core';

import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_NO_NAME, LANG_NO_TRANS } from './lang-no';

export const TRANSLATIONS = new InjectionToken('translations');

export const DICTIONARY = {
  'LANG_EN_NAME': LANG_EN_TRANS,
  'LANG_NO_NAME': LANG_NO_TRANS
};

export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: DICTIONARY },
];
