function onsubmit(e) {
    e.preventDefault();

    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';

    const prompt = document.querySelector('#prompt').value;
    const size = document.querySelector('#size').value;

    if (prompt === ''){
        alert('plz add some text');
        return;
    }

    // console.log('success', prompt,size)

    genImgReq(prompt,size);

}

async function genImgReq (prompt,size){
    try {
        showSpinner();

        const response = await fetch('/openai/genimage', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                prompt,
                size
            })
        });

        if(!response.ok){
            removeSpinner();
            throw new Error('Image could not be generated!!!');

        }

        const data = await response.json();
        // console.log(data)

        const imgUrl = data.data;
        document.querySelector('#image').src = imgUrl;

        removeSpinner();

    } catch (error) {
        document.querySelector('.msg').textContent = error
    }
};

function showSpinner(){
    document.querySelector('.spinner').classList.add('show');
};

function removeSpinner(){
    document.querySelector('.spinner').classList.remove('show');
};

document.querySelector('#image-form').addEventListener('submit', onsubmit);