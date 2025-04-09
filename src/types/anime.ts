export interface Anime{
    mal_id:number;
    title:string;
    year:number;
    rating:string;
    status:string;
    images:{
        jpg:{
            image_url:string;
        }
    }
    genres: { name: string }[];

}