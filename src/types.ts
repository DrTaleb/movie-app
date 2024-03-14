export interface IitemTypes {
    types : "" | "movie" | "series" | "episode"
 }

export interface IMovieInList {
    Title : string,
    Year : string,
    imdbID: string,
    Type: IitemTypes["types"],
    Poster: string
  }