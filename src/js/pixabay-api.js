import axios from 'axios';
export async function getImages(query, page) {
const BASE_URL = 'https://pixabay.com';
const END_POINT = '/api/';
const searchParams = new URLSearchParams({
    key:'43176233-1ec673b2575ffa542635b4c36',
    q: `${query}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: `${page}`,
    per_page: 15   
});
    const url = `${BASE_URL}${END_POINT}?${searchParams}`;
    const res = await axios.get(url)
    return res.data
}
