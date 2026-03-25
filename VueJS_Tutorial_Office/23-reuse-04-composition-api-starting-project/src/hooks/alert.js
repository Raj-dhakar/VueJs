import { ref } from 'vue';

export default function useAlert(startingvisibility = false) {
    const alertIsVisible = ref(startingvisibility);

    function showAlert() {
        alertIsVisible.value = true;
    }
    function hideAlert() {
        alertIsVisible.value = false;
    }

    return [
        alertIsVisible,
        showAlert,
        hideAlert,
    ];
}