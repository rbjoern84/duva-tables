$(document).ready(function() {
  var $filterForm = $('#filterForm');
  var $filterGroups = $('#filterForm .dropdown-trigger');
  var $filters = $('#filterForm .filter li');
  var $resetBtn = $('#resetFilter');
  var $filteredByWrapper = $('#filteredBy');
  var $tableRows = $('.data-table tbody tr:not(.summary)');

  // Show selected filter under table heading
  function showActiveFilters(){
    $filteredByWrapper.empty();
    var $activeFilter = $filters.filter('.active');
    if ($activeFilter.length > 0) {
      $filteredByWrapper.prepend('Gefiltert nach: ')
      $activeFilter.each(function(){
        $filteredByWrapper.append('<span>' + $(this).text() + '</span>');
      });
    }
  }

  // Open and close filter panel
  $filterGroups.click(function(){
    $(this).parent().toggleClass('open');
  });

  // Mark/unmark filter as "active"
  $filters.click(function(){
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  });

  // Unmark all filters
  $resetBtn.click(function(event){
    event.preventDefault();
    $filters.removeClass('active');
    return false;
  });

  // Show selected filters under table caption
  $filterForm.on('submit', function(event){
    event.preventDefault();
    showActiveFilters();
  });

  // Mark table rows
  $tableRows.click(function(){
    $(this).toggleClass('active');
  });
});
