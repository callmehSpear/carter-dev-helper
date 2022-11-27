const { Input, AutoComplete } = require('enquirer');

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
            api_key: '4zTC9vE5qbUgGUqJ7baAFMMRCz7eQixp',
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