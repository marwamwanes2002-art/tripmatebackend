const hotels = [
    // DAMASCUS HOTELS
    {
    title: "Beit Zafran Hotel De Charme",
    description: "A meticulously restored former Ottoman mansion in the heart of the Old Town",
    cityId: "6a0aed01c0f4388a89553a0f",
    location: {
        address: "Bab Touma",
        latitude: 33.511268651888855, 
        longitude: 36.31433223858726
    },
    images: [
        "/images/hotels/beitZafran1.jpg",
        "/images/hotels/beitZafran2.jpg",
        "/images/hotels/beitZafran3.jpg",
        "/images/hotels/beitZafran4.jpg"
    ],
    star_rating: 5,
    hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
    ],
    amenities: [
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Beit Al-Mamlouka",
        description:"The hotel belongs to the 17th century and boasts original features from the 18th century.",
        cityId:"6a0aed01c0f4388a89553a0f",
        location:{
            address:"باب توما, جادة البكري",
            latitude:33.51284022675735, 
            longitude: 36.313614086975626,
        },
        images:["/images/hotels/beitAlMamlouka1.jpg",
                "/images/hotels/beitAlMamlouka2.jpg",
                "/images/hotels/beitAlMamlouka3.jbg"
        ],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Dar Al Mamlouka",
        description:"After the success of Beit Al Mamlouka, Mr. Antoun Mezannar had bought a second hotel and renovated it again to meet the same standards of Beit Al Mamlouka.",
        cityId:"6a0aed01c0f4388a89553a0f",
        location:{
            address:"باب توما, جادة البكري",
            latitude:33.51300598979747,
            longitude: 36.311975676671274
        },
         images:["/images/hotels/darAlMamlouka1.jpg",
                 "/images/hotels/darAlMamlouka2.jpg"
         ],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2b",// بواب
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Beit Rumman Boutique Hotel",
        description:"After the success of Beit Al Mamlouka, Mr. Antoun Mezannar had bought a second hotel and renovated it again to meet the same standards of Beit Al Mamlouka.",
        cityId:"6a0aed01c0f4388a89553a0f",
        location:{
            address:"باب توما , دمشق القديمة",
            latitude:33.51066558706165,
            longitude:36.31493297699068
        },
         images:["/images/hotels/beitRumman1.jpg",
                 "/images/hotels/beitRumman2.jpg"
         ],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Beit Akbik Hotel",
        description:"Beit Akbik Hotel is an old damascene house, built on the 17th century. ",
        cityId:"6a0aed01c0f4388a89553a0f",
        location:{
            address:"باب كيسان, شارع محمود خليل",
            latitude:33.509070740269,
            longitude: 36.31127001357481
        },
         images:["/images/hotels/beitAkbik1.jpg",
                 "/images/hotels/beitAkbik2.jpg"
         ],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Old Vine Hotel",
        description:"Old Vine hotel has transferred from 3 traditional Arabic houses into a luxury boutique hotel. ",
        cityId:"6a0aed01c0f4388a89553a0f",
        location:{
            address:"جادة الصواف",
            latitude:33.51312639554467,
            longitude: 36.30662414447558
        },
         images:["/images/hotels/oldVine1.jpg",
                 "/images/hotels/oldVine1.jpg"
         ],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Beit Zaman",
        description:"Beit Zaman hotel is a boutique hotel with 28 guest rooms and suites on 2 floors. ",
        cityId:"6a0aed01c0f4388a89553a0f",
        location:{
            address:"حارة المسك",
            latitude:33.5100953754672,
            longitude: 36.31514447721875
        },
         images:["/images/hotels/beitZaman1.jpg",
                 "/images/hotels/beitZaman2.jpg"
            ],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Four Seasons",
        description:"One of the most important hotels in Damascus.",
        cityId:"6a0aed01c0f4388a89553a0f",
        location:{
            address:"مقابل المتحف الوطني",
            latitude:33.51442273097002,
            longitude: 36.29150613188532
        },
        images:["/images/hotels/fourSeasons1.jpg",
                 "/images/hotels/fourSeasons2.jpg"
            ],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    // ALEPPO HOTELS
    {
        title:"Sheraton Aleppo Hotel",
        description:" a romantic hotel that brings the best of Aleppo to your doorstep.",
        cityId:"6a0aed01c0f4388a89553a10",
        location:{
            address:"Sheraton Aleppo Hotel, حلب، سوريا",
            latitude:36.20534281524155,
            longitude:  37.15419572386258
        },
        images:["/images/hotels/sheratonAleppo1.jpg",
                 "/images/hotels/sheratonAleppo2.jpg"
            ],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Jdayde Hotel",
        description:"Finding an ideal romantic hotel in Aleppo does not have to be difficult. Welcome to Jdayde Hotel, a nice option for travelers like you.",
        cityId:"6a0aed01c0f4388a89553a10",
        location:{
            address:"6544+QMF، حلب، سوريا",
            latitude:36.20761931397078,
            longitude: 37.15662551163479
        },
         images:["/images/hotels/jdayde1.jpg",
                 "/images/hotels/jdayde2.jpg"],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Beit Salahieh Hotel",
        description:"Stay at Beit Salahieh and experience true Syrian hospitality.",
        cityId:"6a0aed01c0f4388a89553a10",
        location:{
            address:"6538+374، شارع باب الحديد، حلب، سوريا",
            latitude:36.203390032394005,
            longitude: 37.16537057300678
        },
         images:["/images/hotels/beitSalahieh1.jpg",
                 "/images/hotels/beitSalahieh2.jpg"],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Martini Dar Zamaria Hotel",
        description:"A wonderfall hotel in Aleppo.",
        cityId:"6a0aed01c0f4388a89553a10",
        location:{
            address:"6555+345، حلب، سوريا",
            latitude:36.208335607628705,
            longitude: 37.158023488340696
        },
         images:["/images/hotels/martini1.jpg",
                 "/images/hotels/martini2.jpg"],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Coral Julia Dumna Hotel",
        description:"a luxury hotel that brings the best of Aleppo to your doorstep.",
        cityId:"6a0aed01c0f4388a89553a10",
        location:{
            address:"6524+JC7، حلب، سوريا",
            latitude:36.20206771145865,
            longitude: 37.15613895766771
        },
         images:["/images/hotels/julia1.jpg",
                 "/images/hotels/julia2.jpg"],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Park Hotel",
        description:"Superbly situated in the heart of Aleppo, Park Hotel is the most convenient hotel in the city.",
        cityId:"6a0aed01c0f4388a89553a10",
        location:{
            address:"Baghdad Station street, next to Aleppo's train station Baghdad St Rd, حلب، سوريا",
            latitude:36.213192861522714,
            longitude:37.14916682696693
        },
         images:["/images/hotels/park1.jpg",
                 "/images/hotels/park2.jpg"],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Arman Hotel",
        description:"New five-starred hotel in Aleppo with a very friendly staff, delicious food, spacious rooms and a nice pool to cool down.",
        cityId:"6a0aed01c0f4388a89553a10",
        location:{
            address:"54H4+P8W، حلب، سوريا",
            latitude:36.17957079924041,
            longitude: 37.10587324236218
        },
         images:["/images/hotels/arman1.jpg",
                 "/images/hotels/arman2.jpg"],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Ambassadors",
        description:"A wonderfall hotel in Aleppo.",
        cityId:"6a0aed01c0f4388a89553a10",
        location:{
            address:"643X+QRM، شارع بارون، حلب، سوريا",
            latitude:36.20495836325402,
            longitude: 37.149324550273406
        },
         images:["/images/hotels/ambassadors1.jpg",
                 "/images/hotels/ambassadors2.jpg"],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Mandaloun Hotel-Restaurant",
        description:" Mandaloun Hotel-Restaurant aims to make your visit as relaxing and enjoyable as possible.",
        cityId:"6a0aed01c0f4388a89553a10",
        location:{
            address:"Al Telal-Hazazeh Street P.O.Box: 4269, Aleppo Syria",
            latitude:36.20255524689026,
            longitude: 37.15084653608596
        },
         images:["/images/hotels/mandaloun1.jpg",
                 "/images/hotels/mandaloun2.jpg"],
        star_rating: 5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    //LATTAKIA HOTELS
    {
        title:"Afamia Hotel Resort",
        description:"This resort is a great choice for beach lovers. Rooms are super clean. A wide variety of breakfast options.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"GQW3+V72، اللاذقية، سوريا",
            latitude:35.54731868153168,
            longitude: 35.75313662890148
        },
         images:["/images/hotels/afamia1.jpg",
                 "/images/hotels/afamia2.jpg"],
        star_rating: 4.2,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Golden Beach Hotel",
        description:"a sandy beach which is considered one of the best sandy beaches on the Mediterranean Sea.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"HPQR+QWH، اللاذقية، سوريا",
            latitude:35.589592908197126,
            longitude: 35.74237812891248
        },
         images:["/images/hotels/golden1.jpg",
                 "/images/hotels/golden2.jpg"],
        star_rating: 4.3,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Mountain Breeze resort",
        description:"a rural eco-tourism destination located in the mountainous forests of Bishalama.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"C4JR+JJH، القرداحه، سوريا",
            latitude:35.43163634846525,
            longitude: 36.141623500049484
        },
         images:["/images/hotels/breeze1.jpg",
                 "/images/hotels/breeze2.jpg"],
        star_rating: 4.4,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Safwan Hotel",
        description:"a cozy and conveniently located hotel situated on the Western Corniche of Lattakia.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"GQGF+4FF، اللاذقية، سوريا",
            latitude:35.525358956415836,
            longitude: 35.77365527122936
        },
         images:["/images/hotels/safwan1.jpg",
                 "/images/hotels/safwan2.jpg"],
        star_rating: 3.5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Al Samman Hotel",
        description:"If you want to spend a few nights at a nice hotel in the heart of Lattakia, choose Al- Samman Hotel.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"GQGH+RX6، اللاذقية، سوريا",
            latitude:35.52709275518793,
            longitude: 35.779878371239846
        },
         images:["/images/hotels/samman1.jpg",
                 "/images/hotels/samman2.jpg"],
        star_rating: 3.6,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Cote d'Azur de Cham Resort",
        description:"A distinctive beach resort on the Mediterranean coast. It offers stunning views, pristine sand, and crystal-clear waters.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"منطقة الشاطئ الأزرق، طريق الشاطئ الأزرق، اللاذقية، سوريا",
            latitude:35.588146311669696,
            longitude: 35.745966800053864
        },
         images:["/images/hotels/cote1.jpg",
                 "/images/hotels/cote2.jpg"],
        star_rating: 4.0,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Riviera Hotel",
        description:"Book the Riviera Hotel and take advantage of our offers and discounts on accommodations in Latakia.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"GQFP+WF9، 14 رمضان، اللاذقية، سوريا",
            latitude:35.524907547601714,
            longitude: 35.78628594424629
        },
         images:["/images/hotels/riviera1.jpg",
                 "/images/hotels/riviera2.jpg"],
        star_rating: 4.0,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Le Meridien",
        description:"a modern 5-star seaside resort on the Mediterranean, surrounded by pleasant gardens.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"HPPP+2WC، اللاذقية، سوريا",
            latitude:35.58530676932421,
            longitude: 35.737253042385056
        },
         images:["/images/hotels/meridien1.jpg",
                 "/images/hotels/meridien2.jpg"],
        star_rating: 4.3,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Haroun Hotel",
        description:"A beautiful hotel in Lattakia.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"GQFR+WJF، 14 رمضان، اللاذقية، سوريا",
            latitude:35.52492291577141,
            longitude:35.79147785587525
        },
         images:["/images/hotels/haron1.jpg",
                 "/images/hotels/haron2.jpg"],
        star_rating: 3.4,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Zanobia Hotel",
        description:"A beautiful hotel in Lattakia.",
        cityId:"6a0aed01c0f4388a89553a14",
        location:{
            address:"GQ9X+RPG، اللاذقية، سوريا",
            latitude:35.52492291577141,
            longitude:35.79147785587525
        },
         images:["/images/hotels/zanobia1.jpg",
                 "/images/hotels/zanobia2.jpg"],
        star_rating: 3.5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    // HOMS HOTELS
    {
        title:"Basman Hotel",
        description:"A beautiful hotel in Homs.",
        cityId:"6a0aed01c0f4388a89553a11",
        location:{
            address:"PPC6+GF5، الميدان، حمص، سوريا",
            latitude:34.72130898270077,
            longitude: 36.711253986607154
        },
         images:["/images/hotels/basman1.jpg",
                 "/images/hotels/basman2.jpg"],
        star_rating: 3.7,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Homs Grand Hotel",
        description:"A beautiful hotel in Homs.",
        cityId:"6a0aed01c0f4388a89553a11",
        location:{
            address:"PP77+57J، حمص، سوريا",
            latitude:34.7131733717564,
            longitude: 36.71319284424956
        },
         images:["/images/hotels/homs1.jpg",
                 "/images/hotels/homs2.jpg"],
        star_rating: 3.5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Safir Hotel Homs",
        description:"A beautiful hotel in Homs.",
        cityId:"6a0aed01c0f4388a89553a11",
        location:{
            address:"PPF2+M7C، شارع راغب الجمالى، حمص P.O BOX 1746 ص.ب ١٧٤٦، سوريا",
            latitude:34.724268771613545,
            longitude: 36.70064692890808
        },
         images:["/images/hotels/safir1.jpg",
                 "/images/hotels/safir2.jpg"],
        star_rating: 4.0,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Louis Inn Hotel and Restaurant",
        description:"A beautiful hotel in Homs.",
        cityId:"6a0aed01c0f4388a89553a11",
        location:{
            address:"PPHC+64M، حمص، سوريا",
            latitude:34.72824892642561,
            longitude: 36.72029340005278
        },
         images:["/images/hotels/louis1.jpg",
                 "/images/hotels/louis2.jpg"],
        star_rating: 4.5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Louis Inn Hotel and Restaurant",
        description:"A beautiful hotel in Homs.",
        cityId:"6a0aed01c0f4388a89553a11",
        location:{
            address:"PPHC+64M، حمص، سوريا",
            latitude:34.72824892642561,
            longitude: 36.72029340005278
        },
         images:["/images/hotels/louis1.jpg",
                 "/images/hotels/louis2.jpg"],
        star_rating: 4.5,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    // HAMA HOTELS
    {
        title:"AFAMIA HOTEL",
        description:"A beautiful hotel in Hama.",
        cityId:"6a0aed01c0f4388a89553a12",
        location:{
            address:"4QP3+CPJ، حماة، سوريا",
            latitude:35.13621104764215,
            longitude: 36.75427522891139
        },
         images:["/images/hotels/afamhama1.jpg",
                 "/images/hotels/afamhama2.jpg"],
        star_rating: 4.0,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Bait Al Sharq hotel & restaurant",
        description:"A beautiful hotel in Hama.",
        cityId:"6a0aed01c0f4388a89553a12",
        location:{
            address:"4PFW+FWV، زقاق فرن الراس، حماة، سوريا",
            latitude:35.124022319479266,
            longitude: 36.74725141356001
        },
         images:["/images/hotels/sharq1.jpg",
                 "/images/hotels/sharq2.jpg"],
        star_rating: 4.1,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Sarah Hotel",
        description:"A beautiful hotel in Hama.",
        cityId:"6a0aed01c0f4388a89553a12",
        location:{
            address:"4QM2+FVW، أبي الفداء، حماة، سوريا",
            latitude:35.13386509937472,
            longitude: 36.752173342407055
        },
         images:["/images/hotels/sara1.jpg",
                 "/images/hotels/sara2.jpg"],
        star_rating: 3.8,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Hama Tower",
        description:"A beautiful hotel in Hama.",
        cityId:"6a0aed01c0f4388a89553a12",
        location:{
            address:"4QJ4+C92، حماة، سوريا",
            latitude:35.131096782808534,
            longitude: 36.75587384237462
        },
         images:["/images/hotels/hama1.jpg",
                 "/images/hotels/hama2.jpg"],
        star_rating: 4.1,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    //TARTOUS HOTELS
    {
        title:"Safita Cham Palace",
        description:"Great location and a very beautiful area of Syria where the locals are so friendly and helpful.",
        cityId:"6a0aed01c0f4388a89553a13",
        location:{
            address:"R496+GP3، صافيتا، سوريا",
            latitude:34.81882675177487,
            longitude: 36.111781571227176
        },
         images:["/images/hotels/safita1.jpg",
                 "/images/hotels/safita2.jpg"],
        star_rating: 4.2,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Shahin Tower Hotel",
        description:"It is one of the tallest hotel towers in Tartous and has a magnificent view of the sea to the west and of the city of Tartous from other directions.",
        cityId:"6a0aed01c0f4388a89553a13",
        location:{
            address:"VVQH+FHH، طرطوس، سوريا",
            latitude:34.88878690553257,
            longitude: 35.8789476135424
        },
         images:["/images/hotels/shahin1.jpg",
                 "/images/hotels/shahin2.jpg"],
        star_rating: 4.0,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Royal INN",
        description:"One of the most luxurious and beautiful hotels in Tartous, overlooking Arwad Island.",
        cityId:"6a0aed01c0f4388a89553a13",
        location:{
            address:"VVMJ+R29، ROYAL INN, طرطوس،، طرطوس، سوريا",
            latitude:34.884652913418456,
            longitude: 35.88009437120794
        },
         images:["/images/hotels/royal1.jpg",
                 "/images/hotels/royal2.jpg"],
        star_rating: 4.0,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Al Saleh Hotel",
        description:"Reward yourself with a stunning view and the most delicious, irresistible Eastern dishes.",
        cityId:"6a0aed01c0f4388a89553a13",
        location:{
            address:"VVPJ+W23، طرطوس، سوريا",
            latitude:34.88733950603274,
            longitude: 35.88008554422869
        },
         images:["/images/hotels/saleh1.jpg",
                 "/images/hotels/saleh2.jpg"],
        star_rating: 3.8,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Antradous Hotel",
        description:"If you're looking for comfort, enjoyment, luxury, and tranquil beauty, you'll undoubtedly find it at the Antrados Hotel & Restaurant.",
        cityId:"6a0aed01c0f4388a89553a13",
        location:{
            address:"VVPM+H7R، شارع الثورة، طرطوس، سوريا",
            latitude:34.88660270893736,
            longitude: 35.88312854239993
        },
         images:["/images/hotels/antra.jpg",
                 ],
        star_rating: 3.8,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Tartous Grand Hotel",
        description:"the first 5 stars hotel in Tartous city , it blends timeless elegance with modern comfort, providing unmatched service and luxurious accommodations for an unforgettable stay.",
        cityId:"6a0aed01c0f4388a89553a13",
        location:{
            address:"VVJJ+FQV، الكورنيش البحري، طرطوس، سوريا",
            latitude:34.88140282230841,
            longitude: 35.88203428839523
        },
         images:["/images/hotels/grand1.jpg",
                 "/images/hotels/grand2.jpg"],
        star_rating: 3.7,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    // There are no Hotels In IDLIB
    // DEIR EZ ZOR
    {
        title:"Hotel Furat Cham Palace",
        description:"It is a hotel next to the great Euphrates River",
        cityId:"6a0aed01c0f4388a89553a16",
        location:{
            address:"9464+F93، ديرالزور، سوريا",
            latitude:35.36121402102352,
            longitude: 40.10592805771061
        },
         images:["/images/hotels/furat1.jpg",
                 "/images/hotels/furat2.jpg"],
        star_rating: 3.9,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Ziad Hotel",
        description:"A Four-star hotel",
        cityId:"6a0aed01c0f4388a89553a16",
        location:{
            address:"84QR+MPH، ديرالزور، سوريا",
            latitude:35.339331255307954,
            longitude:  40.14188208656096
        },
         images:["/images/hotels/ziad1.jpg",
                 ],
        star_rating: 3.8,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"BADIA CHAM",
        description:"Because you deserve an unforgettable stay",
        cityId:"6a0aed01c0f4388a89553a16",
        location:{
            address:"84XG+GXV، ديرالزور، سوريا",
            latitude:35.34896188638431,
            longitude: 40.12731608286109
        },
         images:["/images/hotels/badia1.jpg",
                 "/images/hotels/badia2.jpg"],
        star_rating: 4.2,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    // AL HASAKAH HOTELS
    {
        title:"Yozarsef Hotel",
        description:"Upscale accommodation, exceptional hotel service, and a restaurant with a tranquil atmosphere.",
        cityId:"6a0aed01c0f4388a89553a17",
        location:{
            address:"GP8Q+CX7، الحسكة، سوريا",
            latitude:36.516154405844226,
            longitude: 40.73987748468488
        },
         images:["/images/hotels/yoza1.jpg",
                 "/images/hotels/yoza2.jpg"],
        star_rating: 1.0,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    // DARAA HOTELS
    {
        title:"White Rose Hotel",
        description:"Enjoy our high-quality services.",
        cityId:"6a0aed01c0f4388a89553a18",
        location:{
            address:"J4H4+VFM، شارع الجمهورية، درعا، سوريا",
            latitude:32.6298874572202,
            longitude: 36.10622864423583
        },
         images:["/images/hotels/rose1.jpg",
                 "/images/hotels/rose2.jpg"],
        star_rating: 3.4,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    // AS SUWAYDA HOTELS
    {
        title:"Suwaida Tourist Hotel - Dionysius",
        description:"Enjoy our high-quality services.",
        cityId:"6a0aed01c0f4388a89553a19",
        location:{
            address:"PH5C+GX5، السويداء، سوريا",
            latitude:32.70887221669269,
            longitude: 36.572478500065415
        },
         images:["/images/hotels/dio1.jpg",
                 "/images/hotels/dio2.jpg"],
        star_rating: 4.1,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    // THERE ARE NO HOTELS IN QUNEITRA

    // RIF DIMASHQ
    {
        title:"Sheraton Ma'aret Sednaya Hotel and Resort",
        description:"Book your stay and enjoy luxury redefined",
        cityId:"6a0aed01c0f4388a89553a1b",
        location:{
            address:"M98H+M6V  معرة صيدنايا، سوريا",
            latitude:33.666875904863026,
            longitude: 36.37832584979638
        },
         images:["/images/hotels/seid1.jpg",
                 "/images/hotels/seid2.jpg"],
        star_rating: 4.1,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Bloudan Grand Hotel",
        description:"It lies between the Zabadani plain and the Bloudan mountains and is considered a natural oasis of enchanting beauty.",
        cityId:"6a0aed01c0f4388a89553a1b",
        location:{
            address:"P4CF+GRC، بلودان، سوريا",
            latitude:33.72148581166685,
            longitude:  36.124472584689855
        },
         images:["/images/hotels/bloudan1.jpg",
                 "/images/hotels/bloudan2.jpg"],
        star_rating: 4.3,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Monte Rosa Hotel",
        description:"A wonderful resort in Zabadani, near Lake Zarzar",
        cityId:"6a0aed01c0f4388a89553a1b",
        location:{
            address:"J2MJ+JRM، الروضة، سوريا",
            latitude:33.63520356826979,
            longitude: 36.032062758630985
        },
         images:["/images/hotels/monte1.jpg",
                 "/images/hotels/monte2.jpg"],
        star_rating: 3.9,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
    {
        title:"Yafour Hotel and Resort",
        description:"The resort is full of avtivities like swimming pool, bowling , snooker, deliciouse food , great service, it's near to damascus about 20 minitues by car.",
        cityId:"6a0aed01c0f4388a89553a1b",
        location:{
            address:"G32X+9P7، يعفور، سوريا",
            latitude:33.50095430589874,
            longitude: 36.09931090004729
        },
         images:["/images/hotels/yafour1.jpg",
                 "/images/hotels/yafour2.jpg"],
        star_rating: 4.0,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:[
        "6a0aed01c0f4388a89553a25", // wifi
        "6a0aed01c0f4388a89553a26",  // free breakfast
        "6a0aed01c0f4388a89553a28"// restaurant
    ]
    },
    {
        title:"Damascus Airport Hotel",
        description:"Hotel is near to the Airport.",
        cityId:"6a0aed01c0f4388a89553a1b",
        location:{
            address:"CG55+M6W، جديدة الخاص، سوريا",
            latitude:33.40930886991656,
            longitude: 36.508193346083864
        },
         images:["/images/hotels/air1.jpg",
                 "/images/hotels/air2.jpg"],
        star_rating: 3.6,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a29", // خدمة تجفيف ملابس
                   "6a0aed01c0f4388a89553a2a", // رجال امن 24 ساعة
                   "6a0aed01c0f4388a89553a2b", // بواب
        ]
    },
    {
        title:"Ebla Hotel",
        description:"The Ebla Umayyad Palace Hotel and Conference Center complex is situated amidst a breathtakingly beautiful green oasis, surrounded by a number of artificial lakes.",
        cityId:"6a0aed01c0f4388a89553a1b",
        location:{
            address:"C9GJ+R8M، سوريا",
            latitude:33.42719237268948,
            longitude: 36.38075248471295
        },
         images:["/images/hotels/ebla1.jpg",
                 "/images/hotels/ebla2.jpg"],
        star_rating: 4.3,
        hotelRoom: [
        {
            roomType: "Single",
            pricePerNight: 90,
            capacity: 1,
            quantity: 5 
        },
        {
            roomType: "Double",
            pricePerNight: 160,
            capacity: 2,
            quantity: 10
        },
        {
            roomType: "Suite",
            pricePerNight: 350,
            capacity: 3,
            quantity: 2
        },
        {
            roomType: "Family",
            pricePerNight: 280,
            capacity: 4,
            quantity: 3
        }
        ],
        amenities:["6a0aed01c0f4388a89553a2d", // مسبح
                   "6a0aed01c0f4388a89553a27", // غرفة اجتماع
                   "6a0aed01c0f4388a89553a2c", // مكان تبديل عملة   
        ]
    },
]

module.exports={hotels}