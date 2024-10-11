import Phrase from "@/components/phrases/phrase.model";

class PhraseService {
    private readonly baseUrl: string;
    private readonly randomPartialUrl: string;

    constructor() {
        this.baseUrl = 'https://dummyjson.com/quotes';
        this.randomPartialUrl = '/random';
    }

    getRandomPost() : Promise<void | Phrase>{
        return fetch(`${this.baseUrl}${this.randomPartialUrl}`)
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
    }

}

export default PhraseService;