$(function() {
    // listen for when a form is submited 
    $('#js-shopping-list-form').submit(event => {
        // prevent form from submitting
        event.preventDefault();
        // store what is entered 
        const shoppingListEntry = $(this).find('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');
        // append shopping list
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${shoppingListEntry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    })

})

function deleteItem () {
    // listen for delete button pushed
    $ ('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        // remove list item
        $(this).closest('li').remove();
    });
};
$(deleteItem);

function checkItem () {
    //listen for check button pushed
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        // toggle css class of checked item
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
}
$(checkItem);

