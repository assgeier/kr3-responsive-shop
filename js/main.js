document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => {
        const dialogId = button.dataset.modalOpen;
        const dialog = document.getElementById(dialogId);
        if (dialog) {
            dialog.showModal();
        }
    });
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", () => {
        const dialog = button.closest("dialog");
        if (dialog) {
            dialog.close();
        }
    });
});

document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});