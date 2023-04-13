"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentLink = void 0;
var Student_1 = require("./Student");
var StudentLink = /** @class */ (function () {
    function StudentLink() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    StudentLink.prototype.insertFirst = function (name, score) {
        var student = new Student_1.Student(name, score);
        student.next = this.head;
        this.head = student;
        if (this.tail) {
            this.tail = student;
        }
        this.size++;
    };
    StudentLink.prototype.insertLast = function (name, score) {
        var student = new Student_1.Student(name, score);
        if (this.head === null) {
            this.head = student;
        }
        else {
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = student;
        }
    };
    StudentLink.prototype.showList = function () {
        var listStudent = [];
        var currentStudent = this.head;
        while (currentStudent != null) {
            listStudent.push(currentStudent.readData());
            currentStudent = currentStudent.next;
        }
        return listStudent;
    };
    StudentLink.prototype.totalStudentsFail = function () {
        var count = 0;
        var currentStudent = this.head;
        while (currentStudent) {
            if (currentStudent.getScore() <= 5) {
                count++;
            }
            currentStudent = currentStudent.next;
        }
        return "S\u1ED1  sinh vi\u00EAn thi l\u1EA1i: ".concat(count);
    };
    StudentLink.prototype.listScore = function () {
        var listScore = [];
        var currentStudent = this.head;
        while (currentStudent != null) {
            listScore.push(currentStudent.getScore());
            currentStudent = currentStudent.next;
        }
        return listScore;
    };
    StudentLink.prototype.listStudentMaxScore = function () {
        var max = Math.max.apply(Math, this.listScore());
        for (var i = 0; i < this.listScore().length; i++) {
            if (this.listScore()[i] === max) {
                console.log(this.showList()[i]);
            }
        }
    };
    StudentLink.prototype.listName = function () {
        var listName = [];
        var currentStudent = this.head;
        while (currentStudent != null) {
            listName.push(currentStudent.getName());
            currentStudent = currentStudent.next;
        }
        return listName;
    };
    StudentLink.prototype.findByName = function (name) {
        for (var i = 0; i < this.listName().length; i++) {
            if (this.listName()[i] === name) {
                return this.showList()[i];
            }
        }
    };
    return StudentLink;
}());
exports.StudentLink = StudentLink;
