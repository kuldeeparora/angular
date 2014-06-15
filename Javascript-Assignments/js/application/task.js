/* Task Management */

function task(title, date, id) {
    this.title = title;
    this.date = date;
    this.id = id;
}

var tasks = [];
var taskTextbox = $('.task-textbox');
var taskShow = $('.task-show');
var meetingCheckbox = $('.meeting-checkbox');
var dateBox = $('#date-box');

var addTask = function () {
    if(taskTextbox.val() == ""){
        console.log('New Task Title should not be empty');
        return;
    };
    if (meetingCheckbox.is(':checked')){
        if(dateBox.val() == ""){
            console.log('Date Box should not be empty');
            return;
        };
    }
    var taskId = "task" + (tasks.length + 1);
    var newTask = new task(taskTextbox.val(), dateBox.val(), taskId);
    tasks.push(newTask);
    updateUI();
}

var removeTask = function (event) {
    var rowId = $(event.target).parent().attr("id");
    var tasksLength = tasks.length;
    for (var i=0; i < tasksLength; i++ ){
        if(this.tasks[i].id == rowId){
            var index = tasks.indexOf(tasks[i].id);
            tasks.splice(i, 1);
            updateUI();
            break;
        }
    };
}

var updateUI = function () {
    taskShow.empty();
    var tasksLength = tasks.length;
    var removeBtn = "<a href='#' class='remove-btn' onclick='removeTask(event)'>Remove Task</a>";
    for (var i = 0; i < tasksLength; i++) {
        var appendTasks = "<div id='" + tasks[i].id + "'>" + tasks[i].title + " ------- " + tasks[i].date + "------------" + removeBtn + "</div>";
        taskShow.append(appendTasks);
    }
}

meetingCheckbox.click(function () {
    dateBox.toggle();
});