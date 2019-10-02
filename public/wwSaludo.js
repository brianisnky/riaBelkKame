onmessage = evt => {
 postMessage(`Saludos a ${evt.data.nombre1} y a ${evt.data.nombre2}`);
};
