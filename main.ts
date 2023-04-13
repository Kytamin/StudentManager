import {StudentLink} from "./Studentlink";
import {Student} from "./Student";
let linkStudent1= new StudentLink()
linkStudent1.insertFirst("K",10)
linkStudent1.insertFirst("L",10)
linkStudent1.insertFirst("G",10)
linkStudent1.insertFirst("V",4)
linkStudent1.insertLast("N",9)
linkStudent1.insertLast("M",8)
console.table(linkStudent1.showList())
console.log(linkStudent1.totalStudentsFail())
console.log(`Các sinh viên đạt điểm cao`)
linkStudent1.listStudentMaxScore()
console.log(`Tìm kiếm sinh viên, kết quả:`)
console.log(linkStudent1.findByName('K'))

