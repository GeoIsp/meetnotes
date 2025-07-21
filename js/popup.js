document.addEventListener('DOMContentLoaded', () => {
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const status = document.getElementById('status');

  step1.addEventListener('click', () => {
    status.textContent = 'Шаг 1 выполнен';
    step2.disabled = false;
  });

  step2.addEventListener('click', () => {
    status.textContent = 'Шаг 2 выполнен';
    step3.disabled = false;
  });

  step3.addEventListener('click', () => {
    status.textContent = 'Идёт запись встречи...';
  });
});