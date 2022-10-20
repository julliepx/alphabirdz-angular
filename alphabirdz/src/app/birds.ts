export interface Birds {
    id: number;
    englishName: string;
    latinName: string;
    portugueseName: string;
    dominantColor: string;
    habitat: string;
    family: string;
    birdSize: string;
}

export const birds = [
    {
        id: 1,
        englishName: 'great egret',
        latinName: 'ardea alba',
        portugueseName: 'garça-real',
        dominantColor: 'white',
        habitat: 'wetlands',
        family: 'ardeidae',
        bird_size: '65cm'
    },
    {
        id: 2,
        englishName: 'Burrowing Owl',
        latinName: 'Athene cunicularia',
        portugueseName: 'coruja-buraqueira',
        dominantColor: 'brown',
        habitat: 'wetlands',
        family: 'Strigidae',
        bird_size: '25cm'
    }
]