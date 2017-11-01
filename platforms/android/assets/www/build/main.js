webpackJsonp([10],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.iab = iab;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.downloadLogo = function () {
        var browser = this.iab.create('http://www.upnjatim.ac.id/images/upnjatim/ionic/logo.png');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content parallax-header>\n \n  <div style="background-image: url(\'assets/upn.jpg\');" class="header-image"></div>\n \n  <div class="main-content">\n \n<h2>Sejarah Singkat</h2>\n \n<ol start="1">\n<li style="text-align: justify; line-height: normal;"><span style="font-size: 10pt; font-family: \'Tahoma\',\'sans-serif\';">Periode 1959 - 1965 bernama Akademi Administrasi Perusahaan Veteran Cabang Surabaya.</span></li>\n<li style="text-align: justify; line-height: normal;"><span style="font-size: 10pt; font-family: \'Tahoma\',\'sans-serif\';">Pada tahun 1968 berubah nama menjadi Perguruan Tinggi Pembangunan Nasional (PTPN) Veteran Cabang Jawa Timur.</span></li>\n<li style="text-align: justify; line-height: normal;"><span style="font-size: 10pt; font-family: \'Tahoma\',\'sans-serif\';">Periode 1976 - 1994 terjadi peralihan status PTPN Veteran Cabang Jawa Timur sebagai Perguruan Tinggi Kedinasan di bawah pembinaan Departemen Pertahanan Keamanan RI.</span></li>\n<li style="text-align: justify; line-height: normal;"><span style="font-size: 10pt; font-family: \'Tahoma\',\'sans-serif\';">Pada tahun 1977 berubah nama menjadi Universitas Pembangunan Nasional Veteran Cabang Jawa Timur.</span></li>\n<li style="text-align: justify; line-height: normal;"><span style="font-size: 10pt; font-family: \'Tahoma\',\'sans-serif\';">Pada tahun 1995 berubah menjadi Perguruan Tinggi Swasta dengan nama UPN Veteran Jawa Timur yang secara operasional di bawah pembinaan Yayasan Kejuangan Panglima Besar Sudirman dan secara fungsional di bawah pembinaan Departemen Pertahanan dan Keamanan RI.</span></li>\n<li style="text-align: justify; line-height: normal;"><span style="font-size: 10pt; font-family: \'Tahoma\',\'sans-serif\';">Pada tahun 2007 UPN Veteran secara operasional di bawah pembinaan Yayasan Kesejahteraan Pendidikan dan Perumahan yang secara fungsional di bawah pembinaan <span style="color: windowtext;">Kementrian Pertahanan R</span><span style="color: windowtext;">I</span>.</span></li>\n<li style="text-align: justify; line-height: normal;"><span style="font-size: 10pt; font-family: \'Tahoma\',\'sans-serif\';">Sesuai dengan perkembangan dan kemajuan yang telah diraih, maka UPN Veteran Jawa Timur diproyeksikan oleh Kementrian Pertahanan untuk menjadi Perguruang Tinggi Negeri (PTN).</span></li>\n<li style="text-align: justify; line-height: normal;"><span style="font-family: georgia,palatino; font-size: 10pt; line-height: 16.2px;"><span style="font-family: tahoma,arial,helvetica,sans-serif;">Senin 6 Oktober 2014, Presiden RI Susilo Bambang Yudhoyono, menandatangani prasasti yang menandai pengesahan UPN “Veteran” Jawa Timur menjadi PTN.</span> <br></span><span style="font-size: 10pt; font-family: \'Tahoma\',\'sans-serif\';"></span></li>\n</ol>\n \n<h2>Visi</h2>\n<p style="margin-bottom: 0.0001pt; text-align: justify; line-height: normal;"><span style="font-size: 10pt; font-family: tahoma,arial,helvetica,sans-serif;"><strong><span style="line-height: 107%;">“MENJADI UNIVERSITAS UNGGUL BERKARAKTER BELA NEGARA</span></strong>"</span></p>\n<p style="margin-bottom: 0.0001pt; text-align: justify; line-height: normal;">&nbsp;</p>\n\n<h2>Misi</h2>\n<ol>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Menyelenggarakan dan mengembangkan pendidikan berkarakter bela negara;</span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Meningkatkan budaya riset dalam pengembangan bidang IPTEK yang berdayaguna untuk kesejahteraan masyarakat;</span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Menyelenggarakan pengabdian kepada masyarakat&nbsp; berbasis riset dan kearifan lokal;</span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Menyelenggarakan tata kelola yang baik dan bersih dalam rangka mencapai akuntabilitas pengelolaan anggaran;</span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Mengembangkankualitas sumber daya manusia unggul dalam sikap dan tata nilai, unjuk kerja, penguasaan pengetahuan, dan manajerial;</span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Meningkatkan sistem pengelolaan sarana dan prasarana terpadu;</span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;"><span style="line-height: 107%;">Meningkatkan kerjasama institusional dengan <em>stakeholder</em>s baik dalam dan luar negeri.</span></span></li>\n</ol>\n\n<h2>Tujuan</h2>\n<ol>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Terimplementasinya kurikulum dan layanan pendidikan yang relevan dengan Kerangka Kualifikasi Nasional Indonesia (KKNI) berbasis bela negara;</span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Tercapainya mutu dan inovasi riset yang berdayaguna untuk peningkatan kesejahteraan masyarakat;</span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Terwujudnya kegiatan pengabdian kepada masyarakat yang berbasis riset dan kearifan lokal; </span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Terwujudnya penyelenggaraan tata kelola yang baik dan bersih untuk mencapai akuntabilitas pengelolaan anggaran;</span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Terwujudnya sumber daya manusia unggul yang kompeten dan berdaya saing tinggi; </span></li>\n<li><span style="font-family: tahoma,arial,helvetica,sans-serif; font-size: 10pt;">Terwujudnya sarana prasarana yang memadai dengan pengelolaan yang efektif dan efisien;</span></li>\n<li><span style="font-size: 10pt; line-height: 107%; font-family: tahoma,arial,helvetica,sans-serif;">Terwujudnya kerjasama institusional dengan <em>stakeholder</em> baik dalam dan luar negeri yang intensif dan menguntungkan kedua belah pihak.</span></li>\n</ol>\n\n<h2>Logo</h2>\n<img src="http://www.upnjatim.ac.id/images/upnjatim/ionic/logo.png">\n<a href="http://www.upnjatim.ac.id/images/upnjatim/ionic/logo.png"><button ion-button full color="upn">Download</button></a>\n  </div>\n \n \n</ion-content>\n\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BelanegaraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BelanegaraPage = (function () {
    function BelanegaraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BelanegaraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BelanegaraPage');
    };
    return BelanegaraPage;
}());
BelanegaraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-belanegara',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/belanegara/belanegara.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Belanegara</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content parallax-header>\n \n  <div style="background-image: url(\'assets/belanegara.jpg\');" class="header-image"></div>\n \n  <div class="main-content">\n \n<h2>UPN “VETERAN” JAWA TIMUR SEBAGAI KAMPUS BELA NEGARA</h2>\n \n<p style="text-align: justify;"><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Bela Negara adalah sikap dan perilaku warga negara yang dijiwai oleh kecintaan kepada Negara Kesatuan republik Indonesia (NKRI) yang berdasarkan Pancasila dan UUD 1945 dalam menjamin kelangsungan hidup bangsa dan negara. Sebagai Kampus Bela Negara diharapkan akan mampu menghasilkan lulusan sarjana Pionir Pembanguan yang selalu siap mempertahankan NKRI, Pancasila dan UUD 1945 dimanapun dan kapanpun berkerja.</span></p>\n<p><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Nilai-Nilai Bela Negara</span></p>\n<ol>\n<li><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Cinta Tanah Air Republik Indonesia, mengenal dan mencintai wilayah nasional, selalu waspada, siap membela NKRI terhadap segala bentuk ancaman.</span></li>\n<li><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Kesadaran berbangsa dan bernegara Indonesia, selalu membina kerukunan, persatuan dan kesatuan, selalu mengutamakan kepentingan bangsa di atas kepentingan pribadi atau golongan, memahami lambang negara, lagu kebangsaan dan mentaati seluruh perundang-undangan yang berlaku.</span></li>\n<li><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Meyakini kebenaran Pancasila sebagai falsafah dan ideologi negara.</span></li>\n<li><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Rela berkorban bagi bangsa dan negara</span></li>\n<li><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Memiliki kemampuan awal Bela Negara</span></li>\n</ol>\n<p style="text-align: justify;"><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Sebagai Perguruan Tinggi di bawah pembinaan Kementrian Pertahanan UPN Veteran Jawa Timur fungsi strategis dalam menghasilkan lulusan yang memiliki jiwa kejuangan dalam mempertahankan Negara Kesatuan Republik Indonesia (NKRI). Pasal 27 ayart 3 UUD 1945 menyebutkan “setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara”.</span></p>\n<p style="text-align: justify;"><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Kampus Bela Negara adalah salah satu wujud implementasi dari Pasal 27 ayat 3 UUD 1945 tersebut dalam bentuk sistem pertahanan negara untuk menghadapi ancanam non militer. Salah satu bentuk aktual secara umum adalah Pendidikan Bela Negara berupa kegiatan intrakurikuler Mata Kuliah Pembentukan Kepribadian yaitu Pancasila, Pendidikan Kewarganegraan, Bahasa Indonesia dan Widya Mwat Yasa serta kegiatan ektrakurikuler Unit Kegiatan Mahasiswa seperti Resiman Mahasiswa, Mahasiswa Pecinta Alam, Pramuka, Bela Diri Tradisional, Seni Tari Tradisional dan Olah Raga.</span></p>\n<p style="text-align: justify;"><span style="font-size: 10pt; line-height: 115%; font-family: \'Tahoma\',\'sans-serif\'; background: none repeat scroll 0% 0% white;">Secara khusus di UPN Veteran Jawa Timur sedang dirintis Program Studi Bela Negara sebagai suatu wujud nyata menjadi bagian dari Universitas Pertahanan dengan status Perguruan Tinggi Milik Pemerintah di bawah pembinaan Kemetrian Pertahanan.</span></p>\n  </div>\n \n \n</ion-content>\n\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/belanegara/belanegara.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], BelanegaraPage);

//# sourceMappingURL=belanegara.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Kontak</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content parallax-header>\n \n  <div class="header-image"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15828.735429245162!2d112.7899878!3d-7.3332379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb26589947991eea1!2sNational+Development+University+%22Veteran%22+East+Java!5e0!3m2!1sen!2s!4v1508125346506" width="100%" height="200px" frameborder="0" style="border:0" allowfullscreen></iframe></div>\n \n  <div class="main-content">\n \n<h2>Informasi</h2>\n<p>Jl.Raya Rungkut Madya, Gunung Anyar, Surabaya</p>\n<p>Telp : +62 (031) 870 6369</p>\n<p>Fax. : +62 (031) 870 6372</p>\n<p>humas@upnjatim.ac.id</p>\n</div>\n\n<ion-fab top right edge>\n    <button ion-fab mini color="upn"><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n      <a href="tel:+62318706369"><button ion-fab color="upn"><ion-icon name="call"></ion-icon></button></a>\n      <a href="mailto:humas@upnjatim.ac.id"><button ion-fab color="upn"><ion-icon name="mail"></ion-icon></button></a>\n\n    </ion-fab-list>\n  </ion-fab>\n \n</ion-content>\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/contact/contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FakultasprodiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FakultasprodiPage = (function () {
    function FakultasprodiPage(navCtrl, navParams, http, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.iab = iab;
        var localData = http.get('assets/fakultasprodi.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    FakultasprodiPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    FakultasprodiPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    FakultasprodiPage.prototype.visitLink = function (url) {
        var browser = this.iab.create("http:/" && url, "_system", "location=true");
        browser.close();
    };
    return FakultasprodiPage;
}());
FakultasprodiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-fakultasprodi',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/fakultasprodi/fakultasprodi.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Fakultas & Prodi</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content parallax-header>\n \n  <div style="background-image: url(\'assets/upn.jpg\');" class="header-image"></div>\n \n  <div class="main-content">\n \n<h2></h2>\n \n<ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="ios-arrow-dropright" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-dropdown-circle" *ngIf="item.open"></ion-icon>\n          {{ item.name }} \n      </button>\n      \n <p><ion-icon item-left name="" ></ion-icon><button ion-button outline item-end (click)="visitLink(item.web)">{{ item.web }}</button></p>\n \n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <!-- Second Level -->\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <!-- Toggle Button -->\n          <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>\n \n          <!-- Direct Add Button as Fallback -->\n          <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase>{{ child.information }}</p>\n            <p><button ion-button outline item-end (click)="visitLink(child.web)">{{ child.web }}</button></p>\n          </ion-item>\n \n          <ion-list *ngIf="child.children && child.open">\n            <!-- Third Level -->\n            <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n              <h2>{{ item.name }}</h2>\n              <p text-lowercase>{{ item.information }}</p>\n              <!-- Direct Add Button -->\n             <p><button ion-button outline item-end (click)="visitLink(item.web)">{{ item.web }}</button></p>\n              \n            </ion-item>\n          </ion-list>\n \n        </ion-list-header>\n      </ion-list>\n      \n    </ion-list-header>\n  </ion-list>\n  \n  </div>\n \n \n</ion-content>\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/fakultasprodi/fakultasprodi.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], FakultasprodiPage);

//# sourceMappingURL=fakultasprodi.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HymnemarsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HymnemarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HymnemarsPage = (function () {
    function HymnemarsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HymnemarsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HymnemarsPage');
    };
    return HymnemarsPage;
}());
HymnemarsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-hymnemars',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/hymnemars/hymnemars.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hymne & Mars</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<font style="text-align: center;">\n<h2>HYMNE UPN "VETERAN"</h2>Syair : Ir. Soetomo, SA<br>Lagu : Drs. Joko Sarwoko, MM<br>&nbsp;<br>Dibawah Dwi Warna panji<br>kami Warga Upn "Veteran"<br>Berkiprah untuk negeri<br>Setia pada Pertiwi<br>&nbsp;<br>Penerus perjuangan bangsa<br>Dahulukan dharma dari pada pinta<br>Dengan tekat Widya Mwat Yasa<br>Menuju bangsa nan sejahtera<br>&nbsp;<br>Reff :<br>jati diri nilai kejuangan<br>Disinari wawasan kebangsaan<br>Rela berkorban atas Ridho Tuhan<br>Demi cintaku negeriku<br>&nbsp;<br>Kami t\'lah berjanji<br>Berkati tanpa henti<br>Berkarya sepanjang masa<br>Bagi Indonesia Jaya<br><br>&nbsp;<br><br>&nbsp;<br><h2>MARS UPN "VETERAN"</h2><br>Lagu / Syair : Kusbini Dianto S.<br>Arr. : Ign. Budiyono<br>&nbsp;<br>Mahasiswa UPN VETERAN<br>Bersatu padu bernaung dibawah panji,<br>Menjunjung tinggi sumpah mulia patuh setia pada negara,<br>Semangat tetap menyala berjuang gigih demi cita<br>Menunaikan bakti Negara<br>Bagi Nusa dan Bangsa\n<br><br>&nbsp;<br><br>&nbsp;<br>\n<h2>MARS BELANEGARA</h2></font>\n<iframe class="video-size" width="560" height="315" src="https://www.youtube.com/embed/ZjMICkq8sxg" frameborder="0" allowfullscreen></iframe>\n\n</ion-content>\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/hymnemars/hymnemars.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HymnemarsPage);

//# sourceMappingURL=hymnemars.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KalenderakademikPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KalenderakademikPage = (function () {
    function KalenderakademikPage(iab, navCtrl, navParams) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KalenderakademikPage.prototype.downloadKalender = function () {
        var browser = this.iab.create('http://www.upnjatim.ac.id/images/upnjatim/documents/KALENDER_AKADEMIK.pdf');
    };
    return KalenderakademikPage;
}());
KalenderakademikPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-kalenderakademik',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/kalenderakademik/kalenderakademik.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Kalender Akademik</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n \n \n  <div class="main-content">\n \n<h2></h2>\n \n<img class="kalender-size" src="http://www.upnjatim.ac.id/images/upnjatim/documents/KalenderAkademik1.jpeg"><img class="kalender-size" src="http://www.upnjatim.ac.id/images/upnjatim/documents/KalenderAkademik2.jpeg"><a href="http://www.upnjatim.ac.id/images/upnjatim/documents/KALENDER_AKADEMIK.pdf"><button ion-button full color="upn"  >Download</button></a>\n  </div>\n \n \n</ion-content>\n\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/kalenderakademik/kalenderakademik.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], KalenderakademikPage);

//# sourceMappingURL=kalenderakademik.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SarprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SarprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SarprasPage = (function () {
    function SarprasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SarprasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SarprasPage');
    };
    return SarprasPage;
}());
SarprasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sarpras',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/sarpras/sarpras.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sarana & Prasarana</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n\n <ion-card>\n    <img src="http://www.upnjatim.ac.id/images/upnjatim/informasi/asrama.jpg"/>\n    <div class="card-title">Asrama Putri Belanegara</div>\n    <div class="card-subtitle">_______</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="http://www.upnjatim.ac.id/images/upnjatim/informasi/tekno-park.jpg"/>\n    <div class="card-title">Gedung Techno Park</div><p></p>\n    <div class="card-subtitle">________</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="http://www.upnjatim.ac.id/images/upnjatim/informasi/giri-loka.jpg"/>\n    <div class="card-title">Gedung Giri Loka</div>\n    <div class="card-subtitle">_______</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="http://www.upnjatim.ac.id/images/upnjatim/informasi/lapangan.jpg"/>\n    <div class="card-title">Lapangan Bola</div>\n    <div class="card-subtitle">_______</div>\n  </ion-card>\n  \n  <ion-card>\n    <img src="http://www.upnjatim.ac.id/images/upnjatim/informasi/bni.jpg"/>\n    <div class="card-title">ATM Galerry</div>\n    <div class="card-subtitle">_______</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="http://www.upnjatim.ac.id/images/upnjatim/informasi/Masjid.jpg"/>\n    <div class="card-title">Masjid Istiqomah</div>\n    <div class="card-subtitle">________</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="http://www.upnjatim.ac.id/images/upnjatim/informasi/kolam-renang.jpg"/>\n    <div class="card-title">Kolam Renang</div>\n    <div class="card-subtitle">_______</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="http://www.upnjatim.ac.id/images/upnjatim/informasi/lapangan-tennis.jpg"/>\n    <div class="card-title">Lapangan Tenis</div>\n    <div class="card-subtitle">_______</div>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/sarpras/sarpras.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SarprasPage);

//# sourceMappingURL=sarpras.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsAboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__belanegara_belanegara__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hymnemars_hymnemars__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsAboutPage = (function () {
    function TabsAboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__belanegara_belanegara__["a" /* BelanegaraPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__hymnemars_hymnemars__["a" /* HymnemarsPage */];
    }
    TabsAboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsAboutPage');
    };
    return TabsAboutPage;
}());
TabsAboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabsabout',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/tabsabout/tabsabout.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Profil" tabIcon="ios-school"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Kampus Belanegara" tabIcon="ios-flag"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Hymne & Mars" tabIcon="ios-musical-notes"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/tabsabout/tabsabout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TabsAboutPage);

//# sourceMappingURL=tabsabout.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsAkademikPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fakultasprodi_fakultasprodi__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kalenderakademik_kalenderakademik__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uptbiro_uptbiro__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;


var TabsAkademikPage = (function () {
    function TabsAkademikPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__fakultasprodi_fakultasprodi__["a" /* FakultasprodiPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__kalenderakademik_kalenderakademik__["a" /* KalenderakademikPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_4__uptbiro_uptbiro__["a" /* UptbiroPage */];
    }
    TabsAkademikPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsAkademikPage');
    };
    return TabsAkademikPage;
}());
TabsAkademikPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabsakademik',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/tabsakademik/tabsakademik.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab4Root" tabTitle="Fakultas & Prodi" tabIcon="ios-albums"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Kalender Akademik" tabIcon="ios-calendar"></ion-tab>\n  <ion-tab [root]="tab6Root" tabTitle="UPT & Biro" tabIcon="ios-keypad"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/tabsakademik/tabsakademik.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TabsAkademikPage);

//# sourceMappingURL=tabsakademik.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UptbiroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UptbiroPage = (function () {
    function UptbiroPage(navCtrl, navParams, http, iab) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.iab = iab;
        var localData = http.get('assets/uptbiro.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    UptbiroPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    UptbiroPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    UptbiroPage.prototype.visitLink = function (url) {
        var browser = this.iab.create("http:/" && url, "_system", "location=true");
        browser.close();
    };
    return UptbiroPage;
}());
UptbiroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-uptbiro',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/uptbiro/uptbiro.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>UPT & BIRO</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content parallax-header>\n \n <div style="background-image: url(\'assets/upn.jpg\');" class="header-image"></div>\n \n  <div class="main-content">\n \n<ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-dropright" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-dropdown-circle" *ngIf="item.open"></ion-icon>\n          {{ item.name }} \n      </button>\n  \n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <!-- Second Level -->\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <!-- Toggle Button -->\n          <button ion-item (click)="toggleItem(i, j)" *ngIf="child.children" class="child" detail-none>\n            <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n            <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n            {{ child.name }}\n          </button>\n \n          <!-- Direct Add Button as Fallback -->\n          <ion-item *ngIf="!child.children" ion-item detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase>{{ child.information }}</p>\n            <p><button ion-button outline item-end (click)="visitLink(child.web)">{{ child.web }}</button></p>\n          </ion-item>\n \n          <ion-list *ngIf="child.children && child.open">\n            <!-- Third Level -->\n            <ion-item *ngFor="let item of child.children; let k = index" detail-none class="child-item" text-wrap>\n              <h2>{{ item.name }}</h2>\n              <p text-lowercase>{{ item.information }}</p>\n              <!-- Direct Add Button -->\n             <p><button ion-button outline item-end (click)="visitLink(item.web)">{{ item.web }}</button></p>\n              \n            </ion-item>\n          </ion-list>\n \n        </ion-list-header>\n      </ion-list>\n      \n    </ion-list-header>\n  </ion-list>\n  \n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/uptbiro/uptbiro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], UptbiroPage);

//# sourceMappingURL=uptbiro.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		278,
		9
	],
	"../pages/belanegara/belanegara.module": [
		279,
		8
	],
	"../pages/contact/contact.module": [
		280,
		7
	],
	"../pages/fakultasprodi/fakultasprodi.module": [
		281,
		6
	],
	"../pages/hymnemars/hymnemars.module": [
		282,
		5
	],
	"../pages/kalenderakademik/kalenderakademik.module": [
		283,
		4
	],
	"../pages/sarpras/sarpras.module": [
		284,
		3
	],
	"../pages/tabsabout/tabsabout.module": [
		285,
		2
	],
	"../pages/tabsakademik/tabsakademik.module": [
		286,
		1
	],
	"../pages/uptbiro/uptbiro.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(loading, navCtrl, platform, iab, http, sharingVar) {
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.iab = iab;
        this.http = http;
        this.sharingVar = sharingVar;
        this.items = [];
        this.aseks = [];
        this.slideData = [{ image: "http://www.upnjatim.ac.id/images/upnjatim/ionic/slider/1.jpg" }, { image: "http://www.upnjatim.ac.id/images/upnjatim/ionic/slider/2.jpg" }, { image: "http://www.upnjatim.ac.id/images/upnjatim/ionic/slider/3.jpg" }, { image: "http://www.upnjatim.ac.id/images/upnjatim/ionic/slider/4.jpg" }];
        this.slideLength = false;
        this.platform = platform;
        if (this.slideData.length > 0) {
            this.slideLength = true;
        }
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.load();
    };
    HomePage.prototype.load2 = function () {
        var _this = this;
        this.http.get('http://upttik.upnjatim.ac.id/asset/ionic/slider.php')
            .map(function (res) { return res.json(); })
            .subscribe(function (data2) {
            _this.aseks = data2;
        });
    };
    HomePage.prototype.load = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Mengambil Data...',
        });
        loader.present().then(function () {
            _this.slideData;
            _this.http.get('http://upttik.upnjatim.ac.id/asset/ionic/retrieve-data.php')
                .map(function (res) { return res.json(); })
                .subscribe(function (data1) {
                _this.items = data1;
                loader.dismiss();
            });
        });
    };
    HomePage.prototype.openSiamik = function () {
        var browser = this.iab.create('https://siamik.upnjatim.ac.id/');
    };
    HomePage.prototype.openSimaba = function () {
        var browser = this.iab.create('http://simaba.upnjatim.ac.id/');
    };
    HomePage.prototype.openElearning = function () {
        var browser = this.iab.create('http://elearning.upnjatim.ac.id/');
    };
    HomePage.prototype.openEjournal = function () {
        var browser = this.iab.create('http://ejournal.upnjatim.ac.id/');
    };
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            _this.load();
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < 2; i++) {
                _this.load();
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
        }, 500);
    };
    HomePage.prototype.otherShare = function (v) {
        this.sharingVar.share("UPN Veteran Jawa Timur", null /*Subject*/, null /*File*/, v + " - " + "http://www.upnjatim.ac.id")
            .then(function () {
            console.log('Sukses');
        }, function () {
            console.log('Gagal');
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon><img width="30px" height="auto" src="http://elearning.upnjatim.ac.id/main/default_course_document/images/Logo_Upn_Jatim_Baru.png">\n    </button>\n    <ion-title>UPN "Veteran" Jawa Timur</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-slides class="slide-zoom" autoplay="5000" loop="true" speed="3000" pager>\n<ion-slide *ngFor="let slide of slideData">\n      <div style="top:12px;z-index:3;position:absolute">{{slide.judul}}</div><img class="img-size" src="{{slide.image}}" />\n</ion-slide>\n</ion-slides>\n\n<ion-refresher (ionRefresh)="doRefresh($event)">\n	<ion-refresher-content  pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n      </ion-refresher-content>\n  </ion-refresher>\n\n	<ion-grid>\n  <ion-row>\n    <ion-col><div><button ion-button full color="primary" (click)="openSiamik()"><ion-icon name="bookmark" style="position:absolute;z-index:3;color:orange;font-size:40px;left:10px"></ion-icon>SIAMIK</button></div> </ion-col>\n    <ion-col><div><button ion-button full color="primary" (click)="openSimaba()"><ion-icon name="bookmark" style="position:absolute;z-index:3;color:orange;font-size:40px;left:10px"></ion-icon>SIMABA</button></div> </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><div><button ion-button full color="primary" (click)="openElearning()"><ion-icon name="bookmark" style="position:absolute;z-index:3;color:orange;font-size:40px;left:10px"></ion-icon>E-Learning</button></div> </ion-col>\n    <ion-col><div><button ion-button full color="primary" (click)="openEjournal()"><ion-icon name="bookmark" style="position:absolute;z-index:3;color:orange;font-size:40px;left:10px"></ion-icon>E-Journal</button></div> </ion-col>\n  </ion-row>\n</ion-grid>\n	\n<ion-card *ngFor="let item of items">\n<ion-item>\n    <ion-avatar item-start>\n      <img src="http://elearning.upnjatim.ac.id/main/default_course_document/images/Logo_Upn_Jatim_Baru.png">\n    </ion-avatar>\n    <h2>{{ item.kategori  }}</h2><p><font style="font-size:12px;color:grey">{{ item.tanggalinput  }}</font></p>\n</ion-item>\n\n  <ion-card-content>\n    <p><font style="font-size:14px;color:black">{{ item.isi   }}. - <a href="{{ item.link  }}">{{ item.link  }}</a></font></p>\n    \n<ion-row>\n    <ion-col>\n      \n    </ion-col>\n    <ion-col>\n      \n    </ion-col>\n    <ion-col center (click)="otherShare(item.kategori+\': \'+item.isi+\'- \'+item.link)" text-center>\n      <ion-icon name="share-alt" ></ion-icon> Share\n    </ion-col>\n  </ion-row>\n  </ion-card-content>\n \n</ion-card>\n\n<!---\n<ion-list>\n    <ion-item *ngFor="let asek of aseks" >\n      <ion-avatar item-left>\n        \n      </ion-avatar>\n \n       <h2>{{ asek.judul  }}</h2><p><img class="img-size" src="{{asek.image}}" /></p>\n \n      </ion-item>\n \n  </ion-list>\n\n<ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n   <ion-infinite-scroll-content loadingSpinner="bubbles"\n      loadingText="Loading more data..."></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n-->\n</ion-content>\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_belanegara_belanegara__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_hymnemars_hymnemars__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_uptbiro_uptbiro__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_kalenderakademik_kalenderakademik__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_fakultasprodi_fakultasprodi__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sarpras_sarpras__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabsabout_tabsabout__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabsakademik_tabsakademik__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_parallax_header_parallax_header__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabsabout_tabsabout__["a" /* TabsAboutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabsakademik_tabsakademik__["a" /* TabsAkademikPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_belanegara_belanegara__["a" /* BelanegaraPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_hymnemars_hymnemars__["a" /* HymnemarsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_fakultasprodi_fakultasprodi__["a" /* FakultasprodiPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_kalenderakademik_kalenderakademik__["a" /* KalenderakademikPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_uptbiro_uptbiro__["a" /* UptbiroPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sarpras_sarpras__["a" /* SarprasPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_19__directives_parallax_header_parallax_header__["a" /* ParallaxHeader */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/belanegara/belanegara.module#BelanegaraPageModule', name: 'BelanegaraPage', segment: 'belanegara', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/fakultasprodi/fakultasprodi.module#FakultasprodiPageModule', name: 'FakultasprodiPage', segment: 'fakultasprodi', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/hymnemars/hymnemars.module#HymnemarsPageModule', name: 'HymnemarsPage', segment: 'hymnemars', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/kalenderakademik/kalenderakademik.module#KalenderakademikPageModule', name: 'KalenderakademikPage', segment: 'kalenderakademik', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sarpras/sarpras.module#SarprasPageModule', name: 'SarprasPage', segment: 'sarpras', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabsabout/tabsabout.module#TabsAboutPageModule', name: 'TabsAboutPage', segment: 'tabsabout', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabsakademik/tabsakademik.module#TabsAkademikPageModule', name: 'TabsAkademikPage', segment: 'tabsakademik', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/uptbiro/uptbiro.module#UptbiroPageModule', name: 'UptbiroPage', segment: 'uptbiro', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_belanegara_belanegara__["a" /* BelanegaraPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_hymnemars_hymnemars__["a" /* HymnemarsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_fakultasprodi_fakultasprodi__["a" /* FakultasprodiPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_kalenderakademik_kalenderakademik__["a" /* KalenderakademikPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_uptbiro_uptbiro__["a" /* UptbiroPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_sarpras_sarpras__["a" /* SarprasPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabsabout_tabsabout__["a" /* TabsAboutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabsakademik_tabsakademik__["a" /* TabsAkademikPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabsabout_tabsabout__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabsakademik_tabsakademik__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sarpras_sarpras__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // let status bar overlay webview
        //this.statusBar.overlaysWebView(true);
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#27850d');
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabsabout_tabsabout__["a" /* TabsAboutPage */] },
            { title: 'Akademik', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabsakademik_tabsakademik__["a" /* TabsAkademikPage */] },
            { title: 'Sarpras', component: __WEBPACK_IMPORTED_MODULE_8__pages_sarpras_sarpras__["a" /* SarprasPage */] },
            { title: 'Kontak', component: __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/puskom/upnionic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/puskom/upnionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/puskom/upnionic/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/puskom/upnionic/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxHeader = (function () {
    function ParallaxHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ParallaxHeader.prototype.ngOnInit = function () {
        var content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('header-image')[0];
        var mainContent = content.getElementsByClassName('main-content')[0];
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        this.renderer.setElementStyle(this.header, 'background-size', 'cover');
        this.renderer.setElementStyle(mainContent, 'position', 'absolute');
    };
    ParallaxHeader.prototype.onWindowResize = function (ev) {
        this.headerHeight = this.header.clientHeight;
    };
    ParallaxHeader.prototype.onContentScroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateParallaxHeader(ev);
        });
    };
    ParallaxHeader.prototype.updateParallaxHeader = function (ev) {
        if (ev.scrollTop >= 0) {
            this.translateAmt = ev.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
    };
    return ParallaxHeader;
}());
ParallaxHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[parallax-header]',
        host: {
            '(ionScroll)': 'onContentScroll($event)',
            '(window:resize)': 'onWindowResize($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Renderer */]])
], ParallaxHeader);

//# sourceMappingURL=parallax-header.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map