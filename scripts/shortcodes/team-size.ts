import type { ShortcodeHandler } from './types.ts';

// Hugo `team-size` shortcode renders the current team headcount from a
// data source we don't carry locally. Emit a static placeholder that
// reads naturally inside the surrounding sentence ("65カ国以上に
// 2,000+ 人のチームメンバー..."). Update by hand if you need a fresh
// number.
export const teamSize: ShortcodeHandler = () => {
  return '2,000+';
};
