        function uploadFiles() {
            var files = document.getElementById("file-input").files;
            var output = document.getElementById("output");
            if (!output) {
                console.error("Could not find output element");
                return;
            }
            output.innerHTML = "Uploaded Files:<br>";
            for (var i = 0; i < files.length; i++) {
                output.innerHTML += files[i].name + "<br>";
                loadFile(files[i], output);
            }
        }

        function loadFile(file, output) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var code = "<br><br>";
                code += "<strong>" + file.name + "</strong><br>";
                code += "<pre>" + escapeHtml(e.target.result) + "</pre>";
                output.innerHTML += code;
            }
            reader.readAsText(file);
        }

        // Function to escape HTML special characters
        function escapeHtml(unsafe) {
            if (unsafe && unsafe.replace) {
                return unsafe
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }
            return '';
        }