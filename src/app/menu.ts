export class MenuModel{
    name: string = "";
    icon: string = "";
    url: string = "";
    isTitle: boolean = false;
    subMenus: MenuModel[] = [];
    showThisMenuJustAdmin: boolean = false;
}

export const Menus: MenuModel[] = [
    {
        name: "Ana Sayfa",
        icon: "fa-solid fa-home",
        url: "/",
        isTitle: false,
        subMenus: [],
        showThisMenuJustAdmin : false,
    },
    {
        name: "Admin",
        icon: "",
        url: "",
        isTitle: true,
        subMenus: [],
        showThisMenuJustAdmin : true,
    },
    {
        name: "Kullanıcılar",
        icon: "fa-solid fa-users",
        url: "/users",
        isTitle : false,
        subMenus : [],
        showThisMenuJustAdmin : true
    },
    {
        name: "Şirketler",
        icon: "fa-solid fa-city",
        url: "/companies",
        isTitle : false,
        subMenus : [],
        showThisMenuJustAdmin : true

    },
    {
        name: "Kayıtlar",
        icon: "",
        url: "",
        isTitle: true,
        subMenus: [],
        showThisMenuJustAdmin : false,
    },
    {
        name: "Kasalar",
        icon: "fa-solid fa-cash-register",
        url: "/cash-registers",
        isTitle : false,
        subMenus : [],
        showThisMenuJustAdmin : true
    },
    {
        name: "Bankalar",
        icon: "fa-solid fa-bank",
        url: "/banks",
        isTitle : false,
        subMenus : [],
        showThisMenuJustAdmin : true
    },
    {
        name: "Cariler",
        icon: "fa-solid fa-users",
        url: "/customers",
        isTitle : false,
        subMenus : [],
        showThisMenuJustAdmin : true
    },
    {
        name: "Ürünler",
        icon: "fa-solid fa-boxes-stacked",
        url: "/products",
        isTitle: false,
        subMenus:[],
        showThisMenuJustAdmin: true,
    },
    {
        name: "Faturalar",
        icon: "fa-solid fa-file",
        url: "/invoices",
        isTitle: false,
        subMenus:[],
        showThisMenuJustAdmin: true,
    },
    {
        name: "Raporlar",
        icon: "",
        url: "",
        isTitle: true,
        subMenus:[],
        showThisMenuJustAdmin: true,
    },
    {
        name: "Stok Karlılık Raporu",
        icon: "fa-solid fa-chart-simple",
        url: "/reports/product-profitability-reports",
        isTitle: false,
        subMenus:[],
        showThisMenuJustAdmin: true,
    }
]