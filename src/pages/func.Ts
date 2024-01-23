const lines = ["Welcome To AURA", "Best AIML CLUB"];
                let lineIndex = 0;
                let wordIndex = 0;
                let charIndex = 0;
                let intervalId;

                function typeText() {
                    const currentLine = lines[lineIndex];
                    const words = currentLine.split(" ");

                    if (charIndex < words[wordIndex].length) {
                        document.getElementById(
                            `line${lineIndex + 1}`,
                        ).textContent += words[wordIndex][charIndex];
                        charIndex++;
                    } else {
                        document.getElementById(
                            `line${lineIndex + 1}`,
                        ).textContent += " "; // Add space between words
                        charIndex = 0;
                        wordIndex++;
                    }

                    if (wordIndex >= words.length) {
                        lineIndex++;
                        wordIndex = 0;
                        if (lineIndex >= lines.length) {
                            clearInterval(intervalId);
                        }
                    }
                }

                // Set an interval to call the typeText function
                intervalId = setInterval(typeText, 100); // Adjust the interval as needed