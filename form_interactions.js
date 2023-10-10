const outOfStateCheckbox = document.getElementById('out-of-state-checkbox');
const cosignerCheckbox = document.getElementById('cosigner-checkbox');
const nameOfCosignerInput = document.getElementById('name-of-cosigner');
const cosignerOccupationInput = document.getElementById('cosigner-occupation');

outOfStateCheckbox.addEventListener('change', () => {
  nameOfCosignerInput.disabled = outOfStateCheckbox.checked;
  cosignerOccupationInput.disabled = outOfStateCheckbox.checked;
});

cosignerCheckbox.addEventListener('change', () => {
  nameOfCosignerInput.disabled = cosignerCheckbox.checked || outOfStateCheckbox.checked;
  cosignerOccupationInput.disabled = cosignerCheckbox.checked || outOfStateCheckbox.checked;
});
