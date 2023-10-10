const areaCircle = (radius) => Math.PI * radius ** 2;

const circleRadius = document.getElementById("Pankaj-radius");
const areaInput = document.getElementById("Pankaj-area");

circleRadius.addEventListener('input', (event) => {
    const radius = Number(event.target.value);
    const area = areaCircle(radius);
    areaInput.value = area.toFixed(2);
});
