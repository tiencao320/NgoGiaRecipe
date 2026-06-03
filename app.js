/**
 

// --- DATA LAYER ---**/
const DATA = {
  recipes: [
    {
      id: "rec-hong-tra-dl",
      name: "Hồng trà Đài Loan",
      category: "pure-tea",
      categoryName: "A. Thuần trà",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Cốt Hồng trà có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Cốt Hồng trà có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót cốt Hồng trà có đường cho đến đầy ly.",
        "Bước 3: Hoàn thành thức uống."
      ]
    },
    {
      id: "rec-tra-xanh-nhai",
      name: "Trà Xanh Hoa Nhài",
      category: "pure-tea",
      categoryName: "A. Thuần trà",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Cốt Trà xanh lài có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Cốt Trà xanh lài có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót cốt Trà xanh lài có đường cho đến đầy ly.",
        "Bước 3: Hoàn thành thức uống."
      ]
    },
    {
      id: "rec-tra-olong-dao",
      name: "Trà Olong Bạch Đào",
      category: "pure-tea",
      categoryName: "A. Thuần trà",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Cốt Trà ô long đào có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Cốt Trà ô long đào có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót cốt Trà ô long đào có đường cho đến đầy ly.",
        "Bước 3: Hoàn thành thức uống."
      ]
    },
    {
      id: "rec-hong-tra-vai",
      name: "Hồng trà vải thiều",
      category: "pure-tea",
      categoryName: "A. Thuần trà",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100% (Cố định)",
          milk: "--",
          ingredients: [
            { name: "Cốt Hồng trà vải thiều có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100% (Cố định)",
          milk: "--",
          ingredients: [
            { name: "Cốt Hồng trà vải thiều có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót cốt Hồng trà vải thiều có đường cho đến đầy ly.",
        "Bước 3: Hoàn thành thức uống (Cố định độ đường)."
      ]
    },
    {
      id: "rec-tra-bi-dao",
      name: "Trà bí đao Ngô Gia",
      category: "pure-tea",
      categoryName: "A. Thuần trà",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100% (Cố định)",
          milk: "--",
          ingredients: [
            { name: "Cốt Trà bí đao có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100% (Cố định)",
          milk: "--",
          ingredients: [
            { name: "Cốt Trà bí đao có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót cốt Trà bí đao có đường cho đến đầy ly.",
        "Bước 3: Hoàn thành thức uống (Cố định độ đường)."
      ]
    },
    {
      id: "rec-hong-tra-bi-dao-mix",
      name: "Hồng trà Bí Đao (Mix)",
      category: "pure-tea",
      categoryName: "A. Thuần trà",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      minSugar: "50%",
      isTeaBiDaoMix: true,
      biDaoVol: 210,
      otherTeaVol: 140,
      otherTeaName: "Hồng trà",
      sizes: {
        "700ml": {
          tea: "350ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Trà Bí Đao", quantity: "210ml" },
            { name: "Cốt Hồng trà có đường", quantity: "140ml" }
          ]
        },
        "1000ml": {
          tea: "500ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Trà Bí Đao", quantity: "300ml" },
            { name: "Cốt Hồng trà có đường", quantity: "200ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Rót 210ml trà Bí Đao vào ly PP.",
        "Bước 2: Rót 140ml cốt Hồng trà có đường vào ly PP.",
        "Bước 3: Cho đá đầy ly PP.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-xanh-bi-dao-mix",
      name: "Trà xanh Bí Đao (Mix)",
      category: "pure-tea",
      categoryName: "A. Thuần trà",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      minSugar: "50%",
      isTeaBiDaoMix: true,
      biDaoVol: 175,
      otherTeaVol: 175,
      otherTeaName: "Trà xanh",
      sizes: {
        "700ml": {
          tea: "350ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Trà Bí Đao", quantity: "175ml" },
            { name: "Cốt Trà xanh có đường", quantity: "175ml" }
          ]
        },
        "1000ml": {
          tea: "500ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Trà Bí Đao", quantity: "250ml" },
            { name: "Cốt Trà xanh có đường", quantity: "250ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Rót 175ml trà Bí Đao vào ly PP.",
        "Bước 2: Rót 175ml cốt Trà xanh có đường vào ly PP.",
        "Bước 3: Cho đá đầy ly PP.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-xi-muoi-ngo-gia",
      name: "Trà Xí Muội Ngô Gia",
      category: "special",
      categoryName: "B. Món đặc biệt",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: true,
      isXiMuoiNgoGia: true,
      sizes: {
        "700ml": {
          tea: "300ml",
          ice: "Đá vạch 600",
          sugar: "100% (Cố định)",
          milk: "Aiyu + Hạt é",
          ingredients: [
            { name: "Thạch aiyu", quantity: "1 vá (40g)" },
            { name: "Hạt é", quantity: "2 vá (60g)" },
            { name: "Trà Xí Muội", quantity: "300ml" }
          ]
        },
        "1000ml": {
          tea: "400ml",
          ice: "Đá vạch 800",
          sugar: "100% (Cố định)",
          milk: "Aiyu + Hạt é",
          ingredients: [
            { name: "Thạch aiyu", quantity: "1 vá (40g)" },
            { name: "Hạt é", quantity: "2 vá (60g)" },
            { name: "Trà Xí Muội", quantity: "400ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 1 vá thạch aiyu (40g) và 2 vá hạt é (60g) vào ly PP.",
        "Bước 2: Cho đá vào ly PP (vạch 600 đối với ly 700cc, vạch 800 đối với ly 1000cc).",
        "Bước 3: Rót trà Xí Muội vào ly PP (300ml đối với ly 700cc, 400ml đối với ly 1000cc).",
        "Bước 4: Hoàn thành thức uống (Không cần lắc)."
      ]
    },
    {
      id: "rec-tra-xi-muoi-bi-dao-mix",
      name: "Trà Xí Muội Bí Đao (Mix)",
      category: "special",
      categoryName: "B. Món đặc biệt",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: true,
      isXiMuoiWinterMelonMix: true,
      sizes: {
        "700ml": {
          tea: "300ml hỗn hợp",
          ice: "Đá đầy ly",
          sugar: "100% (Cố định)",
          milk: "Aiyu + Hạt é",
          ingredients: [
            { name: "Thạch aiyu", quantity: "1 vá (40g)" },
            { name: "Hạt é", quantity: "2 vá (60g)" },
            { name: "Trà Bí Đao", quantity: "150ml" },
            { name: "Trà Xí Muội", quantity: "150ml" }
          ]
        },
        "1000ml": {
          tea: "400ml hỗn hợp",
          ice: "Đá đầy ly",
          sugar: "100% (Cố định)",
          milk: "Aiyu + Hạt é",
          ingredients: [
            { name: "Thạch aiyu", quantity: "1 vá (40g)" },
            { name: "Hạt é", quantity: "2 vá (60g)" },
            { name: "Trà Bí Đao", quantity: "200ml" },
            { name: "Trà Xí Muội", quantity: "200ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 1 vá thạch aiyu (40g) và 2 vá hạt é (60g) vào ly PP.",
        "Bước 2: Rót 150ml trà Bí Đao vào ly PP.",
        "Bước 3: Rót 150ml trà Xí Muội vào ly PP.",
        "Bước 4: Cho đá đầy ly PP.",
        "Bước 5: Hoàn thành thức uống (Không cần lắc)."
      ]
    },
    {
      id: "rec-tra-xi-muoi-olong-mix",
      name: "Trà Xí Muội Ô Long (Mix)",
      category: "special",
      categoryName: "B. Món đặc biệt",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      minSugar: "50%",
      isXiMuoiOlongMix: true,
      sizes: {
        "700ml": {
          tea: "300ml hỗn hợp",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "Aiyu + Hạt é",
          ingredients: [
            { name: "Thạch aiyu", quantity: "1 vá (40g)" },
            { name: "Hạt é", quantity: "2 vá (60g)" },
            { name: "Cốt Trà ô long có đường", quantity: "150ml" },
            { name: "Trà Xí Muội", quantity: "150ml" }
          ]
        },
        "1000ml": {
          tea: "400ml hỗn hợp",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "Aiyu + Hạt é",
          ingredients: [
            { name: "Thạch aiyu", quantity: "1 vá (40g)" },
            { name: "Hạt é", quantity: "2 vá (60g)" },
            { name: "Cốt Trà ô long có đường", quantity: "200ml" },
            { name: "Trà Xí Muội", quantity: "200ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 1 vá thạch aiyu (40g) và 2 vá hạt é (60g) vào ly PP.",
        "Bước 2: Rót 150ml cốt Trà ô long có đường vào ly PP.",
        "Bước 3: Rót 150ml trà Xí Muội vào ly PP.",
        "Bước 4: Cho đá đầy ly PP.",
        "Bước 5: Hoàn thành thức uống (Không cần lắc)."
      ]
    },
    {
      id: "rec-hong-tra-kem-cheese",
      name: "Hồng trà kem Cheese",
      category: "special",
      categoryName: "B. Món đặc biệt",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isCheeseTea: true,
      sizes: {
        "700ml": {
          tea: "350ml",
          ice: "Đá gần đầy ly",
          sugar: "100%",
          milk: "60g kem Cheese (đổ đầy ly)",
          ingredients: [
            { name: "Cốt Hồng trà có đường", quantity: "350ml" },
            { name: "Kem Cheese", quantity: "60g" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá gần đầy ly PP.",
        "Bước 2: Rót 350ml cốt Hồng trà có đường vào ly PP.",
        "Bước 3: Cho vào 60g kem Cheese (đổ đầy ly) lên trên lớp trà.",
        "Bước 4: Hoàn thành thức uống."
      ]
    },
    {
      id: "rec-tra-xanh-kem-cheese",
      name: "Trà Xanh kem Cheese",
      category: "special",
      categoryName: "B. Món đặc biệt",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isCheeseTea: true,
      sizes: {
        "700ml": {
          tea: "350ml",
          ice: "Đá gần đầy ly",
          sugar: "100%",
          milk: "60g kem Cheese (đổ đầy ly)",
          ingredients: [
            { name: "Cốt Trà xanh có đường", quantity: "350ml" },
            { name: "Kem Cheese", quantity: "60g" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá gần đầy ly PP.",
        "Bước 2: Rót 350ml cốt Trà xanh có đường vào ly PP.",
        "Bước 3: Cho vào 60g kem Cheese (đổ đầy ly) lên trên lớp trà.",
        "Bước 4: Hoàn thành thức uống."
      ]
    },
    {
      id: "rec-olong-kem-cheese",
      name: "Olong kem Cheese",
      category: "special",
      categoryName: "B. Món đặc biệt",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isCheeseTea: true,
      sizes: {
        "700ml": {
          tea: "350ml",
          ice: "Đá gần đầy ly",
          sugar: "100%",
          milk: "60g kem Cheese (đổ đầy ly)",
          ingredients: [
            { name: "Cốt Trà ô long có đường", quantity: "350ml" },
            { name: "Kem Cheese", quantity: "60g" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá gần đầy ly PP.",
        "Bước 2: Rót 350ml cốt Trà ô long có đường vào ly PP.",
        "Bước 3: Cho vào 60g kem Cheese (đổ đầy ly) lên trên lớp trà.",
        "Bước 4: Hoàn thành thức uống."
      ]
    },
    {
      id: "rec-tra-sua-khoai-mon-nghien",
      name: "Trà sữa Khoai Môn Nghiền",
      category: "hot-tea",
      categoryName: "C. Món hot",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isTaroMashed: true,
      mashedTeaBase: "Hồng trà Đài Loan",
      sizes: {
        "700ml": {
          tea: "300ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "120g khoai môn + 40cc kem béo",
          ingredients: [
            { name: "Khoai môn nghiền", quantity: "120g (1.5 viên)" },
            { name: "Kem béo", quantity: "40cc" },
            { name: "Cốt Hồng trà Đài Loan có đường", quantity: "300ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 1,5 viên khoai môn nghiền 120g vào ly PP.",
        "Bước 2: Thêm 40cc kem béo vào ly PP.",
        "Bước 3: Rót 300ml cốt Hồng trà Đài Loan có đường vào ly PP.",
        "Bước 4: Dùng muỗng khuấy đều hỗn hợp khoai môn nghiền, kem béo và trà vừa phải.",
        "Bước 5: Cho đá đầy ly PP.",
        "Bước 6: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-sua-olong-khoai-mon-nghien",
      name: "Trà sữa Ô Long Khoai Môn Nghiền",
      category: "hot-tea",
      categoryName: "C. Món hot",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isTaroMashed: true,
      mashedTeaBase: "Trà ô long",
      sizes: {
        "700ml": {
          tea: "300ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "120g khoai môn + 40cc kem béo",
          ingredients: [
            { name: "Khoai môn nghiền", quantity: "120g (1.5 viên)" },
            { name: "Kem béo", quantity: "40cc" },
            { name: "Cốt Trà ô long có đường", quantity: "300ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 1,5 viên khoai môn nghiền 120g vào ly PP.",
        "Bước 2: Thêm 40cc kem béo vào ly PP.",
        "Bước 3: Rót 300ml cốt Trà ô long có đường vào ly PP.",
        "Bước 4: Dùng muỗng khuấy đều hỗn hợp khoai môn nghiền, kem béo và trà vừa phải.",
        "Bước 5: Cho đá đầy ly PP.",
        "Bước 6: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-hong-tra-kem-tuoi",
      name: "Hồng trà kem tươi",
      category: "hot-tea",
      categoryName: "C. Món hot",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      sizes: {
        "700ml": {
          tea: "Gần đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "1 viên kem tươi (60g)",
          ingredients: [
            { name: "Cốt Hồng trà có đường", quantity: "Gần đầy ly" },
            { name: "Kem tươi", quantity: "1 viên (60g)" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót cốt Hồng trà có đường cho đến gần đầy ly.",
        "Bước 3: Múc 1 viên Kem Tươi (60g) cho vào ly PP.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-olong-bi-dao",
      name: "Trà Olong Bí Đao",
      category: "hot-tea",
      categoryName: "C. Món hot",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      minSugar: "50%",
      isOlongWinterMelon: true,
      sizes: {
        "700ml": {
          tea: "350ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "40g",
          ingredients: [
            { name: "Thủy tinh củ năng", quantity: "40g (1 thìa)" },
            { name: "Trà Bí Đao", quantity: "175ml" },
            { name: "Cốt Trà ô long có đường", quantity: "175ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 40g Củ Năng (Thủy Tinh Củ Năng) vào ly PP.",
        "Bước 2: Rót 175ml trà Bí Đao trực tiếp vào ly PP.",
        "Bước 3: Rót 175ml cốt Trà ô long có đường trực tiếp vào ly PP.",
        "Bước 4: Cho đá vào đầy ly PP.",
        "Bước 5: Dập nắp sau đó lắc đều ly nước."
      ]
    },
    {
      id: "rec-bat-bao-ngo-gia",
      name: "Bát Bảo Ngô Gia",
      category: "hot-tea",
      categoryName: "C. Món hot",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      minSugar: "50%",
      isEightTreasures: true,
      sizes: {
        "700ml": {
          tea: "200ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "7 loại Topping",
          ingredients: [
            { name: "Trân châu đường đen", quantity: "Nửa vá (60g)" },
            { name: "Trân châu củ năng", quantity: "Nửa vá (25g)" },
            { name: "Bánh vuông mini đường đen", quantity: "Nửa vá (25g)" },
            { name: "Trân châu 3Q", quantity: "Nửa vá (20g)" },
            { name: "Sương sáo", quantity: "1 vá (40g)" },
            { name: "Thạch dừa", quantity: "1 vá (40g)" },
            { name: "Hạt sen", quantity: "Nửa vá (25g)" },
            { name: "Trà Bí Đao", quantity: "200ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho các loại topping vào ly PP theo thứ tự: 1 thìa nhỏ Trân Châu Đường Đen, nửa vá trân châu củ năng, nửa vá bánh vuông mini đường đen, nửa vá trân châu 3Q, 1 vá sương sáo, 1 vá thạch dừa và nửa vá hạt sen.",
        "Bước 2: Cho đá đầy ly PP.",
        "Bước 3: Rót 200ml trà Bí Đao trực tiếp vào ly PP.",
        "Bước 4: Hoàn thành thức uống."
      ]
    },
    {
      id: "rec-hong-tra-chanh",
      name: "Hồng trà chanh",
      category: "fruit-tea",
      categoryName: "F. Trà trái cây",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isLemonTea: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Nước chanh", quantity: "20cc" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Chanh tươi", quantity: "2 lát" },
            { name: "Cốt Hồng trà có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Nước chanh", quantity: "25cc" },
            { name: "Nước đường", quantity: "15cc" },
            { name: "Chanh tươi", quantity: "2 lát" },
            { name: "Cốt Hồng trà có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót 20cc nước chanh và 10cc nước đường vào ly PP.",
        "Bước 3: Thả 2 lát chanh vào ly PP.",
        "Bước 4: Rót cốt Hồng trà có đường cho đến đầy ly.",
        "Bước 5: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-chanh-vai",
      name: "Trà chanh vải thiều",
      category: "fruit-tea",
      categoryName: "F. Trà trái cây",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: true,
      isLemonTea: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100% (Cố định)",
          milk: "--",
          ingredients: [
            { name: "Nước chanh", quantity: "20cc" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Chanh tươi", quantity: "2 lát" },
            { name: "Cốt Hồng trà vải thiều có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100% (Cố định)",
          milk: "--",
          ingredients: [
            { name: "Nước chanh", quantity: "25cc" },
            { name: "Nước đường", quantity: "15cc" },
            { name: "Chanh tươi", quantity: "2 lát" },
            { name: "Cốt Hồng trà vải thiều có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót 20cc nước chanh và 10cc nước đường vào ly PP.",
        "Bước 3: Thả 2 lát chanh vào ly PP.",
        "Bước 4: Rót cốt Hồng trà vải thiều có đường cho đến đầy ly.",
        "Bước 5: Hoàn thành và dập nắp ly (Cố định độ đường)."
      ]
    },
    {
      id: "rec-tra-xanh-chanh",
      name: "Trà xanh chanh",
      category: "fruit-tea",
      categoryName: "F. Trà trái cây",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isLemonTea: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Nước chanh", quantity: "20cc" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Chanh tươi", quantity: "2 lát" },
            { name: "Cốt Trà xanh có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Nước chanh", quantity: "25cc" },
            { name: "Nước đường", quantity: "15cc" },
            { name: "Chanh tươi", quantity: "2 lát" },
            { name: "Cốt Trà xanh có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót 20cc nước chanh và 10cc nước đường vào ly PP.",
        "Bước 3: Thả 2 lát chanh vào ly PP.",
        "Bước 4: Rót cốt Trà xanh có đường cho đến đầy ly.",
        "Bước 5: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-bi-dao-chanh",
      name: "Bí đao chanh",
      category: "fruit-tea",
      categoryName: "F. Trà trái cây",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: true,
      isLemonTea: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100% (Cố định)",
          milk: "--",
          ingredients: [
            { name: "Nước chanh", quantity: "20cc" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Chanh tươi", quantity: "2 lát" },
            { name: "Cốt Trà bí đao có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100% (Cố định)",
          milk: "--",
          ingredients: [
            { name: "Nước chanh", quantity: "25cc" },
            { name: "Nước đường", quantity: "15cc" },
            { name: "Chanh tươi", quantity: "2 lát" },
            { name: "Cốt Trà bí đao có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Rót 20cc nước chanh và 10cc nước đường vào ly PP.",
        "Bước 3: Thả 2 lát chanh vào ly PP.",
        "Bước 4: Rót cốt Trà bí đao có đường cho đến đầy ly.",
        "Bước 5: Hoàn thành và dập nắp ly (Cố định độ đường)."
      ]
    },
    {
      id: "rec-mau-hong-lang-man",
      name: "Màu hồng lãng mạn",
      category: "fruit-tea",
      categoryName: "F. Trà trái cây",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isPinkGuava: true,
      sizes: {
        "700ml": {
          tea: "Nước lọc đầy ly",
          ice: "Đá vạch 600",
          sugar: "100% (60ml)",
          milk: "70cc",
          ingredients: [
            { name: "Nước cốt ổi hồng", quantity: "70cc" },
            { name: "Nước cốt chanh", quantity: "10cc" },
            { name: "Nước đường", quantity: "60ml" },
            { name: "Chanh tươi", quantity: "1 lát" },
            { name: "Nước lọc", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 70cc nước cốt ổi hồng và 10cc nước cốt chanh vào ly PP.",
        "Bước 2: Cho 60cc nước đường và 1 lát chanh vào ly PP.",
        "Bước 3: Cho đá vào ly PP, sau đó đổ nước lọc đầy ly."
      ]
    },
    {
      id: "rec-hong-tra-dao",
      name: "Hồng trà đào",
      category: "fruit-tea",
      categoryName: "F. Trà trái cây",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isPeachTea: true,
      sizes: {
        "700ml": {
          tea: "Cho đến đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "20cc",
          ingredients: [
            { name: "Miếng đào", quantity: "5 miếng (25g)" },
            { name: "Nước đào", quantity: "20cc" },
            { name: "Thạch đào", quantity: "1 vá (45g)" },
            { name: "Cốt Hồng trà có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 5 miếng đào (25g), 20cc nước đào và 1 vá thạch đào (45g) vào ly PP.",
        "Bước 2: Cho đá vào ly PP đến vạch 600.",
        "Bước 3: Rót cốt Hồng trà có đường trực tiếp vào ly PP cho đến đầy ly.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-xanh-dao",
      name: "Trà xanh đào",
      category: "fruit-tea",
      categoryName: "F. Trà trái cây",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isPeachTea: true,
      sizes: {
        "700ml": {
          tea: "Cho đến đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "20cc",
          ingredients: [
            { name: "Miếng đào", quantity: "5 miếng (25g)" },
            { name: "Nước đào", quantity: "20cc" },
            { name: "Thạch đào", quantity: "1 vá (45g)" },
            { name: "Cốt Trà xanh có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 5 miếng đào (25g), 20cc nước đào và 1 vá thạch đào (45g) vào ly PP.",
        "Bước 2: Cho đá vào ly PP đến vạch 600.",
        "Bước 3: Rót cốt Trà xanh có đường trực tiếp vào ly PP cho đến đầy ly.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-olong-dao-fruit",
      name: "Trà ô long đào",
      category: "fruit-tea",
      categoryName: "F. Trà trái cây",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isPeachTea: true,
      sizes: {
        "700ml": {
          tea: "Cho đến đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "20cc",
          ingredients: [
            { name: "Miếng đào", quantity: "5 miếng (25g)" },
            { name: "Nước đào", quantity: "20cc" },
            { name: "Thạch đào", quantity: "1 vá (45g)" },
            { name: "Cốt Trà ô long có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 5 miếng đào (25g), 20cc nước đào và 1 vá thạch đào (45g) vào ly PP.",
        "Bước 2: Cho đá vào ly PP đến vạch 600.",
        "Bước 3: Rót cốt Trà ô long có đường trực tiếp vào ly PP cho đến đầy ly.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-olong-nho",
      name: "Olong Nho",
      category: "fruit-tea",
      categoryName: "F. Trà trái cây",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isOlongGrape: true,
      sizes: {
        "700ml": {
          tea: "Cho đến đầy ly",
          ice: "Đá vạch 600ml",
          sugar: "100%",
          milk: "30cc",
          ingredients: [
            { name: "Mứt nho", quantity: "50g" },
            { name: "Sốt nho", quantity: "30cc" },
            { name: "Cốt Trà ô long có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 50g mứt nho vào ly PP.",
        "Bước 2: Dùng chày dầm mứt nho ở mức vừa phải.",
        "Bước 3: Cho tiếp 30cc sốt nho vào ly PP.",
        "Bước 4: Cho đá vào ly PP đến vạch 600ml.",
        "Bước 5: Rót cốt Trà ô long có đường trực tiếp vào ly PP cho đến đầy ly.",
        "Bước 6: Dập nắp sau đó lắc đều ly nước trước khi phục vụ."
      ]
    },
    {
      id: "rec-tra-sua-socola",
      name: "Trà sữa Socola",
      category: "milk-tea",
      categoryName: "D. Trà sữa",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isChocolateMilkTea: true,
      sizes: {
        "700ml": {
          tea: "300ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "40cc kem béo",
          ingredients: [
            { name: "Sốt socola", quantity: "30cc" },
            { name: "Kem béo", quantity: "40cc" },
            { name: "Cốt Hồng trà Đài Loan có đường", quantity: "300ml" }
          ]
        },
        "1000ml": {
          tea: "400ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "60cc kem béo",
          ingredients: [
            { name: "Sốt socola", quantity: "50cc" },
            { name: "Kem béo", quantity: "60cc" },
            { name: "Cốt Hồng trà Đài Loan có đường", quantity: "400ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Rót 300ml cốt Hồng trà Đài Loan có đường vào ly PP.",
        "Bước 2: Thêm 40cc kem béo và 30cc sốt socola vào ly PP.",
        "Bước 3: Khuấy đều hỗn hợp trà, kem béo và sốt socola.",
        "Bước 4: Cho đá đầy ly PP.",
        "Bước 5: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-sua-dl",
      name: "Trà sữa Đài Loan",
      category: "milk-tea",
      categoryName: "D. Trà sữa",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isMilkTea: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "40cc kem béo",
          ingredients: [
            { name: "Kem béo", quantity: "40cc" },
            { name: "Cốt Hồng trà có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100%",
          milk: "60cc kem béo",
          ingredients: [
            { name: "Kem béo", quantity: "60cc" },
            { name: "Cốt Hồng trà có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Cho 40cc kem béo trực tiếp vào ly PP.",
        "Bước 3: Rót cốt Hồng trà có đường cho đến đầy ly.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-sua-vai",
      name: "Trà sữa vải thiều",
      category: "milk-tea",
      categoryName: "D. Trà sữa",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: true,
      isMilkTea: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100% (Cố định)",
          milk: "40cc kem béo",
          ingredients: [
            { name: "Kem béo", quantity: "40cc" },
            { name: "Cốt Hồng trà vải thiều có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100% (Cố định)",
          milk: "60cc kem béo",
          ingredients: [
            { name: "Kem béo", quantity: "60cc" },
            { name: "Cốt Hồng trà vải thiều có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Cho 40cc kem béo trực tiếp vào ly PP.",
        "Bước 3: Rót cốt Hồng trà vải thiều có đường cho đến đầy ly.",
        "Bước 4: Hoàn thành và dập nắp ly (Cố định độ đường)."
      ]
    },
    {
      id: "rec-tra-sua-bi-dao",
      name: "Trà sữa bí đao",
      category: "milk-tea",
      categoryName: "D. Trà sữa",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: true,
      isMilkTea: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100% (Cố định)",
          milk: "40cc kem béo",
          ingredients: [
            { name: "Kem béo", quantity: "40cc" },
            { name: "Cốt Trà bí đao có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100% (Cố định)",
          milk: "60cc kem béo",
          ingredients: [
            { name: "Kem béo", quantity: "60cc" },
            { name: "Cốt Trà bí đao có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Cho 40cc kem béo trực tiếp vào ly PP.",
        "Bước 3: Rót cốt Trà bí đao có đường cho đến đầy ly.",
        "Bước 4: Hoàn thành và dập nắp ly (Cố định độ đường)."
      ]
    },
    {
      id: "rec-tra-sua-olong",
      name: "Trà sữa ô long",
      category: "milk-tea",
      categoryName: "D. Trà sữa",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isMilkTea: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "40cc kem béo",
          ingredients: [
            { name: "Kem béo", quantity: "40cc" },
            { name: "Cốt Trà ô long có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100%",
          milk: "60cc kem béo",
          ingredients: [
            { name: "Kem béo", quantity: "60cc" },
            { name: "Cốt Trà ô long có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho đá đến vạch 600.",
        "Bước 2: Cho 40cc kem béo trực tiếp vào ly PP.",
        "Bước 3: Rót cốt Trà ô long có đường cho đến đầy ly.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-sua-tcd-den",
      name: "Trà sữa Trân Châu Đường Đen",
      category: "milk-tea",
      categoryName: "D. Trà sữa",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isMilkTea: true,
      isBlackSugarPearl: true,
      sizes: {
        "700ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "30cc kem béo",
          ingredients: [
            { name: "Trân châu đường đen", quantity: "2 vá (120g)" },
            { name: "Kem béo", quantity: "30cc" },
            { name: "Cốt Hồng trà có đường", quantity: "Đầy ly" }
          ]
        },
        "1000ml": {
          tea: "Đầy ly",
          ice: "Đá vạch 800",
          sugar: "100%",
          milk: "50cc kem béo",
          ingredients: [
            { name: "Trân châu đường đen", quantity: "2 vá (120g)" },
            { name: "Kem béo", quantity: "50cc" },
            { name: "Cốt Hồng trà có đường", quantity: "Đầy ly" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 2 vá trân châu đường đen (120g) vào ly PP.",
        "Bước 2: Cho đá đến vạch 600.",
        "Bước 3: Cho 30cc kem béo trực tiếp vào ly PP.",
        "Bước 4: Rót cốt Hồng trà có đường cho đến đầy ly.",
        "Bước 5: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-sua-tuoi-tcd-den",
      name: "Sữa tươi Trân Châu Đường Đen",
      category: "latte",
      categoryName: "E. Latte / Sữa tươi",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isFreshMilkBlackSugar: true,
      sizes: {
        "700ml": {
          tea: "300ml Sữa tươi",
          ice: "Đá vạch 600",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Trân châu đường đen", quantity: "2 vá (120g)" },
            { name: "Sữa tươi", quantity: "300ml" },
            { name: "Nước đường", quantity: "20cc" }
          ]
        },
        "1000ml": {
          tea: "360ml Sữa tươi",
          ice: "Đá vạch 800",
          sugar: "100%",
          milk: "--",
          ingredients: [
            { name: "Trân châu đường đen", quantity: "2 vá (120g)" },
            { name: "Sữa tươi", quantity: "360ml" },
            { name: "Nước đường", quantity: "30cc" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 2 vá trân châu đường đen (120g) vào ly PP và tráng đều quanh thành ly.",
        "Bước 2: Cho đá đến vạch 600.",
        "Bước 3: Đong 300ml sữa tươi và 20cc nước đường vào ca đong, khuấy đều.",
        "Bước 4: Rót hỗn hợp sữa tươi vào ly PP.",
        "Bước 5: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-sua-tuoi-khoai-mon-nghien",
      name: "Sữa tươi Khoai Môn Nghiền",
      category: "latte",
      categoryName: "E. Latte / Sữa tươi",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isFreshMilkTaroMashed: true,
      sizes: {
        "700ml": {
          tea: "--",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "120g khoai môn + 300ml sữa tươi",
          ingredients: [
            { name: "Khoai môn nghiền", quantity: "120g (1.5 viên)" },
            { name: "Sữa tươi", quantity: "300ml" },
            { name: "Nước đường", quantity: "20cc" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 1,5 viên khoai môn nghiền (120g) vào ly PP.",
        "Bước 2: Rót 300ml sữa tươi và 20cc nước đường vào ly PP.",
        "Bước 3: Dùng muỗng khuấy đều hỗn hợp khoai môn nghiền, sữa tươi và nước đường vừa phải.",
        "Bước 4: Cho đá đầy ly PP.",
        "Bước 5: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-hong-tra-latte",
      name: "Hồng trà latte",
      category: "latte",
      categoryName: "E. Latte / Sữa tươi",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isLatteTea: true,
      sizes: {
        "700ml": {
          tea: "250ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "120ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "120ml" },
            { name: "Nước đường", quantity: "5cc" },
            { name: "Cốt Hồng trà có đường", quantity: "250ml" }
          ]
        },
        "1000ml": {
          tea: "350ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "150ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "150ml" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Cốt Hồng trà có đường", quantity: "350ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 120ml sữa tươi và 5cc nước đường vào ca định lượng. Khuấy đều rồi cho vào ly PP.",
        "Bước 2: Đong 250ml cốt Hồng trà có đường vào ca định lượng, sau đó cho vào ly PP.",
        "Bước 3: Cho đá đến đầy ly PP.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-latte-vai",
      name: "Latte vải thiều",
      category: "latte",
      categoryName: "E. Latte / Sữa tươi",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isLatteTea: true,
      minSugar: "70%",
      sizes: {
        "700ml": {
          tea: "250ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "120ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "120ml" },
            { name: "Nước đường", quantity: "5cc" },
            { name: "Cốt Hồng trà vải thiều có đường", quantity: "250ml" }
          ]
        },
        "1000ml": {
          tea: "350ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "150ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "150ml" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Cốt Hồng trà vải thiều có đường", quantity: "350ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 120ml sữa tươi và 5cc nước đường vào ca định lượng. Khuấy đều rồi cho vào ly PP.",
        "Bước 2: Đong 250ml cốt Hồng trà vải thiều có đường vào ca định lượng, sau đó cho vào ly PP.",
        "Bước 3: Cho đá đến đầy ly PP.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tra-xanh-latte",
      name: "Trà xanh latte",
      category: "latte",
      categoryName: "E. Latte / Sữa tươi",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isLatteTea: true,
      sizes: {
        "700ml": {
          tea: "250ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "120ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "120ml" },
            { name: "Nước đường", quantity: "5cc" },
            { name: "Cốt Trà xanh có đường", quantity: "250ml" }
          ]
        },
        "1000ml": {
          tea: "350ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "150ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "150ml" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Cốt Trà xanh có đường", quantity: "350ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 120ml sữa tươi và 5cc nước đường vào ca định lượng. Khuấy đều rồi cho vào ly PP.",
        "Bước 2: Đong 250ml cốt Trà xanh có đong vào ca định lượng, sau đó cho vào ly PP.",
        "Bước 3: Cho đá đến đầy ly PP.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-bi-dao-latte",
      name: "Bí đao latte",
      category: "latte",
      categoryName: "E. Latte / Sữa tươi",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isLatteTea: true,
      minSugar: "70%",
      sizes: {
        "700ml": {
          tea: "250ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "120ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "120ml" },
            { name: "Nước đường", quantity: "5cc" },
            { name: "Cốt Trà bí đao có đường", quantity: "250ml" }
          ]
        },
        "1000ml": {
          tea: "350ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "150ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "150ml" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Cốt Trà bí đao có đường", quantity: "350ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 120ml sữa tươi và 5cc nước đường vào ca định lượng. Khuấy đều rồi cho vào ly PP.",
        "Bước 2: Đong 250ml cốt Trà bí đao có đường vào ca định lượng, sau đó cho vào ly PP.",
        "Bước 3: Cho đá đến đầy ly PP.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-olong-latte",
      name: "Ô long latte",
      category: "latte",
      categoryName: "E. Latte / Sữa tươi",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isLatteTea: true,
      sizes: {
        "700ml": {
          tea: "250ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "120ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "120ml" },
            { name: "Nước đường", quantity: "5cc" },
            { name: "Cốt Trà ô long có đường", quantity: "250ml" }
          ]
        },
        "1000ml": {
          tea: "350ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "150ml sữa tươi",
          ingredients: [
            { name: "Sữa tươi", quantity: "150ml" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Cốt Trà ô long có đường", quantity: "350ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 120ml sữa tươi và 5cc nước đường vào ca định lượng. Khuấy đều rồi cho vào ly PP.",
        "Bước 2: Đong 250ml cốt Trà ô long có đường vào ca định lượng, sau đó cho vào ly PP.",
        "Bước 3: Cho đá đến đầy ly PP.",
        "Bước 4: Hoàn thành và dập nắp ly."
      ]
    },
    {
      id: "rec-tcd-den-latte",
      name: "Trân Châu Đường Đen Latte",
      category: "latte",
      categoryName: "E. Latte / Sữa tươi",
      defaultSize: "700ml",
      isCustomPureStyle: true,
      isFixedSugar: false,
      isLatteTea: true,
      isBlackSugarPearlLatte: true,
      sizes: {
        "700ml": {
          tea: "250ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "120ml sữa tươi",
          ingredients: [
            { name: "Trân châu đường đen", quantity: "2 vá (120g)" },
            { name: "Sữa tươi", quantity: "120ml" },
            { name: "Nước đường", quantity: "5cc" },
            { name: "Cốt Hồng trà có đường", quantity: "250ml" }
          ]
        },
        "1000ml": {
          tea: "350ml",
          ice: "Đá đầy ly",
          sugar: "100%",
          milk: "150ml sữa tươi",
          ingredients: [
            { name: "Trân châu đường đen", quantity: "2 vá (120g)" },
            { name: "Sữa tươi", quantity: "150ml" },
            { name: "Nước đường", quantity: "10cc" },
            { name: "Cốt Hồng trà có đường", quantity: "350ml" }
          ]
        }
      },
      steps: [
        "Bước 1: Cho 2 vá trân châu đường đen (120g) vào ly PP và tráng đều quanh thành ly.",
        "Bước 2: Cho 120ml sữa tươi và 5cc nước đường vào ca định lượng. Khuấy đều rồi cho vào ly PP.",
        "Bước 3: Đong 250ml cốt Hồng trà có đường vào ca định lượng, sau đó cho vào ly PP.",
        "Bước 4: Cho đá đến đầy ly PP.",
        "Bước 5: Hoàn thành và dập nắp ly."
      ]
    }
  ],

  toppingGuidelines: [
    { name: "Thạch đào", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 168, openedStore: "Tủ mát" },
    { name: "Nguyên vị", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 168, openedStore: "Tủ mát" },
    { name: "Aiyu", unopenedLife: "15 ngày", unopenedStore: "Tủ mát", openedLife: 48, openedStore: "Tủ mát" },
    { name: "Sương sáo", unopenedLife: "15 ngày", unopenedStore: "Tủ mát", openedLife: 48, openedStore: "Tủ mát" },
    { name: "Thạch Q", unopenedLife: "15 ngày", unopenedStore: "Tủ mát", openedLife: 48, openedStore: "Tủ mát" },
    { name: "3Q trắng", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 48, openedStore: "Tủ mát" },
    { name: "Đường đen-5h", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 168, openedStore: "Nhiệt độ thường" },
    { name: "Ngũ sắc-5h", unopenedLife: "6 tháng", unopenedStore: "Nhiệt độ thường", openedLife: 72, openedStore: "Nhiệt độ thường" },
    { name: "Khoai môn-5h", unopenedLife: "6 tháng", unopenedStore: "Tủ đông", openedLife: 72, openedStore: "Tủ đông (Gói 500g dùng trong 3 ngày / Gói 1kg dùng trong 7 ngày)" },
    { name: "TC củ năng-5h", unopenedLife: "12 tháng", unopenedStore: "Tủ đông", openedLife: 120, openedStore: "Tủ đông" },
    { name: "Tc vị dâu-5h", unopenedLife: "12 tháng", unopenedStore: "Tủ đông", openedLife: 120, openedStore: "Tủ đông" },
    { name: "Khoai dẻo-5h", unopenedLife: "12 tháng", unopenedStore: "Tủ đông", openedLife: 120, openedStore: "Tủ đông" },
    { name: "Bánh vuông-5h", unopenedLife: "12 tháng", unopenedStore: "Tủ đông", openedLife: 120, openedStore: "Tủ đông" },
    { name: "K.môn nghiền", unopenedLife: "15 ngày", unopenedStore: "Tủ mát", openedLife: 72, openedStore: "Tủ mát" },
    { name: "Đào miếng", unopenedLife: "3 năm", unopenedStore: "Nhiệt độ thường", openedLife: 48, openedStore: "Tủ mát" },
    { name: "Kem", unopenedLife: "6 tháng", unopenedStore: "Tủ đông", openedLife: 720, openedStore: "Tủ đông" },
    { name: "Hạt sen", unopenedLife: "2 năm", unopenedStore: "Nhiệt độ thường", openedLife: 72, openedStore: "Tủ mát (Dùng tốt trong 3 đến 5 ngày)" },
    { name: "Củ năng", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 168, openedStore: "Tủ mát" },
    { name: "Pudding", unopenedLife: "10 ngày", unopenedStore: "Tủ mát", openedLife: 120, openedStore: "Tủ mát" },
    { name: "Cốt trái cây", unopenedLife: "7 ngày hoặc 24 tháng (Tùy loại)", unopenedStore: "Tủ mát / Tủ đông", openedLife: 72, openedStore: "Tủ mát" },
    { name: "Mứt nho", unopenedLife: "2 năm", unopenedStore: "Nhiệt độ thường", openedLife: 168, openedStore: "Tủ mát" },
    { name: "Sốt nho", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 360, openedStore: "Tủ mát" },
    { name: "Sốt socola", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 720, openedStore: "Nhiệt độ thường" },
    { name: "Muối hồng", unopenedLife: "5 năm", unopenedStore: "Nhiệt độ thường", openedLife: 4320, openedStore: "Nhiệt độ thường" },
    { name: "Sốt phô mai", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 720, openedStore: "Tủ mát" },
    { name: "Sữa tươi", unopenedLife: "15 ngày", unopenedStore: "Tủ mát", openedLife: 24, openedStore: "Tủ mát (Sử dụng tốt trong 24 giờ)" },
    { name: "Kem béo", unopenedLife: "30 ngày hoặc 1 năm (Tùy loại)", unopenedStore: "Tủ mát / Tủ đông", openedLife: 120, openedStore: "Tủ mát (Sử dụng tốt từ 5 đến 7 ngày)" },
    { name: "Hạt é", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 720, openedStore: "Nhiệt độ thường" },
    { name: "Kbeo vị sữa", unopenedLife: "30 ngày hoặc 1 năm (Tùy loại)", unopenedStore: "Tủ mát / Tủ đông", openedLife: 120, openedStore: "Tủ mát" },
    { name: "Siro đường", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 360, unopenedStore: "Nhiệt độ thường" },
    { name: "Nước đường", unopenedLife: "1 năm", unopenedStore: "Nhiệt độ thường", openedLife: 720, openedStore: "Nhiệt độ thường" },
    { name: "Trà các loại", unopenedLife: "6 ngày", unopenedStore: "Tủ mát", openedLife: 144, openedStore: "Tủ mát" },
    { name: "Bánh cone", unopenedLife: "3 tháng", unopenedStore: "Nhiệt độ thường", openedLife: 2160, openedStore: "Nhiệt độ thường" }
  ],

  toppingPortions: [
    { name: "Thạch đào", scoops: "2 vá", grams: "80g", notes: "" },
    { name: "Nguyên vị", scoops: "2 vá", grams: "80g", notes: "" },
    { name: "Aiyu", scoops: "2 vá", grams: "80g", notes: "" },
    { name: "Sương sáo", scoops: "2 vá", grams: "80g", notes: "" },
    { name: "Thạch Q", scoops: "1 vá", grams: "40g", notes: "" },
    { name: "3Q trắng", scoops: "1 vá", grams: "45g", notes: "" },
    { name: "Đường đen-5h", scoops: "2 vá", grams: "120g", notes: "" },
    { name: "Ngũ sắc-5h", scoops: "2 vá", grams: "100g", notes: "" },
    { name: "Khoai môn-5h", scoops: "1 vá", grams: "50g", notes: "" },
    { name: "TC củ năng-5h", scoops: "2 vá", grams: "100g", notes: "" },
    { name: "Tc vị dâu-5h", scoops: "2 vá", grams: "100g", notes: "" },
    { name: "Khoai dẻo-5h", scoops: "2 vá", grams: "100g", notes: "" },
    { name: "Bánh vuông-5h", scoops: "2 vá", grams: "100g", notes: "" },
    { name: "K.môn nghiền", scoops: "1 viên", grams: "80g", notes: "" },
    { name: "Đào miếng", scoops: "5 miếng", grams: "25g", notes: "" },
    { name: "Kem", scoops: "1 viên", grams: "60g", notes: "" },
    { name: "Hạt sen", scoops: "1 vá", grams: "50g", notes: "" },
    { name: "Củ năng", scoops: "1 vá", grams: "40g", notes: "" },
    { name: "Pudding", scoops: "1 cái", grams: "100g", notes: "" },
    { name: "Cốt trái cây", scoops: "-", grams: "-", notes: "" },
    { name: "Mứt nho", scoops: "-", grams: "-", notes: "" },
    { name: "Sốt nho", scoops: "-", grams: "-", notes: "" },
    { name: "Sốt socola", scoops: "-", grams: "-", notes: "" },
    { name: "Muối hồng", scoops: "-", grams: "-", notes: "" },
    { name: "Sốt phô mai", scoops: "-", grams: "-", notes: "" },
    { name: "Sữa tươi", scoops: "-", grams: "1-2 ngày đã khui", notes: "" },
    { name: "Kem béo", scoops: "-", grams: "-", notes: "" },
    { name: "Hạt é", scoops: "2 vá", grams: "60g", notes: "" },
    { name: "Kbeo vị sữa", scoops: "-", grams: "-", notes: "" },
    { name: "Siro đường", scoops: "-", grams: "-", notes: "" },
    { name: "Nước đường", scoops: "-", grams: "-", notes: "" },
    { name: "Trà các loại", scoops: "Có đường / Không đường", grams: "10kg / 4kg", notes: "" },
    { name: "Bánh cone", scoops: "-", grams: "-", notes: "" }
  ],

  cookingGuides: [
    {
      id: "cook-pearl-black",
      name: "Trân Châu Đường Đen",
      ratios: "Định lượng nấu: 500g<br>Lượng nước: 2000ml<br>Nước đường: 60cc<br>Đường đen: 90cc<br><br>Định lượng nấu: 1000g<br>Lượng nước: 3000ml<br>Nước đường: 120cc<br>Đường đen: 200cc<br><br>Định lượng nấu: 1500g<br>Lượng nước: 4000ml<br>Nước đường: 170cc<br>Đường đen: 250cc<br><br>Định lượng nấu: 2000g<br>Lượng nước: 5000ml<br>Nước đường: 220cc<br>Đường đen: 300cc<br><br>Định lượng nấu: 2500g<br>Lượng nước: 6000ml<br>Nước đường: 270cc<br>Đường đen: 390cc",
      prep: "Chuẩn bị rây lọc, thau rửa, thau ngâm đường cát và nước ấm.",
      steps: [
        { title: "Đun sôi nước", desc: "Đổ nước lọc theo tỷ lệ vào nồi lớn, bật bếp ga/bếp từ đun đến khi nước sôi bùng lên 100°C.", timer: 0 },
        { title: "Thả trân châu luộc chín", desc: "Thả từ từ hạt trân châu vào nồi nước sôi bùng, khuấy nhẹ và liên tục một chiều để trân châu không dính đáy nồi. Khi trân châu nổi hẳn lên mặt, đậy hé nắp vung đun lửa vừa trong 30 phút.", timer: 1800 },
        { title: "Ủ trân châu đen", desc: "Tắt bếp hoàn toàn, đóng chặt nắp vung nồi. Để nồi trên bếp ủ kín trân châu trong 30 phút tiếp theo nhằm chín nhừ tận lõi hạt.", timer: 1800 },
        { title: "Rửa trân châu nước lạnh", desc: "Đổ toàn bộ trân châu ra rây lọc, rửa sạch dưới vòi nước lạnh sạch đang xả để loại bỏ nhớt đục của bột năng và giúp hạt trân châu săn giòn dai hơn.", timer: 0 },
        { title: "Ngâm nước đường bảo quản", desc: "Để ráo nước rồi đổ trân châu vào thau, trộn đều nước đường đen đậm đặc hoặc đường cát trắng (100g đường trên 1kg trân châu) để giữ độ dẻo ngọt ấm thơm trong 4 giờ làm việc.", timer: 0 }
      ]
    },
    {
      id: "cook-pearl-taro",
      name: "Trân Châu Khoai Môn",
      ratios: "Định lượng nấu: 150 gram<br>Lượng nước: 1500ml<br>Nước đường: 25cc<br><br>Định lượng nấu: 300 gram<br>Lượng nước: 2500ml<br>Nước đường: 50cc<br><br>Định lượng nấu: 500 gram<br>Lượng nước: 2500ml<br>Nước đường: 75cc",
      prep: "Chuẩn bị thau sạch và đường cát ngâm.",
      steps: [
        { title: "Chuẩn bị đun sôi", desc: "Đun nước sôi bùng rồi thả hạt trân châu khoai môn tươi vào nồi khuấy đều.", timer: 0 },
        { title: "Luộc lửa vừa", desc: "Khi hạt nổi lên, đậy nắp hé đun sôi sùng sục trong 25 phút để hạt chín thấu màu tím nhạt.", timer: 1500 },
        { title: "Ủ trân châu khoai môn", desc: "Tắt bếp, đậy nắp kín nồi và tiến hành ủ ấm trân châu trên bếp trong 25 phút.", timer: 1500 },
        { title: "Xả nước lạnh & trộn đường", desc: "Rửa sạch nhớt bột dưới vòi nước mát sạch, để ráo rồi ngâm trộn với đường cát trắng giữ hương thơm bùi khoai môn.", timer: 0 }
      ]
    },
    {
      id: "cook-pearl-rainbow",
      name: "Trân Châu Ngũ Sắc",
      ratios: "Định lượng nấu: 300g<br>Lượng nước: 2000ml<br>Nước đường: 70cc<br><br>Định lượng nấu: 500g<br>Lượng nước: 2500ml<br>Nước đường: 100cc<br><br>Định lượng nấu: 1000g<br>Lượng nước: 3500ml<br>Nước đường: 150cc",
      prep: "Rây bột vụn trước khi thả vào luộc.",
      steps: [
        { title: "Luộc trân châu ngũ sắc", desc: "Thả trân châu ngũ sắc vào nồi nước sôi bùng, khuấy nhẹ đều tay. Đậy vung đun lửa vừa trong 20 phút.", timer: 1200 },
        { title: "Ủ ngũ sắc chín trong", desc: "Tắt bếp, giữ kín vung ủ trân châu ngũ sắc trong 20 phút cho bột trong đều óng ánh.", timer: 1200 },
        { title: "Xả lạnh & ngâm đường", desc: "Rửa thật sạch tinh bột thừa bằng nước lạnh sạch. Trộn nước đường loãng tạo lớp phủ óng ánh bảo vệ hạt không bị dính cục.", timer: 0 }
      ]
    },
    {
      id: "cook-pearl-chestnut",
      name: "Trân châu củ năng",
      ratios: "Định lượng nấu: 300 gram<br>Lượng nước: 2000ml<br>Nước đường: 50cc<br><br>Định lượng nấu: 500 gram<br>Lượng nước: 3000ml<br>Nước đường: 100cc<br><br>Định lượng nấu: 1000 gram<br>Lượng nước: 4000ml<br>Nước đường: 200cc",
      prep: "Làm củ năng tươi xắt hạt lựu nhỏ, áo đều bột năng khô mỏng rồi rây bớt bột thừa.",
      steps: [
        { title: "Thả luộc nhanh", desc: "Nước sôi sùng sục thả trân châu củ năng vào khuấy nhẹ để chống dính bột. Loại này bột tươi chín nhanh.", timer: 0 },
        { title: "Luộc chín trong nổi lên mặt", desc: "Đun sôi sùng sục lửa to trong 4 phút cho đến khi hạt bột trở nên trong suốt nhìn thấy củ năng trắng bên trong và nổi lên mặt nước.", timer: 240 },
        { title: "Ngâm đá lạnh cấp tốc", desc: "Vớt ngay trân châu củ năng ra thau nước đá lạnh buốt ngâm trong 5 phút để định hình độ giòn sần sật của củ năng không bị nát bột ngoài.", timer: 300 },
        { title: "Vớt trộn siro đường cát", desc: "Vớt ráo, ngâm siro đường cát lỏng để hạt củ năng ngọt nhẹ, óng ánh sắc hồng/xanh tùy màu làm.", timer: 0 }
      ]
    },
    {
      id: "cook-pearl-strawberry",
      name: "Trân châu dâu",
      ratios: "Định lượng nấu: 150 gram<br>Lượng nước: 2000ml<br>Nước đường: 25cc<br><br>Định lượng nấu: 300 gram<br>Lượng nước: 2500ml<br>Nước đường: 50cc<br><br>Định lượng nấu: 500 gram<br>Lượng nước: 2500ml<br>Nước đường: 75cc",
      prep: "Chuẩn bị siro dâu hoặc đường ngâm.",
      steps: [
        { title: "Luộc trân châu dâu", desc: "Thả trân châu dâu vào nước sôi bùng, đậy vung hé luộc lửa vừa trong 20 phút.", timer: 1200 },
        { title: "Ủ trân châu dâu", desc: "Tắt bếp đậy nắp kín ủ trân châu dâu trong 25 phút để dẻo đều từ trong ra.", timer: 1500 },
        { title: "Rửa nhớt & ngâm siro", desc: "Rửa nhanh nước lạnh xả sạch. Ngâm siro dâu thơm ngọt để trân châu dâu có sắc đỏ hồng mướt mắt và thơm ngát hương dâu.", timer: 0 }
      ]
    },
    {
      id: "cook-jelly-brown-sugar",
      name: "Bánh vuông đường đen",
      ratios: "Định lượng nấu: 300 gram<br>Lượng nước: 2000ml<br>Nước đường: 50cc<br><br>Định lượng nấu: 500 gram<br>Lượng nước: 3000ml<br>Nước đường: 100cc<br><br>Định lượng nấu: 1000 gram<br>Lượng nước: 4000ml<br>Nước đường: 200cc",
      prep: "Chuẩn bị nồi chống dính vì bánh vuông dễ bám đáy.",
      steps: [
        { title: "Đun luộc bánh vuông", desc: "Nước sôi thả bánh vuông đường đen vào, khuấy liên tục sát đáy nồi. Đun lửa vừa trong 25 phút.", timer: 1500 },
        { title: "Ủ ngấm đường", desc: "Tắt bếp đậy nắp nồi ủ bánh vuông trong 20 phút cho bánh nở căng và chín dẻo dai.", timer: 1200 },
        { title: "Rửa thau đá lạnh & ngâm xốt", desc: "Rửa trôi nhớt bột bằng nước mát sạch. Để thật ráo rồi ngâm trong xốt đường đen đậm đặc giúp ngấm ngọt sâu đậm vị.", timer: 0 }
      ]
    },
    {
      id: "cook-potato-balls",
      name: "Khoai dẻo tam sắc",
      ratios: "Định lượng nấu: 300 gram<br>Lượng nước: 2000ml<br>Nước đường: 30cc<br><br>Định lượng nấu: 500 gram<br>Lượng nước: 3000ml<br>Nước đường: 60cc<br><br>Định lượng nấu: 1000 gram<br>Lượng nước: 4000ml<br>Nước đường: 120cc",
      prep: "Khoai dẻo trữ đông cần rã đông nhẹ ngoài tủ mát trước khi thả luộc.",
      steps: [
        { title: "Luộc viên khoai dẻo", desc: "Thả viên khoai dẻo màu vàng, tím, cam vào nồi nước sôi bùng. Khuấy nhẹ tay tránh làm vỡ viên khoai còn mềm.", timer: 0 },
        { title: "Đun sôi đến khi nổi đều", desc: "Đun sôi lửa vừa khi khoai nổi lên mặt nước đun thêm 4 phút cho khoai chín dẻo thơm.", timer: 240 },
        { title: "Ủ lạnh cấp tốc", desc: "Vớt ngay khoai dẻo thả thau nước đá lạnh ngâm 5 phút giúp giữ độ giòn dẻo bóng và không bị nát nhão.", timer: 300 },
        { title: "Ngâm nước đường loãng ấm", desc: "Vớt ráo, trộn nước đường loãng ấm đậy kín để giữ cấu trúc dẻo dai ngọt thanh bùi vị khoai môn, khoai lang.", timer: 0 }
      ]
    }
  ]
};

// --- APPLICATION STATE ---
let appState = {
  activeSection: "dashboard-section",
  learnedRecipes: [], // Array of recipe IDs
  quizScores: [], // Array of objects { score, total, date, timeSpent }
  activeShelfToppings: [], // Array of objects { id, name, prepTime, expiryTime, status, storageCondition }
  activeTimers: [], // Array of objects { id, label, duration, remaining, intervalId }
  currentFlashcardIndex: 0,
  currentQuizQuestions: [],
  currentQuizIndex: 0,
  quizAnswers: [], // Array of selected indices
  quizStartTime: null,
  quizTimeInterval: null,
  selectedCookingGuideId: "cook-pearl-black"
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  loadLocalStorage();
  initBackgroundEffects();
  setupNavigation();
  setupSearch();
  setupEventListeners();

  // Refresh displays
  updateDashboardStats();
  renderDashboardAlerts();
  renderActiveTimersList();

  // Seed initial cooking guide view
  renderCookingGuides();

  // Start real-time timers daemon
  startRealTimeDaemon();
});

// Load persistent data from LocalStorage
function loadLocalStorage() {
  const savedLearned = localStorage.getItem("ocean_learned_recipes");
  if (savedLearned) {
    appState.learnedRecipes = JSON.parse(savedLearned);
  }

  const savedQuizScores = localStorage.getItem("ocean_quiz_scores");
  if (savedQuizScores) {
    appState.quizScores = JSON.parse(savedQuizScores);
  }

  const savedShelf = localStorage.getItem("ocean_active_shelf_toppings");
  if (savedShelf) {
    appState.activeShelfToppings = JSON.parse(savedShelf);
  } else {
    // Seed database with sample open toppings for demo
    const now = Date.now();
    appState.activeShelfToppings = [
      {
        id: "shelf-seed-1",
        name: "Trân châu đen",
        prepTime: now - 3600 * 1000, // 1 hour ago
        expiryTime: now + 3 * 3600 * 1000, // 3 hours left (unopened limit is 4 hrs)
        storageCondition: "Nhiệt độ phòng (25-28°C), đậy kín, không cất tủ lạnh vì làm cứng hạt",
        status: "green"
      },
      {
        id: "shelf-seed-2",
        name: "Kem cheese phô mai",
        prepTime: now - 23.5 * 3600 * 1000, // 23.5 hours ago
        expiryTime: now + 0.5 * 3600 * 1000, // 30 mins left (limit is 24 hrs) - YELLOW warning
        storageCondition: "Bảo quản tủ mát (2-6°C), đậy kín nắp bình",
        status: "yellow"
      }
    ];
    saveShelfToppings();
  }
}

function saveLearnedRecipes() {
  localStorage.setItem("ocean_learned_recipes", JSON.stringify(appState.learnedRecipes));
  updateDashboardStats();
}

function saveQuizScores() {
  localStorage.setItem("ocean_quiz_scores", JSON.stringify(appState.quizScores));
}

function saveShelfToppings() {
  localStorage.setItem("ocean_active_shelf_toppings", JSON.stringify(appState.activeShelfToppings));
}

// Play audio alert when a cooking or shelf timer finishes
function playAlertSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    // Play a dual-tone chime
    const playTone = (freq, delay, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

      gain.gain.setValueAtTime(0, ctx.currentTime + delay);
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + delay + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + delay + duration);

      osc.start(ctx.currentTime + delay);
      osc.stop(ctx.currentTime + delay + duration);
    };

    playTone(523.25, 0, 0.4); // C5
    playTone(659.25, 0.15, 0.4); // E5
    playTone(783.99, 0.3, 0.8); // G5
  } catch (e) {
    console.error("Audio API error:", e);
  }
}

// --- BACKGROUND BUBBLE EFFECTS ---
function initBackgroundEffects() {
  const container = document.getElementById("bubble-container");
  if (!container) return;

  const bubbleCount = 20;
  for (let i = 0; i < bubbleCount; i++) {
    createBubble(container, true);
  }

  // Continuously add bubbles at random times
  setInterval(() => {
    createBubble(container, false);
  }, 2500);
}

function createBubble(container, isInitial = false) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Random size
  const size = Math.random() * 20 + 8; // 8px to 28px
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  // Random horizontal position
  bubble.style.left = `${Math.random() * 100}%`;

  // Random speed
  const duration = Math.random() * 12 + 8; // 8s to 20s
  bubble.style.animationDuration = `${duration}s`;

  // Random delay
  const delay = isInitial ? Math.random() * -15 : Math.random() * 2;
  bubble.style.animationDelay = `${delay}s`;

  container.appendChild(bubble);

  // Remove after animation completes
  setTimeout(() => {
    bubble.remove();
  }, (duration + (isInitial ? 0 : delay)) * 1000);
}

// --- NAVIGATION & ROUTING ---
function setupNavigation() {
  const menuItems = document.querySelectorAll(".sidebar-menu .menu-item");
  const sidebar = document.getElementById("app-sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = item.getAttribute("data-target");
      switchSection(target);

      // Close sidebar on mobile after clicking
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("open");
      }
    });
  });

  // Mobile drawer toggle
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
}

function switchSection(sectionId) {
  appState.activeSection = sectionId;

  // Toggle sections
  document.querySelectorAll(".app-section").forEach(sec => {
    sec.classList.remove("active");
  });
  const activeSec = document.getElementById(sectionId);
  if (activeSec) {
    activeSec.classList.add("active");
  }

  // Toggle active class in menu links
  document.querySelectorAll(".sidebar-menu .menu-item").forEach(item => {
    item.classList.remove("active");
    if (item.getAttribute("data-target") === sectionId) {
      item.classList.add("active");
    }
  });

  // Call section specific initialization
  if (sectionId === "recipes-section") {
    renderRecipes();
  } else if (sectionId === "shelf-life-section") {
    renderShelfLifeGuidelines();
  } else if (sectionId === "portions-section") {
    renderPortions();
  } else if (sectionId === "learning-section") {
    showLearningSelector();
    updateLearningStats();
  } else if (sectionId === "dashboard-section") {
    updateDashboardStats();
    renderDashboardAlerts();
    renderActiveTimersList();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- SEARCH ENGINE ---
function setupSearch() {
  const globalSearch = document.getElementById("global-search");
  const recipeSearch = document.getElementById("recipe-search");
  const portionsSearch = document.getElementById("portions-search");

  // Global search input triggers Recipe tab and searches
  if (globalSearch) {
    globalSearch.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (q.length > 0) {
        if (appState.activeSection !== "recipes-section") {
          switchSection("recipes-section");
        }
        if (recipeSearch) {
          recipeSearch.value = e.target.value;
          renderRecipes(q);
        }
      }
    });
  }

  // Recipe Catalog view specific search
  if (recipeSearch) {
    recipeSearch.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      renderRecipes(q);
    });
  }

  // Portions specific search
  if (portionsSearch) {
    portionsSearch.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      renderPortions(q);
    });
  }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Modal closes
  const btnCloseModal = document.getElementById("btn-close-recipe-modal");
  if (btnCloseModal) {
    btnCloseModal.addEventListener("click", () => {
      document.getElementById("recipe-detail-modal").classList.remove("active");
    });
  }

  // Overlay close click
  const modalOverlay = document.getElementById("recipe-detail-modal");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }

  // Category filter buttons inside recipe view
  const categoryTabs = document.querySelectorAll("#recipe-category-tabs .filter-tab");
  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const searchBox = document.getElementById("recipe-search");
      renderRecipes(searchBox ? searchBox.value.toLowerCase() : "");
    });
  });

  // Shelf-life filter tabs
  const shelfFilterTabs = document.querySelectorAll("[data-shelf-filter]");
  shelfFilterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      shelfFilterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderActiveShelfToppings();
    });
  });

  // Open package drawer trigger
  const btnOpenPack = document.getElementById("btn-open-package-modal");
  const drawer = document.getElementById("open-package-drawer");
  if (btnOpenPack && drawer) {
    btnOpenPack.addEventListener("click", () => {
      drawer.style.display = drawer.style.display === "none" ? "block" : "none";
      if (drawer.style.display === "block") {
        // Set default time to current local time
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        document.getElementById("new-pack-time").value = now.toISOString().slice(0, 16);
      }
    });
  }

  const btnCancelPack = document.getElementById("btn-cancel-open-pack");
  if (btnCancelPack) {
    btnCancelPack.addEventListener("click", () => {
      drawer.style.display = "none";
    });
  }

  // Handle submitting a newly opened topping
  const btnSubmitPack = document.getElementById("btn-submit-open-pack");
  if (btnSubmitPack) {
    btnSubmitPack.addEventListener("click", submitOpenTopping);
  }

  // Size Selector buttons inside modal details
  const modalSizeSelector = document.getElementById("modal-size-selector");
  if (modalSizeSelector) {
    const sizeBtns = modalSizeSelector.querySelectorAll(".size-btn");
    sizeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sizeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Refresh modal specs & ingredients with newly selected size
        const currentRecipeId = modalSizeSelector.getAttribute("data-recipe-id");
        const selectedSize = btn.getAttribute("data-size");
        const recipe = DATA.recipes.find(r => r.id === currentRecipeId);
        if (recipe) {
          updateModalIngredientsAndSpecs(recipe, selectedSize);
        }
      });
    });
  }

  // Sugar Selector buttons inside modal details
  const modalSugarSelector = document.getElementById("modal-sugar-selector");
  if (modalSugarSelector) {
    const sugarBtns = modalSugarSelector.querySelectorAll(".size-btn");
    sugarBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sugarBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Refresh modal specs & ingredients
        const currentRecipeId = modalSizeSelector.getAttribute("data-recipe-id");
        const selectedSize = document.querySelector("#modal-size-selector .size-btn.active").getAttribute("data-size");
        const recipe = DATA.recipes.find(r => r.id === currentRecipeId);
        if (recipe) {
          updateModalIngredientsAndSpecs(recipe, selectedSize);
        }
      });
    });
  }

  // Ice Selector buttons inside modal details
  const modalIceSelector = document.getElementById("modal-ice-selector");
  if (modalIceSelector) {
    const iceBtns = modalIceSelector.querySelectorAll(".size-btn");
    iceBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        iceBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Refresh modal specs & ingredients
        const currentRecipeId = modalSizeSelector.getAttribute("data-recipe-id");
        const selectedSize = document.querySelector("#modal-size-selector .size-btn.active").getAttribute("data-size");
        const recipe = DATA.recipes.find(r => r.id === currentRecipeId);
        if (recipe) {
          updateModalIngredientsAndSpecs(recipe, selectedSize);
        }
      });
    });
  }

  // Prev / Next inside modal
  const btnModalPrev = document.getElementById("btn-modal-prev");
  const btnModalNext = document.getElementById("btn-modal-next");
  if (btnModalPrev) {
    btnModalPrev.addEventListener("click", () => {
      navigateModalRecipe(-1);
    });
  }
  if (btnModalNext) {
    btnModalNext.addEventListener("click", () => {
      navigateModalRecipe(1);
    });
  }

  // Toggle Learned status inside modal
  const btnModalToggleLearned = document.getElementById("btn-modal-toggle-learned");
  if (btnModalToggleLearned) {
    btnModalToggleLearned.addEventListener("click", () => {
      const currentRecipeId = modalSizeSelector.getAttribute("data-recipe-id");
      toggleRecipeLearned(currentRecipeId);

      // Update modal button appearance
      updateModalLearnedButtonState(currentRecipeId);

      // Update catalog cards in background
      renderRecipes(document.getElementById("recipe-search")?.value.toLowerCase());
    });
  }

  // Learning System view switches
  const modeCards = document.querySelectorAll(".mode-card");
  modeCards.forEach(card => {
    card.addEventListener("click", () => {
      const mode = card.getAttribute("data-mode");
      startLearningMode(mode);
    });
  });

  const btnBackToModes = document.getElementById("btn-back-to-modes");
  if (btnBackToModes) {
    btnBackToModes.addEventListener("click", () => {
      showLearningSelector();
    });
  }

  // Flashcards navigation
  const flashcardEl = document.getElementById("flashcard-element");
  if (flashcardEl) {
    flashcardEl.addEventListener("click", () => {
      flashcardEl.classList.toggle("flipped");
    });
  }

  const btnFCPrev = document.getElementById("btn-flashcard-prev");
  const btnFCNext = document.getElementById("btn-flashcard-next");
  const btnFCMark = document.getElementById("btn-flashcard-mark");
  if (btnFCPrev) btnFCPrev.addEventListener("click", () => navigateFlashcard(-1));
  if (btnFCNext) btnFCNext.addEventListener("click", () => navigateFlashcard(1));
  if (btnFCMark) {
    btnFCMark.addEventListener("click", () => {
      const currentDeck = DATA.recipes;
      const recipe = currentDeck[appState.currentFlashcardIndex];
      if (recipe && !appState.learnedRecipes.includes(recipe.id)) {
        toggleRecipeLearned(recipe.id);
        alert(`Chúc mừng! Đã đánh dấu thuộc món "${recipe.name}".`);
      }
      navigateFlashcard(1);
    });
  }

  // Quiz setup
  const btnStartQuiz = document.getElementById("btn-start-quiz");
  if (btnStartQuiz) {
    btnStartQuiz.addEventListener("click", startQuizSession);
  }

  const btnQuizNext = document.getElementById("btn-quiz-next");
  if (btnQuizNext) {
    btnQuizNext.addEventListener("click", nextQuizQuestion);
  }

  const btnRestartQuiz = document.getElementById("btn-restart-quiz");
  if (btnRestartQuiz) {
    btnRestartQuiz.addEventListener("click", startQuizSession);
  }
}

// --- STATS & ALERTS ---
function updateDashboardStats() {
  document.getElementById("stat-total-recipes").innerText = DATA.recipes.length;
  document.getElementById("stat-total-toppings").innerText = DATA.toppingGuidelines.length;

  // Calculate learning progress percentages
  const learnedCount = appState.learnedRecipes.length;
  const totalCount = DATA.recipes.length;
  const percentage = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;

  // Fill Liquid Cup
  const progressLiquid = document.getElementById("progress-liquid-tea");
  if (progressLiquid) {
    progressLiquid.style.height = `${percentage}%`;
  }

  document.getElementById("progress-percentage-text").innerText = `${percentage}%`;
  document.getElementById("progress-detail-text").innerText = `Đã thuộc ${learnedCount} / ${totalCount} công thức`;

  const descEl = document.getElementById("progress-status-desc");
  if (totalCount === 0) {
    descEl.innerText = "Chưa có công thức nào để học.";
  } else if (percentage === 100) {
    descEl.innerText = "Tuyệt vời! Bạn đã thuộc toàn bộ thực đơn!";
  } else if (percentage >= 70) {
    descEl.innerText = "Rất tốt! Cố lên một chút nữa là xuất sắc!";
  } else if (percentage >= 30) {
    descEl.innerText = "Đang tiến triển! Hãy thi thử để củng cố nhé.";
  } else {
    descEl.innerText = "Bắt đầu học ngay hôm nay!";
  }
}

function renderDashboardAlerts() {
  // Disabled alerts for expired/expiring toppings per user request
  const alertsDiv = document.getElementById("dashboard-alerts");
  if (alertsDiv) {
    alertsDiv.innerHTML = "";
  }
}

// --- RECIPE SECTION RENDERING ---
function renderRecipes(searchQuery = "") {
  const container = document.getElementById("recipes-container");
  if (!container) return;

  container.innerHTML = "";

  if (DATA.recipes.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--primary-light);">
        <i class="fa-solid fa-mug-hot" style="font-size: 3.5rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <p style="font-weight: 600; font-size: 1.1rem; color: var(--primary-deep);">Chưa có công thức pha chế nào!</p>
        <p style="font-size: 0.85rem; margin-top: 6px; opacity: 0.8;">Vui lòng thêm công thức vào mảng <code>DATA.recipes</code> trong tệp <code>app.js</code> để hiển thị tại đây.</p>
      </div>
    `;
    return;
  }

  // Find active category
  const activeTab = document.querySelector("#recipe-category-tabs .filter-tab.active");
  const category = activeTab ? activeTab.getAttribute("data-category") : "all";

  const filtered = DATA.recipes.filter(recipe => {
    // Category match
    const categoryMatches = (category === "all" || recipe.category === category);

    // Search query match
    let searchMatches = true;
    if (searchQuery) {
      const nameMatch = recipe.name.toLowerCase().includes(searchQuery);
      const categoryNameMatch = recipe.categoryName.toLowerCase().includes(searchQuery);
      const ingredientMatch = recipe.sizes["700ml"].ingredients.some(ing =>
        ing.name.toLowerCase().includes(searchQuery)
      );
      searchMatches = nameMatch || categoryNameMatch || ingredientMatch;
    }

    return categoryMatches && searchMatches;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--primary-light);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <p style="font-weight: 600;">Không tìm thấy công thức pha chế nào phù hợp.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(recipe => {
    const isLearned = appState.learnedRecipes.includes(recipe.id);
    const card = document.createElement("div");
    card.classList.add("glass-card", "recipe-card");
    card.setAttribute("id", `recipe-card-${recipe.id}`);

    // Gradient card header to represent drinks category
    let colorGradient = "linear-gradient(135deg, #023e8a, #0096c7)";
    if (recipe.category === "pure-tea") colorGradient = "linear-gradient(135deg, #d97706, #f59e0b)";
    else if (recipe.category === "special") colorGradient = "linear-gradient(135deg, #0f172a, #334155)";
    else if (recipe.category === "hot-tea") colorGradient = "linear-gradient(135deg, #e11d48, #fb7185)";
    else if (recipe.category === "milk-tea") colorGradient = "linear-gradient(135deg, #854d0e, #ca8a04)";
    else if (recipe.category === "latte") colorGradient = "linear-gradient(135deg, #15803d, #4ade80)";
    else if (recipe.category === "fruit-tea") colorGradient = "linear-gradient(135deg, #ec4899, #fbcfe8)";

    card.innerHTML = `
      <div style="background: ${colorGradient}; height: 140px; border-radius: 12px; margin-bottom: 16px; position: relative; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.06);">
        <span class="recipe-card-badge">${recipe.categoryName.substring(3)}</span>
        <i class="fa-solid fa-mug-hot" style="font-size: 3.5rem; color: rgba(255, 255, 255, 0.4);"></i>
      </div>
      <h3 class="recipe-card-name">${recipe.name}</h3>
      <div class="recipe-card-meta">
        <span>Định lượng: ${recipe.defaultSize}</span>
        <div class="recipe-card-progress">
          <span class="dot-indicator ${isLearned ? 'learned' : ''}"></span>
          <span style="font-size: 0.8rem; font-weight: 600;">${isLearned ? 'Đã thuộc' : 'Chưa thuộc'}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      openRecipeModal(recipe);
    });

    container.appendChild(card);
  });
}

// --- MODAL VIEWS ---

function getBaseTeaName(recipeName) {
  if (recipeName.includes("Bạch Đào")) return "Trà ô long đào";
  if (recipeName.includes("vải thiều")) return "Hồng trà vải thiều";
  if (recipeName.includes("bí đao")) return "Trà bí đao";
  if (recipeName.includes("ô long") || recipeName.includes("Olong") || recipeName.includes("Oolong")) return "Trà ô long";
  if (recipeName.includes("Hoa Nhài")) return "Trà xanh lài";
  if (recipeName.includes("Trà xanh") || recipeName.includes("Trà Xanh")) return "Trà xanh";
  if (recipeName.includes("Đài Loan") || recipeName.includes("Đường Đen") || recipeName.includes("đường đen")) return "Hồng trà";
  if (recipeName.includes("Hồng trà")) return "Hồng trà";
  return "Trà";
}

function calculatePureTeaSpecs(recipe, size, sugar, ice) {
  const recipeName = recipe.name;
  const baseTea = getBaseTeaName(recipeName);
  const isFixedSugar = recipe.isFixedSugar;
  const activeSugar = isFixedSugar ? "100%" : sugar;

  let iceSpec = "";
  let teaSpec = "";
  let ingredients = [];
  let steps = [];

  const isSize1000 = size === "1000ml";
  const isLessOrNoIce = (ice === "less" || ice === "none");

  if (recipe.isXiMuoiWinterMelonMix) {
    let iceSpec = "";
    if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = `Đá đến vạch ${isSize1000 ? "800ml" : "600ml"}`;
    else iceSpec = "Không đá";

    const biDaoVol = isSize1000 ? 200 : 150;
    const xiMuoiVol = isSize1000 ? 200 : 150;

    ingredients = [
      { name: "Thạch aiyu", quantity: "1 vá (40g)" },
      { name: "Hạt é", quantity: "2 vá (60g)" },
      { name: "Trà Bí Đao", quantity: `${biDaoVol}ml` },
      { name: "Trà Xí Muội", quantity: `${xiMuoiVol}ml` }
    ];

    steps = [
      "Cho 1 vá thạch aiyu (40g) và 2 vá hạt é (60g) vào ly PP.",
      `Rót tiếp ${biDaoVol}ml trà Bí Đao vào ly PP.`,
      `Rót ${xiMuoiVol}ml trà Xí Muội vào ly PP.`
    ];

    if (ice === "normal" || ice === "more") {
      steps.push("Cho đá đến đầy ly PP.");
    } else if (ice === "less") {
      steps.push(`Cho đá vào ly PP đến vạch ${isSize1000 ? "800ml" : "600ml"}.`);
    } else {
      steps.push("Không cho đá vào ly.");
    }

    steps.push("Hoàn thành thức uống (Không cần lắc).");

    return {
      tea: `${biDaoVol + xiMuoiVol}ml`,
      ice: iceSpec,
      sugar: "100% (Cố định)",
      milk: "Aiyu + Hạt é",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isXiMuoiOlongMix) {
    let iceSpec = "";
    if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = `Đá đến vạch ${isSize1000 ? "800ml" : "600ml"}`;
    else iceSpec = "Không đá";

    const olongTotal = isSize1000 ? 200 : 150;
    const xiMuoiVol = isSize1000 ? 200 : 150;

    let sweetOlong = 0;
    let plainOlong = 0;

    if (activeSugar === "100%") {
      sweetOlong = olongTotal;
      plainOlong = 0;
    } else if (activeSugar === "70%") {
      sweetOlong = 100;
      plainOlong = isSize1000 ? 100 : 50;
    } else { // 50%
      sweetOlong = 0;
      plainOlong = olongTotal;
    }

    ingredients = [
      { name: "Thạch aiyu", quantity: "1 vá (40g)" },
      { name: "Hạt é", quantity: "2 vá (60g)" }
    ];

    if (sweetOlong > 0) {
      ingredients.push({ name: "Cốt Trà ô long có đường", quantity: `${sweetOlong}ml` });
    }
    if (plainOlong > 0) {
      ingredients.push({ name: "Cốt Trà ô long không đường", quantity: `${plainOlong}ml` });
    }
    ingredients.push({ name: "Trà Xí Muội", quantity: `${xiMuoiVol}ml` });

    steps = [
      "Cho 1 vá thạch aiyu (40g) và 2 vá hạt é (60g) vào ly PP."
    ];

    if (sweetOlong > 0 && plainOlong > 0) {
      steps.push(`Rót tiếp ${sweetOlong}ml cốt Trà ô long có đường và ${plainOlong}ml cốt Trà ô long không đường vào ly PP.`);
    } else if (sweetOlong > 0) {
      steps.push(`Rót tiếp ${sweetOlong}ml cốt Trà ô long có đường vào ly PP.`);
    } else {
      steps.push(`Rót tiếp ${plainOlong}ml cốt Trà ô long không đường vào ly PP.`);
    }

    steps.push(`Rót ${xiMuoiVol}ml trà Xí Muội vào ly PP.`);

    if (ice === "normal" || ice === "more") {
      steps.push("Cho đá đến đầy ly PP.");
    } else if (ice === "less") {
      steps.push(`Cho đá vào ly PP đến vạch ${isSize1000 ? "800ml" : "600ml"}.`);
    } else {
      steps.push("Không cho đá vào ly.");
    }

    steps.push("Hoàn thành thức uống (Không cần lắc).");

    return {
      tea: `${olongTotal + xiMuoiVol}ml`,
      ice: iceSpec,
      sugar: activeSugar,
      milk: "Aiyu + Hạt é",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isXiMuoiNgoGia) {
    let iceSpec = "";
    if (ice === "normal") {
      iceSpec = isSize1000 ? "Đá đến vạch 800" : "Đá đến vạch 600";
    } else if (ice === "more") {
      iceSpec = "Đá đầy ly";
    } else if (ice === "less") {
      iceSpec = isSize1000 ? "Đá đến vạch 400" : "Đá đến vạch 300";
    } else {
      iceSpec = "Không đá";
    }

    const xiMuoiVol = isSize1000 ? 400 : 300;

    ingredients = [
      { name: "Thạch aiyu", quantity: "1 vá (40g)" },
      { name: "Hạt é", quantity: "2 vá (60g)" },
      { name: "Trà Xí Muội", quantity: `${xiMuoiVol}ml` }
    ];

    steps = [
      "Cho 1 vá thạch aiyu (40g) và 2 vá hạt é (60g) vào ly PP."
    ];

    if (ice === "normal") {
      steps.push(`Cho đá vào ly PP đến vạch ${isSize1000 ? "800" : "600"}.`);
    } else if (ice === "more") {
      steps.push("Cho đá đầy ly PP.");
    } else if (ice === "less") {
      steps.push(`Cho đá vào ly PP đến vạch ${isSize1000 ? "400" : "300"}.`);
    } else {
      steps.push("Không cho đá vào ly.");
    }

    steps.push(`Rót trà Xí Muội vào ly PP (${xiMuoiVol}ml đối với ly ${isSize1000 ? "1000ml" : "700ml"}).`);
    steps.push("Hoàn thành thức uống (Không cần lắc).");

    return {
      tea: `${xiMuoiVol}ml`,
      ice: iceSpec,
      sugar: "100% (Cố định)",
      milk: "Aiyu + Hạt é",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isCheeseTea) {
    let iceSpec = "";
    let cheeseSpec = "";
    if (ice === "normal") {
      iceSpec = "Đá gần đầy ly";
      cheeseSpec = "60g kem Cheese (đổ đầy ly)";
    } else if (ice === "less") {
      iceSpec = "Đá đến vạch 450";
      cheeseSpec = "60g kem Cheese (đến vạch 600)";
    } else {
      iceSpec = "Không đá";
      cheeseSpec = "60g kem Cheese (để riêng)";
    }

    const baseTea = getBaseTeaName(recipe.name);
    let sweetTeaVol = 0;
    let plainTeaVol = 0;

    if (activeSugar === "100%") {
      sweetTeaVol = 350;
    } else if (activeSugar === "50%") {
      sweetTeaVol = 250;
      plainTeaVol = 100;
    } else { // 0%
      plainTeaVol = 350;
    }

    ingredients = [];
    if (sweetTeaVol > 0) {
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `${sweetTeaVol}ml` });
    }
    if (plainTeaVol > 0) {
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: `${plainTeaVol}ml` });
    }
    const cheeseQty = (ice === "normal" || ice === "less") ? "60g" : "60g (để riêng)";
    ingredients.push({ name: "Kem Cheese", quantity: cheeseQty });

    steps = [];
    // Step 1: Cho đá
    if (ice === "normal") {
      steps.push("Cho đá vào ly PP gần đầy ly.");
    } else if (ice === "less") {
      steps.push("Cho đá vào ly PP đến vạch 450.");
    } else {
      steps.push("Không cho đá vào ly.");
    }

    // Step 2: Cho trà
    if (sweetTeaVol > 0 && plainTeaVol > 0) {
      steps.push(`Rót ${sweetTeaVol}ml cốt ${baseTea} có đường và ${plainTeaVol}ml cốt ${baseTea} không đường vào ly PP.`);
    } else if (sweetTeaVol > 0) {
      steps.push(`Rót ${sweetTeaVol}ml cốt ${baseTea} có đường vào ly PP.`);
    } else {
      steps.push(`Rót ${plainTeaVol}ml cốt ${baseTea} không đường vào ly PP.`);
    }

    // Step 3: Cho 60g kem Cheese
    if (ice === "normal") {
      steps.push("Cho vào 60g kem Cheese (đổ đầy ly) lên trên lớp trà.");
    } else if (ice === "less") {
      steps.push("Cho vào 60g kem Cheese (đến vạch 600) lên trên lớp trà.");
    } else {
      steps.push("Cho 60g kem Cheese để riêng vào cốc đựng topping (không đổ trực tiếp vào ly).");
      steps.push("Lưu ý: Nhân viên chủ động thông báo trước cho khách hàng rằng kem Cheese sẽ được để riêng.");
    }

    steps.push("Hoàn thành thức uống.");

    return {
      tea: `${sweetTeaVol + plainTeaVol}ml`,
      ice: iceSpec,
      sugar: activeSugar === "100%" ? "100%" : (activeSugar === "50%" ? "50%" : "0% (Không đường)"),
      milk: cheeseSpec,
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isFreshMilkTaroMashed) {
    let iceSpec = "";
    if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = "Đá đến vạch 600";
    else iceSpec = "Không đá";

    let sugarVol = 0;
    if (activeSugar === "100%") sugarVol = 20;
    else if (activeSugar === "50%") sugarVol = 10;
    else sugarVol = 0;

    ingredients = [
      { name: "Khoai môn nghiền", quantity: "120g (1.5 viên)" },
      { name: "Sữa tươi", quantity: "300ml" },
      { name: "Nước đường", quantity: sugarVol > 0 ? `${sugarVol}cc` : "--" }
    ];

    steps = [
      "Cho 1,5 viên khoai môn nghiền (120g) vào ly PP."
    ];

    if (sugarVol > 0) {
      steps.push(`Rót 300ml sữa tươi và ${sugarVol}cc nước đường vào ly PP.`);
    } else {
      steps.push("Rót 300ml sữa tươi vào ly PP (không cho nước đường).");
    }

    steps.push("Dùng muỗng khuấy đều hỗn hợp khoai môn nghiền, sữa tươi và nước đường vừa phải.");

    if (ice === "normal" || ice === "more") {
      steps.push("Cho đá đến đầy ly.");
    } else if (ice === "less") {
      steps.push("Cho đá vào ly PP đến vạch 600.");
    } else {
      steps.push("Không cho đá vào ly.");
    }

    steps.push("Hoàn thành thức uống.");

    return {
      tea: "--",
      ice: iceSpec,
      sugar: sugarVol > 0 ? `${activeSugar} (${sugarVol}cc)` : "0% (Không đường)",
      milk: "120g khoai môn + 300ml sữa tươi",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isTaroMashed) {
    let iceSpec = "";
    if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = "Đá đến vạch 600";
    else iceSpec = "Không đá";

    const baseTea = recipe.mashedTeaBase;
    const totalTeaVol = 300;

    let sweetTea = 0;
    let plainTea = 0;

    if (activeSugar === "100%") {
      sweetTea = totalTeaVol;
      plainTea = 0;
    } else if (activeSugar === "70%") {
      sweetTea = 200;
      plainTea = 100;
    } else if (activeSugar === "50%") {
      sweetTea = 150;
      plainTea = 150;
    } else if (activeSugar === "30%") {
      sweetTea = 100;
      plainTea = 200;
    } else { // 0%
      sweetTea = 0;
      plainTea = totalTeaVol;
    }

    ingredients = [
      { name: "Khoai môn nghiền", quantity: "120g (1.5 viên)" },
      { name: "Kem béo", quantity: "40cc" }
    ];

    if (sweetTea > 0) {
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `${sweetTea}ml` });
    }
    if (plainTea > 0) {
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: `${plainTea}ml` });
    }

    steps = [
      "Cho 1,5 viên khoai môn nghiền 120g vào ly PP.",
      "Thêm 40cc kem béo vào ly PP."
    ];

    if (sweetTea > 0 && plainTea > 0) {
      steps.push(`Rót ${sweetTea}ml cốt ${baseTea} có đường và ${plainTea}ml cốt ${baseTea} không đường vào ly PP.`);
    } else if (sweetTea > 0) {
      steps.push(`Rót ${sweetTea}ml cốt ${baseTea} có đường vào ly PP.`);
    } else {
      steps.push(`Rót ${plainTea}ml cốt ${baseTea} không đường vào ly PP.`);
    }

    steps.push("Dùng muỗng khuấy đều hỗn hợp khoai môn nghiền, kem béo và trà vừa phải.");

    if (ice === "normal" || ice === "more") {
      steps.push("Cho đá đến đầy ly PP.");
    } else if (ice === "less") {
      steps.push("Cho đá vào ly PP đến vạch 600.");
    } else {
      steps.push("Không cho đá vào ly.");
    }

    steps.push("Hoàn thành thức uống.");
    steps.push("<b>* Lưu ý nếu có thêm Trân Châu Đường Đen:</b> Giảm 10cc kem béo (còn 30cc kem béo).");

    return {
      tea: `${totalTeaVol}ml`,
      ice: iceSpec,
      sugar: activeSugar,
      milk: "120g khoai môn + 40cc kem béo",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isChocolateMilkTea) {
    let iceSpec = "";
    if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = `Đá đến vạch ${isSize1000 ? "800ml" : "600ml"}`;
    else iceSpec = "Không đá";

    const chocolateVol = isSize1000 ? 50 : 30;
    const kemBeoVol = isSize1000 ? 60 : 40;
    const totalTeaVol = isSize1000 ? 400 : 300;

    let sweetTea = 0;
    let plainTea = 0;

    if (activeSugar === "100%") {
      sweetTea = totalTeaVol;
      plainTea = 0;
    } else if (activeSugar === "70%") {
      sweetTea = isSize1000 ? 300 : 200;
      plainTea = 100;
    } else if (activeSugar === "50%") {
      sweetTea = isSize1000 ? 200 : 150;
      plainTea = isSize1000 ? 200 : 150;
    } else if (activeSugar === "30%") {
      sweetTea = 100;
      plainTea = isSize1000 ? 300 : 200;
    } else { // 0%
      sweetTea = 0;
      plainTea = totalTeaVol;
    }

    ingredients = [
      { name: "Sốt socola", quantity: `${chocolateVol}cc` },
      { name: "Kem béo", quantity: `${kemBeoVol}cc` }
    ];

    if (sweetTea > 0) {
      ingredients.push({ name: "Cốt Hồng trà Đài Loan có đường", quantity: `${sweetTea}ml` });
    }
    if (plainTea > 0) {
      ingredients.push({ name: "Cốt Hồng trà Đài Loan không đường", quantity: `${plainTea}ml` });
    }

    steps = [];

    // Step 1: Add tea
    if (sweetTea > 0 && plainTea > 0) {
      steps.push(`Cho ${sweetTea}ml cốt Hồng trà Đài Loan có đường và ${plainTea}ml cốt Hồng trà Đài Loan không đường vào ly PP.`);
    } else if (sweetTea > 0) {
      steps.push(`Cho ${sweetTea}ml cốt Hồng trà Đài Loan có đường vào ly PP.`);
    } else {
      steps.push(`Cho ${plainTea}ml cốt Hồng trà Đài Loan không đường vào ly PP.`);
    }

    // Step 2: Add kem béo and chocolate sauce
    steps.push(`Thêm ${kemBeoVol}cc kem béo và ${chocolateVol}cc sốt socola vào trà.`);

    // Step 3: Mix and add ice
    steps.push("Khuấy đều hỗn hợp trà, kem béo và sốt socola trong ly PP.");

    if (ice === "normal" || ice === "more") {
      steps.push("Cho đá đến đầy ly PP.");
    } else if (ice === "less") {
      steps.push(`Cho đá vào ly PP đến vạch ${isSize1000 ? "800ml" : "600ml"}.`);
    } else {
      steps.push("Không cho đá vào ly.");
    }

    steps.push("Hoàn thành thức uống.");

    // Add Note for Black Sugar Pearls
    steps.push(`<b>* Lưu ý nếu có thêm Trân Châu Đường Đen:</b> Giảm 10cc kem béo (còn ${kemBeoVol - 10}cc). Múc 2 vá 120g trân châu đường đen vào ly PP trước. Khuấy đều hỗn hợp Hồng trà + kem béo + sốt socola trong ca đong bên ngoài rồi mới đổ vào ly PP.`);

    return {
      tea: `${totalTeaVol}ml`,
      ice: iceSpec,
      sugar: activeSugar,
      milk: `${kemBeoVol}cc`,
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isOlongWinterMelon) {
    let iceSpec = "";
    if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
    else iceSpec = "Đá đến vạch 600ml";

    let sweetOlong = 0;
    let plainOlong = 0;
    if (activeSugar === "100%") {
      sweetOlong = 175;
      plainOlong = 0;
    } else if (activeSugar === "70%") {
      sweetOlong = 100;
      plainOlong = 75;
    } else {
      sweetOlong = 0;
      plainOlong = 175;
    }

    ingredients = [
      { name: "Thủy tinh củ năng", quantity: "40g (1 thìa)" },
      { name: "Trà Bí Đao", quantity: "175ml" }
    ];

    if (sweetOlong > 0) {
      ingredients.push({ name: "Cốt Trà ô long có đường", quantity: `${sweetOlong}ml` });
    }
    if (plainOlong > 0) {
      ingredients.push({ name: "Cốt Trà ô long không đường", quantity: `${plainOlong}ml` });
    }

    steps = [
      "Cho 40g Củ Năng (Thủy Tinh Củ Năng) vào ly PP.",
      "Rót 175ml trà Bí Đao trực tiếp vào ly PP."
    ];

    if (sweetOlong > 0 && plainOlong > 0) {
      steps.push(`Rót ${sweetOlong}ml cốt Trà ô long có đường và ${plainOlong}ml cốt Trà ô long không đường trực tiếp vào ly PP.`);
    } else if (sweetOlong > 0) {
      steps.push(`Rót ${sweetOlong}ml cốt Trà ô long có đường trực tiếp vào ly PP.`);
    } else {
      steps.push(`Rót ${plainOlong}ml cốt Trà ô long không đường trực tiếp vào ly PP.`);
    }

    if (ice === "normal" || ice === "more") {
      steps.push("Cho đá vào đầy ly PP.");
    } else {
      steps.push("Cho đá vào ly PP đến vạch 600ml.");
    }

    steps.push("Dập nắp sau đó lắc đều ly nước.");

    return {
      tea: "350ml hỗn hợp",
      ice: iceSpec,
      sugar: activeSugar,
      milk: "40g",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isEightTreasures) {
    let iceSpec = "";
    if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = "Đá đến vạch 600ml";
    else iceSpec = "Không đá";

    ingredients = [
      { name: "Trân châu đường đen", quantity: "Nửa vá (60g)" },
      { name: "Trân châu củ năng", quantity: "Nửa vá (25g)" },
      { name: "Bánh vuông mini đường đen", quantity: "Nửa vá (25g)" },
      { name: "Trân châu 3Q", quantity: "Nửa vá (20g)" },
      { name: "Sương sáo", quantity: "1 vá (40g)" },
      { name: "Thạch dừa", quantity: "1 vá (40g)" },
      { name: "Hạt sen", quantity: "Nửa vá (25g)" }
    ];

    let teaText = "";
    if (activeSugar === "100%") {
      ingredients.push({ name: "Trà Bí Đao", quantity: "200ml" });
      teaText = "200ml trà Bí Đao";
    } else if (activeSugar === "70%") {
      ingredients.push({ name: "Trà Xanh lài / Hồng trà có đường", quantity: "150ml" });
      ingredients.push({ name: "Trà Xanh lài / Hồng trà không đường", quantity: "50ml" });
      teaText = "150ml Trà Xanh lài hoặc Hồng trà có đường và 50ml Trà Xanh lài hoặc Hồng trà không đường";
    } else {
      ingredients.push({ name: "Trà Xanh lài / Hồng trà có đường", quantity: "100ml" });
      ingredients.push({ name: "Trà Xanh lài / Hồng trà không đường", quantity: "100ml" });
      teaText = "100ml Trà Xanh lài hoặc Hồng trà có đường và 100ml Trà Xanh lài hoặc Hồng trà không đường";
    }

    steps = [
      "Cho các loại topping vào ly PP theo thứ tự: 1 thìa nhỏ Trân Châu Đường Đen, nửa vá trân châu củ năng, nửa vá bánh vuông mini đường đen, nửa vá trân châu 3Q, 1 vá sương sáo, 1 vá thạch dừa và nửa vá hạt sen."
    ];

    if (ice === "normal" || ice === "more") {
      steps.push("Cho đá đầy ly PP.");
    } else if (ice === "less") {
      steps.push("Cho đá đến vạch 600ml vào ly PP.");
    } else {
      steps.push("Không cho đá vào ly.");
    }

    steps.push(`Rót ${teaText} trực tiếp vào ly PP.`);
    steps.push("Hoàn thành thức uống.");

    return {
      tea: activeSugar === "100%" ? "200ml" : "200ml hỗn hợp",
      ice: iceSpec,
      sugar: activeSugar,
      milk: "7 loại Topping",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isOlongGrape) {
    let iceSpec = "";
    if (ice === "normal") iceSpec = "Đá đến vạch 600ml";
    else if (ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = "Đá đến vạch 300ml";
    else iceSpec = "Không đá";

    ingredients = [
      { name: "Mứt nho", quantity: "50g" },
      { name: "Sốt nho", quantity: "30cc" }
    ];

    let totalVol = 300;
    teaSpec = isLessOrNoIce ? `${totalVol}ml` : "Cho đến đầy ly";

    if (!isLessOrNoIce) {
      if (activeSugar === "100%") {
        ingredients.push({ name: "Cốt Trà ô long có đường", quantity: "Đầy ly" });
      } else if (activeSugar === "70%") {
        ingredients.push({ name: "Cốt Trà ô long có đường", quantity: "Đến vạch 500ml" });
        ingredients.push({ name: "Cốt Trà ô long không đường", quantity: "Còn lại đầy ly" });
      } else if (activeSugar === "50%") {
        ingredients.push({ name: "Cốt Trà ô long có đường", quantity: "Đến vạch 350ml" });
        ingredients.push({ name: "Cốt Trà ô long không đường", quantity: "Còn lại đầy ly" });
      } else if (activeSugar === "30%") {
        ingredients.push({ name: "Cốt Trà ô long có đường", quantity: "Đến vạch 200ml" });
        ingredients.push({ name: "Cốt Trà ô long không đường", quantity: "Còn lại đầy ly" });
      } else {
        ingredients.push({ name: "Cốt Trà ô long không đường", quantity: "Đầy ly" });
      }
    } else {
      if (activeSugar === "100%") {
        ingredients.push({ name: "Cốt Trà ô long có đường", quantity: `${totalVol}ml` });
      } else if (activeSugar === "70%") {
        ingredients.push({ name: "Cốt Trà ô long có đường", quantity: "200ml" });
        ingredients.push({ name: "Cốt Trà ô long không đường", quantity: "100ml" });
      } else if (activeSugar === "50%") {
        ingredients.push({ name: "Cốt Trà ô long có đường", quantity: "150ml" });
        ingredients.push({ name: "Cốt Trà ô long không đường", quantity: "150ml" });
      } else if (activeSugar === "30%") {
        ingredients.push({ name: "Cốt Trà ô long có đường", quantity: "100ml" });
        ingredients.push({ name: "Cốt Trà ô long không đường", quantity: "200ml" });
      } else {
        ingredients.push({ name: "Cốt Trà ô long không đường", quantity: `${totalVol}ml` });
      }
    }

    steps = [
      "Cho 50g mứt nho vào ly PP.",
      "Dùng chày dầm mứt nho ở mức vừa phải.",
      "Cho tiếp 30cc sốt nho vào ly PP."
    ];

    if (ice === "normal") {
      steps.push("Cho đá vào ly PP đến vạch 600ml.");
    } else if (ice === "more") {
      steps.push("Cho đá đầy ly PP.");
    } else if (ice === "less") {
      steps.push("Cho đá vào ly PP đến vạch 300ml.");
    } else {
      steps.push("Không cho đá vào ly.");
    }

    if (!isLessOrNoIce) {
      if (activeSugar === "100%") {
        steps.push("Rót cốt Trà ô long có đường trực tiếp vào ly PP cho đến đầy ly.");
      } else if (activeSugar === "0%") {
        steps.push("Rót cốt Trà ô long không đường trực tiếp vào ly PP cho đến đầy ly.");
      } else {
        const markVal = activeSugar === "70%" ? 500 : activeSugar === "50%" ? 350 : 200;
        steps.push(`Rót cốt Trà ô long có đường trực tiếp vào ly PP đến vạch ${markVal}ml.`);
        steps.push("Rót thêm cốt Trà ô long không đường vào ly PP cho đến đầy ly.");
      }
    } else {
      if (activeSugar === "100%") {
        steps.push(`Đong ${totalVol}ml cốt Trà ô long có đường vào ca định lượng, sau đó rót vào ly PP.`);
      } else if (activeSugar === "0%") {
        steps.push(`Đong ${totalVol}ml cốt Trà ô long không đường vào ca định lượng, sau đó rót vào ly PP.`);
      } else {
        const sweet = activeSugar === "70%" ? 200 : activeSugar === "50%" ? 150 : 100;
        const plain = activeSugar === "70%" ? 100 : activeSugar === "50%" ? 150 : 200;
        steps.push(`Đong ${sweet}ml cốt Trà ô long có đường và ${plain}ml cốt Trà ô long không đường vào ca định lượng, sau đó rót vào ly PP.`);
      }
    }

    steps.push("Dập nắp sau đó lắc đều ly nước trước khi phục vụ.");

    return {
      tea: teaSpec,
      ice: iceSpec,
      sugar: activeSugar,
      milk: "30cc",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isTeaBiDaoMix) {
    let iceSpec = "";
    if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = `Đá đến vạch ${isSize1000 ? "800ml" : "600ml"}`;
    else iceSpec = "Không đá";

    const biDaoVol = isSize1000 
      ? (recipe.id === "rec-hong-tra-bi-dao-mix" ? 300 : 250) 
      : recipe.biDaoVol;

    const baseTea = recipe.otherTeaName;

    let sweetVol = 0;
    let plainVol = 0;

    if (recipe.id === "rec-hong-tra-bi-dao-mix") {
      if (isSize1000) {
        if (activeSugar === "100%") {
          sweetVol = 200;
          plainVol = 0;
        } else if (activeSugar === "70%") {
          sweetVol = 100;
          plainVol = 100;
        } else {
          sweetVol = 0;
          plainVol = 200;
        }
      } else {
        if (activeSugar === "100%") {
          sweetVol = 140;
          plainVol = 0;
        } else if (activeSugar === "70%") {
          sweetVol = 70;
          plainVol = 70;
        } else {
          sweetVol = 0;
          plainVol = 140;
        }
      }
    } else {
      if (isSize1000) {
        if (activeSugar === "100%") {
          sweetVol = 250;
          plainVol = 0;
        } else if (activeSugar === "70%") {
          sweetVol = 150;
          plainVol = 100;
        } else {
          sweetVol = 0;
          plainVol = 250;
        }
      } else {
        if (activeSugar === "100%") {
          sweetVol = 175;
          plainVol = 0;
        } else if (activeSugar === "70%") {
          sweetVol = 100;
          plainVol = 75;
        } else {
          sweetVol = 0;
          plainVol = 175;
        }
      }
    }

    ingredients = [
      { name: "Trà Bí Đao", quantity: `${biDaoVol}ml` }
    ];

    if (sweetVol > 0) {
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `${sweetVol}ml` });
    }
    if (plainVol > 0) {
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: `${plainVol}ml` });
    }

    steps = [
      `Rót ${biDaoVol}ml trà Bí Đao vào ly PP.`
    ];

    if (sweetVol > 0 && plainVol > 0) {
      steps.push(`Rót ${sweetVol}ml cốt ${baseTea} có đường và ${plainVol}ml cốt ${baseTea} không đường trực tiếp vào ly PP.`);
    } else if (sweetVol > 0) {
      steps.push(`Rót ${sweetVol}ml cốt ${baseTea} có đường trực tiếp vào ly PP.`);
    } else {
      steps.push(`Rót ${plainVol}ml cốt ${baseTea} không đường trực tiếp vào ly PP.`);
    }

    if (ice === "normal" || ice === "more") {
      steps.push("Cho đá đầy ly PP.");
    } else if (ice === "less") {
      steps.push(`Cho đá vào ly PP đến vạch ${isSize1000 ? "800ml" : "600ml"}.`);
    } else {
      steps.push("Không cho đá vào ly.");
    }

    steps.push("Hoàn thành và dập nắp ly (Không cần lắc).");

    return {
      tea: isSize1000 ? "500ml hỗn hợp" : "350ml hỗn hợp",
      ice: iceSpec,
      sugar: activeSugar,
      milk: "--",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isPinkGuava) {
    let sugarVol = 0;
    if (activeSugar === "100%") sugarVol = 60;
    else if (activeSugar === "70%") sugarVol = 45;
    else if (activeSugar === "50%") sugarVol = 30;
    else if (activeSugar === "30%") sugarVol = 20;
    else sugarVol = 0;

    let iceSpec = "";
    if (ice === "normal") iceSpec = "Đá đến vạch 600";
    else if (ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = "Đá đến vạch 300";
    else iceSpec = "Không đá";

    let waterSpec = "";
    if (ice === "normal") waterSpec = "Nước lọc đầy ly";
    else if (ice === "more") waterSpec = "Nước lọc đầy ly";
    else if (ice === "less") waterSpec = "Nước lọc vạch 600";
    else waterSpec = "250ml nước lọc";

    ingredients = [
      { name: "Nước cốt ổi hồng", quantity: "70cc" },
      { name: "Nước cốt chanh", quantity: "10cc" },
      { name: "Nước đường", quantity: sugarVol > 0 ? `${sugarVol}ml` : "--" },
      { name: "Chanh tươi", quantity: "1 lát" },
      { name: "Nước lọc", quantity: waterSpec }
    ];

    steps = [
      "Cho 70cc nước cốt ổi hồng và 10cc nước cốt chanh vào ly PP.",
      `Cho ${sugarVol > 0 ? `${sugarVol}ml nước đường` : "0ml nước đường"} và 1 lát chanh vào ly PP.`,
    ];

    if (ice === "normal") {
      steps.push("Cho đá đến vạch 600, đổ nước lọc đầy ly.");
    } else if (ice === "more") {
      steps.push("Cho đá đầy ly, đổ nước lọc đầy ly.");
    } else if (ice === "less") {
      steps.push("Cho đá đến vạch 300, đổ nước trực tiếp đến vạch 600.");
    } else {
      steps.push("Không cho đá, dùng ca đo 250ml nước lọc rồi đổ vào ly PP.");
    }
    steps.push("Hoàn thành thức uống.");

    return {
      tea: waterSpec,
      ice: iceSpec,
      sugar: sugarVol > 0 ? `${activeSugar} (${sugarVol}ml)` : "0% (Không đường)",
      milk: "70cc",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isPeachTea) {
    let iceSpec = "";
    if (ice === "normal") iceSpec = "Đá đến vạch 600";
    else if (ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = "Đá đến vạch 300";
    else iceSpec = "Không đá";

    ingredients = [
      { name: "Miếng đào", quantity: "5 miếng (25g)" },
      { name: "Nước đào", quantity: "20cc" },
      { name: "Thạch đào", quantity: "1 vá (45g)" }
    ];

    let totalVol = 300;
    teaSpec = isLessOrNoIce ? `${totalVol}ml` : "Cho đến đầy ly";

    if (!isLessOrNoIce) {
      if (activeSugar === "100%") {
        ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: "Đầy ly" });
      } else if (activeSugar === "70%") {
        ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: "Đến vạch 500ml" });
        ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "Còn lại đầy ly" });
      } else if (activeSugar === "50%") {
        ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: "Đến vạch 350ml" });
        ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "Còn lại đầy ly" });
      } else if (activeSugar === "30%") {
        ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: "Đến vạch 200ml" });
        ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "Còn lại đầy ly" });
      } else {
        ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "Đầy ly" });
      }
    } else {
      if (activeSugar === "100%") {
        ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `${totalVol}ml` });
      } else if (activeSugar === "70%") {
        ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: "200ml" });
        ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "100ml" });
      } else if (activeSugar === "50%") {
        ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: "150ml" });
        ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "150ml" });
      } else if (activeSugar === "30%") {
        ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: "100ml" });
        ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "200ml" });
      } else {
        ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: `${totalVol}ml` });
      }
    }

    steps = [
      "Cho 5 miếng đào (25g), 20cc nước đào và 1 vá thạch đào (45g) vào ly PP."
    ];

    if (ice === "normal") {
      steps.push("Cho đá vào ly PP đến vạch 600.");
    } else if (ice === "more") {
      steps.push("Cho đá đầy ly PP.");
    } else if (ice === "less") {
      steps.push("Cho đá vào ly PP đến vạch 300.");
    } else {
      steps.push("Không cho đá vào ly.");
    }

    if (!isLessOrNoIce) {
      if (activeSugar === "100%") {
        steps.push(`Rót cốt ${baseTea} có đường trực tiếp vào ly PP cho đến đầy ly.`);
      } else if (activeSugar === "0%") {
        steps.push(`Rót cốt ${baseTea} không đường trực tiếp vào ly PP cho đến đầy ly.`);
      } else {
        const markVal = activeSugar === "70%" ? 500 : activeSugar === "50%" ? 350 : 200;
        steps.push(`Rót cốt ${baseTea} có đường trực tiếp vào ly PP đến vạch ${markVal}ml.`);
        steps.push(`Rót thêm cốt ${baseTea} không đường vào ly PP cho đến đầy ly.`);
      }
    } else {
      if (activeSugar === "100%") {
        steps.push(`Đong ${totalVol}ml cốt ${baseTea} có đường vào ca định lượng, sau đó rót vào ly PP.`);
      } else if (activeSugar === "0%") {
        steps.push(`Đong ${totalVol}ml cốt ${baseTea} không đường vào ca định lượng, sau đó rót vào ly PP.`);
      } else {
        const sweet = activeSugar === "70%" ? 200 : activeSugar === "50%" ? 150 : 100;
        const plain = activeSugar === "70%" ? 100 : activeSugar === "50%" ? 150 : 200;
        steps.push(`Đong ${sweet}ml cốt ${baseTea} có đường và ${plain}ml cốt ${baseTea} không đường vào ca định lượng, sau đó rót vào ly PP.`);
      }
    }

    steps.push("Hoàn thành và dập nắp ly.");

    return {
      tea: teaSpec,
      ice: iceSpec,
      sugar: activeSugar,
      milk: "20cc",
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isFreshMilkBlackSugar) {
    const suaVol = ice === "more" ? (isSize1000 ? 300 : 200) : (isSize1000 ? 360 : 300);
    let duongVol = 0;
    if (activeSugar === "100%") duongVol = isSize1000 ? 30 : 20;
    else if (activeSugar === "50%") duongVol = isSize1000 ? 15 : 10;

    // Ice Spec
    if (isSize1000) {
      if (ice === "normal") iceSpec = "Đá đến vạch 800";
      else if (ice === "more") iceSpec = "Đá đầy ly";
      else if (ice === "less") iceSpec = "Đá đến vạch 400";
      else iceSpec = "Không đá";
    } else {
      if (ice === "normal") iceSpec = "Đá đến vạch 600";
      else if (ice === "more") iceSpec = "Đá đầy ly";
      else if (ice === "less") iceSpec = "Đá đến vạch 300";
      else iceSpec = "Không đá";
    }

    // Ingredients
    ingredients.push({ name: "Trân châu đường đen", quantity: "2 vá (120g)" });
    ingredients.push({ name: "Sữa tươi", quantity: `${suaVol}ml` });
    ingredients.push({ name: "Nước đường", quantity: duongVol > 0 ? `${duongVol}cc` : "--" });

    // Steps
    steps.push("Cho 2 vá trân châu đường đen (120g) vào ly PP và tráng đều quanh thành ly.");

    // Ice step
    if (ice === "normal") {
      steps.push(`Cho đá vào ly PP bán cho khách đến ${isSize1000 ? "vạch 800" : "vạch 600"}.`);
    } else if (ice === "more") {
      steps.push(`Cho đá đầy ly PP.`);
    } else if (ice === "less") {
      steps.push(`Cho đá vào ly PP bán cho khách đến ${isSize1000 ? "vạch 400" : "vạch 300"}.`);
    } else {
      steps.push(`Không cho đá vào ly.`);
    }

    // Sữa tươi + Nước đường mix step
    if (duongVol > 0) {
      steps.push(`Đong ${suaVol}ml sữa tươi và ${duongVol}cc nước đường vào ca đong, khuấy đều hỗn hợp.`);
    } else {
      steps.push(`Đong ${suaVol}ml sữa tươi vào ca đong.`);
    }

    steps.push("Rót hỗn hợp sữa tươi vào ly PP.");
    steps.push("Hoàn thành và dập nắp ly.");

    return {
      tea: "--",
      ice: iceSpec,
      sugar: activeSugar,
      milk: `${suaVol}ml`,
      ingredients: ingredients,
      steps: steps
    };
  }

  if (recipe.isLatteTea) {
    const suaVol = isSize1000 ? 150 : 120;
    let duongVol = 0;
    if (activeSugar === "100%") duongVol = isSize1000 ? 10 : 5;

    const totalTeaVol = isSize1000 ? 350 : 250;

    // Ice Spec
    if (isSize1000) {
      if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
      else if (ice === "less") iceSpec = "Đá đến vạch 800ml";
      else iceSpec = "Không đá";
    } else {
      if (ice === "normal" || ice === "more") iceSpec = "Đá đầy ly";
      else if (ice === "less") iceSpec = "Đá đến vạch 600ml";
      else iceSpec = "Không đá";
    }

    // Ingredients
    if (recipe.isBlackSugarPearlLatte) {
      ingredients.push({ name: "Trân châu đường đen", quantity: "2 vá (120g)" });
    }
    ingredients.push({ name: "Sữa tươi", quantity: `${suaVol}ml` });
    if (duongVol > 0) {
      ingredients.push({ name: "Nước đường", quantity: `${duongVol}cc` });
    }

    let sweet = 0;
    let plain = 0;
    if (activeSugar === "100%" || activeSugar === "70%") {
      sweet = totalTeaVol;
    } else if (activeSugar === "50%") {
      sweet = isSize1000 ? 250 : 200;
      plain = isSize1000 ? 100 : 50;
    } else if (activeSugar === "30%") {
      sweet = isSize1000 ? 150 : 100;
      plain = isSize1000 ? 200 : 150;
    } else {
      // 0%
      plain = totalTeaVol;
    }

    if (sweet > 0) {
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `${sweet}ml` });
    }
    if (plain > 0) {
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: `${plain}ml` });
    }

    // Steps
    if (recipe.isBlackSugarPearlLatte) {
      steps.push("Cho 2 vá trân châu đường đen (120g) vào ly PP và tráng đều quanh thành ly.");
    }

    if (duongVol > 0) {
      steps.push(`Cho ${suaVol}ml sữa tươi và ${duongVol}cc nước đường vào ca định lượng. Khuấy đều rồi cho vào ly PP.`);
    } else {
      steps.push(`Cho ${suaVol}ml sữa tươi vào ca định lượng. Rót vào ly PP.`);
    }

    if (sweet > 0 && plain > 0) {
      steps.push(`Đong ${sweet}ml cốt ${baseTea} có đường và ${plain}ml cốt ${baseTea} không đường vào ca định lượng, sau đó cho vào ly PP.`);
    } else if (sweet > 0) {
      steps.push(`Đong ${sweet}ml cốt ${baseTea} có đường vào ca định lượng, sau đó cho vào ly PP.`);
    } else {
      steps.push(`Đong ${plain}ml cốt ${baseTea} không đường vào ca định lượng, sau đó cho vào ly PP.`);
    }

    if (ice === "normal" || ice === "more") {
      steps.push("Cho đá đến đầy ly PP.");
    } else if (ice === "less") {
      steps.push(`Cho đá vào ly PP đến vạch ${isSize1000 ? "800ml" : "600ml"}.`);
    } else {
      steps.push("Không cho đá vào ly.");
    }

    steps.push("Hoàn thành và dập nắp ly.");

    return {
      tea: `${totalTeaVol}ml`,
      ice: iceSpec,
      sugar: isFixedSugar ? "100% (Cố định)" : (recipe.minSugar === "70%" ? `${activeSugar} (Tối thiểu 70%)` : activeSugar),
      milk: `${suaVol}ml`,
      ingredients: ingredients,
      steps: steps
    };
  }

  // 1. Calculate Ice Spec
  if (isSize1000) {
    if (ice === "normal") iceSpec = "Đá đến vạch 800";
    else if (ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = "Đá đến vạch 400";
    else iceSpec = "Không đá";
  } else {
    // 700cc
    if (ice === "normal") iceSpec = "Đá đến vạch 600";
    else if (ice === "more") iceSpec = "Đá đầy ly";
    else if (ice === "less") iceSpec = "Đá đến vạch 300";
    else iceSpec = "Không đá";
  }

  // 1.5 Add Milk Tea or Lemon Tea ingredients at the beginning
  if (recipe.isBlackSugarPearl) {
    ingredients.push({ name: "Trân châu đường đen", quantity: "2 vá (120g)" });
  }
  if (recipe.isMilkTea) {
    const kemBeoVol = isSize1000 ? (recipe.isBlackSugarPearl ? "50cc" : "60cc") : (recipe.isBlackSugarPearl ? "30cc" : "40cc");
    ingredients.push({ name: "Kem béo", quantity: kemBeoVol });
  } else if (recipe.isLemonTea) {
    const lemonVol = isSize1000 ? "25cc" : "20cc";
    const sugarVol = isSize1000 ? "15cc" : "10cc";
    ingredients.push({ name: "Nước chanh", quantity: lemonVol });
    ingredients.push({ name: "Nước đường", quantity: sugarVol });
    ingredients.push({ name: "Chanh tươi", quantity: "2 lát" });
  }

  // 2. Calculate Tea Volumes & Ingredients
  const teaPourTerm = recipe.id === "rec-hong-tra-kem-tuoi" ? "Gần đầy ly" : "Cho đến đầy ly";

  if (!isLessOrNoIce) {
    // Normal / More Ice
    teaSpec = teaPourTerm;
    if (activeSugar === "100%") {
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: teaPourTerm });
    } else if (activeSugar === "70%") {
      const mark = isSize1000 ? "700ml" : "500ml";
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `Đến vạch ${mark}` });
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "Còn lại đầy ly" });
    } else if (activeSugar === "50%") {
      const mark = isSize1000 ? "500ml" : "350ml";
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `Đến vạch ${mark}` });
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "Còn lại đầy ly" });
    } else if (activeSugar === "30%") {
      const mark = isSize1000 ? "300ml" : "200ml";
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `Đến vạch ${mark}` });
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: "Còn lại đầy ly" });
    } else {
      // 0%
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: teaPourTerm });
    }
  } else {
    // Less / No Ice
    let totalVol = 350;
    if (isSize1000) {
      totalVol = recipe.isMilkTea ? 450 : 500;
    } else {
      totalVol = recipe.isMilkTea ? 300 : 350;
    }
    teaSpec = `${totalVol}ml`;

    if (activeSugar === "100%") {
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `${totalVol}ml` });
    } else if (activeSugar === "70%") {
      let sweet, plain;
      if (recipe.isMilkTea) {
        sweet = isSize1000 ? 350 : 200;
        plain = isSize1000 ? 100 : 100;
      } else {
        sweet = isSize1000 ? 350 : 250;
        plain = isSize1000 ? 150 : 100;
      }
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `${sweet}ml` });
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: `${plain}ml` });
    } else if (activeSugar === "50%") {
      let sweet, plain;
      if (recipe.isMilkTea) {
        sweet = isSize1000 ? 250 : 150;
        plain = isSize1000 ? 200 : 150;
      } else {
        sweet = isSize1000 ? 250 : 175;
        plain = isSize1000 ? 250 : 175;
      }
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `${sweet}ml` });
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: `${plain}ml` });
    } else if (activeSugar === "30%") {
      let sweet, plain;
      if (recipe.isMilkTea) {
        if (recipe.isBlackSugarPearl) {
          sweet = isSize1000 ? 100 : 100;
          plain = isSize1000 ? 350 : 200;
        } else {
          sweet = isSize1000 ? 150 : 100;
          plain = isSize1000 ? 300 : 200;
        }
      } else {
        sweet = isSize1000 ? 150 : 100;
        plain = isSize1000 ? 350 : 250;
      }
      ingredients.push({ name: `Cốt ${baseTea} có đường`, quantity: `${sweet}ml` });
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: `${plain}ml` });
    } else {
      // 0%
      ingredients.push({ name: `Cốt ${baseTea} không đường`, quantity: `${totalVol}ml` });
    }
  }

  // 2.5 Add custom toppings if defined
  if (recipe.id === "rec-hong-tra-kem-tuoi") {
    const qty = ice === "none" ? "1 viên (60g) - Để riêng" : "1 viên (60g)";
    ingredients.push({ name: "Kem tươi", quantity: qty });
  }

  // 3. Build step-by-step instructions
  // Topping step
  if (recipe.isBlackSugarPearl) {
    steps.push("Cho 2 vá trân châu đường đen (120g) vào ly PP.");
  }

  // Ice step
  if (ice === "normal") {
    steps.push(`Cho đá vào ly PP bán cho khách đến ${isSize1000 ? "vạch 800" : "vạch 600"}.`);
  } else if (ice === "more") {
    steps.push(`Cho đá đầy ly PP bán cho khách.`);
  } else if (ice === "less") {
    steps.push(`Cho đá vào ly PP bán cho khách đến ${isSize1000 ? "vạch 400" : "vạch 300"}.`);
  } else {
    steps.push(`Không cho đá vào ly.`);
  }

  // Kem béo step
  if (recipe.isMilkTea) {
    const kemBeoVol = isSize1000 ? (recipe.isBlackSugarPearl ? "50cc" : "60cc") : (recipe.isBlackSugarPearl ? "30cc" : "40cc");
    steps.push(`Cho ${kemBeoVol} kem béo trực tiếp vào ly PP.`);
  }

  // Lemon ingredients step
  if (recipe.isLemonTea) {
    const lemonVol = isSize1000 ? "25cc" : "20cc";
    const sugarVol = isSize1000 ? "15cc" : "10cc";
    steps.push(`Rót ${lemonVol} nước chanh và ${sugarVol} nước đường trực tiếp vào ly PP.`);
    steps.push("Thả thêm 2 lát chanh tươi vào ly PP.");
  }

  // Tea pouring step
  if (!isLessOrNoIce) {
    // Normal / More Ice: pour directly in customer cup
    if (activeSugar === "100%") {
      steps.push(`Rót cốt ${baseTea} có đường trực tiếp vào ly PP cho đến khi ${recipe.id === "rec-hong-tra-kem-tuoi" ? "gần đầy ly" : "đầy ly"}.`);
    } else if (activeSugar === "0%") {
      steps.push(`Rót cốt ${baseTea} không đường trực tiếp vào ly PP cho đến khi ${recipe.id === "rec-hong-tra-kem-tuoi" ? "gần đầy ly" : "đầy ly"}.`);
    } else {
      const markVal = activeSugar === "70%" ? (isSize1000 ? 700 : 500) :
        activeSugar === "50%" ? (isSize1000 ? 500 : 350) :
          (isSize1000 ? 300 : 200);
      steps.push(`Rót cốt ${baseTea} có đường trực tiếp vào ly PP đến vạch ${markVal}ml.`);
      steps.push(`Rót thêm cốt ${baseTea} không đường vào ly PP cho đến khi ${recipe.id === "rec-hong-tra-kem-tuoi" ? "gần đầy ly" : "đầy ly"}.`);
    }
  } else {
    // Less / No Ice: measure absolute volumes directly in customer PP cup
    if (activeSugar === "100%") {
      if (recipe.isMilkTea) {
        steps.push(`Đong ${totalVol}ml cốt ${baseTea} có đường vào ca định lượng, sau đó rót vào ly PP.`);
      } else {
        steps.push(`Rót ${totalVol}ml cốt ${baseTea} có đường trực tiếp vào ly PP.`);
      }
    } else if (activeSugar === "0%") {
      if (recipe.isMilkTea) {
        steps.push(`Đong ${totalVol}ml cốt ${baseTea} không đường vào ca định lượng, sau đó rót vào ly PP.`);
      } else {
        steps.push(`Rót ${totalVol}ml cốt ${baseTea} không đường trực tiếp vào ly PP.`);
      }
    } else {
      let sweet, plain;
      if (recipe.isMilkTea) {
        if (activeSugar === "70%") {
          sweet = isSize1000 ? 350 : 200;
          plain = isSize1000 ? 100 : 100;
        } else if (activeSugar === "50%") {
          sweet = isSize1000 ? 250 : 150;
          plain = isSize1000 ? 200 : 150;
        } else { // 30%
          if (recipe.isBlackSugarPearl) {
            sweet = isSize1000 ? 100 : 100;
            plain = isSize1000 ? 350 : 200;
          } else {
            sweet = isSize1000 ? 150 : 100;
            plain = isSize1000 ? 300 : 200;
          }
        }
        steps.push(`Đong ${sweet}ml cốt ${baseTea} có đường và ${plain}ml cốt ${baseTea} không đường vào ca định lượng, sau đó rót vào ly PP.`);
      } else {
        sweet = activeSugar === "70%" ? (isSize1000 ? 350 : 250) :
          activeSugar === "50%" ? (isSize1000 ? 250 : 175) :
            (isSize1000 ? 150 : 100);
        plain = activeSugar === "70%" ? (isSize1000 ? 150 : 100) :
          activeSugar === "50%" ? (isSize1000 ? 250 : 175) :
            (isSize1000 ? 350 : 250);
        steps.push(`Rót ${sweet}ml cốt ${baseTea} có đường trực tiếp vào ly PP.`);
        steps.push(`Rót thêm ${plain}ml cốt ${baseTea} không đường trực tiếp vào ly PP.`);
      }
    }
  }

  // Add kem tươi step
  if (recipe.id === "rec-hong-tra-kem-tuoi") {
    if (ice === "none") {
      steps.push("Múc 1 viên Kem Tươi (60g) vào ly topping mang đi kèm (không cho trực tiếp vào ly nước).");
      steps.push("Lưu ý: Nhân viên chủ động thông báo trước cho khách hàng rằng kem tươi sẽ được để riêng.");
    } else {
      steps.push("Múc 1 viên Kem Tươi (60g) cho vào ly PP.");
    }
  }

  steps.push("Hoàn thành và dập nắp ly để trao cho khách.");

  let milkSpec = "--";
  if (recipe.id === "rec-hong-tra-kem-tuoi") {
    milkSpec = "1 viên (60g)";
  } else if (recipe.isMilkTea) {
    milkSpec = isSize1000 ? (recipe.isBlackSugarPearl ? "50cc" : "60cc") : (recipe.isBlackSugarPearl ? "30cc" : "40cc");
  } else if (recipe.isLemonTea) {
    milkSpec = isSize1000 ? "25cc" : "20cc";
  }

  if (recipe.isMilkTea && !recipe.isBlackSugarPearl) {
    steps.push("<b>* Lưu ý:</b> Nếu có trân châu đen giảm 10cc kem béo.");
  }

  return {
    tea: teaSpec,
    ice: iceSpec,
    sugar: isFixedSugar ? "100% (Cố định)" : activeSugar,
    milk: milkSpec,
    ingredients: ingredients,
    steps: steps
  };
}

function openRecipeModal(recipe) {
  const modal = document.getElementById("recipe-detail-modal");
  const modalTitle = document.getElementById("modal-recipe-name");
  const modalCat = document.getElementById("modal-recipe-category");
  const modalSizeSelector = document.getElementById("modal-size-selector");
  const modalImg = document.getElementById("modal-recipe-img");

  // Set basic data
  modalTitle.innerText = recipe.name;
  modalCat.innerText = `Nhóm: ${recipe.categoryName}`;
  modalSizeSelector.setAttribute("data-recipe-id", recipe.id);

  // Dynamic gradient styling for modal drink preview
  let colorGradient = "linear-gradient(135deg, #023e8a, #0096c7)";
  if (recipe.category === "pure-tea") colorGradient = "linear-gradient(135deg, #d97706, #f59e0b)";
  else if (recipe.category === "special") colorGradient = "linear-gradient(135deg, #0f172a, #334155)";
  else if (recipe.category === "hot-tea") colorGradient = "linear-gradient(135deg, #e11d48, #fb7185)";
  else if (recipe.category === "milk-tea") colorGradient = "linear-gradient(135deg, #854d0e, #ca8a04)";
  else if (recipe.category === "latte") colorGradient = "linear-gradient(135deg, #15803d, #4ade80)";
  else if (recipe.category === "fruit-tea") colorGradient = "linear-gradient(135deg, #ec4899, #fbcfe8)";

  // Custom offline-friendly placeholder style
  modalImg.style.background = colorGradient;
  modalImg.style.display = "flex";
  modalImg.style.alignItems = "center";
  modalImg.style.justifyContent = "center";
  modalImg.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M17 8h1a4 4 0 1 1 0 8h-1'/><path d='M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z'/><line x1='6' y1='2' x2='6' y2='4'/><line x1='10' y1='2' x2='10' y2='4'/><line x1='14' y1='2' x2='14' y2='4'/></svg>";

  // Reset size selector and show 700ml by default
  const sizeBtns = modalSizeSelector.querySelectorAll(".size-btn");
  sizeBtns.forEach(btn => {
    btn.classList.remove("active");
    const btnSize = btn.getAttribute("data-size");
    if (recipe.sizes && recipe.sizes[btnSize]) {
      btn.style.display = "inline-block";
    } else {
      btn.style.display = "none";
    }
  });
  const defaultBtn = modalSizeSelector.querySelector(`[data-size="${recipe.defaultSize}"]`) || sizeBtns[0];
  if (defaultBtn) defaultBtn.classList.add("active");

  // Show/Hide customization panel and lock sugar if fixed
  const custPanel = document.getElementById("modal-tea-customization");
  if (custPanel) {
    if (recipe.isCustomPureStyle) {
      custPanel.style.display = "block";
      const sugarFixedNote = document.getElementById("modal-sugar-fixed-note");
      const sugarSelector = document.getElementById("modal-sugar-selector");
      const sugarBtns = sugarSelector ? sugarSelector.querySelectorAll(".size-btn") : [];

      if (recipe.isFixedSugar) {
        if (sugarFixedNote) {
          sugarFixedNote.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Cố định độ đường, không thể giảm đường!';
          sugarFixedNote.style.display = "block";
        }
        // Lock to 100% sugar and hide other options
        sugarBtns.forEach(btn => {
          if (btn.getAttribute("data-sugar") === "100%") {
            btn.style.display = "inline-block";
            btn.classList.add("active");
          } else {
            btn.style.display = "none";
            btn.classList.remove("active");
          }
        });
      } else if (recipe.minSugar === "70%") {
        if (sugarFixedNote) {
          sugarFixedNote.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Chỉ giảm tối đa đến 70% đường!';
          sugarFixedNote.style.display = "block";
        }
        sugarBtns.forEach(btn => {
          const sugarVal = btn.getAttribute("data-sugar");
          if (sugarVal === "100%" || sugarVal === "70%") {
            btn.style.display = "inline-block";
          } else {
            btn.style.display = "none";
          }
          if (sugarVal === "100%") {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      } else if (recipe.minSugar === "50%") {
        if (sugarFixedNote) {
          sugarFixedNote.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Chỉ giảm tối đa đến 50% đường!';
          sugarFixedNote.style.display = "block";
        }
        sugarBtns.forEach(btn => {
          const sugarVal = btn.getAttribute("data-sugar");
          if (sugarVal === "100%" || sugarVal === "70%" || sugarVal === "50%") {
            btn.style.display = "inline-block";
          } else {
            btn.style.display = "none";
          }
          if (sugarVal === "100%") {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      } else if (recipe.isCheeseTea) {
        if (sugarFixedNote) {
          sugarFixedNote.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Món kem Cheese chỉ hỗ trợ 100%, 50% hoặc 0% đường!';
          sugarFixedNote.style.display = "block";
        }
        sugarBtns.forEach(btn => {
          const sugarVal = btn.getAttribute("data-sugar");
          if (sugarVal === "100%" || sugarVal === "50%" || sugarVal === "0%") {
            btn.style.display = "inline-block";
          } else {
            btn.style.display = "none";
          }
          if (sugarVal === "100%") {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      } else {
        if (sugarFixedNote) sugarFixedNote.style.display = "none";
        // Show sugar buttons based on recipe support
        sugarBtns.forEach(btn => {
          const sugarVal = btn.getAttribute("data-sugar");
          if ((recipe.isFreshMilkBlackSugar || recipe.isFreshMilkTaroMashed) && (sugarVal === "70%" || sugarVal === "30%")) {
            btn.style.display = "none";
          } else {
            btn.style.display = "inline-block";
          }
          if (sugarVal === "100%") {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }

      // Default ice to normal
      const iceSelector = document.getElementById("modal-ice-selector");
      const iceBtns = iceSelector ? iceSelector.querySelectorAll(".size-btn") : [];
      iceBtns.forEach(btn => {
        if (btn.getAttribute("data-ice") === "normal") {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      const iceNote = document.getElementById("modal-ice-note");
      if (recipe.isTeaBiDaoMix || recipe.isLatteTea || recipe.isChocolateMilkTea || recipe.isTaroMashed || recipe.isFreshMilkTaroMashed || recipe.isXiMuoiOlongMix || recipe.isXiMuoiWinterMelonMix || recipe.isCheeseTea) {
        if (iceNote) {
          if (recipe.isCheeseTea) {
            iceNote.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Không thể cho nhiều đá đối với món kem Cheese!';
          } else {
            iceNote.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Không thể cho nhiều đá vì bỏ đá sau!';
          }
          iceNote.style.display = "block";
        }
        iceBtns.forEach(btn => {
          if (btn.getAttribute("data-ice") === "more") {
            btn.style.display = "none";
          } else {
            btn.style.display = "inline-block";
          }
        });
      } else {
        if (iceNote) iceNote.style.display = "none";
        iceBtns.forEach(btn => {
          btn.style.display = "inline-block";
        });
      }
    } else {
      custPanel.style.display = "none";
    }
  }

  updateModalIngredientsAndSpecs(recipe, recipe.defaultSize);
  updateModalLearnedButtonState(recipe.id);

  // Activate Modal
  modal.classList.add("active");
}

function updateModalIngredientsAndSpecs(recipe, size) {
  let specs;
  let steps = recipe.steps;

  if (recipe.isCustomPureStyle) {
    // Read sugar and ice from DOM
    const activeSugarEl = document.querySelector("#modal-sugar-selector .size-btn.active");
    const activeIceEl = document.querySelector("#modal-ice-selector .size-btn.active");
    const sugar = activeSugarEl ? activeSugarEl.getAttribute("data-sugar") : "100%";
    const ice = activeIceEl ? activeIceEl.getAttribute("data-ice") : "normal";

    const calculated = calculatePureTeaSpecs(recipe, size, sugar, ice);
    specs = {
      tea: calculated.tea,
      ice: calculated.ice,
      sugar: calculated.sugar,
      milk: calculated.milk,
      ingredients: calculated.ingredients
    };
    steps = calculated.steps;
  } else {
    specs = recipe.sizes[size] || recipe.sizes["700ml"];
  }

  // Set visual spec boxes
  document.getElementById("spec-val-tea").innerText = specs.tea;
  document.getElementById("spec-val-ice").innerText = specs.ice;
  document.getElementById("spec-val-sugar").innerText = specs.sugar;
  document.getElementById("spec-val-milk").innerText = specs.milk;

  const specLblTea = document.getElementById("spec-lbl-tea");
  if (specLblTea) {
    if (recipe.isPinkGuava) {
      specLblTea.innerText = "Nước lọc";
    } else if (recipe.isOlongWinterMelon || recipe.isTeaBiDaoMix || recipe.isXiMuoiWinterMelonMix || recipe.isXiMuoiOlongMix) {
      specLblTea.innerText = "Hỗn hợp trà";
    } else if (recipe.isEightTreasures) {
      specLblTea.innerText = "Trà sử dụng";
    } else {
      specLblTea.innerText = "Cốt Trà";
    }
  }

  const specLblMilk = document.getElementById("spec-lbl-milk");
  if (specLblMilk) {
    if (recipe.isPinkGuava) {
      specLblMilk.innerText = "Cốt ổi hồng";
    } else if (recipe.isOlongWinterMelon) {
      specLblMilk.innerText = "Củ năng";
    } else if (recipe.isEightTreasures || recipe.isXiMuoiWinterMelonMix || recipe.isXiMuoiOlongMix) {
      specLblMilk.innerText = "Topping";
    } else if (recipe.isOlongGrape) {
      specLblMilk.innerText = "Sốt nho";
    } else if (recipe.isTaroMashed) {
      specLblMilk.innerText = "Khoai môn + Kem";
    } else if (recipe.isFreshMilkTaroMashed) {
      specLblMilk.innerText = "Khoai môn + Sữa";
    } else if (recipe.isTeaBiDaoMix) {
      specLblMilk.innerText = "--";
    } else if (recipe.isPeachTea) {
      specLblMilk.innerText = "Nước đào";
    } else if (recipe.isMilkTea || recipe.isChocolateMilkTea) {
      specLblMilk.innerText = "Kem béo";
    } else if (recipe.isLemonTea) {
      specLblMilk.innerText = "Nước chanh";
    } else if (recipe.id === "rec-hong-tra-kem-tuoi") {
      specLblMilk.innerText = "Kem tươi";
    } else if (recipe.category === "pure-tea") {
      specLblMilk.innerText = "--";
    } else {
      specLblMilk.innerText = "Sữa tươi";
    }
  }

  // Ingredients rows
  const ingBody = document.getElementById("modal-ingredients-body");
  ingBody.innerHTML = "";

  specs.ingredients.forEach(ing => {
    ingBody.innerHTML += `
      <div class="ing-row">
        <span class="ing-name">${ing.name}</span>
        <span class="ing-val">${ing.quantity}</span>
      </div>
    `;
  });

  // Steps checklist
  const stepsBody = document.getElementById("modal-steps-body");
  stepsBody.innerHTML = "";

  steps.forEach((step, index) => {
    const stepEl = document.createElement("div");
    stepEl.classList.add("step-item");
    stepEl.innerHTML = `
      <div class="step-checkbox"><i class="fa-solid fa-check"></i></div>
      <div class="step-desc"><b>Bước ${index + 1}:</b> ${step}</div>
    `;

    stepEl.addEventListener("click", () => {
      stepEl.classList.toggle("checked");
    });

    stepsBody.appendChild(stepEl);
  });
}

function updateModalLearnedButtonState(recipeId) {
  const btn = document.getElementById("btn-modal-toggle-learned");
  if (!btn) return;

  const isLearned = appState.learnedRecipes.includes(recipeId);
  if (isLearned) {
    btn.innerHTML = `<i class="fa-solid fa-bookmark"></i> Đã thuộc (Click để hủy)`;
    btn.style.background = "var(--safe-green)";
  } else {
    btn.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Đánh dấu: Đã thuộc`;
    btn.style.background = "";
  }
}

function toggleRecipeLearned(recipeId) {
  const index = appState.learnedRecipes.indexOf(recipeId);
  if (index === -1) {
    appState.learnedRecipes.push(recipeId);
  } else {
    appState.learnedRecipes.splice(index, 1);
  }
  saveLearnedRecipes();
}

function navigateModalRecipe(direction) {
  const modalSizeSelector = document.getElementById("modal-size-selector");
  const currentRecipeId = modalSizeSelector.getAttribute("data-recipe-id");

  const currentIndex = DATA.recipes.findIndex(r => r.id === currentRecipeId);
  if (currentIndex === -1) return;

  let newIndex = currentIndex + direction;
  if (newIndex >= DATA.recipes.length) newIndex = 0;
  if (newIndex < 0) newIndex = DATA.recipes.length - 1;

  const newRecipe = DATA.recipes[newIndex];
  openRecipeModal(newRecipe);
}

// --- COOKING PEARLS SECTION ---
function renderCookingGuides() {
  const tabContainer = document.getElementById("cooking-guide-tabs");
  if (!tabContainer) return;

  tabContainer.innerHTML = "";

  DATA.cookingGuides.forEach(guide => {
    const tabBtn = document.createElement("button");
    tabBtn.classList.add("cooking-tab");
    if (guide.id === appState.selectedCookingGuideId) {
      tabBtn.classList.add("active");
    }
    tabBtn.innerText = guide.name;
    tabBtn.setAttribute("data-guide-id", guide.id);

    tabBtn.addEventListener("click", () => {
      document.querySelectorAll(".cooking-tab").forEach(t => t.classList.remove("active"));
      tabBtn.classList.add("active");
      appState.selectedCookingGuideId = guide.id;
      renderCookingGuideDetail(guide.id);
    });

    tabContainer.appendChild(tabBtn);
  });

  // Render initial guide details
  renderCookingGuideDetail(appState.selectedCookingGuideId);
}

function renderCookingGuideDetail(guideId) {
  const guide = DATA.cookingGuides.find(g => g.id === guideId);
  if (!guide) return;

  // Render Left Info Box
  const infoBox = document.querySelector(".cooking-ingredient-box");
  if (infoBox) {
    infoBox.innerHTML = `
      <h3 class="section-subtitle" style="margin-bottom: 14px;">
        <i class="fa-solid fa-calculator" style="color: var(--primary);"></i> Tỷ lệ đong & Chuẩn bị
      </h3>
      <div style="font-weight: 600; margin-bottom: 12px; color: var(--warning-yellow); font-size: 0.95rem;">
        ${guide.ratios}
      </div>
      <p style="font-size: 0.85rem; opacity: 0.8; line-height: 1.6;">
        <b>Chuẩn bị:</b> ${guide.prep}
      </p>
      
      <div style="margin-top: 24px; padding-top: 20px; border-top: 1px dashed var(--glass-border); font-size: 0.8rem; color: var(--primary-light);">
        <i class="fa-solid fa-triangle-exclamation" style="color: var(--warning-yellow);"></i> 
        Hãy bấm bắt đầu đồng hồ hẹn giờ cho các bước đun/luộc/ủ để đảm bảo chín dẻo tiêu chuẩn và không cháy khét mẻ.
      </div>
    `;
  }

  // Render Right Steps
  const stepsContainer = document.getElementById("cooking-steps-container");
  if (stepsContainer) {
    stepsContainer.innerHTML = "";

    guide.steps.forEach((step, index) => {
      const stepCard = document.createElement("div");
      stepCard.classList.add("timeline-step-node");

      // Build timer html if the step has a duration
      let timerHtml = "";
      const timerKey = `${guide.id}-${index}`;
      const activeTimer = appState.activeTimers.find(t => t.key === timerKey);

      if (activeTimer) {
        stepCard.classList.add("active");
      } else if (index === 0 && appState.activeTimers.filter(t => t.key.startsWith(guide.id)).length === 0) {
        stepCard.classList.add("active");
      }

      if (step.timer > 0) {
        if (activeTimer) {
          const display = formatTimerTime(activeTimer.remaining);
          timerHtml = `
            <button class="cooking-step-timer running" data-timer-key="${timerKey}">
              <i class="fa-solid fa-clock"></i> Đang chạy: ${display} (Dừng)
            </button>
          `;
        } else {
          const display = formatTimerTime(step.timer);
          timerHtml = `
            <button class="cooking-step-timer" data-timer-key="${timerKey}" data-duration="${step.timer}" data-label="${guide.name} - ${step.title}">
              <i class="fa-solid fa-play"></i> Hẹn giờ: ${display}
            </button>
            <button class="cooking-step-timer btn-demo" data-timer-key="${timerKey}" data-duration="${step.timer}" data-label="${guide.name} - ${step.title}" style="margin-left: 6px; background: rgba(255,255,255,0.05); color: var(--primary-light); font-size: 0.75rem;">
              Chạy nhanh (Demo)
            </button>
          `;
        }
      }

      stepCard.innerHTML = `
        <div class="timeline-step-marker">${index + 1}</div>
        <div class="timeline-step-content">
          <div class="cooking-step-title">${step.title}</div>
          <div class="cooking-step-desc">${step.desc}</div>
          ${timerHtml}
        </div>
      `;

      // Handle normal timer button click
      const timerBtn = stepCard.querySelector(".cooking-step-timer:not(.btn-demo)");
      if (timerBtn) {
        timerBtn.addEventListener("click", () => {
          const key = timerBtn.getAttribute("data-timer-key");
          if (timerBtn.classList.contains("running")) {
            stopCookingTimer(key);
          } else {
            const duration = parseInt(timerBtn.getAttribute("data-duration"));
            const label = timerBtn.getAttribute("data-label");
            startCookingTimer(key, label, duration);
          }
        });
      }

      // Handle demo fast-forward timer button click
      const demoBtn = stepCard.querySelector(".btn-demo");
      if (demoBtn) {
        demoBtn.addEventListener("click", () => {
          const key = demoBtn.getAttribute("data-timer-key");
          const duration = parseInt(demoBtn.getAttribute("data-duration"));
          const label = demoBtn.getAttribute("data-label");
          // Run 60x speed for testing
          startCookingTimer(key, label, duration, true);
        });
      }

      stepsContainer.appendChild(stepCard);
    });
  }
}

// --- ACTIVE TIMERS LOGIC ---
function formatTimerTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function startCookingTimer(key, label, duration, isDemo = false) {
  // Check if already running
  if (appState.activeTimers.some(t => t.key === key)) return;

  const timerId = `${Date.now()}`;
  const multiplier = isDemo ? 60 : 1; // 60x faster for demo

  const timerObj = {
    id: timerId,
    key: key,
    label: label,
    duration: duration,
    remaining: duration,
    multiplier: multiplier
  };

  appState.activeTimers.push(timerObj);

  // Render cooking view & toast list
  if (appState.activeSection === "cooking-section") {
    renderCookingGuideDetail(appState.selectedCookingGuideId);
  }
  renderActiveTimersList();
  showTimerToast(timerObj);
}

function stopCookingTimer(key) {
  appState.activeTimers = appState.activeTimers.filter(t => t.key !== key);

  // Re-render
  if (appState.activeSection === "cooking-section") {
    renderCookingGuideDetail(appState.selectedCookingGuideId);
  }
  renderActiveTimersList();

  // Remove toast element if any
  const toast = document.getElementById(`toast-${key}`);
  if (toast) toast.remove();
}

function showTimerToast(timerObj) {
  const container = document.getElementById("active-timers-container");
  if (!container) return;

  // Remove existing if any
  const oldToast = document.getElementById(`toast-${timerObj.key}`);
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.classList.add("timer-toast");
  toast.setAttribute("id", `toast-${timerObj.key}`);

  toast.innerHTML = `
    <div class="timer-toast-info">
      <span class="timer-toast-label">${timerObj.label}</span>
      <span class="timer-toast-countdown" id="toast-time-${timerObj.key}">${formatTimerTime(timerObj.remaining)}</span>
    </div>
    <button class="timer-toast-close" onclick="stopCookingTimer('${timerObj.key}')">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);
}

function renderActiveTimersList() {
  // Disabled dashboard active timers list per user request
  const container = document.getElementById("dashboard-timers-list");
  if (container) {
    container.innerHTML = "";
  }
}

// --- DYNAMIC TIMERS DAEMON (1 SECOND INTERVAL) ---
function startRealTimeDaemon() {
  setInterval(() => {
    let timersChanged = false;

    // 1. Process Cooking Timers
    appState.activeTimers.forEach(timer => {
      // Deduct seconds based on multiplier (normal is 1, demo is 60)
      timer.remaining -= timer.multiplier;
      timersChanged = true;

      if (timer.remaining <= 0) {
        timer.remaining = 0;
        // Timer trigger alarm!
        playAlertSound();

        // Show alerts
        alert(`Báo động: [${timer.label}] ĐÃ HOÀN THÀNH! Vui lòng thao tác bước tiếp theo.`);

        // Auto remove
        setTimeout(() => {
          stopCookingTimer(timer.key);
        }, 100);
      } else {
        // Update countdown text in active toast
        const display = formatTimerTime(timer.remaining);
        const textEl = document.getElementById(`toast-time-${timer.key}`);
        if (textEl) textEl.innerText = display;

        // Update button text in Cooking Guide detail if we are on that view
        const keyBtn = document.querySelector(`[data-timer-key="${timer.key}"]:not(.btn-demo)`);
        if (keyBtn) {
          keyBtn.innerText = `Đang chạy: ${display} (Dừng)`;
        }
      }
    });

    if (timersChanged) {
      renderActiveTimersList();
    }

  }, 1000);
}

// --- TOPPING SHELF LIFE LOGIC ---
function renderShelfLifeGuidelines() {
  const tbody = document.getElementById("master-shelf-guidelines-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  DATA.toppingGuidelines.forEach(item => {
    // Format opened hours to days
    const openedLifeStr = item.openedLife >= 24
      ? `${item.openedLife / 24} ngày`
      : `${item.openedLife} giờ`;

    tbody.innerHTML += `
      <tr>
        <td style="font-weight: 700;">${item.name}</td>
        <td>${item.unopenedLife}</td>
        <td style="font-size: 0.8rem; opacity: 0.9;">${item.unopenedStore}</td>
        <td style="font-weight: 600; color: var(--primary);">${openedLifeStr}</td>
        <td style="font-size: 0.8rem; color: var(--primary);">${item.openedStore}</td>
      </tr>
    `;
  });
}

// Populate dropdown selector inside Shelf Life Tracker
function populateToppingSelectDropdown() {
  const select = document.getElementById("new-pack-topping-id");
  if (!select) return;

  select.innerHTML = "";
  DATA.toppingGuidelines.forEach(topping => {
    select.innerHTML += `<option value="${topping.name}">${topping.name}</option>`;
  });
}

function submitOpenTopping() {
  const name = document.getElementById("new-pack-topping-id").value;
  const timeInput = document.getElementById("new-pack-time").value;

  if (!timeInput) {
    alert("Vui lòng chọn thời gian nấu/mở bao bì.");
    return;
  }

  const prepTime = new Date(timeInput).getTime();
  const guideline = DATA.toppingGuidelines.find(g => g.name === name);
  if (!guideline) return;

  // Expiry time = prepTime + hours * 3600 * 1000
  const expiryTime = prepTime + (guideline.openedLife * 3600 * 1000);

  const newActive = {
    id: `shelf-${Date.now()}`,
    name: name,
    prepTime: prepTime,
    expiryTime: expiryTime,
    storageCondition: guideline.openedStore,
    status: "green"
  };

  appState.activeShelfToppings.push(newActive);
  saveShelfToppings();

  // Reset UI
  document.getElementById("open-package-drawer").style.display = "none";
  renderActiveShelfToppings();
  updateDashboardStats();
  renderDashboardAlerts();
}

function removeActiveTopping(id) {
  if (confirm("Xác nhận tháo dỡ/đổ bỏ mẻ topping này khỏi ca làm việc?")) {
    appState.activeShelfToppings = appState.activeShelfToppings.filter(t => t.id !== id);
    saveShelfToppings();
    renderActiveShelfToppings();
    updateDashboardStats();
    renderDashboardAlerts();
  }
}

function updateActiveShelfToppingsTimeRemaining() {
  const now = Date.now();
  let changed = false;

  appState.activeShelfToppings.forEach(topping => {
    const totalDuration = topping.expiryTime - topping.prepTime;
    const timeLeft = topping.expiryTime - now;

    // Status color coding:
    // Red: expired (timeLeft <= 0)
    // Yellow: warning (timeLeft <= 2 hours OR less than 25% of total shelf life)
    // Green: safe
    let newStatus = "green";

    if (timeLeft <= 0) {
      newStatus = "red";
    } else if (timeLeft <= 2 * 3600 * 1000 || (timeLeft / totalDuration) <= 0.25) {
      newStatus = "yellow";
    }

    if (topping.status !== newStatus) {
      topping.status = newStatus;
      changed = true;
    }
  });

  if (changed) {
    saveShelfToppings();
    renderDashboardAlerts();
  }

  // Real-time table updates if shelf view is active
  if (appState.activeSection === "shelf-life-section") {
    renderActiveShelfToppingsTableRowsOnly();
  }
}

function formatDatetime(timestamp) {
  const d = new Date(timestamp);
  const hour = d.getHours().toString().padStart(2, '0');
  const min = d.getMinutes().toString().padStart(2, '0');
  const date = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  return `${hour}:${min} - ${date}/${month}`;
}

function formatTimeRemaining(ms) {
  if (ms <= 0) return "ĐÃ HẾT HẠN!";

  const hrs = Math.floor(ms / (3600 * 1000));
  const mins = Math.floor((ms % (3600 * 1000)) / (60 * 1000));

  if (hrs > 0) {
    return `${hrs} giờ ${mins} phút`;
  }
  return `${mins} phút`;
}

function renderActiveShelfToppings() {
  renderActiveShelfToppingsTableRowsOnly();
}

function renderActiveShelfToppingsTableRowsOnly() {
  const tbody = document.getElementById("active-shelf-tracker-body");
  if (!tbody) return;

  const activeFilterTab = document.querySelector("[data-shelf-filter].active");
  const filter = activeFilterTab ? activeFilterTab.getAttribute("data-shelf-filter") : "all";

  const filtered = appState.activeShelfToppings.filter(t => {
    if (filter === "safe") return t.status === "green";
    if (filter === "warning") return t.status === "yellow";
    if (filter === "expired") return t.status === "red";
    return true;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 24px; color: var(--primary-light); font-weight: 500;">
          Không có topping nào trong danh mục theo dõi này.
        </td>
      </tr>
    `;
    return;
  }

  const now = Date.now();
  tbody.innerHTML = "";

  filtered.forEach(item => {
    let statusClass = "green";
    let statusLabel = "Còn hạn";
    if (item.status === "red") {
      statusClass = "red";
      statusLabel = "Đã hết hạn";
    } else if (item.status === "yellow") {
      statusClass = "yellow";
      statusLabel = "Sắp hết hạn";
    }

    const timeLeftStr = formatTimeRemaining(item.expiryTime - now);

    tbody.innerHTML += `
      <tr>
        <td style="font-weight: 700;">${item.name}</td>
        <td style="font-size: 0.85rem;">${formatDatetime(item.prepTime)}</td>
        <td style="font-size: 0.85rem;">${formatDatetime(item.expiryTime)}</td>
        <td style="font-weight: 700; color: ${item.status === 'red' ? 'var(--danger-red)' : 'var(--primary-deep)'}; font-size: 0.85rem;">
          ${timeLeftStr}
        </td>
        <td style="font-size: 0.8rem; opacity: 0.95;">${item.storageCondition}</td>
        <td>
          <span class="badge-status ${statusClass}">${statusLabel}</span>
        </td>
        <td>
          <button class="btn btn-secondary" onclick="removeActiveTopping('${item.id}')" style="padding: 4px 10px; font-size: 0.75rem; color: var(--danger-red); border-color: rgba(255, 51, 102, 0.2);">
            <i class="fa-solid fa-trash-can"></i> Hủy
          </button>
        </td>
      </tr>
    `;
  });
}

// --- PORTIONS (ĐỊNH LƯỢNG) RENDERING ---
function renderPortions(searchQuery = "") {
  const cardContainer = document.getElementById("topping-portions-container");
  const tableBody = document.getElementById("portions-table-body");

  if (!cardContainer || !tableBody) return;

  cardContainer.innerHTML = "";
  tableBody.innerHTML = "";

  const filtered = DATA.toppingPortions.filter(t => {
    if (!searchQuery) return true;
    return t.name.toLowerCase().includes(searchQuery) || t.notes.toLowerCase().includes(searchQuery);
  });

  if (filtered.length === 0) {
    cardContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 24px; color: var(--primary-light);">
        Không tìm thấy kết quả.
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    // 1. Render card view
    cardContainer.innerHTML += `
      <div class="glass-card topping-card">
        <h3 class="topping-card-title">${item.name}</h3>
        <div class="topping-card-body">
          <div class="topping-info-row">
            <span class="topping-info-lbl">Số muỗng:</span>
            <span class="topping-info-val" style="color: #ff5722;">${item.scoops}</span>
          </div>
          <div class="topping-info-row">
            <span class="topping-info-lbl">Định lượng:</span>
            <span class="topping-info-val" style="color: var(--primary);">${item.grams}</span>
          </div>
          <div style="margin-top: 8px; font-size: 0.8rem; color: var(--primary-deep); opacity: 0.85; line-height: 1.4;">
            <b>Lưu ý:</b> ${item.notes}
          </div>
        </div>
      </div>
    `;

    // 2. Render table view row
    tableBody.innerHTML += `
      <tr>
        <td style="font-weight: 700;">${item.name}</td>
        <td style="font-weight: 600; color: #ff5722;">${item.scoops}</td>
        <td style="font-weight: 700; color: var(--primary);">${item.grams}</td>
        <td style="font-size: 0.85rem; opacity: 0.9;">${item.notes}</td>
      </tr>
    `;
  });
}

// --- LEARNING SYSTEM MODULES ---
function showLearningSelector() {
  document.getElementById("training-mode-selectors").style.display = "grid";
  document.getElementById("btn-back-to-modes").style.display = "none";
  document.getElementById("learning-flashcard-panel").style.display = "none";
  document.getElementById("learning-quiz-panel").style.display = "none";
  document.getElementById("learning-progress-panel").style.display = "none";
}

function startLearningMode(mode) {
  document.getElementById("training-mode-selectors").style.display = "none";
  document.getElementById("btn-back-to-modes").style.display = "inline-flex";

  if (mode === "flashcard") {
    document.getElementById("learning-flashcard-panel").style.display = "block";
    initFlashcardDeck();
  } else if (mode === "quiz") {
    document.getElementById("learning-quiz-panel").style.display = "block";
    showQuizSetup();
  } else if (mode === "progress") {
    document.getElementById("learning-progress-panel").style.display = "block";
    renderProgressPanel();
  }
}

// --- FLASHCARDS LOGIC ---
function initFlashcardDeck() {
  appState.currentFlashcardIndex = 0;
  showFlashcard();
}

function showFlashcard() {
  const deck = DATA.recipes;
  const count = deck.length;

  // Guard against empty recipes
  if (count === 0) {
    document.getElementById("flashcard-counter").innerText = "Thẻ 0 / 0";
    document.getElementById("flashcard-front-name").innerText = "Chưa có công thức";
    document.getElementById("flashcard-back-name").innerText = "Chưa có công thức";
    document.getElementById("flashcard-back-content").innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--primary-light);">
        <i class="fa-solid fa-mug-hot" style="font-size: 2.5rem; margin-bottom: 12px; opacity: 0.5;"></i>
        <p style="font-weight: 600;">Chưa có công thức nào trong hệ thống.</p>
        <p style="font-size: 0.8rem; margin-top: 4px;">Vui lòng thêm công thức vào mảng <code>DATA.recipes</code> trong tệp <code>app.js</code>.</p>
      </div>
    `;
    return;
  }

  const current = deck[appState.currentFlashcardIndex];

  // Set text
  document.getElementById("flashcard-counter").innerText = `Thẻ ${appState.currentFlashcardIndex + 1} / ${count}`;
  document.getElementById("flashcard-front-name").innerText = current.name;
  document.getElementById("flashcard-back-name").innerText = current.name;

  // Fill ingredients & formula on back
  const detailsEl = document.getElementById("flashcard-back-content");

  const specs = current.sizes[current.defaultSize] || { tea: "N/A", sugar: "N/A", ice: "N/A", milk: "N/A" };

  detailsEl.innerHTML = `
    <div style="font-size: 0.85rem; margin-bottom: 12px; border-bottom: 1px dashed var(--glass-border); padding-bottom: 8px;">
      <h5 style="font-weight: 700; margin-bottom: 4px;">Công thức chuẩn:</h5>
      <ul style="padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
        <li><b>Cốt trà:</b> ${specs.tea}</li>
        <li><b>Độ đường:</b> ${specs.sugar}</li>
        <li><b>Định lượng đá:</b> ${specs.ice}</li>
        <li><b>Thành phần khác:</b> ${specs.milk}</li>
      </ul>
    </div>

    <div>
      <h5 style="font-weight: 700; margin-bottom: 4px;">Quy trình pha chế:</h5>
      <ol style="padding-left: 18px; font-size: 0.85rem; line-height: 1.4; display: flex; flex-direction: column; gap: 4px;">
        ${current.steps.map(s => `<li>${s}</li>`).join("")}
      </ol>
    </div>
  `;

  // Reset flipped state
  document.getElementById("flashcard-element").classList.remove("flipped");
}

function navigateFlashcard(direction) {
  const count = DATA.recipes.length;
  if (count === 0) return;

  let newIndex = appState.currentFlashcardIndex + direction;
  if (newIndex >= count) newIndex = 0;
  if (newIndex < 0) newIndex = count - 1;

  appState.currentFlashcardIndex = newIndex;
  showFlashcard();
}

// --- QUIZ GAME ENGINE ---
function showQuizSetup() {
  document.getElementById("quiz-setup").style.display = "block";
  document.getElementById("quiz-active").style.display = "none";
  document.getElementById("quiz-result").style.display = "none";
}

function startQuizSession() {
  if (DATA.recipes.length === 0) {
    alert("Không có công thức nào trong hệ thống để tạo bài trắc nghiệm. Vui lòng thêm công thức vào tệp app.js.");
    return;
  }

  // Setup state
  appState.currentQuizIndex = 0;
  appState.quizStartTime = Date.now();
  appState.quizAnswers = [];
  appState.currentQuizQuestions = generateQuizQuestions(10);

  // Switch UI panels
  document.getElementById("quiz-setup").style.display = "none";
  document.getElementById("quiz-active").style.display = "block";
  document.getElementById("quiz-result").style.display = "none";

  // Start timer display
  if (appState.quizTimeInterval) clearInterval(appState.quizTimeInterval);
  document.getElementById("quiz-timer").innerText = "Thời gian: 00:00";
  appState.quizTimeInterval = setInterval(() => {
    const elapsed = Math.round((Date.now() - appState.quizStartTime) / 1000);
    const mm = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const ss = (elapsed % 60).toString().padStart(2, '0');
    document.getElementById("quiz-timer").innerText = `Thời gian: ${mm}:${ss}`;
  }, 1000);

  // Load first question
  loadQuizQuestion();
}

function isPriorityRecipe(recipe) {
  const name = recipe.name.toLowerCase();
  return (
    name.includes("socola") ||
    name.includes("khoai môn nghiền") ||
    name.includes("hồng lãng mạn") ||
    name.includes("trà đào") ||
    name.includes("ô long đào") ||
    name.includes("olong đào") ||
    name.includes("bạch đào") ||
    name.includes("xí muội") ||
    name.includes("bát bảo") ||
    name.includes("sữa tươi trân châu đường đen")
  );
}

function getDoubleToppingPortion(topping) {
  const scoopsMatch = topping.scoops.match(/^(\d+(?:\.\d+)?)\s*(.*)$/);
  let doubleScoops = topping.scoops;
  if (scoopsMatch) {
    const val = parseFloat(scoopsMatch[1]) * 2;
    const unit = scoopsMatch[2];
    doubleScoops = `${val} ${unit}`;
  }

  const gramsMatch = topping.grams.match(/^(\d+)g$/);
  let doubleGrams = topping.grams;
  if (gramsMatch) {
    const val = parseInt(gramsMatch[1]) * 2;
    doubleGrams = `${val}g`;
  }

  return { scoops: doubleScoops, grams: doubleGrams };
}

function getRandomRecipe() {
  const priorityRecipes = DATA.recipes.filter(isPriorityRecipe);
  const normalRecipes = DATA.recipes.filter(r => !isPriorityRecipe(r));
  
  if (priorityRecipes.length > 0 && Math.random() < 0.75) {
    return priorityRecipes[Math.floor(Math.random() * priorityRecipes.length)];
  } else if (normalRecipes.length > 0) {
    return normalRecipes[Math.floor(Math.random() * normalRecipes.length)];
  }
  return DATA.recipes[Math.floor(Math.random() * DATA.recipes.length)];
}

function cleanToppingName(name) {
  if (!name) return "";
  return name.replace(/-\d+h$/gi, "");
}

function getIceDropdownAnswer(iceSpec) {
  if (!iceSpec) return "không bỏ đá";
  const lower = iceSpec.toLowerCase();
  if (lower.includes("không") || lower.includes("no ice") || lower.includes("none")) {
    return "không bỏ đá";
  }
  if (lower.includes("600")) return "600ml";
  if (lower.includes("800")) return "800ml";
  if (lower.includes("300")) return "300ml";
  if (lower.includes("400")) return "400ml";
  if (lower.includes("450")) return "450ml";
  if (lower.includes("đầy ly") || lower.includes("gần đầy")) return "đầy ly";
  
  const numMatch = iceSpec.match(/(\d+)/);
  if (numMatch) return `${numMatch[1]}ml`;
  
  return "đầy ly";
}

function generateQuizQuestions(num) {
  const questions = [];
  
  // 1. Generate 7 formula questions
  for (let i = 0; i < 7; i++) {
    const recipe = getRandomRecipe();
    const size = recipe.defaultSize;
    
    // Choose sugar and ice levels
    let sugarLevel = "100%";
    if (!recipe.isFixedSugar && !recipe.isXiMuoiWinterMelonMix && !recipe.isXiMuoiNgoGia && recipe.minSugar !== "100%") {
      const sugarLevels = ["70%", "50%", "30%", "0%"];
      sugarLevel = sugarLevels[Math.floor(Math.random() * sugarLevels.length)];
    }
    
    const iceLevels = ["normal", "less", "none"];
    const iceLevel = iceLevels[Math.floor(Math.random() * iceLevels.length)];
    const iceLabel = iceLevel === "normal" ? "đá bình thường" : (iceLevel === "less" ? "ít đá" : "không đá");
    
    // Topping addition (50% chance)
    let topping = null;
    let isDoubleTopping = false;
    
    if (Math.random() < 0.5) {
      const validToppings = DATA.toppingPortions.filter(t => 
        t.scoops !== "-" && 
        t.grams !== "-" && 
        !t.name.includes("Trà các loại")
      );
      if (validToppings.length > 0) {
        topping = validToppings[Math.floor(Math.random() * validToppings.length)];
        isDoubleTopping = Math.random() < 0.5;
      }
    }
    
    // Build question text (no "gài" warning)
    let toppingText = topping ? ` thêm ${isDoubleTopping ? "2 phần" : "1 phần"} ${cleanToppingName(topping.name)}` : "";
    const questionText = `Khách order 1 ly <b>"${recipe.name}"</b> (${size}) ở mức <b>${sugarLevel} đường, ${iceLabel}</b>${toppingText} thì công thức đong là:`;
    
    const specs = calculatePureTeaSpecs(recipe, size, sugarLevel, iceLevel);
    
    const fields = [];
    
    // If topping added
    if (topping) {
      const portion = isDoubleTopping ? getDoubleToppingPortion(topping) : topping;
      const scoopsMatch = portion.scoops.match(/^([\d\.]+)/);
      const gramsMatch = portion.grams.match(/^(\d+)/);
      
      fields.push({
        label: `${cleanToppingName(topping.name)} (số muỗng/viên/miếng)`,
        correct: scoopsMatch ? parseFloat(scoopsMatch[1]) : portion.scoops,
        unit: portion.scoops.replace(/^[\d\.\s]+/, ""),
        inputType: "number"
      });
      if (gramsMatch) {
        fields.push({
          label: `${cleanToppingName(topping.name)} (số gram)`,
          correct: parseInt(gramsMatch[1]),
          unit: "g",
          inputType: "number"
        });
      }
    }
    
    // Add ingredients from specs
    specs.ingredients.forEach(ing => {
      // Check if this ingredient is the added topping (using clean names comparison)
      if (topping) {
        const cleanIng = cleanToppingName(ing.name).toLowerCase();
        const cleanTop = cleanToppingName(topping.name).toLowerCase();
        if (cleanIng.includes(cleanTop) || cleanTop.includes(cleanIng)) return;
      }
      
      const parsed = parseIngredientQuantity(ing.quantity);
      if (parsed.type === "topping") {
        fields.push({
          label: `${cleanToppingName(ing.name)} (số muỗng/viên/miếng)`,
          correct: parsed.scoops,
          unit: parsed.unit,
          inputType: "number"
        });
        if (parsed.grams) {
          fields.push({
            label: `${cleanToppingName(ing.name)} (số gram)`,
            correct: parsed.grams,
            unit: "g",
            inputType: "number"
          });
        }
      } else if (parsed.type === "number") {
        fields.push({
          label: cleanToppingName(ing.name),
          correct: parsed.value,
          unit: parsed.unit,
          inputType: "number"
        });
      } else {
        fields.push({
          label: cleanToppingName(ing.name),
          correct: parsed.value,
          unit: "",
          inputType: "text"
        });
      }
    });
    
    // Add ice spec
    const iceAns = getIceDropdownAnswer(specs.ice);
    const defaultOptions = ["đầy ly", "600ml", "300ml", "800ml", "400ml", "không bỏ đá"];
    if (!defaultOptions.includes(iceAns)) {
      defaultOptions.push(iceAns);
    }
    
    fields.push({
      label: "Định lượng đá",
      correct: iceAns,
      options: defaultOptions,
      unit: "",
      inputType: "select"
    });
    
    questions.push({
      type: "formula",
      recipeId: recipe.id,
      recipeName: recipe.name,
      questionText: questionText,
      fields: fields
    });
  }
  
  // 2. Generate 3 topping questions
  for (let i = 0; i < 3; i++) {
    const validToppings = DATA.toppingPortions.filter(t => 
      t.scoops !== "-" && 
      t.grams !== "-" && 
      !t.name.includes("Trà các loại")
    );
    const toppingPortion = validToppings[Math.floor(Math.random() * validToppings.length)];
    const toppingGuideline = DATA.toppingGuidelines.find(g => g.name === toppingPortion.name);
    
    if (!toppingGuideline) {
      i--;
      continue;
    }
    
    const questionText = `Định lượng múc tiêu chuẩn và hạn sử dụng của topping <b>"${cleanToppingName(toppingGuideline.name)}"</b> là:`;
    
    const scoopsMatch = toppingPortion.scoops.match(/^([\d\.]+)\s*(.*)$/);
    const gramsMatch = toppingPortion.grams.match(/^(\d+)g$/);
    
    const fields = [
      {
        label: "Định lượng (số muỗng/viên/miếng)",
        correct: scoopsMatch ? parseFloat(scoopsMatch[1]) : toppingPortion.scoops,
        unit: scoopsMatch ? scoopsMatch[2] : "",
        inputType: "number"
      },
      {
        label: "Định lượng (số gram)",
        correct: gramsMatch ? parseInt(gramsMatch[1]) : toppingPortion.grams,
        unit: "g/phần",
        inputType: "number"
      },
      {
        label: "Hạn sử dụng chưa khui",
        correct: toppingGuideline.unopenedLife,
        unit: "",
        inputType: "text"
      },
      {
        label: "Bảo quản chưa khui",
        correct: toppingGuideline.unopenedStore,
        unit: "",
        inputType: "text"
      },
      {
        label: "Hạn sử dụng đã khui (sau khi khui)",
        correct: `${toppingGuideline.openedLife / 24} ngày`,
        unit: "",
        inputType: "text"
      },
      {
        label: "Bảo quản đã khui (sau khi khui)",
        correct: toppingGuideline.openedStore,
        unit: "",
        inputType: "text"
      }
    ];
    
    questions.push({
      type: "topping",
      recipeId: "topping",
      recipeName: cleanToppingName(toppingGuideline.name),
      questionText: questionText,
      fields: fields
    });
  }
  
  // Shuffle questions
  questions.sort(() => 0.5 - Math.random());
  
  return questions;
}

function parseIngredientQuantity(quantity) {
  // case: "2 vá (120g)" or "1.5 viên (90g)"
  const match1 = quantity.match(/^([\d\.]+)\s*([^\d\s()]+)\s*\((\d+)g\)$/);
  if (match1) {
    return { type: "topping", scoops: parseFloat(match1[1]), unit: match1[2], grams: parseInt(match1[3]) };
  }
  
  // case: "120g (1.5 viên)"
  const match2 = quantity.match(/^(\d+)g\s*\((\d+(?:\.\d+)?)\s*([^\d\s()]+)\)$/);
  if (match2) {
    return { type: "topping", scoops: parseFloat(match2[2]), unit: match2[3], grams: parseInt(match2[1]) };
  }
  
  // case: "140ml" or "40cc"
  const match3 = quantity.match(/^([\d\.]+)\s*(ml|cc)$/i);
  if (match3) {
    return { type: "number", value: parseFloat(match3[1]), unit: match3[2] };
  }
  
  return { type: "text", value: quantity };
}

function cleanText(str) {
  if (!str) return "";
  return str.toString().trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/cc/g, "ml")
    .replace(/g$/g, "gr");
}

function loadQuizQuestion() {
  const index = appState.currentQuizIndex;
  const question = appState.currentQuizQuestions[index];

  // Hide next button
  document.getElementById("btn-quiz-next").style.display = "none";

  const totalQuestions = appState.currentQuizQuestions.length;

  // Update headers
  document.getElementById("quiz-current-question-num").innerText = `Câu hỏi ${index + 1} / ${totalQuestions}`;
  const pct = (index / totalQuestions) * 100;
  document.getElementById("quiz-progress-fill-element").style.width = `${pct}%`;

  // Text
  document.getElementById("quiz-question-text").innerHTML = question.questionText;

  // Choices container
  const container = document.getElementById("quiz-choices-container");
  container.innerHTML = "";
  
  const formDiv = document.createElement("div");
  formDiv.style.display = "flex";
  formDiv.style.flexDirection = "column";
  formDiv.style.gap = "12px";
  formDiv.style.marginBottom = "20px";
  formDiv.style.width = "100%";
  formDiv.style.maxWidth = "600px";
  formDiv.style.margin = "0 auto";
  
  question.fields.forEach((field, fIdx) => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.alignItems = "center";
    row.style.flexWrap = "wrap";
    row.style.gap = "10px";
    row.style.padding = "8px 12px";
    row.style.borderRadius = "12px";
    row.style.background = "rgba(255, 255, 255, 0.03)";
    row.style.border = "1px solid rgba(255,255,255,0.05)";
    
    const labelSpan = document.createElement("span");
    labelSpan.innerHTML = `<b>${field.label}</b>:`;
    labelSpan.style.minWidth = "220px";
    labelSpan.style.fontSize = "0.9rem";
    
    let input;
    if (field.inputType === "select") {
      input = document.createElement("select");
      
      const placeholderOpt = document.createElement("option");
      placeholderOpt.value = "";
      placeholderOpt.innerText = "-- Chọn đáp án --";
      placeholderOpt.disabled = true;
      placeholderOpt.selected = true;
      placeholderOpt.style.background = "#112233";
      placeholderOpt.style.color = "var(--white)";
      input.appendChild(placeholderOpt);
      
      field.options.forEach(opt => {
        const option = document.createElement("option");
        option.value = opt;
        option.innerText = opt;
        option.style.background = "#112233";
        option.style.color = "#ffffff";
        input.appendChild(option);
      });
      
      input.style.cursor = "pointer";
    } else {
      input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Nhập kết quả...";
    }
    
    input.setAttribute("data-field-idx", fIdx);
    input.classList.add("quiz-input-field");
    input.style.padding = "6px 12px";
    input.style.borderRadius = "8px";
    input.style.border = "1px solid var(--glass-border)";
    input.style.background = "rgba(0, 0, 0, 0.3)";
    input.style.color = "var(--white)";
    input.style.fontFamily = "var(--font-main)";
    input.style.outline = "none";
    input.style.width = field.inputType === "select" ? "170px" : "140px";
    input.style.fontSize = "0.9rem";
    
    const unitSpan = document.createElement("span");
    unitSpan.innerText = field.unit;
    unitSpan.style.fontSize = "0.85rem";
    unitSpan.style.color = "var(--primary-light)";
    
    const feedbackSpan = document.createElement("span");
    feedbackSpan.id = `quiz-feedback-${fIdx}`;
    feedbackSpan.style.display = "none";
    feedbackSpan.style.fontSize = "0.85rem";
    feedbackSpan.style.fontWeight = "600";
    
    row.appendChild(labelSpan);
    row.appendChild(input);
    if (field.unit) row.appendChild(unitSpan);
    row.appendChild(feedbackSpan);
    
    formDiv.appendChild(row);
  });
  
  // Submit Button
  const submitBtn = document.createElement("button");
  submitBtn.classList.add("btn", "btn-primary");
  submitBtn.id = "btn-quiz-submit";
  submitBtn.style.alignSelf = "center";
  submitBtn.style.padding = "10px 24px";
  submitBtn.style.borderRadius = "12px";
  submitBtn.style.marginTop = "10px";
  submitBtn.innerHTML = `<i class="fa-solid fa-check" style="margin-right: 6px;"></i> Xác nhận`;
  submitBtn.addEventListener("click", evaluateQuizInputs);
  
  formDiv.appendChild(submitBtn);
  container.appendChild(formDiv);
}

function evaluateQuizInputs() {
  const index = appState.currentQuizIndex;
  const question = appState.currentQuizQuestions[index];
  
  let allCorrect = true;
  
  question.fields.forEach((field, fIdx) => {
    const inputEl = document.querySelector(`.quiz-input-field[data-field-idx="${fIdx}"]`);
    const feedbackEl = document.getElementById(`quiz-feedback-${fIdx}`);
    if (!inputEl || !feedbackEl) return;
    
    const userVal = inputEl.value.trim();
    let isFieldCorrect = false;
    
    if (field.inputType === "number") {
      const userFloat = parseFloat(userVal);
      const correctFloat = parseFloat(field.correct);
      isFieldCorrect = !isNaN(userFloat) && Math.abs(userFloat - correctFloat) < 0.01;
    } else {
      isFieldCorrect = cleanText(userVal) === cleanText(field.correct);
    }
    
    inputEl.disabled = true;
    
    if (isFieldCorrect) {
      inputEl.style.borderColor = "var(--safe-green)";
      inputEl.style.color = "var(--safe-green)";
      feedbackEl.style.display = "inline";
      feedbackEl.style.color = "var(--safe-green)";
      feedbackEl.innerHTML = `<i class="fa-solid fa-circle-check" style="margin-left: 6px;"></i> Đúng`;
    } else {
      allCorrect = false;
      inputEl.style.borderColor = "var(--danger-red)";
      inputEl.style.color = "var(--danger-red)";
      feedbackEl.style.display = "inline";
      feedbackEl.style.color = "var(--danger-red)";
      feedbackEl.innerHTML = `<i class="fa-solid fa-circle-xmark" style="margin-left: 6px;"></i> Sai (Đúng: ${field.correct})`;
    }
  });
  
  const submitBtn = document.getElementById("btn-quiz-submit");
  if (submitBtn) submitBtn.style.display = "none";
  
  // Record this answer
  appState.quizAnswers.push(allCorrect ? "correct" : "incorrect");
  
  // Show "Next" or "Finish" button
  const nextBtn = document.getElementById("btn-quiz-next");
  const totalQuestions = appState.currentQuizQuestions.length;
  if (index === totalQuestions - 1) {
    nextBtn.innerHTML = `Xem kết quả <i class="fa-solid fa-square-poll-vertical" style="margin-left: 6px;"></i>`;
  } else {
    nextBtn.innerHTML = `Tiếp theo <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i>`;
  }
  nextBtn.style.display = "inline-flex";
}

function nextQuizQuestion() {
  const totalQuestions = appState.currentQuizQuestions.length;
  if (appState.currentQuizIndex < totalQuestions - 1) {
    appState.currentQuizIndex++;
    loadQuizQuestion();
  } else {
    finishQuizSession();
  }
}

function finishQuizSession() {
  if (appState.quizTimeInterval) clearInterval(appState.quizTimeInterval);

  const elapsedSeconds = Math.round((Date.now() - appState.quizStartTime) / 1000);
  const totalQuestions = appState.currentQuizQuestions.length;

  // Calculate score
  let correctCount = 0;
  appState.currentQuizQuestions.forEach((q, idx) => {
    if (appState.quizAnswers[idx] === "correct") {
      correctCount++;
    }
  });

  // Display result panel
  document.getElementById("quiz-active").style.display = "none";
  document.getElementById("quiz-result").style.display = "block";

  document.getElementById("quiz-result-score").innerText = `${correctCount}/${totalQuestions}`;
  document.getElementById("quiz-result-time").innerText = `Thời gian làm bài: ${elapsedSeconds} giây`;

  const commentEl = document.getElementById("quiz-result-comment");
  if (correctCount === totalQuestions) {
    commentEl.innerText = "Tuyệt đối! Bạn là vua pha chế đẳng cấp rồi!";
    commentEl.style.color = "var(--safe-green)";
  } else if (correctCount >= totalQuestions * 0.8) {
    commentEl.innerText = "Xuất sắc! Tay nghề rất chuẩn xác.";
    commentEl.style.color = "var(--primary)";
  } else if (correctCount >= totalQuestions * 0.6) {
    commentEl.innerText = "Khá tốt! Hãy ôn kỹ các câu sai để tránh lỗi khi đứng quầy.";
    commentEl.style.color = "var(--warning-yellow)";
  } else {
    commentEl.innerText = "Cần cố gắng thêm! Hãy tra cứu lại công thức và thử lại.";
    commentEl.style.color = "var(--danger-red)";
  }

  // Save score to local storage
  const record = {
    score: correctCount,
    total: totalQuestions,
    timeSpent: elapsedSeconds,
    date: Date.now()
  };
  appState.quizScores.unshift(record);
  saveQuizScores();
}

// --- TRAINING PROGRESS LOGS ---
function updateLearningStats() {
  const total = DATA.recipes.length;
  const learned = appState.learnedRecipes.length;
  const completion = total > 0 ? Math.round((learned / total) * 100) : 0;

  document.getElementById("prog-total-recipes").innerText = total;
  document.getElementById("prog-learned-recipes").innerText = learned;
  document.getElementById("prog-unlearned-recipes").innerText = total - learned;
  document.getElementById("prog-completion-rate").innerText = `${completion}%`;
}

function renderProgressPanel() {
  updateLearningStats();

  // Render Quiz History Log
  const historyList = document.getElementById("quiz-history-list");
  if (historyList) {
    if (appState.quizScores.length === 0) {
      historyList.innerHTML = `
        <p style="font-size: 0.85rem; color: var(--primary-light); text-align: center; padding: 20px 0;">
          Bạn chưa thực hiện bài kiểm tra nào.
        </p>
      `;
    } else {
      historyList.innerHTML = "";
      appState.quizScores.forEach(score => {
        const dateStr = new Date(score.date).toLocaleDateString("vi-VN") + " " + new Date(score.date).toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' });
        historyList.innerHTML += `
          <div class="progress-list-item" style="padding: 10px 0;">
            <div style="display: flex; flex-direction: column;">
              <strong style="font-size: 0.9rem; color: var(--primary-deep);">Điểm số: ${score.score}/${score.total}</strong>
              <span style="font-size: 0.75rem; color: var(--primary-light);">${dateStr}</span>
            </div>
            <span style="font-size: 0.85rem; font-weight: 600;">Thời gian: ${score.timeSpent}s</span>
          </div>
        `;
      });
    }
  }

  // Render detail recipes list with checkboxes
  const tbody = document.getElementById("learning-detail-table-body");
  if (tbody) {
    tbody.innerHTML = "";

    if (DATA.recipes.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="4" style="text-align: center; padding: 24px; color: var(--primary-light);">
            Chưa có công thức nào để theo dõi.
          </td>
        </tr>
      `;
      return;
    }

    DATA.recipes.forEach(recipe => {
      const isLearned = appState.learnedRecipes.includes(recipe.id);

      const row = document.createElement("tr");
      row.innerHTML = `
        <td style="font-weight: 700;">${recipe.name}</td>
        <td style="font-size: 0.85rem;">${recipe.categoryName}</td>
        <td>
          <span class="badge-status ${isLearned ? 'green' : 'red'}" id="prog-badge-${recipe.id}">
            ${isLearned ? 'Đã thuộc lòng' : 'Chưa thuộc'}
          </span>
        </td>
        <td>
          <button class="btn btn-secondary btn-toggle-learned-row" data-id="${recipe.id}" style="padding: 4px 10px; font-size: 0.75rem;">
            ${isLearned ? 'Hủy đánh dấu' : 'Đã thuộc'}
          </button>
        </td>
      `;

      row.querySelector(".btn-toggle-learned-row").addEventListener("click", (e) => {
        toggleRecipeLearned(recipe.id);
        updateLearningStats();
        updateDashboardStats();

        // Refresh row states in place
        const badge = document.getElementById(`prog-badge-${recipe.id}`);
        const btn = e.target;
        const nowLearned = appState.learnedRecipes.includes(recipe.id);

        if (badge) {
          badge.className = `badge-status ${nowLearned ? 'green' : 'red'}`;
          badge.innerText = nowLearned ? 'Đã thuộc lòng' : 'Chưa thuộc';
        }
        if (btn) {
          btn.innerText = nowLearned ? 'Hủy đánh dấu' : 'Đã thuộc';
        }
      });

      tbody.appendChild(row);
    });
  }
}
