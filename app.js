const { Input, AutoComplete } = require('enquirer');
require('dotenv').config();

const askName = new Input({
    name: 'question',
    message: 'You'
});

const run = async () => {
    const question = await askName.run();
    fetch("https://api.carterapi.com/v0/chat", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            api_key: process.env.API,
            'query': question,
            'uuid': "1",
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.output.text);
    })
}
  
run();