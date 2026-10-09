export function youtubeId(videoUrl: string | undefined): string | undefined {
  if (!videoUrl) return;
  const url = new URL(videoUrl);
  const host = url.hostname;
  const id = host === 'youtu.be'
    ? url.pathname.slice(1)
    : ['youtube.com', 'www.youtube.com', 'm.youtube.com', 'www.youtube-nocookie.com'].includes(host)
      ? url.searchParams.get('v') ?? url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)\/?$/)?.[1]
      : undefined;
  return id && /^[A-Za-z0-9_-]{11}$/.test(id) ? id : undefined;
}
