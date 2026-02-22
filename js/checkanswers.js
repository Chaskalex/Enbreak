(function () {

    // Inject styles
    if (!document.getElementById('enbreak-feedback-popup-styles')) {
        const style = document.createElement('style');
        style.id = 'enbreak-feedback-popup-styles';
        style.textContent = `
            .feedback-popup-overlay {
                position: fixed; top: 0; left: 0;
                width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex; align-items: center; justify-content: center;
                z-index: 10000;
                opacity: 0; visibility: hidden;
                transition: all 0.3s ease;
            }
            .feedback-popup-overlay.show { opacity: 1; visibility: visible; }
            .feedback-popup {
                background: #ffffff;
                border-radius: 16px;
                padding: 32px;
                max-width: 400px; width: 90%;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                text-align: center;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            }
            .feedback-popup-overlay.show .feedback-popup { transform: scale(1); }
            .feedback-popup-icon { font-size: 40px; margin-bottom: 16px; }
            .feedback-popup-icon.success { color: #16a34a; }
            .feedback-popup-icon.good    { color: #ea580c; }
            .feedback-popup-icon.partial { color: #ea580c; }
            .feedback-popup h3 {
                font-family: 'Rubik', sans-serif;
                font-size: 18px; font-weight: 700;
                color: #1f2937; margin: 0 0 12px 0;
            }
            .feedback-popup p {
                font-family: 'Inter', sans-serif;
                font-size: 15px; color: #6b7280;
                margin: 0 0 24px 0;
            }
            .feedback-popup-close {
                display: inline-flex; align-items: center; gap: 8px;
                padding: 12px 32px;
                background: #0a1e42; border: none; border-radius: 10px;
                font-family: 'Inter', sans-serif;
                font-size: 14px; font-weight: 600; color: #ffffff;
                cursor: pointer; transition: all 0.2s;
            }
            .feedback-popup-close:hover { background: #1e3a5f; }
        `;
        document.head.appendChild(style);
    }

    // Inject HTML
    if (!document.getElementById('enbreak-feedback-popup-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'enbreak-feedback-popup-overlay';
        overlay.className = 'feedback-popup-overlay';
        overlay.innerHTML = `
            <div class="feedback-popup">
                <div class="feedback-popup-icon"></div>
                <h3></h3>
                <p></p>
                <button class="feedback-popup-close">Close</button>
            </div>
        `;
        document.body.appendChild(overlay);

        // Close on button click
        overlay.querySelector('.feedback-popup-close').addEventListener('click', () => {
            overlay.classList.remove('show');
        });

        // Close on overlay background click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.classList.remove('show');
        });
    }

    // Global function callable from any page
    window.showFeedbackPopup = function (correct, total) {
        const overlay   = document.getElementById('enbreak-feedback-popup-overlay');
        const icon      = overlay.querySelector('.feedback-popup-icon');
        const title     = overlay.querySelector('h3');
        const message   = overlay.querySelector('p');

        const percentage = total > 0 ? (correct / total) * 100 : 0;

        if (correct === total) {
            icon.innerHTML  = '<i class="fa-solid fa-circle-check"></i>';
            icon.className  = 'feedback-popup-icon success';
            title.textContent = 'Perfect!';
        } else if (percentage > 70) {
            icon.innerHTML  = '<i class="fa-solid fa-thumbs-up"></i>';
            icon.className  = 'feedback-popup-icon good';
            title.textContent = 'Good!';
        } else {
            icon.innerHTML  = '<i class="fa-solid fa-circle-exclamation"></i>';
            icon.className  = 'feedback-popup-icon partial';
            title.textContent = 'Keep Practicing!';
        }

        message.textContent = `${correct} out of ${total} correct`;
        overlay.classList.add('show');
    };

})();