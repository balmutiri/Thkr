const express = require("express");
const cors = require('cors');

const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

const allowedOrigins = ['https://athkar-sa.com', 'http://athkar-sa.com'];

app.use(cors({
  origin: allowedOrigins, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
}));

app.get("/api/azkar-list", (req, res) => {
  let azkarList = 
  [
    {
      "title": "أذكار الصباح",
      "category": "morning",
      "content": [
        {
            "zekr": "الله لا إلـه إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم",
            "repeat": 1,
            "bless": "من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح.",
            "isQuranVerse": true
        },
        {
            "zekr": "قل هو الله احد، الله لصمد، لم يلد ولم يولد، ولم يكن له كفوا أحد.",
            "repeat": 3,
            "bless": "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين).",
            "isQuranVerse": true
        },
        {
            "zekr": "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
            "repeat": 3,
            "isQuranVerse": true,
            "bless": "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)."
        },
        {
            "zekr": "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
            "repeat": 3,
            "isQuranVerse": true,
            "bless": "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)."
        },
        {
            "zekr": "أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ .",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": "من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح."
        },
        {
            "zekr": "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": "من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة."
        },
        {
            "zekr": "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.",
            "repeat": 4,
            "isQuranVerse": false,
            "bless": "من قالها أعتقه الله من النار."
        },
        {
            "zekr": "اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": "من قالها حين يصبح أدى شكر يومه."
        },
        {
            "zekr": "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.",
            "repeat": 7,
            "isQuranVerse": false,
            "bless": "من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة."
        },
        {
            "zekr": "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": "لم يضره من الله شيء."
        },
        {
            "zekr": "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَنَصْـرَهُ ، وَنـورَهُ وَبَـرَكَتَـهُ ، وَهُـداهُ ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى آلِ إِبْرَاهِيمَ،إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.",
            "repeat": 10,
            "isQuranVerse": false,
            "bless": "من صلى على حين يصبح وحين يمسى ادركته شفاعتى يوم القيامة."
        },
        {
            "zekr": "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان."
        },
        {
            "zekr": "سُبْحـانَ اللهِ وَبِحَمْـدِهِ.",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ. لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلَّا أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ."
        },
        {
            "zekr": "أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "مائة حسنة، ومُحيت عنه مائة سيئة، وكانت له حرزاً من الشيطان حتى يمسى."
        }
    ]
  },
  {
    "title": "أذكار المساء",
    "category": "night",
    "content": [
        {
            "zekr": "الله لا إلـه إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم",
            "repeat": 1,
            "isQuranVerse": true,
            "bless": "من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح."
        },
        {
            "zekr": " آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِين. ",
            "repeat": 1,
            "isQuranVerse": true,
            "bless": " من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه."
        },
        {
            "zekr": " قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.",
            "repeat": 3,
            "isQuranVerse": true,
            "bless": "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)."
        },
        {
            "zekr": " قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
            "repeat": 3,
            "isQuranVerse": true,
            "bless": "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)."
        },
        {
            "zekr": "  قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
            "repeat": 3,
            "isQuranVerse": true,
            "bless": "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)."
        },
        {
            "zekr": "أَمْسَيْـنا وَأَمْسـى المُـلْكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ .",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": "من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح."
        },
        {
            "zekr": "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": "من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة."
        },
        {
            "zekr": "اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.",
            "repeat": 4,
            "isQuranVerse": false,
            "bless": "من قالها أعتقه الله من النار."
        },
        {
            "zekr": "اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": "من قالها حين يصبح أدى شكر يومه."
        },
        {
            "zekr": "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.",
            "repeat": 7,
            "isQuranVerse": false,
            "bless": "من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة."
        },
        {
            "zekr": "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": "لم يضره من الله شيء."
        },
        {
            "zekr": "اللّهُـمَّ بِكَ أَمْسَيْـنا وَبِكَ أَصْـبَحْنا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "أَمْسَيْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "أَمْسَيْنا وَأَمْسَى المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَنَصْـرَهُ ، وَنـورَهُ وَبَـرَكَتَـهُ ، وَهُـداهُ ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى آلِ إِبْرَاهِيمَ،إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَآلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.",
            "repeat": 10,
            "isQuranVerse": false,
            "bless": "من صلى على حين يصبح وحين يمسى ادركته شفاعتى يوم القيامة."
        },
        {
            "zekr": "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.",
            "repeat": 3,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان."
        },
        {
            "zekr": "سُبْحـانَ اللهِ وَبِحَمْـدِهِ.",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ. لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلَّا أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ."
        }
    ]
  },
  {
    "title": "أذكار الصلاة",
    "category": "praying",
    "content": [
        {
            "zekr": " أسـتغفر الله،  أسـتغفر الله،  أسـتغفر الله.اللهـم أنـت السلام ، ومـنك السلام ، تباركت يا ذا الجـلال والإكـرام .",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "لا إله إلا الله وحده لا شريك له، له المـلك وله الحمد، وهو على كل شيء قدير، اللهـم لا مانع لما أعطـيت، ولا معطـي لما منـعت، ولا ينفـع ذا الجـد منـك الجـد.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "لا إله إلا الله, وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير، لا حـول ولا قـوة إلا بالله، لا إله إلا اللـه، ولا نعـبـد إلا إيـاه, له النعـمة وله الفضل وله الثـناء الحـسن، لا إله إلا الله مخلصـين لـه الدين ولو كـره الكـافرون.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "سـبحان الله، والحمـد لله ، والله أكـبر.",
            "repeat": 33,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": "لا إله إلا الله وحـده لا شريك له، له الملك وله الحمد، وهو على كل شيء قـدير.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        },
        {
            "zekr": " قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.'. ",
            "repeat": 3,
            "isQuranVerse": true,
            "bless": " ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى. "
        },
        {
            "zekr": " قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
            "repeat": 3,
            "isQuranVerse": true,
            "bless": " ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى. "
        },
        {
            "zekr": " قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ.",
            "repeat": 3,
            "isQuranVerse": true,
            "bless": " ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى. "
        },
        {
            "zekr": "الله لا إلـه إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم",
            "repeat": 1,
            "isQuranVerse": true,
            "bless": null
        },
        {
            "zekr": " لا إله إلا الله وحـده لا شريك له، له الملك وله الحمد، يحيـي ويمـيت وهو على كل شيء قدير.",
            "repeat": 10,
            "isQuranVerse": false,
            "bless": " عَشْر مَرّات بَعْدَ المَغْرِب وَالصّـبْح. "
        },
        {
            "zekr": " اللّهُـمَّ إِنِّـي أَسْأَلُـكَ عِلْمـاً نافِعـاً وَرِزْقـاً طَيِّـباً ، وَعَمَـلاً مُتَقَـبَّلاً.",
            "repeat":1,
            "isQuranVerse": false,
            "bless": " بَعْد السّلامِ من صَلاةِ الفَجْر. "
        },
        {
            "zekr": "اللهم أجرني من النار. ",
            "repeat": 7,
            "isQuranVerse": false,
            "bless": " بعد صلاة الصبح والمغرب. "
        },
        {
            "zekr": "اللهم أعني على ذكرك وشكرك وحسن عبادتك.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": null
        }
    ]
},
{
  "title": "أذكار النوم",
  "category": "sleep",
  "content":[
    {
      "zekr": "بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي ، وَبِكَ أَرْفَعُـه، فَإِن أَمْسَـكْتَ نَفْسـي فارْحَـمْها ، وَإِنْ أَرْسَلْتَـها فاحْفَظْـها بِمـا تَحْفَـظُ بِه عِبـادَكَ الصّـالِحـين.",
      "repeat": 1,
      "isQuranVerse": false,
      "bless": null
  },
  {
      "zekr": "اللّهُـمَّ إِنَّـكَ خَلَـقْتَ نَفْسـي وَأَنْـتَ تَوَفّـاهـا لَكَ ممَـاتـها وَمَحْـياها ، إِنْ أَحْيَيْـتَها فاحْفَظْـها ، وَإِنْ أَمَتَّـها فَاغْفِـرْ لَـها . اللّهُـمَّ إِنَّـي أَسْـأَلُـكَ العـافِـيَة.",
      "repeat": 1,
      "isQuranVerse": false,
      "bless": null
  },
  { 
      "zekr": "اللّهُـمَّ قِنـي عَذابَـكَ يَـوْمَ تَبْـعَثُ عِبـادَك.",
      "repeat": 3,
      "isQuranVerse": false,
      "bless": null
  },
  {
      "zekr": "بِاسْـمِكَ اللّهُـمَّ أَمـوتُ وَأَحْـيا.",
      "repeat": 1,
      "isQuranVerse": false,
      "bless": null
  },
  {
      "zekr": "الـحَمْدُ للهِ الَّذي أَطْـعَمَنا وَسَقـانا، وَكَفـانا، وَآوانا، فَكَـمْ مِمَّـنْ لا كـافِيَ لَـهُ وَلا مُـؤْوي.",
      "repeat": 1,
      "isQuranVerse": false,
      "bless": null
  },
  {
      "zekr": "اللّهُـمَّ عالِـمَ الغَـيبِ وَالشّـهادةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كُـلِّ شَـيءٍ وَمَليـكَه، أَشْهـدُ أَنْ لا إِلـهَ إِلاّ أَنْت، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي، وَمِن شَـرِّ الشَّيْـطانِ وَشِـرْكِه، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم .",
      "repeat": 1,
      "isQuranVerse": false,
      "bless": null
  },
  {
      "zekr": "اللّهُـمَّ أَسْـلَمْتُ نَفْـسي إِلَـيْكَ، وَفَوَّضْـتُ أَمْـري إِلَـيْكَ، وَوَجَّـهْتُ وَجْـهي إِلَـيْكَ، وَأَلْـجَـاْتُ ظَهـري إِلَـيْكَ، رَغْبَـةً وَرَهْـبَةً إِلَـيْكَ، لا مَلْجَـأَ وَلا مَنْـجـا مِنْـكَ إِلاّ إِلَـيْكَ، آمَنْـتُ بِكِتـابِكَ الّـذي أَنْزَلْـتَ وَبِنَبِـيِّـكَ الّـذي أَرْسَلْـت.",
      "repeat": 1,
      "isQuranVerse": false,
      "bless":null
  }
  ,
  {
      "zekr": "سُبْحَانَ اللَّهِ. ",
      "repeat": 33,
      "isQuranVerse": false,
      "bless":null
  },
  {
      "zekr": "الْحَمْدُ لِلَّهِ",
      "repeat": 33,
      "isQuranVerse": false,
      "bless":null
  },
  {
      "zekr": "اللَّهُ أَكْبَرُ.",
      "repeat": 34,
      "isQuranVerse": false,
      "bless":null
  },
  {
      "zekr": "يجمع كفيه ثم ينفث فيهما والقراءة فيهما: {قل هو الله أحد} و{قل أعوذ برب الفلق} و{قل أعوذ برب الناس} ومسح ما استطاع من الجسد يبدأ بهما على رأسه ووجه وما أقبل من جسده.",
      "repeat": "3",
      "isQuranVerse": false,
      "bless":null
  },
  {
      "zekr": " آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ.",
      "repeat": 1,
      "isQuranVerse": true,
      "bless":"من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه."
  },
  {
      "zekr": "الله لا إلـه إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم",
      "repeat": 1,
      "isQuranVerse": true,
      "bless":"أجير من الجن حتى يصبح"
  }

]
},
{
    "title": "التسبيح والاستغفار",
    "category": "msbha",
    "content": [
        {
            "zekr": "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ.",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "من قالها مائة مرة كانت له عدل أربع رقاب، وكتبت له مائة حسنة، وحطت عنه مائة سيئة، وكانت له حرزًا من الشيطان يومه ذلك حتى يمسي."
        },
        {
            "zekr": "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ.",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "من قالها مائة مرة غفرت له ذنوبه وإن كانت مثل زبد البحر."
        },
        {
            "zekr": "لا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "من قالها مائة مرة كانت له عدل عشر رقاب وكتبت له مائة حسنة، ومحيت عنه مائة سيئة، وكانت له حرزًا من الشيطان يومه ذلك حتى يمسي."
        },
        {
            "zekr": "أستغفر الله وأتوب إليه.",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "من قالها مائة مرة غفر الله ذنوبه وإن كان قد فرّ من الزحف."
        }
    ]
  },
  {
    "title": "الورد اليومي",
    "category": "daily",
    "content": [
        {
            "zekr": "سبحان الله وبحمده",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "تمحى الخطايا وإن كانت مثل زبد البحر."
        },
        {
            "zekr": "سبحان الله العظيم وبحمده",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "تُغرس له نخلة في الجنة عن كل مرة."
        },
        {
            "zekr": "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "كان له عدل عشر رقاب، وكتبت له مائة حسنة، ومحيت عنه مائة سيئة، وكانت له حرزًا من الشيطان يومه ذلك حتى يمسي."
        },
        {
            "zekr": "اللهم صلِّ وسلم وبارك على نبينا محمد",
            "repeat": 10,
            "isQuranVerse": false,
            "bless": "يصلي الله عليه عشرًا ويغفر له عشر خطيئات."
        },
        {
            "zekr": "أستغفر الله وأتوب إليه",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "يفتح له باب التوبة والمغفرة."
        },
        {
            "zekr": "سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر",
            "repeat": 100,
            "isQuranVerse": false,
            "bless": "أحب الكلام إلى الله، ويثقل الميزان بالحسنات."
        },
        {
            "zekr": "حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم",
            "repeat": 7,
            "isQuranVerse": false,
            "bless": "من قالها سبع مرات كفاه الله ما أهمه."
        },
        {
            "zekr": "اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي وأبوء بذنبي، فاغفر لي، فإنه لا يغفر الذنوب إلا أنت.",
            "repeat": 1,
            "isQuranVerse": false,
            "bless": "من قالها في الصباح والمساء غفر له."
        }
    ]
}
];

  res.send(azkarList);
});

let randomMessages = [
    "استمر في المحاولة، الفشل مجرد درس وليس النهاية",
    "كل لحظة تمر عليك هي فرصة جديدة لتكون أفضل",
    "العطاء لا ينقص من مالك، بل يزيده بركة",
    "سامح الآخرين، فالتسامح راحة للقلب",
    "كل يوم هو صفحة جديدة، اكتب فيها ما يسعدك",
    "اجعل ذكرك لله عادة، فهو مفتاح السعادة والراحة",
    "كل كلمة طيبة تقولها قد تغير حياة شخص للأفضل",
    "لا تجعل مخاوفك تسيطر عليك، ثق بالله دائمًا",
    "ابتعد عن السلبية، وابحث عن الأمور الجميلة في حياتك",
    "عامل الناس كما تحب أن تُعامل، فالخير يعود إليك",
    "كل صباح هو فرصة جديدة لتكون شخصًا أفضل",
    "لا تفقد الأمل، فالحياة مليئة بالمفاجآت السعيدة",
    "تعلم شيئًا جديدًا كل يوم، فالمعرفة نور",
    "النجاح ليس صدفة، بل نتيجة الاجتهاد والمثابرة",
    "الابتسامة في وجه الآخرين صدقة، فلا تبخل بها",
    "كلما زاد إيمانك، زاد اطمئنان قلبك",
    "احرص على رضا والديك، فدعاؤهما مفتاح التوفيق",
    "الثقة بالنفس هي بداية كل نجاح",
    "كل يوم جديد هو فرصة جديدة، استغلها بحكمة",
    "لا تخف من الفشل، فهو مجرد خطوة نحو النجاح",
    "قل الحمد لله في كل حال، فالشكر يزيد النعم",
    "تحلَّ بالصبر، فهو مفتاح الفرج",
    "النجاح يبدأ من داخلك، ثق بنفسك وانطلق",
    "كل خير تفعله يعود إليك ولو بعد حين",
    "الحياة قصيرة، لا تضيعها في الحزن",
    "السعادة تأتي عندما تركز على النعم التي لديك",
    "اترك أثرًا طيبًا أينما ذهبت",
    "تحلى بالصبر، فالأمور الجميلة تأخذ وقتًا",
    "العائلة كنز ثمين، حافظ عليهم وكن قريبًا منهم",
    "اجعل عملك متقنًا، فالإتقان مفتاح النجاح",
    "مهما كانت الظروف، ثق أن الله معك",
    "لا تخجل من طلب المساعدة، فالجميع يحتاج الدعم",
    "النجاح ليس نهاية الطريق، بل بداية رحلة جديدة",
    "العفو عند المقدرة هو من شيم العظماء",
    "عش ببساطة، فالسعادة ليست في الأشياء المادية"
];


function getDailyMessage() {
    const today = new Date();
    const dayOfYear = Math.floor(
        (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );
    const index = dayOfYear % randomMessages.length;
    return randomMessages[index];
}

app.get("/api/random-message", (req, res) => {
    res.json({ message: getDailyMessage() });
});

app.get("/api/random-zker", (req, res) => {
    const azkerList = [
        { text: "سبحان الله وبحمده سبحان الله العظيم" },
        { text: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير" },
        { text: "اللهم صل وسلم على نبينا محمد" },
        { text: "أستغفر الله وأتوب إليه" },
        { text: "سبحان الله، والحمد لله، ولا إله إلا الله، والله أكبر" },
        { text: "اللهم اغفر لي ولوالدي وللمؤمنين يوم يقوم الحساب" },
        { text: "اللهم إني أسألك العفو والعافية في الدنيا والآخرة" },
        { text: "يا حي يا قيوم برحمتك أستغيث" }
    ];

    const randomIndex = Math.floor(Math.random() * azkerList.length);
    const randomZker = azkerList[randomIndex].text;

    res.json({ message: randomZker});
});

app.get("/", (req, res) => {
    res.send("Hello from Render!");
});


app.listen(PORT, () => console.log("API Server listening on port ${PORT}!"));


