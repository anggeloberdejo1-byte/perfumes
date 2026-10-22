// Arpeggio — piezas compartidas: encabezado, pie, carrito, búsqueda y tarjetas.
const WA='18292324326';

// Sección de cada marca. Lo que no está aquí es "Diseñador".
const ARABES=['Lattafa','Armaf','Afnan','Orientica','Al Haramain','Rasasi','Ajmal','French Avenue','Dumont','Jo Milano Paris','Ahli','Ilmin','Beckkan'];
const NICHO=['Creed','Bond No. 9','Xerjoff','Montale','Parfums de Marly','Kilian','Roja Parfums','Initio','Le Labo','Mancera','Ex Nihilo','Byredo','Maison Francis Kurkdjian','Amouage','Giardini di Toscana','Sospiro','Lorenzo Pazzaglia','Bharara','Kayali','Louis Vuitton','Tom Ford'];
const SECCIONES=[
  {id:'disenador',nombre:'Diseñador',desc:'Las casas de moda de siempre: Chanel, Dior, Carolina Herrera, Versace…'},
  {id:'arabes',nombre:'Árabes',desc:'Intensos y duraderos: Lattafa, Armaf, Afnan, Al Haramain…'},
  {id:'nicho',nombre:'Nicho',desc:'Perfumería de autor: Creed, Parfums de Marly, Xerjoff, Kilian…'},
];
const seccionDe=marca=>ARABES.includes(marca)?'arabes':NICHO.includes(marca)?'nicho':'disenador';


const BY={};PERFUMES.forEach(p=>{p[6]=seccionDe(p[2]);BY[p[0]]=p});
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const img=c=>BY[c]&&BY[c][5]?`<img src="img/${c}.webp" alt="${esc(BY[c][1])}, ${esc(BY[c][2])}" loading="lazy">`:'';
const waLink=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const cat=(q={})=>'catalogo.html'+(Object.keys(q).length?'?'+new URLSearchParams(q):'');

const CARRO='<g transform="translate(350,0) scale(-1,1)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M292 5L247 7L196 138" stroke-width="11"/><path d="M58 46H233M60 46L72 130L196 138" stroke-width="11"/><path d="M88 46V132M113 46V133M138 46V135M163 46V136M188 46V137M64 74H222M68 102H211" stroke-width="7"/><path d="M196 138C204 158 224 162 228 182H66" stroke-width="10"/><circle cx="86" cy="198" r="9" stroke-width="6"/><circle cx="212" cy="198" r="9" stroke-width="6"/></g>';
// Wordmark del logo nuevo (19-oct): Helvetica Neue Medium estirada, en vectores (nuevo logo 19 octubre/fuente/crear_logo_nuevo.py)
const WORDMARK='<svg class="wm" viewBox="-30 -807 6437 1068" aria-hidden="true"><path d="M931.77 -120.75Q931.77 -98.7 942.165 -89.25Q952.56 -79.8 982.8 -79.8Q992.25 -79.8 1005.4799999999999 -79.8Q1018.7099999999999 -79.8 1035.72 -81.9V1.05Q1024.3799999999999 3.1500000000000004 1006.425 5.775Q988.4699999999999 8.4 969.5699999999999 10.5Q950.67 12.600000000000001 931.77 13.650000000000002Q912.87 14.700000000000001 899.64 14.700000000000001Q833.49 14.700000000000001 790.02 0.0Q746.55 -14.700000000000001 733.3199999999999 -51.45Q669.06 -16.8 575.505 -1.0499999999999998Q481.95 14.700000000000001 395.01 14.700000000000001Q328.85999999999996 14.700000000000001 268.38 4.7250000000000005Q207.89999999999998 -5.25 161.59499999999997 -24.675Q115.28999999999999 -44.1 87.88499999999999 -74.025Q60.48 -103.95 60.48 -143.85Q60.48 -194.25 93.55499999999999 -225.75Q126.63 -257.25 180.495 -275.1Q234.35999999999999 -292.95 301.455 -300.825Q368.54999999999995 -308.7 436.59 -312.90000000000003Q495.17999999999995 -319.2 548.0999999999999 -321.825Q601.02 -324.45 641.655 -330.75Q682.29 -337.05 705.915 -350.175Q729.54 -363.3 729.54 -389.55Q729.54 -412.65000000000003 709.6949999999999 -427.35Q689.8499999999999 -442.05 660.555 -449.925Q631.26 -457.8 595.3499999999999 -460.425Q559.4399999999999 -463.05 527.31 -463.05Q436.59 -463.05 378.0 -442.05Q319.40999999999997 -421.05 311.84999999999997 -376.95H96.39Q102.05999999999999 -429.45000000000005 141.75 -464.1Q181.44 -498.75 242.86499999999998 -519.75Q304.28999999999996 -540.75 381.78 -549.1500000000001Q459.27 -557.5500000000001 540.54 -557.5500000000001Q612.36 -557.5500000000001 682.29 -549.1500000000001Q752.2199999999999 -540.75 807.9749999999999 -521.85Q863.7299999999999 -502.95000000000005 897.75 -473.02500000000003Q931.77 -443.1 931.77 -400.05ZM716.31 -271.95Q667.17 -254.10000000000002 595.3499999999999 -250.425Q523.53 -246.75 451.71 -239.4Q417.69 -236.25 385.56 -230.47500000000002Q353.43 -224.70000000000002 328.86 -214.72500000000002Q304.28999999999996 -204.75 290.115 -188.47500000000002Q275.94 -172.20000000000002 275.94 -149.1Q275.94 -129.15 296.73 -115.5Q317.52 -101.85000000000001 346.81499999999994 -93.97500000000001Q376.10999999999996 -86.10000000000001 411.07499999999993 -82.95Q446.03999999999996 -79.8 474.39 -79.8Q510.29999999999995 -79.8 551.8799999999999 -85.05Q593.4599999999999 -90.3 630.3149999999999 -102.9Q667.17 -115.5 691.74 -134.925Q716.31 -154.35 716.31 -182.70000000000002ZM969.5699999999999 -542.85H1171.8V-437.85H1175.58Q1185.03 -459.90000000000003 1212.435 -480.90000000000003Q1239.84 -501.90000000000003 1278.585 -519.225Q1317.33 -536.5500000000001 1364.58 -547.0500000000001Q1411.83 -557.5500000000001 1460.9699999999998 -557.5500000000001Q1498.77 -557.5500000000001 1512.945 -556.5Q1527.12 -555.45 1542.2399999999998 -554.4V-438.90000000000003Q1519.56 -441.0 1495.935 -442.57500000000005Q1472.31 -444.15000000000003 1449.6299999999999 -444.15000000000003Q1394.82 -444.15000000000003 1346.625 -432.07500000000005Q1298.4299999999998 -420.0 1262.52 -396.375Q1226.61 -372.75 1205.82 -338.1Q1185.03 -303.45 1185.03 -258.3V0.0H969.5699999999999ZM1445.85 -542.85H1649.97V-469.35H1653.75Q1699.11 -516.6 1780.38 -537.075Q1861.65 -557.5500000000001 1956.15 -557.5500000000001Q2071.44 -557.5500000000001 2157.435 -534.975Q2243.43 -512.4 2300.13 -473.025Q2356.83 -433.65000000000003 2385.18 -381.15000000000003Q2413.5299999999997 -328.65000000000003 2413.5299999999997 -268.8Q2413.5299999999997 -214.20000000000002 2388.015 -162.75Q2362.5 -111.30000000000001 2310.525 -71.92500000000001Q2258.55 -32.550000000000004 2179.17 -8.925Q2099.79 14.700000000000001 1992.06 14.700000000000001Q1944.81 14.700000000000001 1897.56 9.975000000000001Q1850.31 5.25 1806.84 -5.25Q1763.37 -15.75 1726.5149999999999 -32.025000000000006Q1689.6599999999999 -48.300000000000004 1665.09 -70.35000000000001H1661.31V200.55H1445.85ZM2198.0699999999997 -270.90000000000003Q2198.0699999999997 -307.65000000000003 2181.06 -342.3Q2164.05 -376.95 2130.0299999999997 -403.725Q2096.0099999999998 -430.5 2044.9799999999998 -446.775Q1993.9499999999998 -463.05 1927.8 -463.05Q1791.72 -463.05 1722.7350000000001 -410.55Q1653.75 -358.05 1653.75 -270.90000000000003Q1653.75 -229.95000000000002 1671.705 -194.775Q1689.6599999999999 -159.6 1725.57 -134.4Q1761.48 -109.2 1811.565 -94.5Q1861.65 -79.8 1927.8 -79.8Q2001.51 -79.8 2052.54 -96.6Q2103.5699999999997 -113.4 2136.6449999999995 -140.175Q2169.72 -166.95000000000002 2183.8949999999995 -201.07500000000002Q2198.0699999999997 -235.20000000000002 2198.0699999999997 -270.90000000000003ZM3071.25 -319.2Q3067.4700000000003 -347.55 3049.5150000000003 -373.8Q3031.56 -400.05 3000.375 -419.475Q2969.19 -438.90000000000003 2924.775 -450.975Q2880.36 -463.05 2825.55 -463.05Q2768.85 -463.05 2722.545 -452.025Q2676.2400000000002 -441.0 2643.165 -421.57500000000005Q2610.09 -402.15000000000003 2590.245 -375.90000000000003Q2570.4 -349.65000000000003 2568.51 -319.2ZM2568.51 -240.45000000000002Q2568.51 -208.95000000000002 2584.5750000000003 -179.55Q2600.6400000000003 -150.15 2632.7700000000004 -128.10000000000002Q2664.9 -106.05000000000001 2714.04 -92.92500000000001Q2763.1800000000003 -79.8 2831.2200000000003 -79.8Q2925.7200000000003 -79.8 2983.3650000000002 -102.375Q3041.01 -124.95 3069.36 -170.1H3273.48Q3256.4700000000003 -126.0 3214.8900000000003 -91.35Q3173.31 -56.7 3114.7200000000003 -33.075Q3056.13 -9.450000000000001 2983.365 2.625Q2910.6 14.700000000000001 2831.2200000000003 14.700000000000001Q2715.9300000000003 14.700000000000001 2627.1000000000004 -6.3Q2538.27 -27.3 2476.8450000000003 -65.10000000000001Q2415.42 -102.9 2384.235 -155.4Q2353.05 -207.9 2353.05 -270.90000000000003Q2353.05 -328.65000000000003 2386.125 -380.625Q2419.2000000000003 -432.6 2480.625 -471.975Q2542.05 -511.35 2628.9900000000002 -534.45Q2715.9300000000003 -557.5500000000001 2825.55 -557.5500000000001Q2940.84 -557.5500000000001 3032.505 -530.7750000000001Q3124.17 -504.0 3184.65 -459.9Q3245.13 -415.8 3272.535 -358.57500000000005Q3299.94 -301.35 3286.71 -240.45000000000002ZM4159.89 -28.35Q4159.89 94.5 4036.0950000000003 154.875Q3912.3 215.25 3679.83 215.25Q3606.12 215.25 3531.465 206.85000000000002Q3456.8100000000004 198.45000000000002 3395.385 178.5Q3333.96 158.55 3292.38 126.0Q3250.8 93.45 3243.2400000000002 46.2H3458.7000000000003Q3468.15 71.4 3490.83 87.15Q3513.51 102.9 3544.695 111.825Q3575.88 120.75 3613.6800000000003 123.375Q3651.48 126.0 3693.0600000000004 126.0Q3823.4700000000003 126.0 3883.9500000000003 90.3Q3944.4300000000003 54.6 3944.4300000000003 -12.600000000000001V-95.55H3940.65Q3895.29 -50.400000000000006 3816.855 -25.200000000000003Q3738.42 0.0 3647.7000000000003 0.0Q3530.52 0.0 3448.3050000000003 -22.575Q3366.09 -45.15 3312.2250000000004 -84.525Q3258.36 -123.9 3233.79 -175.35000000000002Q3209.2200000000003 -226.8 3209.2200000000003 -285.6Q3209.2200000000003 -340.2 3239.46 -389.55Q3269.7000000000003 -438.90000000000003 3326.4000000000005 -476.17500000000007Q3383.1000000000004 -513.45 3465.3150000000005 -535.5Q3547.53 -557.5500000000001 3651.48 -557.5500000000001Q3744.09 -557.5500000000001 3821.58 -536.0250000000001Q3899.07 -514.5 3940.65 -468.3H3944.4300000000003V-542.85H4159.89ZM3681.7200000000003 -94.5Q3753.54 -94.5 3803.625 -110.775Q3853.71 -127.05000000000001 3884.895 -153.825Q3916.08 -180.6 3930.255 -214.72500000000002Q3944.4300000000003 -248.85000000000002 3944.4300000000003 -283.5Q3944.4300000000003 -318.15000000000003 3929.3100000000004 -350.70000000000005Q3914.19 -383.25 3883.005 -408.45000000000005Q3851.82 -433.65000000000003 3801.735 -448.35Q3751.65 -463.05 3681.7200000000003 -463.05Q3609.9 -463.05 3560.76 -446.25Q3511.62 -429.45000000000005 3481.38 -402.67500000000007Q3451.1400000000003 -375.90000000000003 3437.9100000000003 -341.77500000000003Q3424.6800000000003 -307.65000000000003 3424.6800000000003 -274.05Q3424.6800000000003 -240.45000000000002 3439.8 -208.425Q3454.92 -176.4 3486.105 -151.2Q3517.29 -126.0 3565.485 -110.25Q3613.6800000000003 -94.5 3681.7200000000003 -94.5ZM5085.99 -28.35Q5085.99 94.5 4962.195 154.875Q4838.4 215.25 4605.93 215.25Q4532.22 215.25 4457.5650000000005 206.85000000000002Q4382.91 198.45000000000002 4321.485000000001 178.5Q4260.06 158.55 4218.48 126.0Q4176.9 93.45 4169.34 46.2H4384.8Q4394.25 71.4 4416.93 87.15Q4439.61 102.9 4470.795 111.825Q4501.9800000000005 120.75 4539.780000000001 123.375Q4577.58 126.0 4619.16 126.0Q4749.57 126.0 4810.049999999999 90.3Q4870.53 54.6 4870.53 -12.600000000000001V-95.55H4866.75Q4821.39 -50.400000000000006 4742.955 -25.200000000000003Q4664.52 0.0 4573.8 0.0Q4456.62 0.0 4374.405000000001 -22.575Q4292.1900000000005 -45.15 4238.325000000001 -84.525Q4184.46 -123.9 4159.889999999999 -175.35000000000002Q4135.32 -226.8 4135.32 -285.6Q4135.32 -340.2 4165.5599999999995 -389.55Q4195.8 -438.90000000000003 4252.5 -476.17500000000007Q4309.2 -513.45 4391.415 -535.5Q4473.63 -557.5500000000001 4577.58 -557.5500000000001Q4670.1900000000005 -557.5500000000001 4747.68 -536.0250000000001Q4825.17 -514.5 4866.75 -468.3H4870.53V-542.85H5085.99ZM4607.82 -94.5Q4679.64 -94.5 4729.725 -110.775Q4779.81 -127.05000000000001 4810.995000000001 -153.825Q4842.18 -180.6 4856.355 -214.72500000000002Q4870.53 -248.85000000000002 4870.53 -283.5Q4870.53 -318.15000000000003 4855.41 -350.70000000000005Q4840.29 -383.25 4809.105 -408.45000000000005Q4777.92 -433.65000000000003 4727.835 -448.35Q4677.75 -463.05 4607.82 -463.05Q4536.0 -463.05 4486.860000000001 -446.25Q4437.72 -429.45000000000005 4407.48 -402.67500000000007Q4377.24 -375.90000000000003 4364.01 -341.77500000000003Q4350.78 -307.65000000000003 4350.78 -274.05Q4350.78 -240.45000000000002 4365.9 -208.425Q4381.02 -176.4 4412.205 -151.2Q4443.39 -126.0 4491.585 -110.25Q4539.78 -94.5 4607.82 -94.5ZM5114.34 -749.7H5329.8V-636.3000000000001H5114.34ZM5114.34 -542.85H5329.8V0.0H5114.34ZM5817.42 14.700000000000001Q5700.24 14.700000000000001 5608.575 -6.825Q5516.91 -28.35 5453.594999999999 -66.15Q5390.28 -103.95 5357.205 -156.45000000000002Q5324.13 -208.95000000000002 5324.13 -271.95Q5324.13 -333.90000000000003 5357.205 -386.40000000000003Q5390.28 -438.90000000000003 5453.594999999999 -476.70000000000005Q5516.91 -514.5 5608.575 -536.0250000000001Q5700.24 -557.5500000000001 5817.42 -557.5500000000001Q5934.6 -557.5500000000001 6026.265 -536.0250000000001Q6117.93 -514.5 6181.245000000001 -476.70000000000005Q6244.56 -438.90000000000003 6277.635 -386.40000000000003Q6310.71 -333.90000000000003 6310.71 -271.95Q6310.71 -208.95000000000002 6277.635 -156.45000000000002Q6244.56 -103.95 6181.245000000001 -66.15Q6117.93 -28.35 6026.265 -6.825Q5934.6 14.700000000000001 5817.42 14.700000000000001ZM5817.42 -79.8Q5889.24 -79.8 5942.16 -96.6Q5995.08 -113.4 6029.1 -140.7Q6063.12 -168.0 6079.1849999999995 -202.125Q6095.25 -236.25 6095.25 -271.95Q6095.25 -306.6 6079.1849999999995 -341.25Q6063.12 -375.90000000000003 6029.1 -402.67500000000007Q5995.08 -429.45000000000005 5942.16 -446.25Q5889.24 -463.05 5817.42 -463.05Q5745.6 -463.05 5692.68 -446.25Q5639.76 -429.45000000000005 5605.74 -402.67500000000007Q5571.72 -375.90000000000003 5555.655000000001 -341.25Q5539.59 -306.6 5539.59 -271.95Q5539.59 -236.25 5555.655000000001 -202.125Q5571.72 -168.0 5605.74 -140.7Q5639.76 -113.4 5692.68 -96.6Q5745.6 -79.8 5817.42 -79.8Z" fill="currentColor" stroke="currentColor" stroke-width="30" stroke-linejoin="round"/></svg>';
const WAICON='<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg>';
// Redes sociales: cambia "#" por el enlace de cada cuenta cuando los tengas.
const REDES=[
  ['Instagram','https://www.instagram.com/arpeggio.perfums/','<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor"/>'],
  ['TikTok','https://www.tiktok.com/@arpeggio.perfums','<path fill="currentColor" d="M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6l.8.1V9.7a5.8 5.8 0 1 0 5 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.4-1.6z"/>'],
];
const PAGOS=`<span class="pago" title="Mastercard"><svg viewBox="0 0 64 40" width="54" height="34" aria-label="Mastercard"><circle cx="25" cy="17" r="13" fill="#eb001b"/><circle cx="39" cy="17" r="13" fill="#f79e1b"/><path d="M32 6a13 13 0 0 1 0 22 13 13 0 0 1 0-22z" fill="#ff5f00"/><text x="32" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="7.5" fill="#231f20">mastercard</text></svg></span>
<span class="pago" title="Visa"><svg viewBox="0 0 64 40" width="54" height="34" aria-label="Visa"><text x="32" y="27" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-style="italic" font-size="20" fill="#1a1f71">VISA</text></svg></span>`;
// Precio por tamaño en ml: [precio de lanzamiento, precio regular].
// Cuando termine el lanzamiento, pon el regular en los dos y desaparece el tachado.
const PRECIOS={30:[800,1000],10:[400,500]};
const rd=n=>'RD$'+n.toLocaleString('en-US');
const precioHTML=ml=>{const [p,r]=PRECIOS[ml];return `<span class="precio">${rd(p)}</span>${r>p?` <s class="regular">${rd(r)}</s>`:''}`};
const AVISO='Perfume inspirado. No es un producto original ni tenemos relación con la marca mencionada.';

const ficha=c=>'ficha.html?c='+encodeURIComponent(c);
// Acordes del PDF, tal cual: nombre, ancho y color. n = cuántos mostrar.
function ink(h){const n=parseInt(h.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;return (0.299*r+0.587*g+0.114*b)>165?'#333':'#fff'}
const acordes=(c,n)=>(ACORDES[c]||[]).slice(0,n).map(([l,w,col])=>`<div style="width:${w}%;background:${col};color:${ink(col)}">${esc(l)}</div>`).join('');

// Parecido entre dos perfumes según los acordes del PDF (nombres y largos de barra; el primer acorde pesa más).
const vecAcordes=k=>{const v={};(ACORDES[k]||[]).forEach(([l,w],j)=>v[l]=w*(j==0?1.5:1));return v};
function similitud(a,b){const x=vecAcordes(a),y=vecAcordes(b);let d=0,na=0,nb=0;for(const l in x){na+=x[l]**2;if(y[l])d+=x[l]*y[l]}for(const l in y)nb+=y[l]**2;return na&&nb?d/Math.sqrt(na*nb):0}
// Los n perfumes más parecidos a c (por defecto, del mismo género).
function masParecidos(c,n,mismoGenero=true){const g=BY[c][3];return PERFUMES.filter(x=>x[0]!=c&&(!mismoGenero||x[3]==g)).map(x=>[x[0],similitud(c,x[0])]).sort((a,b)=>b[1]-a[1]).slice(0,n)}

function card(c){
  const p=BY[c];if(!p)return'';
  const sec=SECCIONES.find(s=>s.id==p[6]).nombre;
  return `<article class="card"><a class="ph" href="${ficha(c)}" aria-label="Ver ficha de ${esc(p[1])}">${img(c)||'<span class="nofoto">Foto muy pronto</span>'}</a>
    <a class="nm" href="${ficha(c)}">${esc(p[1])}</a><div class="mk">${esc(p[2])} <span class="nw">· 30 ml</span></div>
    <div class="tags"><span class="tag ${p[3]=='H'?'h':'m'}">${p[3]=='H'?'Hombre':'Mujer'}</span><span class="tag f">${esc(p[4])}</span>${p[6]!='disenador'?`<span class="tag f">${sec}</span>`:''}</div>
    <button class="montar" data-code="${c}"></button></article>`;
}

function montarPiezas(activo){
  const nav=[['Mujeres',cat({g:'M'}),'M'],['Hombres',cat({g:'H'}),'H'],['Árabes',cat({s:'arabes'}),'arabes'],['Nicho',cat({s:'nicho'}),'nicho'],['Diseñador',cat({s:'disenador'}),'disenador'],['Todo el catálogo',cat(),'todo'],['Frascos','frascos.html','frascos'],['Cómo pedir','index.html#como','como']];
  document.body.insertAdjacentHTML('afterbegin',`
<header class="top">
  <div class="wrap">
    <a class="logo" href="index.html" aria-label="Arpeggio, inicio"><span><b>${WORDMARK}</b><small>Perfumería · Santo Domingo</small></span></a>
    <div class="search">
      <input id="q" type="search" placeholder="Buscar perfume o marca" autocomplete="off" aria-label="Buscar perfume o marca">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5.5 5.5"/></svg>
      <div class="results" id="results"></div>
    </div>
    <button class="icon-btn" id="openCart" aria-label="Abrir tu carrito"><svg viewBox="50 -2 250 214" width="36" height="31" aria-hidden="true">${CARRO}</svg><span class="badge" id="badge" hidden>0</span><span class="t">Carrito</span></button>
  </div>
  <nav class="nav"><div class="wrap">${nav.map(([t,h,k])=>`<a href="${h}" class="${k==activo?'on':''}">${t}</a>`).join('')}</div></nav>
</header>`);
  document.body.insertAdjacentHTML('beforeend',`
<section class="pide"><div class="wrap">
  <div class="pide-txt">
    <h2>Pide tu perfume</h2>
    <p><b>Dónde estamos</b>Santo Domingo, República Dominicana</p>
    <p><b>Pedidos</b>Por WhatsApp al 829-232-4326</p>
    <p><b>Instagram</b><a href="https://www.instagram.com/arpeggio.perfums/" target="_blank" rel="noopener">@arpeggio.perfums</a></p>
    <p><b>Cómo pedir</b>Agrega a tu carrito los perfumes que quieras y envíanos un solo mensaje.</p>
    <a class="btn" href="${waLink('Hola Arpeggio')}" target="_blank" rel="noopener">Escríbenos por WhatsApp</a>
  </div>
  <img class="dibujo" src="iconos/dibujo-estante.jpg" alt="Dibujo de frascos de perfume en un estante" width="1300" height="588" loading="lazy">
</div></section>
<section class="perks"><div class="wrap">
  <div class="perk"><svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg><div><b>Pedidos por WhatsApp</b><span>829-232-4326</span></div></div>
  <div class="perk"><svg class="cart" viewBox="50 -2 250 214" width="44" height="38" aria-hidden="true">${CARRO}</svg><div><b>Un solo mensaje</b><span>Todo tu carrito de una vez</span></div></div>
  <div class="perk"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="6" y="8" width="12" height="13" rx="2"/><path d="M9 8V5h6v3M10 3h4"/><path d="M9 14h6"/></svg><div><b>Ficha completa</b><span>Notas, acordes y opiniones</span></div></div>
  <div class="perk"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg><div><b>Santo Domingo</b><span>República Dominicana</span></div></div>
</div></section>
<footer><div class="wrap">
  <div class="fcols">
    <div><a class="logo" href="index.html" style="margin-bottom:18px" aria-label="Arpeggio, inicio"><span><b>${WORDMARK}</b><small>Perfumería</small></span></a>
      <p>Santo Domingo, República Dominicana</p>
      <a class="wa-btn" href="${waLink('Hola Arpeggio')}" target="_blank" rel="noopener">${WAICON} 829-232-4326</a></div>
    <div><h4>Catálogo</h4><a href="${cat({g:'M'})}">Mujeres</a><a href="${cat({g:'H'})}">Hombres</a><a href="${cat({s:'arabes'})}">Árabes</a><a href="${cat({s:'nicho'})}">Nicho</a><a href="${cat({s:'disenador'})}">Diseñador</a><a href="frascos.html">Frascos</a></div>
    <div><h4>Ayuda</h4><a href="index.html#como">Cómo pedir</a><a href="#" data-open-cart>Mi carrito</a><a href="${waLink('Hola Arpeggio, busco un perfume que no vi en el catálogo: ')}" target="_blank" rel="noopener">¿No lo ves? Pídelo</a></div>
    <div><h4>Aviso</h4><p>${AVISO}</p><button class="instalar btn ghost" hidden>Guardar en mi celular</button></div>
  </div>
  <div class="fbar">
    <div><h4>Aceptamos</h4><div class="pagos">${PAGOS}</div></div>
    <div><h4>Síguenos</h4><div class="redes">${REDES.map(([n,h,ic])=>`<a href="${h}" aria-label="${n}" title="${n}"${h!='#'?' target="_blank" rel="noopener"':''}><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${ic}</svg></a>`).join('')}<a href="${waLink('Hola Arpeggio')}" aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener">${WAICON.replace('width="18" height="18"','width="22" height="22"')}</a></div></div>
  </div>
  <div class="legal">© 2026 Arpeggio · By Anggelo Berdejo</div>
</div></footer>
<button class="fab" id="fab" data-open-cart aria-label="Abrir tu carrito"><svg viewBox="50 -2 250 214" width="36" height="31" aria-hidden="true">${CARRO}</svg><span class="fbadge" id="fbadge" hidden>0</span></button>
<div class="veil" id="veil"></div>
<aside class="drawer" id="drawer" aria-label="Tu carrito">
  <div class="dh"><h3>Tu carrito <small id="dcount"></small></h3><button class="x" id="closeCart" aria-label="Cerrar">✕</button></div>
  <p class="dnote">La fragancia que quieras, agrégala a tu carrito.</p>
  <div class="dlist" id="dlist"></div><div class="dfoot" id="dfoot"></div>
</aside>
<div class="toast" id="toast"></div>`);


  // Búsqueda
  const norm=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
  $('#q').addEventListener('input',e=>{
    const q=norm(e.target.value.trim()),box=$('#results');
    if(q.length<2){box.classList.remove('on');return}
    const hits=PERFUMES.filter(p=>norm(p[1]+' '+p[2]).includes(q)).slice(0,30);
    box.innerHTML=hits.length?hits.map(p=>`<div class="res"><a class="ir" href="${ficha(p[0])}" aria-label="Ver ficha de ${esc(p[1])}"><div class="th">${img(p[0])}</div><div><b>${esc(p[1])}</b><span>${esc(p[2])} · ${p[3]=='H'?'Hombre':'Mujer'}</span></div></a><button class="montar" data-code="${p[0]}" style="padding:7px 10px;font-size:10px"></button></div>`).join('')
      :`<div class="empty">No lo encontramos. <a href="${waLink('Hola Arpeggio, ¿tienen '+e.target.value.trim()+'?')}" target="_blank" rel="noopener">Pídelo por WhatsApp</a></div>`;
    box.classList.add('on');pintarConcho();
  });
  // Enter abre la ficha del primer resultado
  $('#q').addEventListener('keydown',e=>{
    if(e.key!='Enter')return;
    const a=$('#results .ir');if(a){e.preventDefault();location.href=a.getAttribute('href')}
  });

  // Carrito
  document.addEventListener('click',e=>{
    if(!e.target.closest('.search'))$('#results').classList.remove('on');
    const f=e.target.closest('a[href^="ficha.html"]');
    if(f){const lista=[...new Set($$('.card .montar').map(b=>b.dataset.code))];try{sessionStorage.setItem('ac_lista',JSON.stringify(lista));if(!location.pathname.endsWith('ficha.html'))sessionStorage.setItem('ac_volver',location.pathname.split('/').pop()+location.search)}catch(_){}}
    const m=e.target.closest('.montar');if(m){toggle(m.dataset.code);return}
    const fr=e.target.closest('.elegir');if(fr){elegirFrasco(+fr.dataset.frasco,+fr.dataset.ml);return}
    if(e.target.closest('[data-rm-frasco]')){elegirFrasco(null);return}
    const t=e.target.closest('[data-tam]');if(t){cambiarTam(t.dataset.tam,+t.dataset.ml);return}
    const q=e.target.closest('[data-mas],[data-menos]');if(q){q.dataset.mas?cambiarCant(q.dataset.mas,1):cambiarCant(q.dataset.menos,-1);return}
    const r=e.target.closest('[data-rm]');if(r){toggle(r.dataset.rm);return}
    if(e.target.closest('#clear')){cart=[];cant={};tam={};frasco=null;guardar();pintarConcho();return}
    if(e.target.closest('[data-open-cart]')||e.target.closest('#openCart')){e.preventDefault();abrir(true)}
  });
  $('#closeCart').onclick=$('#veil').onclick=()=>abrir(false);
  addEventListener('keydown',e=>{if(e.key=='Escape')abrir(false)});
  // El carrito flotante aparece al bajar la pantalla
  const verFab=()=>$('#fab').classList.toggle('on',scrollY>300);
  addEventListener('scroll',verFab,{passive:true});verFab();
  pintarConcho();
}

let cart=[];try{cart=JSON.parse(localStorage.getItem('ac_concho')||'[]').filter(c=>BY[c])}catch(e){}
// Frasco elegido para el pedido: {n, ml} (uno por pedido).
// Cuántas unidades de cada perfume: {código: n} (si no está, es 1).
let cant={};try{cant=JSON.parse(localStorage.getItem('ac_cant')||'{}')}catch(e){}
const uds=c=>cant[c]||1;
// Tamaño de cada perfume: {código: 10} (si no está, es 30 ml).
let tam={};try{tam=JSON.parse(localStorage.getItem('ac_tam')||'{}')}catch(e){}
const mlDe=c=>tam[c]||30;
const subtotal=c=>PRECIOS[mlDe(c)][0]*uds(c);
function cambiarTam(c,ml){ml==30?delete tam[c]:tam[c]=ml;guardar();pintarConcho()}
let frasco=null;try{frasco=JSON.parse(localStorage.getItem('ac_frasco')||'null')}catch(e){}
const guardar=()=>{try{localStorage.setItem('ac_concho',JSON.stringify(cart));localStorage.setItem('ac_cant',JSON.stringify(cant));localStorage.setItem('ac_tam',JSON.stringify(tam));frasco?localStorage.setItem('ac_frasco',JSON.stringify(frasco)):localStorage.removeItem('ac_frasco')}catch(e){}};
const nomFrasco=f=>`Frasco N.º ${f.n} · ${f.ml} ml`;
function elegirFrasco(n,ml){
  if(n==null||(frasco&&frasco.n==n)){frasco=null;toast('Quitaste el frasco')}
  else{frasco={n,ml};toast(`${nomFrasco(frasco)} es tu frasco`)}
  guardar();pintarConcho();
}
const abrir=on=>{$('#drawer').classList.toggle('on',on);$('#veil').classList.toggle('on',on)};
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('on');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('on'),1800)}
function toggle(c){
  if(cart.includes(c)){cart=cart.filter(x=>x!=c);delete cant[c];toast('Lo quitaste del carrito')}
  else{cart.push(c);toast(`${BY[c][1]} se agregó a tu carrito`)}
  guardar();pintarConcho();
}
function cambiarCant(c,d){
  const n=uds(c)+d;
  if(n<1){toggle(c);return}
  n==1?delete cant[c]:cant[c]=n;
  toast(`${BY[c][1]}: ${n} en tu carrito`);
  guardar();pintarConcho();
}
function pintarConcho(){
  const unidades=cart.reduce((t,c)=>t+uds(c),0);
  [$('#badge'),$('#fbadge')].forEach(b=>{b.hidden=!cart.length;b.textContent=unidades});
  const llevas=`${unidades} perfume${unidades==1?'':'s'}`;
  $('#dcount').textContent=cart.length?llevas:'';
  $$('.montar').forEach(m=>{const on=cart.includes(m.dataset.code);m.classList.toggle('on',on);m.textContent=on?(m.dataset.on||'✓ En tu carrito')+(uds(m.dataset.code)>1?` ×${uds(m.dataset.code)}`:''):(m.dataset.off||'Agregar')});
  $$('[data-precio]').forEach(el=>el.innerHTML=precioHTML(mlDe(el.dataset.precio)));
  $$('.elegir').forEach(b=>{const on=!!frasco&&frasco.n==b.dataset.frasco;b.classList.toggle('on',on);b.textContent=on?'✓ Tu frasco':'Elegir este frasco'});
  $('#dlist').innerHTML=(cart.length?cart.map(c=>{const p=BY[c];return `<div class="ci"><div class="th">${img(c)}</div><div><b>${esc(p[1])}</b><span>${esc(p[2])}</span><div class="linea"><div class="qty"><button data-menos="${c}" aria-label="Uno menos de ${esc(p[1])}">−</button><output>${uds(c)}</output><button data-mas="${c}" aria-label="Otro de ${esc(p[1])}">+</button></div><div class="tamano mini">${[30,10].map(ml=>`<button data-tam="${c}" data-ml="${ml}">${ml} ml</button>`).join('')}</div><em class="lp">${rd(subtotal(c))}</em></div></div><button class="rm" data-rm="${c}">Quitar</button></div>`}).join('')
    :'<p class="dnote">Tu carrito está vacío. Toca <b>Agregar</b> en los perfumes que te gusten.</p>')
    +(frasco?`<div class="ci"><div class="th"><img src="img/frascos/${frasco.n}.webp" alt="${nomFrasco(frasco)}"></div><div><b>${nomFrasco(frasco)}</b><span>Tu frasco · <a href="frascos.html">Cambiar</a></span></div><button class="rm" data-rm-frasco>Quitar</button></div>`
      :cart.length?'<p class="dnote">¿Quieres escoger el frasco? <a href="frascos.html">Mira los frascos</a></p>':'');
  $$('.tamano button').forEach(b=>{const on=mlDe(b.dataset.tam)==b.dataset.ml;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
  const total=cart.reduce((t,c)=>t+subtotal(c),0);
  const msg=`Hola, quiero pedir estos perfumes de Arpeggio:\n${cart.map((c,k)=>`${k+1}. ${c} – ${BY[c][1]} (${BY[c][2]}) · ${mlDe(c)} ml${uds(c)>1?` ×${uds(c)}`:''} – ${rd(subtotal(c))}`).join('\n')}${frasco?`\nEn el frasco: N.º ${frasco.n} (${frasco.ml} ml)`:''}\nTotal: ${rd(total)}\n¿Están disponibles?`;
  $('#dfoot').innerHTML=cart.length?`<div class="total"><span>Total · ${llevas}</span><b>${rd(total)}</b></div><p class="imp">Incluye impuestos</p><a class="wa-btn" href="${waLink(msg)}" target="_blank" rel="noopener">${WAICON} Enviar por WhatsApp</a><button class="rm" id="clear" style="text-align:center">Vaciar carrito</button>`:'';
}

// Guardar la página en el celular y abrirla sin internet.
if('serviceWorker' in navigator&&location.protocol!='file:')addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
// Cuando llega una versión nueva de la página, recargar una vez para mostrarla (no en la primera visita).
if('serviceWorker' in navigator&&navigator.serviceWorker.controller){let recargada=false;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!recargada){recargada=true;location.reload()}})}
let pedirInstalar=null;
addEventListener('beforeinstallprompt',e=>{e.preventDefault();pedirInstalar=e;$$('.instalar').forEach(b=>b.hidden=false)});
document.addEventListener('click',async e=>{
  if(!e.target.closest('.instalar'))return;
  if(pedirInstalar){pedirInstalar.prompt();await pedirInstalar.userChoice;pedirInstalar=null;$$('.instalar').forEach(b=>b.hidden=true)}
});
