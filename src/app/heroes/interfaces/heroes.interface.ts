export interface Heroe {
    id?:               string; //Opcional, cuando creemos un héroe no tendremos ID
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:          string; //Tampoco tendremos imágen cuando creemos
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}