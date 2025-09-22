const fs = require('fs');

module.exports = function () {
    return {
        noColors: true,
        reportFile: 'custom-report.html',
        logs: [],

        // Inicia el reporte
        reportTaskStart (startTime, userAgents, testCount) {
            this.startTime = startTime;
            this.userAgents = userAgents;
            this.testCount = testCount;

            fs.writeFileSync(this.reportFile, `
                <html>
                  <head><title>TestCafe Report</title></head>
                  <body>
                    <h1>TestCafe Execution Report</h1>
                    <p><b>Start Time:</b> ${startTime}</p>
                    <p><b>Browsers:</b> ${userAgents.join(', ')}</p>
                    <p><b>Total tests:</b> ${testCount}</p>
                    <hr>
            `);
        },

        // Inicia cada test
        reportTestStart (name, meta) {
            fs.appendFileSync(this.reportFile, `<h2>Test: ${name}</h2>\n<ul>\n`);
        },

        // Captura resultado de cada test
        reportTestDone (name, testRunInfo) {
            const hasErr = testRunInfo.errs.length > 0;

            fs.appendFileSync(this.reportFile, `
                <li>Status: ${hasErr ? '❌ Failed' : '✅ Passed'}</li>
                <li>Duration: ${testRunInfo.durationMs} ms</li>
            `);

            // Si hubo errores, los muestra
            if (hasErr) {
                testRunInfo.errs.forEach(err => {
                    fs.appendFileSync(this.reportFile, `<li>Error: <pre>${err}</pre></li>`);
                });
            }

            // Muestra logs capturados
            if (this.logs.length > 0) {
                fs.appendFileSync(this.reportFile, `<li><b>Logs:</b><ul>`);
                this.logs.forEach(l => {
                    fs.appendFileSync(this.reportFile, `<li>${l}</li>`);
                });
                fs.appendFileSync(this.reportFile, `</ul></li>`);
                this.logs = []; // limpiar para siguiente test
            }

            fs.appendFileSync(this.reportFile, `</ul>\n`);
        },

        // Finaliza el reporte
        reportTaskDone (endTime, passed, warnings, result) {
            fs.appendFileSync(this.reportFile, `
                <hr>
                <p><b>End Time:</b> ${endTime}</p>
                <p><b>Passed:</b> ${passed}/${this.testCount}</p>
              </body>
            </html>
            `);
        },

        // Método extra: capturar logs
        addLog(message) {
            this.logs.push(message);
        }
    };
};
