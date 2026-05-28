const restaurants = [
    {
        title: "Naranj Restaurant",
        description: "مطعم شرقي فاخر يقع في دمشق القديمة، يشتهر بتقديم الأكل السوري والشرقي الأصيل مع أجواء رومانسية وتاريخية عريقة تناسب المجموعات والسياح.",
        cityId: "6a0aed01c0f4388a89553a0f", 
        location: {
            address: "باب شرقي، دمشق القديمة، سوريا",
            latitude: 33.50951832167416, 
            longitude: 36.311171699999996
        },
        cuisineType: "سوري وشرقي فاخر",
        images: [
            "/images/restaurants/naranj.jpg"
        ],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "10:15 AM", close: "2:30 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a20", // خيارات نباتية
            "6a0aed01c0f4388a89553a21"  // بار داخل المكان
        ]
    },
    {
        title: "مطعم حارتنا",
        description: "مطعم مميز يجمع بين المشاوي والأكل الشرقي والفيوجن، يتمتع بأجواء مريحة وعصرية ويمتاز بوجود أماكن جلوس في الهواء الطلق ومواقف سيارات مهيأة.",
        cityId: "6a0aed01c0f4388a89553a0f",
        location: {
            address: "دمشق، سوريا", 
            latitude: 33.51279237761873, 
            longitude: 36.31613634463177
        },
        cuisineType: "مشاوي وأكل شرقي وفيوجن",
        images: [
            "/images/restaurants/haretna.jpg"
        ],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Sunday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Tuesday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Wednesday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Thursday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Friday", open: "9:00 AM", close: "2:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "بيت ستي",
        description: "مطعم يتميز بأجواء شامية عريقة وطبخ بيتي أصيل، يحمل طابعاً تاريخياً ممتعاً وموسيقى حية تناسب العائلات والسياح والطلاب.",
        cityId: "6a0aed01c0f4388a89553a0f",
        location: {
            address: "جادة الصواف، دمشق، سوريا",
            latitude: 33.51075076440308, 
            longitude: 36.3082462427816
        },
        cuisineType: "أكلات شامية وطبخ بيتي",
        images: ["/images/restaurants/bayt_sitti.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "9:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a20"  // خيارات نباتية
        ]
    },
    {
        title: "مطعم ام شريف",
        description: "مطعم لبناني وشرقي فاخر يقع في فندق فورسيزونز دمشق، يقدم تجربة طعام راقية ومميزة وخدمة مائدة عالية المستوى.",
        cityId: "6a0aed01c0f4388a89553a0f",
        location: {
            address: "فندق فورسيزونز، دمشق، سوريا",
            latitude: 33.51395689417027, 
            longitude: 36.291021531138945
        },
        cuisineType: "لبناني وشرقي فاخر",
        images: ["/images/restaurants/em_sherif.jpg"],
        opening_hours: [
            { day: "Saturday", open: "12:30 PM", close: "11:30 PM" },
            { day: "Sunday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Monday", open: "12:30 PM", close: "11:30 PM" },
            { day: "Tuesday", open: "12:30 PM", close: "11:30 PM" },
            { day: "Wednesday", open: "12:30 PM", close: "11:30 PM" },
            { day: "Thursday", open: "12:30 PM", close: "11:30 PM" },
            { day: "Friday", open: "12:30 PM", close: "11:30 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "كارما كافيه",
        description: "كافيه هادئ وعصري يقدم تشكيلة رائعة من الحلويات والقهوة والوجبات الخفيفة، مريح ومناسب جداً للطلاب وللعمل على الكمبيوتر المحمول.",
        cityId: "6a0aed01c0f4388a89553a0f",
        location: {
            address: "دمشق، سوريا",
            latitude: 33.51895117423877,
            longitude: 36.286057617646065
        },
        cuisineType: "كافيه، حلويات، قهوة وأكلات خفيفة",
        images: ["/images/restaurants/karma_cafe.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "10:45 PM" },
            { day: "Sunday", open: "8:00 AM", close: "10:45 PM" },
            { day: "Monday", open: "8:00 AM", close: "10:45 PM" },
            { day: "Tuesday", open: "8:00 AM", close: "10:45 PM" },
            { day: "Wednesday", open: "8:00 AM", close: "10:45 PM" },
            { day: "Thursday", open: "8:00 AM", close: "10:45 PM" },
            { day: "Friday", open: "10:00 AM", close: "10:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
    {
        title: "Road House",
        description: "مطعم أمريكي عصري يقع في الشام سيتي سنتر (الطابق الثالث)، يشتهر بالبرغر والستيك ويوفر أماكن جلوس رائعة على السطح وقائمة مخصصة للأطفال.",
        cityId: "6a0aed01c0f4388a89553a0f",
        location: {
            address: "Cham City Center, 3rd floor",
            latitude: 33.500545291833696,
            longitude: 36.274004312095606
        },
        cuisineType: "برغر وستيك وأكل أمريكاني",
        images: ["/images/restaurants/road_house.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:00 AM", close: "11:55 PM" },
            { day: "Sunday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Monday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Tuesday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Wednesday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Thursday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Friday", open: "10:00 AM", close: "11:55 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e"  // أماكن جلوس في الهواء الطلق (على السطح)
        ]
    },
    {
        title: "مطعم سيفان",
        description: "مطعم شرقي مميز يقدم المشاوي والمأكولات الشرقية السريعة والخفيفة وسط أجواء هادئة وعالية المستوى مع جلسات في الهواء الطلق.",
        cityId: "6a0aed01c0f4388a89553a0f",
        location: {
            address: "دمشق، سوريا",
            latitude: 33.53220646019407, 
            longitude: 36.23430471764587
        },
        cuisineType: "مشاوي وأكل شرقي",
        images: ["/images/restaurants/sevan.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:00 AM", close: "2:00 AM" },
            { day: "Sunday", open: "10:00 AM", close: "2:00 AM" },
            { day: "Monday", open: "10:00 AM", close: "2:00 AM" },
            { day: "Tuesday", open: "10:00 AM", close: "2:00 AM" },
            { day: "Wednesday", open: "10:00 AM", close: "2:00 AM" },
            { day: "Thursday", open: "10:00 AM", close: "2:00 AM" },
            { day: "Friday", open: "10:00 AM", close: "2:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Gemini Cafe & Grill",
        description: "كافيه ومطعم مشويات عصري يجمع بين الإطلالة الجميلة والأجواء الرومانسية الدافئة، ويقدم طعاماً حلالاً ومأكولات في ساعات متأخرة من الليل مع مدخل مهيأ تماماً.",
        cityId: "6a0aed01c0f4388a89553a0f",
        location: {
            address: "الأمير عز الدين، دمشق، سوريا",
            latitude: 33.51748486694366, 
            longitude: 36.28700891764627
        },
        cuisineType: "كافيه ومشاوي (Grill)",
        images: ["/images/restaurants/gemini.jpg"],
        opening_hours: [
            { day: "Saturday", open: "1:30 PM", close: "12:00 AM" },
            { day: "Sunday", open: "1:30 PM", close: "12:00 AM" },
            { day: "Monday", open: "1:30 PM", close: "12:00 AM" },
            { day: "Tuesday", open: "1:30 PM", close: "12:00 AM" },
            { day: "Wednesday", open: "1:30 PM", close: "12:00 AM" },
            { day: "Thursday", open: "1:30 PM", close: "12:00 AM" },
            { day: "Friday", open: "1:30 PM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Chevaliers",
        description: "مكان هادئ ومريح يقدم خيارات طعام حلال سريعة ومميزة ضمن أجواء بسيطة ومناسبة للزيارات السريعة في دمشق.",
        cityId: "6a0aed01c0f4388a89553a0f",
        location: {
            address: "دمشق، سوريا",
            latitude: 33.51982305081617, 
            longitude: 36.2816780869601
        },
        cuisineType: "وجبات خفيفة وسريعة",
        images: ["/images/restaurants/chevaliers.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "9:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "سلطان الشرق",
        description: "مطعم وجبات سريعة وعصرية يتميز بتوفر مواقف مجانية كثيرة للسيارات، وأجوائه الخفيفة والمريحة المناسبة للمجموعات والسياح.",
        cityId: "6a0aed01c0f4388a89553a0f",
        location: {
            address: "دمشق، سوريا ",
            latitude: 33.52552920923659,
            longitude: 36.31001625926586
        },
        cuisineType: "مطعم وجبات سريعة وخفيفة",
        images: ["/images/restaurants/soltan_elsharq.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "10:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
//latakiaaaaaaaaaaaaa
// ================= مطاعم اللاذقية =================
    {
        title: "Pizzeria Al-Kabbas",
        description: "مطعم بيتزا ووجبات سريعة شهير في اللاذقية، يقدم أجوءاً عصرية ومريحة تناسب المجموعات والطلاب، ويشتهر بمأكولاته المتنوعة في الساعات المتأخرة من الليل.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "اللاذقية، سوريا",
            latitude: 35.51799203152075,
            longitude: 35.776469586906764
        },
        cuisineType: "بيتزا ووجبات سريعة",
        images: ["/images/restaurants/pizzeria_al_kabbas.jpg"],
        opening_hours: [
            { day: "Saturday", open: "1:00 PM", close: "1:00 AM" },
            { day: "Sunday", open: "1:00 PM", close: "1:00 AM" },
            { day: "Monday", open: "1:00 PM", close: "1:00 AM" },
            { day: "Tuesday", open: "1:00 PM", close: "1:00 AM" },
            { day: "Wednesday", open: "1:00 PM", close: "1:00 AM" },
            { day: "Thursday", open: "1:00 PM", close: "1:00 AM" },
            { day: "Friday", open: "7:00 PM", close: "1:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a21"  // بار داخل المكان
        ]
    },
    {
        title: "Elite Restaurant",
        description: "مطعم راقٍ ومميز في اللاذقية يجمع بين المأكولات السريعة والوجبات الخفيفة والحلويات وسط أجواء هادئة وعالية المستوى تناسب السياح والمجموعات.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "اللاذقية، سوريا",
            latitude: 35.52261518182696,
            longitude: 35.79473978875707
        },
        cuisineType: "وجبات غربية وسريعة وخفيفة",
        images: ["/images/restaurants/elite_restaurant.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "10:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a21"  // بار داخل المكان
        ]
    },
    {
        title: "Mr llama",
        description: "كافيه عصري ومريح يقدم تشكيلة شاي وحلويات رائعة، ويمتاز بأماكن جلوس مريحة في الهواء الطلق هادئة ومناسبة لطلاب الجامعة.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "شارع خالد بن الوليد، اللاذقية، سوريا",
            latitude: 35.525596822642294, // تم تصحيح صياغة الفاصلة البسيطة بالرقم
            longitude: 35.79655771759274
        },
        cuisineType: "كافيه وحلويات ووجبات خفيفة",
        images: ["/images/restaurants/mr_llama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:30 AM", close: "1:30 AM" },
            { day: "Sunday", open: "10:30 AM", close: "1:30 AM" },
            { day: "Monday", open: "10:30 AM", close: "1:30 AM" },
            { day: "Tuesday", open: "10:30 AM", close: "1:30 AM" },
            { day: "Wednesday", open: "10:30 AM", close: "1:30 AM" },
            { day: "Thursday", open: "10:30 AM", close: "1:30 AM" },
            { day: "Friday", open: "10:30 AM", close: "1:30 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم (كافيه ومطعم وجبات خفيفة)
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e"  // أماكن جلوس في الهواء الطلق
        ]
    },
    {
        title: " Alhomsani Restaurant",
        description: "مطعم وجبات خفيفة وشعبية شهير يقدم خيارات فطور وعشاء ممتازة، يتميز بأماكن جلوس في الهواء الطلق صالحة ومريحة تماماً للكراسي المتحركة.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "اللاذقية، سوريا",
            latitude: 35.521667566160595,
            longitude: 35.79961375807093
        },
        cuisineType: "فول وحمص ووجبات خفيفة",
        images: ["/images/restaurants/al_homsani.jpg"],
        opening_hours: [
            { day: "Saturday", open: "6:00 AM", close: "11:00 PM" },
            { day: "Sunday", open: "6:00 AM", close: "11:00 PM" },
            { day: "Monday", open: "6:00 AM", close: "11:00 PM" },
            { day: "Tuesday", open: "6:00 AM", close: "11:00 PM" },
            { day: "Wednesday", open: "6:00 AM", close: "11:00 PM" },
            { day: "Thursday", open: "6:00 AM", close: "11:00 PM" },
            { day: "Friday", open: "6:00 AM", close: "11:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Sheizar",
        description: "مطعم وجبات سريعة يعمل على مدار 24 ساعة بدون توقف، يقدم طعاماً حلالاً ومأكولات خفيفة في الساعات المتأخرة من الليل، وهو خيار رائع للطلاب.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "اللاذقية، سوريا",
            latitude: 35.517299198328615,
            longitude: 35.78939080224985
        },
        cuisineType: "وجبات سريعة خفيفة",
        images: ["/images/restaurants/shaizar.jpg"],
        opening_hours: [
            { day: "Saturday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Sunday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Monday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Tuesday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Wednesday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Thursday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Friday", open: "12:00 AM", close: "11:59 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Somar Restaurant",
        description: "من أرقى مطاعم اللاذقية، يتميز بجلسات على السطح (Roof) ومدفأة شتوية، ومجهز بالكامل لاستقبال العائلات وأعياد ميلاد الأطفال ومستخدمي الكراسي المتحركة.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "اللاذقية، سوريا",
            latitude: 35.50218020599916,
            longitude: 35.78181565622116
        },
        cuisineType: "شرقي وغربي فاخر ومشاوي",
        images: ["/images/restaurants/somer_restaurant.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "11:55 PM" },
            { day: "Sunday", open: "8:00 AM", close: "11:55 PM" },
            { day: "Monday", open: "8:00 AM", close: "11:55 PM" },
            { day: "Tuesday", open: "8:00 AM", close: "11:55 PM" },
            { day: "Wednesday", open: "8:00 AM", close: "11:55 PM" },
            { day: "Thursday", open: "8:00 AM", close: "11:55 PM" },
            { day: "Friday", open: "8:00 AM", close: "11:55 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق (جلسات السطح)
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a20"  // خيارات نباتية
        ]
    },
    {
        title: "Aljgnon Restaurant",
        description: "مطعم عالي المستوى يقع على السطح ويقدم عروضاً للموسيقى الحية، يجمع بين الأجواء الرومانسية الدافئة والخدمة الممتازة مع توفر بار ومواقف مجانية.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "اللاذقية، سوريا",
            latitude: 35.50089720976627,
            longitude: 35.77543095012983
        },
        cuisineType: "غربي وفيوجن ومشويات فاخرة",
        images: ["/images/restaurants/aljgnon.jpg"],
        opening_hours: [
            { day: "Saturday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Sunday", open: "12:00 AM", close: "12:00 PM" },
            { day: "Monday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Tuesday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Wednesday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Thursday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Friday", open: "12:00 AM", close: "11:59 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق (على السطح)
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a21"  // بار داخل المكان
        ]
    },
    {
        title: "Sahtain",
        description: "مطعم وجبات سريعة بسيط وسريع، ممتاز للعشاء الفردي وتناول مأكولات خفيفة في الساعات المتأخرة من الليل وحتى الفجر.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "اللاذقية، سوريا",
            latitude: 35.510967180165,
            longitude: 35.779787646428964
        },
        cuisineType: "مطعم وجبات سريعة خفيفة",
        images: ["/images/restaurants/sahtain.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:55 AM", close: "4:00 AM" },
            { day: "Sunday", open: "10:55 AM", close: "4:00 AM" },
            { day: "Monday", open: "10:55 AM", close: "4:00 AM" },
            { day: "Tuesday", open: "10:55 AM", close: "4:00 AM" },
            { day: "Wednesday", open: "10:55 AM", close: "4:00 AM" },
            { day: "Thursday", open: "10:55 AM", close: "4:00 AM" },
            { day: "Friday", open: "10:55 AM", close: "4:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
    {
        title: "DAJAJATI",
        description: "مطعم مريح وهادئ متخصص في تقديم وجبات الفروج والطعام الحلال الخفيف، مناسب جداً للسياح والعائات مع الأطفال.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "اللاذقية، سوريا",
            latitude: 35.519479952450766,
            longitude: 35.797156902249796
        },
        cuisineType: "وجبات دجاج وسريعة حلال",
        images: ["/images/restaurants/dajajati.jpg"],
        opening_hours: [
            { day: "Saturday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Sunday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Monday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Tuesday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Wednesday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Thursday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Friday", open: "12:00 AM", close: "11:59 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "French Cock",
        description: "مطعم وجبات سريعة خفيف وعصري، يوفر خدمة التوصيل السريع ويحتوي على قائمة طعام مخصصة ومناسبة جداً للأطفال مع مدخل ومواقف صالحة للكراسي المتحركة.",
        cityId: "6a0aed01c0f4388a89553a14",
        location: {
            address: "اللاذقية، سوريا",
            latitude: 35.51740606543391,
            longitude: 35.776010773414015
        },
        cuisineType: "وجبات سريعة خفيفة",
        images: ["/images/restaurants/french_cock.jpg"],
        opening_hours: [
            { day: "Saturday", open: "11:30 AM", close: "11:30 PM" },
            { day: "Sunday", open: "11:30 AM", close: "11:30 PM" },
            { day: "Monday", open: "11:30 AM", close: "11:30 PM" },
            { day: "Tuesday", open: "11:30 AM", close: "11:30 PM" },
            { day: "Wednesday", open: "11:30 AM", close: "11:30 PM" },
            { day: "Thursday", open: "11:30 AM", close: "11:30 PM" },
            { day: "Friday", open: "11:30 AM", close: "11:30 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
// ================= مطاعم حلب =================
    {
        title: "Cordoba Restaurant",
        description: "من أعرق مطاعم حلب، يقدم تجربة طعام شرقية مميزة ومأكولات سريعة وخفيفة مع ميزة الموسيقى الحية وأماكن جلوس رائعة في الهواء الطلق تناسب المجموعات والسياح.",
        cityId: "6a0aed01c0f4388a89553a10",
        location: {
            address: "حلب، سوريا",
            latitude: 36.21139160996521,
            longitude: 37.15067120223026
        },
        cuisineType: "شرقي ومأكولات سريعة",
        images: ["/images/restaurants/cordoba_aleppo.jpg"],
        opening_hours: [
            { day: "Saturday", open: "2:00 PM", close: "12:00 AM" },
            { day: "Sunday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Monday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Tuesday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Wednesday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Thursday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Friday", open: "12:00 PM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a21"  // بار داخل المكان
        ]
    },
    {
        title: "Grand Station",
        description: "مطعم عالي المستوى ومميز في حلب، يحتوي على مدفأة دافئة وقائمة طعام غنية بالوجبات السريعة والخفيفة، ومجهز بالكامل لاستقبال مستخدمي الكراسي المتحركة ولأعياد ميلاد الأطفال.",
        cityId: "6a0aed01c0f4388a89553a10",
        location: {
            address: "حلب، سوريا",
            latitude: 36.210562740092065,
            longitude: 37.142492807126764
        },
        cuisineType: "وجبات غربية وسريعة وخفيفة",
        images: ["/images/restaurants/grand_station.jpg"],
        opening_hours: [
            { day: "Saturday", open: "12:00 AM", close: "11:59 PM" },
            { day: "Sunday", open: "12:00 PM", close: "11:30 PM" },
            { day: "Monday", open: "12:00 PM", close: "11:30 PM" },
            { day: "Tuesday", open: "12:00 PM", close: "11:30 PM" },
            { day: "Wednesday", open: "12:00 PM", close: "11:30 PM" },
            { day: "Thursday", open: "12:00 PM", close: "11:30 PM" },
            { day: "Friday", open: "12:00 PM", close: "11:30 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Al Attar Restaurant and Cafe",
        description: "مطعم ومقهى راقٍ يحمل طابعاً تاريخياً مميزاً يعكس أصالة مدينة حلب، يقدم وجبات سريعة وخفيفة وتشكيلة شاي رائعة وسط أجواء مريحة وعصرية للطلاب والسياح.",
        cityId: "6a0aed01c0f4388a89553a10",
        location: {
            address: "حلب، سوريا",
            latitude: 36.19806955538949,
            longitude: 37.16104258503776
        },
        cuisineType: "مأكولات حلبية ووجبات خفيفة وكافيه",
        images: ["/images/restaurants/al_attar.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "2:00 AM" },
            { day: "Sunday", open: "8:00 AM", close: "2:00 AM" },
            { day: "Monday", open: "8:00 AM", close: "2:00 AM" },
            { day: "Tuesday", open: "8:00 AM", close: "2:00 AM" },
            { day: "Wednesday", open: "8:00 AM", close: "2:00 AM" },
            { day: "Thursday", open: "8:00 AM", close: "2:00 AM" },
            { day: "Friday", open: "8:00 AM", close: "2:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Beroea Restaurant",
        description: "مطعم وجبات سريعة مريح وهادئ في حلب، يقدم طعاماً حلالاً ومأكولات خفيفة مناسبة للغداء والعشاء الفردي والزيارات السريعة من المجموعات والطلاب.",
        cityId: "6a0aed01c0f4388a89553a10",
        location: {
            address: "حلب، سوريا",
            latitude: 36.201263770476615,
            longitude: 37.163105905186875
        },
        cuisineType: "وجبات سريعة وخفيفة",
        images: ["/images/restaurants/beroea_restaurant.jpg"],
        opening_hours: [
            { day: "Saturday", open: "11:00 AM", close: "2:00 AM" },
            { day: "Sunday", open: "11:00 AM", close: "2:00 AM" },
            { day: "Monday", open: "11:00 AM", close: "2:00 AM" },
            { day: "Tuesday", open: "11:00 AM", close: "2:00 AM" },
            { day: "Wednesday", open: "11:00 AM", close: "2:00 AM" },
            { day: "Thursday", open: "11:00 AM", close: "3:00 AM" },
            { day: "Friday", open: "11:00 AM", close: "3:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Cafe de Paris (كافيه دي باري)",
        description: "مقهى ومطعم عصري وهادئ في منطقة العزيزية بحلب، يشتهر بتشكيلة الشاي والقهوة الرائعة وسط أجواء مريحة وممتازة جداً لطلاب الجامعة والسياح.",
        cityId: "6a0aed01c0f4388a89553a10",
        location: {
            address: "العزيزية، حلب، سوريا",
            latitude: 36.21152266161583,
            longitude: 37.152768286887714
        },
        cuisineType: "مقهى ووجبات خفيفة غربية",
        images: ["/images/restaurants/cafe_de_paris_aleppo.jpg"],
        opening_hours: [
            { day: "Saturday", open: "2:00 PM", close: "11:00 PM" },
            { day: "Sunday", open: "2:00 PM", close: "11:00 PM" },
            { day: "Monday", open: "2:00 PM", close: "11:00 PM" },
            { day: "Tuesday", open: "2:00 PM", close: "11:00 PM" },
            { day: "Wednesday", open: "2:00 PM", close: "11:00 PM" },
            { day: "Thursday", open: "2:00 PM", close: "11:00 PM" },
            { day: "Friday", open: "2:00 PM", close: "11:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
    // ================= مطاعم حمص =================
        {
            title: "Cordoba Restaurant",
            description: "من أعرق مطاعم حلب، يقدم تجربة طعام شرقية مميزة ومأكولات سريعة وخفيفة مع ميزة الموسيقى الحية وأماكن جلوس رائعة في الهواء الطلق تناسب المجموعات والسياح.",
            cityId: "6a0aed01c0f4388a89553a10",
            location: {
                address: "حلب، سوريا",
                latitude: 36.21139160996521,
                longitude: 37.15067120223026
            },
            cuisineType: "شرقي ومأكولات سريعة",
            images: ["/images/restaurants/cordoba_aleppo.jpg"],
            opening_hours: [
                { day: "Saturday", open: "2:00 PM", close: "12:00 AM" },
                { day: "Sunday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Monday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Tuesday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Wednesday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Thursday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Friday", open: "12:00 PM", close: "12:00 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
                "6a0aed01c0f4388a89553a1f", // طعام حلال
                "6a0aed01c0f4388a89553a21"  // بار داخل المكان
            ]
        },
        {
            title: "Grand Station",
            description: "مطعم عالي المستوى ومميز في حلب، يحتوي على مدفأة دافئة وقائمة طعام غنية بالوجبات السريعة والخفيفة، ومجهز بالكامل لاستقبال مستخدمي الكراسي المتحركة ولأعياد ميلاد الأطفال.",
            cityId: "6a0aed01c0f4388a89553a10",
            location: {
                address: "حلب، سوريا",
                latitude: 36.210562740092065,
                longitude: 37.142492807126764
            },
            cuisineType: "وجبات غربية وسريعة وخفيفة",
            images: ["/images/restaurants/grand_station.jpg"],
            opening_hours: [
                { day: "Saturday", open: "12:00 AM", close: "11:59 PM" },
                { day: "Sunday", open: "12:00 PM", close: "11:30 PM" },
                { day: "Monday", open: "12:00 PM", close: "11:30 PM" },
                { day: "Tuesday", open: "12:00 PM", close: "11:30 PM" },
                { day: "Wednesday", open: "12:00 PM", close: "11:30 PM" },
                { day: "Thursday", open: "12:00 PM", close: "11:30 PM" },
                { day: "Friday", open: "12:00 PM", close: "11:30 PM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1f"  // طعام حلال
            ]
        },
        {
            title: "Al Attar Restaurant and Cafe",
            description: "مطعم ومقهى راقٍ يحمل طابعاً تاريخياً مميزاً يعكس أصالة مدينة حلب، يقدم وجبات سريعة وخفيفة وتشكيلة شاي رائعة وسط أجواء مريحة وعصرية للطلاب والسياح.",
            cityId: "6a0aed01c0f4388a89553a10",
            location: {
                address: "حلب، سوريا",
                latitude: 36.19806955538949,
                longitude: 37.16104258503776
            },
            cuisineType: "مأكولات حلبية ووجبات خفيفة وكافيه",
            images: ["/images/restaurants/al_attar.jpg"],
            opening_hours: [
                { day: "Saturday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Sunday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Monday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Tuesday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Wednesday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Thursday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Friday", open: "8:00 AM", close: "2:00 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1f"  // طعام حلال
            ]
        },
        {
            title: "Beroea Restaurant",
            description: "مطعم وجبات سريعة مريح وهادئ في حلب، يقدم طعاماً حلالاً ومأكولات خفيفة مناسبة للغداء والعشاء الفردي والزيارات السريعة من المجموعات والطلاب.",
            cityId: "6a0aed01c0f4388a89553a10",
            location: {
                address: "حلب، سوريا",
                latitude: 36.201263770476615,
                longitude: 37.163105905186875
            },
            cuisineType: "وجبات سريعة وخفيفة",
            images: ["/images/restaurants/beroea_restaurant.jpg"],
            opening_hours: [
                { day: "Saturday", open: "11:00 AM", close: "2:00 AM" },
                { day: "Sunday", open: "11:00 AM", close: "2:00 AM" },
                { day: "Monday", open: "11:00 AM", close: "2:00 AM" },
                { day: "Tuesday", open: "11:00 AM", close: "2:00 AM" },
                { day: "Wednesday", open: "11:00 AM", close: "2:00 AM" },
                { day: "Thursday", open: "11:00 AM", close: "3:00 AM" },
                { day: "Friday", open: "11:00 AM", close: "3:00 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1f"  // طعام حلال
            ]
        },
        {
            title: "Cafe de Paris (كافيه دي باري)",
            description: "مقهى ومطعم عصري وهادئ في منطقة العزيزية بحلب، يشتهر بتشكيلة الشاي والقهوة الرائعة وسط أجواء مريحة وممتازة جداً لطلاب الجامعة والسياح.",
            cityId: "6a0aed01c0f4388a89553a10",
            location: {
                address: "العزيزية، حلب، سوريا",
                latitude: 36.21152266161583,
                longitude: 37.152768286887714
            },
            cuisineType: "مقهى ووجبات خفيفة غربية",
            images: ["/images/restaurants/cafe_de_paris_aleppo.jpg"],
            opening_hours: [
                { day: "Saturday", open: "2:00 PM", close: "11:00 PM" },
                { day: "Sunday", open: "2:00 PM", close: "11:00 PM" },
                { day: "Monday", open: "2:00 PM", close: "11:00 PM" },
                { day: "Tuesday", open: "2:00 PM", close: "11:00 PM" },
                { day: "Wednesday", open: "2:00 PM", close: "11:00 PM" },
                { day: "Thursday", open: "2:00 PM", close: "11:00 PM" },
                { day: "Friday", open: "2:00 PM", close: "11:00 PM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
            ]
        },
    ///homs//////
        {
            title: "مطعم البرنس",
            description: "مطعم وجبات سريعة عصري ومميز في حمص، يشتهر بتقديم وجبات الغداء والعشاء السريعة والخفيفة، ويعد مقصداً رائعاً للسياح والمجموعات.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.73054276326461,
                longitude: 36.71025668877856
            },
            cuisineType: "وجبات سريعة وخفيفة",
            images: ["/images/restaurants/al_prince_homs.jpg"],
            opening_hours: [
                { day: "Saturday", open: "10:00 AM", close: "11:30 PM" },
                { day: "Sunday", open: "10:00 AM", close: "11:30 PM" },
                { day: "Monday", open: "10:00 AM", close: "11:30 PM" },
                { day: "Tuesday", open: "10:00 AM", close: "11:30 PM" },
                { day: "Wednesday", open: "10:00 AM", close: "11:30 PM" },
                { day: "Thursday", open: "10:00 AM", close: "11:30 PM" },
                { day: "Friday", open: "10:00 AM", close: "11:30 PM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1f"  // طعام حلال
            ]
        },
        {
            title: "مطعم مزايا",
            description: "من مطاعم الوجبات السريعة المميزة في حمص, يوفر خدمة التوصيل ويشتهر بتقديم مأكولات في ساعات متأخرة من الليل وسط أجواء مريحة وعصرية تناسب الطلاب والعائلات.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.731176265861215,
                longitude: 36.70383394645001
            },
            cuisineType: "وجبات سريعة ومأكولات متأخرة",
            images: ["/images/restaurants/mazaya_homs.jpg"],
            opening_hours: [
                { day: "Saturday", open: "9:00 AM", close: "12:00 AM" },
                { day: "Sunday", open: "9:00 AM", close: "12:30 AM" },
                { day: "Monday", open: "9:00 AM", close: "1:00 AM" },
                { day: "Tuesday", open: "9:00 AM", close: "1:00 AM" },
                { day: "Wednesday", open: "9:00 AM", close: "1:00 AM" },
                { day: "Thursday", open: "9:00 AM", close: "1:00 AM" },
                { day: "Friday", open: "9:00 AM", close: "12:30 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1f"  // طعام حلال
            ]
        },
        {
            title: "Max Potato",
            description: "مطعم وجبات سريعة متخصص ومحبوب، يقدم خيارات شهية وسريعة ممتازة للغداء والعشاء الفردي، ويوفر خدمة التوصيل ومناسب جداً للأطفال.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.73190002554607,
                longitude: 36.712122086928105
            },
            cuisineType: "وجبات سريعة وبطاطا مميزة",
            images: ["/images/restaurants/max_potato_homs.jpg"],
            opening_hours: [
                { day: "Saturday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Sunday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Monday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Tuesday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Wednesday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Thursday", open: "12:00 PM", close: "12:00 AM" },
                { day: "Friday", open: "12:00 PM", close: "12:00 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
            ]
        },
        {
            title: "مقهى تويكسي",
            description: "مقهى عصري وحيوي في حمص يمتاز بجلسات خارجية رائعة وموسيقى حية وعروض مباشرة، ويعد مكاناً مثالياً ومريحاً جداً للطلاب وللعمل على الكمبيوتر المحمول.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.735544384017416,
                longitude: 36.70085887343521
            },
            cuisineType: "مقهى وحلويات ووجبات خفيفة",
            images: ["/images/restaurants/twixy_cafe.jpg"],
            opening_hours: [
                { day: "Saturday", open: "9:00 AM", close: "12:00 AM" },
                { day: "Sunday", open: "9:00 AM", close: "12:00 AM" },
                { day: "Monday", open: "9:00 AM", close: "12:00 AM" },
                { day: "Tuesday", open: "9:00 AM", close: "12:00 AM" },
                { day: "Wednesday", open: "9:00 AM", close: "12:00 AM" },
                { day: "Thursday", open: "9:00 AM", close: "12:00 AM" },
                { day: "Friday", open: "12:00 PM", close: "11:00 PM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم (كافيه ومطعم وجبات خفيفة)
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1e"  // أماكن جلوس في الهواء الطلق
            ]
        },
        {
            title: "Al Shorfah (الشرفة)",
            description: "مطعم راقٍ وعالي المستوى في حمص مجهز بالكامل لاستقبال مستخدمي الكراسي المتحركة، يمتاز بجلسات هادئة ورومانسية في الهواء الطلق مع مدفأة دافئة وموسيقى حية مميزة.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.7320,
                longitude: 36.7110
            },
            cuisineType: "شرقي وغربي فاخر وكافيه",
            images: ["/images/restaurants/al_shorfah_homs.jpg"],
            opening_hours: [
                { day: "Saturday", open: "11:00 AM", close: "12:00 AM" },
                { day: "Sunday", open: "11:00 AM", close: "12:00 AM" },
                { day: "Monday", open: "11:00 AM", close: "12:00 AM" },
                { day: "Tuesday", open: "11:00 AM", close: "12:00 AM" },
                { day: "Wednesday", open: "11:00 AM", close: "12:00 AM" },
                { day: "Thursday", open: "11:00 AM", close: "12:00 AM" },
                { day: "Friday", open: "11:00 AM", close: "12:00 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
                "6a0aed01c0f4388a89553a1f"  // طعام حلال
            ]
        },
        {
            title: "مطعم بيت الياسمين",
            description: "مطعم ذو طابع رومانسي وعالي المستوى في حمص، يقدم تشكيلة غنية من الوجبات الشرقية والغربية الفاخرة وتشكيلة مشروبات رائعة وسط أجواء مريحة وهادئة.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.708487492837996,
                longitude: 36.72015783643245
            },
            cuisineType: "شرقي وغربي فاخر",
            images: ["/images/restaurants/beit_al_yasmin.jpg"],
            opening_hours: [
                { day: "Saturday", open: "10:00 AM", close: "2:00 AM" },
                { day: "Sunday", open: "10:00 AM", close: "2:00 AM" },
                { day: "Monday", open: "10:00 AM", close: "2:00 AM" },
                { day: "Tuesday", open: "10:00 AM", close: "2:00 AM" },
                { day: "Wednesday", open: "10:00 AM", close: "2:00 AM" },
                { day: "Thursday", open: "10:00 AM", close: "2:00 AM" },
                { day: "Friday", open: "10:00 AM", close: "2:00 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1f"  // طعام حلال
            ]
        },
        {
            title: "L'ETO CAFE",
            description: "مقهى ومطعم عصري هادئ وخفيف في حمص، يتميز بتقديم قهوة رائعة وتشكيلة واسعة من الحلويات والوجبات الخفيفة المناسبة للفطور والطلاب والسياح.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.73059591319912,
                longitude: 36.69923997983732
            },
            cuisineType: "مقهى وحلويات وغربي",
            images: ["/images/restaurants/leto_cafe_homs.jpg"],
            opening_hours: [
                { day: "Saturday", open: "9:30 AM", close: "12:00 AM" },
                { day: "Sunday", open: "9:30 AM", close: "12:00 AM" },
                { day: "Monday", open: "9:30 AM", close: "12:00 AM" },
                { day: "Tuesday", open: "9:30 AM", close: "12:00 AM" },
                { day: "Wednesday", open: "9:30 AM", close: "12:00 AM" },
                { day: "Thursday", open: "9:30 AM", close: "12:00 AM" },
                { day: "Friday", open: "9:30 AM", close: "12:00 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
            ]
        },
        {
            title: "فلافل البتول",
            description: "من أشهر محلات الفطور الشعبية السريعة في حمص، يقدم سندويش وجبات الفلافل الساخنة بطعمها الأصيل وخيارات سفري مريحة جداً وسريعة.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.7307369912498,
                longitude: 36.70026994807062
            },
            cuisineType: "فطور شعبي وفلافل",
            images: ["/images/restaurants/falafel_al_batoul.jpg"],
            opening_hours: [
                { day: "Saturday", open: "7:30 AM", close: "11:30 PM" },
                { day: "Sunday", open: "7:30 AM", close: "11:30 PM" },
                { day: "Monday", open: "7:30 AM", close: "11:30 PM" },
                { day: "Tuesday", open: "7:30 AM", close: "11:30 PM" },
                { day: "Wednesday", open: "7:30 AM", close: "11:30 PM" },
                { day: "Thursday", open: "7:30 AM", close: "11:30 PM" },
                { day: "Friday", open: "7:30 AM", close: "11:30 PM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c"  // طعام سفري (الجلوس داخل المكان غير متاح غالباً بمحلات الفلافل الصغيرة)
            ]
        },
        {
            title: "مطعم اميسا غاردن",
            description: "مطعم وحديقة عصرية واسعة ومريحة في حمص، يمتلك مواقف سيارات كثيرة ومجانية، ويشتهر بتقديم مأكولات وجبات سريعة وقهوة رائعة حتى ساعات متأخرة.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.751353260721324,
                longitude: 36.69987950052579
            },
            cuisineType: "وجبات غربية وسريعة وكافيه",
            images: ["/images/restaurants/emesa_garden.jpg"],
            opening_hours: [
                { day: "Saturday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Sunday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Monday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Tuesday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Wednesday", open: "8:00 AM", close: "2:00 AM" },
                { day: "Thursday", open: "8:00 AM", close: "3:00 AM" },
                { day: "Friday", open: "1:00 PM", close: "3:00 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1e"  // أماكن جلوس في الهواء الطلق (غاردن)
            ]
        },
        {
            title: "سكيزو برغر",
            description: "مطعم برغر عصري ومميز جداً لعشاق الوجبات السريعة في حمص، يقدم برغر حلال شهي ومأكولات خفيفة وسط أجواء شبابية مريحة وممتعة للمجموعات والسياح.",
            cityId: "6a0aed01c0f4388a89553a11",
            location: {
                address: "حمص، سوريا",
                latitude: 34.728674822319,
                longitude: 36.703475546554934
            },
            cuisineType: "برغر ووجبات سريعة غريبة",
            images: ["/images/restaurants/schizo_burger_homs.jpg"],
            opening_hours: [
                { day: "Saturday", open: "1:00 PM", close: "1:00 AM" },
                { day: "Sunday", open: "1:00 PM", close: "1:00 AM" },
                { day: "Monday", open: "1:00 PM", close: "1:00 AM" },
                { day: "Tuesday", open: "1:00 PM", close: "1:00 AM" },
                { day: "Wednesday", open: "1:00 PM", close: "1:00 AM" },
                { day: "Thursday", open: "1:00 PM", close: "1:00 AM" },
                { day: "Friday", open: "2:00 PM", close: "1:00 AM" }
            ],
            amenities: [
                "6a0aed01c0f4388a89553a28", // مطعم
                "6a0aed01c0f4388a89553a1c", // طعام سفري
                "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
                "6a0aed01c0f4388a89553a1f"  // طعام حلال
            ]
        }
,
// ================= مطاعم حماة =================
    {
        title: "فالي كافيه (Valley Cafe)",
        description: "كافيه ومطعم راقٍ ومميز بأماكن جلوس في الهواء الطلق وموسيقى حية، يقدم تشكيلة شاي وحلويات رائعة مع خيارات نباتية وحلال، وهو ملتقى مفضل لطلاب الجامعة.",
        cityId: "6a0aed01c0f4388a89553a12",
        location: {
            address: "حماة، سوريا",
            latitude: 35.12600463054754,
            longitude: 36.77700598876788
        },
        cuisineType: "كافيه وحلويات ووجبات خفيفة",
        images: ["/images/restaurants/valley_cafe_hama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Sunday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Monday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Wednesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Thursday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Friday", open: "9:00 AM", close: "11:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // 
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a20"  // خيارات نباتية
        ]
    },
    {
        title: "Qaitaz Restaurants (مطاعم قيطاز)",
        description: "من أعرق مطاعم الوجبات السريعة في حماة، يقدم خدمة التوصيل ويشتهر بتقديم الحلويات ومأكولات الساعات المتأخرة من الليل في أجواء شعبية خفيفة وحيوية.",
        cityId: "6a0aed01c0f4388a89553a12",
        location: {
            address: "حماة، سوريا",
            latitude: 35.131888965217165,
            longitude: 36.7393126310961
        },
        cuisineType: "وجبات سريعة وحلويات",
        images: ["/images/restaurants/qaitaz_hama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "12:30 AM" },
            { day: "Sunday", open: "8:00 AM", close: "12:30 AM" },
            { day: "Monday", open: "8:00 AM", close: "12:30 AM" },
            { day: "Tuesday", open: "8:00 AM", close: "12:30 AM" },
            { day: "Wednesday", open: "8:00 AM", close: "12:30 AM" },
            { day: "Thursday", open: "8:00 AM", close: "12:30 AM" },
            { day: "Friday", open: "8:00 AM", close: "12:30 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
    {
        title: "مطعم أسبازيا",
        description: "مطعم وكافيه ذو طابع تاريخي ورومانسي عالي المستوى، يقدم وجبات شرقية وغربية فاخرة مع تشكيلة كوكتيلات وحلويات رائعة بجانب مدفأة دافئة وجلسات خارجية ساحرة.",
        cityId: "6a0aed01c0f4388a89553a12",
        location: {
            address: "حماة القديمة، حماة، سوريا",
            latitude: 35.1348770795015,
            longitude: 36.75340006130854
        },
        cuisineType: "شرقي وغربي فاخر وكافيه تاريخي",
        images: ["/images/restaurants/aspasia_hama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "11:45 PM" },
            { day: "Sunday", open: "9:00 AM", close: "11:45 PM" },
            { day: "Monday", open: "9:00 AM", close: "11:45 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "11:45 PM" },
            { day: "Wednesday", open: "9:00 AM", close: "11:45 PM" },
            { day: "Thursday", open: "9:00 AM", close: "11:45 PM" },
            { day: "Friday", open: "9:00 AM", close: "11:45 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a20"  // خيارات نباتية
        ]
    },
    {
        title: "مطعم دريم العائلي",
        description: "مطعم عائلي عصري هادئ ومريح في قلب حماة، يركز على تقديم وجبات الغداء والعشاء الشرقية الخفيفة والحلال وسط أجواء مناسبة تماماً للعائلات والمجموعات السياحية.",
        cityId: "6a0aed01c0f4388a89553a12",
        location: {
            address: "حماة، سوريا",
            latitude: 35.1386673753052,
            longitude: 36.74576113024491
        },
        cuisineType: "شرقي ووجبات خفيفة عائلية",
        images: ["/images/restaurants/dream_family_hama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Sunday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Monday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Wednesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Thursday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Friday", open: "9:00 AM", close: "11:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "مطعم بيت ورد",
        description: "يمتاز بأجواء عصرية وهادئة مع جلسات خارجية ومشروبات كوكتيل وحلويات رائعة، يقدم وجبات سريعة وخفيفة حلال مع قائمة مخصصة للأطفال ومواقف مجانية.",
        cityId: "6a0aed01c0f4388a89553a12",
        location: {
            address: "حماة، سوريا",
            latitude: 35.128698262358306,
            longitude: 36.764711423795994
        },
        cuisineType: "غربي وكافيه وحلويات",
        images: ["/images/restaurants/beit_ward_hama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "9:00 AM", close: "9:45 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "9:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "9:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "The Hook Restaurant",
        description: "مطعم وجبات غربية خفيفة وعصري جداً، يفتح حتى ساعات متأخرة من الليل (3 صباحاً)، ويمتاز بأجواء شبابية مريحة وممتازة لخدمة المائدة الفردية والمجموعات.",
        cityId: "6a0aed01c0f4388a89553a12",
        location: {
            address: "حماة، سوريا",
            latitude: 35.1244160947542,
            longitude: 36.75775913822123
        },
        cuisineType: "وجبات سريعة وغربية خفيفة",
        images: ["/images/restaurants/the_hook_hama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "3:00 AM" },
            { day: "Sunday", open: "9:00 AM", close: "3:00 AM" },
            { day: "Monday", open: "9:00 AM", close: "3:00 AM" },
            { day: "Tuesday", open: "9:00 AM", close: "3:00 AM" },
            { day: "Wednesday", open: "9:00 AM", close: "3:00 AM" },
            { day: "Thursday", open: "9:00 AM", close: "3:00 AM" },
            { day: "Friday", open: "9:00 AM", close: "3:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
    {
        title: "مطعم ريفر",
        description: "مطعم مريح وهادئ يقدم وجبات خفيفة وطعاماً حلالاً، مناسب جداً للسياح والمجموعات والعائلات الباحثة عن إطلالة جميلة وأجواء مريحة في حماة.",
        cityId: "6a0aed01c0f4388a89553a12",
        location: {
            address: "حماة، سوريا",
            latitude: 35.1378234420773,
            longitude: 36.74351124432727
        },
        cuisineType: "وجبات خفيفة وشرقية",
        images: ["/images/restaurants/river_restaurant_hama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "11:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "11:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "11:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "11:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "11:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "11:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "11:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Alo_Chicken",
        description: "مطعم وجبات سريعة شهير متخصص بالدجاج المقلي (البروستد) والمشاوي، يوفر خيارات طعام سفري وجلسات داخلية خفيفة ممتازة وسريعة للمجموعات والأطفال.",
        cityId: "6a0aed01c0f4388a89553a12",
        location: {
            address: "حماة، سوريا",
            latitude: 35.13564753054081,
            longitude: 36.75157932882144
        },
        cuisineType: "وجبات سريعة ودجاج بروستد",
        images: ["/images/restaurants/alo_chicken_hama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Sunday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Monday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Tuesday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Wednesday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Thursday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Friday", open: "9:00 AM", close: "1:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
    {
        title: "مطعم الوالي",
        description: "مطعم وجبات سريعة عصري وهادئ، يقدم خدمات التوصيل السريع والطعام السفري، ويشتهر بوجبات الإفطار المتأخر والغداء الخفيف وسط مظهر مريح ومناسب للعائلات.",
        cityId: "6a0aed01c0f4388a89553a12",
        location: {
            address: "حماة، سوريا",
            latitude: 35.13564753054081,
            longitude: 36.753639265288044
        },
        cuisineType: "وجبات سريعة وخفيفة",
        images: ["/images/restaurants/al_wali_hama.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:31 AM", close: "12:31 AM" },
            { day: "Sunday", open: "8:31 AM", close: "12:31 AM" },
            { day: "Monday", open: "8:31 AM", close: "12:31 AM" },
            { day: "Tuesday", open: "8:31 AM", close: "12:31 AM" },
            { day: "Wednesday", open: "8:31 AM", close: "12:31 AM" },
            { day: "Thursday", open: "8:31 AM", close: "12:31 AM" },
            { day: "Friday", open: "8:31 AM", close: "12:31 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
// ================= مطاعم طرطوس =================
    {
        title: "مقهى ومطعم سلسبيلا",
        description: "مقهى ومطعم راقٍ وعصري على كورنيش طرطوس، يمتاز بأماكن جلوس في الهواء الطلق ومدفأة وتشكيلة واسعة من الكوكتيلات والحلويات، ويقدم خيارات ممتازة للفطور والغداء والعشاء.",
        cityId: "6a0aed01c0f4388a89553a13",
        location: {
            address: "كورنيش طرطوس، طرطوس، سوريا",
            latitude: 34.89152818462662,
            longitude: 35.876526859938274
        },
        cuisineType: "مأكولات شرقية وغربية وكافيه",
        images: ["/images/restaurants/salsabila.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "10:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Loz Porto Tartus",
        description: "مكان مميز وجلسات داخلية مريحة لتناول الوجبات والمشروبات بإطلالة قريبة من المرفأ وأجواء ساحلية هادئة تناسب اللقاءات الشبابية والعائلية.",
        cityId: "6a0aed01c0f4388a89553a13",
        location: {
            address: "بورتو طرطوس، طرطوس، سوريا",
            latitude: 34.89621757238508,
            longitude: 35.87340145993828
        },
        cuisineType: "كافيه ووجبات خفيفة",
        images: ["/images/restaurants/loz_porto.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Sunday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Monday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Wednesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Thursday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Friday", open: "9:00 AM", close: "11:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
    {
        title: "Cello (تشيلو)",
        description: "مطعم مريح وهادئ يقدم خدمة المائدة ووجبات خفيفة ومشروبات متنوعة، ويعد مكاناً مناسباً جداً للسياح والمجموعات الصغيرة الباحثة عن عشاء فردي أو جماعي هادئ.",
        cityId: "6a0aed01c0f4388a89553a13",
        location: {
            address: "طرطوس، سوريا",
            latitude: 34.89467297642949,
            longitude: 35.87291711760984
        },
        cuisineType: "وجبات خفيفة ومشروبات",
        images: ["/images/restaurants/cello.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "10:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "10:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    },
    {
        title: "مطعم جلاكسي ريست (Galaxy Rest)",
        description: "تجربة مميزة مع جلسات رائعة على السطح وفي الهواء الطلق، يقدم مأكولات الساعات المتأخرة والحلويات الفاخرة وسط أجواء رومانسية وعصرية عالية المستوى تناسب الطلاب والسياح.",
        cityId: "6a0aed01c0f4388a89553a13",
        location: {
            address: "طرطوس، سوريا",
            latitude: 34.881191314233405,
            longitude: 35.88012460596784
        },
        cuisineType: "غربي ووجبات سريعة ومأكولات بحرية",
        images: ["/images/restaurants/galaxy_rest.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "1:58 AM" },
            { day: "Sunday", open: "8:00 AM", close: "1:58 AM" },
            { day: "Monday", open: "8:00 AM", close: "12:58 AM" },
            { day: "Tuesday", open: "8:00 AM", close: "12:58 AM" },
            { day: "Wednesday", open: "8:00 AM", close: "12:58 AM" },
            { day: "Thursday", open: "8:00 AM", close: "12:58 AM" },
            { day: "Friday", open: "8:00 AM", close: "12:58 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e"  // أماكن جلوس في الهواء الطلق
        ]
    },
    {
        title: "Barcode Tartous (باركود)",
        description: "يجمع بين المطعم العصري والبار، يقدم موسيقى حية وجلسات خارجية ممتعة ومأكولات خفيفة وسريعة حتى ساعات الصباح الأولى، بأجواء شبابية نابضة بالحياة.",
        cityId: "6a0aed01c0f4388a89553a13",
        location: {
            address: "الكورنيش البحري، طرطوس، سوريا",
            latitude: 34.89123918745279,
            longitude: 35.876746744595415
        },
        cuisineType: "وجبات سريعة وغربية وبار",
        images: ["/images/restaurants/barcode.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Sunday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Monday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Tuesday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Wednesday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Thursday", open: "9:00 AM", close: "2:00 AM" },
            { day: "Friday", open: "9:00 AM", close: "2:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "Pelikan Rest (مطعم البيلكان)",
        description: "مطعم راقٍ ورومانسي يمتاز بموسيقى حية وجلسات خارجية خلابة، يعرض الفعاليات الرياضية ويقدم تشكيلة حلويات ومأكولات حلال متكاملة مناسبة للمجموعات السياحية وأعياد الميلاد.",
        cityId: "6a0aed01c0f4388a89553a13",
        location: {
            address: "الكورنيش، طرطوس، سوريا",
            latitude: 34.883693813557784,
            longitude: 35.87934404829625
        },
        cuisineType: "شرقي وغربي ومأكولات بحرية",
        images: ["/images/restaurants/pelikan.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "8:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "مطعم الخواجا",
        description: "من الوجهات الفاخرة والعريقة بطرطوس، يقدم فطوراً وإفطاراً متأخراً ووجبات غداء وعشاء متكاملة في أجواء دافئة بوجود مدفأة وجلسات خارجية وخدمة مائدة ممتازة.",
        cityId: "6a0aed01c0f4388a89553a13",
        location: {
            address: "طرطوس، سوريا",
            latitude: 34.890177487116276,
            longitude: 35.87712991575961
        },
        cuisineType: "شرقي فاخر ومأكولات بحرية",
        images: ["/images/restaurants/alkhawaja.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "12:30 AM" },
            { day: "Sunday", open: "8:00 AM", close: "12:30 AM" },
            { day: "Monday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "8:00 AM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "مطعم الصباح طرطوس",
        description: "مطعم وجبات خفيفة وسريعة عصري وهادئ، يشتهر بتقديم وجبات الغداء والعشاء المتنوعة مع الكوكتيلات الرائعة، ويوفر خدمات التوصيل للمنازل وجلسات مريحة.",
        cityId: "6a0aed01c0f4388a89553a13",
        location: {
            address: "طرطوس، سوريا",
            latitude: 34.890211589113726,
            longitude: 35.87756537343114
        },
        cuisineType: "وجبات سريعة وخفيفة",
        images: ["/images/restaurants/alsabah.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "8:00 AM", close: "1:00 AM" },
            { day: "Tuesday", open: "8:00 AM", close: "1:00 AM" },
            { day: "Wednesday", open: "8:00 AM", close: "1:00 AM" },
            { day: "Thursday", open: "8:00 AM", close: "1:00 AM" },
            { day: "Friday", open: "8:00 AM", close: "2:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f"  // طعام حلال
        ]
    },
    {
        title: "مطعم السندباد",
        description: "مطعم وجبات مميز ومريح يفتح حتى ساعات متأخرة، يقدم خدمة المائدة الممتازة لرواده ويعد خياراً رائعاً للسياح والعائلات الذين يبحثون عن قضاء وقت ممتع.",
        cityId: "6a0aed01c0f4388a89553a13",
        location: {
            address: "طرطوس، سوريا",
            latitude: 34.89312488096424,
            longitude: 35.886855486923714
        },
        cuisineType: "شرقي وغربي منوع",
        images: ["/images/restaurants/sinbad.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Sunday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Monday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Tuesday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Wednesday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Thursday", open: "9:00 AM", close: "1:00 AM" },
            { day: "Friday", open: "9:00 AM", close: "1:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d"  // الجلوس داخل المكان
        ]
    }
,// ================= مطاعم إدلب =================
    {
        title: "مطعم الأندلس",
        description: "مطعم راقٍ وعصري في إدلب، يقدم خيارات متنوعة من الوجبات السريعة والمأكولات الحلال مع غرف طعام خاصة، ويمتاز بوجود مدفأة وجلسات مريحة تناسب العائلات والطلاب.",
        cityId: "6a0aed01c0f4388a89553a15",
        location: {
            address: "إدلب، سوريا",
            latitude: 36.7467847623123,
            longitude: 36.453797293250915
        },
        cuisineType: "وجبات سريعة ومأكولات شرقية",
        images: ["/images/restaurants/andalus.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Sunday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Monday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Wednesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Thursday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Friday", open: "9:00 AM", close: "11:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a34"  // مناسب للأطفال
        ]
    },
    {
        title: "مطعم ديزني لاند",
        description: "من الوجهات العائلية المميزة، يحتوي على أماكن جلوس في الهواء الطلق، غرف طعام خاصة، وقائمة مخصصة للأطفال، مما يجعله المكان المثالي لأعياد الميلاد والمجموعات السياحية.",
        cityId: "6a0aed01c0f4388a89553a15",
        location: {
            address: "إدلب، سوريا",
            latitude: 36.711563860204144,
            longitude: 36.45379729325091
        },
        cuisineType: "شرقي وغربي ووجبات أطفال",
        images: ["/images/restaurants/disneyland.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Sunday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "8:00 AM", close: "1:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a34"  // مناسب للأطفال
        ]
    },
    {
        title: "مطعم الذواق",
        description: "مطعم وجبات سريعة وخفيفة عصري ومريح، يشتهر بتقديم مأكولات متأخرة في الليل ويوفر جلسات دافئة بوجود مدفأة، وهو خيار مفضل للطلاب والمجموعات الشبابية.",
        cityId: "6a0aed01c0f4388a89553a15",
        location: {
            address: "إدلب، سوريا",
            latitude: 36.711563860204144,
            longitude: 36.62957853840045
        },
        cuisineType: "وجبات سريعة وخفيفة",
        images: ["/images/restaurants/thawwaq.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:00 AM", close: "1:00 AM" },
            { day: "Sunday", open: "10:00 AM", close: "1:00 AM" },
            { day: "Monday", open: "10:00 AM", close: "1:00 AM" },
            { day: "Tuesday", open: "10:00 AM", close: "1:00 AM" },
            { day: "Wednesday", open: "10:00 AM", close: "1:00 AM" },
            { day: "Thursday", open: "10:00 AM", close: "1:00 AM" },
            { day: "Friday", open: "10:00 AM", close: "1:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a34"  // مناسب للأطفال
        ]
    },
    {
        title: "مطعم بانيه ادلب",
        description: "يوفر تجربة طعام مريحة وبسيطة تركز على الوجبات السريعة والخفيفة، مع توفير خدمة التوصيل وتلبية طلبات الغداء والعشاء الفردية والجماعية.",
        cityId: "6a0aed01c0f4388a89553a15",
        location: {
            address: "إدلب، سوريا",
            latitude: 36.817178085838705,
            longitude: 36.62957853840046
        },
        cuisineType: "بروستد ووجبات سريعة",
        images: ["/images/restaurants/panneh_idlib.jpg"],
        opening_hours: [
            { day: "Saturday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Sunday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Monday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Tuesday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Wednesday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Thursday", open: "10:00 AM", close: "11:00 PM" },
            { day: "Friday", open: "10:00 AM", close: "11:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1c", // طعام سفري
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a34"  // مناسب للأطفال
        ]
    },
    {
        title: "Burger Zone",
        description: "مكان هادئ، عصري وخفيف، متخصص في تقديم أصناف البرغر والوجبات السريعة، يوفر خدمة المائدة ويمتاز بأجوائه المريحة المناسبة للطلاب والسياح.",
        cityId: "6a0aed01c0f4388a89553a15",
        location: {
            address: "إدلب، سوريا",
            latitude: 36.92264678172968,
            longitude: 36.497742604538296
        },
        cuisineType: "برغر ووجبات سريعة",
        images: ["/images/restaurants/burger_zone.jpg"],
        opening_hours: [
            { day: "Saturday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Sunday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Monday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Tuesday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Wednesday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Thursday", open: "12:00 PM", close: "12:00 AM" },
            { day: "Friday", open: "12:00 PM", close: "12:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a34"  // مناسب للأطفال
        ]
    },
    {
        title: "سيتي روز (City Rose)",
        description: "مجمع راقٍ ورومانسي يقدم خيارات طعام حلال ونباتية مميزة، ويحتوي على أماكن جلوس في الهواء الطلق ومدفأة وحلويات رائعة، مما يجعله الوجهة المثالية للقاءات الطويلة.",
        cityId: "6a0aed01c0f4388a89553a15",
        location: {
            address: "إدلب، سوريا",
            latitude: 36.852350495540016,
            longitude: 36.585633227113064
        },
        cuisineType: "مأكولات شرقية وغربية وكافيه",
        images: ["/images/restaurants/city_rose.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "2:00 AM" },
            { day: "Sunday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Monday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Tuesday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Wednesday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Thursday", open: "8:00 AM", close: "12:00 AM" },
            { day: "Friday", open: "8:00 AM", close: "2:00 AM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1e", // أماكن جلوس في الهواء الطلق
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a34"  // مناسب للأطفال
        ]
    },
    {
        title: "Mr. Black",
        description: "كافيه عصري مريح وهادئ يركز على تقديم أجود أنواع القهوة التخصصية والوجبات الخفيفة، ويعد ملاذاً ممتازاً للسياح والمجموعات الباحثة عن الهدوء.",
        cityId: "6a0aed01c0f4388a89553a15",
        location: {
            address: "إدلب، سوريا",
            latitude: 36.92264678172968,
            longitude: 36.71746916097523
        },
        cuisineType: "قهوة تخصصية وكافيه",
        images: ["/images/restaurants/mr_black.jpg"],
        opening_hours: [
            { day: "Saturday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Sunday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Monday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Tuesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Wednesday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Thursday", open: "9:00 AM", close: "11:00 PM" },
            { day: "Friday", open: "9:00 AM", close: "11:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a34"  // مناسب للأطفال
        ]
    },
    {
        title: "Chocolate Corner",
        description: "ركن الشوكولاتة المميّز، يقدم تشكيلة حلويات رائعة، قهوة فاخرة، وشاي منوع، وسط أجواء عصرية عالية المستوى تناسب العائلات والطلاب الجامعيين.",
        cityId: "6a0aed01c0f4388a89553a15",
        location: {
            address: "إدلب، سوريا",
            latitude: 36.852350495540016,
            longitude: 36.67352384968783
        },
        cuisineType: "حلويات وكافيه",
        images: ["/images/restaurants/chocolate_corner.jpg"],
        opening_hours: [
            { day: "Saturday", open: "8:00 AM", close: "10:00 PM" },
            { day: "Sunday", open: "8:00 AM", close: "10:00 PM" },
            { day: "Monday", open: "8:00 AM", close: "10:00 PM" },
            { day: "Tuesday", open: "8:00 AM", close: "10:00 PM" },
            { day: "Wednesday", open: "8:00 AM", close: "10:00 PM" },
            { day: "Thursday", open: "8:00 AM", close: "10:00 PM" },
            { day: "Friday", open: "8:00 AM", close: "10:00 PM" }
        ],
        amenities: [
            "6a0aed01c0f4388a89553a28", // مطعم
            "6a0aed01c0f4388a89553a1d", // الجلوس داخل المكان
            "6a0aed01c0f4388a89553a1f", // طعام حلال
            "6a0aed01c0f4388a89553a34"  // مناسب للأطفال
        ]
    },   
// ================= مطاعم دير الزور =================
{
    title: "مطعم الجسر الكبير",
    description: "مطعم متميز ومريح في عروس الفرات دير الزور، يقدم وجبات سريعة ومأكولات خفيفة وحلال، ويمتاز بأماكن جلوس رائعة في الهواء الطلق، مما يجعله وجهة مثالية للسياح والمجموعات.",
    cityId: "6a0aed01c0f4388a89553a16",
    location: {
        address: "دير الزور، سوريا",
        latitude: 35.34527990610176,
        longitude: 40.1489396633057
    },
    cuisineType: "وجبات سريعة ومأكولات شرقية",
    images: ["/images/restaurants/al_jisr_al_kabir.jpg"],
    opening_hours: [
        { day: "Saturday", open: "10:00 AM", close: "2:00 AM" },
        { day: "Sunday", open: "10:00 AM", close: "2:00 AM" },
        { day: "Monday", open: "10:00 AM", close: "2:00 AM" },
        { day: "Tuesday", open: "10:00 AM", close: "2:00 AM" },
        { day: "Wednesday", open: "10:00 AM", close: "2:00 AM" },
        { day: "Thursday", open: "10:00 AM", close: "2:00 AM" },
        { day: "Friday", open: "10:00 AM", close: "2:00 AM" }
    ],
    amenities: [
        "6a0aed01c0f4388a89553a28" 
    ]
},
{
    title: "مستر وجبة (Mr. Wajba)",
    description: "مطعم وجبات سريعة عصري وهادئ، يوفر خدمة مائدة ممتازة ويشتهر بتقديم وجبات خفيفة وسريعة تلبي رغبات الأفراد والمجموعات وسط أجواء مريحة.",
    cityId: "6a0aed01c0f4388a89553a16",
    location: {
        address: "دير الزور، سوريا",
        latitude: 35.34093914273295,
        longitude: 40.131683379514584
    },
    cuisineType: "وجبات سريعة وخفيفة",
    images: ["/images/restaurants/mr_wajba.jpg"],
    opening_hours: [
        { day: "Saturday", open: "9:00 AM", close: "11:30 PM" },
        { day: "Sunday", open: "9:00 AM", close: "11:30 PM" },
        { day: "Monday", open: "9:00 AM", close: "11:30 PM" },
        { day: "Tuesday", open: "9:00 AM", close: "11:30 PM" },
        { day: "Wednesday", open: "9:00 AM", close: "11:30 PM" },
        { day: "Thursday", open: "9:00 AM", close: "11:30 PM" },
        { day: "Friday", open: "9:00 AM", close: "11:30 PM" }
    ],
    amenities: [
        "6a0aed01c0f4388a89553a28" 
    ]
},
// ================= مطاعم الحسكة =================
{
    title: "مطعم روز",
    description: "مطعم وجبات سريعة عصري وهادئ في الحسكة، يقدم تشكيلة من المأكولات الحلال والوجبات الخفيفة والقهوة الرائعة، ويمتاز بخدمة مائدة ممتازة ويستقبل زواره حتى ساعات متأخرة من الليل.",
    cityId: "6a0aed01c0f4388a89553a17",
    location: {
        address: "الحسكة، سوريا",
        latitude: 36.51009619485945,
        longitude: 40.74326044065758
    },
    cuisineType: "وجبات سريعة وكافيه",
    images: ["/images/restaurants/rose_restaurant.jpg"],
    opening_hours: [
        { day: "Saturday", open: "8:00 AM", close: "1:00 AM" },
        { day: "Sunday", open: "8:00 AM", close: "1:00 AM" },
        { day: "Monday", open: "8:00 AM", close: "1:00 AM" },
        { day: "Tuesday", open: "8:00 AM", close: "1:00 AM" },
        { day: "Wednesday", open: "8:00 AM", close: "1:00 AM" },
        { day: "Thursday", open: "8:00 AM", close: "1:00 AM" },
        { day: "Friday", open: "8:00 AM", close: "1:00 AM" }
    ],
    amenities: [
        "6a0aed01c0f4388a89553a28"
    ]
},
// ================= مطاعم درعا =================
{
    title: "مطعم الرحمة (Al-Rahma Restaurant)",
    description: "مطعم عصري وعالي المستوى في درعا، يقدم خيارات طعام متنوعة تشمل المأكولات الحلال، النباتية، والخالية من المنتجات الحيوانية. يمتاز بوجود مدفأة وجلسات مريحة مهيأة بالكامل لاستقبال مستخدمي الكراسي المتحركة.",
    cityId: "6a0aed01c0f4388a89553a18",
    location: {
        address: "درعا، سوريا",
        latitude: 32.64676282949263,
        longitude: 36.10311609141485
    },
    cuisineType: "وجبات سريعة ومأكولات عالمية ونباتية",
    images: ["/images/restaurants/al_rahma_restaurant.jpg"],
    opening_hours: [
        { day: "Saturday", open: "9:00 AM", close: "12:00 AM" },
        { day: "Sunday", open: "9:00 AM", close: "12:00 AM" },
        { day: "Monday", open: "9:00 AM", close: "12:00 AM" },
        { day: "Tuesday", open: "9:00 AM", close: "12:00 AM" },
        { day: "Wednesday", open: "9:00 AM", close: "12:00 AM" },
        { day: "Thursday", open: "9:00 AM", close: "12:00 AM" },
        { day: "Friday", open: "9:00 AM", close: "12:00 AM" }
    ],
    amenities: [
        "6a0aed01c0f4388a89553a28" 
    ]
},
// ================= مطاعم السويداء =================
{
    title: "مطعم كريستال (Crystal Restaurant)",
    description: "مطعم وجبات سريعة عصري، مريح وهادئ في السويداء، يقدم مأكولات خفيفة وحلال متميزة مع خدمة مائدة ممتازة، مما يجعله خياراً رائعاً للسياح، العائلات، والمجموعات.",
    cityId: "6a0aed01c0f4388a89553a19",
    location: {
        address: "السويداء، سوريا",
        latitude: 32.71386321486432,
        longitude: 36.572328949183685
    },
    cuisineType: "وجبات سريعة وخفيفة",
    images: ["/images/restaurants/crystal_restaurant.jpg"],
    opening_hours: [
        { day: "Saturday", open: "9:00 AM", close: "1:00 AM" },
        { day: "Sunday", open: "9:00 AM", close: "1:00 AM" },
        { day: "Monday", open: "9:00 AM", close: "1:00 AM" },
        { day: "Tuesday", open: "9:00 AM", close: "1:00 AM" },
        { day: "Wednesday", open: "9:00 AM", close: "1:00 AM" },
        { day: "Thursday", open: "9:00 AM", close: "1:00 AM" },
        { day: "Friday", open: "9:00 AM", close: "1:00 AM" }
    ],
    amenities: [
        "6a0aed01c0f4388a89553a28" // مطعم
    ]
},
// ================= مطاعم القنيطرة =================
{
    title: "مطعم بارك بي أند بي (Park B&B Restaurant)",
    description: "مطعم راقٍ وعصري في القنيطرة، يقدم تشكيلة واسعة من المأكولات العضوية، النباتية، والحلال. يمتاز بأجوائه الرومانسية الهادئة وجلساته الخارجية في الهواء الطلق، ويشتهر بتقديم قهوة وحلويات رائعة، مما يجعله وجهة مثالية للعائلات والمجموعات وسياح أرض الجولان الشامخ.",
    cityId: "6a0aed01c0f4388a89553a1a",
    location: {
        address: "القنيطرة، سوريا",
        latitude: 34.26155204611353,
        longitude: -6.580443397896829
    },
    cuisineType: "وجبات سريعة ومأكولات عضوية ونباتية",
    images: ["/images/restaurants/park_bb_restaurant.jpg"],
    opening_hours: [
        { day: "Saturday", open: "12:00 PM", close: "12:00 AM" },
        { day: "Sunday", open: "12:00 PM", close: "12:00 AM" },
        { day: "Monday", open: "12:00 PM", close: "12:00 AM" },
        { day: "Tuesday", open: "12:00 PM", close: "12:00 AM" },
        { day: "Wednesday", open: "12:00 PM", close: "12:00 AM" },
        { day: "Thursday", open: "12:00 PM", close: "12:00 AM" },
        { day: "Friday", open: "5:00 PM", close: "12:00 AM" }
    ],
    amenities: [
        "6a0aed01c0f4388a89553a28" // مطعم
    ]
},

// ================= مطاعم ريف دمشق =================
{
    title: "مطعم بلس (Plus Restaurant)",
    description: "مطعم متميز ومريح في ريف دمشق، يقدم وجبات خفيفة ومأكولات حلال متنوعة، ويشتهر بتقديم مشروبات كوكتيل وحلويات رائعة وسط أجواء دافئة وخفيفة تناسب اللقاءات الشبابية والمجموعات.",
    cityId: "6a0aed01c0f4388a89553a1b",
    location: {
        address: "ريف دمشق، سوريا",
        latitude: 33.975401534177145,
        longitude: 36.16708037497601
    },
    cuisineType: "وجبات خفيفة وحلويات وكافيه",
    images: ["/images/restaurants/plus_restaurant.jpg"],
    opening_hours: [
        { day: "Saturday", open: "9:00 AM", close: "2:00 AM" },
        { day: "Sunday", open: "9:00 AM", close: "2:00 PM" },
        { day: "Monday", open: "9:00 AM", close: "2:00 AM" },
        { day: "Tuesday", open: "9:00 AM", close: "2:00 AM" },
        { day: "Wednesday", open: "9:00 AM", close: "2:00 AM" },
        { day: "Thursday", open: "9:00 AM", close: "2:00 AM" },
        { day: "Friday", open: "9:00 AM", close: "2:00 AM" }
    ],
    amenities: [
        "6a0aed01c0f4388a89553a28" // مطعم
    ]
}


]
module.exports = { restaurants };