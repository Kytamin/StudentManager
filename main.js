"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Studentlink_1 = require("./Studentlink");
var linkStudent1 = new Studentlink_1.StudentLink();
linkStudent1.insertFirst("K", 10);
linkStudent1.insertFirst("L", 10);
linkStudent1.insertFirst("G", 10);
linkStudent1.insertFirst("V", 4);
linkStudent1.insertLast("N", 9);
linkStudent1.insertLast("M", 8);
console.table(linkStudent1.showList());
console.log(linkStudent1.totalStudentsFail());
console.log("C\u00E1c sinh vi\u00EAn \u0111\u1EA1t \u0111i\u1EC3m cao");
linkStudent1.listStudentMaxScore();
console.log("T\u00ECm ki\u1EBFm sinh vi\u00EAn, k\u1EBFt qu\u1EA3:");
console.log(linkStudent1.findByName('K'));
