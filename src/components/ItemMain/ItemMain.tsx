import React, { useEffect, useState, FC, Fragment } from 'react';
import style from './ItemMain.module.scss';
import CardItem from '../CardItem/CardItem';
import { ReactComponent as Setting } from '../../images/Setting.svg';
import { ReactComponent as Download } from '../../images/Download.svg';
import Im1 from '../../images/CardsImages/Алхимический сосуд.png';
import Im2 from '../../images/CardsImages/Амулет защиты от обнаружения и поиска.png';
import Im3 from '../../images/CardsImages/Амулет здоровья.png';
import Im4 from '../../images/CardsImages/Амулет планов.png';
import Im5 from '../../images/CardsImages/Аппарат квалиша.png';
import Im6 from '../../images/CardsImages/Адамантиновый доспех.png';
import Im7 from '../../images/CardsImages/Брошь защиты.png';
import Im8 from '../../images/CardsImages/Булава кары.png';
import Im9 from '../../images/CardsImages/Булава распада.png';
import Im10 from '../../images/CardsImages/Булава ужаса.png';
import Im11 from '../../images/CardsImages/Бусина силы.png';
import Im12 from '../../images/CardsImages/Бутылка с ифритом.png';
import Im13 from '../../images/CardsImages/Веер ветра.png';
import Im14 from '../../images/CardsImages/Веревка лазания.png';
import Im15 from '../../images/CardsImages/Веревка опутывания.png';
import Im16 from '../../images/CardsImages/Вечнодымящаяся бутылка.png';
import Im17 from '../../images/CardsImages/Волна.png';
import Im18 from '../../images/CardsImages/Волшебная палочка паутины.png';
import Im19 from '../../images/CardsImages/Волшебная палочка превращения.png';
import Im20 from '../../images/CardsImages/Волшебная палочка секретов.png';
import Im21 from '../../images/CardsImages/Волшебная палочка сковывания.png';
import Im22 from '../../images/CardsImages/Волшебная палочка снарядов.png';
import Im23 from '../../images/CardsImages/Волшебная палочка страха.png';
import Im24 from '../../images/CardsImages/Волшебная палочка чудес.png';
import Im25 from '../../images/CardsImages/Волшкбная палочка молний.png';
import Im26 from '../../images/CardsImages/Волшкбная палочка обнаружения врагов.png';
import Im27 from '../../images/CardsImages/Волшкбная палочка обнаружения магии.png';
import Im28 from '../../images/CardsImages/Волшкбная палочка огненных шаров.png';
import Im29 from '../../images/CardsImages/Волшкбная палочка паралича.png';
import Im30 from '../../images/CardsImages/Волшкбная палочка.png';
import Im31 from '../../images/CardsImages/Вор девяти жизней.png';
import Im32 from '../../images/CardsImages/Глаз и рука ведьмы.png';
import Im33 from '../../images/CardsImages/Дварфийский метатель.png';
import Im34 from '../../images/CardsImages/Демонический доспех.png';
import Im35 from '../../images/CardsImages/Доспех из драконьей чешуи.png';
import Im36 from '../../images/CardsImages/Доспех моряка.png';
import Im37 from '../../images/CardsImages/Доспех моряка2.png';
import Im38 from '../../images/CardsImages/Доспех неуязвимости.png';
import Im39 from '../../images/CardsImages/Доспех сопротивления.png';
import Im40 from '../../images/CardsImages/Жаровня командования огненными элементалями.png';
import Im41 from '../../images/CardsImages/Жезл бдительности.png';
import Im42 from '../../images/CardsImages/Жезл величественной мощи.png';
import Im43 from '../../images/CardsImages/Жезл воскрешения.png';
import Im44 from '../../images/CardsImages/Жезл поглащения.png';
import Im45 from '../../images/CardsImages/Жезл правления.png';
import Im46 from '../../images/CardsImages/Жезл хранителя договора.png';
import Im47 from '../../images/CardsImages/Жезл щупалец.png';
import Im48 from '../../images/CardsImages/Железная фляга.png';
import Im49 from '../../images/CardsImages/Жемчужина силы.png';
import Im50 from '../../images/CardsImages/Жестокое оружие.png';
import Im51 from '../../images/CardsImages/Живой щит.png';
import Im52 from '../../images/CardsImages/Заполярные сапоги.png';
import Im53 from '../../images/CardsImages/Защитник.png';
import Im54 from '../../images/CardsImages/Зелье газообразной формы.png';
import Im55 from '../../images/CardsImages/Зелье героизма.png';
import Im56 from '../../images/CardsImages/Зелье неуязвимости.png';
import Im57 from '../../images/CardsImages/Зелье скорости.png';
import Im58 from '../../images/CardsImages/Зеркало похищения жизни.png';
import Im59 from '../../images/CardsImages/Инструмент бардов1.png';
import Im60 from '../../images/CardsImages/Инструмент бардов2.png';
import Im61 from '../../images/CardsImages/Инструмент бардов3.png';
import Im62 from '../../images/CardsImages/Инструмент бардов4.png';
import Im63 from '../../images/CardsImages/Инструмент бардов5.png';
import Im64 from '../../images/CardsImages/Инструмент бардов6.png';
import Im65 from '../../images/CardsImages/Инструмент бардов7.png';
import Im66 from '../../images/CardsImages/Кадило контролирования воздушных элементалей.png';
import Im67 from '../../images/CardsImages/Камень зрения.png';
import Im68 from '../../images/CardsImages/Камень контролирования земляных элементалей.png';
import Im69 from '../../images/CardsImages/Камень сияния.png';
import Im70 from '../../images/CardsImages/Камень удачи.png';
import Im71 from '../../images/CardsImages/Камень элементаля желтый бриллиант.png';
import Im72 from '../../images/CardsImages/Камень элементаля изумруд.png';
import Im73 from '../../images/CardsImages/Камень элементаля красный корунд.png';
import Im74 from '../../images/CardsImages/Камень элементаля синий сапфир.png';
import Im75 from '../../images/CardsImages/Камни послания.png';
import Im76 from '../../images/CardsImages/Кинжал яда.png';
import Im77 from '../../images/CardsImages/Клинок удачи.png';
import Im78 from '../../images/CardsImages/Ковер-самолет.png';
import Im79 from '../../images/CardsImages/Колода иллюзий.png';
import Im80 from '../../images/CardsImages/Колокольчик открывания.png';
import Im81 from '../../images/CardsImages/Колчан Элонны.png';
import Im82 from '../../images/CardsImages/Кольуо прыжков.png';
import Im83 from '../../images/CardsImages/Кольцо влияния на животных.png';
import Im84 from '../../images/CardsImages/Кольцо защиты разума.png';
import Im85 from '../../images/CardsImages/Кольцо защиты.png';
import Im86 from '../../images/CardsImages/Кольцо командования элементалями.png';
import Im87 from '../../images/CardsImages/Кольцо невидимости.png';
import Im88 from '../../images/CardsImages/Кольцо отражения заклинаний.png';
import Im89 from '../../images/CardsImages/Кольцо падающих звезд.png';
import Im90 from '../../images/CardsImages/Кольцо падения перышком.png';
import Im91 from '../../images/CardsImages/Кольцо плавания.png';
import Im92 from '../../images/CardsImages/Кольцо призыва джинна.png';
import Im93 from '../../images/CardsImages/Кольцо проникающего зрения.png';
import Im94 from '../../images/CardsImages/Кольцо регенирации.png';
import Im95 from '../../images/CardsImages/Кольцо свободных действий.png';
import Im96 from '../../images/CardsImages/Кольцо сопротивления.png';
import Im97 from '../../images/CardsImages/Кольцо тарана.png';
import Im98 from '../../images/CardsImages/Кольцо телекинеза.png';
import Im99 from '../../images/CardsImages/Кольцо тепла.png';
import Im100 from '../../images/CardsImages/Кольцо трех желаний.png';
import Im101 from '../../images/CardsImages/Кольцо уклонения.png';
import Im102 from '../../images/CardsImages/Кольцо хождения по воде.png';
import Im103 from '../../images/CardsImages/Кольцо хранения заклинаний.png';
import Im104 from '../../images/CardsImages/Кольчуга ифритов.png';
import Im105 from '../../images/CardsImages/Красивый проклепанный доспех.png';
import Im106 from '../../images/CardsImages/Крылатые сапоги.png';
import Im107 from '../../images/CardsImages/Крылья полета.png';
import Im108 from '../../images/CardsImages/Куб врат.png';
import Im109 from '../../images/CardsImages/Куб силового поля.png';
import Im110 from '../../images/CardsImages/Кувшин бесконечной воды.png';
import Im111 from '../../images/CardsImages/Латы дварфов.png';
import Im112 from '../../images/CardsImages/ленты Биларро.png';
import Im113 from '../../images/CardsImages/Ловящий стрелы щит.png';
import Im114 from '../../images/CardsImages/Лук клятвы.png';
import Im115 from '../../images/CardsImages/Лунный клинок.png';
import Im116 from '../../images/CardsImages/Мазь кеогтома.png';
import Im117 from '../../images/CardsImages/Мантия архимага.png';
import Im118 from '../../images/CardsImages/Мантия глаз.png';
import Im119 from '../../images/CardsImages/Мантия звезд.png';
import Im120 from '../../images/CardsImages/Мантия полезных предметов.png';
import Im121 from '../../images/CardsImages/Мантия сияющих цветов.png';
import Im122 from '../../images/CardsImages/Мантия сопротивления заклинаниям.png';
import Im123 from '../../images/CardsImages/Мгновенная крепость Даэрна.png';
import Im124 from '../../images/CardsImages/Медальон затягивающихся ран.png';
import Im125 from '../../images/CardsImages/Медальон защиты от ран.png';
import Im126 from '../../images/CardsImages/Медальон здоровья.png';
import Im127 from '../../images/CardsImages/Медальон мыслей.png';
import Im128 from '../../images/CardsImages/Метательное копье молний.png';
import Im129 from '../../images/CardsImages/Меч головоруб.png';
import Im130 from '../../images/CardsImages/Меч каса.png';
import Im131 from '../../images/CardsImages/Меч кражи жизни.png';
import Im132 from '../../images/CardsImages/Меч остроты.png';
import Im133 from '../../images/CardsImages/Мифрильный доспех.png';
import Im134 from '../../images/CardsImages/Молот грома.png';
import Im135 from '../../images/CardsImages/Морозный клинок.png';
import Im136 from '../../images/CardsImages/Наручи защиты.png';
import Im137 from '../../images/CardsImages/Наручи стрельбы из лука.png';
import Im138 from '../../images/CardsImages/Неподвижный жезл.png';
import Im139 from '../../images/CardsImages/Ночные очки.png';
import Im140 from '../../images/CardsImages/Обруч сжигания.png';
import Im141 from '../../images/CardsImages/Ожерелье адаптации.png';
import Im142 from '../../images/CardsImages/Ожерелье молитвенных четок.png';
import Im143 from '../../images/CardsImages/Ожереье огненных шаров.png';
import Im144 from '../../images/CardsImages/Оковы измерений.png';
import Im145 from '../../images/CardsImages/Оружие предупреждения.png';
import Im146 from '../../images/CardsImages/Очки орлиного зрения.png';
import Im147 from '../../images/CardsImages/Очки очарования.png';
import Im148 from '../../images/CardsImages/Парящая сфера.png';
import Im149 from '../../images/CardsImages/Перчатки ловли снарядов.png';
import Im150 from '../../images/CardsImages/Перчатки плавания и лазания.png';
import Im151 from '../../images/CardsImages/Плащ защиты.png';
import Im152 from '../../images/CardsImages/Плащ летучей мыши.png';
import Im153 from '../../images/CardsImages/Плащ невидимости.png';
import Im154 from '../../images/CardsImages/Плащ паука.png';
import Im155 from '../../images/CardsImages/Плащ ската.png';
import Im156 from '../../images/CardsImages/Плащ ускользания.png';
import Im157 from '../../images/CardsImages/Плащ шарлатана.png';
import Im158 from '../../images/CardsImages/Повязка интеллекта.png';
import Im159 from '../../images/CardsImages/Подковы ветра.png';
import Im160 from '../../images/CardsImages/Подковы скорости.png';
import Im161 from '../../images/CardsImages/Помело полета.png';
import Im162 from '../../images/CardsImages/Порошок исчезновения.png';
import Im163 from '../../images/CardsImages/Порошок чихания и удушья.png';
import Im164 from '../../images/CardsImages/Посох гадюки.png';
import Im165 from '../../images/CardsImages/Посох грома и молний.png';
import Im166 from '../../images/CardsImages/Посох иссушения.png';
import Im167 from '../../images/CardsImages/Посох леса.png';
import Im168 from '../../images/CardsImages/Посох лечения.png';
import Im169 from '../../images/CardsImages/Посох магов.png';
import Im170 from '../../images/CardsImages/Посох мороза.png';
import Im171 from '../../images/CardsImages/Посох огня.png';
import Im172 from '../../images/CardsImages/Посох очарования.png';
import Im173 from '../../images/CardsImages/Посох питона.png';
import Im174 from '../../images/CardsImages/Посох роя насекомых.png';
import Im175 from '../../images/CardsImages/Посох силы.png';
import Im176 from '../../images/CardsImages/Пояс дварфов.png';
import Im177 from '../../images/CardsImages/Пояс силы великанов.png';
import Im178 from '../../images/CardsImages/Превосходный клей.png';
import Im179 from '../../images/CardsImages/Рог вальгаллы.png';
import Im180 from '../../images/CardsImages/Рог взрыва.png';
import Im181 from '../../images/CardsImages/Рукавицы силы огра.png';
import Im182 from '../../images/CardsImages/Сапоги скорости.png';
import Im183 from '../../images/CardsImages/Сапоги ходьбы и прыжков.png';
import Im184 from '../../images/CardsImages/Свеча мольбы.png';
import Im185 from '../../images/CardsImages/Свирель канализации.png';
import Im186 from '../../images/CardsImages/Свирель ужаса.png';
import Im187 from '../../images/CardsImages/Свиток заклинания.png';
import Im188 from '../../images/CardsImages/Святой мститель.png';
import Im189 from '../../images/CardsImages/Скарабей защиты.png';
import Im190 from '../../images/CardsImages/Складная лодка.png';
import Im191 from '../../images/CardsImages/Солнечный клинок.png';
import Im192 from '../../images/CardsImages/Справочник быстрых действий.png';
import Im193 from '../../images/CardsImages/Справочник по големам.png';
import Im194 from '../../images/CardsImages/Справочник полезных упражнений.png';
import Im195 from '../../images/CardsImages/Справочник телесного здоровья.png';
import Im196 from '../../images/CardsImages/Стрела убийства.png';
import Im197 from '../../images/CardsImages/Сумка пожирания.png';
import Im198 from '../../images/CardsImages/Сумка с бобами.png';
import Im199 from '../../images/CardsImages/Сумка фокусов.png';
import Im200 from '../../images/CardsImages/Сумка хранения.png';
import Im201 from '../../images/CardsImages/Талисман абсолютного зла.png';
import Im202 from '../../images/CardsImages/Талисман сферы.png';
import Im203 from '../../images/CardsImages/Талисман чистого добра.png';
import Im204 from '../../images/CardsImages/Танцующий меч.png';
import Im205 from '../../images/CardsImages/Том лидерства и влияния.png';
import Im206 from '../../images/CardsImages/Том молчаливого языка.png';
import Im207 from '../../images/CardsImages/Том понимания.png';
import Im208 from '../../images/CardsImages/Том чистых мыслей.png';
import Im209 from '../../images/CardsImages/Топор берсерка.png';
import Im210 from '../../images/CardsImages/Топор владык дварфов.png';
import Im211 from '../../images/CardsImages/Трезубец командования рыбами.png';
import Im212 from '../../images/CardsImages/Туфли паука.png';
import Im213 from '../../images/CardsImages/Убийца великанов.png';
import Im214 from '../../images/CardsImages/Убийца драконов.png';
import Im215 from '../../images/CardsImages/Удобный рюкзак.png';
import Im216 from '../../images/CardsImages/Универсальный растворитель.png';
import Im217 from '../../images/CardsImages/Фонарь обнаружения.png';
import Im218 from '../../images/CardsImages/Хрустальный шар.png';
import Im219 from '../../images/CardsImages/Чаша командования водными элементалями.png';
import Im220 from '../../images/CardsImages/Чудесные краски нолзура.png';
import Im221 from '../../images/CardsImages/Шапка маскировки.png';
import Im222 from '../../images/CardsImages/Шлем блеска.png';
import Im223 from '../../images/CardsImages/Шлем понимания языков.png';
import Im224 from '../../images/CardsImages/Шлем притягивания снарядов.png';
import Im225 from '../../images/CardsImages/Шлем телепатии.png';
import Im226 from '../../images/CardsImages/Шлем телепортации.png';
import Im227 from '../../images/CardsImages/Щит от заклинаний.png';
import Im228 from '../../images/CardsImages/Эльфийские сапоги.png';
import Im229 from '../../images/CardsImages/Эльфийский плащь.png';
import Im230 from '../../images/CardsImages/Язык пламени.png';
import S1 from '../../images/Svitki/Свиток1.png';
import S2 from '../../images/Svitki/Свиток2.png';
import S3 from '../../images/Svitki/Свиток3.png';
import S4 from '../../images/Svitki/Свиток4.png';
import OptionCardImg from '../OptionCardImg/OptionCardImg';
import OptionCase from '../OptionCase/OptionCase';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import OptionAllain from '../OptionAllain/OptionAllain';
import BaseTip from '../BaseTip/BaseTip';
type AlertProps = {
};
const fontMas = ["BookerlyBold", "BookerlyBoldItalic", "BookerlyDisplayBoldItalic", "BookerlyDisplay", "BookerlyItalic", "BookerlyLightItalic", "BookerlyLight", "Bookerly", "EtnaFreeFont", "GogonoCocoaMochiCyrillic", "GULAGPavljenko", "HellasDustCyrillic", "MorningBreezeBold", "MorningBreezeItalic", "MorningBreezeLight", "MorningBreeze", "OldSoviet", "SquareMeal", "ZarubkaTypeRegular", "ZaychikRegular"];

const SpellMain = ({ }: AlertProps): JSX.Element => {
    const [cards, setCards] = useState<string[][]>([]);
    const [newCard, setNewCard] = useState<string[]>([]);
    const [CSV, setCSV] = useState("");
    const newConst = "\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";";
    const [newCSV, setNewCSV] = useState("\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";");
    const [makeCSV, setMakeCSV] = useState(0);
    const [showOptions, setShowOptions] = useState(true);
    const [showRedactor, setShowRedactor] = useState(true);
    const [pyt, setPyt] = useState<File[]|undefined[]>([]);
    const [pytSvitok, setPytSvitok] = useState<File[]|undefined[]>([]);
    const [openThisBaseCase, setOpenThisBaseCase] = useState([false, false, false, false, false, false, false, false]);
    const [targetOption, setTargetOptions] = useState([false, false, false, false, false, false, false, false, false, false, false]);
    const [colors, setColors] = useState(["#ffffff","#9C0000","#9C0000","#ffffff","#fff2d6","#000000","#9C0000","#FFFFFF","#BE431E","#ffe294","#000000","#BE431E","#AF5E5E","#FFFFFF","#BE431E","#AF5E5E","#FFFFFF","#BE431E","#AF5E5E","#FFFFFF","#9C0000","#fff2d6","#000000","#9C0000","#FFFFFF","#fff2d6","#000000","#9C0000","#FFFFFF"]);
    const colorsNames = ["--ListColor","--CardColorObvodka","--CardZagolovokBackgroundColor","--CardZagolovokTextColor","--CardDescriptionBackgroundColor","--CardDescriptionColor","--CardDownBackgroundColor","--CardDownTextColor","--Krug1BorderColor","--Krug1BackgroundColor","--Krug1TextColor","--Krug2BorderColor","--Krug2BackgroundColor","--Krug2TextColor","--Krug3BorderColor","--Krug3BackgroundColor","--Krug3TextColor","--Krug4BorderColor","--Krug4BackgroundColor","--Krug4TextColor","--CardBackColorObvodka","--CardBackZagolovokBackgroundColor","--CardBackZagolovokTextColor","--CardPerBackgroundColor","--CardPerTextColor","--CardBackDescriptionBackgroundColor","--CardBackDescriptionColor","--CardBackDownBackgroundColor","--CardBackDownTextColor"];
    const [sizePole, setSizesPole] = useState([35,15,53,53,2,53,53,2,53,53,2,53,53,2,35,15,15,297,210,173,13,173,78,40,13,40,78]);
    const sizePoleNames = ["--CardZagolovokTextSize","--CardDownTextSize","--Krug1W","--Krug1H","--Krug1Bordersize","--Krug2W","--Krug2H","--Krug2Bordersize","--Krug3W","--Krug3H","--Krug3Bordersize","--Krug4W","--Krug4H","--Krug4Bordersize","--CardBackZagolovokTextSize","--CardPerTextSize","--CardBackDownTextSize","--ListH","--ListW","--Krug1L","--Krug1T","--Krug2L","--Krug2T","--Krug3L","--Krug3T","--Krug4L","--Krug4T"];
    const [imgSize, setImgSize] = useState([100, 100, 0, 10, 50, 0, 0]);
    const imgSizeNames = ["--ImgHeight","--ImgWidth", "--ImgRotate","--ImgPaddingT","--ImgPaddingB","--ImgPaddingL","--ImgPaddingR"];
    const [sizeText, setSizesText] = useState([16, 9, 14, 12, 12, 12, 12, 16, 8, 14, 110]);
    const sizeTextNames = ["--CardZagolovokTextFont","--CardDescriptionFont","--CardDownTextFont","--Krug1FontSize","--Krug2FontSize","--Krug3FontSize","--Krug4FontSize","--CardBackZagolovokTextFont","--CardPerTextFont","--CardBackDownTextFont","--LineHeight"];
    const [alignValue, setAlignValue] = useState([2,2,2,2,2,4,2]);
    const alignNames = ["--CardZagolovokTextAlign","--CardDescriptionTextAlign","--CardDownTextAlign","--CardBackZagolovokTextAlign","--CardPerTextAlign","--CardBackDescriptionTextAlign","--CardBackDownTextAlign"];
    const [paddingText, setPaddingText] = useState([40,20,50,0,10,4,10,2,13,23,13,23,2,6,10,4,10,2,2,4,4,4,4,2]);
    const paddingNames = ["--ListPaddingT","--ListPaddingBok","--ListPaddingB","--CardPaddingT","--CardPaddingR","--CardPaddingB","--CardPaddingL","--CardZagolovokTextPadding","--CardDescriptionPaddingT","--CardDescriptionPaddingR","--CardDescriptionPaddingB","--CardDescriptionPaddingL","--CardDownTextPadding","--CardBackPaddingT","--CardBackPaddingR","--CardBackPaddingB","--CardBackPaddingL","--CardBackZagolovokTextPadding","--CardPerTextPadding","--CardBackDescriptionPaddingT","--CardBackDescriptionPaddingR","--CardBackDescriptionPaddingB","--CardBackDescriptionPaddingL","--CardBackDownTextPadding"];
    const [borderRadiusValue, setBorderRadiusValue] = useState([11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,25,25,25,25,0,0,0,0,11,11,11,11,11,11,11,11]);
    const bordwrRadiusNames = ["--CardZagolovok┌", "--CardZagolovok┐", "--CardZagolovok┘", "--CardZagolovok└","--CardInside┌","--CardInside┐","--CardInside┘","--CardInside└","--CardDown┌","--CardDown┐","--CardDown┘","--CardDown└","--CardBackZagolovok┌","--CardBackZagolovok┐","--CardBackZagolovok┘","--CardBackZagolovok└","--CardBackPer┌","--CardBackPer┐","--CardBackPer┘","--CardBackPer└","--CardBackInside┌","--CardBackInside┐","--CardBackInside┘","--CardBackInside└","--CardBackDown┌","--CardBackDown┐","--CardBackDown┘","--CardBackDown└","--Krug1┌","--Krug1┐","--Krug1┘","--Krug1└","--Krug2┌","--Krug2┐","--Krug2┘","--Krug2└","--Krug3┌","--Krug3┐","--Krug3┘","--Krug3└","--Krug4┌","--Krug4┐","--Krug4┘","--Krug4└"];
    const [minMax, setMinMax] = useState([8, 12]);
    const [blockMinMax, setBlockMinMax] = useState(false);
    const [blockImgSize, setBlockImgSize] = useState([false, true, false, false, false, false, false]);
    const [blockColor, setBlockColor] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [blockSizePole, setBlockSizePole] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [blockSizeText, setBlockSizeText] = useState([false,false,false,false,false,false,false,false,false,false,false]);
    const [blockPaddingText, setBlockPaddingText] = useState([false,false,false,false,false,false,false]);
    const [blockAlignValue, setBlockAlignValue] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [blockBorderRadius, setBlockBorderRadius] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [kolvo, setKolvo] = useState([3,3]);
    const perepolnen: boolean[] = [];
    const [perepolnenText, setPerepolnenText] = useState('');
    const [startPerepolnen, setStartPerepolnen] = useState(0);
    const [sideMode, setSideMode] = useState(0);
    const [lineCut, setLineCut] = useState(true);
    const [lineCutBack, setLineCutBack] = useState(true);
    const [targetFont1, setTargetFont1] = useState(7);
    const [isCSVRedactor, setIsCSVRedactor] = useState(false);
    const [rubahaCaseNumber, setRubahaCaseNumber] = useState(9);
    const [svitokCaseNumber, setSvitokCaseNumber] = useState(1);
    const [targetBackgroundNumber, setTargetBackgroundNumber] = useState(74);
    const [targetSvitokNumber, setTargetSvitokNumber] = useState(2);
    const [needUpdate, setNeedUpdate] = useState(false); 
    const setTarget = (a: number, b: boolean) => {
        const M = [];
        for (let i = 0; i < targetOption.length; i++) M[i] = false;
        M[a] = b;
        setTargetOptions(M);
    };
    const getAlignText = (number: number) => {
        switch (number) {
            case 1:
                return "left";
            case 2:
                return "center";
            case 3:
                return "right";
            case 4:
                return "justify";
            default:
                return "left";
        }
    }
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--h", String(kolvo[0]) );
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--w", String(kolvo[1]) );
    }, [kolvo]);
    useEffect(() => {
        for (let i = 0; i < 2; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(imgSizeNames[i], blockImgSize[i] === true ? 'auto' : imgSize[i] + '%');
        document.getElementById("ThisIsColorsConst")?.style.setProperty(imgSizeNames[2], imgSize[2] + 'deg');
        for (let i = 3; i < 7; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(imgSizeNames[i], imgSize[i] + 'px');
    }, [imgSize]);
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--LineCut", lineCut ? '1px' : '0px' );
    }, [lineCut]);
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--LineCutBack", lineCutBack ? '1px' : '0px' );
    }, [lineCutBack]);
    useEffect(() => {
        for (let i = 0; i < colorsNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(colorsNames[i], colors[i]);
    }, [colors]);
    useEffect(() => {
        const A = document.getElementById("ThisIsColorsConst");
        if (A) for (let i = 0; i < sizePoleNames.length; i++) A.style.setProperty(sizePoleNames[i], String(sizePole[i]) + 'px');
        if (A) A.style.setProperty(sizePoleNames[17], String(sizePole[17] - 0.5) + 'mm');    
        if (A) A.style.setProperty(sizePoleNames[18], String(sizePole[18] - 0.5) + 'mm');    
    }, [sizePole]);
    useEffect(() => {
        for (let i = 0; i < sizeTextNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(sizeTextNames[i], String(sizeText[i]) + 'px');
        document.getElementById("ThisIsColorsConst")?.style.setProperty(sizeTextNames[10], String(sizeText[10] / 100));
    }, [sizeText]);
    useEffect(() => {
        for (let i = 0; i < alignNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(alignNames[i], String(getAlignText(alignValue[i])));
    }, [alignValue]);
    useEffect(() => {
        let Car :string[] = [];
        getCardFromCSVLine(newCSV, Car, 0, newCSV.length - 1, '');
        setNewCard(Car);
    }, [newCSV]);
    useEffect(() => {
        for (let i = 0; i < paddingNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(paddingNames[i], String(paddingText[i]) + 'px');
    }, [paddingText]);
    useEffect(() => {
        for (let i = 0; i < bordwrRadiusNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(bordwrRadiusNames[i], String(borderRadiusValue[i]) + 'px');
    }, [bordwrRadiusNames]);
    const setSizePole = (a: number, b: number, vlog?: boolean) => {
        const M = [...sizePole];
        M[a] = b;
        const V = [...blockSizePole];
        if (vlog != undefined) V[a] = vlog;
        if (V[5]) M[5] = M[2];
        if (V[6]) M[6] = M[3];
        if (V[7]) M[7] = M[4];
        if (V[8]) M[8] = M[2];
        if (V[9]) M[9] = M[3];
        if (V[10]) M[10] = M[4];
        if (V[11]) M[11] = M[2];
        if (V[12]) M[12] = M[3];
        if (V[13]) M[13] = M[4];
        if (V[14]) M[14] = M[0];
        if (V[16]) M[16] = M[1];
        setSizesPole(M);
    };
    const setImgSizes = (a: number, b: number, vlog?: boolean) => {
        const M = [...imgSize];
        M[a] = b;
        const V = [...blockImgSize];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = 0;
        setImgSize(M);
    };
    const setBlocImgSize = (a: number, b: number, bloc: boolean) => {
        const M = [...blockImgSize];
        M[a] = bloc;
        setImgSizes(a, b, bloc);
        setBlockImgSize(M);
    };
    const setBlocSizePole = (a: number, b: number, bloc: boolean) => {
        const M = [...blockSizePole];
        M[a] = bloc;
        setSizePole(a, b, bloc);
        setBlockSizePole(M);
    };
    const setColor = (a: number, b: string, vlog?: boolean) => {
        const M = [...colors];
        M[a] = b;
        const V = [...blockColor];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = M[1];
        if (V[6]) M[6] = M[1];
        if (V[20]) M[20] = M[1];
        if (V[21]) M[21] = M[20];
        if (V[23]) M[23] = M[20];
        if (V[25]) M[25] = M[4];
        if (V[27]) M[27] = M[20];
        setColors(M);
    };
    const setBlocColor = (a: number, b: string, bloc: boolean) => {
        const M = [...blockColor];
        M[a] = bloc;
        setColor(a, b, bloc);
        setBlockColor(M);
    };
    const setSizeText = (a: number, b: number, vlog?: boolean) => {
        const M = [...sizeText];
        M[a] = b;
        const V = [...blockSizeText];
        if (vlog != undefined) V[a] = vlog;
        if (V[4]) M[4] = M[3];
        if (V[5]) M[5] = M[3];
        if (V[6]) M[6] = M[3];
        if (V[7]) M[7] = M[0];
        if (V[9]) M[9] = M[2];
        setSizesText(M);
    };
    const setBlocSizeText = (a: number, b: number, bloc: boolean) => {
        const M = [...blockSizeText];
        M[a] = bloc;
        setSizeText(a, b, bloc);
        setBlockSizeText(M);
    };
    const setAlignsValue = (a: number, b: number, vlog?: boolean) => {
        const M = [...alignValue];
        M[a] = b;
        const V = [...blockAlignValue];
        if (vlog != undefined) V[a] = vlog;
        setAlignValue(M);
    };
    const setBlocAlignValue = (a: number, b: number, bloc: boolean) => {
        const M = [...blockAlignValue];
        M[a] = bloc;
        setAlignsValue(a, b, bloc);
        setBlockAlignValue(M);
    };
    const setPaddinText = (a: number, b: number, vlog?: boolean) => {
        const M = [...paddingText];
        M[a] = b;
        const V = [...blockPaddingText];
        if (vlog != undefined) V[a] = vlog;
        setPaddingText(M);
    };
    const setBlocPaddingText = (a: number, b: number, bloc: boolean) => {
        const M = [...blockPaddingText];
        M[a] = bloc;
        setPaddinText(a, b, bloc);
        setBlockPaddingText(M);
    };
    const setBordersRadiusValue = (a: number, b: number, vlog?: boolean) => {
        const M = [...borderRadiusValue];
        M[a] = b;
        const V = [...blockBorderRadius];
        if (vlog != undefined) V[a] = vlog;
        if (V[1]) M[1] = M[0];
        if (V[2]) M[2] = M[0];
        if (V[3]) M[3] = M[0];
        if (V[5]) M[5] = M[4];
        if (V[6]) M[6] = M[4];
        if (V[7]) M[7] = M[4];
        if (V[9]) M[9] = M[8];
        if (V[10]) M[10] = M[8];
        if (V[11]) M[11] = M[8];
        if (V[13]) M[13] = M[12];
        if (V[14]) M[14] = M[12];
        if (V[15]) M[15] = M[12];
        if (V[17]) M[17] = M[16];
        if (V[18]) M[18] = M[16];
        if (V[19]) M[19] = M[16];
        if (V[21]) M[21] = M[20];
        if (V[22]) M[22] = M[20];
        if (V[23]) M[23] = M[20];
        if (V[25]) M[25] = M[24];
        if (V[26]) M[26] = M[24];
        if (V[27]) M[27] = M[24];
        if (V[29]) M[29] = M[28];
        if (V[30]) M[30] = M[28];
        if (V[31]) M[31] = M[28];
        if (V[33]) M[33] = M[32];
        if (V[34]) M[34] = M[32];
        if (V[35]) M[35] = M[32];
        if (V[37]) M[37] = M[36];
        if (V[38]) M[38] = M[36];
        if (V[39]) M[39] = M[36];
        if (V[41]) M[41] = M[40];
        if (V[42]) M[42] = M[40];
        if (V[43]) M[43] = M[40];
        setBorderRadiusValue(M);
    };
    const setBlocBorderRadius = (a: number, b: number, bloc: boolean) => {
        const M = [...blockBorderRadius];
        M[a] = bloc;
        setBordersRadiusValue(a, b, bloc);
        setBlockBorderRadius(M);
    };
    const setOpenThisBaseCas = (a: number) => {
        const M = [...openThisBaseCase];
        M[a] = !M[a];
        setOpenThisBaseCase(M);
    };
    const setMinMaxs = (a: number, b: number, vlog?: boolean) => {
        const M = [...minMax];
        M[a] = b;
        let V = blockMinMax;
        if (vlog != undefined) V = vlog;
        if (V) M[1] = M[0];
        setMinMax(M);
    };
    const setBlocMinMax = (a: number, b: number, bloc: boolean) => {
        let M = blockMinMax;
        M = bloc;
        setMinMaxs(a, b, bloc);
        setBlockMinMax(M);
    };
    const setKolv = (a: number, b: number) => {
        const K = [...kolvo];
        K[a] = b;
        setKolvo(K);
    };
    const plusPerepolnen = (num: number, bool: boolean) => {
        if(num == -1) perepolnen[0] = bool;
        else perepolnen[num + 1] = bool;
    }
    const setPoles = (text: string[]) => {
        let R = '';
        for (let i = 0; i < 13; i++) R = R + '\"' + text[i]?.replaceAll('\"', '\"\"')?.replaceAll('\n', 'Џ') + '\"' + ';';
        setNewCSV(R);
        setNewCard(text);
    }
    const readFile = () => {
        const q = (document.getElementById("InputFile") as HTMLInputElement).files;
        if (q != null) {
            let reader = new FileReader();
            reader.readAsText(q[0], 'windows-1251');
            reader.onload = function () {
                let r = reader.result;
                if (r) setCSV(r as string);
                setMakeCSV(makeCSV + 1);
            };
            (document.getElementById("InputFile") as HTMLInputElement).value = "";
        };
    };
    useEffect(() => {
        makeCardsFromCSV();
    }, [makeCSV]);
    useEffect(()=> {
        setNeedUpdate(true);
    },[CSV]);
    useEffect(() => {
        let flag = true;
        if (perepolnen.length != 0)
        {
            let perText = "";
            for (let i = 0; i < perepolnen.length; i++)
                if (perepolnen[i]) {
                    if (flag) { 
                        flag = false;
                        perText = "Переполнение в: ";
                    }
                    perText = perText + '\n' + (i == 0 ? 'Тестовой карточке' : cards[i - 1][0]);
                }
            setPerepolnenText(perText);
        }
    }, [perepolnen]);
    const downloadFile = () => {
        let blob = new Blob(["\ufeff", CSV], { type: "text/csv;charset=windows-1251" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = "CSV-File.csv";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    };
    const getCardFromCSVLine = (CSV: string, C: string[], pointStart: number, pointEnd: number, newCSV: string) => {
        for (let i = 0; pointStart<pointEnd || i<13; i++) {
            C[i] = '';
            if (pointEnd <= pointStart) {
                C[i] = '';
            } else if (CSV[pointStart] == '\"') {
                pointStart++;
                let nextK = CSV.indexOf('\"', pointStart);
                while (CSV[nextK + 1] == '\"' && nextK <= pointEnd && nextK != -1) {
                    C[i] = C[i] + CSV.slice(pointStart, nextK+1);
                    pointStart = nextK + 2;
                    nextK = CSV.indexOf('\"', nextK + 2);
                }
                if (nextK > pointEnd || nextK == -1) {
                    C[i] = C[i] + CSV.slice(pointStart, pointEnd);
                    pointStart = pointEnd+1;
                } else {
                    C[i] = C[i] + CSV.slice(pointStart, nextK);
                    pointStart = nextK + 1;
                    const FirstTZ = CSV.indexOf(';', pointStart);
                    if (FirstTZ <= pointEnd && FirstTZ !=-1) {
                        pointStart = FirstTZ + 1;
                    } else {
                        pointStart = pointEnd;
                    }
                }
            } else {
                const FirstTZ = CSV.indexOf(';', pointStart);
                if (FirstTZ <= pointEnd && FirstTZ !=-1) {
                    C[i] = CSV.slice(pointStart, FirstTZ);
                    pointStart = FirstTZ + 1;
                } else {
                    C[i] = CSV.slice(pointStart, pointEnd+1);
                    pointStart = pointEnd;
                }
            }
            C[i] = C[i].replaceAll('\r', '');
            newCSV = newCSV + '\"' + C[i].replaceAll('\"', '\"\"') + '\"' + ';';
            C[i] = C[i].replaceAll('Џ', '\n');
        }
        return newCSV;
    };
    const setNU = () => {
        setTimeout(() => {
            setNeedUpdate(false);
        }, 300);
    };
    const makeCardsFromCSV = () => {
        let nowPoint = 0, nextEnter = 0, endPoint = CSV.length - 1;
        let cardNumber = 0, newCSV= '';
        const C: string[][] = [];
        while ((nextEnter = CSV.indexOf('\n', nowPoint)) != -1) {
            C[cardNumber] = [];
            newCSV = getCardFromCSVLine(CSV,C[cardNumber], nowPoint, nextEnter - 1, newCSV) + '\n';
            nowPoint = nextEnter + 1;
            cardNumber++;
        };
        C[cardNumber] = [];
        newCSV = getCardFromCSVLine(CSV, C[cardNumber], nowPoint, CSV.length - 1, newCSV);
        if (document.getElementById('CTRLV') as HTMLInputElement != undefined) (document.getElementById('CTRLV') as HTMLInputElement).value = String (cardNumber);
        setCards(C);
        setCSV(newCSV);
        setNU();
    }
    const getBackCardImg = (PoleStr: string) => {
        let A = Number(PoleStr);
        if (PoleStr && isNaN(A)) return PoleStr;
        if (A == undefined || A == 0 || A > 231 || Number.isNaN(A)) {
            A = targetBackgroundNumber;
        }
        if (A < 0 && A > -51) {
            const r = pyt[0 - A - 1];
            return (
                r!=undefined ? URL.createObjectURL(r) : undefined
            );
        }
        switch (A) {
            case 1:return (Im1);
            case 2:return (Im2);
            case 3:return (Im3);
            case 4:return (Im4);
            case 5:return (Im5);
            case 6:return (Im6);
            case 7:return (Im7);
            case 8:return (Im8);
            case 9:return (Im9);
            case 10:return (Im10);
            case 11:return (Im11);
            case 12:return (Im12);
            case 13:return (Im13);
            case 14:return (Im14);
            case 15:return (Im15);
            case 16:return (Im16);
            case 17:return (Im17);
            case 18:return (Im18);
            case 19:return (Im19);
            case 20:return (Im20);
            case 21:return (Im21);
            case 22:return (Im22);
            case 23:return (Im23);
            case 24:return (Im24);
            case 25:return (Im25);
            case 26:return (Im26);
            case 27:return (Im27);
            case 28:return (Im28);
            case 29:return (Im29);
            case 30:return (Im30);
            case 31:return (Im31);
            case 32:return (Im32);
            case 33:return (Im33);
            case 34:return (Im34);
            case 35:return (Im35);
            case 36:return (Im36);
            case 37:return (Im37);
            case 38:return (Im38);
            case 39:return (Im39);
            case 40:return (Im40);
            case 41:return (Im41);
            case 42:return (Im42);
            case 43:return (Im43);
            case 44:return (Im44);
            case 45:return (Im45);
            case 46:return (Im46);
            case 47:return (Im47);
            case 48:return (Im48);
            case 49:return (Im49);
            case 50:return (Im50);
            case 51:return (Im51);
            case 52:return (Im52);
            case 53:return (Im53);
            case 54:return (Im54);
            case 55:return (Im55);
            case 56:return (Im56);
            case 57:return (Im57);
            case 58:return (Im58);
            case 59:return (Im59);
            case 60:return (Im60);
            case 61:return (Im61);
            case 62:return (Im62);
            case 63:return (Im63);
            case 64:return (Im64);
            case 65:return (Im65);
            case 66:return (Im66);
            case 67:return (Im67);
            case 68:return (Im68);
            case 69:return (Im69);
            case 70:return (Im70);
            case 71:return (Im71);
            case 72:return (Im72);
            case 73:return (Im73);
            case 74:return (Im74);
            case 75:return (Im75);
            case 76:return (Im76);
            case 77:return (Im77);
            case 78:return (Im78);
            case 79:return (Im79);
            case 80:return (Im80);
            case 81:return (Im81);
            case 82:return (Im82);
            case 83:return (Im83);
            case 84:return (Im84);
            case 85:return (Im85);
            case 86:return (Im86);
            case 87:return (Im87);
            case 88:return (Im88);
            case 89:return (Im89);
            case 90:return (Im90);
            case 91:return (Im91);
            case 92:return (Im92);
            case 93:return (Im93);
            case 94:return (Im94);
            case 95:return (Im95);
            case 96:return (Im96);
            case 97:return (Im97);
            case 98:return (Im98);
            case 99:return (Im99);
            case 100:return (Im100);
            case 101:return (Im101);
            case 102:return (Im102);
            case 103:return (Im103);
            case 104:return (Im104);
            case 105:return (Im105);
            case 106:return (Im106);
            case 107:return (Im107);
            case 108:return (Im108);
            case 109:return (Im109);
            case 110:return (Im110);
            case 111:return (Im111);
            case 112:return (Im112);
            case 113:return (Im113);
            case 114:return (Im114);
            case 115:return (Im115);
            case 116:return (Im116);
            case 117:return (Im117);
            case 118:return (Im118);
            case 119:return (Im119);
            case 120:return (Im120);
            case 121:return (Im121);
            case 122:return (Im122);
            case 123:return (Im123);
            case 124:return (Im124);
            case 125:return (Im125);
            case 126:return (Im126);
            case 127:return (Im127);
            case 128:return (Im128);
            case 129:return (Im129);
            case 130:return (Im130);
            case 131:return (Im131);
            case 132:return (Im132);
            case 133:return (Im133);
            case 134:return (Im134);
            case 135:return (Im135);
            case 136:return (Im136);
            case 137:return (Im137);
            case 138:return (Im138);
            case 139:return (Im139);
            case 140:return (Im140);
            case 141:return (Im141);
            case 142:return (Im142);
            case 143:return (Im143);
            case 144:return (Im144);
            case 145:return (Im145);
            case 146:return (Im146);
            case 147:return (Im147);
            case 148:return (Im148);
            case 149:return (Im149);
            case 150:return (Im150);
            case 151:return (Im151);
            case 152:return (Im152);
            case 153:return (Im153);
            case 154:return (Im154);
            case 155:return (Im155);
            case 156:return (Im156);
            case 157:return (Im157);
            case 158:return (Im158);
            case 159:return (Im159);
            case 160:return (Im160);
            case 161:return (Im161);
            case 162:return (Im162);
            case 163:return (Im163);
            case 164:return (Im164);
            case 165:return (Im165);
            case 166:return (Im166);
            case 167:return (Im167);
            case 168:return (Im168);
            case 169:return (Im169);
            case 170:return (Im170);
            case 171:return (Im171);
            case 172:return (Im172);
            case 173:return (Im173);
            case 174:return (Im174);
            case 175:return (Im175);
            case 176:return (Im176);
            case 177:return (Im177);
            case 178:return (Im178);
            case 179:return (Im179);
            case 180:return (Im180);
            case 181:return (Im181);
            case 182:return (Im182);
            case 183:return (Im183);
            case 184:return (Im184);
            case 185:return (Im185);
            case 186:return (Im186);
            case 187:return (Im187);
            case 188:return (Im188);
            case 189:return (Im189);
            case 190:return (Im190);
            case 191:return (Im191);
            case 192:return (Im192);
            case 193:return (Im193);
            case 194:return (Im194);
            case 195:return (Im195);
            case 196:return (Im196);
            case 197:return (Im197);
            case 198:return (Im198);
            case 199:return (Im199);
            case 200:return (Im200);
            case 201:return (Im201);
            case 202:return (Im202);
            case 203:return (Im203);
            case 204:return (Im204);
            case 205:return (Im205);
            case 206:return (Im206);
            case 207:return (Im207);
            case 208:return (Im208);
            case 209:return (Im209);
            case 210:return (Im210);
            case 211:return (Im211);
            case 212:return (Im212);
            case 213:return (Im213);
            case 214:return (Im214);
            case 215:return (Im215);
            case 216:return (Im216);
            case 217:return (Im217);
            case 218:return (Im218);
            case 219:return (Im219);
            case 220:return (Im220);
            case 221:return (Im221);
            case 222:return (Im222);
            case 223:return (Im223);
            case 224:return (Im224);
            case 225:return (Im225);
            case 226:return (Im226);
            case 227:return (Im227);
            case 228:return (Im228);
            case 229:return (Im229);
            case 230:return (Im230);
            default:
                return (undefined);
        }
    }
    const getSvitokCardImg = (PoleStr: string) => {
        let A = Number(PoleStr);
        if (PoleStr && isNaN(A)) return PoleStr;
        if (A == undefined || A == 0 || A > 4 || Number.isNaN(A)) {
            A = targetSvitokNumber;
        }
        if (A < 0 && A > -7) {
            const r = pytSvitok[0 - A - 1];
            return (
                r!=undefined ? URL.createObjectURL(r) : undefined
            );
        }
        switch (A) {
            case 1:return (S1);
            case 2:return (S2);
            case 3:return (S3);
            case 4:return (S4);
            default:
                return (undefined);
        }
    }
    const getCards = () => {
        let sumLists = [];
        for (let i = 0; i < cards.length; i += kolvo[1] * kolvo[0]) {
            sumLists[i / (kolvo[1] * kolvo[0])] = i;
        }
        return (
            <>
                {
                    sumLists.map((a, index) => {
                        return <Fragment key={"P"+index}>
                            {(sideMode === 0 || sideMode === 2) && (
                                <SpellList
                                    cards={cards}
                                    kolvo={kolvo}
                                    minMax={minMax}
                                    isBack={false}
                                    index={index}
                                    key={"F"+index}
                                    getBackCardImg={getBackCardImg}
                                    getSvitokCardImg={getSvitokCardImg}
                                    targetFont1={targetFont1}
                                    plusPerepolnen={plusPerepolnen}
                                    startPerepolnen={startPerepolnen}
                                />
                            )}
                            {(sideMode === 1 || sideMode === 2) && (
                                <SpellList
                                    cards={cards}
                                    kolvo={kolvo}
                                    minMax={minMax}
                                    isBack={true}
                                    index={index}
                                    key={"B"+index}
                                    getBackCardImg={getBackCardImg}
                                    getSvitokCardImg={getSvitokCardImg}
                                    targetFont1={targetFont1}
                                    plusPerepolnen={plusPerepolnen}
                                    startPerepolnen={startPerepolnen}
                                />
                            )}
                        </Fragment>
                    })
                }
            </>
        );
    }
    const setPyti = (num: number) => {
        return (
            <div className={style.InputFile}>
                <label htmlFor={`inputfile + ${0 - num -1}`}><Download/></label>
                <input type="file" name="" id={`inputfile + ${0 - num - 1}`} onInput={(e) => {
                    const file = (e.target as HTMLInputElement);
                    const R = file?.files;
                    if (R != null) {
                        const T = pyt;
                        T[0 - num -1] = R[0];
                        setPyt(T);
                    }
                    let r = targetBackgroundNumber; 
                    setTargetBackgroundNumber(-999999);
                    setTimeout(( a) => {
                        setTargetBackgroundNumber(a);
                    }, 300 , r);
                }} />
            </div>
        );
    }
    const getRubahaCase = () => {
        const Elements = [
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -50} setTarget={setTargetBackgroundNumber} number={-50} img={pyt[49] != undefined ? URL.createObjectURL(pyt[49]) : undefined}><div>{setPyti(-50)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -49} setTarget={setTargetBackgroundNumber} number={-49} img={pyt[48] != undefined ? URL.createObjectURL(pyt[48]) : undefined}><div>{setPyti(-49)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -48} setTarget={setTargetBackgroundNumber} number={-48} img={pyt[47] != undefined ? URL.createObjectURL(pyt[47]) : undefined}><div>{setPyti(-48)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -47} setTarget={setTargetBackgroundNumber} number={-47} img={pyt[46] != undefined ? URL.createObjectURL(pyt[46]) : undefined}><div>{setPyti(-47)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -46} setTarget={setTargetBackgroundNumber} number={-46} img={pyt[45] != undefined ? URL.createObjectURL(pyt[45]) : undefined}><div>{setPyti(-46)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -45} setTarget={setTargetBackgroundNumber} number={-45} img={pyt[44] != undefined ? URL.createObjectURL(pyt[44]) : undefined}><div>{setPyti(-45)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -44} setTarget={setTargetBackgroundNumber} number={-44} img={pyt[43] != undefined ? URL.createObjectURL(pyt[43]) : undefined}><div>{setPyti(-44)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -43} setTarget={setTargetBackgroundNumber} number={-43} img={pyt[42] != undefined ? URL.createObjectURL(pyt[42]) : undefined}><div>{setPyti(-43)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -42} setTarget={setTargetBackgroundNumber} number={-42} img={pyt[41] != undefined ? URL.createObjectURL(pyt[41]) : undefined}><div>{setPyti(-42)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -41} setTarget={setTargetBackgroundNumber} number={-41} img={pyt[40] != undefined ? URL.createObjectURL(pyt[40]) : undefined}><div>{setPyti(-41)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -40} setTarget={setTargetBackgroundNumber} number={-40} img={pyt[39] != undefined ? URL.createObjectURL(pyt[39]) : undefined}><div>{setPyti(-40)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -39} setTarget={setTargetBackgroundNumber} number={-39} img={pyt[38] != undefined ? URL.createObjectURL(pyt[38]) : undefined}><div>{setPyti(-39)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -38} setTarget={setTargetBackgroundNumber} number={-38} img={pyt[37] != undefined ? URL.createObjectURL(pyt[37]) : undefined}><div>{setPyti(-38)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -37} setTarget={setTargetBackgroundNumber} number={-37} img={pyt[36] != undefined ? URL.createObjectURL(pyt[36]) : undefined}><div>{setPyti(-37)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -36} setTarget={setTargetBackgroundNumber} number={-36} img={pyt[35] != undefined ? URL.createObjectURL(pyt[35]) : undefined}><div>{setPyti(-36)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -35} setTarget={setTargetBackgroundNumber} number={-35} img={pyt[34] != undefined ? URL.createObjectURL(pyt[34]) : undefined}><div>{setPyti(-35)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -34} setTarget={setTargetBackgroundNumber} number={-34} img={pyt[33] != undefined ? URL.createObjectURL(pyt[33]) : undefined}><div>{setPyti(-34)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -33} setTarget={setTargetBackgroundNumber} number={-33} img={pyt[32] != undefined ? URL.createObjectURL(pyt[32]) : undefined}><div>{setPyti(-33)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -32} setTarget={setTargetBackgroundNumber} number={-32} img={pyt[31] != undefined ? URL.createObjectURL(pyt[31]) : undefined}><div>{setPyti(-32)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -31} setTarget={setTargetBackgroundNumber} number={-31} img={pyt[30] != undefined ? URL.createObjectURL(pyt[30]) : undefined}><div>{setPyti(-31)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -30} setTarget={setTargetBackgroundNumber} number={-30} img={pyt[29] != undefined ? URL.createObjectURL(pyt[29]) : undefined}><div>{setPyti(-30)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -29} setTarget={setTargetBackgroundNumber} number={-29} img={pyt[28] != undefined ? URL.createObjectURL(pyt[28]) : undefined}><div>{setPyti(-29)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -28} setTarget={setTargetBackgroundNumber} number={-28} img={pyt[27] != undefined ? URL.createObjectURL(pyt[27]) : undefined}><div>{setPyti(-28)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -27} setTarget={setTargetBackgroundNumber} number={-27} img={pyt[26] != undefined ? URL.createObjectURL(pyt[26]) : undefined}><div>{setPyti(-27)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -26} setTarget={setTargetBackgroundNumber} number={-26} img={pyt[25] != undefined ? URL.createObjectURL(pyt[25]) : undefined}><div>{setPyti(-26)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -25} setTarget={setTargetBackgroundNumber} number={-25} img={pyt[24] != undefined ? URL.createObjectURL(pyt[24]) : undefined}><div>{setPyti(-25)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -24} setTarget={setTargetBackgroundNumber} number={-24} img={pyt[23] != undefined ? URL.createObjectURL(pyt[23]) : undefined}><div>{setPyti(-24)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -23} setTarget={setTargetBackgroundNumber} number={-23} img={pyt[22] != undefined ? URL.createObjectURL(pyt[22]) : undefined}><div>{setPyti(-23)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -22} setTarget={setTargetBackgroundNumber} number={-22} img={pyt[21] != undefined ? URL.createObjectURL(pyt[21]) : undefined}><div>{setPyti(-22)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -21} setTarget={setTargetBackgroundNumber} number={-21} img={pyt[20] != undefined ? URL.createObjectURL(pyt[20]) : undefined}><div>{setPyti(-21)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -20} setTarget={setTargetBackgroundNumber} number={-20} img={pyt[19] != undefined ? URL.createObjectURL(pyt[19]) : undefined}><div>{setPyti(-20)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -19} setTarget={setTargetBackgroundNumber} number={-19} img={pyt[18] != undefined ? URL.createObjectURL(pyt[18]) : undefined}><div>{setPyti(-19)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -18} setTarget={setTargetBackgroundNumber} number={-18} img={pyt[17] != undefined ? URL.createObjectURL(pyt[17]) : undefined}><div>{setPyti(-18)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -17} setTarget={setTargetBackgroundNumber} number={-17} img={pyt[16] != undefined ? URL.createObjectURL(pyt[16]) : undefined}><div>{setPyti(-17)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -16} setTarget={setTargetBackgroundNumber} number={-16} img={pyt[15] != undefined ? URL.createObjectURL(pyt[15]) : undefined}><div>{setPyti(-16)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -15} setTarget={setTargetBackgroundNumber} number={-15} img={pyt[14] != undefined ? URL.createObjectURL(pyt[14]) : undefined}><div>{setPyti(-15)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -14} setTarget={setTargetBackgroundNumber} number={-14} img={pyt[13] != undefined ? URL.createObjectURL(pyt[13]) : undefined}><div>{setPyti(-14)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -13} setTarget={setTargetBackgroundNumber} number={-13} img={pyt[12] != undefined ? URL.createObjectURL(pyt[12]) : undefined}><div>{setPyti(-13)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -12} setTarget={setTargetBackgroundNumber} number={-12} img={pyt[11] != undefined ? URL.createObjectURL(pyt[11]) : undefined}><div>{setPyti(-12)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -11} setTarget={setTargetBackgroundNumber} number={-11} img={pyt[10] != undefined ? URL.createObjectURL(pyt[10]) : undefined}><div>{setPyti(-11)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -10} setTarget={setTargetBackgroundNumber} number={-10} img={pyt[9] != undefined ? URL.createObjectURL(pyt[9]) : undefined}><div>{setPyti(-10)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -9} setTarget={setTargetBackgroundNumber} number={-9} img={pyt[8] != undefined ? URL.createObjectURL(pyt[8]) : undefined}><div>{setPyti(-9)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -8} setTarget={setTargetBackgroundNumber} number={-8} img={pyt[7] != undefined ? URL.createObjectURL(pyt[7]) : undefined}><div>{setPyti(-8)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -7} setTarget={setTargetBackgroundNumber} number={-7} img={pyt[6] != undefined ? URL.createObjectURL(pyt[6]) : undefined}><div>{setPyti(-7)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -6} setTarget={setTargetBackgroundNumber} number={-6} img={pyt[5] != undefined ? URL.createObjectURL(pyt[5]) : undefined}><div>{setPyti(-6)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -5} setTarget={setTargetBackgroundNumber} number={-5} img={pyt[4] != undefined ? URL.createObjectURL(pyt[4]) : undefined}><div>{setPyti(-5)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -4} setTarget={setTargetBackgroundNumber} number={-4} img={pyt[3] != undefined ? URL.createObjectURL(pyt[3]) : undefined}><div>{setPyti(-4)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -3} setTarget={setTargetBackgroundNumber} number={-3} img={pyt[2] != undefined ? URL.createObjectURL(pyt[2]) : undefined}><div>{setPyti(-3)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -2} setTarget={setTargetBackgroundNumber} number={-2} img={pyt[1] != undefined ? URL.createObjectURL(pyt[1]) : undefined}><div>{setPyti(-2)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -1} setTarget={setTargetBackgroundNumber} number={-1} img={pyt[0] != undefined ? URL.createObjectURL(pyt[0]) : undefined}><div>{setPyti(-1)}</div></OptionCardImg>,
            <OptionCardImg name={"Алхимический сосуд"} targetThis={targetBackgroundNumber == 1} setTarget={setTargetBackgroundNumber} number={1} ><img src={String(getBackCardImg('1'))} /></OptionCardImg>,
            <OptionCardImg name={"Амулет защиты от обнаружения и поиска"} targetThis={targetBackgroundNumber == 2} setTarget={setTargetBackgroundNumber} number={2} ><img src={String(getBackCardImg('2'))} /></OptionCardImg>,
            <OptionCardImg name={"Амулет здоровья"} targetThis={targetBackgroundNumber == 3} setTarget={setTargetBackgroundNumber} number={3} ><img src={String(getBackCardImg('3'))} /></OptionCardImg>,
            <OptionCardImg name={"Амулет планов"} targetThis={targetBackgroundNumber == 4} setTarget={setTargetBackgroundNumber} number={4} ><img src={String(getBackCardImg('4'))} /></OptionCardImg>,
            <OptionCardImg name={"Аппарат квалиша"} targetThis={targetBackgroundNumber == 5} setTarget={setTargetBackgroundNumber} number={5} ><img src={String(getBackCardImg('5'))} /></OptionCardImg>,
            <OptionCardImg name={"Адамантиновый доспех"} targetThis={targetBackgroundNumber == 6} setTarget={setTargetBackgroundNumber} number={6} ><img src={String(getBackCardImg('6'))} /></OptionCardImg>,
            <OptionCardImg name={"Брошь защиты"} targetThis={targetBackgroundNumber == 7} setTarget={setTargetBackgroundNumber} number={7} ><img src={String(getBackCardImg('7'))} /></OptionCardImg>,
            <OptionCardImg name={"Булава кары"} targetThis={targetBackgroundNumber == 8} setTarget={setTargetBackgroundNumber} number={8} ><img src={String(getBackCardImg('8'))} /></OptionCardImg>,
            <OptionCardImg name={"Булава распада"} targetThis={targetBackgroundNumber == 9} setTarget={setTargetBackgroundNumber} number={9} ><img src={String(getBackCardImg('9'))} /></OptionCardImg>,
            <OptionCardImg name={"Булава ужаса"} targetThis={targetBackgroundNumber == 10} setTarget={setTargetBackgroundNumber} number={10} ><img src={String(getBackCardImg('10'))} /></OptionCardImg>,
            <OptionCardImg name={"Бусина силы"} targetThis={targetBackgroundNumber == 11} setTarget={setTargetBackgroundNumber} number={11} ><img src={String(getBackCardImg('11'))} /></OptionCardImg>,
            <OptionCardImg name={"Бутылка с ифритом"} targetThis={targetBackgroundNumber == 12} setTarget={setTargetBackgroundNumber} number={12} ><img src={String(getBackCardImg('12'))} /></OptionCardImg>,
            <OptionCardImg name={"Веер ветра"} targetThis={targetBackgroundNumber == 13} setTarget={setTargetBackgroundNumber} number={13} ><img src={String(getBackCardImg('13'))} /></OptionCardImg>,
            <OptionCardImg name={"Веревка лазания"} targetThis={targetBackgroundNumber == 14} setTarget={setTargetBackgroundNumber} number={14} ><img src={String(getBackCardImg('14'))} /></OptionCardImg>,
            <OptionCardImg name={"Веревка опутывания"} targetThis={targetBackgroundNumber == 15} setTarget={setTargetBackgroundNumber} number={15} ><img src={String(getBackCardImg('15'))} /></OptionCardImg>,
            <OptionCardImg name={"Вечнодымящаяся бутылка"} targetThis={targetBackgroundNumber == 16} setTarget={setTargetBackgroundNumber} number={16} ><img src={String(getBackCardImg('16'))} /></OptionCardImg>,
            <OptionCardImg name={"Волна"} targetThis={targetBackgroundNumber == 17} setTarget={setTargetBackgroundNumber} number={17} ><img src={String(getBackCardImg('17'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка паутины"} targetThis={targetBackgroundNumber == 18} setTarget={setTargetBackgroundNumber} number={18} ><img src={String(getBackCardImg('18'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка превращения"} targetThis={targetBackgroundNumber == 19} setTarget={setTargetBackgroundNumber} number={19} ><img src={String(getBackCardImg('19'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка секретов"} targetThis={targetBackgroundNumber == 20} setTarget={setTargetBackgroundNumber} number={20} ><img src={String(getBackCardImg('20'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка сковывания"} targetThis={targetBackgroundNumber == 21} setTarget={setTargetBackgroundNumber} number={21} ><img src={String(getBackCardImg('21'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка снарядов"} targetThis={targetBackgroundNumber == 22} setTarget={setTargetBackgroundNumber} number={22} ><img src={String(getBackCardImg('22'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка страха"} targetThis={targetBackgroundNumber == 23} setTarget={setTargetBackgroundNumber} number={23} ><img src={String(getBackCardImg('23'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка чудес"} targetThis={targetBackgroundNumber == 24} setTarget={setTargetBackgroundNumber} number={24} ><img src={String(getBackCardImg('24'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка молний"} targetThis={targetBackgroundNumber == 25} setTarget={setTargetBackgroundNumber} number={25} ><img src={String(getBackCardImg('25'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка обнаружения врагов"} targetThis={targetBackgroundNumber == 26} setTarget={setTargetBackgroundNumber} number={26} ><img src={String(getBackCardImg('26'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка обнаружения магии"} targetThis={targetBackgroundNumber == 27} setTarget={setTargetBackgroundNumber} number={27} ><img src={String(getBackCardImg('27'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка огненных шаров"} targetThis={targetBackgroundNumber == 28} setTarget={setTargetBackgroundNumber} number={28} ><img src={String(getBackCardImg('28'))} /></OptionCardImg>,
            <OptionCardImg name={"палочка паралича"} targetThis={targetBackgroundNumber == 29} setTarget={setTargetBackgroundNumber} number={29} ><img src={String(getBackCardImg('29'))} /></OptionCardImg>,
            <OptionCardImg name={"Волшебная палочка"} targetThis={targetBackgroundNumber == 30} setTarget={setTargetBackgroundNumber} number={30} ><img src={String(getBackCardImg('30'))} /></OptionCardImg>,
            <OptionCardImg name={"Вор девяти жизней"} targetThis={targetBackgroundNumber == 31} setTarget={setTargetBackgroundNumber} number={31} ><img src={String(getBackCardImg('31'))} /></OptionCardImg>,
            <OptionCardImg name={"Глаз и рука ведьмы"} targetThis={targetBackgroundNumber == 32} setTarget={setTargetBackgroundNumber} number={32} ><img src={String(getBackCardImg('32'))} /></OptionCardImg>,
            <OptionCardImg name={"Дварфийский метатель"} targetThis={targetBackgroundNumber == 33} setTarget={setTargetBackgroundNumber} number={33} ><img src={String(getBackCardImg('33'))} /></OptionCardImg>,
            <OptionCardImg name={"Демонический доспех"} targetThis={targetBackgroundNumber == 34} setTarget={setTargetBackgroundNumber} number={34} ><img src={String(getBackCardImg('34'))} /></OptionCardImg>,
            <OptionCardImg name={"Доспех из драконьей чешуи"} targetThis={targetBackgroundNumber == 35} setTarget={setTargetBackgroundNumber} number={35} ><img src={String(getBackCardImg('35'))} /></OptionCardImg>,
            <OptionCardImg name={"Доспех моряка"} targetThis={targetBackgroundNumber == 36} setTarget={setTargetBackgroundNumber} number={36} ><img src={String(getBackCardImg('36'))} /></OptionCardImg>,
            <OptionCardImg name={"Доспех моряка2"} targetThis={targetBackgroundNumber == 37} setTarget={setTargetBackgroundNumber} number={37} ><img src={String(getBackCardImg('37'))} /></OptionCardImg>,
            <OptionCardImg name={"Доспех неуязвимости"} targetThis={targetBackgroundNumber == 38} setTarget={setTargetBackgroundNumber} number={38} ><img src={String(getBackCardImg('38'))} /></OptionCardImg>,
            <OptionCardImg name={"Доспех сопротивления"} targetThis={targetBackgroundNumber == 39} setTarget={setTargetBackgroundNumber} number={39} ><img src={String(getBackCardImg('39'))} /></OptionCardImg>,
            <OptionCardImg name={"Жаровня командования огненными элементалями"} targetThis={targetBackgroundNumber == 40} setTarget={setTargetBackgroundNumber} number={40} ><img src={String(getBackCardImg('40'))} /></OptionCardImg>,
            <OptionCardImg name={"Жезл бдительности"} targetThis={targetBackgroundNumber == 41} setTarget={setTargetBackgroundNumber} number={41} ><img src={String(getBackCardImg('41'))} /></OptionCardImg>,
            <OptionCardImg name={"Жезл величественной мощи"} targetThis={targetBackgroundNumber == 42} setTarget={setTargetBackgroundNumber} number={42} ><img src={String(getBackCardImg('42'))} /></OptionCardImg>,
            <OptionCardImg name={"Жезл воскрешения"} targetThis={targetBackgroundNumber == 43} setTarget={setTargetBackgroundNumber} number={43} ><img src={String(getBackCardImg('43'))} /></OptionCardImg>,
            <OptionCardImg name={"Жезл поглащения"} targetThis={targetBackgroundNumber == 44} setTarget={setTargetBackgroundNumber} number={44} ><img src={String(getBackCardImg('44'))} /></OptionCardImg>,
            <OptionCardImg name={"Жезл правления"} targetThis={targetBackgroundNumber == 45} setTarget={setTargetBackgroundNumber} number={45} ><img src={String(getBackCardImg('45'))} /></OptionCardImg>,
            <OptionCardImg name={"Жезл хранителя договора"} targetThis={targetBackgroundNumber == 46} setTarget={setTargetBackgroundNumber} number={46} ><img src={String(getBackCardImg('46'))} /></OptionCardImg>,
            <OptionCardImg name={"Жезл щупалец"} targetThis={targetBackgroundNumber == 47} setTarget={setTargetBackgroundNumber} number={47} ><img src={String(getBackCardImg('47'))} /></OptionCardImg>,
            <OptionCardImg name={"Железная фляга"} targetThis={targetBackgroundNumber == 48} setTarget={setTargetBackgroundNumber} number={48} ><img src={String(getBackCardImg('48'))} /></OptionCardImg>,
            <OptionCardImg name={"Жемчужина силы"} targetThis={targetBackgroundNumber == 49} setTarget={setTargetBackgroundNumber} number={49} ><img src={String(getBackCardImg('49'))} /></OptionCardImg>,
            <OptionCardImg name={"Жестокое оружие"} targetThis={targetBackgroundNumber == 50} setTarget={setTargetBackgroundNumber} number={50} ><img src={String(getBackCardImg('50'))} /></OptionCardImg>,
            <OptionCardImg name={"Живой щит"} targetThis={targetBackgroundNumber == 51} setTarget={setTargetBackgroundNumber} number={51} ><img src={String(getBackCardImg('51'))} /></OptionCardImg>,
            <OptionCardImg name={"Заполярные сапоги"} targetThis={targetBackgroundNumber == 52} setTarget={setTargetBackgroundNumber} number={52} ><img src={String(getBackCardImg('52'))} /></OptionCardImg>,
            <OptionCardImg name={"Защитник"} targetThis={targetBackgroundNumber == 53} setTarget={setTargetBackgroundNumber} number={53} ><img src={String(getBackCardImg('53'))} /></OptionCardImg>,
            <OptionCardImg name={"Зелье газообразной формы"} targetThis={targetBackgroundNumber == 54} setTarget={setTargetBackgroundNumber} number={54} ><img src={String(getBackCardImg('54'))} /></OptionCardImg>,
            <OptionCardImg name={"Зелье героизма"} targetThis={targetBackgroundNumber == 55} setTarget={setTargetBackgroundNumber} number={55} ><img src={String(getBackCardImg('55'))} /></OptionCardImg>,
            <OptionCardImg name={"Зелье неуязвимости"} targetThis={targetBackgroundNumber == 56} setTarget={setTargetBackgroundNumber} number={56} ><img src={String(getBackCardImg('56'))} /></OptionCardImg>,
            <OptionCardImg name={"Зелье скорости"} targetThis={targetBackgroundNumber == 57} setTarget={setTargetBackgroundNumber} number={57} ><img src={String(getBackCardImg('57'))} /></OptionCardImg>,
            <OptionCardImg name={"Зеркало похищения жизни"} targetThis={targetBackgroundNumber == 58} setTarget={setTargetBackgroundNumber} number={58} ><img src={String(getBackCardImg('58'))} /></OptionCardImg>,
            <OptionCardImg name={"Инструмент бардов1"} targetThis={targetBackgroundNumber == 59} setTarget={setTargetBackgroundNumber} number={59} ><img src={String(getBackCardImg('59'))} /></OptionCardImg>,
            <OptionCardImg name={"Инструмент бардов2"} targetThis={targetBackgroundNumber == 60} setTarget={setTargetBackgroundNumber} number={60} ><img src={String(getBackCardImg('60'))} /></OptionCardImg>,
            <OptionCardImg name={"Инструмент бардов3"} targetThis={targetBackgroundNumber == 61} setTarget={setTargetBackgroundNumber} number={61} ><img src={String(getBackCardImg('61'))} /></OptionCardImg>,
            <OptionCardImg name={"Инструмент бардов4"} targetThis={targetBackgroundNumber == 62} setTarget={setTargetBackgroundNumber} number={62} ><img src={String(getBackCardImg('62'))} /></OptionCardImg>,
            <OptionCardImg name={"Инструмент бардов5"} targetThis={targetBackgroundNumber == 63} setTarget={setTargetBackgroundNumber} number={63} ><img src={String(getBackCardImg('63'))} /></OptionCardImg>,
            <OptionCardImg name={"Инструмент бардов6"} targetThis={targetBackgroundNumber == 64} setTarget={setTargetBackgroundNumber} number={64} ><img src={String(getBackCardImg('64'))} /></OptionCardImg>,
            <OptionCardImg name={"Инструмент бардов7"} targetThis={targetBackgroundNumber == 65} setTarget={setTargetBackgroundNumber} number={65} ><img src={String(getBackCardImg('65'))} /></OptionCardImg>,
            <OptionCardImg name={"Кадило контролирования воздушных элементалей"} targetThis={targetBackgroundNumber == 66} setTarget={setTargetBackgroundNumber} number={66} ><img src={String(getBackCardImg('66'))} /></OptionCardImg>,
            <OptionCardImg name={"Камень зрения"} targetThis={targetBackgroundNumber == 67} setTarget={setTargetBackgroundNumber} number={67} ><img src={String(getBackCardImg('67'))} /></OptionCardImg>,
            <OptionCardImg name={"Камень контролирования земляных элементалей"} targetThis={targetBackgroundNumber == 68} setTarget={setTargetBackgroundNumber} number={68} ><img src={String(getBackCardImg('68'))} /></OptionCardImg>,
            <OptionCardImg name={"Камень сияния"} targetThis={targetBackgroundNumber == 69} setTarget={setTargetBackgroundNumber} number={69} ><img src={String(getBackCardImg('69'))} /></OptionCardImg>,
            <OptionCardImg name={"Камень удачи"} targetThis={targetBackgroundNumber == 70} setTarget={setTargetBackgroundNumber} number={70} ><img src={String(getBackCardImg('70'))} /></OptionCardImg>,
            <OptionCardImg name={"Камень элементаля желтый бриллиант"} targetThis={targetBackgroundNumber == 71} setTarget={setTargetBackgroundNumber} number={71} ><img src={String(getBackCardImg('71'))} /></OptionCardImg>,
            <OptionCardImg name={"Камень элементаля изумруд"} targetThis={targetBackgroundNumber == 72} setTarget={setTargetBackgroundNumber} number={72} ><img src={String(getBackCardImg('72'))} /></OptionCardImg>,
            <OptionCardImg name={"Камень элементаля красный корунд"} targetThis={targetBackgroundNumber == 73} setTarget={setTargetBackgroundNumber} number={73} ><img src={String(getBackCardImg('73'))} /></OptionCardImg>,
            <OptionCardImg name={"Камень элементаля синий сапфир"} targetThis={targetBackgroundNumber == 74} setTarget={setTargetBackgroundNumber} number={74} ><img src={String(getBackCardImg('74'))} /></OptionCardImg>,
            <OptionCardImg name={"Камни послания"} targetThis={targetBackgroundNumber == 75} setTarget={setTargetBackgroundNumber} number={75} ><img src={String(getBackCardImg('75'))} /></OptionCardImg>,
            <OptionCardImg name={"Кинжал яда"} targetThis={targetBackgroundNumber == 76} setTarget={setTargetBackgroundNumber} number={76} ><img src={String(getBackCardImg('76'))} /></OptionCardImg>,
            <OptionCardImg name={"Клинок удачи"} targetThis={targetBackgroundNumber == 77} setTarget={setTargetBackgroundNumber} number={77} ><img src={String(getBackCardImg('77'))} /></OptionCardImg>,
            <OptionCardImg name={"Ковер-самолет"} targetThis={targetBackgroundNumber == 78} setTarget={setTargetBackgroundNumber} number={78} ><img src={String(getBackCardImg('78'))} /></OptionCardImg>,
            <OptionCardImg name={"Колода иллюзий"} targetThis={targetBackgroundNumber == 79} setTarget={setTargetBackgroundNumber} number={79} ><img src={String(getBackCardImg('79'))} /></OptionCardImg>,
            <OptionCardImg name={"Колокольчик открывания"} targetThis={targetBackgroundNumber == 80} setTarget={setTargetBackgroundNumber} number={80} ><img src={String(getBackCardImg('80'))} /></OptionCardImg>,
            <OptionCardImg name={"Колчан Элонны"} targetThis={targetBackgroundNumber == 81} setTarget={setTargetBackgroundNumber} number={81} ><img src={String(getBackCardImg('81'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольуо прыжков"} targetThis={targetBackgroundNumber == 82} setTarget={setTargetBackgroundNumber} number={82} ><img src={String(getBackCardImg('82'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо влияния на животных"} targetThis={targetBackgroundNumber == 83} setTarget={setTargetBackgroundNumber} number={83} ><img src={String(getBackCardImg('83'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо защиты разума"} targetThis={targetBackgroundNumber == 84} setTarget={setTargetBackgroundNumber} number={84} ><img src={String(getBackCardImg('84'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо защиты"} targetThis={targetBackgroundNumber == 85} setTarget={setTargetBackgroundNumber} number={85} ><img src={String(getBackCardImg('85'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо командования элементалями"} targetThis={targetBackgroundNumber == 86} setTarget={setTargetBackgroundNumber} number={86} ><img src={String(getBackCardImg('86'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо невидимости"} targetThis={targetBackgroundNumber == 87} setTarget={setTargetBackgroundNumber} number={87} ><img src={String(getBackCardImg('87'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо отражения заклинаний"} targetThis={targetBackgroundNumber == 88} setTarget={setTargetBackgroundNumber} number={88} ><img src={String(getBackCardImg('88'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо падающих звезд"} targetThis={targetBackgroundNumber == 89} setTarget={setTargetBackgroundNumber} number={89} ><img src={String(getBackCardImg('89'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо падения перышком"} targetThis={targetBackgroundNumber == 90} setTarget={setTargetBackgroundNumber} number={90} ><img src={String(getBackCardImg('90'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо плавания"} targetThis={targetBackgroundNumber == 91} setTarget={setTargetBackgroundNumber} number={91} ><img src={String(getBackCardImg('91'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо призыва джинна"} targetThis={targetBackgroundNumber == 92} setTarget={setTargetBackgroundNumber} number={92} ><img src={String(getBackCardImg('92'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо проникающего зрения"} targetThis={targetBackgroundNumber == 93} setTarget={setTargetBackgroundNumber} number={93} ><img src={String(getBackCardImg('93'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо регенирации"} targetThis={targetBackgroundNumber == 94} setTarget={setTargetBackgroundNumber} number={94} ><img src={String(getBackCardImg('94'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо свободных действий"} targetThis={targetBackgroundNumber == 95} setTarget={setTargetBackgroundNumber} number={95} ><img src={String(getBackCardImg('95'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо сопротивления"} targetThis={targetBackgroundNumber == 96} setTarget={setTargetBackgroundNumber} number={96} ><img src={String(getBackCardImg('96'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо тарана"} targetThis={targetBackgroundNumber == 97} setTarget={setTargetBackgroundNumber} number={97} ><img src={String(getBackCardImg('97'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо телекинеза"} targetThis={targetBackgroundNumber == 98} setTarget={setTargetBackgroundNumber} number={98} ><img src={String(getBackCardImg('98'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо тепла"} targetThis={targetBackgroundNumber == 99} setTarget={setTargetBackgroundNumber} number={99} ><img src={String(getBackCardImg('99'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо трех желаний"} targetThis={targetBackgroundNumber == 100} setTarget={setTargetBackgroundNumber} number={100} ><img src={String(getBackCardImg('100'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо уклонения"} targetThis={targetBackgroundNumber == 101} setTarget={setTargetBackgroundNumber} number={101} ><img src={String(getBackCardImg('101'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо хождения по воде"} targetThis={targetBackgroundNumber == 102} setTarget={setTargetBackgroundNumber} number={102} ><img src={String(getBackCardImg('102'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольцо хранения заклинаний"} targetThis={targetBackgroundNumber == 103} setTarget={setTargetBackgroundNumber} number={103} ><img src={String(getBackCardImg('103'))} /></OptionCardImg>,
            <OptionCardImg name={"Кольчуга ифритов"} targetThis={targetBackgroundNumber == 104} setTarget={setTargetBackgroundNumber} number={104} ><img src={String(getBackCardImg('104'))} /></OptionCardImg>,
            <OptionCardImg name={"Красивый проклепанный доспех"} targetThis={targetBackgroundNumber == 105} setTarget={setTargetBackgroundNumber} number={105} ><img src={String(getBackCardImg('105'))} /></OptionCardImg>,
            <OptionCardImg name={"Крылатые сапоги"} targetThis={targetBackgroundNumber == 106} setTarget={setTargetBackgroundNumber} number={106} ><img src={String(getBackCardImg('106'))} /></OptionCardImg>,
            <OptionCardImg name={"Крылья полета"} targetThis={targetBackgroundNumber == 107} setTarget={setTargetBackgroundNumber} number={107} ><img src={String(getBackCardImg('107'))} /></OptionCardImg>,
            <OptionCardImg name={"Куб врат"} targetThis={targetBackgroundNumber == 108} setTarget={setTargetBackgroundNumber} number={108} ><img src={String(getBackCardImg('108'))} /></OptionCardImg>,
            <OptionCardImg name={"Куб силового поля"} targetThis={targetBackgroundNumber == 109} setTarget={setTargetBackgroundNumber} number={109} ><img src={String(getBackCardImg('109'))} /></OptionCardImg>,
            <OptionCardImg name={"Кувшин бесконечной воды"} targetThis={targetBackgroundNumber == 110} setTarget={setTargetBackgroundNumber} number={110} ><img src={String(getBackCardImg('110'))} /></OptionCardImg>,
            <OptionCardImg name={"Латы дварфов"} targetThis={targetBackgroundNumber == 111} setTarget={setTargetBackgroundNumber} number={111} ><img src={String(getBackCardImg('111'))} /></OptionCardImg>,
            <OptionCardImg name={"ленты Биларро"} targetThis={targetBackgroundNumber == 112} setTarget={setTargetBackgroundNumber} number={112} ><img src={String(getBackCardImg('112'))} /></OptionCardImg>,
            <OptionCardImg name={"Ловящий стрелы щит"} targetThis={targetBackgroundNumber == 113} setTarget={setTargetBackgroundNumber} number={113} ><img src={String(getBackCardImg('113'))} /></OptionCardImg>,
            <OptionCardImg name={"Лук клятвы"} targetThis={targetBackgroundNumber == 114} setTarget={setTargetBackgroundNumber} number={114} ><img src={String(getBackCardImg('114'))} /></OptionCardImg>,
            <OptionCardImg name={"Лунный клинок"} targetThis={targetBackgroundNumber == 115} setTarget={setTargetBackgroundNumber} number={115} ><img src={String(getBackCardImg('115'))} /></OptionCardImg>,
            <OptionCardImg name={"Мазь кеогтома"} targetThis={targetBackgroundNumber == 116} setTarget={setTargetBackgroundNumber} number={116} ><img src={String(getBackCardImg('116'))} /></OptionCardImg>,
            <OptionCardImg name={"Мантия архимага"} targetThis={targetBackgroundNumber == 117} setTarget={setTargetBackgroundNumber} number={117} ><img src={String(getBackCardImg('117'))} /></OptionCardImg>,
            <OptionCardImg name={"Мантия глаз"} targetThis={targetBackgroundNumber == 118} setTarget={setTargetBackgroundNumber} number={118} ><img src={String(getBackCardImg('118'))} /></OptionCardImg>,
            <OptionCardImg name={"Мантия звезд"} targetThis={targetBackgroundNumber == 119} setTarget={setTargetBackgroundNumber} number={119} ><img src={String(getBackCardImg('119'))} /></OptionCardImg>,
            <OptionCardImg name={"Мантия полезных предметов"} targetThis={targetBackgroundNumber == 120} setTarget={setTargetBackgroundNumber} number={120} ><img src={String(getBackCardImg('120'))} /></OptionCardImg>,
            <OptionCardImg name={"Мантия сияющих цветов"} targetThis={targetBackgroundNumber == 121} setTarget={setTargetBackgroundNumber} number={121} ><img src={String(getBackCardImg('121'))} /></OptionCardImg>,
            <OptionCardImg name={"Мантия сопротивления заклинаниям"} targetThis={targetBackgroundNumber == 122} setTarget={setTargetBackgroundNumber} number={122} ><img src={String(getBackCardImg('122'))} /></OptionCardImg>,
            <OptionCardImg name={"Мгновенная крепость Даэрна"} targetThis={targetBackgroundNumber == 123} setTarget={setTargetBackgroundNumber} number={123} ><img src={String(getBackCardImg('123'))} /></OptionCardImg>,
            <OptionCardImg name={"Медальон затягивающихся ран"} targetThis={targetBackgroundNumber == 124} setTarget={setTargetBackgroundNumber} number={124} ><img src={String(getBackCardImg('124'))} /></OptionCardImg>,
            <OptionCardImg name={"Медальон защиты от ран"} targetThis={targetBackgroundNumber == 125} setTarget={setTargetBackgroundNumber} number={125} ><img src={String(getBackCardImg('125'))} /></OptionCardImg>,
            <OptionCardImg name={"Медальон здоровья"} targetThis={targetBackgroundNumber == 126} setTarget={setTargetBackgroundNumber} number={126} ><img src={String(getBackCardImg('126'))} /></OptionCardImg>,
            <OptionCardImg name={"Медальон мыслей"} targetThis={targetBackgroundNumber == 127} setTarget={setTargetBackgroundNumber} number={127} ><img src={String(getBackCardImg('127'))} /></OptionCardImg>,
            <OptionCardImg name={"Метательное копье молний"} targetThis={targetBackgroundNumber == 128} setTarget={setTargetBackgroundNumber} number={128} ><img src={String(getBackCardImg('128'))} /></OptionCardImg>,
            <OptionCardImg name={"Меч головоруб"} targetThis={targetBackgroundNumber == 129} setTarget={setTargetBackgroundNumber} number={129} ><img src={String(getBackCardImg('129'))} /></OptionCardImg>,
            <OptionCardImg name={"Меч каса"} targetThis={targetBackgroundNumber == 130} setTarget={setTargetBackgroundNumber} number={130} ><img src={String(getBackCardImg('130'))} /></OptionCardImg>,
            <OptionCardImg name={"Меч кражи жизни"} targetThis={targetBackgroundNumber == 131} setTarget={setTargetBackgroundNumber} number={131} ><img src={String(getBackCardImg('131'))} /></OptionCardImg>,
            <OptionCardImg name={"Меч остроты"} targetThis={targetBackgroundNumber == 132} setTarget={setTargetBackgroundNumber} number={132} ><img src={String(getBackCardImg('132'))} /></OptionCardImg>,
            <OptionCardImg name={"Мифрильный доспех"} targetThis={targetBackgroundNumber == 133} setTarget={setTargetBackgroundNumber} number={133} ><img src={String(getBackCardImg('133'))} /></OptionCardImg>,
            <OptionCardImg name={"Молот грома"} targetThis={targetBackgroundNumber == 134} setTarget={setTargetBackgroundNumber} number={134} ><img src={String(getBackCardImg('134'))} /></OptionCardImg>,
            <OptionCardImg name={"Морозный клинок"} targetThis={targetBackgroundNumber == 135} setTarget={setTargetBackgroundNumber} number={135} ><img src={String(getBackCardImg('135'))} /></OptionCardImg>,
            <OptionCardImg name={"Наручи защиты"} targetThis={targetBackgroundNumber == 136} setTarget={setTargetBackgroundNumber} number={136} ><img src={String(getBackCardImg('136'))} /></OptionCardImg>,
            <OptionCardImg name={"Наручи стрельбы из лука"} targetThis={targetBackgroundNumber == 137} setTarget={setTargetBackgroundNumber} number={137} ><img src={String(getBackCardImg('137'))} /></OptionCardImg>,
            <OptionCardImg name={"Неподвижный жезл"} targetThis={targetBackgroundNumber == 138} setTarget={setTargetBackgroundNumber} number={138} ><img src={String(getBackCardImg('138'))} /></OptionCardImg>,
            <OptionCardImg name={"Ночные очки"} targetThis={targetBackgroundNumber == 139} setTarget={setTargetBackgroundNumber} number={139} ><img src={String(getBackCardImg('139'))} /></OptionCardImg>,
            <OptionCardImg name={"Обруч сжигания"} targetThis={targetBackgroundNumber == 140} setTarget={setTargetBackgroundNumber} number={140} ><img src={String(getBackCardImg('140'))} /></OptionCardImg>,
            <OptionCardImg name={"Ожерелье адаптации"} targetThis={targetBackgroundNumber == 141} setTarget={setTargetBackgroundNumber} number={141} ><img src={String(getBackCardImg('141'))} /></OptionCardImg>,
            <OptionCardImg name={"Ожерелье молитвенных четок"} targetThis={targetBackgroundNumber == 142} setTarget={setTargetBackgroundNumber} number={142} ><img src={String(getBackCardImg('142'))} /></OptionCardImg>,
            <OptionCardImg name={"Ожереье огненных шаров"} targetThis={targetBackgroundNumber == 143} setTarget={setTargetBackgroundNumber} number={143} ><img src={String(getBackCardImg('143'))} /></OptionCardImg>,
            <OptionCardImg name={"Оковы измерений"} targetThis={targetBackgroundNumber == 144} setTarget={setTargetBackgroundNumber} number={144} ><img src={String(getBackCardImg('144'))} /></OptionCardImg>,
            <OptionCardImg name={"Оружие предупреждения"} targetThis={targetBackgroundNumber == 145} setTarget={setTargetBackgroundNumber} number={145} ><img src={String(getBackCardImg('145'))} /></OptionCardImg>,
            <OptionCardImg name={"Очки орлиного зрения"} targetThis={targetBackgroundNumber == 146} setTarget={setTargetBackgroundNumber} number={146} ><img src={String(getBackCardImg('146'))} /></OptionCardImg>,
            <OptionCardImg name={"Очки очарования"} targetThis={targetBackgroundNumber == 147} setTarget={setTargetBackgroundNumber} number={147} ><img src={String(getBackCardImg('147'))} /></OptionCardImg>,
            <OptionCardImg name={"Парящая сфера"} targetThis={targetBackgroundNumber == 148} setTarget={setTargetBackgroundNumber} number={148} ><img src={String(getBackCardImg('148'))} /></OptionCardImg>,
            <OptionCardImg name={"Перчатки ловли снарядов"} targetThis={targetBackgroundNumber == 149} setTarget={setTargetBackgroundNumber} number={149} ><img src={String(getBackCardImg('149'))} /></OptionCardImg>,
            <OptionCardImg name={"Перчатки плавания и лазания"} targetThis={targetBackgroundNumber == 150} setTarget={setTargetBackgroundNumber} number={150} ><img src={String(getBackCardImg('150'))} /></OptionCardImg>,
            <OptionCardImg name={"Плащ защиты"} targetThis={targetBackgroundNumber == 151} setTarget={setTargetBackgroundNumber} number={151} ><img src={String(getBackCardImg('151'))} /></OptionCardImg>,
            <OptionCardImg name={"Плащ летучей мыши"} targetThis={targetBackgroundNumber == 152} setTarget={setTargetBackgroundNumber} number={152} ><img src={String(getBackCardImg('152'))} /></OptionCardImg>,
            <OptionCardImg name={"Плащ невидимости"} targetThis={targetBackgroundNumber == 153} setTarget={setTargetBackgroundNumber} number={153} ><img src={String(getBackCardImg('153'))} /></OptionCardImg>,
            <OptionCardImg name={"Плащ паука"} targetThis={targetBackgroundNumber == 154} setTarget={setTargetBackgroundNumber} number={154} ><img src={String(getBackCardImg('154'))} /></OptionCardImg>,
            <OptionCardImg name={"Плащ ската"} targetThis={targetBackgroundNumber == 155} setTarget={setTargetBackgroundNumber} number={155} ><img src={String(getBackCardImg('155'))} /></OptionCardImg>,
            <OptionCardImg name={"Плащ ускользания"} targetThis={targetBackgroundNumber == 156} setTarget={setTargetBackgroundNumber} number={156} ><img src={String(getBackCardImg('156'))} /></OptionCardImg>,
            <OptionCardImg name={"Плащ шарлатана"} targetThis={targetBackgroundNumber == 157} setTarget={setTargetBackgroundNumber} number={157} ><img src={String(getBackCardImg('157'))} /></OptionCardImg>,
            <OptionCardImg name={"Повязка интеллекта"} targetThis={targetBackgroundNumber == 158} setTarget={setTargetBackgroundNumber} number={158} ><img src={String(getBackCardImg('158'))} /></OptionCardImg>,
            <OptionCardImg name={"Подковы ветра"} targetThis={targetBackgroundNumber == 159} setTarget={setTargetBackgroundNumber} number={159} ><img src={String(getBackCardImg('159'))} /></OptionCardImg>,
            <OptionCardImg name={"Подковы скорости"} targetThis={targetBackgroundNumber == 160} setTarget={setTargetBackgroundNumber} number={160} ><img src={String(getBackCardImg('160'))} /></OptionCardImg>,
            <OptionCardImg name={"Помело полета"} targetThis={targetBackgroundNumber == 161} setTarget={setTargetBackgroundNumber} number={161} ><img src={String(getBackCardImg('161'))} /></OptionCardImg>,
            <OptionCardImg name={"Порошок исчезновения"} targetThis={targetBackgroundNumber == 162} setTarget={setTargetBackgroundNumber} number={162} ><img src={String(getBackCardImg('162'))} /></OptionCardImg>,
            <OptionCardImg name={"Порошок чихания и удушья"} targetThis={targetBackgroundNumber == 163} setTarget={setTargetBackgroundNumber} number={163} ><img src={String(getBackCardImg('163'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох гадюки"} targetThis={targetBackgroundNumber == 164} setTarget={setTargetBackgroundNumber} number={164} ><img src={String(getBackCardImg('164'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох грома и молний"} targetThis={targetBackgroundNumber == 165} setTarget={setTargetBackgroundNumber} number={165} ><img src={String(getBackCardImg('165'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох иссушения"} targetThis={targetBackgroundNumber == 166} setTarget={setTargetBackgroundNumber} number={166} ><img src={String(getBackCardImg('166'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох леса"} targetThis={targetBackgroundNumber == 167} setTarget={setTargetBackgroundNumber} number={167} ><img src={String(getBackCardImg('167'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох лечения"} targetThis={targetBackgroundNumber == 168} setTarget={setTargetBackgroundNumber} number={168} ><img src={String(getBackCardImg('168'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох магов"} targetThis={targetBackgroundNumber == 169} setTarget={setTargetBackgroundNumber} number={169} ><img src={String(getBackCardImg('169'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох мороза"} targetThis={targetBackgroundNumber == 170} setTarget={setTargetBackgroundNumber} number={170} ><img src={String(getBackCardImg('170'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох огня"} targetThis={targetBackgroundNumber == 171} setTarget={setTargetBackgroundNumber} number={171} ><img src={String(getBackCardImg('171'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох очарования"} targetThis={targetBackgroundNumber == 172} setTarget={setTargetBackgroundNumber} number={172} ><img src={String(getBackCardImg('172'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох питона"} targetThis={targetBackgroundNumber == 173} setTarget={setTargetBackgroundNumber} number={173} ><img src={String(getBackCardImg('173'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох роя насекомых"} targetThis={targetBackgroundNumber == 174} setTarget={setTargetBackgroundNumber} number={174} ><img src={String(getBackCardImg('174'))} /></OptionCardImg>,
            <OptionCardImg name={"Посох силы"} targetThis={targetBackgroundNumber == 175} setTarget={setTargetBackgroundNumber} number={175} ><img src={String(getBackCardImg('175'))} /></OptionCardImg>,
            <OptionCardImg name={"Пояс дварфов"} targetThis={targetBackgroundNumber == 176} setTarget={setTargetBackgroundNumber} number={176} ><img src={String(getBackCardImg('176'))} /></OptionCardImg>,
            <OptionCardImg name={"Пояс силы великанов"} targetThis={targetBackgroundNumber == 177} setTarget={setTargetBackgroundNumber} number={177} ><img src={String(getBackCardImg('177'))} /></OptionCardImg>,
            <OptionCardImg name={"Превосходный клей"} targetThis={targetBackgroundNumber == 178} setTarget={setTargetBackgroundNumber} number={178} ><img src={String(getBackCardImg('178'))} /></OptionCardImg>,
            <OptionCardImg name={"Рог вальгаллы"} targetThis={targetBackgroundNumber == 179} setTarget={setTargetBackgroundNumber} number={179} ><img src={String(getBackCardImg('179'))} /></OptionCardImg>,
            <OptionCardImg name={"Рог взрыва"} targetThis={targetBackgroundNumber == 180} setTarget={setTargetBackgroundNumber} number={180} ><img src={String(getBackCardImg('180'))} /></OptionCardImg>,
            <OptionCardImg name={"Рукавицы силы огра"} targetThis={targetBackgroundNumber == 181} setTarget={setTargetBackgroundNumber} number={181} ><img src={String(getBackCardImg('181'))} /></OptionCardImg>,
            <OptionCardImg name={"Сапоги скорости"} targetThis={targetBackgroundNumber == 182} setTarget={setTargetBackgroundNumber} number={182} ><img src={String(getBackCardImg('182'))} /></OptionCardImg>,
            <OptionCardImg name={"Сапоги ходьбы и прыжков"} targetThis={targetBackgroundNumber == 183} setTarget={setTargetBackgroundNumber} number={183} ><img src={String(getBackCardImg('183'))} /></OptionCardImg>,
            <OptionCardImg name={"Свеча мольбы"} targetThis={targetBackgroundNumber == 184} setTarget={setTargetBackgroundNumber} number={184} ><img src={String(getBackCardImg('184'))} /></OptionCardImg>,
            <OptionCardImg name={"Свирель канализации"} targetThis={targetBackgroundNumber == 185} setTarget={setTargetBackgroundNumber} number={185} ><img src={String(getBackCardImg('185'))} /></OptionCardImg>,
            <OptionCardImg name={"Свирель ужаса"} targetThis={targetBackgroundNumber == 186} setTarget={setTargetBackgroundNumber} number={186} ><img src={String(getBackCardImg('186'))} /></OptionCardImg>,
            <OptionCardImg name={"Свиток заклинания"} targetThis={targetBackgroundNumber == 187} setTarget={setTargetBackgroundNumber} number={187} ><img src={String(getBackCardImg('187'))} /></OptionCardImg>,
            <OptionCardImg name={"Святой мститель"} targetThis={targetBackgroundNumber == 188} setTarget={setTargetBackgroundNumber} number={188} ><img src={String(getBackCardImg('188'))} /></OptionCardImg>,
            <OptionCardImg name={"Скарабей защиты"} targetThis={targetBackgroundNumber == 189} setTarget={setTargetBackgroundNumber} number={189} ><img src={String(getBackCardImg('189'))} /></OptionCardImg>,
            <OptionCardImg name={"Складная лодка"} targetThis={targetBackgroundNumber == 190} setTarget={setTargetBackgroundNumber} number={190} ><img src={String(getBackCardImg('190'))} /></OptionCardImg>,
            <OptionCardImg name={"Солнечный клинок"} targetThis={targetBackgroundNumber == 191} setTarget={setTargetBackgroundNumber} number={191} ><img src={String(getBackCardImg('191'))} /></OptionCardImg>,
            <OptionCardImg name={"Справочник быстрых действий"} targetThis={targetBackgroundNumber == 192} setTarget={setTargetBackgroundNumber} number={192} ><img src={String(getBackCardImg('192'))} /></OptionCardImg>,
            <OptionCardImg name={"Справочник по големам"} targetThis={targetBackgroundNumber == 193} setTarget={setTargetBackgroundNumber} number={193} ><img src={String(getBackCardImg('193'))} /></OptionCardImg>,
            <OptionCardImg name={"Справочник полезных упражнений"} targetThis={targetBackgroundNumber == 194} setTarget={setTargetBackgroundNumber} number={194} ><img src={String(getBackCardImg('194'))} /></OptionCardImg>,
            <OptionCardImg name={"Справочник телесного здоровья"} targetThis={targetBackgroundNumber == 195} setTarget={setTargetBackgroundNumber} number={195} ><img src={String(getBackCardImg('195'))} /></OptionCardImg>,
            <OptionCardImg name={"Стрела убийства"} targetThis={targetBackgroundNumber == 196} setTarget={setTargetBackgroundNumber} number={196} ><img src={String(getBackCardImg('196'))} /></OptionCardImg>,
            <OptionCardImg name={"Сумка пожирания"} targetThis={targetBackgroundNumber == 197} setTarget={setTargetBackgroundNumber} number={197} ><img src={String(getBackCardImg('197'))} /></OptionCardImg>,
            <OptionCardImg name={"Сумка с бобами"} targetThis={targetBackgroundNumber == 198} setTarget={setTargetBackgroundNumber} number={198} ><img src={String(getBackCardImg('198'))} /></OptionCardImg>,
            <OptionCardImg name={"Сумка фокусов"} targetThis={targetBackgroundNumber == 199} setTarget={setTargetBackgroundNumber} number={199} ><img src={String(getBackCardImg('199'))} /></OptionCardImg>,
            <OptionCardImg name={"Сумка хранения"} targetThis={targetBackgroundNumber == 200} setTarget={setTargetBackgroundNumber} number={200} ><img src={String(getBackCardImg('200'))} /></OptionCardImg>,
            <OptionCardImg name={"Талисман абсолютного зла"} targetThis={targetBackgroundNumber == 201} setTarget={setTargetBackgroundNumber} number={201} ><img src={String(getBackCardImg('201'))} /></OptionCardImg>,
            <OptionCardImg name={"Талисман сферы"} targetThis={targetBackgroundNumber == 202} setTarget={setTargetBackgroundNumber} number={202} ><img src={String(getBackCardImg('202'))} /></OptionCardImg>,
            <OptionCardImg name={"Талисман чистого добра"} targetThis={targetBackgroundNumber == 203} setTarget={setTargetBackgroundNumber} number={203} ><img src={String(getBackCardImg('203'))} /></OptionCardImg>,
            <OptionCardImg name={"Танцующий меч"} targetThis={targetBackgroundNumber == 204} setTarget={setTargetBackgroundNumber} number={204} ><img src={String(getBackCardImg('204'))} /></OptionCardImg>,
            <OptionCardImg name={"Том лидерства и влияния"} targetThis={targetBackgroundNumber == 205} setTarget={setTargetBackgroundNumber} number={205} ><img src={String(getBackCardImg('205'))} /></OptionCardImg>,
            <OptionCardImg name={"Том молчаливого языка"} targetThis={targetBackgroundNumber == 206} setTarget={setTargetBackgroundNumber} number={206} ><img src={String(getBackCardImg('206'))} /></OptionCardImg>,
            <OptionCardImg name={"Том понимания"} targetThis={targetBackgroundNumber == 207} setTarget={setTargetBackgroundNumber} number={207} ><img src={String(getBackCardImg('207'))} /></OptionCardImg>,
            <OptionCardImg name={"Том чистых мыслей"} targetThis={targetBackgroundNumber == 208} setTarget={setTargetBackgroundNumber} number={208} ><img src={String(getBackCardImg('208'))} /></OptionCardImg>,
            <OptionCardImg name={"Топор берсерка"} targetThis={targetBackgroundNumber == 209} setTarget={setTargetBackgroundNumber} number={209} ><img src={String(getBackCardImg('209'))} /></OptionCardImg>,
            <OptionCardImg name={"Топор владык дварфов"} targetThis={targetBackgroundNumber == 210} setTarget={setTargetBackgroundNumber} number={210} ><img src={String(getBackCardImg('210'))} /></OptionCardImg>,
            <OptionCardImg name={"Трезубец командования рыбами"} targetThis={targetBackgroundNumber == 211} setTarget={setTargetBackgroundNumber} number={211} ><img src={String(getBackCardImg('211'))} /></OptionCardImg>,
            <OptionCardImg name={"Туфли паука"} targetThis={targetBackgroundNumber == 212} setTarget={setTargetBackgroundNumber} number={212} ><img src={String(getBackCardImg('212'))} /></OptionCardImg>,
            <OptionCardImg name={"Убийца великанов"} targetThis={targetBackgroundNumber == 213} setTarget={setTargetBackgroundNumber} number={213} ><img src={String(getBackCardImg('213'))} /></OptionCardImg>,
            <OptionCardImg name={"Убийца драконов"} targetThis={targetBackgroundNumber == 214} setTarget={setTargetBackgroundNumber} number={214} ><img src={String(getBackCardImg('214'))} /></OptionCardImg>,
            <OptionCardImg name={"Удобный рюкзак"} targetThis={targetBackgroundNumber == 215} setTarget={setTargetBackgroundNumber} number={215} ><img src={String(getBackCardImg('215'))} /></OptionCardImg>,
            <OptionCardImg name={"Универсальный растворитель"} targetThis={targetBackgroundNumber == 216} setTarget={setTargetBackgroundNumber} number={216} ><img src={String(getBackCardImg('216'))} /></OptionCardImg>,
            <OptionCardImg name={"Фонарь обнаружения"} targetThis={targetBackgroundNumber == 217} setTarget={setTargetBackgroundNumber} number={217} ><img src={String(getBackCardImg('217'))} /></OptionCardImg>,
            <OptionCardImg name={"Хрустальный шар"} targetThis={targetBackgroundNumber == 218} setTarget={setTargetBackgroundNumber} number={218} ><img src={String(getBackCardImg('218'))} /></OptionCardImg>,
            <OptionCardImg name={"Чаша командования водными элементалями"} targetThis={targetBackgroundNumber == 219} setTarget={setTargetBackgroundNumber} number={219} ><img src={String(getBackCardImg('219'))} /></OptionCardImg>,
            <OptionCardImg name={"Чудесные краски нолзура"} targetThis={targetBackgroundNumber == 220} setTarget={setTargetBackgroundNumber} number={220} ><img src={String(getBackCardImg('220'))} /></OptionCardImg>,
            <OptionCardImg name={"Шапка маскировки"} targetThis={targetBackgroundNumber == 221} setTarget={setTargetBackgroundNumber} number={221} ><img src={String(getBackCardImg('221'))} /></OptionCardImg>,
            <OptionCardImg name={"Шлем блеска"} targetThis={targetBackgroundNumber == 222} setTarget={setTargetBackgroundNumber} number={222} ><img src={String(getBackCardImg('222'))} /></OptionCardImg>,
            <OptionCardImg name={"Шлем понимания языков"} targetThis={targetBackgroundNumber == 223} setTarget={setTargetBackgroundNumber} number={223} ><img src={String(getBackCardImg('223'))} /></OptionCardImg>,
            <OptionCardImg name={"Шлем притягивания снарядов"} targetThis={targetBackgroundNumber == 224} setTarget={setTargetBackgroundNumber} number={224} ><img src={String(getBackCardImg('224'))} /></OptionCardImg>,
            <OptionCardImg name={"Шлем телепатии"} targetThis={targetBackgroundNumber == 225} setTarget={setTargetBackgroundNumber} number={225} ><img src={String(getBackCardImg('225'))} /></OptionCardImg>,
            <OptionCardImg name={"Шлем телепортации"} targetThis={targetBackgroundNumber == 226} setTarget={setTargetBackgroundNumber} number={226} ><img src={String(getBackCardImg('226'))} /></OptionCardImg>,
            <OptionCardImg name={"Щит от заклинаний"} targetThis={targetBackgroundNumber == 227} setTarget={setTargetBackgroundNumber} number={227} ><img src={String(getBackCardImg('227'))} /></OptionCardImg>,
            <OptionCardImg name={"Эльфийские сапоги"} targetThis={targetBackgroundNumber == 228} setTarget={setTargetBackgroundNumber} number={228} ><img src={String(getBackCardImg('228'))} /></OptionCardImg>,
            <OptionCardImg name={"Эльфийский плащь"} targetThis={targetBackgroundNumber == 229} setTarget={setTargetBackgroundNumber} number={229} ><img src={String(getBackCardImg('229'))} /></OptionCardImg>,
            <OptionCardImg name={"Язык пламени"} targetThis={targetBackgroundNumber == 230} setTarget={setTargetBackgroundNumber} number={230} ><img src={String(getBackCardImg('230'))} /></OptionCardImg>,
        ];
        return (
            <div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6]}
                    {Elements[rubahaCaseNumber * 6 + 1]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6 + 2]}
                    {Elements[rubahaCaseNumber * 6 + 3]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6 + 4]}
                    {Elements[rubahaCaseNumber * 6 + 5]}
                </div>
            </div>
        );
    };
    const setSvitokPyti = (num: number) => {
        return (
            <div className={style.InputFile}>
                <label htmlFor={`inputfile + ${0 - num -1}`}><Download/></label>
                <input type="file" name="" id={`inputfile + ${0 - num - 1}`} onInput={(e) => {
                    const file = (e.target as HTMLInputElement);
                    const R = file?.files;
                    if (R != null) {
                        const T = pytSvitok;
                        T[0 - num -1] = R[0];
                        setPytSvitok(T);
                    }
                    let r = targetSvitokNumber; 
                    setTargetSvitokNumber(-999999);
                    setTimeout(( a) => {
                        setTargetSvitokNumber(a);
                    }, 300 , r);
                }} />
            </div>
        );
    }
    const getSvitokCase = () => {
        const Elements = [
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -6} setTarget={setTargetSvitokNumber} number={-6} img={pytSvitok[5] != undefined ? URL.createObjectURL(pytSvitok[5]) : undefined}><div>{setSvitokPyti(-6)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -5} setTarget={setTargetSvitokNumber} number={-5} img={pytSvitok[4] != undefined ? URL.createObjectURL(pytSvitok[4]) : undefined}><div>{setSvitokPyti(-5)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -4} setTarget={setTargetSvitokNumber} number={-4} img={pytSvitok[3] != undefined ? URL.createObjectURL(pytSvitok[3]) : undefined}><div>{setSvitokPyti(-4)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -3} setTarget={setTargetSvitokNumber} number={-3} img={pytSvitok[2] != undefined ? URL.createObjectURL(pytSvitok[2]) : undefined}><div>{setSvitokPyti(-3)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -2} setTarget={setTargetSvitokNumber} number={-2} img={pytSvitok[1] != undefined ? URL.createObjectURL(pytSvitok[1]) : undefined}><div>{setSvitokPyti(-2)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetSvitokNumber == -1} setTarget={setTargetSvitokNumber} number={-1} img={pytSvitok[0] != undefined ? URL.createObjectURL(pytSvitok[0]) : undefined}><div>{setSvitokPyti(-1)}</div></OptionCardImg>,
            <OptionCardImg name={"Свиток 1"} targetThis={targetSvitokNumber == 1} setTarget={setTargetSvitokNumber} number={1} ><img src={String(getSvitokCardImg('1'))} /></OptionCardImg>,
            <OptionCardImg name={"Свиток 2"} targetThis={targetSvitokNumber == 2} setTarget={setTargetSvitokNumber} number={2} ><img src={String(getSvitokCardImg('2'))} /></OptionCardImg>,
            <OptionCardImg name={"Свиток 3"} targetThis={targetSvitokNumber == 3} setTarget={setTargetSvitokNumber} number={3} ><img src={String(getSvitokCardImg('3'))} /></OptionCardImg>,
            <OptionCardImg name={"Свиток 4"} targetThis={targetSvitokNumber == 4} setTarget={setTargetSvitokNumber} number={4} ><img src={String(getSvitokCardImg('4'))} /></OptionCardImg>,
        ];
        return (
            <div>
                <div className={style.LineSetting}>
                    {Elements[svitokCaseNumber * 6]}
                    {Elements[svitokCaseNumber * 6 + 1]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[svitokCaseNumber * 6 + 2]}
                    {Elements[svitokCaseNumber * 6 + 3]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[svitokCaseNumber * 6 + 4]}
                    {Elements[svitokCaseNumber * 6 + 5]}
                </div>
            </div>
        );
    };
    return (
        <div className={style.Main} id={"ThisIsColorsConst"}>
            <div className={style.Viu + ' ' + (showOptions ? style.OpenOptionViu : '')}>
                <div className={style.ChangeCardViu + ' ' + style.BigViu}>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? '' : style.OnHover)} onClick={() => { setIsCSVRedactor(false); setNewCSV(newConst);}}>
                        <p>Режим печати</p>
                    </div>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? style.OnHover : '')} onClick={() => {setIsCSVRedactor(true)}}>
                        <p>Режим CSV редактора</p>
                    </div>
                </div>
                {
                    !isCSVRedactor
                        ? <div className={style.ChangeCardViu}>
                            <div className={style.RubahaViu + ' ' + (sideMode === 0 ? style.OnHover : '')} onClick={() => {
                                setSideMode(0)
                            }}>
                                <p>Лицо</p>
                            </div>
                            <div className={style.RubahaViu + ' ' + (sideMode === 1 ? style.OnHover : '')} onClick={() => {
                                setSideMode(1)
                            }}>
                                <p>Рубаха</p>
                            </div>
                            <div className={style.RubahaViu + ' ' + (sideMode === 2 ? style.OnHover : '')} onClick={() => {
                                setSideMode(2)
                            }}>
                                <p>Обе стороны</p>
                            </div>
                        </div>
                        : null
                }
            </div>
            <Setting className={style.OptionsSetting} onClick={() => {
                setShowOptions(true);
            }}/>
            <div className={style.Options + ' ' + (showOptions ? '' : style.HideWindow)}>
                <div className={style.Hide}>
                    <div className={style.Text} onClick={() => {
                        setShowOptions(false);
                    }}>Скрыть
                    </div>
                </div>
                <div className={style.OpionsCase}>
                    <div className={style.SettingDownload}>
                    <div className={style.But} onClick={() => {
                            //создаем файл
                            const ToString = (myNewSetting: string, myStringMas: string[]|boolean[]|number[], settingName: string) => {
                                let r = myNewSetting + settingName + ':';
                                for (let i = 0; i < myStringMas.length; i++)
                                    r = r + myStringMas[i] + ',';
                                r = r + '\n';
                                return r;
                            };
                            let myNewSetting = '';
                            myNewSetting = ToString(myNewSetting, colors, 'colors');
                            myNewSetting = ToString(myNewSetting, sizePole, 'sizePole');
                            myNewSetting = ToString(myNewSetting, sizeText, 'sizeText');
                            myNewSetting = ToString(myNewSetting, alignValue, 'alignValue');
                            myNewSetting = ToString(myNewSetting, paddingText, 'paddingText');
                            myNewSetting = ToString(myNewSetting, borderRadiusValue, 'borderRadiusValue');
                            myNewSetting = ToString(myNewSetting, imgSize, 'imgSize');
                            myNewSetting = ToString(myNewSetting, minMax, 'minMax');
                            myNewSetting = ToString(myNewSetting, kolvo, 'kolvo');
                            myNewSetting = ToString(myNewSetting, [lineCut], 'lineCut');
                            myNewSetting = ToString(myNewSetting, [lineCutBack], 'lineCutBack');
                            myNewSetting = ToString(myNewSetting, [targetFont1], 'targetFont1');
                            myNewSetting = ToString(myNewSetting, [targetBackgroundNumber], 'targetBackgroundNumber');
                            myNewSetting = ToString(myNewSetting, [targetSvitokNumber], 'targetSvitokNumber');
                            myNewSetting = ToString(myNewSetting, [blockMinMax], 'blockMinMax');
                            myNewSetting = ToString(myNewSetting, blockColor, 'blockColor');
                            myNewSetting = ToString(myNewSetting, blockSizePole, 'blockSizePole');
                            myNewSetting = ToString(myNewSetting, blockSizeText, 'blockSizeText');
                            myNewSetting = ToString(myNewSetting, blockImgSize, 'blockImgSize');
                            myNewSetting = ToString(myNewSetting, blockPaddingText, 'blockPaddingText');
                            myNewSetting = ToString(myNewSetting, blockAlignValue, 'blockAlignValue');
                            myNewSetting = ToString(myNewSetting, blockBorderRadius, 'blockBorderRadius');
                            let blob = new Blob(["\ufeff", myNewSetting], { type: "text;charset=windows-1251" });
                            const url = URL.createObjectURL(blob);
                            const anchor = document.createElement('a');
                            anchor.href = url;
                            anchor.download = "MySpellsSettings.txt";
                            document.body.appendChild(anchor);
                            anchor.click();
                            document.body.removeChild(anchor);
                            URL.revokeObjectURL(url);
                        }}>{'Сохранить настройки'}</div>
                        
                        <input className={style.Hide} type="file" id="mySettingInputFile" onChange={() => {
                            const FromFile = (myString: string, settingName: string, Mas: string[]|boolean[]|number[]) => {
                                let start = myString.indexOf(settingName);
                                let count = 0;
                                if (start != -1) {
                                    start = myString.indexOf(':', start);
                                    let end = myString.indexOf('\n', start);
                                    if (end == -1) end = myString.length;
                                    if (start != -1) {
                                        for (start; start < end - 1 && start != -1;) {
                                            let next = myString.indexOf(',', start + 1);
                                            if (next > end || next == -1) next = end;
                                            if(typeof Mas[0] == 'string') Mas[count] = myString.slice(start + 1, next);
                                            if(typeof Mas[0] == 'number') Mas[count] = Number(myString.slice(start + 1, next));
                                            if(typeof Mas[0] == 'boolean') Mas[count] = (myString.slice(start + 1, next) == 'false') ? false : true;
                                            start = next;
                                            count++;
                                        }
                                    }
                                }
                                return Mas;
                            };
                            const q = (document.getElementById("mySettingInputFile") as HTMLInputElement).files;
                            if (q != null) {
                                let reader = new FileReader();
                                reader.readAsText(q[0], 'windows-1251');
                                reader.onload = function () {
                                    let r = reader.result;
                                    if (r) {
                                        setColors(FromFile(r as string, 'colors', [...colors]) as string[]);
                                        setSizesPole(FromFile(r as string, 'sizePole', [...sizePole]) as number[]);
                                        setSizesText(FromFile(r as string, 'sizeText', [...sizeText]) as number[]);
                                        setAlignValue(FromFile(r as string, 'alignValue', [...alignValue]) as number[]);
                                        setPaddingText(FromFile(r as string, 'paddingText', [...paddingText]) as number[]);
                                        setBorderRadiusValue(FromFile(r as string, 'borderRadiusValue', [...borderRadiusValue]) as number[]);
                                        setImgSize(FromFile(r as string, 'imgSize', [...imgSize]) as number[]);
                                        setMinMax(FromFile(r as string, 'minMax', [...minMax]) as number[]);
                                        setKolvo(FromFile(r as string, 'kolvo', [...kolvo]) as number[]);
                                        setLineCut((FromFile(r as string, 'lineCut', [lineCut]) as boolean[])[0]);
                                        setLineCutBack((FromFile(r as string, 'lineCutBack', [lineCutBack]) as boolean[])[0]);
                                        setTargetFont1((FromFile(r as string, 'targetFont1', [targetFont1]) as number[])[0]);
                                        setTargetBackgroundNumber((FromFile(r as string, 'targetBackgroundNumber', [targetBackgroundNumber]) as number[])[0]);
                                        setTargetSvitokNumber((FromFile(r as string, 'targetSvitokNumber', [targetSvitokNumber]) as number[])[0]);
                                        setBlockMinMax((FromFile(r as string, 'blockMinMax', [blockMinMax]) as boolean[])[0]);
                                        setBlockColor(FromFile(r as string, 'blockColor', [...blockColor]) as boolean[]);
                                        setBlockSizePole(FromFile(r as string, 'blockSizePole', [...blockSizePole]) as boolean[]);
                                        setBlockSizeText(FromFile(r as string, 'blockSizeText', [...blockSizeText]) as boolean[]);
                                        setBlockImgSize((FromFile(r as string, 'blockImgSize', [...blockImgSize]) as boolean[]));
                                        setBlockPaddingText(FromFile(r as string, 'blockPaddingText', [...blockPaddingText]) as boolean[]);
                                        setBlockAlignValue(FromFile(r as string, 'blockAlignValue', [...blockAlignValue]) as boolean[]);
                                        setBlockBorderRadius(FromFile(r as string, 'blockBorderRadius', [...blockBorderRadius]) as boolean[]);
                                    }
                                };
                                (document.getElementById("mySettingInputFile") as HTMLInputElement).value = "";
                            };
                        }}/>
                        <label className={style.But} htmlFor="mySettingInputFile">{'Загрузить'}</label>
                    </div>
                    <OptionCase nameSetting={'Количество на листе'} targetThis={targetOption[1]} setTarget={setTarget} number={1}>
                        <div>
                            <OptionSize text={"По ширине"} size={kolvo[1]} number={1} setSize={setKolv} min={1} max={5} block={false} setBlock={undefined} />
                            <OptionSize text={"По высоте"} size={kolvo[0]} number={0} setSize={setKolv} min={1} max={5} block={false} setBlock={undefined} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Выбор картинки'} targetThis={targetOption[2]} setTarget={setTarget} number={2}>
                        <>
                            <div className={style.RubahaBackNext}>
                                <div className={style.but}>{rubahaCaseNumber > 0 ? <button onClick={() => { setRubahaCaseNumber(rubahaCaseNumber - 1) }}>Назад</button> : null}</div>
                                <div className={style.p}><div>страница {rubahaCaseNumber + 1}</div></div>
                                <div className={style.but}>{rubahaCaseNumber < 46 ? <button onClick={() => { setRubahaCaseNumber(rubahaCaseNumber + 1) }}>Вперед</button> : null}</div>
                            </div>
                            {getRubahaCase()}
                        </>
                    </OptionCase>
                    <OptionCase nameSetting={'Настройки картинки'} targetThis={targetOption[3]} setTarget={setTarget} number={3}>
                        <div>
                            <div>Растягивание по карточке<br />Значения учитываются в процентах от размера карточки<br />авто значение автоматического размера в пропорциях<br />100% и 100% растянет картинку по карточке<br />100% и авто растянет картинку по карточке по высоте, а ширина ее будет выбрана автоматически<br />авто авто картинка будет в своем первоначальном размере<br />Подгонка по высоте и ширине проводится при повороте в 0 градусов</div>
                            <OptionSize text={"% По высоте"} size={imgSize[0]} textAs={"Авто"} number={0} setSize={setImgSizes} min={0} max={500} block={blockImgSize[0]} setBlock={setBlocImgSize} />
                            <OptionSize text={"% По ширине"} size={imgSize[1]} textAs={"Авто"} number={1} setSize={setImgSizes} min={0} max={500} block={blockImgSize[1]} setBlock={setBlocImgSize} />
                            <OptionSize text={"град Поворот"} size={imgSize[2]} textAs={"0"} number={2} setSize={setImgSizes} min={-360} max={360} block={blockImgSize[2]} setBlock={setBlocImgSize} />
                            <OptionSize text={"Отступ сверху"} size={imgSize[3]} number={3} setSize={setImgSizes} min={0} max={200} block={blockImgSize[3]} setBlock={setBlocImgSize} />
                            <OptionSize text={"Отступ снизу"} size={imgSize[4]} number={4} setSize={setImgSizes} min={0} max={200} block={blockImgSize[4]} setBlock={setBlocImgSize} />
                            <OptionSize text={"Отступ слева"} size={imgSize[5]} number={5} setSize={setImgSizes} min={0} max={200} block={blockImgSize[5]} setBlock={setBlocImgSize} />
                            <OptionSize text={"Отступ справа"} size={imgSize[6]} number={6} setSize={setImgSizes} min={0} max={200} block={blockImgSize[6]} setBlock={setBlocImgSize} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Выбор свитка'} targetThis={targetOption[4]} setTarget={setTarget} number={4}>
                        <>
                            <div className={style.RubahaBackNext}>
                                <div className={style.but}>{svitokCaseNumber > 0 ? <button onClick={() => { setSvitokCaseNumber(svitokCaseNumber - 1) }}>Назад</button> : null}</div>
                                <div className={style.p}><div>страница {svitokCaseNumber + 1}</div></div>
                                <div className={style.but}>{svitokCaseNumber < 1 ? <button onClick={() => { setSvitokCaseNumber(svitokCaseNumber + 1) }}>Вперед</button> : null}</div>
                            </div>
                            {getSvitokCase()}
                        </>
                    </OptionCase>
                    <OptionCase nameSetting={'Цвета'} targetThis={targetOption[5]} setTarget={setTarget} number={5}>
                        <div>
                            <OptionColor text={"Фон листа"} color={colors[0]} number={0} setColor={setColor} block={blockColor[0]} setBlock={setBlocColor} name={colorsNames[0]} />
                            <OptionColor text={"Лицо. Края карточки"} color={colors[1]} number={1} setColor={setColor} block={blockColor[1]} setBlock={setBlocColor} name={colorsNames[1]} />
                            <OptionColor text={"Лицо. Фон заголовка"} textAs={"Как края"} color={colors[2]} number={2} setColor={setColor} block={blockColor[2]} setBlock={setBlocColor} name={colorsNames[2]} />
                            <OptionColor text={"Лицо. Заголовок"} color={colors[3]} number={3} setColor={setColor} block={blockColor[3]} setBlock={setBlocColor} name={colorsNames[3]} />
                            <OptionColor text={"Лицо. Фон внутренности"} color={colors[4]} number={4} setColor={setColor} block={blockColor[4]} setBlock={setBlocColor} name={colorsNames[4]} />
                            <OptionColor text={"Лицо. Описание"} color={colors[5]} number={5} setColor={setColor} block={blockColor[5]} setBlock={setBlocColor} name={colorsNames[5]} />
                            <OptionColor text={"Лицо. Фон подписи"} textAs={"Как края"} color={colors[6]} number={6} setColor={setColor} block={blockColor[6]} setBlock={setBlocColor} name={colorsNames[6]} />
                            <OptionColor text={"Лицо. Подпись"} color={colors[7]} number={7} setColor={setColor} block={blockColor[7]} setBlock={setBlocColor} name={colorsNames[7]} />
                            <OptionColor text={"Круг1. Обводка"} color={colors[8]} number={8} setColor={setColor} block={blockColor[8]} setBlock={setBlocColor} name={colorsNames[8]} />
                            <OptionColor text={"Круг1. Фон"} color={colors[9]} number={9} setColor={setColor} block={blockColor[9]} setBlock={setBlocColor} name={colorsNames[9]} />
                            <OptionColor text={"Круг1. Текст"} color={colors[10]} number={10} setColor={setColor} block={blockColor[10]} setBlock={setBlocColor} name={colorsNames[10]} />
                            <OptionColor text={"Круг2. Обводка"} color={colors[11]} number={11} setColor={setColor} block={blockColor[11]} setBlock={setBlocColor} name={colorsNames[11]} />
                            <OptionColor text={"Круг2. Фон"} color={colors[12]} number={12} setColor={setColor} block={blockColor[12]} setBlock={setBlocColor} name={colorsNames[12]} />
                            <OptionColor text={"Круг2. Текст"} color={colors[13]} number={13} setColor={setColor} block={blockColor[13]} setBlock={setBlocColor} name={colorsNames[13]} />
                            <OptionColor text={"Круг3. Обводка"} color={colors[14]} number={14} setColor={setColor} block={blockColor[14]} setBlock={setBlocColor} name={colorsNames[14]} />
                            <OptionColor text={"Круг3. Фон"} color={colors[15]} number={15} setColor={setColor} block={blockColor[15]} setBlock={setBlocColor} name={colorsNames[15]} />
                            <OptionColor text={"Круг3. Текст"} color={colors[16]} number={16} setColor={setColor} block={blockColor[16]} setBlock={setBlocColor} name={colorsNames[16]} />
                            <OptionColor text={"Круг4. Обводка"} color={colors[17]} number={17} setColor={setColor} block={blockColor[17]} setBlock={setBlocColor} name={colorsNames[17]} />
                            <OptionColor text={"Круг4. Фон"} color={colors[18]} number={18} setColor={setColor} block={blockColor[18]} setBlock={setBlocColor} name={colorsNames[18]} />
                            <OptionColor text={"Круг4. Текст"} color={colors[19]} number={19} setColor={setColor} block={blockColor[19]} setBlock={setBlocColor} name={colorsNames[19]} />
                            <OptionColor text={"Рубаха. Края карточки"} textAs={"Как лицо"} color={colors[20]} number={20} setColor={setColor} block={blockColor[20]} setBlock={setBlocColor} name={colorsNames[20]} />
                            <OptionColor text={"Рубаха. Фон заголовка"} textAs={"Как края"} color={colors[21]} number={21} setColor={setColor} block={blockColor[21]} setBlock={setBlocColor} name={colorsNames[21]} />
                            <OptionColor text={"Рубаха. Заголовок"} color={colors[22]} number={22} setColor={setColor} block={blockColor[22]} setBlock={setBlocColor} name={colorsNames[22]} />
                            <OptionColor text={"Рубаха. Фон перекладины"} textAs={"Как края"} color={colors[23]} number={23} setColor={setColor} block={blockColor[23]} setBlock={setBlocColor} name={colorsNames[23]} />
                            <OptionColor text={"Рубаха. Перекладина"} color={colors[24]} number={24} setColor={setColor} block={blockColor[24]} setBlock={setBlocColor} name={colorsNames[24]} />
                            <OptionColor text={"Рубаха. Фон описания"} textAs={"Как лицо"}  color={colors[25]} number={25} setColor={setColor} block={blockColor[25]} setBlock={setBlocColor} name={colorsNames[25]} />
                            <OptionColor text={"Рубаха. Текст описания"}color={colors[26]} number={26} setColor={setColor} block={blockColor[26]} setBlock={setBlocColor} name={colorsNames[26]} />
                            <OptionColor text={"Рубаха. Фон подписи"} textAs={"Как края"} color={colors[27]} number={27} setColor={setColor} block={blockColor[27]} setBlock={setBlocColor} name={colorsNames[27]} />
                            <OptionColor text={"Рубаха. Текст подписи"} color={colors[28]} number={28} setColor={setColor} block={blockColor[28]} setBlock={setBlocColor} name={colorsNames[28]} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры полей'} targetThis={targetOption[6]} setTarget={setTarget} number={6}>
                        <div>
                            <OptionSize text={"Лицо. Заголовок"} size={sizePole[0]} number={0} setSize={setSizePole} min={0} max={99} block={blockSizePole[0]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Лицо. Подпись"} size={sizePole[1]} number={1} setSize={setSizePole} min={0} max={49} block={blockSizePole[1]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг1. Ширина"} size={sizePole[2]} number={2} setSize={setSizePole} min={0} max={199} block={blockSizePole[2]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг1. Высота"} size={sizePole[3]} number={3} setSize={setSizePole} min={0} max={199} block={blockSizePole[3]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг1. Обводка"} size={sizePole[4]} number={4} setSize={setSizePole} min={0} max={30} block={blockSizePole[4]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг2. Ширина"} textAs={"Как 1"} size={sizePole[5]} number={5} setSize={setSizePole} min={0} max={199} block={blockSizePole[5]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг2. Высота"} textAs={"Как 1"} size={sizePole[6]} number={6} setSize={setSizePole} min={0} max={199} block={blockSizePole[6]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг2. Обводка"} textAs={"Как 1"} size={sizePole[7]} number={7} setSize={setSizePole} min={0} max={30} block={blockSizePole[7]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг3. Ширина"} textAs={"Как 1"} size={sizePole[8]} number={8} setSize={setSizePole} min={0} max={199} block={blockSizePole[8]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг3. Высота"} textAs={"Как 1"} size={sizePole[9]} number={9} setSize={setSizePole} min={0} max={199} block={blockSizePole[9]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг3. Обводка"} textAs={"Как 1"} size={sizePole[10]} number={10} setSize={setSizePole} min={0} max={30} block={blockSizePole[10]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг4. Ширина"} textAs={"Как 1"} size={sizePole[11]} number={11} setSize={setSizePole} min={0} max={199} block={blockSizePole[11]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг4. Высота"} textAs={"Как 1"} size={sizePole[12]} number={12} setSize={setSizePole} min={0} max={199} block={blockSizePole[12]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг4. Обводка"} textAs={"Как 1"} size={sizePole[13]} number={13} setSize={setSizePole} min={0} max={30} block={blockSizePole[13]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Заголовок"} textAs={"Как лицо"} size={sizePole[14]} number={14} setSize={setSizePole} min={0} max={49} block={blockSizePole[14]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Перекладина"} size={sizePole[15]} number={15} setSize={setSizePole} min={0} max={49} block={blockSizePole[15]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Рубаха. Подпись"} textAs={"Как лицо"} size={sizePole[16]} number={16} setSize={setSizePole} min={0} max={49} block={blockSizePole[16]} setBlock={setBlocSizePole} />
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => {setLineCut(!lineCut)}}> {"___"} {lineCut && <div/>}</div> <p>{"Линия разрезки (лицо)"}</p> </div>
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => {setLineCutBack(!lineCutBack)}}> {"___"} {lineCutBack && <div/>}</div> <p>{"Линия разрезки (зад)"}</p> </div>
                            <OptionSize text={"мм Высота листа"} size={sizePole[17]} number={17} setSize={setSizePole} min={50} max={500} block={blockSizePole[17]} setBlock={setBlocSizePole} />
                            <OptionSize text={"мм Ширина листа"} size={sizePole[18]} number={18} setSize={setSizePole} min={50} max={500} block={blockSizePole[18]} setBlock={setBlocSizePole} />
                            <div className={style.ButtonMinMax} onClick={() => {
                                const A = [...sizePole];
                                A[17] = 297;
                                A[18] = 210;
                                setSizesPole(A);
                            }}>
                                <div>Вернуть А4</div>
                            </div>
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Положение кругов'} targetThis={targetOption[7]} setTarget={setTarget} number={7}>
                        <div>
                            <OptionSize text={"Круг 1. Горизонталь"} size={sizePole[19]} number={19} setSize={setSizePole} min={0} max={500} block={blockSizePole[19]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг 1. Вертикаль"} size={sizePole[20]} number={20} setSize={setSizePole} min={0} max={500} block={blockSizePole[20]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг 2. Горизонталь"}size={sizePole[21]} number={21} setSize={setSizePole} min={0} max={500} block={blockSizePole[21]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг 2. Вертикаль"} size={sizePole[22]} number={22} setSize={setSizePole} min={0} max={500} block={blockSizePole[22]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг 3. Горизонталь"} size={sizePole[23]} number={23} setSize={setSizePole} min={0} max={500} block={blockSizePole[23]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг 3. Вертикаль"} size={sizePole[24]} number={24} setSize={setSizePole} min={0} max={500} block={blockSizePole[24]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг 4. Горизонталь"} size={sizePole[25]} number={25} setSize={setSizePole} min={0} max={500} block={blockSizePole[25]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Круг 4. Вертикаль"} size={sizePole[26]} number={26} setSize={setSizePole} min={0} max={500} block={blockSizePole[26]} setBlock={setBlocSizePole} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры текста'} targetThis={targetOption[8]} setTarget={setTarget} number={8}>
                        <div>
                            <div className={style.FontChose}><div>№ <input type="number" name="" id="" value={targetFont1} min={0} max={19} onChange={(e)=>{setTargetFont1(Number(e.target.value))}} />{"Шрифта "}</div>{fontMas[targetFont1]}</div>
                            <OptionSize text={"Лицо. Заголовок"} size={sizeText[0]} number={0} setSize={setSizeText} min={0} max={99} block={blockSizeText[0]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Лицо. Описание"} size={sizeText[1]} number={1} setSize={setSizeText} min={0} max={99} block={blockSizeText[1]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Лицо. Подпись"} size={sizeText[2]} number={2} setSize={setSizeText} min={0} max={99} block={blockSizeText[2]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Круг 1"} size={sizeText[3]} number={3} setSize={setSizeText} min={0} max={199} block={blockSizeText[3]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Круг 2"} textAs={"Как 1"} size={sizeText[4]} number={4} setSize={setSizeText} min={0} max={199} block={blockSizeText[4]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Круг 3"} textAs={"Как 1"} size={sizeText[5]} number={5} setSize={setSizeText} min={0} max={199} block={blockSizeText[5]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Круг 4"} textAs={"Как 1"} size={sizeText[6]} number={6} setSize={setSizeText} min={0} max={199} block={blockSizeText[6]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Рубаха. Заголовок"} textAs={"Как лицо"} size={sizeText[7]} number={7} setSize={setSizeText} min={0} max={99} block={blockSizeText[7]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Рубаха. Перекладина"}  size={sizeText[8]} number={8} setSize={setSizeText} min={0} max={99} block={blockSizeText[8]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Рубаха. Подпись"} textAs={"Как лицо"} size={sizeText[9]} number={9} setSize={setSizeText} min={0} max={99} block={blockSizeText[9]} setBlock={setBlocSizeText} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Положение текста'} targetThis={targetOption[9]} setTarget={setTarget} number={9}>
                        <div>
                            <OptionAllain text={"Лицо. Заголовок"} value={alignValue[0]} number={0} setValue={setAlignsValue} block={blockAlignValue[0]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Лицо. Описание"} value={alignValue[1]} number={1} setValue={setAlignsValue} block={blockAlignValue[1]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Лицо. Подпись"} value={alignValue[2]} number={2} setValue={setAlignsValue} block={blockAlignValue[2]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Заголовок"} value={alignValue[3]} number={3} setValue={setAlignsValue} block={blockAlignValue[3]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Перекладина"} value={alignValue[4]} number={4} setValue={setAlignsValue} block={blockAlignValue[4]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Описание"} value={alignValue[5]} number={5} setValue={setAlignsValue} block={blockAlignValue[5]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Рубаха. Подпись"} value={alignValue[6]} number={6} setValue={setAlignsValue} block={blockAlignValue[6]} setBlock={setBlocAlignValue} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Отступы'} targetThis={targetOption[10]} setTarget={setTarget} number={10}>
                        <div>
                            <OptionSize text={"Верхнее поле листа"} size={paddingText[0]} number={0} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[0]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Боковые поля листа"} size={paddingText[1]} number={1} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[1]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Нижнее поле листа"} size={paddingText[2]} number={2} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[2]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Обводка карточки верх"} size={paddingText[3]} number={3} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[3]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Обводка карточки право"} size={paddingText[4]} number={4} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[4]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Обводка карточки низ"} size={paddingText[5]} number={5} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[5]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Обводка карточки лево"} size={paddingText[6]} number={6} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[6]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Заголовок"} size={paddingText[7]} number={7} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[7]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Описание верх"} size={paddingText[8]} number={8} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[8]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Описание право"} size={paddingText[9]} number={9} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[9]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Описание низ"} size={paddingText[10]} number={10} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[10]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Описание лево"} size={paddingText[11]} number={11} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[11]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Лицо. Подпись"} size={paddingText[12]} number={12} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[12]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Обводка карточки верх"} size={paddingText[13]} number={13} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[13]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Обводка карточки право"} size={paddingText[14]} number={14} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[14]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Обводка карточки низ"} size={paddingText[15]} number={15} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[15]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Обводка карточки лево"} size={paddingText[16]} number={16} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[16]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Заголовок"} size={paddingText[17]} number={17} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[17]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Перекладина"} size={paddingText[18]} number={18} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[18]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Описание верх"} size={paddingText[19]} number={19} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[19]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Описание право"} size={paddingText[20]} number={20} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[20]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Описание низ"} size={paddingText[21]} number={21} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[21]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Описание лево"} size={paddingText[22]} number={22} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[22]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Рубаха. Подпись"} size={paddingText[23]} number={23} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[23]} setBlock={setBlocPaddingText} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Округлости'} targetThis={targetOption[11]} setTarget={setTarget} number={11}>
                        <div>
                            <OptionSize text={"Лицо. Заголовок ┌"} size={borderRadiusValue[0]} number={0} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[0]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Заголовок ┐"} textAs={"как ┌"} size={borderRadiusValue[1]} number={1} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[1]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Заголовок ┘"} textAs={"как ┌"} size={borderRadiusValue[2]} number={2} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[2]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Заголовок └"} textAs={"как ┌"} size={borderRadiusValue[3]} number={3} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[3]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Внутри ┌"} size={borderRadiusValue[4]} number={4} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[4]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Внутри ┐"} textAs={"как ┌"} size={borderRadiusValue[5]} number={5} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[5]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Внутри ┘"} textAs={"как ┌"} size={borderRadiusValue[6]} number={6} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[6]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Внутри └"} textAs={"как ┌"} size={borderRadiusValue[7]} number={7} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[7]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Подпись ┌"} size={borderRadiusValue[8]} number={8} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[8]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Подпись ┐"} textAs={"как ┌"} size={borderRadiusValue[9]} number={9} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[9]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Подпись ┘"} textAs={"как ┌"} size={borderRadiusValue[10]} number={10} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[10]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Лицо. Подпись └"} textAs={"как ┌"} size={borderRadiusValue[11]} number={11} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[11]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 1 ┌"} size={borderRadiusValue[28]} number={28} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[28]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 1 ┐"} textAs={"как ┌"} size={borderRadiusValue[29]} number={29} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[29]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 1 ┘"} textAs={"как ┌"} size={borderRadiusValue[30]} number={30} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[30]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 1 └"} textAs={"как ┌"} size={borderRadiusValue[31]} number={31} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[31]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 2 ┌"} size={borderRadiusValue[32]} number={32} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[32]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 2 ┐"} textAs={"как ┌"} size={borderRadiusValue[33]} number={33} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[33]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 2 ┘"} textAs={"как ┌"} size={borderRadiusValue[34]} number={34} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[34]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 2 └"} textAs={"как ┌"} size={borderRadiusValue[35]} number={35} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[35]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 3 ┌"} size={borderRadiusValue[35]} number={36} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[36]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 3 ┐"} textAs={"как ┌"} size={borderRadiusValue[37]} number={37} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[37]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 3 ┘"} textAs={"как ┌"} size={borderRadiusValue[38]} number={38} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[38]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 3 └"} textAs={"как ┌"} size={borderRadiusValue[39]} number={39} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[39]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 4 ┌"} size={borderRadiusValue[40]} number={40} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[40]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 4 ┐"} textAs={"как ┌"} size={borderRadiusValue[41]} number={41} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[41]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 4 ┘"} textAs={"как ┌"} size={borderRadiusValue[42]} number={42} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[42]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Круг 4 └"} textAs={"как ┌"} size={borderRadiusValue[43]} number={43} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[43]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Заголовок ┌"} size={borderRadiusValue[12]} number={12} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[12]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Заголовок ┐"} textAs={"как ┌"} size={borderRadiusValue[13]} number={13} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[13]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Заголовок ┘"} textAs={"как ┌"} size={borderRadiusValue[14]} number={14} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[14]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Заголовок └"} textAs={"как ┌"} size={borderRadiusValue[15]} number={15} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[15]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Перекладина ┌"} size={borderRadiusValue[16]} number={16} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[16]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Перекладина ┐"} textAs={"как ┌"} size={borderRadiusValue[17]} number={17} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[17]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Перекладина ┘"} textAs={"как ┌"} size={borderRadiusValue[18]} number={18} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[18]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Перекладина └"} textAs={"как ┌"} size={borderRadiusValue[19]} number={19} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[19]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри ┌"} size={borderRadiusValue[20]} number={20} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[20]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри ┐"} textAs={"как ┌"} size={borderRadiusValue[21]} number={21} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[21]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри ┘"} textAs={"как ┌"} size={borderRadiusValue[22]} number={22} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[22]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Внутри └"} textAs={"как ┌"} size={borderRadiusValue[23]} number={23} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[23]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подпись ┌"} size={borderRadiusValue[24]} number={24} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[24]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подпись ┐"} textAs={"как ┌"} size={borderRadiusValue[25]} number={25} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[25]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подпись ┘"} textAs={"как ┌"} size={borderRadiusValue[26]} number={26} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[26]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Рубаха. Подпись └"} textAs={"как ┌"} size={borderRadiusValue[27]} number={27} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[27]} setBlock={setBlocBorderRadius} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Подгонка описания'} targetThis={targetOption[12]} setTarget={setTarget} number={12}>
                        <div>
                            <OptionSize text={"% Высота строки (от 0 до 200)"} size={sizeText[10]} number={10} setSize={setSizeText} min={0} max={200} block={blockSizeText[10]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Минимальный размер"} size={minMax[0]} number={0} setSize={setMinMaxs} min={0} max={blockMinMax ? 99 : minMax[1]} block={false} setBlock={setBlocMinMax} />
                            <OptionSize textAs={"Как минимум"} text={"Максимум"} size={minMax[1]} number={1} setSize={setMinMaxs} min={minMax[0]} max={99} block={blockMinMax} setBlock={setBlocMinMax} />
                            <div className={style.ButtonMinMax} onClick={() => {
                                setStartPerepolnen(startPerepolnen + 1);
                            }}>
                                <div>Подогнать текст под параметры</div>
                            </div>
                            <div className={style.Perepolnen}>
                                {perepolnenText}
                            </div>
                        </div>
                    </OptionCase>
                </div>
            </div>
            {!showRedactor
                ? <Setting className={style.RedactorSetting} onClick={() => { setShowRedactor(true); }} />
                : null}
            <div className={style.RedactorAll+ ' ' + (showOptions ? '' : style.BigWidth)}>
                {isCSVRedactor
                    ? <div className={style.CSVLine}>
                        <div className={style.InputPlace}>
                            <div className={style.Title}>Текущая строка</div>
                            <div className={style.CSVText}>
                                <input type="text" name="" id="" value={newCSV} onChange={(e) => { setNewCSV(e.target.value); }}/>
                            </div>
                            <div className={style.Buttons}>
                                <div>
                                    <div className={style.Download} onClick={() => {
                                        let R = '';
                                        const A: string[] = [...cards[Number((document.getElementById('CTRLC') as HTMLInputElement)?.value)]];
                                        for (let i = 0; i < 13; i++) R = R + '\"' + A[i].replaceAll('\"', '\"\"').replaceAll('\n', 'Џ') + '\"' + ';';
                                        R = getCardFromCSVLine(R, A, 0, R.length - 1, '');
                                        setNewCSV(R);
                                        setNewCard(A);
                                    }}>
                                        Вставить сюда карточку №
                                    </div>
                                    <input min={0} max={cards.length - 1} type="number" name="" id="CTRLC" defaultValue={0} /></div>
                                <div className={style.Download} onClick={() => {setNewCSV(newConst);}}>Очистить карточку</div>
                                <div>
                                    <div className={style.Download} onClick={() => {
                                        let num = Number((document.getElementById('CTRLV') as HTMLInputElement)?.value);
                                        let afterNum = 0;
                                        while (num >= 0) {
                                            afterNum = CSV.indexOf('\n', afterNum + 1);
                                            num--;
                                        }
                                        if (afterNum == -1) setCSV(CSV + '\n' + newCSV);
                                        else if (afterNum == 0) setCSV(newCSV + '\n' + CSV);
                                        else {
                                            afterNum++;
                                            setCSV(CSV.slice(0, afterNum) + newCSV + '\n' + CSV.slice(afterNum, CSV.length));
                                        }
                                        setMakeCSV(makeCSV + 1);
                                        (document.getElementById('CTRLV') as HTMLInputElement).value = String (cards.length);
                                    }}>Вставить новую карточку после карточки №</div>
                                    <input type="number" min={-1} max={cards.length - 1} name="" id={'CTRLV'}  defaultValue={cards.length - 1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
                <div className={style.Redactor  + ' ' + (showRedactor ? '' : style.HideWindow)}>
                    <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowRedactor(false); }}>Скрыть</div> </div>
                    <div className={style.RedactorCase}>
                        <div className={style.Base}>
                            <div className={style.Title}>База</div>
                            <div className={style.BaseTips}>
                                <BaseTip name={"Примеры"} setTargetBase={() => {
                                    setCSV("\"Пример карточки\";\"0\";\"0\";\"Это краткое описание\";\"Это подпись\";\"1\";\"2\";\"3\";\"4\";\"Тестовая карточка\";\"Что это?\";\"Много текста. Очень много текста. Лорем. ЛОРЕМ. ААААААААА.ЏLorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi pariatur odit, obcaecati aliquid harum ipsam ea beatae deserunt dolores doloribus corrupti error praesentium nulla laudantium repudiandae quae quidem aspernatur vitae!ЏLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem saepe architecto voluptatem totam accusamus, velit ad veritatis ullam obcaecati earum labore sapiente? Optio modi sit fugiat architecto? Ipsam, facere. Pariatur!ЏLorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, enim. Totam a eius possimus ipsum necessitatibus, corporis autem labore velit consequatur obcaecati explicabo quo, sunt similique reprehenderit. Atque, provident animi.ЏLorem ipsum dolor sit amet consectetur adipisicing elit. Vero quidem eaque, atque quae recusandae, excepturi mollitia velit eveniet, tempora consectetur temporibus tempore sequi aperiam nostrum nulla veritatis eligendi ullam voluptates.\";\"\";\n\"Керамический кувшин\";\"1\";\"0\";\"Керамический кувшин, кажется способным вместить 1 галлон. Если его потрясти, то можно услышать звуки плескающийся жидкости.\";\"\";\"500з\";\"12ф\";\"\";\"\";\"Алхимический сосуд\";\"Чудесный предмет, необычный\";\"Этот керамический кувшин, кажется способным вместить 1 галлон жидкости и весит 12 фунтов вне зависимости от того, полный он или пустой. Если его потрясти, то можно услышать звуки плескающийся жидкости, даже если кувшин пуст.ЏВы можете действием назвать одну жидкость из приведённой ниже таблицы, отчего кувшин начнёт её производить. После этого вы можете ещё одним действием откупорить кувшин и вылить эту жидкость из сосуда со скоростью до 2 галлонов в минуту. Максимальное количество жидкости, которое может произвести кувшин, зависит от вида жидкости, названной вами.ЏПосле того, как кувшин начинает производить выбранную жидкость, он не может производить другую, или произвести названную жидкость в объёме больше её максимума, пока не наступит следующий рассвет.ЏВино	1 галлонЏВода пресная	8 галлоновЏВода солёная	12 галлоновЏКислота	8 унцийЏМайонез	2 галлонаЏМасло	1 квартаЏМёд	1 галлонЏПиво	4 галлонаЏУксус	2 галлонаЏЯд, простой	1/2 унции\";\"\";\n\"Амулет\";\"2\";\"0\";\"Амулет. От него чувствуется магия.\";\"\";\"500з\";\"\";\"\";\"\";\"Амулет защитыЏот обнаружения и поиска\";\"Чудесный предмет, необычный (требуется настройка)\";\"Пока вы носите этот амулет, вы скрыты от магии школы Прорицания. Вы не можете быть целью подобной магии, и вас не воспринимают магические сенсоры слежения.\";\"\";\n\"Амулет\";\"3\";\"0\";\"Амулет. От него чувствуется магия.\";\"\";\"5000з\";\"\";\"\";\"\";\"Амулет здоровья\";\"Чудесный предмет, редкий (требуется настройка)\";\"Пока вы носите этот амулет, ваше значение Телосложения равно 19. Если ваше Телосложение без него уже 19 или выше, то амулет не оказывает на вас никакого действия.\";\"\";\n\"Амулет\";\"4\";\"0\";\"Амулет. От него чувствуется магия.\";\"\";\"50тз\";\"\";\"\";\"\";\"Амулет планов\";\"Чудесный предмет, очень редкий (требуется настройка)\";\"Пока вы носите этот амулет, вы можете действием назвать хорошо знакомое вам место на другом плане. После этого необходимо совершить проверку Интеллекта Сл 15. При успехе вы накладываете заклинание уход в иной мир [plane shift]. При провале вы и все существа и предметы в пределах 15 футов от вас переноситесь в случайном направлении. Бросьте к100. При результате \"\"1–60\"\" вы переноситесь в случайное место на названном вами плане. При результате \"\"61–100\"\" вы переноситесь в случайное место на вашем текущем плане существования.\";\"\";\n\"Доспех\";\"6\";\"0\";\"Доспех сделанный из необычного металла.\";\"\";\"500з\";\"\";\"\";\"\";\"Адамантиновый доспех\";\"Доспех (средний или тяжелый, кроме шкурного), необычный\";\"Эти доспехи усилены адамантином, одним из самых прочных из существующих веществ. Пока вы носите эти доспехи, все критические попадания по вам считаются обычными попаданиями.\";\"\";\n\"Палочка\";\"22\";\"0\";\"Палочка. От нее веет магией.\";\"\";\"500з\";\"\";\"\";\"\";\"Волшебная палочка снарядов\";\"Волшебная палочка, необычная\";\"У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 или несколько зарядов, чтобы наложить с её помощью заклинание волшебная стрела. За 1 заряд вы накладываете это заклинание 1-го уровня. Вы можете увеличить уровень заклинания на 1 за каждый дополнительный используемый заряд.ЏПалочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится.\";\"\";\n\"Палочка\";\"18\";\"0\";\"Палочка. От нее веет магией.\";\"\";\"500з\";\"\";\"\";\"\";\"Волшебная палочка паутины\";\"Волшебная палочка, необычная (требуется настройка заклинателем)\";\"У этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 или несколько зарядов, чтобы наложить с её помощью заклинание волшебная стрелаУ этой волшебной палочки 7 зарядов. Если вы её держите, вы можете действием потратить 1 заряд, чтобы наложить ей заклинание паутина (Сл спасброска 15).ЏПалочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится.. За 1 заряд вы накладываете это заклинание 1-го уровня. Вы можете увеличить уровень заклинания на 1 за каждый дополнительный используемый заряд.ЏПалочка ежедневно восстанавливает 1к6 + 1 заряд на рассвете. Если вы истратили последний заряд в палочке, бросьте к20. Если выпадет «1», палочка рассыплется в пыль и уничтожится.\";\"\";\n\"Меч\";\"31\";\"0\";\"Меч. Держа его в руке, Вы ощущаете страх.\";\"\";\"5000з\";\"\";\"\";\"\";\"Вор девяти жизней\";\"Оружие (любой меч), очень редкое (требуется настройка)\";\"Вы получаете бонус +2 к броскам атаки и урона этим магическим оружием.ЏУ меча есть 1к8 + 1 заряд. Если вы совершаете критическое попадание по существу, у которого меньше 100 хитов, оно должно преуспеть в спасброске Телосложения Сл 15, иначе мгновенно умрёт, когда меч вырвет его жизненную силу из тела (конструкты и нежить обладают иммунитетом). Меч теряет 1 заряд, если существо умирает. Когда у меча не останется зарядов, он теряет это свойство.\";\"\";\n\"Жаровня\";\"40\";\"0\";\"Выглядит как обычная жаровня.\";\"\";\"500з\";\"5ф\";\"\";\"\";\"Жаровня командованияЏогненными элементалями\";\"Чудесный предмет, редкий\";\"Если в этой латунной жаровне горит огонь, вы можете действием произнести командное слово и призвать огненного элементаля, как если бы наложили заклинание призыв элементаля. Жаровню нельзя использовать повторно, пока не наступит следующий рассвет.\";\"\";\n\"Кольцо\";\"91\";\"0\";\"Кольцо с кальмаром. Выглядит удивленно.\";\"\";\"100з\";\"\";\"\";\"\";\"Кольцо плавания\";\"Кольцо, необычное\";\"Вы получаете скорость плавания 40 футов, пока носите это кольцо.\";\"\";\n\"Баночка с мазью\";\"116\";\"0\";\"Запечатанная баночка с мазью. Немного пахнет алоэ.\";\"\";\"100з\";\"0,5ф\";\"\";\"\";\"Мазь Кеогтома\";\"Чудесный предмет, необычный\";\"Это стеклянная банка, три дюйма в диаметре, содержит 1к4 + 1 доз густой мази, которая слабо пахнет алоэ. Банка и её содержимое весят 0,5 фунта.ЏДействием можно проглотить или нанести на кожу одну дозу мази. Существо, которое делает так, восстанавливает 2к8 + 2 хита, перестаёт быть отравленным и излечивается от всех болезней.\";\"\";\n\"Свирель\";\"186\";\"0\";\"Музыкальный инструмент, сделан из костей.\";\"\";\"100з\";\"\";\"\";\"\";\"Свирель ужаса\";\"Чудесный предмет, необычный\";\"Вы должны владеть духовыми музыкальными инструментами, чтобы использовать эту свирель. У неё есть 3 заряда. Вы можете действием поиграть на ней и потратить 1 заряд, чтобы издать жуткую мелодию. Все существа в пределах 30 футов от вас, слышащие вашу мелодию, должны преуспеть в спасброске Мудрости Сл 15, иначе они станут испуганными вами на 1 минуту. Если хотите, все существа в этой области, не враждебные по отношению к вам, автоматически преуспеют в этом спасброске. Существа, провалившие спасбросок, могут повторять его в конце каждого своего хода, оканчивая эффект на себе при успехе. Существо, преуспевшее в спасброске, получает иммунитет к этой свирели на 24 часа. Свирель ежедневно восстанавливает 1к3 заряда на рассвете.\";\"\";\n\"Сапоги\";\"228\";\"0\";\"Элегантные мягкие сапоги с приятными лесными орнаментами.\";\"\";\"100з\";\"\";\"\";\"\";\"Эльфийские сапоги\";\"Чудесный предмет, необычный\";\"Пока вы носите эти сапоги, ваши шаги не издают звука, вне зависимости от поверхности, по которой вы идёте. Вы также совершаете с преимуществом проверки Ловкости (Скрытность), которые полагаются на бесшумное передвижение.\";\"\";");
                                    setMakeCSV(makeCSV + 1);
                                }} />
                            </div>
                        </div>
                        <div className={style.InputPlace}>
                            <div className={style.Title}>CSV</div>
                            <div className={style.CSVText}>
                                <textarea value={CSV} name="CSVText" id="CSVText" wrap='off' onChange={(e) => { setCSV(e.target.value); }} />
                            </div>
                        <div className={style.Buttons}>
                            <input className={style.DownloadInput} type="file" id="InputFile" onChange={readFile}/>
                            <label className={style.Download} htmlFor="InputFile">Загрузить файл</label>
                            <div className={style.Obnova}>
                                    <div className={style.Download} onClick={() => { setMakeCSV(makeCSV + 1) }}>Обновить карточки</div>
                                    {needUpdate ? <div className={style.NeedUpdate}>!</div> : null}
                            </div>
                            <div className={style.Download} onClick={downloadFile}>Скачать файл</div>
                        </div>
                        </div>
                    </div>
            </div>
            </div>
            {
                !isCSVRedactor
                    ? <div className={style.Lists + ' ' + (showRedactor ? style.ListDown : '') + ' ' + (showOptions ? style.ListRigth : '')}> {getCards()} </div>
                    : <div className={style.AroundTwoCards + (showOptions ? ' ' + style.AddPadRig : '')}>
                        <div className={style.TwoCards}>
                            <div className={style.OneCard}><CardItem targetFont={String(fontMas[targetFont1])} keyt={-1} Pole={newCard} cardImg={String(getBackCardImg(newCard[1]))} svitok={String(getSvitokCardImg(newCard[2]))} /></div>
                            <div className={style.OneCard}><CardItem targetFont={String(fontMas[targetFont1])} isBack={true} keyt={-1} startPerepolnen={startPerepolnen} plusPerepolnen={plusPerepolnen} minMax={minMax} Pole={newCard}/></div>
                            <div className={style.CardSelection}>
                                <div>
                                    <input placeholder='Заголовок1' type="text" value={newCard[0]} onChange={(e) => { const A = newCard; A[0] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Картинка' type="text" value={newCard[1]} onChange={(e) => { const A = newCard; A[1] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Свиток' type="text" value={newCard[2]} onChange={(e) => { const A = newCard; A[2] = e.target.value;  setPoles(A)}} />
                                    <textarea placeholder='Краткое описание' rows={4} value={newCard[3]} onChange={(e) => { const A = newCard; A[3] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Подпись' type="text" value={newCard[4]} onChange={(e) => { const A = newCard; A[4] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Круг1' type="text" value={newCard[5]} onChange={(e) => { const A = newCard; A[5] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Круг2' type="text" value={newCard[6]} onChange={(e) => { const A = newCard; A[6] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Круг3' type="text" value={newCard[7]} onChange={(e) => { const A = newCard; A[7] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Круг4' type="text" value={newCard[8]} onChange={(e) => { const A = newCard; A[8] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Заголовок2' type="text" value={newCard[9]} onChange={(e) => { const A = newCard; A[9] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Подзаголовок' type="text" value={newCard[10]} onChange={(e) => { const A = newCard; A[10] = e.target.value;  setPoles(A)}} />
                                    <textarea placeholder='Описание' rows={6} value={newCard[11]} onChange={(e) => { const A = newCard; A[11] = e.target.value;  setPoles(A)}} />
                                    <input placeholder='Подпись' type="text" value={newCard[12]} onChange={(e) => { const A = newCard; A[12] = e.target.value;  setPoles(A)}} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}
export default SpellMain;


interface SpellListProps {
    index: number,
    isBack: boolean,
    minMax: number[],
    kolvo: number[],
    cards: string[][],
    getBackCardImg: (card: string) => string|undefined,
    getSvitokCardImg: (card: string) => string|undefined,
    targetFont1: string|number;
    plusPerepolnen: (num: number, v: boolean) => void;
    startPerepolnen: number;
}
const SpellList: FC<SpellListProps> = ({index, isBack, minMax, kolvo, cards, getBackCardImg, getSvitokCardImg, targetFont1, plusPerepolnen, startPerepolnen}) => {
    const targetFont = typeof targetFont1 === "string" ? targetFont1 : String(fontMas[targetFont1])
    return (
        <div className={style.List} key={"List" + index}>
            {
                Array.from(Array(kolvo[0]).keys()).map((a, index2) => {
                    return (
                        <div className={style.LineCards} key={"List" + index + " Line" + index2}>
                            {
                                Array.from(Array(kolvo[1]).keys()).map((a, index3) => {
                                    if (isBack) {
                                        if (cards.length >= kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3) {
                                            return (
                                                <div className={style.Card}
                                                     key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3}>
                                                    <CardItem targetFont={targetFont} isBack={true}
                                                              plusPerepolnen={plusPerepolnen} minMax={minMax}
                                                              startPerepolnen={startPerepolnen}
                                                              keyt={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3 - 1}
                                                              Pole={cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3 - 1]}/>
                                                </div>
                                            );
                                        }
                                        return (
                                            <div className={style.Card}
                                                 key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3}>
                                            </div>
                                        );
                                    } else {
                                        if (cards.length > kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3) {
                                            return (
                                                <div className={style.Card}
                                                     key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + index3}>
                                                    <CardItem targetFont={targetFont}
                                                              keyt={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + index3}
                                                              Pole={cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3]}
                                                              cardImg={String(getBackCardImg(cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3][1]))}
                                                              svitok={String(getSvitokCardImg(cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3][2]))}/>
                                                </div>
                                            );
                                        }
                                        return (
                                            <div className={style.Card}
                                                 key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + index3}>
                                            </div>
                                        );
                                    }
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    )
}