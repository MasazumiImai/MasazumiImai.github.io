export const languages = ['en', 'ja'] as const;
export type Lang = (typeof languages)[number];
export type Localized = string | { en: string; ja: string };

const ui = {
  en: {
    'theme.light': 'Light mode',
    'theme.dark': 'Dark mode',
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.publications': 'Publications',
    'nav.cv': 'CV',
    'home.welcome': 'Welcome to my world!',
    'home.news': 'What\'s New',
    'home.research': 'Research Highlights',
    'home.selected': 'Selected Publications',
    'home.more': 'View all',
    'research.intro': 'My research focuses on motion planning and control for multi-limbed robots on lunar and planetary terrain, inside space stations, and on asteroids.',
    'research.related': 'Related Publications',
    'pub.journal': 'Journal Articles',
    'pub.international': 'International Conference Papers',
    'pub.domestic': 'Domestic Conference Papers',
    'pub.preprint': 'Preprints',
    'pub.equal': '* These authors contributed equally to this work.',
    'pub.presenter': '',
    'cv.education': 'Education',
    'cv.experience': 'Work Experience',
    'cv.awards': 'Awards',
    'cv.grants': 'Grants & Scholarships',
    'cv.skills': 'Skills',
    'cv.present': 'Present',
    'cv.download': 'Download CV (PDF)',
    'footer.updated': 'Last updated',
    'notfound.title': 'Page not found',
    'notfound.back': 'Back to home',
  },
  ja: {
    'theme.light': 'ライトモード',
    'theme.dark': 'ダークモード',
    'nav.home': 'ホーム',
    'nav.research': '研究',
    'nav.publications': '研究業績',
    'nav.cv': '経歴',
    'home.welcome': 'Welcome to my world!',
    'home.news': 'ニュース',
    'home.research': '研究紹介',
    'home.selected': '主な研究業績',
    'home.more': 'すべて見る',
    'research.intro': '月・惑星の地形，宇宙ステーション船内，小惑星対象に，脚型ロボットの動作計画・制御の研究をおこなっています．',
    'research.related': '関連業績',
    'pub.journal': '学術雑誌論文',
    'pub.international': '国際会議論文',
    'pub.domestic': '国内学会発表',
    'pub.preprint': 'プレプリント',
    'pub.equal': '* These authors contributed equally to this work.',
    'pub.presenter': '〇: 発表者',
    'cv.education': '学歴',
    'cv.experience': '職歴',
    'cv.awards': '受賞',
    'cv.grants': '研究助成・奨学金',
    'cv.skills': 'スキル',
    'cv.present': '現在',
    'cv.download': '履歴書をダウンロード (PDF)',
    'footer.updated': '最終更新',
    'notfound.title': 'ページが見つかりません',
    'notfound.back': 'ホームに戻る',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key];
}

export function localize(value: Localized, lang: Lang): string {
  return typeof value === 'string' ? value : value[lang];
}

export function localizePath(path: string, lang: Lang): string {
  return lang === 'en' ? path : `/ja${path}`;
}

export function switchLangPath(pathname: string, to: Lang): string {
  const base = pathname.replace(/^\/ja(?=\/|$)/, '') || '/';
  return localizePath(base, to);
}

export function formatDate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}

export function formatYearMonth(ym: string, lang: Lang): string {
  const [y, m] = ym.split('-').map(Number);
  if (lang === 'ja') return `${y}年${m}月`;
  return new Date(Date.UTC(y, m - 1)).toLocaleString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
