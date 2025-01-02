export class ShortnerService {
  static async shortenLink(longLink: string) {
    const response = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        url: encodeURIComponent(longLink),
      }),
    });
    return await response.json();
  }
}
