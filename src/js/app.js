class App {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async init() {
        try {
            const data = await fetchData(this.apiUrl);
            validateData(data);
            this.renderTemplate(data);
        } catch (error) {
            console.error('Error initializing app:', error);
        }
    }

    renderTemplate(data) {
        const source = document.getElementById('template')?.innerHTML;
        if (!source) {
            console.error("Error: No se encontró la plantilla Handlebars.");
            return;
        }

        const template = Handlebars.compile(source);
        const html = template(data);
        document.getElementById('content').innerHTML = html;
    }
}

const app = new App('test.json');
app.init();

document.addEventListener('click', function(event) {
    if (event.target.closest('.audio-player button')) {
        const audio = new Audio('path/to/audio/file.mp3');
        audio.play();
    }
});