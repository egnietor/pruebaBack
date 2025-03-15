fetch('test.json')
    .then(response => response.json())
    .then((data) => {
        console.log("Datos JSON recibidos:", data); // 👈 Debería imprimir el objeto JSON
        
        // Guardar los datos en una variable global (para probar en consola)
        window.testData = data;

        const source = document.getElementById('template')?.innerHTML;
        if (!source) {
            console.error("Error: No se encontró la plantilla Handlebars.");
            return;
        }

        const template = Handlebars.compile(source);
        const html = template(data);

        console.log("HTML generado:", html);
        document.getElementById('content').innerHTML = html;
    })
    .catch(error => console.error('Error cargando test.json:', error));