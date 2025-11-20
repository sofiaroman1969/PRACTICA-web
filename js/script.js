console.log("Sitio cargado correctamente");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, textarea");
    const mensaje = form.querySelector("textarea");

    const contador = document.createElement("small");
    contador.style.color = "#555";
    mensaje.insertAdjacentElement("afterend", contador);

    mensaje.addEventListener("input", () => {
        contador.textContent = `${mensaje.value.length}/300 caracteres`;
    });

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#4CAF50";
            }
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let valido = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valido = false;
                input.style.borderColor = "red";
            }
        });

        if (!valido) {
            alert("Por favor llena todos los campos.");
            return;
        }

        form.style.transition = "0.3s";
        form.style.transform = "scale(1.02)";
        setTimeout(() => {
            form.style.transform = "scale(1)";
        }, 200);

        alert("¡Gracias por tu mensaje!");

        console.log("Formulario enviado:", {
            nombre: form.nombre?.value,
            email: form.email?.value,
            mensaje: form.mensaje?.value,
        });

        form.reset();
        contador.textContent = "0/300 caracteres";
        inputs.forEach(input => input.style.borderColor = "#ccc");
    });
});
