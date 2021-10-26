document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body'),
          container = document.querySelector('.container'),
          beginer = `
                    <div class='wrapper-beginer'>
                        <div class='beginer' style='background-image: url("images/begin.jpg");'></div>
                        <div class='btn-beginer'>
                            <h1>Квест для дошкольников</h1> 
                            <h2>"В поисках лесных животных"</h2>
                            <button class="btn btn-danger">Вперёд!</button>
                        </div>
                    </div> 
                `;
    body.innerHTML = beginer;

    // После нажатия вперёд! (начало квеста)
    const btnBegin = document.querySelector('.btn'),
        div = document.querySelector('.wrapper-beginer');
    div.style.transition = '1s';
    
    btnBegin.addEventListener('click', (e) => {
        setTimeout(() =>{ 
            div.style.opacity = 0; 
            setTimeout(() => div.remove(), 600);
        }, 800);
        body.append(container);

        // Удаление диалога автора
        const author = document.querySelector('.wrapper-author-img'),
            dialog = document.querySelector('.wrapper-author-dialog'),
            wrapBtnChoice = document.querySelector('.choice'),
            btnChoice = document.querySelector('.btn-choice'),
            choice = document.querySelector('.wrapper-choice');

        btnChoice.addEventListener('click', (e) => {
            author.remove();
            dialog.remove();
            wrapBtnChoice.remove();
            choice.style.display = 'block';

        });

        // Модальные окна - кто такие зоолог и следопыт
        const zooModal = document.querySelector('#zooModal'),
              pathfinderModal = document.querySelector('#pathfinderModal'),
              btnZooModal = document.querySelector('.btn-zoologist-who_is_it'),
              btnPathfinderModal = document.querySelector('.btn-pathfinder-who_is_it'),
              btnClose = document.querySelectorAll('.close');

        function openModal(button, modal) {
            button.addEventListener('click', () => {
                modal.classList.remove('fade');
                modal.classList.add('show');
            });
        }

        function closeModal(modal) {
            btnClose.forEach(btn => {
                btn.addEventListener('click', () => {
                    modal.classList.remove('show');
                    modal.classList.add('fade');
                });
            });
            
        }

        openModal(btnZooModal, zooModal);
        closeModal(zooModal);

        openModal(btnPathfinderModal, pathfinderModal);
        closeModal(pathfinderModal);

        // Следопыт
        // начало - список и видео
        const btnPathfinderTask = document.querySelector('.btn-pathfinder'),
              taskPathfinder = document.querySelector('.task-pathfinder');

        btnPathfinderTask.addEventListener('click', () => {
            choice.style.display = 'none';
            taskPathfinder.style.display = 'block';
            pathfinderModal.remove();
        });
    
    });
});

