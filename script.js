const btnMenu = document.getElementById ('btnMenu');
const clsMenu = document.getElementById ('clsMenu');
const menuContainer = document.getElementById ('menuContainer');

//Desktop//
const ftrDesk = document.getElementById('ftrDesk');
const ftrDeskMenu = document.getElementById('ftrDeskMenu');
const ftrDeskUp = document.getElementById('ftrDeskUp');
const ftrDeskDown = document.getElementById('ftrDeskDown');
const companyDesk = document.getElementById ('companyDesk');
const companyDeskMenu = document.getElementById ('companyDeskMenu');
const companyDeskDown = document.getElementById ('companyDeskDown');
const companyDeskUp = document.getElementById ('companyDeskUp');

ftrDesk.addEventListener ('mouseenter', () => {
    ftrDeskMenu.classList.remove ('hide');
    ftrDeskDown.classList.add ('hide');
    ftrDeskUp.classList.remove ('hide');
})

ftrDesk.addEventListener ('mouseleave', () => {
    ftrDeskMenu.classList.add ('hide');
    ftrDeskDown.classList.remove ('hide');
    ftrDeskUp.classList.add ('hide');
})

companyDesk.addEventListener ('mouseenter', () => {
    companyDeskMenu.classList.remove ('hide');
    companyDeskDown.classList.add ('hide');
    companyDeskUp.classList.remove ('hide');
})

companyDesk.addEventListener ('mouseleave', () => {
    companyDeskMenu.classList.add ('hide');
    companyDeskDown.classList.remove ('hide');
    companyDeskUp.classList.add ('hide');
})

//Mobile//
const featureMobile = document.getElementById ('featureMobile');
const UpMobileFtr = document.getElementById ('arwUpMobileFtr');
const DownMobileFtr = document.getElementById ('arwDownMobileFtr');
const ftrMobileMenu = document.getElementById ('featuremobilemenu');
const companyMobile = document.getElementById ('companyMobile')
const UpMobileCompany = document.getElementById ('arwUpMobileCompany');
const DownMobileCompany = document.getElementById ('arwDownMobileCompany');
const companyMobileMenu = document.getElementById ('companyMobileMenu');

menuContainer.classList.remove ('show')

btnMenu.addEventListener('click', () => {
    menuContainer.classList.add ('show');
})

clsMenu.addEventListener('click', () => {
    menuContainer.classList.remove ('show');
})

featureMobile.addEventListener ('click', () => {
        ftrMobileMenu.classList.toggle ('hide');
        UpMobileFtr.classList.toggle ('hide');
        DownMobileFtr.classList.toggle ('hide');
})

companyMobile.addEventListener ('click', () => {
    companyMobileMenu.classList.toggle('hide');
    UpMobileCompany.classList.toggle('hide');
    DownMobileCompany.classList.toggle('hide');
})
