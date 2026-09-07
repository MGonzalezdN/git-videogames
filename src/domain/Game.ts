export class Game {
  readonly title: string
  readonly year: number
  readonly developer: string
  readonly genre: string
  readonly cover: string

  constructor(title: string, year: number, developer: string, genre: string, cover: string) {
    this.title = title
    this.year = year
    this.developer = developer
    this.genre = genre
    this.cover = cover
  }
  getGenre():string{
    return this.genre;
  }
  toString():string{
    return this.title + " " + this.year + " " + this.developer + " " + this.genre + " " + this.cover;
  }
}


