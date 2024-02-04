console.log('Hello!');
const headerContainer = document.getElementById('header-container');
const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
const emergencyTasksHeader = document.querySelector('.emergency-tasks h3');
const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
const noEmergencyTasksHeader = document.querySelector('no-emergency-tasks h3');
const footerContainer = document.getElementById('footer-container');


headerContainer.style.backgroundColor = 'rgb(0, 176, 105)';
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 243)';

for (let index = 0; index < emergencyTasksHeader.length; index += 1) {
    const currentTaskHeader = emergencyTasksHeader[index];
    currentTaskHeader.style.backgroundColor = 'rgb(165, 0, 243)';
};

noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

for (let index = 0; index < noEmergencyTasksHeader.length; index += 1) {
    noEmergencyTasksHeader[index].style.backgroundColor = 'rgb(35, 37, 37)'
}

footerContainer.style.backgroundColor = 'rgb(0, 53, 51)';