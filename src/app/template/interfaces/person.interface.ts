export interface Person {
    name: string;
    favoritos: Favorito[];
}

export interface Favorito {
    id: number;
    name: string;
}
