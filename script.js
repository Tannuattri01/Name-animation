function displayName() {
    const nameInput = document.getElementById('nameInput');
    const nameDisplay = document.getElementById('nameDisplay');
    
    
    nameDisplay.innerHTML = '';

    if (nameInput.value.trim()) {
      
      const nameText = document.createElement('div');
      nameText.innerText = nameInput.value;
      nameText.style.fontFamily = 'cursive';
      nameDisplay.appendChild(nameText);

      
      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove';
      removeButton.className = 'remove-button';
      removeButton.onclick = function () {
        nameDisplay.classList.add('hidden');
        setTimeout(() => {
          nameDisplay.innerHTML = '';
          nameDisplay.classList.remove('hidden');
        }, 500);
      };
      nameDisplay.appendChild(removeButton);
    }
  }