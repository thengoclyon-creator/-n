
import { Product, NewsItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nike Air Jordan 1 Green',
    category: 'Casual',
    gender: 'Nam',
    price: 3500000,
    rating: 4.8,
    reviewCount: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIVwv3vWaD4zLXHikRqb8eMciMvrDGob-E3BaT4PGfRoCxu0ksYYAF5aiG1H9p6qIuwlb7f7DNpOf25TcoqOxl9itLza69EbNtbib1adA4Jgzgd-98FW3ywmjXeyG4r6zcSHtTHs25K0kLQs-8U12vAy-8XCU_gmd2rEH7xDlW9HHKSP4NnYud_vXP6bsR1dAlYQeAb2Q1mqjmby-aotvWGYmAfcy_aGvrsnXAYCA1CpKnMGRcnbbSb1kMrzaLUgejAKmBIAESbOiH',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDA64dLU6gGAd26mYiEddlNWRMF_TJaJAzH-IIt9A2-I7xqSBs2VSAX5ykJr64bgmiVJYzuUA2LOMzFrXso-oGWrb3EZ8F0A58ypQGMxKax1JWYu1i6q8HCupESgnR1ZYT7G9MQ51FHzOFhgnlCaGcn9vgbJoxSA54bxBCEhnPCLJ9veZAJLrc0d8XxbpNviDPYKhi_nOp94Z34RbG5Db7qLkaqIrb-2q0QU06gwOqlM0Fv9GGXYCvJQaZi5yu35GZQrZEubREXlM57',
    ],
    description: 'Chiến mã có cánh của bạn đã trở lại. Nike Air Zoom Pegasus 38 tiếp tục mang lại độ nảy cho bước chân của bạn.',
  },
  {
    id: 'p2',
    name: 'Urban Colorful Sneakers',
    category: 'Chạy bộ',
    gender: 'Nữ',
    price: 1250000,
    originalPrice: 1800000,
    rating: 4.5,
    reviewCount: 85,
    tag: 'Sale',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXkaPk0OfP3ymOF6yj-cwwATOLn3iG_x6G7_t943ZZUh0X4sEqus1inCdx-VAkQvDLXs8wWEcWInMl5dffbhXnKS_xFB6kVplB0hXbOlLkMD9wnJGMQ89SUBhNYyInetj3lgD2aCDOIylu4XIAaHCgkM0IcOTXw0asM6XxBSzEhqJpJa7BjqusPl1JpUdQ1Sz-KBbDu3zggHNOvlfvUzwZr9slrFt7TE4NGqjzMwWzAmZanpjvYsZWRRUM2_JrrTzEwwaxJW0W9aW3',
    thumbnails: [],
    description: 'Đôi giày thể thao năng động dành cho các hoạt động ngoài trời với thiết kế đa sắc màu nổi bật.',
  },
  {
    id: 'p3',
    name: 'Nike Air Max Retro',
    category: 'Sportstyle',
    gender: 'Unisex',
    price: 2800000,
    rating: 4.7,
    reviewCount: 56,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5zm6qlHpFOra3dWraM6mpV6rq96uyCMGk-u9lQ9vyQ6kdKcRIXJ7S8oo9cmkwKVI6PNmjJ3-Z_HdrHR_zsHZSdKGbi5ZgIsDUvIJ70ezqSkakCwJgNVqWjF6uMRBdAP_p9wvTjaGSNxebpilwPlfxvO1bZ0piGdrayS8WSBFIyFx84E_Q_6ucSExqqJ1QKUXhfoAnIklAQDD_t0-qDxmvTrGX3lcDzpudg4N3jQr7T2mSuuSd8fT-2hJ0FSKZqhIfD8XL2BA8PoPt',
    thumbnails: [],
    description: 'Phong cách retro vượt thời gian kết hợp cùng công nghệ đệm khí Air Max hiện đại.',
  },
  {
    id: 'p4',
    name: 'New Balance 550 Red',
    category: 'Vintage',
    gender: 'Nam',
    price: 2100000,
    rating: 4.9,
    reviewCount: 210,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6J-a5c2vGv-BMfLF6tlZpsq-wp2tsc5NB5gkLV9O4LsNYeGzOCM5wDr7j7CiTBE9vLob8vKakE0GlKtYXACVtRR22oj5U_khWB0Va8fIsqDoFghyi2_RUmTwJHUZWfyXvoABAg49LZjywunNfVeZnaa7uYu_CUU-FH1OqodHgfVa4dGACPMDENclsrOj3Xpub6I5JZg_4umrvS3qDrOW8FhGaBKklZbwQEzr34c1VzcDpf25XvHDZH3s6W7oyL-eSaRNH4lCYU6U7',
    thumbnails: [],
    description: 'Biểu tượng của những năm 80 được tái sinh với phối màu đỏ nổi bật.',
  },
  {
    id: 'p5',
    name: 'Nike Air Zoom Pegasus 38',
    category: 'Chạy bộ',
    gender: 'Nam',
    price: 3200000,
    originalPrice: 4100000,
    rating: 4.8,
    reviewCount: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-vVqT_Dq9KgREfj6f_IPIH7f6m7SSW7qXrh6OOx7mGxUFpRE9-u40oaweR2mo2wddf1D6ETg4FCoWvLnGOpTX5XM_WUb_eBBseRzs1NBx57klY-BWee5d3YokLpNsvSr_guq3EfaQp4uWXItQmMar3kZKlYg8OPUuCSrxy7nW8SfOJ1W3wKy-UC25EdLEuxMMVigfvqVnsUJlZxlduh0zEmM5amXbeR4x-kArxMkP7MkochMGRldfIiahUCK3pMPcS4R7Shu5MgdV',
    thumbnails: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDA64dLU6gGAd26mYiEddlNWRMF_TJaJAzH-IIt9A2-I7xqSBs2VSAX5ykJr64bgmiVJYzuUA2LOMzFrXso-oGWrb3EZ8F0A58ypQGMxKax1JWYu1i6q8HCupESgnR1ZYT7G9MQ51FHzOFhgnlCaGcn9vgbJoxSA54bxBCEhnPCLJ9veZAJLrc0d8XxbpNviDPYKhi_nOp94Z34RbG5Db7qLkaqIrb-2q0QU06gwOqlM0Fv9GGXYCvJQaZi5yu35GZQrZEubREXlM57',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBG0AcL13ytwm-59BxH4dJ8UunfnvQzo1WT2UuHgXnIQZO7XYBNreQokPu2N27t9o5V6OH8n24sOwt_90CtOf1tLBR2WxthhfgpgzRwtLQDQC1aBkEx9aQoHITkGOSu2j6bTidvD3zcBk_B8oJxPIs-HgMTlNSyuDHntxXJMX3o-r0l_CM78Fk1emTi7wz9SPphuuyqctQxDPuRZ0r21sA5W9jcgdbP6CmGzYNaHggb6c21wtKtFK5dSWXg5mpvG7J5vEHoJ5eock3H',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBi7-C6if9fTvIawhsIQugW0tokFCAz0LSyFGTfq1oHJmNORyOto-8TUorbmgnZhLAPSoXFKQSUEzzH8SfXpfbO8uGYuoER-VGJapXyFm9C1A9Brk8le91CLT-4nWOcan8fL-jzagHGURXi2QmUr1lk3wZcixphFBPG9_nwLJEGdxcQxzcyV4NYhQDBKPUFHCJEVZBjEU9zdXDOj2TD0Kt9gNSvV0_MFOpz0cCwBTLayLkO7Czw8v3ZLWFY8FtFg1Bjxg0gLfSaJImi',
    ],
    description: 'Chiến mã có cánh của bạn đã trở lại. Nike Air Zoom Pegasus 38 tiếp tục mang lại độ nảy cho bước chân của bạn, sử dụng cùng loại bọt phản hồi tốt như người tiền nhiệm.',
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Cách chọn size giày chuẩn không cần thử',
    category: 'Tips',
    excerpt: 'Đừng để đôi chân đau vì chọn sai size. Xem ngay bí quyết đo chân tại nhà cực đơn giản.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAY6sfQQNgrFXSoLTs_6_615sqXU8tG47xZ-JzA98OQU1HQT1T5Z4eFLlQeLtOuHArmOkzLLly2csOB5-5rnHtD1lSENzJrZ3VIVlhM_wN8HvrqFP-b1d2KgqoX1tRH2Cn5ra2wIYDDqnOy_EKyUcI1focURu61okZgtqAfYtnGB0QHNkJGm7eBh4Og9FZmotyYvTjfqDlJRP5RmDu9VRO19SrizQBYdHVhfjaLGE7qn2v1e3uTdVRmsUcggOuAAidsSc3g-T6l36X',
    readTime: '5 phút đọc',
    date: 'Hôm qua',
  },
  {
    id: 'n2',
    title: 'Bảo quản giày da lộn đúng cách trong mùa mưa',
    category: 'Vệ sinh',
    excerpt: 'Giày da lộn rất khó chiều. Hãy bỏ túi ngay các mẹo nhỏ này để giày luôn bền đẹp.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY1rIQcuSfJfYi4OXKpgV4VNauBDgg5K7XT8XgQknyEyCUbDjCtUnl8JPjrcV1MVvH-pLsMCjtF6Oo-W_zDuTi_5pNNopmQHeXZ0QEfGuLw_FjsngwdA-REiDNXwn_H09UnCjd4k3VNNs6AVcqFQsDUozpyJvJhBCj8rnO8m3CtVo-ZOyGgOt_enniDCt5m-RpZjLPdC2g4_TtJmC70s--9kbuUF5gm_mw9WDJuUOhLGHKPRprkCKTZAENTT13kT3LcINozPDzvW3b',
    readTime: '3 phút đọc',
    date: '20/05',
  }
];
