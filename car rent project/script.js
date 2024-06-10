document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, { format: 'yyyy-mm-dd' });

   
    var budgetSlider = document.getElementById('budget');
    var budgetValue = document.getElementById('budget-value');
    budgetValue.textContent = budgetSlider.value;

    budgetSlider.addEventListener('input', function() {
      budgetValue.textContent = budgetSlider.value;
    });
  });

    $(document).ready(function(){
      $('.sidenav').sidenav();
    });