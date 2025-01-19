<script src="{{ url_for('static',filename='js/jquery-3.3.1.min.js') }}"></script>
const modal = document.getElementById('modal');
const accessCodeInput = document.getElementById('accessCode');
const submitCodeBtn = document.getElementById('submitCode');
const mainContent = document.getElementById('mainContent');
const incorrectCodeMessage = document.getElementById('incorrectCodeMessage');
const statusMessage = document.getElementById('statusMessage');
const approvedMessage = document.createElement('div');
approvedMessage.classList.add('approved-message');
approvedMessage.innerHTML = 'Код верный. Перенаправляю вас...';

// Показываем модальное окно
setTimeout(() => modal.classList.add('show'), 500);

// Проверка правильности кода
submitCodeBtn.addEventListener('click', () => {
    const accessCode = accessCodeInput.value;
    
    // Показать статус "Отправка запроса"
    statusMessage.style.display = 'flex';
    
    if (accessCode === '130519') {
        // Симулируем задержку для подтверждения
        setTimeout(() => {
            // Изменить статус на "Код верный"
            statusMessage.innerHTML = `
                <div class="status-content">
                    <div class="status-text">Код верный. Перенаправляю вас...</div>
                    <div class="loader"></div>
                </div>
            `;
            // Добавить сообщение и перенаправить
            document.body.appendChild(approvedMessage);
            approvedMessage.style.display = 'block';
            setTimeout(() => {
                modal.classList.remove('show');
                mainContent.style.display = 'block';
                statusMessage.style.display = 'none';
                approvedMessage.style.display = 'none'; // Скрыть сообщение
            }, 3000);
        }, 2000); // Симуляция времени подтверждения
    } else {
        // Сообщение об ошибке
        setTimeout(() => {
            incorrectCodeMessage.style.display = 'block';
            statusMessage.style.display = 'none'; // Скрыть статус
        }, 2000);
    }
});


// Информация о пользователе
const names = {
    "Hrach Dadayan": {
        name: "Hrach Dadayan",
        details: "Водитель в компании ОNEX."
    },
    "Aram Dadayan": {
        name: "Aram Dadayan",
        details: "Учитель в techno school Kapan."
    },
    "David Dadayan": {
        name: "David Dadayan",
        details: "-------------."
    },
    "Maria Petrovna": {
        name: "Maria Petrovna",
        details: "Студентка. Интересуется искусственным интеллектом."
    },
    "Alexey Zaitsev": {
        name: "Alexey Zaitsev",
        details: "Маркетолог, специалист по цифровым стратегиям."
    }
};

// Показать информацию по имени
document.getElementById('submitBtn').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value;
    const infoContainer = document.getElementById('infoContainer');
    const loadingInfo = document.getElementById('loadingInfo');
    
    // Показать анимацию загрузки
    loadingInfo.style.display = 'block';
    
    // Симуляция задержки
    setTimeout(() => {
        if (names[nameInput]) {
            const person = names[nameInput];
            infoContainer.innerHTML = `
                <div class="name">${person.name}</div>
                <div class="details">${person.details}</div>
            `;
            infoContainer.style.display = 'block';
            loadingInfo.style.display = 'none'; // Скрыть анимацию загрузки
        } else {
            alert("Информация о таком человеке не найдена.");
            loadingInfo.style.display = 'none'; // Скрыть анимацию загрузки
        }
    }, 2000); // Симуляция задержки
});

