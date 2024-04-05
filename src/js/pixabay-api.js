export function getImages(query) {
const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const searchParams = new URLSearchParams({
        key:'43176233-1ec673b2575ffa542635b4c36',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
});
    const url = `${BASE_URL}${END_POINT}?${searchParams}`;
    const options = {
        'Content-Type': 'application/json',
    }

return fetch(url, options).then(res => res.json())
}

