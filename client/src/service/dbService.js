const url = "http://localhost:9000/api/weight/";

export const getWeight = () => {
    return fetch(url)
    .then (res => res.json())
}

export const postWeight = (payload) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}