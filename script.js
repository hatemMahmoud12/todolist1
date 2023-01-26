//selection
let add_1 = document.getElementById("add1");
let add_2 = document.getElementById("add2");
let add_3 = document.getElementById("add3");
let add_4 = document.getElementById("add4");
let add_5 = document.getElementById("add5");
let add_text = document.getElementById("add-text");
let add_container = document.getElementById("add-container");
let list_item1 = document.getElementById("list-item1");
let list_item2 = document.getElementById("list-item2");
let list_item3 = document.getElementById("list-item3");
let list_item4 = document.getElementById("list-item4");
let list_item5 = document.getElementById("list-item5");
let edit_1 = document.getElementById("edit1");
let edit_2 = document.getElementById("edit2");
let edit_3 = document.getElementById("edit3");
let edit_4 = document.getElementById("edit4");
let edit_5 = document.getElementById("edit5");
let task1 = document.getElementById("task1");
let task2 = document.getElementById("task2");
let task3 = document.getElementById("task3");
let task4 = document.getElementById("task4");
let task5 = document.getElementById("task5");
let check_1 = document.getElementById("check1");
let check_2 = document.getElementById("check2");
let check_3 = document.getElementById("check3");
let check_4 = document.getElementById("check4");
let check_5 = document.getElementById("check5");
let cancel_1 = document.getElementById("cancel1");
let cancel_2 = document.getElementById("cancel2");
let cancel_3 = document.getElementById("cancel3");
let cancel_4 = document.getElementById("cancel4");
let cancel_5 = document.getElementById("cancel5");
let x = document.getElementById("x");
// sound effect
const audio = new Audio();
audio.src = "complete.mp3";

/// list item1 خلص
list_item1.style.background = window.localStorage.getItem("list1");
task1.style.color = window.localStorage.getItem("text1");
task1.style.textDecoration = window.localStorage.getItem("textdecoration1");
check_1.style.display = window.localStorage.getItem("check_one");
cancel_1.style.display = window.localStorage.getItem("cancel_one");


/// list item2 خلص
list_item2.style.background = window.localStorage.getItem("list2");
task2.style.color = window.localStorage.getItem("text2");
task2.style.textDecoration = window.localStorage.getItem("textdecoration2");
check_2.style.display = window.localStorage.getItem("check_two");
cancel_2.style.display = window.localStorage.getItem("cancel_two");

/// list item3 خلص
list_item3.style.background = window.localStorage.getItem("list3");
task3.style.color = window.localStorage.getItem("text3");
task3.style.textDecoration = window.localStorage.getItem("textdecoration3");
check_3.style.display = window.localStorage.getItem("check_three");
cancel_3.style.display = window.localStorage.getItem("cancel_three");

/// list item4 خلص
list_item4.style.background = window.localStorage.getItem("list4");
task4.style.color = window.localStorage.getItem("text4");
task4.style.textDecoration = window.localStorage.getItem("textdecoration4");
check_4.style.display = window.localStorage.getItem("check_four");
cancel_4.style.display = window.localStorage.getItem("cancel_four");

/// list item5 خلص
list_item5.style.background = window.localStorage.getItem("list5");
task5.style.color = window.localStorage.getItem("text5");
task5.style.textDecoration = window.localStorage.getItem("textdecoration5");
check_5.style.display = window.localStorage.getItem("check_five");
cancel_5.style.display = window.localStorage.getItem("cancel_five");

/// tasks


// functions
// check خلص
function check1(){
    list_item1.style.background="#dc653a";
    task1.style.color="white";
    task1.style.textDecoration="line-through";
    check_1.style.display="none";
    cancel_1.style.display="flex";
    window.localStorage.setItem("list1",list_item1.style.background);
    window.localStorage.setItem("text1",task1.style.color);
    window.localStorage.setItem("textdecoration1",task1.style.textDecoration);
    window.localStorage.setItem("cancel_one",cancel_1.style.display);
    window.localStorage.setItem("check_one",check_1.style.display); 
    
}
function check2(){
    list_item2.style.background="#dc653a";
    task2.style.color="white";
    task2.style.textDecoration="line-through";
    check_2.style.display="none";
    cancel_2.style.display="flex";
    window.localStorage.setItem("list2",list_item2.style.background);
    window.localStorage.setItem("text2",task2.style.color);
    window.localStorage.setItem("textdecoration2",task2.style.textDecoration);
    window.localStorage.setItem("cancel_two",cancel_2.style.display);
    window.localStorage.setItem("check_two",check_2.style.display);    
}
function check3(){
    list_item3.style.background="#dc653a";
    task3.style.color="white";
    task3.style.textDecoration="line-through";
    check_3.style.display="none";
    cancel_3.style.display="flex";
    window.localStorage.setItem("list3",list_item3.style.background);
    window.localStorage.setItem("text3",task3.style.color);
    window.localStorage.setItem("textdecoration3",task3.style.textDecoration);
    window.localStorage.setItem("cancel_three",cancel_3.style.display);
    window.localStorage.setItem("check_three",check_3.style.display);    
}
function check4(){
    list_item4.style.background="#dc653a";
    task4.style.color="white";
    task4.style.textDecoration="line-through";
    check_4.style.display="none";
    cancel_4.style.display="flex";
    window.localStorage.setItem("list4",list_item4.style.background);
    window.localStorage.setItem("text4",task4.style.color);
    window.localStorage.setItem("textdecoration4",task4.style.textDecoration);
    window.localStorage.setItem("cancel_four",cancel_4.style.display);
    window.localStorage.setItem("check_four",check_4.style.display);    
}
function check5(){
    list_item5.style.background="#dc653a";
    task5.style.color="white";
    task5.style.textDecoration="line-through";
    check_5.style.display="none";
    cancel_5.style.display="flex";
    window.localStorage.setItem("list5",list_item5.style.background);
    window.localStorage.setItem("text5",task5.style.color);
    window.localStorage.setItem("textdecoration5",task5.style.textDecoration);
    window.localStorage.setItem("cancel_five",cancel_5.style.display);
    window.localStorage.setItem("check_five",check_5.style.display);    
}
// cancel خلص
function cancel1(){
    list_item1.style.background="#dfdfdf";
    task1.style.color="black";
    task1.style.textDecoration="none";
    check_1.style.display="flex";
    cancel_1.style.display="none";
    window.localStorage.setItem("list1",list_item1.style.background="#dfdfdf");
    window.localStorage.setItem("text1",task1.style.color="black");
    window.localStorage.setItem("textdecoration1",task1.style.textDecoration="none");
    window.localStorage.setItem("check_one",check_1.style.display="flex");   
    window.localStorage.setItem("cancel_one",cancel_1.style.display="none");

}
function cancel2(){
    list_item2.style.background="#dfdfdf";
    task2.style.color="black";
    task2.style.textDecoration="none";
    check_2.style.display="flex";
    cancel_2.style.display="none";
    window.localStorage.setItem("list2",list_item2.style.background="#dfdfdf");
    window.localStorage.setItem("text2",task2.style.color="black");
    window.localStorage.setItem("textdecoration2",task2.style.textDecoration="none");
    window.localStorage.setItem("check_two",check_2.style.display="flex");   
    window.localStorage.setItem("cancel_two",cancel_2.style.display="none");
    
}
function cancel3(){
    list_item3.style.background="#dfdfdf";
    task3.style.color="black";
    task3.style.textDecoration="none";
    check_3.style.display="flex";
    cancel_3.style.display="none";
     window.localStorage.setItem("list3",list_item3.style.background="#dfdfdf");
    window.localStorage.setItem("text3",task3.style.color="black");
    window.localStorage.setItem("textdecoration3",task3.style.textDecoration="none");
    window.localStorage.setItem("check_three",check_3.style.display="flex");   
    window.localStorage.setItem("cancel_three",cancel_3.style.display="none");
}
function cancel4(){
    list_item4.style.background="#dfdfdf";
    task4.style.color="black";
    task4.style.textDecoration="none";
    check_4.style.display="flex";
    cancel_4.style.display="none";
     window.localStorage.setItem("list4",list_item4.style.background="#dfdfdf");
    window.localStorage.setItem("text4",task4.style.color="black");
    window.localStorage.setItem("textdecoration4",task4.style.textDecoration="none");
    window.localStorage.setItem("check_four",check_4.style.display="flex");   
    window.localStorage.setItem("cancel_four",cancel_4.style.display="none");
}
function cancel5(){
    list_item5.style.background="#dfdfdf";
    task5.style.color="black";
    task5.style.textDecoration="none";
    check_5.style.display="flex";
    cancel_5.style.display="none";
     window.localStorage.setItem("list5",list_item5.style.background="#dfdfdf");
    window.localStorage.setItem("text5",task5.style.color="black");
    window.localStorage.setItem("textdecoration5",task5.style.textDecoration="none");
    window.localStorage.setItem("check_five",check_5.style.display="flex");   
    window.localStorage.setItem("cancel_five",cancel_5.style.display="none");
}

// edit
function modefication1(){
    add_container.style.display="flex";
    add_1.style.display="flex";
    add_2.style.display="none";
    add_3.style.display="none";
    add_4.style.display="none";
    add_5.style.display="none";
    add_text.placeholder="عدل مهمتك الاولي";
}
function modefication2(){
    add_container.style.display="flex";
    add_2.style.display="flex";
    add_1.style.display="none";
    add_3.style.display="none";
    add_4.style.display="none";
    add_5.style.display="none";
    add_text.placeholder="عدل مهمتك الثانيه";
}
function modefication3(){
    add_container.style.display="flex";
    add_3.style.display="flex";
    add_2.style.display="none";
    add_1.style.display="none";
    add_4.style.display="none";
    add_5.style.display="none";
    add_text.placeholder="عدل مهمتك الثالثه";
}
function modefication4(){
    add_container.style.display="flex";
    add_4.style.display="flex";
    add_2.style.display="none";
    add_3.style.display="none";
    add_1.style.display="none";
    add_5.style.display="none";
    add_text.placeholder="عدل مهمتك الرابعه";
}
function modefication5(){
    add_container.style.display="flex";
    add_5.style.display="flex";
    add_2.style.display="none";
    add_3.style.display="none";
    add_4.style.display="none";
    add_1.style.display="none";
    add_text.placeholder="عدل مهمتك الخامسه";
}
// add
function insert1(){
    task1.innerHTML = add_text.value; 
    window.localStorage.setItem("task_1",task1.innerHTML);
    add_container.style.display="none";
}
function insert2(){
    task2.innerHTML = add_text.value;
    window.localStorage.setItem("task_2",task2.innerHTML);
    add_container.style.display="none";
}
function insert3(){
    task3.innerHTML = add_text.value; 
        window.localStorage.setItem("task_3",task3.innerHTML);
    add_container.style.display="none";
}
function insert4(){
    task4.innerHTML = add_text.value; 
        window.localStorage.setItem("task_4",task4.innerHTML);
    add_container.style.display="none";
}
function insert5(){
    task5.innerHTML = add_text.value; 
        window.localStorage.setItem("task_5",task5.innerHTML);
    add_container.style.display="none";
}
// x
function xm(){
    add_container.style.display ="none";
   
}

// local storage
task1.innerHTML = window.localStorage.getItem("task_1");
task2.innerHTML = window.localStorage.getItem("task_2");
task3.innerHTML = window.localStorage.getItem("task_3");
task4.innerHTML = window.localStorage.getItem("task_4");
task5.innerHTML = window.localStorage.getItem("task_5");


if(task1.innerHTML.length <= 0){
    task1.innerHTML="عدل مهمتك";
   }
if(task2.innerHTML.length <= 0){
    task2.innerHTML="عدل مهمتك";
   }
if(task3.innerHTML.length <= 0){
    task3.innerHTML="عدل مهمتك";
   }
if(task4.innerHTML.length <= 0){
    task4.innerHTML="عدل مهمتك";
   }
if(task5.innerHTML.length <= 0){
    task5.innerHTML="عدل مهمتك";
   }
