const getRandomPhrase = (): Promise<void | Phrase> => {
    const baseUrl = 'https://dummyjson.com/quotes';

    return fetch(`${baseUrl}/random`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(result => {
            return {
                id: result.id,
                quote: result.quote,
                author: result.author
            };
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
        });
};

export interface Phrase {
    id: number;
    quote: string;
    author: string;
}

export default getRandomPhrase;