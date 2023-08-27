

  $(document).ready(function() {
    // Handle form submission
    $("#courseForm").submit(function(event) {
      event.preventDefault();
      
      // Get form values
      var courseName = $("#courseName").val();
      var price = $("#price").val();
      var instructor = $("#instructor").val();
      var description = $("#description").val();
      
      // Create a new row in the table
      var newRow = $("<tr>");
      newRow.append("<td>" + courseName + "</td>");
      newRow.append("<td>" + price + "</td>");
      newRow.append("<td>" + instructor + "</td>");
      newRow.append("<td>" + description + "</td>");
      newRow.append('<td><button class="btn btn-danger deleteBtn">Delete</button></td>');
      
      // Add the new row to the table
      $("#courseTable tbody").append(newRow);
      
      // Clear form values
      $("#courseName").val("");
      $("#price").val("");
      $("#instructor").val("");
      $("#description").val("");
    });
    
    // Handle delete button click
    $(document).on("click", ".deleteBtn", function() {
      $(this).closest("tr").remove();
    });
  });
