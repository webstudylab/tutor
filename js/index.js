$(document).on("click", ".open-AddItemDialog", function () {
    var myItemId = $(this).data('id');
    $(".modal-body #itemId").val( myItemId );
    // As pointed out in comments, 
    // it is superfluous to have to manually call the modal.
    // $('#addBookDialog').modal('show');
});