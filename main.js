var students = [];
function submit() {
    var name1 = document.getElementById("input_1").value;
    var name2 = document.getElementById("input_2").value;
    var name3 = document.getElementById("input_3").value;
    var name4 = document.getElementById("input_4").value;

    students.push(name1);
    students.push(name2);
    students.push(name3);
    students.push(name4);

    console.log(students);
    document.getElementById("div_result").innerHTML = students;
    document.getElementById("button_submit").style.display = "none";
    document.getElementById("button_sort").style.display = "inline-block";
}
function sort() {
    students.sort();
    console.log(students);
    document.getElementById("div_result").innerHTML = students;
}