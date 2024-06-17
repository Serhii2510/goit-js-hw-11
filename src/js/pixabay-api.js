export function getImages(searchRequest) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '44423384-360ba42c67bb4e928fcac247f',
        q: searchRequest,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    const url = `${BASE_URL}${END_POINT}?${params}`;
   
   
    return fetch(url).then(res => {
        if (!res) {
            throw new Error(res.status);
        }

        return res.json();
    })
}
