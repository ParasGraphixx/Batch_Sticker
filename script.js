document.addEventListener('DOMContentLoaded', function() {
            const gridContainer = document.getElementById('gridContainer');
            const updateButton = document.getElementById('updateButton');

            function createGrid(code, productName, batchNo) {
                gridContainer.innerHTML = ''; // Clear existing grid

                const numColumns = 4;
                const numRows = 18;

                for (let row = 0; row < numRows; row++) {
                    for (let col = 0; col < numColumns; col++) {
                        const box = document.createElement('div');
                        box.classList.add('outer-box');

                        // Create text elements
                        const text1 = document.createElement('div');
                        text1.classList.add('text1');
                        text1.innerText = `${code}, ${productName}`;

                        const innerBox = document.createElement('div');
                        innerBox.classList.add('inner-box');
                        innerBox.innerText = `B.No: ${batchNo}`;

                        const text2 = document.createElement('div');
                        text2.classList.add('text2');
                        text2.innerHTML = '<i class="fas fa-phone icon"></i>8010 900 300';

                        // Create vertical lines
                        const line1 = createLine('vertical-top-left');
                        const line2 = createLine('vertical-top-right');
                        const line3 = createLine('vertical-bottom-left');
                        const line4 = createLine('vertical-bottom-right');

                        // Create horizontal lines
                        const line5 = createLine('horizontal-top-left');
                        const line6 = createLine('horizontal-top-right');
                        const line7 = createLine('horizontal-bottom-left');
                        const line8 = createLine('horizontal-bottom-right');

                        // Append lines and content to box
                        box.appendChild(text1);
                        box.appendChild(innerBox);
                        box.appendChild(text2);
                        box.appendChild(line1);
                        box.appendChild(line2);
                        box.appendChild(line3);
                        box.appendChild(line4);
                        box.appendChild(line5);
                        box.appendChild(line6);
                        box.appendChild(line7);
                        box.appendChild(line8);

                        // Append box to grid container
                        gridContainer.appendChild(box);
                    }
                }
            }

            function createLine(className) {
                const line = document.createElement('div');
                line.classList.add('line', className);
                return line;
            }

            function generateBatchCode(code, year, month) {
                const reversedYear = year.split("").reverse().join(""); // Reverse the year
                const paddedMonth = ('0' + month).slice(-2); // Pad month with leading zero if needed

                // Extract required part from code
                const extractedCode = code.substring(1); // Remove first character

                return reversedYear + paddedMonth + extractedCode;
            }

            updateButton.addEventListener('click', function() {
                const code = document.getElementById('codeInput').value;
                const productName = document.getElementById('productNameInput').value;
                const month = document.getElementById('monthSelect').value;
                const year = document.getElementById('yearSelect').value;
                const batchNo = generateBatchCode(code, year, month);

                createGrid(code, productName, batchNo);
				 document.getElementById("product-form").style.display = "none";
            });

            // Initial grid creation
            createGrid('EH250NW', 'Auto Hand Dryer', '420207H250NW');
			
        });