import {Student} from "./Student";

export class StudentLink {
    head: Student | null
    tail: Student | null
    size: number

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(name: string, score: number): void {
        let student = new Student(name, score)
        student.next = this.head
        this.head = student
        if (this.tail) {
            this.tail = student
        }
        this.size++
    }

    insertLast(name: string, score: number): void {
        let student = new Student(name,score);
        if (this.head === null) {
            this.head = student;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = student;
        }
    }

    showList(): Student[] {
        let listStudent = []
        let currentStudent = this.head
        while (currentStudent != null) {
            listStudent.push(currentStudent.readData())
            currentStudent = currentStudent.next
        }
        return listStudent
    }

    totalStudentsFail(): string {
        let count = 0
        let currentStudent = this.head
        while (currentStudent) {
            if (currentStudent.getScore() <= 5) {
                count++
            }
            currentStudent = currentStudent.next
        }
        return `Số  sinh viên thi lại: ${count}`
    }

    listScore(): number[] {
        let listScore = []
        let currentStudent = this.head
        while (currentStudent != null) {
            listScore.push(currentStudent.getScore())
            currentStudent = currentStudent.next
        }
        return listScore
    }

    listStudentMaxScore():void {
        let max = Math.max(...this.listScore())
        for (let i = 0; i < this.listScore().length; i++) {
            if (this.listScore()[i] === max) {
                console.log(this.showList()[i])
            }
        }
    }
    listName():string[]{
        let listName = []
        let currentStudent = this.head
        while (currentStudent != null) {
            listName.push(currentStudent.getName())
            currentStudent = currentStudent.next
        }
        return listName

    }

    findByName(name: string):object {
        for (let i = 0; i < this.listName().length; i++) {
            if(this.listName()[i]===name){
                return this.showList()[i]
            }
        }
    }

}