import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const GIPHY_API_URL: string = 'PJOmP8plfGdra9RRN9w8i03ZGrMqwTnt';
// const GIPHY_API_URL: string = 'ilM6tX3iCaBRUQ8Rq7rb6oe3XC8sKAiH';
const SERVICE_URL: string = 'https://api.giphy.com/v1/gifs/';

@Injectable({ providedIn: 'root' })
export class GifsService {

    private _tagsHistory: string[] = [];
    public gifList: Gif[] = [];

    constructor(private http: HttpClient) { 
        this.loadFromLocalStorage();
        console.log("Gifs Service ready!!")
    }

    get tagsHistory() {
        return [...this._tagsHistory];
    }

    private organizeHistory(tag: string) {
        tag = tag.toLowerCase();
        const exists = this._tagsHistory.includes(tag);
        if (exists) {
            // Check if tag exists in _tagsHistory
            this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
        }
        // Add tag to the beggining of the array
        this._tagsHistory.unshift(tag);
        // Limit the array to 10 elements
        this._tagsHistory = this._tagsHistory.splice(0, 10);
        // Convert all tags to lowercase
        this._tagsHistory = this._tagsHistory.map((tag) => tag.toLowerCase());

        //
        this.saveToLocalStorage();
    }

    public searchTag(tag: string): void {
        console.log({ tag, _tagsHistory: this._tagsHistory });
        // Validate if tag is empty
        if (tag.length === 0) return;
        this.organizeHistory(tag);

        // const resp = await fetch("https://api.giphy.com/v1/gifs/search?api_key=ilM6tX3iCaBRUQ8Rq7rb6oe3XC8sKAiH&q=valorant&limit=10");
        // const data = await resp.json();
        // console.log(data);
        // .then( res => res.json())
        // .then(data => console.log(data))

        const params = new HttpParams()
            .set('api_key', GIPHY_API_URL)
            .set('q', tag)
            .set('limit', '10');

        this.http.get<SearchResponse>(
            `${SERVICE_URL}search`, { params }
        ).subscribe((resp) => {
            // console.log(resp);
            this.gifList = resp.data;
            // console.log(this.gifList);
        });
    }

    private saveToLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));
    }

    private loadFromLocalStorage(): void {
        if (!localStorage.getItem('history')) return;
        this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
        if (this._tagsHistory.length === 0) return;
        this.searchTag(this._tagsHistory[0]);
    }
}