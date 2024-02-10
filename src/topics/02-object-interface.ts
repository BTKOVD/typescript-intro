const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


const david: Character = {
    name: 'David',
    hp: 100,
    skills: ['Bash', 'Counter'],
}


david.hometown = 'Rivendell';

console.table(david);




export {}