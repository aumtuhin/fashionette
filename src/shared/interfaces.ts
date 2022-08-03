interface Image {
    medium: string,
    original: string
}

interface Rating {
    average: number | null | undefined
}

export interface Movie {
    name: string,
    image: Image,
    rating: Rating,
    genres: string[],
    language: string,
    premiered: string,
    summary: string,
    officialSite: string,
}