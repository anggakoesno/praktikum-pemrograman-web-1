/* ═══ Product Data ═══════════════════════════════════════════════ */
        const products = [{
                name: 'Nasi Goreng Spesial',
                price: 13000,
                cat: 'makanan',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Nasi Goreng Ayam',
                price: 13000,
                cat: 'makanan',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Nasi Goreng Seafood',
                price: 15000,
                cat: 'makanan',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Nasi Goreng Veggie',
                price: 12000,
                cat: 'makanan',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Es Teh Manis',
                price: 5000,
                cat: 'minuman',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Jus Jeruk',
                price: 8000,
                cat: 'minuman',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Es Cincau',
                price: 6000,
                cat: 'minuman',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Air Mineral',
                price: 3000,
                cat: 'minuman',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Keripik Tempe',
                price: 5000,
                cat: 'snack',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Pisang Goreng',
                price: 6000,
                cat: 'snack',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Bakwan Jagung',
                price: 4000,
                cat: 'snack',
                img: 'assets/img/nasi-goreng.jpg'
            },
            {
                name: 'Tahu Goreng',
                price: 3000,
                cat: 'snack',
                img: 'assets/img/nasi-goreng.jpg'
            },
        ];

        function formatRupiah(n) {
            return 'Rp' + n.toLocaleString('id-ID');
        }

        function renderProducts(cat) {
            const grid = document.getElementById('productGrid');
            const filtered = products.filter(p => p.cat === cat);
            grid.innerHTML = filtered.map(p => `
    <div class="col-6 col-sm-4 col-md-3 fade-up visible">
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <div class="card-body">
          <div class="card-name">${p.name}</div>
          <div class="card-price">${formatRupiah(p.price)}</div>
        </div>
      </div>
    </div>
  `).join('');
        }

        /* ═══ Category Tab Logic ════════════════════════════════════════ */
        document.querySelectorAll('.cat-tab').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProducts(btn.dataset.cat);
            });
        });

        // Initial render
        renderProducts('makanan');

        /* ═══ Scroll Reveal ═════════════════════════════════════════════ */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    observer.unobserve(e.target);
                }
            });
        }, {
            threshold: 0.12
        });

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

        /* ═══ Smooth scroll for nav links ══════════════════════════════ */
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                const target = document.querySelector(a.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });