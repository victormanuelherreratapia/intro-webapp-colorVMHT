document.addEventListener('DOMContentLoaded', function () {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const redValue = document.getElementById('red-value');
    const greenValue = document.getElementById('green-value');
    const blueValue = document.getElementById('blue-value');
    const colorBox = document.getElementById('color-box');
    const hexCode = document.getElementById('hex-code');
    const colorPicker = document.getElementById('color-picker');

    function updateColor() {
        const r = parseInt(redSlider.value);
        const g = parseInt(greenSlider.value);
        const b = parseInt(blueSlider.value);

        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor;
        colorPicker.value = hexColor;

        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;
    }

    function updateSliders() {
        const r = parseInt(redValue.value);
        const g = parseInt(greenValue.value);
        const b = parseInt(blueValue.value);

        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;

        updateColor();
    }

    function updateFromColorPicker() {
        const hexColor = colorPicker.value;
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);

        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;

        redValue.value = r;
        greenValue.value = g;
        blueValue.value = b;

        updateColor();
    }

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    redValue.addEventListener('input', updateSliders);
    greenValue.addEventListener('input', updateSliders);
    blueValue.addEventListener('input', updateSliders);

    colorPicker.addEventListener('input', updateFromColorPicker);

    updateColor(); // Initialize with the default color
});
