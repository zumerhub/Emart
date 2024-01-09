// const { Result } = require("express-validator");

const deleteProduct = () => {
    const prodId = btn.parentNode.querySelector('[name=productId]').value;
    const csrf = btn.parentNode.querySelector('[name=_csrf]').value;
    console.log({ prodId, csrf })

    fetch('/product/' + prodId, {
        method: 'DELETE',
        headers: {
            'csrf-token': csrf
        }
    })
    .then(result => {
        return result.json();
    })
    .then(data => {
        console.log(data);
        productElement.parentNode.removeChild(productElement);
    })
    .catch(err => {
        console.log(err);
    })
};

const deleteButton = document.getElementById('btn');
console.log({ deleteButton })

deleteButton.addEventListener('click', () => {
    console.log('herrreeee')
    deleteProduct()
})