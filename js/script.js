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
              imgTrace = document.querySelectorAll('.img-trace'),
              btnTaskTrace = document.querySelector('.btn-task-trace'),
              taskTrace = document.querySelector('.task-trace');

        btnTransitionTaskPahfinder.addEventListener('click', (e) => {
            taskPathfinder.style.transition = '1s';
            bodyPathfinder.style.transition = '1s';
            trace.style.transition = '3s';
            removElement(taskPathfinder);
            bodyPathfinder.style.backgroundImage = fonBodyPathf;
            // let traceWindow;


            
            
            setTimeout(() => {
                trace.style.display = 'block';
                function loopTrace() {
                    imgTrace.forEach((div, i) => {
                        let ms = (i + 1) * 1000;
                        traceWindow = setTimeout(() => {
                            div.style.display = 'block';
                            if(i === imgTrace.length - 1) {
                                loopTrace();
                                console.log(111);
                                
                            }
                        }, ms);
                        
                    });
                }
                loopTrace();
                if(document.querySelector('.last-trace')) {
                    clearTimeout(traceWindow);
                    // btnTaskTrace.style.opacity = '1';
                }
                
                console.log(222);
            }, 3000);
            
            btnTaskTrace.style.opacity = '1';
            // btnTaskTrace.style.transition = 'all 5s ease-in 4s';

            
        });

        btnTaskTrace.addEventListener('click', () => {
            trace.remove();
            taskTrace.style.display = 'block';
        });

        
    });
});

