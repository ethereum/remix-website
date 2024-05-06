import { ReactComponent as SunIcon } from './assets/images/sun.svg';
import { ReactComponent as MoonIcon } from './assets/images/moon.svg';
import { ReactComponent as ClassicIcon } from './assets/images/classic.svg';

import enJson from './locales/en'
import zhJson from './locales/zh'

export const sectionId = {
  about: "about",
  start: "start",
  plugins: "plugins",
  libraries: "libraries",
  events: "events",
  rewards: "rewards",
  team: "team"
}

// export const REMIX_HOME_URL = "https://remix-project.org"; // TODO: Revert for production
export const REMIX_HOME_URL = "/#";
// export const REMIX_DOCS_URL = "https://remix-ide.readthedocs.io" // TODO: Revert for production
export const REMIX_DOCS_URL = "https://remix-ide-dev.readthedocs.io"
export const REMIX_IDE_URL = "https://remix.ethereum.org";
export const LEARNETH_PLUGIN_TUTORIALS_URL = `${REMIX_IDE_URL}/?#activate=LearnEth`;

// Color mode constants
export const LS_COLOR_SCHEME = "color-scheme";
export const HTML_COLOR_SCHEME = "--" + LS_COLOR_SCHEME
export const COLOR_PARAM = "color"
export const COLOR_MODES = [
  { name: "Light", icon: SunIcon, value: "light" },
  { name: "Classic", icon: ClassicIcon, value: "classic" },
  { name: "Dark", icon: MoonIcon, value: "dark" },
]
export const COLOR_CHOICES = COLOR_MODES.map(({ value }) => value);


/**
 * INTERNATIONALIZATION
*/
export const LS_LANG_PREF = "lang-preference"
export const LANG_PARAM = "lang"
export const LOCALES = [
  { code: 'en', name: 'English', localeName: 'English', messages: enJson },
  { code: 'zh', name: 'Chinese Simplified', localeName: '简体中文', messages: zhJson },
]
export const LOCALE_CHOICES = LOCALES.map(({ code }) => code)
export const DEFAULT_LOCALE = LOCALES[0]
