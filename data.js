const cities = [
    {
        name: "دمشق",
        description: "عاصمة الياسمين وأقدم عاصمة مأهولة في التاريخ، تمتاز بأحيائها القديمة وأسواقها التراثية.",
        image: "https://example.com/images/damascus.jpg"
    },
    {
        name: "حلب",
        description: "عاصمة الشمال العريقة، الشهيرة بقلعتها الشامخة وأسواقها المسقوفة ومأكولاتها الشهية.",
        image: "https://example.com/images/aleppo.jpg"
    },
    {
        name: "حمص",
        description: "مدينة ابن الوليد، تقع في وسط سوريا وتمتاز بموقعها الاستراتيجي ونهر العاصي وعراقتها.",
        image: "https://example.com/images/homs.jpg"
    },
    {
        name: "حماه",
        description: "مدينة النواعير التاريخية، الهادئة والجميلة الممتدة على ضفاف نهر العاصي.",
        image: "https://example.com/images/hama.jpg"
    },
    {
        name: "طرطوس",
        description: "لؤلؤة الساحل السوري، تمتاز بشواطئها الجميلة، جزيرة أرواد، وآثارها الصليبية العريقة.",
        image: "https://example.com/images/tartous.jpg"
    },
    {
        name: "اللاذقية",
        description: "عروس الساحل، تضم ميناء سوريا الرئيسي وتمتاز بطبيعتها الجبلية الخضراء المطلة على البحر.",
        image: "https://example.com/images/latakia.jpg"
    },
    {
        name: "إدلب",
        description: "إدلب الخضراء، الشهيرة بأشجار الزيتون المباركة، طبيعتها الساحرة، ومواقعها الأثرية والتاريخية العريقة مثل إيبلا.",
        image: "https://example.com/images/idlib.jpg"
    },
    {
        name: "دير الزور",
        description: "عروس الفرات، تمتاز بطبيعتها النهرية الساحرة، وإرثها التاريخي العريق الممتد على ضفاف نهر الفرات.",
        image: "https://example.com/images/deir-ez-zor.jpg"
    },
    {
        name: "الحسكة",
        description: "قلب الجزيرة السورية، تمتاز بتنوعها الثقافي الغني، وأراضيها الزراعية الخصبة، ومواقعها الأثرية الهامة مثل تل حلف.",
        image: "https://example.com/images/al-hasakah.jpg"
    },
    {
        name: "درعا",
        description: "مهد الحضارات في سهل حوران، الشهيرة بمسرح بصرى الشام الأثري الدولي وسهولها الممتدة.",
        image: "https://example.com/images/daraa.jpg"
    },
    {
        name: "السويداء",
        description: "مدينة الجبل الأثرية، تمتاز بطبيعتها الجبلية وبقاياها الأثرية الفريدة المبنية من الحجر البازلتي الأسود.",
        image: "https://example.com/images/as-suwayda.jpg"
    },
    {
        name: "القنيطرة",
        description: "أرض الجولان الشامخ، تمتاز بطبيعتها الخضراء الغنية بالينابيع والمياه العذبة ومواقعها التاريخية.",
        image: "https://example.com/images/quneitra.jpg"
    },
    {
        name: "ريف دمشق",
        description: "المنطقة المحيطة بالعاصمة وتضم مصايف شهيرة وبلدات تاريخية عريقة مثل بلودان، صيدنايا، ومعلولا الأثرية.",
        image: "https://example.com/images/rif-dimashq.jpg"
    }
];

const amenities = [
    { name: "طعام سفري", icon: "takeout_dining" },
    { name: "الجلوس داخل المكان", icon: "chair" },
    { name: "أماكن جلوس في الهواء الطلق", icon: "deck" },
    { name: "طعام حلال", icon: "halal" },
    { name: "خيارات نباتية", icon: "eco" },
    { name: "بار داخل المكان", icon: "local_bar" },
    { name: "مناسب للأطفال", icon: "child_care" },
    { name: "خدمة ركن السيارات", icon: "local_parking" },
    { name: "موقف سيارات صالح للكراسي المتحركة", icon: "accessible" },
    { name: "وايفاي مجاني", icon: "WIFI" },
    { name: "فطور مجاني", icon: "free breakfast" },
    { name: "غرف اجتماع", icon: "meeting room" },
    { name: "مطعم", icon: "restaurant" },
    { name: "خدمة غرف تجفيف ملابس", icon: "dry cleaning" },
    { name: "رجال أمن 24 ساعة", icon: "24-hour security" },
    { name: "بواب", icon: "conceirge" },
    { name: "مكان تبديل عملة", icon: "currency exchange" },
    { name: "مسبح", icon: "swimming pool" }
];

module.exports = {
    cities,
    amenities
};