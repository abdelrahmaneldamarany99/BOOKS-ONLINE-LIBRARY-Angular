export interface Book {
    id: any;
    works: any;
    authors: [{key:string,name:string}],
    availability: object,
    cover_edition_key: string,
    cover_id:number,
    edition_count: number,
    first_publish_year: number,
    has_fulltext: boolean,
    ia: string,
    ia_collection: string[],
    key: string,
    lending_edition: string,
    lendinglibrary: boolean,
    printdisabled: boolean,
    public_scan: boolean,
    subject: string[],
    title: string,
    bookId:any
}