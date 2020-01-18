const messageRobot = ['Я сейчас занят другим лицом, но как только освобожусь — займусь вашим.', 
'База ракетных катеров. Мичман Петренко слушает.', 
'Ваш номер был послан на спутник Nasa, который в данный момент вычисляет ваше место нахождение. У Вас есть 30 секунд, после истечения этого времени ваше местонахождение и всё в радиусе 20 метров от него будет уничтожено… ', 
'Мне кажется, что у меня Амнезия, поэтому я считаю ненормальным общаться с людьми, которых не помню. Пожалуйста, расскажите мне обо мне поподробнее и не забудьте рассказать о себе. Это должно помочь вернуть мне память. Спасибо.',
'Здравствуйте! Это Пентагон, центр наведения ядерных ракет. Оставьте свои координаты!'];

const chatWidget = document.querySelector('.chat-widget');

function chatWidgetActive() {
    chatWidget.classList.add('chat-widget_active');
}
chatWidget.addEventListener('click', chatWidgetActive);

const chatWidgetInput = document.getElementById('chat-widget__input');

chatWidgetInput.addEventListener('keydown', event => {
    if (event.keyCode == 13) {
        const time = new Date();
        const messageCustomer = chatWidgetInput.value;
        index = Math.floor(Math.random() * messageRobot.length);
        if (messageCustomer != '') {
            const messages = document.querySelector('.chat-widget__messages');
            messages.innerHTML += 
                    `<div class="message message_client">
                        <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                        <div class="message__text">${messageCustomer}</div>
                    </div>
                    <div class="message">
                            <div class="message__time">${time.getHours()}:${time.getMinutes()}</div>
                            <div class="message__text">${messageRobot[index]}</div>
                    </div>`;
        }
        chatWidgetInput.value = '';
    }
});