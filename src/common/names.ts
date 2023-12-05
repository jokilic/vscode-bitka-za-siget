import { NIKOLA_NAMES } from '../panel/pets/nikola';
import { SULEJMAN_NAMES } from '../panel/pets/sulejman';
import { PetType } from './types';

export function randomName(type: PetType): string {
    const collection: ReadonlyArray<string> =
        (
            {
                [PetType.nikola]: NIKOLA_NAMES,
                [PetType.sulejman]: SULEJMAN_NAMES,
            } as Record<PetType, ReadonlyArray<string>>
        )[type] ?? NIKOLA_NAMES;

    return (
        collection[Math.floor(Math.random() * collection.length)] ?? 'Unknown'
    );
}
