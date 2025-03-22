let countdownInterval;

function startCountdown() {
    // Получаем значения из полей ввода
    const hours = parseInt(document.getElementById("hours-input").value) || 0;
    const minutes = parseInt(document.getElementById("minutes-input").value) || 0;
    const seconds = parseInt(document.getElementById("seconds-input").value) || 0;

    // Проверяем, что время больше нуля
    if (hours === 0 && minutes === 0 && seconds === 0) {
        alert("Пожалуйста, введите время!");
        return;
    }

    // Останавливаем предыдущий интервал, если он есть
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Вычисляем общее время в секундах
    let totalTime = (hours * 3600) + (minutes * 60) + seconds;

    // Запускаем таймер
    countdownInterval = setInterval(function() {
        // Вычисляем оставшиеся часы, минуты и секунды
        const displayHours = Math.floor(totalTime / 3600);
        const displayMinutes = Math.floor((totalTime % 3600) / 60);
        const displaySeconds = totalTime % 60;

        // Выводим результат в элементы с соответствующими id
        document.getElementById("display-hours").textContent = String(displayHours).padStart(2, '0');
        document.getElementById("display-minutes").textContent = String(displayMinutes).padStart(2, '0');
        document.getElementById("display-seconds").textContent = String(displaySeconds).padStart(2, '0');

        // Уменьшаем общее время на 1 секунду
        totalTime--;

        // Если отсчёт завершён, выводим сообщение и воспроизводим музыку
        if (totalTime < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Время вышло!";

            // Воспроизводим музыку
            const alarmSound = document.getElementById("alarm-sound");
            alarmSound.play()
                .then(() => console.log("Звук воспроизводится"))
                .catch((error) => console.error("Ошибка воспроизведения звука:", error));
        }
    }, 1000);
}

// Функция для проверки звука
function testSound() {
    const alarmSound = document.getElementById("alarm-sound");
    alarmSound.play()
        .then(() => console.log("Звук работает!"))
        .catch((error) => alert("Ошибка воспроизведения звука: " + error.message));
}