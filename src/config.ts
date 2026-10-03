export const profile = {
  name: { en: 'Masazumi Imai', ja: '今井 正純' },
  position: { en: 'Ph.D. Student', ja: '博士後期課程' },
  affiliation: {
    lab: { en: 'Space Robotics Lab', ja: '宇宙ロボット研究室' },
    university: { en: 'Tohoku University', ja: '東北大学 工学研究科 航空宇宙工学専攻' },
  },
  labUrl: 'https://astro2.mech.tohoku.ac.jp/en/',
  bio: {
    en: 'My research focuses on space robotics, specifically multi-limbed articulated systems for lunar/planetary exploration and on-orbit missions. Key areas include motion planning and control for limbed climbing robots that traverse rough terrain and assist astronauts on space stations.',
    ja: '宇宙ロボティクス，特に月惑星探査や軌道上ミッションに向けた多肢型ロボットの研究に取り組んでいます．不整地を移動する脚型クライミングロボットや，宇宙ステーション内で宇宙飛行士を支援するロボットを対象に，動作計画および制御の研究をしています．',
  },
  selfNames: ['Masazumi Imai', '今井 正純'],
  // e.g. '/cv.pdf' after placing the file in public/
  cvPdf: undefined as string | undefined,
  links: [
    { label: 'Email', href: 'mailto:imai.masazumi.p2@dc.tohoku.ac.jp', icon: 'mail' },
    { label: 'GitHub', href: 'https://github.com/MasazumiImai', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/masazumi-imai-1b403730a/', icon: 'linkedin' },
    { label: 'Google Scholar', href: 'https://scholar.google.co.jp/citations?view_op=list_works&hl=ja&user=RG3VRmkAAAAJ', icon: 'scholar' },
    { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Masazumi-Imai', icon: 'researchgate' },
  ],
};
