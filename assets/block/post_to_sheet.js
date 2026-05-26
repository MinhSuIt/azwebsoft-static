const ask_form = document
    .getElementById('ask_form')
let url = window.askUrl
const debug = window.debug
if (debug) {
    url = 'https://script.google.com/macros/s/AKfycbwy85ZcpBMf8eu8m80Lwl9cjxdTU7zh01XRRvGRFkp-FjmPFQ4hdofwoKQPL49Uguz7/exec'
}
ask_form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    };
    const token = this._token.value;
    let params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(data)
    }
    if (debug) {
        params.headers['X-CSRF-TOKEN'] = token
        params.headers['Accept'] = 'application/json'
        params.credentials = 'same-origin'
        params.mode = 'cors'
    }
    try {

        const response = await fetch(url, params);
        if (debug) {
            const result = await response.json();

            if (!response.ok) {

                let messages = [];

                Object.values(result.errors).forEach(error => {
                    messages.push(error[0]);
                });

                alert(messages.join('\n'));

                return;
            }
        }

        ask_form.reset();
        alert('Cảm ơn đã đóng góp, chúng tôi sẽ liên hệ với bạn sớm nhất có thể!');

    } catch (error) {

        alert('Có lỗi xảy ra!');

    }
});