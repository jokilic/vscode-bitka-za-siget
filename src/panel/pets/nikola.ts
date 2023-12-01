import { PetColor } from '../../common/types';
import { BasePetType } from '../basepettype';
import { States } from '../states';

export class Nikola extends BasePetType {
    label = 'nikola';
    static possibleColors = [
        PetColor.red,
        PetColor.brown,
    ];
    sequence = {
        startingState: States.sitIdle,
        sequenceStates: [
            {
                state: States.sitIdle,
                possibleNextStates: [States.walkRight, States.runRight],
            },
            {
                state: States.walkRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.runRight,
                possibleNextStates: [States.walkLeft, States.runLeft],
            },
            {
                state: States.walkLeft,
                possibleNextStates: [States.sitIdle],
            },
            {
                state: States.runLeft,
                possibleNextStates: [States.sitIdle],
            },
            {
                state: States.chase,
                possibleNextStates: [States.idleWithBall],
            },
            {
                state: States.idleWithBall,
                possibleNextStates: [
                    States.walkRight,
                    States.walkLeft,
                    States.runLeft,
                    States.runRight,
                ],
            },
        ],
    };
    get emoji(): string {
        return '🏇🏼🇭🇷';
    }
    get hello(): string {
        return ` Tako meni Boga velikoga, braniti ću Siget svojom krvlju! 🏇🏼🇭🇷`;
    }
}

export const NIKOLA_NAMES: ReadonlyArray<string> = [
    'Zrinjski',
    'Juranić',
    'Alapić',
    'Sulejman',
    'Levi',
    'Paprutović',
    'Sokolović',
];
