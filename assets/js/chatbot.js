const chatbot = {
    greetings: [
        'سلام! به xQuery خوش آمدید. چطور می‌تونم کمکتون کنم؟',
        'سلام! من دستیار هوشمند xQuery هستم. در خدمتم.',
        'درود! خوشحالم که می‌تونم کمکتون کنم. چه کاری از دستم برمیاد؟',
        'سلام و وقت بخیر! من اینجام تا به سوالات شما پاسخ بدم'
    ], 
    
    responses: {
        'سلام|درود|خوبی|های|hi|hello': [
            'سلام! چطور می‌تونم کمکتون کنم؟',
            'درود! در خدمتم',
            'سلام! خوشحالم که با من تماس گرفتید',
            'به به! چه عجب! خوش اومدید'
        ],

        'قیمت|هزینه|پلن|تعرفه|پکیج': [
            'قیمت خدمات ما بسته به نوع سرویس متفاوت است. برای اطلاعات بیشتر می‌تونید از طریق تلگرام با ما در ارتباط باشید.',
            'ما پلن‌های متنوعی داریم. برای مشاوره رایگان با ما تماس بگیرید.',
        ],

        'پشتیبانی|تماس|ارتباط|تلگرام|ایمیل': [
            'پشتیبانی ما به صورت 24/7 در خدمت شماست. می‌تونید از طریق تلگرام یا ایمیل با ما در ارتباط باشید.',
            'تیم پشتیبانی ما همیشه آماده کمک به شماست.',
            'برای ارتباط سریع‌تر می‌تونید به کانال تلگرام ما مراجعه کنید: @xQueryTeam',
        ],

        'خدمات|سرویس|امکانات|قابلیت': [
            'ما خدمات متنوعی از جمله اتوماسیون و بهینه‌سازی ارائه می‌دیم.',
            'سرویس‌های ما شامل توسعه نرم‌افزار، هوش مصنوعی و اتوماسیون می‌شه.',
            'در xQuery، ما روی هوش مصنوعی، اتوماسیون و بهینه‌سازی فرآیندها تمرکز داریم',
            'خدمات اصلی ما: توسعه نرم‌افزار، هوش مصنوعی، اتوماسیون، پردازش داده و مشاوره'
        ],

        'امنیت|حریم خصوصی|رمزنگاری|حفاظت': [
            'امنیت داده‌های شما برای ما در اولویت است. ما از پیشرفته‌ترین روش‌های رمزنگاری استفاده می‌کنیم.',
            'تمام اطلاعات شما به صورت رمزنگاری شده ذخیره و منتقل می‌شه.',
            'ما از پروتکل‌های امنیتی پیشرفته برای حفاظت از داده‌های شما استفاده می‌کنیم',
            'داده‌های شما با استانداردهای جهانی رمزنگاری محافظت می‌شن'
        ],

        'زمان|مدت|طول|پروژه': [
            'زمان اجرای پروژه به پیچیدگی و حجم کار بستگی داره. معمولاً بین 2 تا 8 هفته.',
            'بعد از بررسی نیازهای شما، زمان دقیق پروژه رو اعلام می‌کنیم.',
            'برای دریافت تخمین زمانی دقیق، می‌تونیم یه جلسه مشاوره رایگان داشته باشیم',
            'هر پروژه زمان خودش رو داره، اما ما همیشه سعی می‌کنیم سریع‌ترین زمان ممکن رو ارائه بدیم'
        ],

        'تخفیف|اقساط|قسط|تخفیفات': [
            'ما برای پروژه‌های بلندمدت تخفیف‌های ویژه در نظر می‌گیریم',
        ],

        'تکنولوژی|فناوری|تک|هوش مصنوعی|ai': [
            'ما از جدیدترین تکنولوژی‌های روز دنیا استفاده می‌کنیم',
            'ما از فریم‌ورک‌های مدرن برای توسعه استفاده می‌کنیم'
        ],

        'مشاوره|راهنمایی|کمک': [
            'برای دریافت مشاوره رایگان می‌تونید از طریق تلگرام با ما در ارتباط باشید',
            'کارشناسان ما آماده راهنمایی شما هستند',
            'ما یک جلسه مشاوره رایگان برای بررسی نیازهای شما ارائه می‌دیم',
            'خوشحال می‌شیم در جلسه مشاوره، راهکارهای مناسب رو بهتون معرفی کنیم'
        ],

        'گارانتی|ضمانت|پشتیبانی|ساپورت': [
            'تمام خدمات ما شامل 6 ماه گارانتی و پشتیبانی رایگان هستن',
            'ما تا 3 سال خدمات پشتیبانی ارائه می‌دیم',
            'کیفیت کار ما تضمین شده است',
            'پشتیبانی 12/7 ما همیشه در خدمت شماست'
        ],

        'default': [
            'متوجه نشدم. می‌تونید سوالتون رو به شکل دیگه‌ای بپرسید؟',
            'برای راهنمایی بیشتر می‌تونید با پشتیبانی ما تماس بگیرید.',
            'سوال شما رو کامل متوجه نشدم. می‌تونید واضح‌تر بپرسید؟',
            'عذر می‌خوام، می‌تونید سوالتون رو به شکل دیگه‌ای مطرح کنید؟',
            'برای پاسخ دقیق‌تر، لطفاً سوالتون رو مشخص‌تر بپرسید'
        ]
    },

    findResponse(input) {
        input = input.trim().toLowerCase();
        
        // Check each keyword group
        for (let keyGroup in this.responses) {
            const keywords = keyGroup.split('|');
            if (keywords.some(keyword => input.includes(keyword))) {
                const responses = this.responses[keyGroup];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }

        // Check for similar words using basic fuzzy matching
        for (let keyGroup in this.responses) {
            const keywords = keyGroup.split('|');
            if (keywords.some(keyword => this.isSimilar(input, keyword))) {
                const responses = this.responses[keyGroup];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }

        return this.responses.default[Math.floor(Math.random() * this.responses.default.length)];
    },

    isSimilar(str1, str2) {
        // Simple Levenshtein distance implementation
        if (Math.abs(str1.length - str2.length) > 3) return false;
        
        const matrix = Array(str2.length + 1).fill().map(() => Array(str1.length + 1).fill(0));
        
        for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
        for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
        
        for (let j = 1; j <= str2.length; j++) {
            for (let i = 1; i <= str1.length; i++) {
                const cost = str1[i-1] === str2[j-1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j-1][i] + 1,
                    matrix[j][i-1] + 1,
                    matrix[j-1][i-1] + cost
                );
            }
        }
        
        // Return true if the distance is less than 2 (allowing for small typos)
        return matrix[str2.length][str1.length] < 2;
    },

    // Add new methods for managing chat history
    saveToStorage(message, isBot) {
        const history = this.loadFromStorage();
        // Add timestamp to make each message unique
        const timestamp = new Date().getTime();
        history.push({ 
            message, 
            isBot, 
            timestamp,
            id: `${message}-${isBot}-${timestamp}` // Add unique ID
        });
        localStorage.setItem('xquery_chat_history', JSON.stringify(history));
    },

    loadFromStorage() {
        const history = localStorage.getItem('xquery_chat_history');
        if (!history) return [];
        
        // Parse history and ensure no duplicates
        const parsed = JSON.parse(history);
        const uniqueMessages = [];
        const seen = new Set();
        
        parsed.forEach(item => {
            // Create a key that includes both message and response
            const key = item.id || `${item.message}-${item.isBot}-${item.timestamp}`;
            if (!seen.has(key)) {
                seen.add(key);
                uniqueMessages.push(item);
            }
        });
        
        return uniqueMessages;
    },

    clearHistory() {
        if (confirm('آیا از پاک کردن تاریخچه چت مطمئن هستید؟')) {
            localStorage.removeItem('xquery_chat_history');
            const messagesDiv = document.querySelector('.chat-messages');
            messagesDiv.innerHTML = '';
            // Add initial greeting after clearing
            setTimeout(() => {
                this.addMessage(this.greetings[Math.floor(Math.random() * this.greetings.length)], true);
            }, 500);
        }
    },

    addMessage(message, isBot = false) {
        const messagesDiv = document.querySelector('.chat-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex items-end gap-x-2 ${isBot ? '' : 'justify-end'} opacity-0 transform translate-y-2`;
        
        messageDiv.innerHTML = isBot ? `
            <div class="flex flex-col gap-y-1 max-w-[75%] overflow-hidden">
                <div class="rounded-2xl rounded-br-none bg-black/10 dark:bg-white/10 backdrop-blur-sm p-3 shadow-sm break-words">
                    <p class="text-sm text-primary/90 dark:text-white/90 leading-relaxed whitespace-pre-wrap hyphens-auto overflow-wrap-anywhere">${message}</p>
                </div>
                <span class="text-[10px] text-primary/50 dark:text-white/50 px-1">
                    ${new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        ` : `
            <div class="flex flex-col gap-y-1 items-end max-w-[75%] overflow-hidden">
                <div class="rounded-2xl rounded-bl-none bg-gradient-to-r from-primary to-primary-light dark:from-forest-light dark:to-forest-light p-3 shadow-sm break-words">
                    <p class="text-sm text-white leading-relaxed whitespace-pre-wrap hyphens-auto overflow-wrap-anywhere">${message}</p>
                </div>
                <span class="text-[10px] text-primary/50 dark:text-white/50 px-1">
                    ${new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        `;
        
        messagesDiv.appendChild(messageDiv);
        
        // Only save new messages to storage, not loaded history
        if (!this.isLoadingHistory) {
            this.saveToStorage(message, isBot);
        }
        
        // Animate message appearance
        requestAnimationFrame(() => {
            messageDiv.classList.add('transition-all', 'duration-300');
            requestAnimationFrame(() => {
                messageDiv.classList.remove('opacity-0', 'translate-y-2');
            });
        });

        // Smooth scroll to bottom
        messagesDiv.scrollTo({
            top: messagesDiv.scrollHeight,
            behavior: 'smooth'
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let isTyping = false;
    const form = document.querySelector('.chat-form');
    const input = form.querySelector('input');
    
    // Clear messages div first
    const messagesDiv = document.querySelector('.chat-messages');
    messagesDiv.innerHTML = '';

    // Load chat history
    const history = chatbot.loadFromStorage();
    chatbot.isLoadingHistory = true;
    if (history.length === 0) {
        // Send initial greeting if no history exists
        setTimeout(() => {
            chatbot.addMessage(chatbot.greetings[Math.floor(Math.random() * chatbot.greetings.length)], true);
            messagesDiv.scrollTo({
                top: messagesDiv.scrollHeight,
                behavior: 'smooth'
            });
        }, 500);
    } else {
        // Restore chat history
        history.forEach(item => {
            chatbot.addMessage(item.message, item.isBot);
        });
        requestAnimationFrame(() => {
            messagesDiv.scrollTo({
                top: messagesDiv.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
    chatbot.isLoadingHistory = false;

    // Add event listener for chat window opening
    const chatButton = document.querySelector('[x-data="{ open: false }"] button');
    chatButton.addEventListener('click', () => {
        // Small delay to ensure chat window is visible
        setTimeout(() => {
            const messagesDiv = document.querySelector('.chat-messages');
            messagesDiv.scrollTo({
                top: messagesDiv.scrollHeight,
                behavior: 'smooth'
            });
        }, 100);
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const message = input.value.trim();
        if (!message || isTyping) return;

        // Add user message
        chatbot.addMessage(message, false);
        input.value = '';

        // Show typing indicator
        isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'flex flex-col gap-y-1 max-w-[75%] overflow-hidden';
        typingDiv.innerHTML = `
            <div class="flex flex-col gap-y-1 max-w-[75%] overflow-hidden">
                <div class="rounded-2xl rounded-bl-none bg-white/10 dark:bg-forest-light/10 backdrop-blur-sm p-2 shadow-sm">
                    <div class="flex gap-2">
                        <div class="w-1.5 h-1.5 rounded-full bg-primary/70 dark:bg-white/70 animate-pulse"></div>
                        <div class="w-1.5 h-1.5 rounded-full bg-primary/70 dark:bg-white/70 animate-pulse" style="animation-delay: 0.3s"></div>
                        <div class="w-1.5 h-1.5 rounded-full bg-primary/70 dark:bg-white/70 animate-pulse" style="animation-delay: 0.6s"></div>
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.chat-messages').appendChild(typingDiv);

        // Add bot response after a delay
        setTimeout(() => {
            typingDiv.remove();
            const response = chatbot.findResponse(message);
            chatbot.addMessage(response, true);
            isTyping = false;
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    });

    // Handle input placeholder animation
    input.addEventListener('focus', () => {
        input.placeholder = 'پیام خود را بنویسید...';
    });

    input.addEventListener('blur', () => {
        input.placeholder = 'برای شروع گفتگو پیام بنویسید...';
    });
}); 