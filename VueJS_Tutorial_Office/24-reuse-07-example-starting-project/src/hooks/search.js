import { ref, computed, watch } from 'vue';

export default function userSearch(items) {
    const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableItems = computed(function () {
        let filteredItems = [];
        if (activeSearchTerm.value) {
            filteredItems = items.filter((usr) =>
                usr.fullName.includes(activeSearchTerm.value)
            );
        } else if (items) {
            filteredItems = items;
        }
        return filteredItems;
    });

    watch(enteredSearchTerm, function (newValue) {
        setTimeout(() => {
            if (newValue === enteredSearchTerm.value) {
                activeSearchTerm.value = newValue;
            }
        }, 300);
    });

    function updateSearch(val) {
        enteredSearchTerm.value = val;
    }
}