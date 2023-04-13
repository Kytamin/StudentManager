"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (value) {
        this.name = value;
    };
    Student.prototype.getScore = function () {
        return this.score;
    };
    Student.prototype.setScore = function (value) {
        this.score = value;
    };
    Student.prototype.readData = function () {
        return { name: this.name, score: this.score };
    };
    return Student;
}());
exports.Student = Student;
