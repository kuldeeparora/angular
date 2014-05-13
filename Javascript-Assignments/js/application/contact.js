// JSON Pattern

var number = 0;

function task(title, id, meeting, date) {
    this.title = title;
    this.id = id;
    this.meeting = meeting;
    this.date = date;
}

var tasks = [];

var addTask = function () {
    var taskTextbox = $('.task-textbox');
    var taskId = "task" + (tasks.length + 1);
    var meetingCheckbox = $('.meeting-checkbox');
    var dateBox = $('#date-box');
    var newTask = new task(taskTextbox.val(), taskId, meetingCheckbox.val(), dateBox.val());
    tasks.push(newTask);
    updateUI();
};

var updateUI = function () {
    $('.task-show').empty();
    var tasksLength = tasks.length;
    var removeBtn = "<a href='#' class='remove-btn' onclick='removeTask(event)'>Remove Task</a>";
    for (var i = 0; i < tasksLength; i++) {
        var appendTasks = "<div id='" + tasks[i].id + "'>" + tasks[i].title + " ------- " + tasks[i].date + "------------" + removeBtn + "</div>";
        $('.task-show').append(appendTasks);
    }
};


$('.meeting-checkbox').click(function () {
    $('#date-box').toggle();
});

function removeTask(event) {
    var rowId = $(event.target).parent().attr("id");
    var tasksLength = tasks.length;
    for (var i = 0; i < tasksLength; i++) {
        if (this.tasks[i].id == rowId) {
            var index = tasks.indexOf(tasks[i].id);
            tasks.splice(i, 1);
            updateUI();
            break;
        }

    }
//    updateUI();
}


/*
 Meeting object in task
 tasks add in array

 */