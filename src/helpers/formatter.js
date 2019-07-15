function parseHeaderLinks(header) {
  if (!header) {
    return {};
  }
  const chunks = header.split(',');
  const links = {};
  chunks.forEach((part) => {
    const section = part.split(';');
    if (section.length !== 2) {
      throw new Error('wrong format of header');
    }
    const url = section[0].replace(/<(.*)>/, '$1').trim();
    const name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  });
  return links;
}

export { parseHeaderLinks };
