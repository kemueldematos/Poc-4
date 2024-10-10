
function getDogImageWithPromises() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log('Imagem aleatória de cachorro (Promises):', data.message))
        .catch(error => console.log('Erro na operação fetch (Promises):', error))
        .finally(() => console.log('Tentativa de fetch concluída (Promises).'));
}


getDogImageWithPromises();


async function getDogImageWithAsyncAwait() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Imagem aleatória de cachorro (async/await):', data.message);
    } catch (error) {
        console.log('Erro na operação fetch (async/await):', error);
    } finally {
        console.log('Tentativa de fetch concluída (async/await).');
    }
}


getDogImageWithAsyncAwait();
