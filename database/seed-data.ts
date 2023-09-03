interface SeedData {
  motorcycles: SeedMotorcycleEntry[];
  accessories: SeedaccessoriesEntry[];
}

interface SeedMotorcycleEntry {
  model: string;
  price: number;
  img: string;
  description: string;
  type: string;
}

interface SeedaccessoriesEntry {
  model: string;
  description: string;
  price: number;
  img: string;
  type: string;
}

export const seedData: SeedData = {
  motorcycles: [
    {
      model: "xLarge Number 1",
      price: 13000,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724189/Simpli-Images/xlarge-e2366e2d-18e6-4175-b320-253822c4a30c_as4wzo.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Street Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724189/Simpli-Images/xlarge-e2366e2d-18e6-4175-b320-253822c4a30c_as4wzo.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Fat Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724189/Simpli-Images/xlarge-068926e0-fa93-4452-913b-21bf38d2011b_qtau4h.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Heritage Classic",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-f5833000-3a42-4a45-ba05-e39d7bc46d0e_podpc4.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },{
      model: "xLarge",
      price: 13000,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-3e3e59c3-195d-4e28-89b3-bcb9ebc4d95f_ljvhzk.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Street Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-c50994cc-18d1-4776-87d4-7f17e0b118d5_lsbyts.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Fat Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-df456f5c-3cfe-49b7-9194-876bd2dc1a7d_f3cxby.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Heritage Classic",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-9165fccd-b3ad-4ded-b366-98af37ad36c8_lkdmxq.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },{
      model: "xLarge",
      price: 13000,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-c94a96bb-0597-4243-a2cc-e73293c98e8b_fch4i5.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Street Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-09af4b07-adb4-4dc1-8543-0b73ac226230_itjvte.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Fat Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-3e3e59c3-195d-4e28-89b3-bcb9ebc4d95f_ljvhzk.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "ROYALENFIELD",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-3e3e59c3-195d-4e28-89b3-bcb9ebc4d95f_ljvhzk.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },{
      model: "xLarge",
      price: 13000,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724187/Simpli-Images/b52aa65eeada0f4a096a7ca0703f88de_are0yw.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Street Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724187/Simpli-Images/473aeaabb84b1ae77d1b41babc420bca_wieefc.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Fat Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724187/Simpli-Images/large-0abc4ed3-a9cb-4e95-94e6-e49dca1503a5_qejldt.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Heritage Classic",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724187/Simpli-Images/b52aa65eeada0f4a096a7ca0703f88de_1_hvif6y.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },{
      model: "xLarge",
      price: 13000,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724187/Simpli-Images/038d4518d082b53546073a9785b059db_ad4xu3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Street Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724188/Simpli-Images/large-09af4b07-adb4-4dc1-8543-0b73ac226230_itjvte.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Fat Bob 114",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724187/Simpli-Images/large-0abc4ed3-a9cb-4e95-94e6-e49dca1503a5_qejldt.webp",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
    {
      model: "Heritage Classic",
      price: 1234,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724187/Simpli-Images/038d4518d082b53546073a9785b059db_ad4xu3.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      type: "motorcycle",
    },
  ],
  accessories: [
    {
      model: "Royal Enfield 650 Number 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 84.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724227/Simpli-Images/Accesorios/large-e8d9290d-b0f5-487f-8432-d9f35de28d2c_zyjuyj.jpg",
      type: "accessories",
    },
    {
      model: "Kit Protección Basculanete",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 4.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724227/Simpli-Images/Accesorios/large-c85f1b29-85cc-4e9a-91dc-1e72e10f1665_hwxcxv.webp",
      type: "accessories",
    },
    {
      model: "Fuel X Pro INT/GT 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 12.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724226/Simpli-Images/Accesorios/large-aa980e3e-b8cb-4f23-b36c-e68cbcb56302_aeslwq.jpg",
      type: "accessories",
    },{
      model: " Alforjas laterales Royal Enfield 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 84.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724226/Simpli-Images/Accesorios/large-97624645-327c-4422-8036-988e4a51cceb_frl2at.jpg",
      type: "accessories",
    },
    {
      model: "Kit Protección Basculanete",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 4.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724225/Simpli-Images/Accesorios/large-349157ef-9b32-4035-8a4b-3d2b3e74f0d9_b0m0q6.jpg",
      type: "accessories",
    },
    {
      model: "Fuel X Pro INT/GT 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 12.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724225/Simpli-Images/Accesorios/large-42560b3c-ac70-4a9f-8ca4-2be477a82c3a_zac2f1.jpg",
      type: "accessories",
    },{
      model: " Alforjas laterales Royal Enfield 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 84.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724224/Simpli-Images/Accesorios/large-9923e333-f113-4ddc-b63e-02287ea1dc17_jehymo.webp",
      type: "accessories",
    },
    {
      model: "Kit Protección Basculanete",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 4.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724224/Simpli-Images/Accesorios/large-6793a22b-7b84-489f-bf64-5845c9a7c677_bmtsir.jpg",
      type: "accessories",
    },
    {
      model: "Fuel X Pro INT/GT 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 12.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724223/Simpli-Images/Accesorios/large-4843c949-6a41-4d94-81a8-9f0cf1ce1fb1_pxofgp.jpg",
      type: "accessories",
    },{
      model: " Alforjas laterales Royal Enfield 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 84.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724223/Simpli-Images/Accesorios/large-0866e904-ac9e-4bf7-80ad-be73a3ebcfc1_klq5sw.webp",
      type: "accessories",
    },
    {
      model: "Kit Protección Basculanete",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 4.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724222/Simpli-Images/Accesorios/large-426e52e6-fd58-4d45-8d50-42aefb074fbd_wxbubw.webp",
      type: "accessories",
    },
    {
      model: "Fuel X Pro INT/GT 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 12.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724222/Simpli-Images/Accesorios/large-81b948d6-c91d-488e-aad2-6885265bcf90_cessoz.jpg",
      type: "accessories",
    },{
      model: "Casco",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 84.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724221/Simpli-Images/Accesorios/large-53b23137-2054-46f3-806e-dfcd9b808764_ipwvhc.jpg",
      type: "accessories",
    },
    {
      model: "Kit Protección Basculanete",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 4.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724221/Simpli-Images/Accesorios/large-48a2a396-190a-4986-956b-f249c1470f2b_ql1dus.jpg",
      type: "accessories",
    },
    {
      model: "Fuel X Pro INT/GT 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 12.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724220/Simpli-Images/Accesorios/large-8a8af296-cf90-466f-9d4e-9721dddfb0e3_ytvwnd.webp",
      type: "accessories",
    },{
      model: " Alforjas laterales Royal Enfield 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 84.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724220/Simpli-Images/Accesorios/large-7dfc7907-f027-437b-bb70-26628ac83cf0_hhauqg.jpg",
      type: "accessories",
    },
    {
      model: "Kit Protección Basculanete",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 4.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724219/Simpli-Images/Accesorios/large-6bb5b786-c7ad-4291-8299-6bea32b7f036_ljlvaa.jpg",
      type: "accessories",
    },
    {
      model: "Fuel X Pro INT/GT 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 12.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724219/Simpli-Images/Accesorios/large-6a68593d-a38f-4fa6-8eb6-53bf20a52a21_tsktxw.png",
      type: "accessories",
    },{
      model: " Alforjas laterales Royal Enfield 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 84.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724218/Simpli-Images/Accesorios/large-2f7eb45f-e429-4599-90a3-3ce1d01c395e_fstofp.jpg",
      type: "accessories",
    },
    {
      model: "Kit Protección Basculanete",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 4.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724218/Simpli-Images/Accesorios/large-1f3bc3f4-863a-45b7-9d4d-d758054681bf_sgcoaj.webp",
      type: "accessories",
    },
    {
      model: "Fuel X Pro INT/GT 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 12.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724218/Simpli-Images/Accesorios/large-1a1d619b-82b0-4b6d-b943-c1de974854a5_yyihvq.jpg",
      type: "accessories",
    },
    {
      model: "Fuel X Pro INT/GT 650",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      price: 12.0,
      img: "https://res.cloudinary.com/dzi7zifjl/image/upload/v1693724222/Simpli-Images/Accesorios/large-81b948d6-c91d-488e-aad2-6885265bcf90_cessoz.jpg",
      type: "accessories",
    },
  ],
};