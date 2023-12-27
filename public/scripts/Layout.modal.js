document.addEventListener('DOMContentLoaded', function () {
    var newProjectBtn = document.getElementById('newProjectBtn');
    var newProjectModal = document.getElementById('newProjectModal');
    var closeModal = document.getElementById('closeModal');

    newProjectBtn.addEventListener('click', function () {
        newProjectModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function () {
        newProjectModal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target == newProjectModal) {
            newProjectModal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var newProjectBtn = document.getElementById('newIssueBtn');
    // newProjectBtn.style.backgroundColor="red";
    var newProjectModal = document.getElementById('newProjectModal2');
    var closeModal = document.getElementById('closeModal2');

    newProjectBtn.addEventListener('click', function () {
        newProjectModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', function () {
        newProjectModal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target == newProjectModal) {
            newProjectModal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let resoleSolvedAns = false;
    const resoleSolved = document.getElementById("resoleSolved");

    if (resoleSolved) {
        resoleSolved.addEventListener('click', () => {
            if (resoleSolvedAns) {
                resoleSolved.style.backgroundColor = '#d9534f';
                resoleSolved.innerText = 'Resolve';

            } else {
                resoleSolved.style.backgroundColor = 'green';
                resoleSolved.innerText = 'Resolved';
            }
            resoleSolvedAns = !resoleSolvedAns;
        });
    } else {
        console.error("Element with ID 'resoleSolved' not found.");
    }
});

