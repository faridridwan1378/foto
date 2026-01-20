/**
 * Varsha Fruits & Goods
 * Mobile-First Store Application
 * Version 2.0
 */

// ==================== DATA STORE ====================

const Store = {
    // Orders
    orders: [],
    
    // Customers
    customers: [],
    
    // Admins
    admins: [],
    
    // Referral Codes
    referralCodes: [],
    
    // Store Profile
    profile: {
        logo: '🍎',
        logoUrl: '',
        name: 'Varsha',
        tagline: 'Fruits & Goods',
        whatsapp: '81234567890',
        email: 'hello@varshafruits.com',
        instagram: 'varshafruits',
        bank: 'BCA',
        accountNumber: '1234567890',
        accountName: 'Varsha Fruits',
        address: 'Jl. Buah Segar No. 123',
        city: 'Jakarta',
        postal: '12345',
        mapsLink: '',
        hours: {
            weekdayOpen: '07:00',
            weekdayClose: '21:00',
            saturdayOpen: '08:00',
            saturdayClose: '20:00',
            sundayOpen: '09:00',
            sundayClose: '18:00'
        }
    },

    // Products
    products: [
        { id: 1, name: "Apel Fuji Premium", category: "buah", price: 35000, originalPrice: 45000, image: "🍎", imageUrl: "", stock: 50, unit: "kg", description: "Apel Fuji segar dari Jepang", rating: 4.8 },
        { id: 2, name: "Jeruk Mandarin", category: "buah", price: 28000, originalPrice: 32000, image: "🍊", imageUrl: "", stock: 75, unit: "kg", description: "Jeruk manis tanpa biji", rating: 4.7 },
        { id: 3, name: "Pisang Cavendish", category: "buah", price: 18000, originalPrice: 20000, image: "🍌", imageUrl: "", stock: 100, unit: "sisir", description: "Pisang import berkualitas", rating: 4.6 },
        { id: 4, name: "Anggur Red Globe", category: "buah", price: 55000, originalPrice: 65000, image: "🍇", imageUrl: "", stock: 30, unit: "kg", description: "Anggur merah premium", rating: 4.9 },
        { id: 5, name: "Mangga Harum Manis", category: "buah", price: 32000, originalPrice: 38000, image: "🥭", imageUrl: "", stock: 45, unit: "kg", description: "Mangga lokal terbaik", rating: 4.8 },
        { id: 6, name: "Semangka Merah", category: "buah", price: 15000, originalPrice: 18000, image: "🍉", imageUrl: "", stock: 25, unit: "kg", description: "Semangka segar dan manis", rating: 4.5 },
        { id: 7, name: "Strawberry Fresh", category: "buah", price: 45000, originalPrice: 55000, image: "🍓", imageUrl: "", stock: 40, unit: "pack", description: "Strawberry segar dari Bandung", rating: 4.7 },
        { id: 8, name: "Melon Honey Dew", category: "buah", price: 25000, originalPrice: 30000, image: "🍈", imageUrl: "", stock: 35, unit: "kg", description: "Melon manis dan segar", rating: 4.6 },
        { id: 9, name: "Madu Hutan Asli", category: "goods", price: 85000, originalPrice: 100000, image: "🍯", imageUrl: "", stock: 20, unit: "botol", description: "Madu murni dari hutan", rating: 4.9 },
        { id: 10, name: "Selai Strawberry", category: "goods", price: 35000, originalPrice: 42000, image: "🫙", imageUrl: "", stock: 45, unit: "jar", description: "Selai buah asli", rating: 4.5 },
        { id: 11, name: "Kurma Medjool", category: "goods", price: 120000, originalPrice: 150000, image: "🌴", imageUrl: "", stock: 15, unit: "pack", description: "Kurma premium Timur Tengah", rating: 4.9 },
        { id: 12, name: "Jus Jeruk Segar", category: "minuman", price: 15000, originalPrice: 18000, image: "🧃", imageUrl: "", stock: 100, unit: "botol", description: "Jus jeruk tanpa pengawet", rating: 4.6 },
        { id: 13, name: "Smoothie Mix", category: "minuman", price: 25000, originalPrice: 30000, image: "🥤", imageUrl: "", stock: 50, unit: "cup", description: "Campuran buah segar", rating: 4.7 },
        { id: 14, name: "Kelapa Muda", category: "minuman", price: 12000, originalPrice: 15000, image: "🥥", imageUrl: "", stock: 80, unit: "buah", description: "Kelapa muda segar", rating: 4.8 }
    ],

    // Categories
    categories: [
        { id: 'all', name: 'Semua', icon: '🏪' },
        { id: 'buah', name: 'Buah', icon: '🍎' },
        { id: 'goods', name: 'Olahan', icon: '🍯' },
        { id: 'minuman', name: 'Minuman', icon: '🥤' }
    ],

    // Cart
    cart: [],

    // Emoji options
    emojis: [
        '🍎', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐',
        '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍐',
        '🍏', '🥑', '🍯', '🫙', '🧃', '🥤', '🍹', '🧋',
        '🌴', '🥜', '🌰', '🍫', '🍪', '🧁', '🏪', '🛒'
    ],
    
    // Avatar options for customers
    avatars: [
        '👤', '👩', '👨', '👧', '👦', '👵', '👴', '🧑',
        '👩‍🦰', '👨‍🦰', '👩‍🦱', '👨‍🦱', '👩‍🦳', '👨‍🦳', '🧔', '👸',
        '🤴', '👮', '👷', '💼', '🏃', '🧘', '🛒', '🏠'
    ]
};

// ==================== STATE ====================

const State = {
    currentPage: 'home',
    currentCategory: 'all',
    searchQuery: '',
    editingProductId: null,
    deleteProductId: null,
    currentOrderFilter: 'all',
    viewingOrderId: null,
    loggedInUser: null, // Current logged-in customer
    loggedInAdmin: null // Current logged-in admin
};

// Admin avatars
const adminAvatars = [
    '👨‍💼', '👩‍💼', '🧑‍💼', '👨‍💻', '👩‍💻', '🧑‍💻', '👨‍🔧', '👩‍🔧',
    '🧔', '👴', '👵', '🧓', '👤', '🕵️', '💼', '🏪'
];

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    initApp();
    initEventListeners();
});

function initApp() {
    applyStoreProfile();
    renderCategories();
    renderProducts();
    renderKatalogProducts();
    renderCart();
    updateCartBadges();
    updateStats();
    renderEmojiPickers();
    renderAvatarPicker();
    renderRegisterAvatarPicker();
    renderAdminAvatarPicker();
    updateOrdersBadge();
    updateCustomersBadge();
    checkLoginStatus();
    checkAdminLoginStatus();
}

function loadFromStorage() {
    // Load profile
    const savedProfile = localStorage.getItem('varsha_profile');
    if (savedProfile) {
        Store.profile = { ...Store.profile, ...JSON.parse(savedProfile) };
    }
    
    // Load products
    const savedProducts = localStorage.getItem('varsha_products');
    if (savedProducts) {
        Store.products = JSON.parse(savedProducts);
    }
    
    // Load cart
    const savedCart = localStorage.getItem('varsha_cart');
    if (savedCart) {
        Store.cart = JSON.parse(savedCart);
    }
    
    // Load orders
    const savedOrders = localStorage.getItem('varsha_orders');
    if (savedOrders) {
        Store.orders = JSON.parse(savedOrders);
    }
    
    // Load customers
    const savedCustomers = localStorage.getItem('varsha_customers');
    if (savedCustomers) {
        Store.customers = JSON.parse(savedCustomers);
    }
    
    // Load admins
    const savedAdmins = localStorage.getItem('varsha_admins');
    if (savedAdmins) {
        Store.admins = JSON.parse(savedAdmins);
    }
    
    // Load referral codes
    const savedReferralCodes = localStorage.getItem('varsha_referral_codes');
    if (savedReferralCodes) {
        Store.referralCodes = JSON.parse(savedReferralCodes);
    }
}

function saveToStorage() {
    localStorage.setItem('varsha_profile', JSON.stringify(Store.profile));
    localStorage.setItem('varsha_products', JSON.stringify(Store.products));
    localStorage.setItem('varsha_cart', JSON.stringify(Store.cart));
    localStorage.setItem('varsha_orders', JSON.stringify(Store.orders));
    localStorage.setItem('varsha_customers', JSON.stringify(Store.customers));
    localStorage.setItem('varsha_admins', JSON.stringify(Store.admins));
    localStorage.setItem('varsha_referral_codes', JSON.stringify(Store.referralCodes));
}

// ==================== EVENT LISTENERS ====================

function initEventListeners() {
    // Search inputs
    const searchInput = document.getElementById('search-input');
    const katalogSearch = document.getElementById('katalog-search');
    const adminSearch = document.getElementById('admin-search');
    
    searchInput?.addEventListener('input', debounce((e) => {
        State.searchQuery = e.target.value.toLowerCase();
        renderProducts();
    }, 300));
    
    katalogSearch?.addEventListener('input', debounce((e) => {
        State.searchQuery = e.target.value.toLowerCase();
        renderKatalogProducts();
    }, 300));
    
    adminSearch?.addEventListener('input', debounce((e) => {
        State.searchQuery = e.target.value.toLowerCase();
        renderAdminProducts();
    }, 300));

    // Prevent zoom on input focus (iOS)
    document.querySelectorAll('input, select, textarea').forEach(el => {
        el.addEventListener('focus', () => {
            document.querySelector('meta[name="viewport"]').content = 
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        });
    });
}

// ==================== NAVIGATION ====================

function navigateTo(page) {
    // Update state
    State.currentPage = page;
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show target page
    document.getElementById(`page-${page}`)?.classList.add('active');
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.page === page) {
            item.classList.add('active');
        }
    });
    
    // Update header brand highlight for home
    const headerLeft = document.querySelector('.header-left');
    if (headerLeft) {
        if (page === 'home') {
            headerLeft.classList.add('active');
        } else {
            headerLeft.classList.remove('active');
        }
    }
    
    // Update cart button highlight
    const cartBtn = document.querySelector('.header-cart-btn');
    if (cartBtn) {
        if (page === 'transaksi') {
            cartBtn.classList.add('active');
        } else {
            cartBtn.classList.remove('active');
        }
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Refresh content
    if (page === 'katalog') {
        State.searchQuery = '';
        const katalogSearch = document.getElementById('katalog-search');
        if (katalogSearch) katalogSearch.value = '';
        renderKatalogProducts();
    } else if (page === 'transaksi') {
        renderCart();
    } else if (page === 'profil') {
        updateStats();
    }
}

function showCart() {
    navigateTo('transaksi');
}

// ==================== RENDER FUNCTIONS ====================

function renderCategories() {
    const container = document.getElementById('categories-grid');
    const filterChips = document.getElementById('filter-chips');
    if (!container) return;
    
    // Home categories grid
    container.innerHTML = Store.categories.map(cat => `
        <div class="category-card ${State.currentCategory === cat.id ? 'active' : ''}" 
             onclick="filterCategory('${cat.id}')">
            <span class="category-icon">${cat.icon}</span>
            <span class="category-name">${cat.name}</span>
        </div>
    `).join('');
    
    // Katalog filter chips
    if (filterChips) {
        filterChips.innerHTML = Store.categories.map(cat => `
            <button class="filter-chip ${State.currentCategory === cat.id ? 'active' : ''}" 
                    onclick="filterCategory('${cat.id}')">
                <span>${cat.icon}</span>
                <span>${cat.name}</span>
            </button>
        `).join('');
    }
}

function renderProducts() {
    const container = document.getElementById('products-grid');
    if (!container) return;
    
    const filtered = getFilteredProducts();
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <div class="empty-icon">🔍</div>
                <h3 class="empty-title">Tidak ditemukan</h3>
                <p class="empty-text">Coba kata kunci lain</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.slice(0, 6).map(product => renderProductCard(product)).join('');
}

function renderProductCard(product) {
    const discount = product.originalPrice > product.price 
        ? Math.round((1 - product.price / product.originalPrice) * 100) 
        : 0;
    
    return `
        <div class="product-card">
            <div class="product-image-container">
                ${discount > 0 ? `<span class="product-discount">-${discount}%</span>` : ''}
                ${product.imageUrl 
                    ? `<img src="${product.imageUrl}" alt="${product.name}" class="product-image" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="product-emoji" style="display:none">${product.image}</span>`
                    : `<span class="product-emoji">${product.image}</span>`
                }
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div>
                    <span class="product-price">Rp ${formatNumber(product.price)}</span>
                    ${discount > 0 ? `<span class="product-original-price">Rp ${formatNumber(product.originalPrice)}</span>` : ''}
                </div>
                <div class="product-meta">
                    <span class="product-unit">per ${product.unit}</span>
                    <span class="product-rating">⭐ ${product.rating}</span>
                </div>
                <button class="btn-add-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                    ${product.stock === 0 ? 'Habis' : '+ Keranjang'}
                </button>
            </div>
        </div>
    `;
}

function renderKatalogProducts() {
    const container = document.getElementById('katalog-products');
    if (!container) return;
    
    const filtered = getFilteredProducts();
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <h3 class="empty-title">Tidak ditemukan</h3>
                <p class="empty-text">Coba kata kunci lain</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(product => `
        <div class="katalog-item">
            <div class="katalog-item-image">
                ${product.imageUrl 
                    ? `<img src="${product.imageUrl}" alt="${product.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="emoji" style="display:none">${product.image}</span>`
                    : `<span class="emoji">${product.image}</span>`
                }
            </div>
            <div class="katalog-item-info">
                <h3 class="katalog-item-name">${product.name}</h3>
                <p class="katalog-item-desc">${product.description}</p>
                <div class="katalog-item-bottom">
                    <span class="katalog-item-price">Rp ${formatNumber(product.price)}/${product.unit}</span>
                    <button class="katalog-btn-add" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled style="opacity:0.5"' : ''}>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCart() {
    const emptyEl = document.getElementById('cart-empty');
    const itemsEl = document.getElementById('cart-items');
    const checkoutEl = document.getElementById('checkout-section');
    const loginNotice = document.getElementById('cart-login-notice');
    
    if (Store.cart.length === 0) {
        emptyEl?.classList.remove('hidden');
        itemsEl?.classList.add('hidden');
        checkoutEl?.classList.add('hidden');
        loginNotice?.classList.add('hidden');
        return;
    }
    
    emptyEl?.classList.add('hidden');
    itemsEl?.classList.remove('hidden');
    checkoutEl?.classList.remove('hidden');
    
    // Tampilkan/sembunyikan notice login
    if (loginNotice) {
        if (State.loggedInUser) {
            loginNotice.classList.add('hidden');
        } else {
            loginNotice.classList.remove('hidden');
        }
    }
    
    // Update tombol checkout berdasarkan status login
    const checkoutBtn = document.getElementById('btn-checkout-main');
    const checkoutBtnText = document.getElementById('checkout-btn-text');
    if (checkoutBtn && checkoutBtnText) {
        if (State.loggedInUser) {
            checkoutBtnText.textContent = 'Pesan via WhatsApp';
            checkoutBtn.classList.remove('btn-checkout-disabled');
        } else {
            checkoutBtnText.textContent = 'Login untuk Checkout';
            checkoutBtn.classList.add('btn-checkout-disabled');
        }
    }
    
    // Render items
    itemsEl.innerHTML = Store.cart.map(item => {
        const product = Store.products.find(p => p.id === item.id);
        if (!product) return '';
        
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    ${product.imageUrl 
                        ? `<img src="${product.imageUrl}" alt="${product.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="emoji" style="display:none">${product.image}</span>`
                        : `<span class="emoji">${product.image}</span>`
                    }
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${product.name}</h4>
                    <p class="cart-item-price">Rp ${formatNumber(product.price * item.qty)}</p>
                    <div class="cart-item-controls">
                        <div class="qty-controls">
                            <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
                            <span class="qty-value">${item.qty}</span>
                            <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                        </div>
                        <button class="btn-remove" onclick="removeFromCart(${item.id})">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Update totals
    const subtotal = Store.cart.reduce((sum, item) => {
        const product = Store.products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);
    
    document.getElementById('subtotal').textContent = `Rp ${formatNumber(subtotal)}`;
    document.getElementById('total').textContent = `Rp ${formatNumber(subtotal)}`;
}

function renderAdminProducts() {
    const container = document.getElementById('admin-products-list');
    if (!container) return;
    
    const filtered = Store.products.filter(p => 
        p.name.toLowerCase().includes(State.searchQuery) ||
        p.description.toLowerCase().includes(State.searchQuery)
    );
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📭</div>
                <h3 class="empty-title">Tidak ada produk</h3>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(product => `
        <div class="admin-product-item">
            <div class="admin-product-image">
                ${product.imageUrl 
                    ? `<img src="${product.imageUrl}" alt="${product.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="emoji" style="display:none">${product.image}</span>`
                    : `<span class="emoji">${product.image}</span>`
                }
            </div>
            <div class="admin-product-info">
                <h4 class="admin-product-name">${product.name}</h4>
                <p class="admin-product-category">${getCategoryName(product.category)} • Stok: ${product.stock}</p>
                <p class="admin-product-price">Rp ${formatNumber(product.price)}</p>
            </div>
            <div class="admin-product-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})">✏️</button>
                <button class="btn-delete-small" onclick="showDeleteConfirm(${product.id})">🗑️</button>
            </div>
        </div>
    `).join('');
}

function renderEmojiPickers() {
    const logoPicker = document.getElementById('emoji-picker-logo');
    const productPicker = document.getElementById('emoji-picker-product');
    
    const emojiHTML = Store.emojis.map(emoji => `
        <div class="emoji-option" onclick="selectEmoji('${emoji}', this)" data-emoji="${emoji}">${emoji}</div>
    `).join('');
    
    if (logoPicker) logoPicker.innerHTML = emojiHTML;
    if (productPicker) productPicker.innerHTML = emojiHTML;
}

// ==================== CART FUNCTIONS ====================

function addToCart(productId) {
    const product = Store.products.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    const existing = Store.cart.find(item => item.id === productId);
    
    if (existing) {
        if (existing.qty < product.stock) {
            existing.qty++;
            showToast(`${product.name} ditambahkan`, 'success');
        } else {
            showToast('Stok tidak cukup', 'error');
            return;
        }
    } else {
        // Simpan HANYA id dan qty di cart (tidak ada harga)
        // Harga akan diambil dari database saat checkout
        Store.cart.push({ id: productId, qty: 1 });
        showToast(`${product.name} ditambahkan`, 'success');
    }
    
    saveToStorage();
    updateCartBadges();
    renderCart();
}

function updateCartQty(productId, delta) {
    const item = Store.cart.find(i => i.id === productId);
    const product = Store.products.find(p => p.id === productId);
    
    if (!item || !product) return;
    
    const newQty = item.qty + delta;
    
    if (newQty <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQty > product.stock) {
        showToast('Stok tidak cukup', 'error');
        return;
    }
    
    item.qty = newQty;
    saveToStorage();
    updateCartBadges();
    renderCart();
}

function removeFromCart(productId) {
    Store.cart = Store.cart.filter(item => item.id !== productId);
    saveToStorage();
    updateCartBadges();
    renderCart();
    showToast('Produk dihapus', 'info');
}

function clearCart() {
    if (Store.cart.length === 0) return;
    
    Store.cart = [];
    saveToStorage();
    updateCartBadges();
    renderCart();
    showToast('Keranjang dikosongkan', 'info');
}

function updateCartBadges() {
    const total = Store.cart.reduce((sum, item) => sum + item.qty, 0);
    
    ['cart-badge-header'].forEach(id => {
        const badge = document.getElementById(id);
        if (badge) {
            badge.textContent = total;
            badge.classList.toggle('hidden', total === 0);
        }
    });
}

// ==================== CHECKOUT ====================

function handleCheckout() {
    if (Store.cart.length === 0) {
        showToast('Keranjang kosong', 'error');
        return;
    }
    
    const total = Store.cart.reduce((sum, item) => {
        const product = Store.products.find(p => p.id === item.id);
        return sum + (product ? product.price * item.qty : 0);
    }, 0);
    
    // Generate order ID
    const orderId = 'ORD-' + Date.now().toString(36).toUpperCase();
    
    // Create order object
    const order = {
        id: orderId,
        items: Store.cart.map(item => {
            const product = Store.products.find(p => p.id === item.id);
            return {
                productId: item.id,
                name: product?.name || 'Unknown',
                price: product?.price || 0,
                qty: item.qty,
                unit: product?.unit || 'pcs',
                image: product?.image || '📦',
                imageUrl: product?.imageUrl || ''
            };
        }),
        total: total,
        status: 'pending',
        customer: {
            name: '',
            phone: '',
            address: ''
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    // Save order
    Store.orders.unshift(order);
    saveToStorage();
    updateOrdersBadge();
    
    let message = `🛒 *PESANAN BARU*\n`;
    message += `*${Store.profile.name}*\n\n`;
    message += `📝 *No. Pesanan: ${orderId}*\n\n`;
    message += `📋 *Detail Pesanan:*\n`;
    message += `─────────────\n`;
    
    Store.cart.forEach((item, i) => {
        const product = Store.products.find(p => p.id === item.id);
        if (product) {
            message += `${i + 1}. ${product.name}\n`;
            message += `   ${item.qty} ${product.unit} × Rp ${formatNumber(product.price)}\n`;
            message += `   = Rp ${formatNumber(product.price * item.qty)}\n\n`;
        }
    });
    
    message += `─────────────\n`;
    message += `💰 *TOTAL: Rp ${formatNumber(total)}*\n\n`;
    
    if (Store.profile.bank && Store.profile.accountNumber) {
        message += `💳 *Transfer ke:*\n`;
        message += `${Store.profile.bank} - ${Store.profile.accountNumber}\n`;
        message += `a.n ${Store.profile.accountName}\n\n`;
    }
    
    message += `📍 Alamat: \n`;
    message += `📱 No. HP: \n\n`;
    message += `Terima kasih! ${Store.profile.logo}`;
    
    const waUrl = `https://wa.me/62${Store.profile.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    
    // Clear cart after checkout
    Store.cart = [];
    saveToStorage();
    updateCartBadges();
    renderCart();
    showToast('Pesanan berhasil dibuat!', 'success');
}

// ==================== FILTER ====================

function filterCategory(categoryId) {
    State.currentCategory = categoryId;
    renderCategories();
    renderProducts();
    renderKatalogProducts();
}

function getFilteredProducts() {
    return Store.products.filter(product => {
        const matchesCategory = State.currentCategory === 'all' || product.category === State.currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(State.searchQuery) ||
                              product.description.toLowerCase().includes(State.searchQuery);
        return matchesCategory && matchesSearch;
    });
}

// ==================== MODALS ====================

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Load data for specific modals
        if (modalId === 'modal-profile') {
            loadProfileForm();
        } else if (modalId === 'modal-products') {
            State.searchQuery = '';
            document.getElementById('admin-search').value = '';
            renderAdminProducts();
        } else if (modalId === 'modal-add-product' && !State.editingProductId) {
            resetProductForm();
        } else if (modalId === 'modal-orders') {
            State.currentOrderFilter = 'all';
            document.querySelectorAll('.order-stat-chip').forEach((chip, i) => {
                chip.classList.toggle('active', i === 0);
            });
            renderOrders();
        } else if (modalId === 'modal-customers') {
            CustomerState.searchQuery = '';
            const searchInput = document.getElementById('customer-search');
            if (searchInput) searchInput.value = '';
            renderCustomers();
        } else if (modalId === 'modal-add-customer' && !CustomerState.editingCustomerId) {
            resetCustomerForm();
        } else if (modalId === 'modal-edit-profile') {
            loadEditProfileForm();
        } else if (modalId === 'modal-my-orders') {
            renderMyOrders();
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        if (modalId === 'modal-add-product') {
            State.editingProductId = null;
            resetProductForm();
        }
    }
}

// ==================== PROFILE MANAGEMENT ====================

function loadProfileForm() {
    document.getElementById('input-logo-emoji').value = Store.profile.logo;
    document.getElementById('input-logo-url').value = Store.profile.logoUrl || '';
    updateLogoPreview();
    
    document.getElementById('input-store-name').value = Store.profile.name;
    document.getElementById('input-tagline').value = Store.profile.tagline;
    document.getElementById('input-whatsapp').value = Store.profile.whatsapp;
    document.getElementById('input-email').value = Store.profile.email;
    document.getElementById('input-instagram').value = Store.profile.instagram;
    document.getElementById('input-bank').value = Store.profile.bank;
    document.getElementById('input-account-number').value = Store.profile.accountNumber;
    document.getElementById('input-account-name').value = Store.profile.accountName;
    document.getElementById('input-address').value = Store.profile.address;
    document.getElementById('input-city').value = Store.profile.city;
    document.getElementById('input-postal').value = Store.profile.postal;
    document.getElementById('input-maps').value = Store.profile.mapsLink;
    document.getElementById('input-weekday-open').value = Store.profile.hours.weekdayOpen;
    document.getElementById('input-weekday-close').value = Store.profile.hours.weekdayClose;
    document.getElementById('input-saturday-open').value = Store.profile.hours.saturdayOpen;
    document.getElementById('input-saturday-close').value = Store.profile.hours.saturdayClose;
    document.getElementById('input-sunday-open').value = Store.profile.hours.sundayOpen;
    document.getElementById('input-sunday-close').value = Store.profile.hours.sundayClose;
}

function saveStoreProfile() {
    const name = document.getElementById('input-store-name').value.trim();
    const whatsapp = document.getElementById('input-whatsapp').value.trim().replace(/\D/g, '');
    
    if (!name) {
        showToast('Nama toko wajib diisi', 'error');
        return;
    }
    
    if (!whatsapp) {
        showToast('Nomor WhatsApp wajib diisi', 'error');
        return;
    }
    
    Store.profile = {
        logo: document.getElementById('input-logo-emoji').value || '🍎',
        logoUrl: document.getElementById('input-logo-url').value.trim(),
        name: name,
        tagline: document.getElementById('input-tagline').value.trim(),
        whatsapp: whatsapp,
        email: document.getElementById('input-email').value.trim(),
        instagram: document.getElementById('input-instagram').value.trim().replace('@', ''),
        bank: document.getElementById('input-bank').value,
        accountNumber: document.getElementById('input-account-number').value.trim(),
        accountName: document.getElementById('input-account-name').value.trim(),
        address: document.getElementById('input-address').value.trim(),
        city: document.getElementById('input-city').value.trim(),
        postal: document.getElementById('input-postal').value.trim(),
        mapsLink: document.getElementById('input-maps').value.trim(),
        hours: {
            weekdayOpen: document.getElementById('input-weekday-open').value,
            weekdayClose: document.getElementById('input-weekday-close').value,
            saturdayOpen: document.getElementById('input-saturday-open').value,
            saturdayClose: document.getElementById('input-saturday-close').value,
            sundayOpen: document.getElementById('input-sunday-open').value,
            sundayClose: document.getElementById('input-sunday-close').value
        }
    };
    
    saveToStorage();
    applyStoreProfile();
    closeModal('modal-profile');
    showToast('Profil berhasil disimpan', 'success');
}

function applyStoreProfile() {
    // Header
    const headerLogo = document.getElementById('header-logo');
    const headerName = document.getElementById('header-store-name');
    const headerTagline = document.getElementById('header-tagline');
    
    if (headerLogo) {
        headerLogo.innerHTML = Store.profile.logoUrl 
            ? `<img src="${Store.profile.logoUrl}" alt="${Store.profile.name}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<span class=\\'text-xl\\'>${Store.profile.logo}</span>'">`
            : `<span class="text-xl">${Store.profile.logo}</span>`;
    }
    if (headerName) headerName.textContent = Store.profile.name;
    if (headerTagline) headerTagline.textContent = Store.profile.tagline;
    
    // Profile page
    const profileLogo = document.getElementById('profile-store-logo');
    const profileName = document.getElementById('profile-store-name');
    const profileTagline = document.getElementById('profile-store-tagline');
    
    if (profileLogo) {
        profileLogo.innerHTML = Store.profile.logoUrl 
            ? `<img src="${Store.profile.logoUrl}" alt="${Store.profile.name}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<span class=\\'text-4xl\\'>${Store.profile.logo}</span>'">`
            : `<span class="text-4xl">${Store.profile.logo}</span>`;
    }
    if (profileName) profileName.textContent = Store.profile.name;
    if (profileTagline) profileTagline.textContent = Store.profile.tagline;
    
    // Document title
    document.title = `${Store.profile.name} ${Store.profile.logo}`;
}

function toggleLogoPicker() {
    const picker = document.getElementById('emoji-picker-logo');
    picker?.classList.toggle('hidden');
}

function updateLogoPreview() {
    const preview = document.getElementById('logo-preview');
    const logoUrl = document.getElementById('input-logo-url').value.trim();
    const logoEmoji = document.getElementById('input-logo-emoji').value || '🍎';
    
    if (preview) {
        preview.innerHTML = logoUrl 
            ? `<img src="${logoUrl}" alt="Logo" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<span class=\\'text-4xl\\'>${logoEmoji}</span>'">`
            : `<span class="text-4xl">${logoEmoji}</span>`;
    }
}

// ==================== PRODUCT MANAGEMENT ====================

function resetProductForm() {
    document.getElementById('product-id').value = '';
    document.getElementById('input-product-image').value = '';
    document.getElementById('input-product-emoji').value = '🍎';
    document.getElementById('input-product-name').value = '';
    document.getElementById('input-product-desc').value = '';
    document.getElementById('input-product-category').value = '';
    document.getElementById('input-product-price').value = '';
    document.getElementById('input-product-original').value = '';
    document.getElementById('input-product-stock').value = '';
    document.getElementById('input-product-unit').value = 'kg';
    document.getElementById('input-product-rating').value = '';
    
    updateProductImagePreview();
    document.getElementById('modal-product-title').textContent = 'Tambah Produk';
    document.getElementById('emoji-picker-product')?.classList.add('hidden');
}

function editProduct(productId) {
    const product = Store.products.find(p => p.id === productId);
    if (!product) return;
    
    State.editingProductId = productId;
    
    document.getElementById('product-id').value = product.id;
    document.getElementById('input-product-image').value = product.imageUrl || '';
    document.getElementById('input-product-emoji').value = product.image;
    document.getElementById('input-product-name').value = product.name;
    document.getElementById('input-product-desc').value = product.description;
    document.getElementById('input-product-category').value = product.category;
    document.getElementById('input-product-price').value = product.price;
    document.getElementById('input-product-original').value = product.originalPrice;
    document.getElementById('input-product-stock').value = product.stock;
    document.getElementById('input-product-unit').value = product.unit;
    document.getElementById('input-product-rating').value = product.rating;
    
    updateProductImagePreview();
    document.getElementById('modal-product-title').textContent = 'Edit Produk';
    
    closeModal('modal-products');
    openModal('modal-add-product');
}

function saveProduct() {
    const name = document.getElementById('input-product-name').value.trim();
    const category = document.getElementById('input-product-category').value;
    const price = parseInt(document.getElementById('input-product-price').value) || 0;
    const stock = parseInt(document.getElementById('input-product-stock').value) || 0;
    
    if (!name || !category || !price || !stock) {
        showToast('Lengkapi semua field wajib', 'error');
        return;
    }
    
    const productData = {
        name: name,
        description: document.getElementById('input-product-desc').value.trim(),
        category: category,
        price: price,
        originalPrice: parseInt(document.getElementById('input-product-original').value) || price,
        stock: stock,
        unit: document.getElementById('input-product-unit').value,
        rating: parseFloat(document.getElementById('input-product-rating').value) || 4.5,
        image: document.getElementById('input-product-emoji').value || '🍎',
        imageUrl: document.getElementById('input-product-image').value.trim()
    };
    
    if (State.editingProductId) {
        // Update existing
        const index = Store.products.findIndex(p => p.id === State.editingProductId);
        if (index !== -1) {
            Store.products[index] = { ...Store.products[index], ...productData };
        }
        showToast('Produk berhasil diupdate', 'success');
    } else {
        // Add new
        const newId = Math.max(...Store.products.map(p => p.id), 0) + 1;
        Store.products.push({ id: newId, ...productData });
        showToast('Produk berhasil ditambahkan', 'success');
    }
    
    saveToStorage();
    renderProducts();
    renderKatalogProducts();
    renderAdminProducts();
    updateStats();
    
    closeModal('modal-add-product');
    State.editingProductId = null;
    
    // Reopen products modal
    setTimeout(() => openModal('modal-products'), 300);
}

function showDeleteConfirm(productId) {
    const product = Store.products.find(p => p.id === productId);
    if (!product) return;
    
    State.deleteProductId = productId;
    document.getElementById('delete-product-name').textContent = `"${product.name}" akan dihapus permanen.`;
    openModal('modal-delete');
}

function confirmDeleteProduct() {
    if (!State.deleteProductId) return;
    
    Store.products = Store.products.filter(p => p.id !== State.deleteProductId);
    Store.cart = Store.cart.filter(item => item.id !== State.deleteProductId);
    
    saveToStorage();
    renderProducts();
    renderKatalogProducts();
    renderAdminProducts();
    renderCart();
    updateCartBadges();
    updateStats();
    
    closeModal('modal-delete');
    State.deleteProductId = null;
    showToast('Produk berhasil dihapus', 'info');
}

function toggleProductEmojiPicker() {
    const picker = document.getElementById('emoji-picker-product');
    picker?.classList.toggle('hidden');
}

function updateProductImagePreview() {
    const preview = document.getElementById('product-image-preview');
    const imageUrl = document.getElementById('input-product-image').value.trim();
    const emoji = document.getElementById('input-product-emoji').value || '🍎';
    
    if (preview) {
        preview.innerHTML = imageUrl 
            ? `<img src="${imageUrl}" alt="Preview" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<span class=\\'text-5xl\\'>${emoji}</span>'">`
            : `<span class="text-5xl">${emoji}</span>`;
    }
}

function selectEmoji(emoji, element) {
    const picker = element.closest('.emoji-picker');
    const isLogo = picker.id === 'emoji-picker-logo';
    
    // Update selection state
    picker.querySelectorAll('.emoji-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    
    if (isLogo) {
        document.getElementById('input-logo-emoji').value = emoji;
        document.getElementById('input-logo-url').value = '';
        updateLogoPreview();
    } else {
        document.getElementById('input-product-emoji').value = emoji;
        document.getElementById('input-product-image').value = '';
        updateProductImagePreview();
    }
    
    picker.classList.add('hidden');
}

// ==================== STATS ====================

function updateStats() {
    document.getElementById('stat-products').textContent = Store.products.length;
    document.getElementById('stat-buah').textContent = Store.products.filter(p => p.category === 'buah').length;
    document.getElementById('stat-goods').textContent = Store.products.filter(p => p.category === 'goods').length;
    document.getElementById('stat-drinks').textContent = Store.products.filter(p => p.category === 'minuman').length;
}

// ==================== UTILITIES ====================

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function getCategoryName(categoryId) {
    const cat = Store.categories.find(c => c.id === categoryId);
    return cat ? cat.name : categoryId;
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${icons[type]}</span>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ==================== ORDERS MANAGEMENT ====================

function updateOrdersBadge() {
    const pendingCount = Store.orders.filter(o => o.status === 'pending').length;
    const badge = document.getElementById('orders-badge-menu');
    if (badge) {
        badge.textContent = pendingCount > 0 ? pendingCount : '';
    }
}

function filterOrders(status) {
    State.currentOrderFilter = status;
    
    // Update active chip
    document.querySelectorAll('.order-stat-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    event.target.closest('.order-stat-chip')?.classList.add('active');
    
    renderOrders();
}

function renderOrders() {
    const container = document.getElementById('orders-list');
    if (!container) return;
    
    // Update stats
    const allCount = Store.orders.length;
    const pendingCount = Store.orders.filter(o => o.status === 'pending').length;
    const confirmedCount = Store.orders.filter(o => o.status === 'confirmed').length;
    const completedCount = Store.orders.filter(o => o.status === 'completed').length;
    
    document.getElementById('stat-all-orders').textContent = allCount;
    document.getElementById('stat-pending').textContent = pendingCount;
    document.getElementById('stat-confirmed').textContent = confirmedCount;
    document.getElementById('stat-completed').textContent = completedCount;
    
    // Filter orders
    let filtered = Store.orders;
    if (State.currentOrderFilter !== 'all') {
        filtered = Store.orders.filter(o => o.status === State.currentOrderFilter);
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <h3 class="empty-title">Belum ada pesanan</h3>
                <p class="empty-text">Pesanan baru akan muncul di sini</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(order => {
        const statusLabels = {
            pending: '🕐 Menunggu Ongkir',
            confirmed: '💳 Menunggu Bayar',
            processing: '⚙️ Diproses',
            shipped: '🚚 Dikirim',
            completed: '📦 Selesai',
            cancelled: '❌ Dibatalkan'
        };
        
        const itemsCount = order.items.reduce((sum, item) => sum + item.qty, 0);
        const date = new Date(order.createdAt);
        const dateStr = date.toLocaleDateString('id-ID', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const displayTotal = order.grandTotal || order.total;
        const hasShipping = order.shippingCost && order.shippingCost > 0;
        
        return `
            <div class="order-card" onclick="viewOrderDetail('${order.id}')">
                <div class="order-header">
                    <span class="order-id">#${order.id}</span>
                    <span class="order-status ${order.status}">${statusLabels[order.status]}</span>
                </div>
                <div class="order-customer">
                    <span class="order-customer-name">${order.customer.name || 'Pelanggan'}</span>
                    <span class="order-customer-phone">+62${order.customer.phone || '-'}</span>
                </div>
                <div class="order-summary">
                    <span class="order-items-count">${itemsCount} item ${hasShipping ? '• 🚚 Rp ' + formatNumber(order.shippingCost) : '• ⏳ Ongkir belum diset'}</span>
                    <span class="order-total">Rp ${formatNumber(displayTotal)}</span>
                </div>
                <span class="order-date">${dateStr}</span>
            </div>
        `;
    }).join('');
}

function viewOrderDetail(orderId) {
    const order = Store.orders.find(o => o.id === orderId);
    if (!order) return;
    
    State.viewingOrderId = orderId;
    
    const statusLabels = {
        pending: '🕐 Menunggu Konfirmasi Ongkir',
        confirmed: '✅ Dikonfirmasi',
        processing: '⚙️ Diproses',
        shipped: '🚚 Dikirim',
        completed: '📦 Selesai',
        cancelled: '❌ Dibatalkan'
    };
    
    const date = new Date(order.createdAt);
    const dateStr = date.toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const shippingCost = order.shippingCost || 0;
    const grandTotal = order.total + shippingCost;
    
    const container = document.getElementById('order-detail-content');
    container.innerHTML = `
        <!-- Order Info -->
        <div class="order-detail-section">
            <h4 class="order-detail-title">Informasi Pesanan</h4>
            <div class="order-detail-card">
                <div class="order-info-row">
                    <span class="order-info-label">No. Pesanan</span>
                    <span class="order-info-value">#${order.id}</span>
                </div>
                <div class="order-info-row">
                    <span class="order-info-label">Tanggal</span>
                    <span class="order-info-value">${dateStr}</span>
                </div>
                <div class="order-info-row">
                    <span class="order-info-label">Status</span>
                    <span class="order-info-value order-status ${order.status}">${statusLabels[order.status]}</span>
                </div>
            </div>
        </div>
        
        <!-- Customer Info -->
        <div class="order-detail-section">
            <h4 class="order-detail-title">Data Pelanggan</h4>
            <div class="order-detail-card">
                <div class="form-section">
                    <label class="form-label">Nama</label>
                    <input type="text" id="order-customer-name" class="form-input" value="${order.customer.name}" placeholder="Nama pelanggan">
                </div>
                <div class="form-section">
                    <label class="form-label">No. WhatsApp</label>
                    <div class="input-with-prefix">
                        <span class="input-prefix">+62</span>
                        <input type="tel" id="order-customer-phone" class="form-input" value="${order.customer.phone}" placeholder="812xxxxxxxx">
                    </div>
                </div>
                <div class="form-section">
                    <label class="form-label">Alamat</label>
                    <textarea id="order-customer-address" class="form-textarea" rows="2" placeholder="Alamat pengiriman">${order.customer.address}</textarea>
                </div>
            </div>
        </div>
        
        <!-- Products -->
        <div class="order-detail-section">
            <h4 class="order-detail-title">Produk Dipesan</h4>
            <div class="order-detail-card">
                ${order.items.map(item => `
                    <div class="order-product-item">
                        <div class="order-product-image">
                            ${item.imageUrl 
                                ? `<img src="${item.imageUrl}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="emoji" style="display:none">${item.image}</span>`
                                : `<span class="emoji">${item.image}</span>`
                            }
                        </div>
                        <div class="order-product-info">
                            <p class="order-product-name">${item.name}</p>
                            <p class="order-product-qty">${item.qty} ${item.unit} × Rp ${formatNumber(item.price)}</p>
                        </div>
                        <p class="order-product-price">Rp ${formatNumber(item.price * item.qty)}</p>
                    </div>
                `).join('')}
                <div class="order-info-row" style="margin-top: var(--spacing-md); padding-top: var(--spacing-md); border-top: 1px solid var(--color-gray-200);">
                    <span class="order-info-label">Subtotal Produk</span>
                    <span class="order-info-value">Rp ${formatNumber(order.total)}</span>
                </div>
            </div>
        </div>
        
        <!-- Shipping Cost -->
        <div class="order-detail-section">
            <h4 class="order-detail-title">🚚 Ongkos Kirim</h4>
            <div class="order-detail-card">
                <div class="form-section">
                    <label class="form-label">Biaya Ongkir</label>
                    <div class="input-with-prefix">
                        <span class="input-prefix">Rp</span>
                        <input type="number" id="order-shipping-cost" class="form-input" value="${shippingCost}" placeholder="0" inputmode="numeric">
                    </div>
                    <p class="form-hint">Masukkan biaya ongkir berdasarkan alamat pelanggan</p>
                </div>
                <div class="order-info-row" style="margin-top: var(--spacing-md); padding-top: var(--spacing-md); border-top: 2px solid var(--color-gray-200);">
                    <span class="order-info-label font-bold text-lg">TOTAL BAYAR</span>
                    <span id="order-grand-total" class="order-info-value text-xl text-green-600 font-bold">Rp ${formatNumber(grandTotal)}</span>
                </div>
            </div>
        </div>
        
        <!-- Status Update -->
        <div class="order-detail-section">
            <h4 class="order-detail-title">Update Status</h4>
            <div class="order-status-selector">
                <button class="status-option pending ${order.status === 'pending' ? 'active' : ''}" onclick="updateOrderStatus('pending')">🕐 Pending</button>
                <button class="status-option confirmed ${order.status === 'confirmed' ? 'active' : ''}" onclick="updateOrderStatus('confirmed')">✅ Dikonfirmasi</button>
                <button class="status-option processing ${order.status === 'processing' ? 'active' : ''}" onclick="updateOrderStatus('processing')">⚙️ Diproses</button>
                <button class="status-option shipped ${order.status === 'shipped' ? 'active' : ''}" onclick="updateOrderStatus('shipped')">🚚 Dikirim</button>
                <button class="status-option completed ${order.status === 'completed' ? 'active' : ''}" onclick="updateOrderStatus('completed')">📦 Selesai</button>
                <button class="status-option cancelled ${order.status === 'cancelled' ? 'active' : ''}" onclick="updateOrderStatus('cancelled')">❌ Dibatalkan</button>
            </div>
        </div>
        
        <!-- Actions -->
        <div class="order-actions">
            <button onclick="saveOrderChanges()" class="btn-primary flex-1">💾 Simpan Perubahan</button>
        </div>
        <div class="order-actions">
            <button onclick="sendShippingConfirmation()" class="btn-whatsapp flex-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                📋 Kirim Konfirmasi Ongkir & Total
            </button>
        </div>
        <div class="order-actions">
            <button onclick="contactCustomer()" class="btn-secondary flex-1">💬 Hubungi Pelanggan</button>
        </div>
    `;
    
    // Add event listener for shipping cost input
    document.getElementById('order-shipping-cost').addEventListener('input', updateGrandTotal);
    
    closeModal('modal-orders');
    openModal('modal-order-detail');
}

function updateGrandTotal() {
    const order = Store.orders.find(o => o.id === State.viewingOrderId);
    if (!order) return;
    
    const shippingCost = parseInt(document.getElementById('order-shipping-cost').value) || 0;
    const grandTotal = order.total + shippingCost;
    
    document.getElementById('order-grand-total').textContent = 'Rp ' + formatNumber(grandTotal);
}

function sendShippingConfirmation() {
    const order = Store.orders.find(o => o.id === State.viewingOrderId);
    if (!order) return;
    
    const phone = document.getElementById('order-customer-phone').value.trim().replace(/\D/g, '');
    if (!phone) {
        showToast('Nomor WhatsApp pelanggan belum diisi', 'error');
        return;
    }
    
    const shippingCost = parseInt(document.getElementById('order-shipping-cost').value) || 0;
    if (shippingCost <= 0) {
        showToast('Isi ongkos kirim terlebih dahulu', 'error');
        return;
    }
    
    const grandTotal = order.total + shippingCost;
    
    // Save shipping cost and update status to confirmed
    order.shippingCost = shippingCost;
    order.grandTotal = grandTotal;
    order.status = 'confirmed'; // Change status to confirmed (waiting payment)
    order.confirmedAt = new Date().toISOString();
    order.customer.name = document.getElementById('order-customer-name').value.trim();
    order.customer.phone = phone;
    order.customer.address = document.getElementById('order-customer-address').value.trim();
    order.updatedAt = new Date().toISOString();
    saveToStorage();
    updateOrdersBadge();
    
    // Build confirmation message
    let message = `Halo ${order.customer.name || 'Kak'}! 👋\n\n`;
    message += `*${Store.profile.name}*\n`;
    message += `─────────────────\n`;
    message += `📋 *KONFIRMASI PESANAN*\n`;
    message += `No. Pesanan: *#${order.id}*\n\n`;
    
    message += `📦 *Detail Pesanan:*\n`;
    order.items.forEach((item, i) => {
        message += `${i + 1}. ${item.name}\n`;
        message += `   ${item.qty} ${item.unit} × Rp ${formatNumber(item.price)} = Rp ${formatNumber(item.price * item.qty)}\n`;
    });
    
    message += `\n─────────────────\n`;
    message += `💰 Subtotal: Rp ${formatNumber(order.total)}\n`;
    message += `🚚 Ongkir: Rp ${formatNumber(shippingCost)}\n`;
    message += `─────────────────\n`;
    message += `*💵 TOTAL BAYAR: Rp ${formatNumber(grandTotal)}*\n\n`;
    
    message += `📍 *Alamat Pengiriman:*\n`;
    message += `${order.customer.address}\n\n`;
    
    if (Store.profile.bank && Store.profile.accountNumber) {
        message += `🏦 *Transfer ke:*\n`;
        message += `Bank: ${Store.profile.bank}\n`;
        message += `No. Rek: ${Store.profile.accountNumber}\n`;
        message += `A.n: ${Store.profile.accountName}\n\n`;
    }
    
    message += `─────────────────\n`;
    message += `📱 *Konfirmasi di aplikasi:*\n`;
    message += `Buka menu Akun > Pesanan Saya\n`;
    message += `Pilih pesanan #${order.id}\n`;
    message += `Klik "Lanjut Bayar" atau "Batalkan"\n\n`;
    
    message += `Terima kasih! ${Store.profile.logo}`;
    
    const waUrl = `https://wa.me/62${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    
    showToast('Konfirmasi ongkir dikirim, status diubah ke "Menunggu Pembayaran"', 'success');
    
    // Refresh order detail view
    viewOrderDetail(order.id);
}

function updateOrderStatus(status) {
    // Update UI
    document.querySelectorAll('.status-option').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update order in memory (will be saved when clicking save button)
    const order = Store.orders.find(o => o.id === State.viewingOrderId);
    if (order) {
        order.status = status;
        order.updatedAt = new Date().toISOString();
    }
}

function saveOrderChanges() {
    const order = Store.orders.find(o => o.id === State.viewingOrderId);
    if (!order) return;
    
    // Update customer info
    order.customer.name = document.getElementById('order-customer-name').value.trim();
    order.customer.phone = document.getElementById('order-customer-phone').value.trim().replace(/\D/g, '');
    order.customer.address = document.getElementById('order-customer-address').value.trim();
    
    // Update shipping cost
    const shippingCost = parseInt(document.getElementById('order-shipping-cost').value) || 0;
    order.shippingCost = shippingCost;
    order.grandTotal = order.total + shippingCost;
    
    order.updatedAt = new Date().toISOString();
    
    saveToStorage();
    updateOrdersBadge();
    showToast('Pesanan berhasil diupdate', 'success');
    
    closeModal('modal-order-detail');
    openModal('modal-orders');
    renderOrders();
}

function contactCustomer() {
    const order = Store.orders.find(o => o.id === State.viewingOrderId);
    if (!order) return;
    
    const phone = document.getElementById('order-customer-phone').value.trim().replace(/\D/g, '');
    if (!phone) {
        showToast('Nomor WhatsApp pelanggan belum diisi', 'error');
        return;
    }
    
    const statusLabels = {
        pending: 'Menunggu Konfirmasi',
        confirmed: 'Dikonfirmasi',
        processing: 'Sedang Diproses',
        shipped: 'Sedang Dikirim',
        completed: 'Selesai',
        cancelled: 'Dibatalkan'
    };
    
    let message = `Halo ${order.customer.name || 'Kak'}! 👋\n\n`;
    message += `*${Store.profile.name}*\n`;
    message += `Status pesanan #${order.id}:\n`;
    message += `📦 *${statusLabels[order.status]}*\n\n`;
    
    if (order.status === 'pending') {
        message += `Terima kasih sudah order. Silakan transfer sebesar:\n`;
        message += `💰 *Rp ${formatNumber(order.total)}*\n\n`;
        if (Store.profile.bank && Store.profile.accountNumber) {
            message += `Ke rekening:\n`;
            message += `🏦 ${Store.profile.bank}\n`;
            message += `📝 ${Store.profile.accountNumber}\n`;
            message += `👤 a.n ${Store.profile.accountName}\n\n`;
        }
    } else if (order.status === 'confirmed') {
        message += `Pembayaran sudah kami terima. Pesanan sedang disiapkan! 🎉\n\n`;
    } else if (order.status === 'shipped') {
        message += `Pesanan sudah dalam perjalanan! 🚚\n\n`;
    } else if (order.status === 'completed') {
        message += `Pesanan sudah sampai. Terima kasih sudah berbelanja! 🙏\n\n`;
    }
    
    message += `Terima kasih! ${Store.profile.logo}`;
    
    const waUrl = `https://wa.me/62${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
}

function deleteOrder() {
    if (!State.viewingOrderId) return;
    
    if (confirm('Hapus pesanan ini? Tindakan ini tidak dapat dibatalkan.')) {
        Store.orders = Store.orders.filter(o => o.id !== State.viewingOrderId);
        saveToStorage();
        updateOrdersBadge();
        showToast('Pesanan berhasil dihapus', 'info');
        
        closeModal('modal-order-detail');
        openModal('modal-orders');
        renderOrders();
        State.viewingOrderId = null;
    }
}

// ==================== CUSTOMERS MANAGEMENT ====================

const CustomerState = {
    searchQuery: '',
    editingCustomerId: null,
    viewingCustomerId: null,
    deleteCustomerId: null
};

function updateCustomersBadge() {
    // Badge pelanggan hanya muncul jika ada pelanggan baru (dalam 24 jam terakhir)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    const newCustomers = Store.customers.filter(c => c.createdAt && c.createdAt > oneDayAgo).length;
    
    const badge = document.getElementById('customers-badge-menu');
    if (badge) {
        if (newCustomers > 0) {
            badge.textContent = newCustomers;
            badge.style.display = 'flex';
        } else {
            badge.textContent = '';
            badge.style.display = 'none';
        }
    }
}

function renderAvatarPicker() {
    const avatarPicker = document.getElementById('avatar-picker');
    if (!avatarPicker) return;
    
    avatarPicker.innerHTML = Store.avatars.map(avatar => `
        <div class="emoji-option" onclick="selectAvatar('${avatar}', this)" data-emoji="${avatar}">${avatar}</div>
    `).join('');
}

function toggleCustomerAvatarPicker() {
    const picker = document.getElementById('avatar-picker');
    picker?.classList.toggle('hidden');
}

function selectAvatar(avatar, element) {
    const picker = element.closest('.emoji-picker');
    
    // Update selection state
    picker.querySelectorAll('.emoji-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    
    document.getElementById('input-customer-emoji').value = avatar;
    document.getElementById('input-customer-avatar').value = '';
    updateCustomerAvatarPreview();
    
    picker.classList.add('hidden');
}

function updateCustomerAvatarPreview() {
    const preview = document.getElementById('customer-avatar-preview');
    const avatarUrl = document.getElementById('input-customer-avatar')?.value.trim();
    const emoji = document.getElementById('input-customer-emoji')?.value || '👤';
    
    if (preview) {
        preview.innerHTML = avatarUrl 
            ? `<img src="${avatarUrl}" alt="Avatar" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<span class=\\'text-4xl\\'>${emoji}</span>'">`
            : `<span class="text-4xl">${emoji}</span>`;
    }
}

function toggleCustomerLabel(element) {
    // Remove active from all
    document.querySelectorAll('.label-chip').forEach(chip => chip.classList.remove('active'));
    
    // Add active to clicked
    element.classList.add('active');
    
    // Update hidden input
    document.getElementById('input-customer-label').value = element.dataset.label;
}

function renderCustomers() {
    const container = document.getElementById('customers-list');
    if (!container) return;
    
    // Update stats
    const totalCustomers = Store.customers.length;
    const activeCustomers = Store.customers.filter(c => {
        const customerOrders = Store.orders.filter(o => o.customer.phone === c.phone);
        const lastOrder = customerOrders.length > 0 ? new Date(customerOrders[0].createdAt) : null;
        if (!lastOrder) return false;
        const daysSinceLastOrder = (new Date() - lastOrder) / (1000 * 60 * 60 * 24);
        return daysSinceLastOrder <= 30;
    }).length;
    const totalOrders = Store.orders.length;
    
    document.getElementById('stat-total-customers').textContent = totalCustomers;
    document.getElementById('stat-active-customers').textContent = activeCustomers;
    document.getElementById('stat-total-orders-customers').textContent = totalOrders;
    
    // Filter customers
    let filtered = Store.customers;
    if (CustomerState.searchQuery) {
        filtered = Store.customers.filter(c => 
            c.name.toLowerCase().includes(CustomerState.searchQuery) ||
            c.phone.includes(CustomerState.searchQuery) ||
            (c.email && c.email.toLowerCase().includes(CustomerState.searchQuery))
        );
    }
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">👥</div>
                <h3 class="empty-title">Belum ada pelanggan</h3>
                <p class="empty-text">Tambahkan pelanggan baru</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(customer => {
        const customerOrders = Store.orders.filter(o => o.customer.phone === customer.phone);
        const ordersCount = customerOrders.length;
        const lastOrder = ordersCount > 0 ? new Date(customerOrders[0].createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) : '-';
        
        const labelIcons = {
            vip: '⭐ VIP',
            regular: '',
            new: '🆕',
            wholesale: '🏢'
        };
        
        return `
            <div class="customer-card" onclick="viewCustomerDetail('${customer.id}')">
                <div class="customer-avatar">
                    ${customer.avatarUrl 
                        ? `<img src="${customer.avatarUrl}" alt="${customer.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="emoji" style="display:none">${customer.avatar}</span>`
                        : `<span class="emoji">${customer.avatar}</span>`
                    }
                </div>
                <div class="customer-info">
                    <div class="customer-name">
                        ${customer.name}
                        ${customer.label !== 'regular' ? `<span class="customer-label ${customer.label}">${labelIcons[customer.label]}</span>` : ''}
                    </div>
                    <div class="customer-phone">+62${customer.phone}</div>
                    <div class="customer-meta">
                        <span class="customer-orders-count">${ordersCount} pesanan</span>
                        <span class="customer-last-order">• Terakhir: ${lastOrder}</span>
                    </div>
                </div>
                <button class="btn-customer-wa" onclick="event.stopPropagation(); contactCustomerDirect('${customer.phone}')">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                </button>
            </div>
        `;
    }).join('');
}

function contactCustomerDirect(phone) {
    const waUrl = `https://wa.me/62${phone}`;
    window.open(waUrl, '_blank');
}

function viewCustomerDetail(customerId) {
    const customer = Store.customers.find(c => c.id === customerId);
    if (!customer) return;
    
    CustomerState.viewingCustomerId = customerId;
    
    const customerOrders = Store.orders.filter(o => o.customer.phone === customer.phone);
    const totalSpent = customerOrders.reduce((sum, o) => sum + o.total, 0);
    
    const labelLabels = {
        vip: '⭐ VIP',
        regular: '👤 Regular',
        new: '🆕 Pelanggan Baru',
        wholesale: '🏢 Grosir'
    };
    
    const container = document.getElementById('customer-detail-content');
    container.innerHTML = `
        <!-- Customer Header -->
        <div class="customer-detail-header">
            <div class="customer-detail-avatar">
                ${customer.avatarUrl 
                    ? `<img src="${customer.avatarUrl}" alt="${customer.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="emoji" style="display:none">${customer.avatar}</span>`
                    : `<span class="emoji">${customer.avatar}</span>`
                }
            </div>
            <h3 class="customer-detail-name">${customer.name}</h3>
            <span class="customer-detail-label">${labelLabels[customer.label]}</span>
            <div class="customer-detail-stats">
                <div class="customer-detail-stat">
                    <span class="customer-detail-stat-value">${customerOrders.length}</span>
                    <span class="customer-detail-stat-label">Pesanan</span>
                </div>
                <div class="customer-detail-stat">
                    <span class="customer-detail-stat-value">Rp ${formatNumber(totalSpent)}</span>
                    <span class="customer-detail-stat-label">Total Belanja</span>
                </div>
            </div>
        </div>
        
        <!-- Contact Info -->
        <div class="customer-info-section">
            <h4 class="customer-info-title">Kontak</h4>
            <div class="customer-info-card">
                <div class="customer-info-item">
                    <div class="customer-info-icon">📱</div>
                    <div class="customer-info-content">
                        <span class="customer-info-label">WhatsApp</span>
                        <span class="customer-info-value">+62${customer.phone}</span>
                    </div>
                </div>
                ${customer.email ? `
                <div class="customer-info-item">
                    <div class="customer-info-icon">📧</div>
                    <div class="customer-info-content">
                        <span class="customer-info-label">Email</span>
                        <span class="customer-info-value">${customer.email}</span>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
        
        <!-- Address -->
        ${customer.address ? `
        <div class="customer-info-section">
            <h4 class="customer-info-title">Alamat</h4>
            <div class="customer-info-card">
                <div class="customer-info-item">
                    <div class="customer-info-icon">📍</div>
                    <div class="customer-info-content">
                        <span class="customer-info-label">Alamat Pengiriman</span>
                        <span class="customer-info-value">
                            ${customer.address}
                            ${customer.kelurahan ? `, ${customer.kelurahan}` : ''}
                            ${customer.kecamatan ? `, ${customer.kecamatan}` : ''}
                            ${customer.city ? `, ${customer.city}` : ''}
                            ${customer.postal ? ` ${customer.postal}` : ''}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        ` : ''}
        
        <!-- Notes -->
        ${customer.notes ? `
        <div class="customer-info-section">
            <h4 class="customer-info-title">Catatan</h4>
            <div class="customer-info-card">
                <p style="color: var(--color-gray-600); font-size: var(--font-size-sm);">${customer.notes}</p>
            </div>
        </div>
        ` : ''}
        
        <!-- Order History -->
        <div class="customer-info-section">
            <h4 class="customer-info-title">Riwayat Pesanan</h4>
            <div class="customer-info-card">
                ${customerOrders.length > 0 ? `
                    <div class="customer-order-history">
                        ${customerOrders.slice(0, 5).map(order => {
                            const date = new Date(order.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
                            return `
                                <div class="customer-order-item">
                                    <div>
                                        <span class="customer-order-id">#${order.id}</span>
                                        <span class="customer-order-date">${date}</span>
                                    </div>
                                    <span class="customer-order-total">Rp ${formatNumber(order.total)}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                ` : `
                    <p style="color: var(--color-gray-500); font-size: var(--font-size-sm); text-align: center; padding: var(--spacing-md);">Belum ada pesanan</p>
                `}
            </div>
        </div>
        
        <!-- Actions -->
        <div class="customer-actions-bar">
            <button onclick="editCustomer('${customer.id}')" class="btn-secondary flex-1">✏️ Edit</button>
            <button onclick="contactCustomerDirect('${customer.phone}')" class="btn-whatsapp flex-1">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hubungi
            </button>
        </div>
    `;
    
    closeModal('modal-customers');
    openModal('modal-customer-detail');
}

function resetCustomerForm() {
    document.getElementById('customer-id').value = '';
    document.getElementById('input-customer-avatar').value = '';
    document.getElementById('input-customer-emoji').value = '👤';
    document.getElementById('input-customer-name').value = '';
    document.getElementById('input-customer-phone').value = '';
    document.getElementById('input-customer-email').value = '';
    document.getElementById('input-customer-address').value = '';
    document.getElementById('input-customer-kelurahan').value = '';
    document.getElementById('input-customer-kecamatan').value = '';
    document.getElementById('input-customer-city').value = '';
    document.getElementById('input-customer-postal').value = '';
    document.getElementById('input-customer-notes').value = '';
    document.getElementById('input-customer-label').value = 'regular';
    
    // Reset label chips
    document.querySelectorAll('.label-chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.dataset.label === 'regular') chip.classList.add('active');
    });
    
    updateCustomerAvatarPreview();
    document.getElementById('modal-customer-title').textContent = 'Tambah Pelanggan';
}

function editCustomer(customerId) {
    const customer = Store.customers.find(c => c.id === customerId);
    if (!customer) return;
    
    CustomerState.editingCustomerId = customerId;
    
    document.getElementById('customer-id').value = customer.id;
    document.getElementById('input-customer-avatar').value = customer.avatarUrl || '';
    document.getElementById('input-customer-emoji').value = customer.avatar || '👤';
    document.getElementById('input-customer-name').value = customer.name;
    document.getElementById('input-customer-phone').value = customer.phone;
    document.getElementById('input-customer-email').value = customer.email || '';
    document.getElementById('input-customer-address').value = customer.address || '';
    document.getElementById('input-customer-kelurahan').value = customer.kelurahan || '';
    document.getElementById('input-customer-kecamatan').value = customer.kecamatan || '';
    document.getElementById('input-customer-city').value = customer.city || '';
    document.getElementById('input-customer-postal').value = customer.postal || '';
    document.getElementById('input-customer-notes').value = customer.notes || '';
    document.getElementById('input-customer-label').value = customer.label || 'regular';
    
    // Update label chips
    document.querySelectorAll('.label-chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.dataset.label === customer.label) chip.classList.add('active');
    });
    
    updateCustomerAvatarPreview();
    document.getElementById('modal-customer-title').textContent = 'Edit Pelanggan';
    
    closeModal('modal-customer-detail');
    closeModal('modal-customers');
    openModal('modal-add-customer');
}

function saveCustomer() {
    const name = document.getElementById('input-customer-name').value.trim();
    const phone = document.getElementById('input-customer-phone').value.trim().replace(/\D/g, '');
    
    if (!name) {
        showToast('Nama pelanggan wajib diisi', 'error');
        return;
    }
    
    if (!phone) {
        showToast('Nomor WhatsApp wajib diisi', 'error');
        return;
    }
    
    const customerData = {
        name: name,
        phone: phone,
        email: document.getElementById('input-customer-email').value.trim(),
        avatar: document.getElementById('input-customer-emoji').value || '👤',
        avatarUrl: document.getElementById('input-customer-avatar').value.trim(),
        address: document.getElementById('input-customer-address').value.trim(),
        kelurahan: document.getElementById('input-customer-kelurahan').value.trim(),
        kecamatan: document.getElementById('input-customer-kecamatan').value.trim(),
        city: document.getElementById('input-customer-city').value.trim(),
        postal: document.getElementById('input-customer-postal').value.trim(),
        notes: document.getElementById('input-customer-notes').value.trim(),
        label: document.getElementById('input-customer-label').value || 'regular',
        updatedAt: new Date().toISOString()
    };
    
    if (CustomerState.editingCustomerId) {
        // Update existing
        const index = Store.customers.findIndex(c => c.id === CustomerState.editingCustomerId);
        if (index !== -1) {
            Store.customers[index] = { ...Store.customers[index], ...customerData };
        }
        showToast('Pelanggan berhasil diupdate', 'success');
    } else {
        // Check for duplicate phone
        const existingCustomer = Store.customers.find(c => c.phone === phone);
        if (existingCustomer) {
            showToast('Nomor WhatsApp sudah terdaftar', 'error');
            return;
        }
        
        // Add new
        const newId = 'CUST-' + Date.now().toString(36).toUpperCase();
        Store.customers.unshift({
            id: newId,
            ...customerData,
            createdAt: new Date().toISOString()
        });
        showToast('Pelanggan berhasil ditambahkan', 'success');
    }
    
    saveToStorage();
    updateCustomersBadge();
    
    closeModal('modal-add-customer');
    CustomerState.editingCustomerId = null;
    
    // Reopen customers modal
    setTimeout(() => {
        openModal('modal-customers');
        renderCustomers();
    }, 300);
}

function deleteCustomer() {
    if (!CustomerState.viewingCustomerId) return;
    
    const customer = Store.customers.find(c => c.id === CustomerState.viewingCustomerId);
    if (!customer) return;
    
    CustomerState.deleteCustomerId = CustomerState.viewingCustomerId;
    document.getElementById('delete-customer-name').textContent = `"${customer.name}" akan dihapus permanen.`;
    
    closeModal('modal-customer-detail');
    openModal('modal-delete-customer');
}

function confirmDeleteCustomer() {
    if (!CustomerState.deleteCustomerId) return;
    
    Store.customers = Store.customers.filter(c => c.id !== CustomerState.deleteCustomerId);
    
    saveToStorage();
    updateCustomersBadge();
    
    closeModal('modal-delete-customer');
    CustomerState.deleteCustomerId = null;
    CustomerState.viewingCustomerId = null;
    
    showToast('Pelanggan berhasil dihapus', 'info');
    
    setTimeout(() => {
        openModal('modal-customers');
        renderCustomers();
    }, 300);
}

// Search handler for customers
document.getElementById('customer-search')?.addEventListener('input', debounce((e) => {
    CustomerState.searchQuery = e.target.value.toLowerCase();
    renderCustomers();
}, 300));

// Avatar URL preview handler
document.getElementById('input-customer-avatar')?.addEventListener('input', updateCustomerAvatarPreview);

// ==================== INPUT HANDLERS ====================

// Update previews on URL input
document.getElementById('input-logo-url')?.addEventListener('input', updateLogoPreview);
document.getElementById('input-product-image')?.addEventListener('input', updateProductImagePreview);

// ==================== USER AUTHENTICATION ====================

function checkLoginStatus() {
    const savedSession = localStorage.getItem('varsha_session');
    if (savedSession) {
        const session = JSON.parse(savedSession);
        const customer = Store.customers.find(c => c.id === session.customerId);
        if (customer) {
            State.loggedInUser = customer;
            updateUserView();
            return;
        }
    }
    State.loggedInUser = null;
    updateUserView();
}

function updateUserView() {
    const guestView = document.getElementById('guest-view');
    const userView = document.getElementById('user-view');
    const logoutBtn = document.getElementById('btn-logout');
    
    if (State.loggedInUser) {
        guestView?.classList.add('hidden');
        userView?.classList.remove('hidden');
        logoutBtn?.classList.remove('hidden');
        
        // Update user info
        const user = State.loggedInUser;
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('user-phone').textContent = '+62' + user.phone;
        
        // Update avatar
        const avatarEl = document.getElementById('user-avatar');
        if (avatarEl) {
            avatarEl.innerHTML = user.avatarUrl 
                ? `<img src="${user.avatarUrl}" alt="${user.name}" onerror="this.parentElement.innerHTML='<span class=\\'text-3xl\\'>${user.avatar || '👤'}</span>'">`
                : `<span class="text-3xl">${user.avatar || '👤'}</span>`;
        }
        
        // Update label
        const labelEl = document.getElementById('user-label');
        if (labelEl) {
            const labelLabels = {
                vip: '⭐ VIP',
                regular: 'Regular',
                new: '🆕 Baru',
                wholesale: '🏢 Grosir'
            };
            labelEl.textContent = labelLabels[user.label] || 'Regular';
            labelEl.className = 'user-label ' + (user.label || 'regular');
        }
        
        // Update stats
        const userOrders = Store.orders.filter(o => o.customer.phone === user.phone);
        const totalSpent = userOrders.reduce((sum, o) => sum + o.total, 0);
        document.getElementById('user-orders-count').textContent = userOrders.length;
        document.getElementById('user-total-spent').textContent = 'Rp ' + formatNumber(totalSpent);
        
    } else {
        guestView?.classList.remove('hidden');
        userView?.classList.add('hidden');
        logoutBtn?.classList.add('hidden');
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const phone = document.getElementById('login-phone').value.trim().replace(/\D/g, '');
    const pin = document.getElementById('login-pin').value.trim();
    
    if (!phone || phone.length < 9) {
        showToast('Nomor WhatsApp tidak valid', 'error');
        return;
    }
    
    if (!pin || pin.length < 6) {
        showToast('PIN minimal 6 digit', 'error');
        return;
    }
    
    // Find customer by phone
    const customer = Store.customers.find(c => c.phone === phone);
    
    if (!customer) {
        showToast('Nomor tidak terdaftar', 'error');
        return;
    }
    
    // Verify PIN
    if (customer.pin !== pin) {
        showToast('PIN salah', 'error');
        return;
    }
    
    // Login success
    State.loggedInUser = customer;
    localStorage.setItem('varsha_session', JSON.stringify({
        customerId: customer.id,
        loginAt: new Date().toISOString()
    }));
    
    updateUserView();
    closeModal('modal-login');
    document.getElementById('form-login').reset();
    showToast(`Selamat datang, ${customer.name}!`, 'success');
}

function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value.trim();
    const phone = document.getElementById('register-phone').value.trim().replace(/\D/g, '');
    const email = document.getElementById('register-email').value.trim();
    const pin = document.getElementById('register-pin').value.trim();
    const pinConfirm = document.getElementById('register-pin-confirm').value.trim();
    const address = document.getElementById('register-address').value.trim();
    const city = document.getElementById('register-city').value.trim();
    
    // Validations
    if (!name) {
        showToast('Nama lengkap wajib diisi', 'error');
        return;
    }
    
    if (!phone || phone.length < 9) {
        showToast('Nomor WhatsApp tidak valid', 'error');
        return;
    }
    
    if (!pin || pin.length < 6) {
        showToast('PIN minimal 6 digit', 'error');
        return;
    }
    
    if (!/^\d{6,}$/.test(pin)) {
        showToast('PIN harus berupa angka', 'error');
        return;
    }
    
    if (pin !== pinConfirm) {
        showToast('Konfirmasi PIN tidak sama', 'error');
        return;
    }
    
    if (!address) {
        showToast('Alamat lengkap wajib diisi', 'error');
        return;
    }
    
    if (!city) {
        showToast('Kota wajib diisi', 'error');
        return;
    }
    
    // Check if phone already registered
    const existingCustomer = Store.customers.find(c => c.phone === phone);
    if (existingCustomer) {
        showToast('Nomor sudah terdaftar, silakan login', 'error');
        return;
    }
    
    // Create new customer
    const newCustomer = {
        id: 'CUST-' + Date.now().toString(36).toUpperCase(),
        name: name,
        phone: phone,
        email: email,
        pin: pin, // In production, this should be hashed
        avatar: document.getElementById('register-avatar-emoji').value || '👤',
        avatarUrl: document.getElementById('register-avatar-url').value.trim(),
        address: address,
        kelurahan: document.getElementById('register-kelurahan').value.trim(),
        kecamatan: document.getElementById('register-kecamatan').value.trim(),
        city: city,
        postal: document.getElementById('register-postal').value.trim(),
        notes: '',
        label: 'new',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    Store.customers.unshift(newCustomer);
    saveToStorage();
    updateCustomersBadge();
    
    // Auto login after register
    State.loggedInUser = newCustomer;
    localStorage.setItem('varsha_session', JSON.stringify({
        customerId: newCustomer.id,
        loginAt: new Date().toISOString()
    }));
    
    updateUserView();
    closeModal('modal-register');
    document.getElementById('form-register').reset();
    showToast('Registrasi berhasil! Selamat berbelanja', 'success');
}

function handleLogout() {
    if (confirm('Yakin ingin keluar?')) {
        State.loggedInUser = null;
        localStorage.removeItem('varsha_session');
        updateUserView();
        navigateTo('home');
        showToast('Anda telah keluar', 'info');
    }
}

function handleChangePin(event) {
    event.preventDefault();
    
    if (!State.loggedInUser) return;
    
    const oldPin = document.getElementById('old-pin').value.trim();
    const newPin = document.getElementById('new-pin').value.trim();
    const newPinConfirm = document.getElementById('new-pin-confirm').value.trim();
    
    if (oldPin !== State.loggedInUser.pin) {
        showToast('PIN lama salah', 'error');
        return;
    }
    
    if (!newPin || newPin.length < 6) {
        showToast('PIN baru minimal 6 digit', 'error');
        return;
    }
    
    if (!/^\d{6,}$/.test(newPin)) {
        showToast('PIN harus berupa angka', 'error');
        return;
    }
    
    if (newPin !== newPinConfirm) {
        showToast('Konfirmasi PIN tidak sama', 'error');
        return;
    }
    
    // Update PIN
    const customerIndex = Store.customers.findIndex(c => c.id === State.loggedInUser.id);
    if (customerIndex !== -1) {
        Store.customers[customerIndex].pin = newPin;
        Store.customers[customerIndex].updatedAt = new Date().toISOString();
        State.loggedInUser = Store.customers[customerIndex];
        saveToStorage();
        
        closeModal('modal-change-pin');
        document.getElementById('form-change-pin').reset();
        showToast('PIN berhasil diubah', 'success');
    }
}

// Register Avatar Picker
function renderRegisterAvatarPicker() {
    const registerPicker = document.getElementById('register-avatar-picker');
    const editPicker = document.getElementById('edit-avatar-picker');
    
    const registerAvatarHTML = Store.avatars.map(avatar => `
        <div class="emoji-option" onclick="selectRegisterAvatar('${avatar}', this)" data-emoji="${avatar}">${avatar}</div>
    `).join('');
    
    const editAvatarHTML = Store.avatars.map(avatar => `
        <div class="emoji-option" onclick="selectEditAvatar('${avatar}', this)" data-emoji="${avatar}">${avatar}</div>
    `).join('');
    
    if (registerPicker) registerPicker.innerHTML = registerAvatarHTML;
    if (editPicker) editPicker.innerHTML = editAvatarHTML;
}

function toggleRegisterAvatarPicker() {
    const picker = document.getElementById('register-avatar-picker');
    picker?.classList.toggle('hidden');
}

function selectRegisterAvatar(avatar, element) {
    const picker = element.closest('.emoji-picker');
    
    picker.querySelectorAll('.emoji-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    
    document.getElementById('register-avatar-emoji').value = avatar;
    document.getElementById('register-avatar-url').value = '';
    updateRegisterAvatarPreview();
    
    picker.classList.add('hidden');
}

function updateRegisterAvatarPreview() {
    const preview = document.getElementById('register-avatar-preview');
    const avatarUrl = document.getElementById('register-avatar-url')?.value.trim();
    const emoji = document.getElementById('register-avatar-emoji')?.value || '👤';
    
    if (preview) {
        preview.innerHTML = avatarUrl 
            ? `<img src="${avatarUrl}" alt="Avatar" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<span class=\\'text-4xl\\'>${emoji}</span>'">`
            : `<span class="text-4xl">${emoji}</span>`;
    }
}

// Edit Profile Avatar Picker
function toggleEditAvatarPicker() {
    const picker = document.getElementById('edit-avatar-picker');
    picker?.classList.toggle('hidden');
}

function selectEditAvatar(avatar, element) {
    const picker = element.closest('.emoji-picker');
    
    picker.querySelectorAll('.emoji-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    
    document.getElementById('edit-avatar-emoji').value = avatar;
    document.getElementById('edit-avatar-url').value = '';
    updateEditAvatarPreview();
    
    picker.classList.add('hidden');
}

function updateEditAvatarPreview() {
    const preview = document.getElementById('edit-avatar-preview');
    const avatarUrl = document.getElementById('edit-avatar-url')?.value.trim();
    const emoji = document.getElementById('edit-avatar-emoji')?.value || '👤';
    
    if (preview) {
        preview.innerHTML = avatarUrl 
            ? `<img src="${avatarUrl}" alt="Avatar" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<span class=\\'text-4xl\\'>${emoji}</span>'">`
            : `<span class="text-4xl">${emoji}</span>`;
    }
}

function loadEditProfileForm() {
    if (!State.loggedInUser) return;
    
    const user = State.loggedInUser;
    document.getElementById('edit-avatar-emoji').value = user.avatar || '👤';
    document.getElementById('edit-avatar-url').value = user.avatarUrl || '';
    document.getElementById('edit-user-name').value = user.name;
    document.getElementById('edit-user-phone').value = user.phone;
    document.getElementById('edit-user-email').value = user.email || '';
    document.getElementById('edit-user-address').value = user.address || '';
    document.getElementById('edit-user-kelurahan').value = user.kelurahan || '';
    document.getElementById('edit-user-kecamatan').value = user.kecamatan || '';
    document.getElementById('edit-user-city').value = user.city || '';
    document.getElementById('edit-user-postal').value = user.postal || '';
    
    updateEditAvatarPreview();
}

function saveUserProfile() {
    if (!State.loggedInUser) return;
    
    const name = document.getElementById('edit-user-name').value.trim();
    const address = document.getElementById('edit-user-address').value.trim();
    const city = document.getElementById('edit-user-city').value.trim();
    
    if (!name) {
        showToast('Nama lengkap wajib diisi', 'error');
        return;
    }
    
    if (!address) {
        showToast('Alamat wajib diisi', 'error');
        return;
    }
    
    if (!city) {
        showToast('Kota wajib diisi', 'error');
        return;
    }
    
    const customerIndex = Store.customers.findIndex(c => c.id === State.loggedInUser.id);
    if (customerIndex !== -1) {
        Store.customers[customerIndex] = {
            ...Store.customers[customerIndex],
            name: name,
            email: document.getElementById('edit-user-email').value.trim(),
            avatar: document.getElementById('edit-avatar-emoji').value || '👤',
            avatarUrl: document.getElementById('edit-avatar-url').value.trim(),
            address: address,
            kelurahan: document.getElementById('edit-user-kelurahan').value.trim(),
            kecamatan: document.getElementById('edit-user-kecamatan').value.trim(),
            city: city,
            postal: document.getElementById('edit-user-postal').value.trim(),
            updatedAt: new Date().toISOString()
        };
        
        State.loggedInUser = Store.customers[customerIndex];
        saveToStorage();
        updateUserView();
        
        closeModal('modal-edit-profile');
        showToast('Profil berhasil diupdate', 'success');
    }
}

function renderMyOrders() {
    const container = document.getElementById('my-orders-list');
    if (!container || !State.loggedInUser) return;
    
    const myOrders = Store.orders.filter(o => o.customer.phone === State.loggedInUser.phone);
    
    if (myOrders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <h3 class="empty-title">Belum ada pesanan</h3>
                <p class="empty-text">Yuk mulai belanja!</p>
            </div>
        `;
        return;
    }
    
    const statusLabels = {
        pending: '🕐 Menunggu Konfirmasi Ongkir',
        confirmed: '💳 Menunggu Pembayaran',
        processing: '⚙️ Diproses',
        shipped: '🚚 Dikirim',
        completed: '📦 Selesai',
        cancelled: '❌ Dibatalkan'
    };
    
    container.innerHTML = myOrders.map(order => {
        const itemsCount = order.items.reduce((sum, item) => sum + item.qty, 0);
        const date = new Date(order.createdAt);
        const dateStr = date.toLocaleDateString('id-ID', { 
            day: 'numeric', 
            month: 'short', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const displayTotal = order.grandTotal || order.total;
        const hasShipping = order.shippingCost && order.shippingCost > 0;
        const needsAction = order.status === 'confirmed' && hasShipping;
        
        return `
            <div class="order-card" onclick="viewCustomerOrderDetail('${order.id}')">
                <div class="order-header">
                    <span class="order-id">#${order.id}</span>
                    <span class="order-status ${order.status}">${statusLabels[order.status]}</span>
                </div>
                <div class="order-summary">
                    <span class="order-items-count">${itemsCount} item ${hasShipping ? '• 🚚 Rp ' + formatNumber(order.shippingCost) : ''}</span>
                    <span class="order-total">Rp ${formatNumber(displayTotal)}</span>
                </div>
                <span class="order-date">${dateStr}</span>
                ${needsAction ? '<div class="order-action-badge">⚡ Perlu Konfirmasi</div>' : ''}
            </div>
        `;
    }).join('');
}

// State for customer order viewing
let currentCustomerOrderId = null;

function viewCustomerOrderDetail(orderId) {
    const order = Store.orders.find(o => o.id === orderId);
    if (!order) return;
    
    currentCustomerOrderId = orderId;
    
    const statusInfo = {
        pending: {
            icon: '🕐',
            text: 'Menunggu Konfirmasi Ongkir',
            desc: 'Admin sedang menghitung ongkos kirim berdasarkan alamat Anda',
            color: 'pending'
        },
        confirmed: {
            icon: '💳',
            text: 'Menunggu Pembayaran',
            desc: 'Silakan lanjutkan pembayaran atau batalkan pesanan',
            color: 'confirmed'
        },
        processing: {
            icon: '⚙️',
            text: 'Sedang Diproses',
            desc: 'Pesanan Anda sedang disiapkan',
            color: 'processing'
        },
        shipped: {
            icon: '🚚',
            text: 'Dalam Pengiriman',
            desc: 'Pesanan sedang dalam perjalanan ke alamat Anda',
            color: 'shipped'
        },
        completed: {
            icon: '📦',
            text: 'Pesanan Selesai',
            desc: 'Terima kasih telah berbelanja!',
            color: 'completed'
        },
        cancelled: {
            icon: '❌',
            text: 'Pesanan Dibatalkan',
            desc: 'Pesanan ini telah dibatalkan',
            color: 'cancelled'
        }
    };
    
    const status = statusInfo[order.status] || statusInfo.pending;
    const shippingCost = order.shippingCost || 0;
    const grandTotal = order.grandTotal || order.total;
    const hasShipping = shippingCost > 0;
    const needsPayment = order.status === 'confirmed' && hasShipping;
    const canCancel = order.status === 'pending' || order.status === 'confirmed';
    
    const date = new Date(order.createdAt);
    const dateStr = date.toLocaleDateString('id-ID', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const container = document.getElementById('customer-order-detail-content');
    container.innerHTML = `
        <!-- Status Card -->
        <div class="customer-order-status-card ${status.color}">
            <div class="customer-order-status-icon">${status.icon}</div>
            <div class="customer-order-status-text">${status.text}</div>
            <div class="customer-order-status-desc">${status.desc}</div>
        </div>
        
        <!-- Order Info -->
        <div class="customer-order-summary-card">
            <div class="customer-order-summary-title">📋 Informasi Pesanan</div>
            <div class="customer-order-item-row">
                <span class="customer-order-item-name">No. Pesanan</span>
                <span class="customer-order-item-price">#${order.id}</span>
            </div>
            <div class="customer-order-item-row">
                <span class="customer-order-item-name">Tanggal</span>
                <span class="customer-order-item-price">${dateStr}</span>
            </div>
            <div class="customer-order-item-row">
                <span class="customer-order-item-name">Alamat</span>
                <span class="customer-order-item-price" style="text-align: right; max-width: 60%;">${order.customer.address}</span>
            </div>
        </div>
        
        <!-- Order Items -->
        <div class="customer-order-summary-card">
            <div class="customer-order-summary-title">🛒 Detail Pesanan</div>
            ${order.items.map(item => `
                <div class="customer-order-item-row">
                    <span class="customer-order-item-name">${item.name} x${item.qty}</span>
                    <span class="customer-order-item-price">Rp ${formatNumber(item.price * item.qty)}</span>
                </div>
            `).join('')}
            
            <div class="customer-order-divider"></div>
            
            <div class="customer-order-total-row subtotal">
                <span>Subtotal</span>
                <span>Rp ${formatNumber(order.total)}</span>
            </div>
            
            <div class="customer-order-total-row shipping">
                <span>Ongkos Kirim</span>
                <span>${hasShipping ? 'Rp ' + formatNumber(shippingCost) : '⏳ Menunggu konfirmasi'}</span>
            </div>
            
            <div class="customer-order-total-row grand-total">
                <span>Total Bayar</span>
                <span>Rp ${formatNumber(grandTotal)}</span>
            </div>
        </div>
        
        ${order.status === 'pending' ? `
            <div class="order-waiting-message">
                <p>⏳ <strong>Menunggu konfirmasi ongkir dari admin.</strong><br>Anda akan menerima notifikasi WhatsApp setelah ongkir dikonfirmasi.</p>
            </div>
        ` : ''}
        
        ${needsPayment ? `
            <div class="order-confirmed-message">
                <p>💳 <strong>Ongkir sudah dikonfirmasi!</strong><br>Silakan lanjutkan pembayaran atau batalkan pesanan.</p>
            </div>
            
            <div class="customer-order-actions">
                <button onclick="showPaymentModal('${order.id}')" class="btn-pay-now">
                    💳 Lanjut Bayar - Rp ${formatNumber(grandTotal)}
                </button>
                <button onclick="showCancelOrderModal('${order.id}')" class="btn-cancel-order">
                    ❌ Batalkan Pesanan
                </button>
            </div>
        ` : ''}
        
        ${canCancel && order.status === 'pending' ? `
            <div class="customer-order-actions">
                <button onclick="showCancelOrderModal('${order.id}')" class="btn-cancel-order">
                    ❌ Batalkan Pesanan
                </button>
            </div>
        ` : ''}
        
        ${order.status === 'processing' || order.status === 'shipped' ? `
            <div class="customer-order-info-text">
                📱 Hubungi kami via WhatsApp jika ada pertanyaan tentang pesanan Anda.
            </div>
        ` : ''}
        
        ${order.status === 'completed' ? `
            <div class="customer-order-info-text">
                ⭐ Terima kasih telah berbelanja di ${Store.profile.name}!<br>Kami tunggu pesanan berikutnya 😊
            </div>
        ` : ''}
        
        ${order.status === 'cancelled' ? `
            <div class="customer-order-info-text">
                ℹ️ Pesanan ini telah dibatalkan. Silakan buat pesanan baru jika ingin melanjutkan belanja.
            </div>
        ` : ''}
    `;
    
    closeModal('modal-my-orders');
    openModal('modal-customer-order-detail');
}

function closeCustomerOrderDetail() {
    closeModal('modal-customer-order-detail');
    openModal('modal-my-orders');
    renderMyOrders();
}

function showPaymentModal(orderId) {
    const order = Store.orders.find(o => o.id === orderId);
    if (!order) return;
    
    currentCustomerOrderId = orderId;
    
    const grandTotal = order.grandTotal || order.total;
    
    // Render bank info
    const bankInfoContainer = document.getElementById('payment-bank-info');
    bankInfoContainer.innerHTML = `
        <div class="payment-bank-row">
            <span class="payment-bank-label">Bank</span>
            <span class="payment-bank-value">${Store.profile.bank || 'BCA'}</span>
        </div>
        <div class="payment-bank-row">
            <span class="payment-bank-label">No. Rekening</span>
            <span class="payment-bank-value account-number">${Store.profile.accountNumber || '1234567890'}</span>
        </div>
        <div class="payment-bank-row">
            <span class="payment-bank-label">Atas Nama</span>
            <span class="payment-bank-value">${Store.profile.accountName || Store.profile.name}</span>
        </div>
    `;
    
    // Render amount
    const amountContainer = document.getElementById('payment-amount');
    amountContainer.innerHTML = `
        <div class="payment-amount-label">Total yang harus dibayar</div>
        <div class="payment-amount-value">Rp ${formatNumber(grandTotal)}</div>
    `;
    
    openModal('modal-payment');
}

function cancelPayment() {
    closeModal('modal-payment');
    // Stay on the order detail page
}

function confirmPayment() {
    const order = Store.orders.find(o => o.id === currentCustomerOrderId);
    if (!order) return;
    
    // Update order status to processing
    order.status = 'processing';
    order.paidAt = new Date().toISOString();
    order.updatedAt = new Date().toISOString();
    
    saveToStorage();
    updateOrdersBadge();
    
    closeModal('modal-payment');
    closeModal('modal-customer-order-detail');
    
    showToast('Pembayaran dikonfirmasi! Pesanan sedang diproses.', 'success');
    
    // Send WhatsApp notification to store
    const message = `✅ *KONFIRMASI PEMBAYARAN*\n\n` +
        `No. Pesanan: *#${order.id}*\n` +
        `Pelanggan: ${order.customer.name}\n` +
        `Total: Rp ${formatNumber(order.grandTotal || order.total)}\n\n` +
        `Pelanggan telah mengkonfirmasi pembayaran.\n` +
        `Silakan cek dan proses pesanan.`;
    
    const waUrl = `https://wa.me/62${Store.profile.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    
    // Refresh my orders
    openModal('modal-my-orders');
    renderMyOrders();
}

function showCancelOrderModal(orderId) {
    currentCustomerOrderId = orderId;
    const order = Store.orders.find(o => o.id === orderId);
    if (!order) return;
    
    document.getElementById('cancel-order-text').textContent = 
        `Pesanan #${order.id} akan dibatalkan. Tindakan ini tidak dapat dikembalikan.`;
    
    openModal('modal-cancel-order');
}

function confirmCancelOrder() {
    const order = Store.orders.find(o => o.id === currentCustomerOrderId);
    if (!order) return;
    
    // Update order status to cancelled
    order.status = 'cancelled';
    order.cancelledAt = new Date().toISOString();
    order.cancelledBy = 'customer';
    order.updatedAt = new Date().toISOString();
    
    saveToStorage();
    updateOrdersBadge();
    
    closeModal('modal-cancel-order');
    closeModal('modal-customer-order-detail');
    
    showToast('Pesanan berhasil dibatalkan', 'info');
    
    // Refresh my orders
    openModal('modal-my-orders');
    renderMyOrders();
}

// ==================== CHECKOUT WITH CUSTOMER DATA ====================

function handleCheckout() {
    if (Store.cart.length === 0) {
        showToast('Keranjang kosong', 'error');
        return;
    }
    
    // ==================== AUTH WAJIB ====================
    // Cek apakah user sudah login sebelum checkout
    if (!State.loggedInUser) {
        showToast('Silakan login terlebih dahulu untuk checkout', 'error');
        // Redirect ke halaman login
        navigateTo('akun');
        return;
    }
    
    // Open checkout modal
    openModal('modal-checkout');
    
    // Render order summary
    renderCheckoutSummary();
    
    const nameInput = document.getElementById('checkout-name');
    const phoneInput = document.getElementById('checkout-phone');
    const addressInput = document.getElementById('checkout-address');
    const notesInput = document.getElementById('checkout-notes');
    const phoneContainer = document.getElementById('checkout-phone-container');
    const phoneHint = document.getElementById('checkout-phone-hint');
    const addressHint = document.getElementById('checkout-address-hint');
    
    // Pre-fill if logged in
    if (State.loggedInUser) {
        const user = State.loggedInUser;
        
        // Set name (readonly for logged in user)
        nameInput.value = user.name;
        nameInput.readOnly = true;
        nameInput.classList.add('input-readonly');
        
        // Set phone (readonly for logged in user)
        phoneInput.value = user.phone;
        phoneInput.readOnly = true;
        phoneInput.classList.add('input-readonly');
        phoneContainer.classList.add('input-readonly-container');
        phoneHint.classList.remove('hidden');
        
        // Set address (editable but pre-filled)
        let fullAddress = user.address || '';
        if (user.kelurahan) fullAddress += ', ' + user.kelurahan;
        if (user.kecamatan) fullAddress += ', ' + user.kecamatan;
        if (user.city) fullAddress += ', ' + user.city;
        if (user.postal) fullAddress += ' ' + user.postal;
        
        addressInput.value = fullAddress;
        addressInput.readOnly = false;
        addressInput.classList.remove('input-readonly');
        addressHint.classList.remove('hidden');
        
    } else {
        // Guest user - all fields editable
        nameInput.value = '';
        nameInput.readOnly = false;
        nameInput.classList.remove('input-readonly');
        
        phoneInput.value = '';
        phoneInput.readOnly = false;
        phoneInput.classList.remove('input-readonly');
        phoneContainer.classList.remove('input-readonly-container');
        phoneHint.classList.add('hidden');
        
        addressInput.value = '';
        addressInput.readOnly = false;
        addressInput.classList.remove('input-readonly');
        addressHint.classList.add('hidden');
    }
    
    notesInput.value = '';
}

function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items-summary');
    if (!container) return;
    
    let total = 0;
    container.innerHTML = Store.cart.map(item => {
        const product = Store.products.find(p => p.id === item.id);
        if (!product) return '';
        
        const subtotal = product.price * item.qty;
        total += subtotal;
        
        return `
            <div class="checkout-item-row">
                <span class="checkout-item-name">${product.name} x${item.qty}</span>
                <span class="checkout-item-price">Rp ${formatNumber(subtotal)}</span>
            </div>
        `;
    }).join('');
    
    document.getElementById('checkout-total').textContent = 'Rp ' + formatNumber(total);
}

function processCheckout(event) {
    event.preventDefault();
    
    // ==================== AUTH WAJIB ====================
    // Cek apakah user sudah login
    if (!State.loggedInUser) {
        showToast('Silakan login terlebih dahulu untuk melakukan pemesanan', 'error');
        closeModal('modal-checkout');
        openModal('modal-login');
        return;
    }
    
    // Validasi cart tidak kosong
    if (Store.cart.length === 0) {
        showToast('Keranjang belanja kosong', 'error');
        return;
    }
    
    const name = document.getElementById('checkout-name').value.trim();
    const phone = document.getElementById('checkout-phone').value.trim().replace(/\D/g, '');
    const address = document.getElementById('checkout-address').value.trim();
    const notes = document.getElementById('checkout-notes').value.trim();
    
    if (!name) {
        showToast('Nama penerima wajib diisi', 'error');
        return;
    }
    
    if (!phone || phone.length < 9) {
        showToast('Nomor WhatsApp tidak valid', 'error');
        return;
    }
    
    if (!address) {
        showToast('Alamat pengiriman wajib diisi', 'error');
        return;
    }
    
    // ==================== SECURE ORDER CREATION ====================
    // Pelanggan hanya kirim ID produk + qty
    // Harga diambil dari Store.products (yang sudah sync dengan Firebase)
    // Total dihitung ulang dari harga resmi
    
    // Validasi semua produk ada di database
    const invalidItems = Store.cart.filter(item => {
        const product = Store.products.find(p => p.id === item.id);
        return !product || product.stock < item.qty;
    });
    
    if (invalidItems.length > 0) {
        showToast('Beberapa produk tidak tersedia atau stok tidak cukup', 'error');
        return;
    }
    
    // Build order items dengan harga dari database (bukan dari client)
    const orderItems = Store.cart.map(item => {
        // Ambil produk dari database (Store.products yang sudah sync dengan Firebase)
        const product = Store.products.find(p => p.id === item.id);
        
        // Gunakan harga RESMI dari database, bukan dari input user
        return {
            productId: item.id,           // Hanya ID produk
            qty: item.qty,                // Hanya quantity
            // Data berikut diambil dari database, BUKAN dari client
            name: product.name,
            price: product.price,         // Harga resmi dari database
            unit: product.unit,
            image: product.image,
            imageUrl: product.imageUrl || ''
        };
    });
    
    // Hitung total dari harga RESMI database
    const total = orderItems.reduce((sum, item) => {
        return sum + (item.price * item.qty);
    }, 0);
    
    // Generate order ID
    const orderId = 'ORD-' + Date.now().toString(36).toUpperCase();
    
    // Create order object dengan data tervalidasi
    const order = {
        id: orderId,
        // Items dengan harga dari database
        items: orderItems,
        // Total dihitung dari harga resmi
        total: total,
        status: 'pending',
        customer: {
            name: name,
            phone: phone,
            address: address
        },
        notes: notes,
        // Link ke customer ID untuk tracking
        customerId: State.loggedInUser.id,
        customerPhone: State.loggedInUser.phone,
        // Timestamps
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    
    // Kurangi stok produk
    orderItems.forEach(item => {
        const product = Store.products.find(p => p.id === item.productId);
        if (product) {
            product.stock = Math.max(0, product.stock - item.qty);
        }
    });
    
    // Save order
    Store.orders.unshift(order);
    saveToStorage();
    updateOrdersBadge();
    
    // Build WhatsApp message
    let message = `🛒 *PESANAN BARU*\n`;
    message += `*${Store.profile.name}*\n\n`;
    message += `📝 *No. Pesanan: ${orderId}*\n\n`;
    message += `👤 *Data Penerima:*\n`;
    message += `Nama: ${name}\n`;
    message += `WA: +62${phone}\n`;
    message += `Alamat: ${address}\n`;
    if (notes) message += `Catatan: ${notes}\n`;
    message += `\n`;
    message += `📋 *Detail Pesanan:*\n`;
    message += `─────────────\n`;
    
    Store.cart.forEach((item, i) => {
        const product = Store.products.find(p => p.id === item.id);
        if (product) {
            message += `${i + 1}. ${product.name}\n`;
            message += `   ${item.qty} ${product.unit} × Rp ${formatNumber(product.price)}\n`;
            message += `   = Rp ${formatNumber(product.price * item.qty)}\n\n`;
        }
    });
    
    message += `─────────────\n`;
    message += `💰 *TOTAL: Rp ${formatNumber(total)}*\n\n`;
    
    if (Store.profile.bank && Store.profile.accountNumber) {
        message += `💳 *Transfer ke:*\n`;
        message += `${Store.profile.bank} - ${Store.profile.accountNumber}\n`;
        message += `a.n ${Store.profile.accountName}\n\n`;
    }
    
    message += `Terima kasih! ${Store.profile.logo}`;
    
    const waUrl = `https://wa.me/62${Store.profile.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    
    // Clear cart after checkout
    Store.cart = [];
    saveToStorage();
    updateCartBadges();
    renderCart();
    
    closeModal('modal-checkout');
    showToast('Pesanan berhasil dibuat!', 'success');
}

// ==================== ADMIN AUTHENTICATION ====================

function checkAdminLoginStatus() {
    const savedAdminSession = localStorage.getItem('varsha_admin_session');
    if (savedAdminSession) {
        const session = JSON.parse(savedAdminSession);
        const admin = Store.admins.find(a => a.id === session.adminId);
        if (admin) {
            State.loggedInAdmin = admin;
            updateAdminView();
            return;
        }
    }
    State.loggedInAdmin = null;
    updateAdminView();
}

function updateAdminView() {
    const guestView = document.getElementById('admin-guest-view');
    const loggedView = document.getElementById('admin-logged-view');
    const managementSection = document.getElementById('admin-management-section');
    const manageAdminsBtn = document.getElementById('btn-manage-admins');
    
    if (State.loggedInAdmin) {
        guestView?.classList.add('hidden');
        loggedView?.classList.remove('hidden');
        managementSection?.classList.remove('hidden');
        
        // Update admin info display
        const admin = State.loggedInAdmin;
        document.getElementById('admin-name-display').textContent = admin.name;
        
        const roleLabels = {
            owner: '👑 Owner',
            admin: '⚙️ Admin',
            staff: '👤 Staff'
        };
        document.getElementById('admin-role-display').textContent = roleLabels[admin.role] || admin.role;
        
        // Update avatar
        const avatarEl = document.getElementById('admin-avatar-display');
        if (avatarEl) {
            avatarEl.innerHTML = admin.avatarUrl 
                ? `<img src="${admin.avatarUrl}" alt="${admin.name}" onerror="this.parentElement.innerHTML='<span class=\\'text-3xl\\'>${admin.avatar || '👨‍💼'}</span>'">`
                : `<span class="text-3xl">${admin.avatar || '👨‍💼'}</span>`;
        }
        
        // Show manage admins button only for owner
        if (admin.role === 'owner' && manageAdminsBtn) {
            manageAdminsBtn.classList.remove('hidden');
        } else if (manageAdminsBtn) {
            manageAdminsBtn.classList.add('hidden');
        }
        
        // Update admins badge
        updateAdminsBadge();
        
    } else {
        guestView?.classList.remove('hidden');
        loggedView?.classList.add('hidden');
        managementSection?.classList.add('hidden');
    }
}

function updateAdminsBadge() {
    const totalAdmins = Store.admins.length;
    const badge = document.getElementById('admins-badge-menu');
    if (badge) {
        badge.textContent = totalAdmins > 0 ? totalAdmins : '';
    }
}

function renderAdminAvatarPicker() {
    const picker = document.getElementById('admin-avatar-picker');
    if (!picker) return;
    
    picker.innerHTML = adminAvatars.map(avatar => `
        <div class="emoji-option" onclick="selectAdminAvatar('${avatar}', this)" data-emoji="${avatar}">${avatar}</div>
    `).join('');
}

function toggleAdminAvatarPicker() {
    const picker = document.getElementById('admin-avatar-picker');
    picker?.classList.toggle('hidden');
}

function selectAdminAvatar(avatar, element) {
    const picker = element.closest('.emoji-picker');
    
    picker.querySelectorAll('.emoji-option').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    
    document.getElementById('admin-avatar-emoji').value = avatar;
    document.getElementById('admin-avatar-url').value = '';
    updateAdminAvatarPreview();
    
    picker.classList.add('hidden');
}

function updateAdminAvatarPreview() {
    const preview = document.getElementById('admin-avatar-preview');
    const avatarUrl = document.getElementById('admin-avatar-url')?.value.trim();
    const emoji = document.getElementById('admin-avatar-emoji')?.value || '👨‍💼';
    
    if (preview) {
        preview.innerHTML = avatarUrl 
            ? `<img src="${avatarUrl}" alt="Avatar" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<span class=\\'text-4xl\\'>${emoji}</span>'">`
            : `<span class="text-4xl">${emoji}</span>`;
    }
}

function handleAdminLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('admin-login-username').value.trim().toLowerCase();
    const password = document.getElementById('admin-login-password').value;
    
    if (!username) {
        showToast('Username wajib diisi', 'error');
        return;
    }
    
    if (!password) {
        showToast('Password wajib diisi', 'error');
        return;
    }
    
    // Find admin by username
    const admin = Store.admins.find(a => a.username.toLowerCase() === username);
    
    if (!admin) {
        showToast('Username tidak ditemukan', 'error');
        return;
    }
    
    // Verify password
    if (admin.password !== password) {
        showToast('Password salah', 'error');
        return;
    }
    
    // Login success
    State.loggedInAdmin = admin;
    admin.lastLogin = new Date().toISOString();
    saveToStorage();
    
    localStorage.setItem('varsha_admin_session', JSON.stringify({
        adminId: admin.id,
        loginAt: new Date().toISOString()
    }));
    
    updateAdminView();
    closeModal('modal-admin-login');
    document.getElementById('form-admin-login').reset();
    showToast(`Selamat datang, ${admin.name}!`, 'success');
}

function handleAdminRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('admin-register-name').value.trim();
    const username = document.getElementById('admin-register-username').value.trim().toLowerCase();
    const phone = document.getElementById('admin-register-phone').value.trim().replace(/\D/g, '');
    const email = document.getElementById('admin-register-email').value.trim();
    const password = document.getElementById('admin-register-password').value;
    const passwordConfirm = document.getElementById('admin-register-password-confirm').value;
    const referralCode = document.getElementById('admin-register-referral').value.trim().toUpperCase();
    
    // Validations
    if (!name) {
        showToast('Nama lengkap wajib diisi', 'error');
        return;
    }
    
    if (!username || username.length < 4) {
        showToast('Username minimal 4 karakter', 'error');
        return;
    }
    
    if (!/^[a-z0-9_]+$/.test(username)) {
        showToast('Username hanya boleh huruf, angka, dan underscore', 'error');
        return;
    }
    
    if (!phone || phone.length < 9) {
        showToast('Nomor WhatsApp tidak valid', 'error');
        return;
    }
    
    if (!password || password.length < 6) {
        showToast('Password minimal 6 karakter', 'error');
        return;
    }
    
    if (password !== passwordConfirm) {
        showToast('Konfirmasi password tidak sama', 'error');
        return;
    }
    
    // Check if username already exists
    const existingAdmin = Store.admins.find(a => a.username.toLowerCase() === username);
    if (existingAdmin) {
        showToast('Username sudah digunakan', 'error');
        return;
    }
    
    // Check if this is first admin (auto become owner, no referral needed)
    const isFirstAdmin = Store.admins.length === 0;
    let finalRole = 'owner';
    let usedReferralCode = null;
    
    if (!isFirstAdmin) {
        // Validate referral code for non-first admin
        if (!referralCode) {
            showToast('Referensi code wajib diisi', 'error');
            return;
        }
        
        const validation = validateReferralCode(referralCode);
        if (!validation.valid) {
            showToast(validation.error, 'error');
            return;
        }
        
        finalRole = validation.referral.role;
        usedReferralCode = referralCode;
    }
    
    // Create new admin
    const newAdmin = {
        id: 'ADM-' + Date.now().toString(36).toUpperCase(),
        name: name,
        username: username,
        phone: phone,
        email: email,
        password: password, // In production, this should be hashed
        avatar: document.getElementById('admin-avatar-emoji').value || '👨‍💼',
        avatarUrl: document.getElementById('admin-avatar-url').value.trim(),
        role: finalRole,
        referralCode: usedReferralCode,
        status: 'active',
        createdAt: new Date().toISOString(),
        lastLogin: null
    };
    
    // Mark referral code as used
    if (usedReferralCode) {
        useReferralCode(usedReferralCode, newAdmin.id);
    }
    
    Store.admins.push(newAdmin);
    saveToStorage();
    updateAdminsBadge();
    
    // Auto login after register
    State.loggedInAdmin = newAdmin;
    localStorage.setItem('varsha_admin_session', JSON.stringify({
        adminId: newAdmin.id,
        loginAt: new Date().toISOString()
    }));
    
    updateAdminView();
    closeModal('modal-admin-register');
    document.getElementById('form-admin-register').reset();
    
    if (isFirstAdmin) {
        showToast('Registrasi berhasil! Anda adalah Owner pertama.', 'success');
    } else {
        showToast(`Registrasi berhasil sebagai ${finalRole}!`, 'success');
    }
}

function handleAdminLogout() {
    if (confirm('Yakin ingin keluar dari admin?')) {
        State.loggedInAdmin = null;
        localStorage.removeItem('varsha_admin_session');
        updateAdminView();
        showToast('Anda telah keluar', 'info');
    }
}

function renderAdminProfile() {
    const container = document.getElementById('admin-profile-content');
    if (!container || !State.loggedInAdmin) return;
    
    const admin = State.loggedInAdmin;
    const roleLabels = {
        owner: '👑 Owner',
        admin: '⚙️ Admin',
        staff: '👤 Staff'
    };
    
    container.innerHTML = `
        <!-- Admin Header -->
        <div class="admin-profile-header">
            <div class="admin-profile-avatar">
                ${admin.avatarUrl 
                    ? `<img src="${admin.avatarUrl}" alt="${admin.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="emoji" style="display:none">${admin.avatar}</span>`
                    : `<span class="emoji">${admin.avatar}</span>`
                }
            </div>
            <h3 class="admin-profile-name">${admin.name}</h3>
            <span class="admin-profile-role">${roleLabels[admin.role]}</span>
        </div>
        
        <!-- Admin Info Form -->
        <form id="form-admin-profile" class="form-container">
            <div class="form-section">
                <label class="form-label">Nama Lengkap</label>
                <input type="text" id="edit-admin-name" class="form-input" value="${admin.name}" required>
            </div>
            
            <div class="form-section">
                <label class="form-label">Username</label>
                <input type="text" id="edit-admin-username" class="form-input" value="${admin.username}" disabled>
                <p class="form-hint">Username tidak dapat diubah</p>
            </div>
            
            <div class="form-section">
                <label class="form-label">Nomor WhatsApp</label>
                <div class="input-with-prefix">
                    <span class="input-prefix">+62</span>
                    <input type="tel" id="edit-admin-phone" class="form-input" value="${admin.phone}" inputmode="tel">
                </div>
            </div>
            
            <div class="form-section">
                <label class="form-label">Email</label>
                <input type="email" id="edit-admin-email" class="form-input" value="${admin.email || ''}" inputmode="email">
            </div>
            
            <div class="form-divider">Ubah Password</div>
            
            <div class="form-section">
                <label class="form-label">Password Lama</label>
                <input type="password" id="edit-admin-old-password" class="form-input" placeholder="Kosongkan jika tidak ingin ubah">
            </div>
            
            <div class="form-section">
                <label class="form-label">Password Baru</label>
                <input type="password" id="edit-admin-new-password" class="form-input" placeholder="Minimal 6 karakter">
            </div>
            
            <div class="form-section">
                <label class="form-label">Konfirmasi Password Baru</label>
                <input type="password" id="edit-admin-confirm-password" class="form-input" placeholder="Ulangi password baru">
            </div>
        </form>
    `;
}

function saveAdminProfile() {
    if (!State.loggedInAdmin) return;
    
    const name = document.getElementById('edit-admin-name').value.trim();
    const phone = document.getElementById('edit-admin-phone').value.trim().replace(/\D/g, '');
    const email = document.getElementById('edit-admin-email').value.trim();
    const oldPassword = document.getElementById('edit-admin-old-password').value;
    const newPassword = document.getElementById('edit-admin-new-password').value;
    const confirmPassword = document.getElementById('edit-admin-confirm-password').value;
    
    if (!name) {
        showToast('Nama wajib diisi', 'error');
        return;
    }
    
    // Check password change
    if (oldPassword || newPassword || confirmPassword) {
        if (oldPassword !== State.loggedInAdmin.password) {
            showToast('Password lama salah', 'error');
            return;
        }
        
        if (!newPassword || newPassword.length < 6) {
            showToast('Password baru minimal 6 karakter', 'error');
            return;
        }
        
        if (newPassword !== confirmPassword) {
            showToast('Konfirmasi password tidak sama', 'error');
            return;
        }
        
        State.loggedInAdmin.password = newPassword;
    }
    
    // Update admin
    const adminIndex = Store.admins.findIndex(a => a.id === State.loggedInAdmin.id);
    if (adminIndex !== -1) {
        Store.admins[adminIndex] = {
            ...Store.admins[adminIndex],
            name: name,
            phone: phone,
            email: email,
            password: State.loggedInAdmin.password
        };
        
        State.loggedInAdmin = Store.admins[adminIndex];
        saveToStorage();
        updateAdminView();
        
        closeModal('modal-admin-profile');
        showToast('Profil admin berhasil diupdate', 'success');
    }
}

function renderAdminsList() {
    const container = document.getElementById('admins-list');
    if (!container) return;
    
    if (Store.admins.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">👨‍💼</div>
                <h3 class="empty-title">Belum ada admin</h3>
                <p class="empty-text">Tambahkan admin baru</p>
            </div>
        `;
        return;
    }
    
    const roleLabels = {
        owner: '👑 Owner',
        admin: '⚙️ Admin',
        staff: '👤 Staff'
    };
    
    container.innerHTML = Store.admins.map(admin => {
        const isCurrentAdmin = State.loggedInAdmin?.id === admin.id;
        const lastLogin = admin.lastLogin 
            ? new Date(admin.lastLogin).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
            : 'Belum pernah login';
        
        return `
            <div class="admin-card ${isCurrentAdmin ? 'bg-purple-50' : ''}">
                <div class="admin-avatar">
                    ${admin.avatarUrl 
                        ? `<img src="${admin.avatarUrl}" alt="${admin.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="emoji" style="display:none">${admin.avatar}</span>`
                        : `<span class="emoji">${admin.avatar}</span>`
                    }
                </div>
                <div class="admin-info">
                    <div class="admin-name">
                        ${admin.name}
                        ${isCurrentAdmin ? '<span style="font-size: 10px; color: #7c3aed;">(Anda)</span>' : ''}
                        <span class="admin-role-badge ${admin.role}">${roleLabels[admin.role]}</span>
                    </div>
                    <div class="admin-username">@${admin.username}</div>
                    <div class="admin-meta">
                        <span class="admin-status ${isCurrentAdmin ? 'online' : 'offline'}">
                            <span style="font-size: 8px;">●</span> ${isCurrentAdmin ? 'Online' : lastLogin}
                        </span>
                        ${admin.referralCode ? `<span class="admin-referral-code">• Ref: ${admin.referralCode}</span>` : ''}
                    </div>
                </div>
                ${!isCurrentAdmin && admin.role !== 'owner' ? `
                    <div class="admin-actions">
                        <button onclick="deleteAdmin('${admin.id}')" class="btn-admin-delete">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                        </button>
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}

function deleteAdmin(adminId) {
    const admin = Store.admins.find(a => a.id === adminId);
    if (!admin) return;
    
    if (admin.role === 'owner') {
        showToast('Tidak dapat menghapus Owner', 'error');
        return;
    }
    
    if (confirm(`Hapus admin "${admin.name}"? Tindakan ini tidak dapat dibatalkan.`)) {
        Store.admins = Store.admins.filter(a => a.id !== adminId);
        saveToStorage();
        updateAdminsBadge();
        renderAdminsList();
        showToast('Admin berhasil dihapus', 'info');
    }
}

// Update openModal untuk handle admin modals
const originalOpenModal = openModal;
openModal = function(modalId) {
    originalOpenModal(modalId);
    
    if (modalId === 'modal-admin-profile') {
        renderAdminProfile();
    } else if (modalId === 'modal-manage-admins') {
        renderAdminsList();
    } else if (modalId === 'modal-referral-codes') {
        renderReferralCodes();
    } else if (modalId === 'modal-firebase') {
        loadFirebaseConfig();
        updateSyncCounts();
    }
}

// ==================== FIREBASE & DATABASE ====================

// Default Firebase Configuration
const DEFAULT_FIREBASE_CONFIG = {
    apiKey: "AIzaSyDulFvKD-RappEGEVRg_drytNO2J46Tf_U",
    authDomain: "varsha-fruits-plan.firebaseapp.com",
    projectId: "varsha-fruits-plan",
    storageBucket: "varsha-fruits-plan.firebasestorage.app",
    messagingSenderId: "698134090714",
    appId: "1:698134090714:web:8c89f86accdd322d1ce6e3",
    measurementId: "G-MCVCP8WPT5"
};

// Firebase Config Storage
const FirebaseState = {
    config: null,
    connected: false,
    autoSync: true, // Default enabled
    db: null,
    app: null,
    unsubscribers: [] // For realtime listeners
};

// Initialize Firebase when SDK is ready
window.addEventListener('firebase-ready', () => {
    console.log('🔥 Firebase SDK loaded');
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
        initFirebaseOnStartup();
    }, 500);
});

// Also try to init if SDK already loaded (with delay)
setTimeout(() => {
    if (window.FirebaseSDK && !FirebaseState.connected) {
        console.log('🔥 Firebase SDK already available, initializing...');
        initFirebaseOnStartup();
    }
}, 1000);

// Initialize Firebase on app startup
async function initFirebaseOnStartup() {
    // Check for saved config or use default
    let savedConfig = localStorage.getItem('varsha_firebase_config');
    let config;
    
    if (savedConfig) {
        config = JSON.parse(savedConfig);
    } else {
        // Use default config and save it
        config = DEFAULT_FIREBASE_CONFIG;
        localStorage.setItem('varsha_firebase_config', JSON.stringify(config));
        localStorage.setItem('varsha_auto_sync', 'true');
    }
    
    // Check auto sync setting (default to true if not set)
    const autoSyncSetting = localStorage.getItem('varsha_auto_sync');
    const autoSync = autoSyncSetting === null ? true : autoSyncSetting === 'true';
    
    if (autoSync) {
        try {
            console.log('🔥 Initializing Firebase with config...');
            await initializeFirebaseApp(config);
            
            // Auto download data from cloud
            if (FirebaseState.connected) {
                showToast('🔄 Sinkronisasi data...', 'info');
                await downloadAllFromFirebase();
                setupRealtimeListeners();
                showToast('✅ Data tersinkronisasi', 'success');
            }
        } catch (error) {
            console.error('Firebase init error:', error);
            showToast('⚠️ Gagal sync, menggunakan data lokal', 'error');
        }
    }
}

// Initialize Firebase App
async function initializeFirebaseApp(config) {
    if (!window.FirebaseSDK) {
        console.warn('Firebase SDK not loaded yet');
        return false;
    }
    
    try {
        const { initializeApp, getFirestore, enableIndexedDbPersistence } = window.FirebaseSDK;
        
        // Initialize app
        FirebaseState.app = initializeApp(config);
        FirebaseState.db = getFirestore(FirebaseState.app);
        FirebaseState.config = config;
        FirebaseState.connected = true;
        
        // Enable offline persistence
        try {
            await enableIndexedDbPersistence(FirebaseState.db);
            console.log('📱 Offline persistence enabled');
        } catch (err) {
            if (err.code === 'failed-precondition') {
                console.warn('Multiple tabs open, persistence disabled');
            } else if (err.code === 'unimplemented') {
                console.warn('Browser does not support persistence');
            }
        }
        
        console.log('🔥 Firebase initialized successfully');
        updateFirebaseStatus();
        updateFirebaseBadge();
        
        return true;
    } catch (error) {
        console.error('Firebase initialization failed:', error);
        FirebaseState.connected = false;
        return false;
    }
}

// Download all data from Firebase
async function downloadAllFromFirebase() {
    if (!FirebaseState.db) return;
    
    const { doc, getDoc } = window.FirebaseSDK;
    
    try {
        // Download profile
        const profileDoc = await getDoc(doc(FirebaseState.db, 'store', 'profile'));
        if (profileDoc.exists()) {
            Store.profile = { ...Store.profile, ...profileDoc.data() };
            localStorage.setItem('varsha_profile', JSON.stringify(Store.profile));
            applyStoreProfile();
        }
        
        // Download products
        const productsDoc = await getDoc(doc(FirebaseState.db, 'store', 'products'));
        if (productsDoc.exists() && productsDoc.data().items) {
            Store.products = productsDoc.data().items;
            localStorage.setItem('varsha_products', JSON.stringify(Store.products));
            renderProducts();
            renderKatalogProducts();
            updateStats();
        }
        
        // Download orders
        const ordersDoc = await getDoc(doc(FirebaseState.db, 'store', 'orders'));
        if (ordersDoc.exists() && ordersDoc.data().items) {
            Store.orders = ordersDoc.data().items;
            localStorage.setItem('varsha_orders', JSON.stringify(Store.orders));
            updateOrdersBadge();
        }
        
        // Download customers
        const customersDoc = await getDoc(doc(FirebaseState.db, 'store', 'customers'));
        if (customersDoc.exists() && customersDoc.data().items) {
            Store.customers = customersDoc.data().items;
            localStorage.setItem('varsha_customers', JSON.stringify(Store.customers));
            updateCustomersBadge();
        }
        
        // Download admins
        const adminsDoc = await getDoc(doc(FirebaseState.db, 'store', 'admins'));
        if (adminsDoc.exists() && adminsDoc.data().items) {
            Store.admins = adminsDoc.data().items;
            localStorage.setItem('varsha_admins', JSON.stringify(Store.admins));
        }
        
        console.log('📥 All data downloaded from Firebase');
        return true;
    } catch (error) {
        console.error('Download from Firebase failed:', error);
        return false;
    }
}

// Setup realtime listeners for live updates
function setupRealtimeListeners() {
    if (!FirebaseState.db) return;
    
    const { doc, onSnapshot } = window.FirebaseSDK;
    
    // Clear existing listeners
    FirebaseState.unsubscribers.forEach(unsub => unsub());
    FirebaseState.unsubscribers = [];
    
    // Listen to profile changes
    const unsubProfile = onSnapshot(doc(FirebaseState.db, 'store', 'profile'), (docSnap) => {
        if (docSnap.exists()) {
            const newProfile = docSnap.data();
            if (JSON.stringify(newProfile) !== JSON.stringify(Store.profile)) {
                Store.profile = { ...Store.profile, ...newProfile };
                localStorage.setItem('varsha_profile', JSON.stringify(Store.profile));
                applyStoreProfile();
                console.log('🔄 Profile updated from cloud');
            }
        }
    });
    FirebaseState.unsubscribers.push(unsubProfile);
    
    // Listen to products changes
    const unsubProducts = onSnapshot(doc(FirebaseState.db, 'store', 'products'), (docSnap) => {
        if (docSnap.exists() && docSnap.data().items) {
            const newProducts = docSnap.data().items;
            if (JSON.stringify(newProducts) !== JSON.stringify(Store.products)) {
                Store.products = newProducts;
                localStorage.setItem('varsha_products', JSON.stringify(Store.products));
                renderProducts();
                renderKatalogProducts();
                updateStats();
                console.log('🔄 Products updated from cloud');
            }
        }
    });
    FirebaseState.unsubscribers.push(unsubProducts);
    
    // Listen to orders changes
    const unsubOrders = onSnapshot(doc(FirebaseState.db, 'store', 'orders'), (docSnap) => {
        if (docSnap.exists() && docSnap.data().items) {
            const newOrders = docSnap.data().items;
            if (JSON.stringify(newOrders) !== JSON.stringify(Store.orders)) {
                Store.orders = newOrders;
                localStorage.setItem('varsha_orders', JSON.stringify(Store.orders));
                updateOrdersBadge();
                // Refresh my orders if user is logged in
                if (State.loggedInUser) {
                    renderMyOrders();
                }
                console.log('🔄 Orders updated from cloud');
            }
        }
    });
    FirebaseState.unsubscribers.push(unsubOrders);
    
    // Listen to customers changes
    const unsubCustomers = onSnapshot(doc(FirebaseState.db, 'store', 'customers'), (docSnap) => {
        if (docSnap.exists() && docSnap.data().items) {
            const newCustomers = docSnap.data().items;
            if (JSON.stringify(newCustomers) !== JSON.stringify(Store.customers)) {
                Store.customers = newCustomers;
                localStorage.setItem('varsha_customers', JSON.stringify(Store.customers));
                updateCustomersBadge();
                checkLoginStatus(); // Re-check in case user data changed
                console.log('🔄 Customers updated from cloud');
            }
        }
    });
    FirebaseState.unsubscribers.push(unsubCustomers);
    
    console.log('👂 Realtime listeners active');
}

// Upload data to Firebase (called after local changes)
async function syncToFirebase(dataType) {
    if (!FirebaseState.db || !FirebaseState.autoSync) return;
    
    const { doc, setDoc } = window.FirebaseSDK;
    
    try {
        switch (dataType) {
            case 'profile':
                await setDoc(doc(FirebaseState.db, 'store', 'profile'), Store.profile);
                break;
            case 'products':
                await setDoc(doc(FirebaseState.db, 'store', 'products'), { items: Store.products, updatedAt: new Date().toISOString() });
                break;
            case 'orders':
                await setDoc(doc(FirebaseState.db, 'store', 'orders'), { items: Store.orders, updatedAt: new Date().toISOString() });
                break;
            case 'customers':
                await setDoc(doc(FirebaseState.db, 'store', 'customers'), { items: Store.customers, updatedAt: new Date().toISOString() });
                break;
            case 'admins':
                await setDoc(doc(FirebaseState.db, 'store', 'admins'), { items: Store.admins, updatedAt: new Date().toISOString() });
                break;
        }
        console.log(`☁️ ${dataType} synced to Firebase`);
    } catch (error) {
        console.error(`Failed to sync ${dataType}:`, error);
    }
}

// Enhanced saveToStorage with Firebase sync
const originalSaveToStorage = saveToStorage;
saveToStorage = function() {
    // Save to localStorage first
    localStorage.setItem('varsha_profile', JSON.stringify(Store.profile));
    localStorage.setItem('varsha_products', JSON.stringify(Store.products));
    localStorage.setItem('varsha_cart', JSON.stringify(Store.cart));
    localStorage.setItem('varsha_orders', JSON.stringify(Store.orders));
    localStorage.setItem('varsha_customers', JSON.stringify(Store.customers));
    localStorage.setItem('varsha_admins', JSON.stringify(Store.admins));
    
    // Sync to Firebase if connected and auto-sync enabled
    if (FirebaseState.connected && FirebaseState.autoSync) {
        // Determine what changed and sync
        syncToFirebase('profile');
        syncToFirebase('products');
        syncToFirebase('orders');
        syncToFirebase('customers');
        syncToFirebase('admins');
    }
};

function loadFirebaseConfig() {
    // Check for saved config or use default
    let savedConfig = localStorage.getItem('varsha_firebase_config');
    
    if (savedConfig) {
        FirebaseState.config = JSON.parse(savedConfig);
    } else {
        // Use default config
        FirebaseState.config = DEFAULT_FIREBASE_CONFIG;
        localStorage.setItem('varsha_firebase_config', JSON.stringify(DEFAULT_FIREBASE_CONFIG));
    }
    
    // Fill form fields
    document.getElementById('firebase-api-key').value = FirebaseState.config.apiKey || '';
    document.getElementById('firebase-auth-domain').value = FirebaseState.config.authDomain || '';
    document.getElementById('firebase-project-id').value = FirebaseState.config.projectId || '';
    document.getElementById('firebase-storage-bucket').value = FirebaseState.config.storageBucket || '';
    document.getElementById('firebase-messaging-id').value = FirebaseState.config.messagingSenderId || '';
    document.getElementById('firebase-app-id').value = FirebaseState.config.appId || '';
    document.getElementById('firebase-measurement-id').value = FirebaseState.config.measurementId || '';
    
    // Load auto sync setting (default to true)
    const autoSyncSetting = localStorage.getItem('varsha_auto_sync');
    FirebaseState.autoSync = autoSyncSetting === null ? true : autoSyncSetting === 'true';
    
    const autoSyncToggle = document.getElementById('auto-sync-toggle');
    if (autoSyncToggle) {
        autoSyncToggle.checked = FirebaseState.autoSync;
    }
    
    updateFirebaseStatus();
}

function saveFirebaseConfig() {
    const apiKey = document.getElementById('firebase-api-key').value.trim();
    const authDomain = document.getElementById('firebase-auth-domain').value.trim();
    const projectId = document.getElementById('firebase-project-id').value.trim();
    const appId = document.getElementById('firebase-app-id').value.trim();
    
    if (!apiKey || !authDomain || !projectId || !appId) {
        showToast('Lengkapi field wajib (*)', 'error');
        return;
    }
    
    FirebaseState.config = {
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: document.getElementById('firebase-storage-bucket').value.trim(),
        messagingSenderId: document.getElementById('firebase-messaging-id').value.trim(),
        appId: appId,
        measurementId: document.getElementById('firebase-measurement-id').value.trim()
    };
    
    localStorage.setItem('varsha_firebase_config', JSON.stringify(FirebaseState.config));
    
    showToast('Konfigurasi Firebase tersimpan', 'success');
    updateFirebaseStatus();
}

async function testFirebaseConnection() {
    const apiKey = document.getElementById('firebase-api-key').value.trim();
    const authDomain = document.getElementById('firebase-auth-domain').value.trim();
    const projectId = document.getElementById('firebase-project-id').value.trim();
    const appId = document.getElementById('firebase-app-id').value.trim();
    
    if (!apiKey || !projectId || !authDomain || !appId) {
        showToast('Lengkapi field wajib (*)', 'error');
        return;
    }
    
    // Update status to connecting
    const statusCard = document.getElementById('firebase-status-card');
    statusCard.className = 'firebase-status-card connecting';
    statusCard.innerHTML = `
        <div class="firebase-status-icon">🟡</div>
        <div class="firebase-status-info">
            <h4 class="firebase-status-title">Menghubungkan...</h4>
            <p class="firebase-status-desc">Mencoba koneksi ke Firebase</p>
        </div>
    `;
    
    const config = {
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: document.getElementById('firebase-storage-bucket').value.trim(),
        messagingSenderId: document.getElementById('firebase-messaging-id').value.trim(),
        appId: appId,
        measurementId: document.getElementById('firebase-measurement-id').value.trim()
    };
    
    try {
        // Actually initialize Firebase
        const success = await initializeFirebaseApp(config);
        
        if (success) {
            statusCard.className = 'firebase-status-card connected';
            statusCard.innerHTML = `
                <div class="firebase-status-icon">🟢</div>
                <div class="firebase-status-info">
                    <h4 class="firebase-status-title">Terhubung</h4>
                    <p class="firebase-status-desc">Project: ${projectId}</p>
                </div>
            `;
            showToast('Koneksi Firebase berhasil!', 'success');
        } else {
            throw new Error('Initialization failed');
        }
    } catch (error) {
        console.error('Firebase connection test failed:', error);
        FirebaseState.connected = false;
        statusCard.className = 'firebase-status-card disconnected';
        statusCard.innerHTML = `
            <div class="firebase-status-icon">🔴</div>
            <div class="firebase-status-info">
                <h4 class="firebase-status-title">Gagal Terhubung</h4>
                <p class="firebase-status-desc">${error.message || 'Periksa konfigurasi Anda'}</p>
            </div>
        `;
        showToast('Gagal terhubung ke Firebase', 'error');
    }
}

function updateFirebaseStatus() {
    const statusCard = document.getElementById('firebase-status-card');
    if (!statusCard) return;
    
    if (FirebaseState.connected) {
        // Connected to Firebase
        statusCard.className = 'firebase-status-card connected';
        statusCard.innerHTML = `
            <div class="firebase-status-icon">🟢</div>
            <div class="firebase-status-info">
                <h4 class="firebase-status-title">Terhubung</h4>
                <p class="firebase-status-desc">Project: ${FirebaseState.config?.projectId || 'toko-buah-online'}</p>
            </div>
        `;
    } else if (FirebaseState.config && FirebaseState.config.apiKey) {
        // Config exists, show as configured but need to test
        statusCard.className = 'firebase-status-card connecting';
        statusCard.innerHTML = `
            <div class="firebase-status-icon">🟡</div>
            <div class="firebase-status-info">
                <h4 class="firebase-status-title">Dikonfigurasi</h4>
                <p class="firebase-status-desc">Klik "Test Koneksi" untuk verifikasi</p>
            </div>
        `;
    } else {
        statusCard.className = 'firebase-status-card disconnected';
        statusCard.innerHTML = `
            <div class="firebase-status-icon">🔴</div>
            <div class="firebase-status-info">
                <h4 class="firebase-status-title">Tidak Terhubung</h4>
                <p class="firebase-status-desc">Firebase belum dikonfigurasi</p>
            </div>
        `;
    }
    
    updateFirebaseBadge();
}

function updateFirebaseBadge() {
    const badge = document.getElementById('firebase-status-badge');
    if (!badge) return;
    
    if (FirebaseState.connected) {
        badge.textContent = '🟢';
        badge.className = 'firebase-badge connected';
    } else if (FirebaseState.config && FirebaseState.config.apiKey) {
        badge.textContent = '🟡';
        badge.className = 'firebase-badge';
    } else {
        badge.textContent = '';
    }
}

function updateSyncCounts() {
    document.getElementById('sync-products-count').textContent = Store.products.length;
    document.getElementById('sync-orders-count').textContent = Store.orders.length;
    document.getElementById('sync-customers-count').textContent = Store.customers.length;
    document.getElementById('sync-admins-count').textContent = Store.admins.length;
}

function switchFirebaseTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.firebase-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.firebase-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`firebase-tab-${tabName}`).classList.add('active');
    
    if (tabName === 'sync') {
        updateSyncCounts();
    }
}

async function toggleAutoSync() {
    FirebaseState.autoSync = document.getElementById('auto-sync-toggle').checked;
    localStorage.setItem('varsha_auto_sync', FirebaseState.autoSync.toString());
    
    if (FirebaseState.autoSync) {
        showToast('Auto Sync diaktifkan', 'success');
        
        // Setup realtime listeners if connected
        if (FirebaseState.connected) {
            setupRealtimeListeners();
        } else {
            // Try to connect
            const savedConfig = localStorage.getItem('varsha_firebase_config');
            if (savedConfig) {
                const config = JSON.parse(savedConfig);
                const success = await initializeFirebaseApp(config);
                if (success) {
                    setupRealtimeListeners();
                }
            }
        }
    } else {
        // Remove realtime listeners
        FirebaseState.unsubscribers.forEach(unsub => unsub());
        FirebaseState.unsubscribers = [];
        showToast('Auto Sync dinonaktifkan', 'info');
    }
}

async function uploadToFirebase() {
    if (!FirebaseState.db) {
        showToast('Firebase belum terhubung. Test koneksi dulu.', 'error');
        return;
    }
    
    const btn = document.getElementById('btn-upload-firebase');
    btn.disabled = true;
    btn.innerHTML = `
        <div class="spinner" style="width:20px;height:20px;border-width:2px;"></div>
        Mengupload...
    `;
    
    const { doc, setDoc } = window.FirebaseSDK;
    
    try {
        // Upload selected data
        if (document.getElementById('sync-profile').checked) {
            await setDoc(doc(FirebaseState.db, 'store', 'profile'), Store.profile);
        }
        if (document.getElementById('sync-products').checked) {
            await setDoc(doc(FirebaseState.db, 'store', 'products'), { 
                items: Store.products, 
                updatedAt: new Date().toISOString() 
            });
        }
        if (document.getElementById('sync-orders').checked) {
            await setDoc(doc(FirebaseState.db, 'store', 'orders'), { 
                items: Store.orders, 
                updatedAt: new Date().toISOString() 
            });
        }
        if (document.getElementById('sync-customers').checked) {
            await setDoc(doc(FirebaseState.db, 'store', 'customers'), { 
                items: Store.customers, 
                updatedAt: new Date().toISOString() 
            });
        }
        if (document.getElementById('sync-admins').checked) {
            await setDoc(doc(FirebaseState.db, 'store', 'admins'), { 
                items: Store.admins, 
                updatedAt: new Date().toISOString() 
            });
        }
        
        // Save last sync time
        localStorage.setItem('varsha_last_sync', new Date().toISOString());
        
        showToast('Data berhasil diupload ke Firebase!', 'success');
    } catch (error) {
        console.error('Upload failed:', error);
        showToast('Gagal upload: ' + error.message, 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            Upload ke Firebase
        `;
    }
}

async function downloadFromFirebase() {
    if (!FirebaseState.db) {
        showToast('Firebase belum terhubung. Test koneksi dulu.', 'error');
        return;
    }
    
    if (!confirm('Data lokal akan ditimpa dengan data dari cloud. Lanjutkan?')) {
        return;
    }
    
    const btn = document.getElementById('btn-download-firebase');
    btn.disabled = true;
    btn.innerHTML = `
        <div class="spinner" style="width:20px;height:20px;border-width:2px;"></div>
        Mendownload...
    `;
    
    try {
        await downloadAllFromFirebase();
        
        showToast('Data berhasil didownload dari Firebase!', 'success');
        
        // Refresh UI
        applyStoreProfile();
        renderProducts();
        renderKatalogProducts();
        renderCart();
        updateCartBadges();
        updateStats();
        updateOrdersBadge();
        updateCustomersBadge();
        checkLoginStatus();
        checkAdminLoginStatus();
    } catch (error) {
        console.error('Download failed:', error);
        showToast('Gagal download: ' + error.message, 'error');
    } finally {
        btn.disabled = false;
        btn.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
            </svg>
            Download dari Firebase
        `;
    }
}

function exportDataJSON() {
    const exportData = {
        exportDate: new Date().toISOString(),
        version: '1.0',
        data: {
            profile: Store.profile,
            products: Store.products,
            orders: Store.orders,
            customers: Store.customers,
            admins: Store.admins.map(a => ({ ...a, password: '***' })) // Hide passwords
        }
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `varsha-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast('Data berhasil diexport!', 'success');
}

function importDataJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!confirm('Data saat ini akan ditimpa dengan data dari file. Lanjutkan?')) {
        event.target.value = '';
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            
            if (!importedData.data) {
                showToast('Format file tidak valid', 'error');
                return;
            }
            
            // Import data
            if (importedData.data.profile) {
                Store.profile = importedData.data.profile;
            }
            if (importedData.data.products) {
                Store.products = importedData.data.products;
            }
            if (importedData.data.orders) {
                Store.orders = importedData.data.orders;
            }
            if (importedData.data.customers) {
                Store.customers = importedData.data.customers;
            }
            // Note: We don't import admins for security reasons
            
            saveToStorage();
            
            // Refresh UI
            applyStoreProfile();
            renderProducts();
            renderKatalogProducts();
            renderCart();
            updateCartBadges();
            updateStats();
            updateOrdersBadge();
            updateCustomersBadge();
            
            showToast('Data berhasil diimport!', 'success');
            
        } catch (error) {
            showToast('Gagal membaca file: ' + error.message, 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function resetAllData() {
    if (!confirm('PERHATIAN: Semua data akan dihapus permanen!\n\nApakah Anda yakin ingin melanjutkan?')) {
        return;
    }
    
    if (!confirm('Ini adalah konfirmasi terakhir.\n\nKetik OK untuk menghapus SEMUA DATA.')) {
        return;
    }
    
    // Clear all localStorage
    localStorage.removeItem('varsha_profile');
    localStorage.removeItem('varsha_products');
    localStorage.removeItem('varsha_cart');
    localStorage.removeItem('varsha_orders');
    localStorage.removeItem('varsha_customers');
    localStorage.removeItem('varsha_admins');
    localStorage.removeItem('varsha_session');
    localStorage.removeItem('varsha_admin_session');
    localStorage.removeItem('varsha_firebase_config');
    localStorage.removeItem('varsha_auto_sync');
    localStorage.removeItem('varsha_last_sync');
    
    showToast('Semua data telah direset. Halaman akan dimuat ulang...', 'info');
    
    setTimeout(() => {
        window.location.reload();
    }, 1500);
}

// Update updateAdminView to show Firebase menu for owner
const originalUpdateAdminView = updateAdminView;
updateAdminView = function() {
    originalUpdateAdminView();
    
    const firebaseBtn = document.getElementById('btn-firebase-setup');
    if (firebaseBtn && State.loggedInAdmin) {
        if (State.loggedInAdmin.role === 'owner') {
            firebaseBtn.classList.remove('hidden');
        } else {
            firebaseBtn.classList.add('hidden');
        }
    }
    
    // Load Firebase config on init
    const savedConfig = localStorage.getItem('varsha_firebase_config');
    if (savedConfig) {
        FirebaseState.config = JSON.parse(savedConfig);
        updateFirebaseBadge();
    }
}

// ==================== REFERRAL CODE MANAGEMENT ====================

function generateReferralCode() {
    const role = document.getElementById('referral-role').value;
    const limit = parseInt(document.getElementById('referral-limit').value);
    
    // Generate random 8-character code
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    const newCode = {
        code: code,
        role: role,
        limit: limit,
        used: 0,
        usedBy: [],
        createdAt: new Date().toISOString(),
        createdBy: State.loggedInAdmin?.id || 'owner'
    };
    
    Store.referralCodes.push(newCode);
    saveToStorage();
    renderReferralCodes();
    
    showToast(`Kode ${code} berhasil dibuat!`, 'success');
}

function renderReferralCodes() {
    const container = document.getElementById('referral-codes-list');
    if (!container) return;
    
    if (Store.referralCodes.length === 0) {
        container.innerHTML = `
            <div class="referral-empty">
                <div class="referral-empty-icon">🔑</div>
                <p class="referral-empty-text">Belum ada kode referensi.<br>Buat kode baru untuk mengizinkan registrasi admin.</p>
            </div>
        `;
        return;
    }
    
    const roleLabels = {
        admin: '⚙️ Admin',
        staff: '👤 Staff'
    };
    
    container.innerHTML = Store.referralCodes.map(ref => {
        const isExpired = ref.limit > 0 && ref.used >= ref.limit;
        const usageText = ref.limit === 0 ? `${ref.used} digunakan (Unlimited)` : `${ref.used}/${ref.limit} digunakan`;
        
        return `
            <div class="referral-code-card ${isExpired ? 'expired' : ''}">
                <div class="referral-code-info">
                    <div class="referral-code-value">
                        ${ref.code}
                        <span class="referral-status ${isExpired ? 'expired' : 'active'}">${isExpired ? '🔴 Habis' : '🟢 Aktif'}</span>
                    </div>
                    <div class="referral-code-meta">
                        <span class="referral-role-badge ${ref.role}">${roleLabels[ref.role]}</span>
                        <span class="referral-usage">${usageText}</span>
                    </div>
                </div>
                <div class="referral-code-actions">
                    <button onclick="copyReferralCode('${ref.code}')" class="btn-copy-code" title="Copy">📋</button>
                    <button onclick="deleteReferralCode('${ref.code}')" class="btn-delete-code" title="Hapus">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

function copyReferralCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        showToast(`Kode ${code} disalin!`, 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(`Kode ${code} disalin!`, 'success');
    });
}

function deleteReferralCode(code) {
    if (!confirm(`Hapus kode referensi ${code}?`)) return;
    
    Store.referralCodes = Store.referralCodes.filter(r => r.code !== code);
    saveToStorage();
    renderReferralCodes();
    showToast('Kode referensi dihapus', 'info');
}

function validateReferralCode(code) {
    const referral = Store.referralCodes.find(r => r.code.toUpperCase() === code.toUpperCase());
    
    if (!referral) {
        return { valid: false, error: 'Referensi code tidak valid' };
    }
    
    if (referral.limit > 0 && referral.used >= referral.limit) {
        return { valid: false, error: 'Referensi code sudah mencapai batas penggunaan' };
    }
    
    return { valid: true, referral: referral };
}

function useReferralCode(code, adminId) {
    const referral = Store.referralCodes.find(r => r.code.toUpperCase() === code.toUpperCase());
    if (referral) {
        referral.used++;
        referral.usedBy.push({
            adminId: adminId,
            usedAt: new Date().toISOString()
        });
        saveToStorage();
    }
}
