class NoticeManager {
    constructor() {
        this.storageKey = 'notice_dismissed_version';
        this.isHomePage = window.location.pathname === '/' || 
                         window.location.pathname === '/index.html';
        
        if (this.isHomePage) {
            this.init();
        }
    }

    async init() {
        try {
            const notice = await this.fetchNoticeConfig();
            if (!notice || !notice.enable) return;
            
            const dismissedVersion = localStorage.getItem(this.storageKey);
            if (dismissedVersion === notice.version) return;
            
            this.createNoticeElement(notice);
        } catch (error) {
            console.error('Failed to initialize notice:', error);
        }
    }

    async fetchNoticeConfig() {
        try {
            const response = await fetch('/notice.json');
            if (!response.ok) throw new Error('Failed to fetch notice config');
            return await response.json();
        } catch (error) {
            console.error('Error loading notice config:', error);
            return null;
        }
    }

    createNoticeElement(notice) {
        const overlay = document.createElement('div');
        overlay.className = 'notice-overlay';
        
        overlay.innerHTML = `
            <div class="notice-container">
                <div class="notice-header">
                    <h2 class="notice-title">${this.escapeHtml(notice.title)}</h2>
                </div>
                <div class="notice-content">
                    ${this.escapeHtml(notice.content)}
                </div>
                <div class="notice-footer">
                    <button class="notice-btn notice-btn-secondary" data-action="never-show">不再提示</button>
                    <button class="notice-btn notice-btn-primary" data-action="close">好的</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        
        setTimeout(() => overlay.classList.add('show'), 10);

        this.bindEvents(overlay, notice.version);
    }

    bindEvents(overlay, version) {
        const close = () => {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 300);
        };

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) close();
        });
        
        overlay.querySelector('[data-action="close"]').addEventListener('click', close);
        
        overlay.querySelector('[data-action="never-show"]').addEventListener('click', () => {
            localStorage.setItem(this.storageKey, version);
            close();
        });
    }

    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new NoticeManager();
});