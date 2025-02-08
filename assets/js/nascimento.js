const selectElement = document.getElementById('dianascimento');

    selectElement.addEventListener('click', function() {
        const primeiraOpcao = selectElement.options[0];
        if (primeiraOpcao.value === '') {
            selectElement.removeChild(primeiraOpcao);
        }
    });



    const selElement = document.getElementById('mesnascimento');

    selElement.addEventListener('click', function() {
        const firstOption = selElement.options[0];
        if (firstOption.value === '') {
            selElement.removeChild(firstOption);
        }
    });
    
    const selectedElement = document.getElementById('anonascimento');

    selectedElement.addEventListener('click', function() {
        const priOpcao = selectedElement.options[0];
        if (priOpcao.value === '') {
            selectedElement.removeChild(priOpcao);
        }
    });