export class Student {
   protected name:string;
   protected score:number
    next: Student| null = null;

    constructor(name:string,score:number) {
        this.name=name;
        this.score=score
    }

    getName(): string {

        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getScore(): number {
        return this.score;
    }

    setScore(value: number) {
        this.score = value;
    }

    readData():object{
        return {name:this.name,score:this.score}
    }
}