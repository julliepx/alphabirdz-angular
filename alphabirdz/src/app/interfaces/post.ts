import { User } from './user';
import { Bird } from './bird';

export interface Post {
    id: number;
    image: string;
    location: string;
    date: string;
    user: User;
    bird: Bird;
}