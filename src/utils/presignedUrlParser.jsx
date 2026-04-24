export function getExpiryFromUrl(url) {
  try {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);

    const dateStr = params.get('X-Amz-Date');
    const expiresStr = params.get('X-Amz-Expires');

    if (!dateStr || !expiresStr) return null;

    const formatted = dateStr.replace(
      /(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/,
      '$1-$2-$3T$4:$5:$6Z'
    );

    const creation = new Date(formatted);
    const expires = Number(expiresStr);

    return new Date(creation.getTime() + expires * 1000);
  } catch (err) {
    console.error('Ошибка парсинга presigned URL', err);
    return null;
  }
}

export function isPresignedUrlExpired(url, bufferSec = 30) {
  const expiry = getExpiryFromUrl(url);
  if (!expiry) return true;

  const now = new Date();

  return expiry.getTime() - now.getTime() < bufferSec * 1000;
}