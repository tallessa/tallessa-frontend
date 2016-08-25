const charMap = {
  ä: 'a',
  å: 'a',
  ö: 'o',
  ü: 'u',
  _: '-',
  '.': '-',
  ' ': '-',
};


export default function slugify(str) {
  return (
    str
      .toLowerCase()
      .split('')
      .map(c => charMap[c] || c)
      .join('')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
  );
}
