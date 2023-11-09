

// relie saduration teinte et luminositer sur les input range 
let hueSlider = document.getElementById("hue-slider");
let saturationSlider = document.getElementById("saturation-slider");
let luminanceSlider = document.getElementById("luminance-slider");

let updateBackgroundColor = () => {
    let hue = hueSlider.value;
    let saturation = saturationSlider.value + "%";
    let luminance = luminanceSlider.value + "%";
    document.body.style.backgroundColor = `hsl(${hue}, ${saturation}, ${luminance})`;
};  


// Écoute les changements de tous les curseurs
hueSlider.addEventListener("input", updateBackgroundColor);
saturationSlider.addEventListener("input", updateBackgroundColor);
luminanceSlider.addEventListener("input", updateBackgroundColor);

// Initialise la couleur de fond
updateBackgroundColor();


const hueValue = document.getElementById("hue-value");
const saturationValue = document.getElementById("saturation-value");
const luminanceValue = document.getElementById("luminance-value");
const colorHSL = document.getElementById("color-hsl");

const updateValues = () => {
  const hue = hueSlider.value;
  const saturation = saturationSlider.value;
  const luminance = luminanceSlider.value;
  hueValue.textContent = hue;
  saturationValue.textContent = saturation + "%";
  luminanceValue.textContent = luminance + "%";
  colorHSL.textContent = `hsl(${hue}, ${saturation}%, ${luminance}%)`;
};

hueSlider.addEventListener("input", updateValues);
saturationSlider.addEventListener("input", updateValues);
luminanceSlider.addEventListener("input", updateValues);

// Appel initial pour afficher les valeurs de départ
updateValues();


