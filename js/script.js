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

    function removElement(modul) {
        setTimeout(() =>{ 
            modul.style.opacity = 0; 
            setTimeout(() => modul.remove(), 600);
        }, 800);
    };

    // После нажатия вперёд! (начало квеста)
    const btnBegin = document.querySelector('.btn'),
        div = document.querySelector('.wrapper-beginer');
    div.style.transition = '1s';
    
    btnBegin.addEventListener('click', (e) => {
        removElement(div);
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

        // ---- Следопыт ---- //

        // начало - список и видео
        const btnPathfinderTask = document.querySelector('.btn-pathfinder'),
              taskPathfinder = document.querySelector('.task-pathfinder');

        btnPathfinderTask.addEventListener('click', () => {
            choice.remove();
            taskPathfinder.style.display = 'block';
            pathfinderModal.remove();
        });

        // задание - распознать следы
        const btnTransitionTaskPahfinder = document.querySelector('.btn-transition-task-pathfinder'),
              bodyPathfinder = document.querySelector('body'),
              fonBodyPathf = 'url(images/body-wild-pathfinder.jpg)',
              trace = document.querySelector('.wrapper-task-trace'),
              imgTrace = document.querySelectorAll('.img-trace');

        btnTransitionTaskPahfinder.addEventListener('click', (e) => {
            taskPathfinder.style.transition = '1s';
            bodyPathfinder.style.transition = '1s';
            trace.style.transition = '3s';
            removElement(taskPathfinder);
            bodyPathfinder.style.backgroundImage = fonBodyPathf;
            // trace.style.display = 'block';
            setTimeout(() => {
                trace.style.display = 'block';
                function loopTrace(i) {
                    imgTrace[i].style.display = 'block';
                    if(i <= imgTrace.length) {
                        setTimeout(() => {
                            i++;
                            loopTrace(i);
                        }, 1000);
                        
                    }
                    
                }
                loopTrace(0);
            }, 3000);

        });

    
    });
});

