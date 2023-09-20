function toggleItem(item) {
    item.classList.toggle('selected');
}

function transferItems(fromListId, toListId) {
    const fromList = document.getElementById(fromListId);
    const toList = document.getElementById(toListId);

    const selectedItems = fromList.querySelectorAll('.selected');
    for (const item of selectedItems) {
        item.classList.remove('selected');
        toList.appendChild(item);
    }
}