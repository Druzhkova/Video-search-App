export const getVideoIdFromUrl = (urlStr) => {
  const url = new URL(urlStr);

  if (url.host === 'www.youtube.com') {
    return url.searchParams.get('v');
  }

  if (url.host === 'youtu.be') {
    return url.pathname.replace('/', '');
  }

  throw new TypeError('Incorrect YouTube video url');
};
