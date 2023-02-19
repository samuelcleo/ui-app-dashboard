const notificationBell = document.getElementById('bell');
const modal = document.getElementById('modal')
const notifications = document.getElementById('notifications')

// 2. Create a dismissible notification card as a new list item of the 'notifications' ul using javascript on loading of application


// 5. Write the javascript to alter the classname of the notification div to alternate between the classnames 'open' and 'closed'. 

notificationBell.addEventListener('click', (e) => {
    if (modal.className === "open") {
        modal.className = "close";
    } else if (modal.className === "close") {
        modal.className = "open";
    }
    console.log(modal.className);
});

// Animate the notification closed
