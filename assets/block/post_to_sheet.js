const ask_form = document
    .getElementById('ask_form')
ask_form.addEventListener('submit', async function (e) {

    e.preventDefault();

    const data = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };

    await fetch(
        'https://script.google.com/macros/s/AKfycbzDUVPyx4ibLUCUeMElnel9Iu-0p0HnmA9qto7XelFeSws38PlIN0tMegrRRatkmTxK/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(data)
    }
    );
    ask_form.reset();
    alert('Cảm ơn đã đóng góp, chúng tôi sẽ liên hệ với bạn sớm nhất có thể!');
});