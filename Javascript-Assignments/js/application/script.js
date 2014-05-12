// JSON Pattern

var number = 0;

function task(title, id, date) {
    this.title = title;
    this.id = id;
    this.date = date;
}

$('.meeting-checkbox').click(function () {
    $('.date-box').toggle();
});

function addTask() {
    var taskTextbox = $('.task-textbox')[0].value;
    number = ++number;
    var id = "task" + number;
    var selectdate = $('.date-box')[0].value;
    var meetingCheckbox = $('.meeting-checkbox');
//    if(meetingCheckbox.is(':checked')){
//        console.log("in");
//    }
    var task1 = new task(taskTextbox, id, selectdate);
    console.log(task1);
    var removeBtn = "<a href='#' class='remove-btn' onclick='removeTask(event)'>Remove Task</a>";
    $('.task-show').append("<div id='"+ id + "'>" + task1.title + "   " + task1.date +  removeBtn  + "</div><br>");
    $('.task-textbox')[0].value = "";
    $('.date-box')[0].value = "";
};

function removeTask(event){
    thisId = $(event.target).parent();
    console.log(thisId);
}
