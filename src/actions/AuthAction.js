const URL = "http://localhost:8080/api/"

export async function login({ payload }) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'https://localhost:3000/login' },
        body: JSON.stringify(payload)
    }

    return fetch(URL + 'auth/login', options)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return {
                error: error.message
            }
        })
}