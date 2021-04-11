swal({
    title: 'Pregunta Importante...',
    text: 'Atrevete a decirme que no.',
});
const handleSwal = context => swal(context);
const getDimentions = element => {
    const height = element.clientHeight;
    const width = element.clientWidth;
    return { height, width };
};
const getRandomPosition = (max, min=0) => Math.floor(Math.random() * (max - min)) + min;
const handleErrMouseOver = () => {
    const dimentions = getDimentions(answers);
    const height = getRandomPosition(dimentions.height);
    const width  = getRandomPosition(dimentions.width);
    err.style.bottom = `${height}px`;
    err.style.left = `${width}px`;
}
const success = document.getElementById('success');
const err = document.getElementById('err');
const answers = document.getElementById('answers');


success.addEventListener('click', () => {
    const context = {
        title: 'Aeeeee...',
        text: 'Yo sabía que dirias que si. Te Amo!!',
        icon: 'success',
    }
    handleSwal(context);
});
err.addEventListener('click', () => {
    const context = {
        title: 'Dejame Pues',
        text: 'Yo sabía que no me amabas, atrevida :C',
        icon: 'error',
    }
    handleSwal(context);
})

