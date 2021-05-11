export const url = 'https://wishlist-service-app.herokuapp.com/api';

export function createWishlist(data) {
    return fetch(`${url}/wishlists`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export function getWishlists() {
    return fetch(`${url}/wishlists`);
}
