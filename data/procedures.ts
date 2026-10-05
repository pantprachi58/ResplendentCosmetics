export type Procedure = {
  cardTone: "blue" | "emerald";
  image: string;
  imageAlt: string;
  badgeTone: "navy" | "blue" | "slate" | "mint" | "solid";
  badge: string;
  title: string;
  description: string;
};

export const procedures: Procedure[] = [
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2rA_KzMtbpoDXOBjW4m-WAI95teSbHoEbc-nX2KHOrIYCDohfBueAnYJAbbAbFaiFZgJvrWW4bcBagMe-GpmS19tQ-R6II-Yoh9AQ8-r-ElFl3UF8aLJmzBO21c5nnF7PAvrrF2pYJ3Lzm0I7kYbmthyM6Y7TbAQIxXU6qJ6Eg0SfE8iMt47VunnY1A2nk7zULMR8NqTiO1qwVUsd9_pJpBXBA_9KH2hMsWZyP9aIQzAwJ_HKIxFO",
    imageAlt:
      "High-density Follicular Unit Extraction hair transplant procedure showing precise hairline mapping and follicular graft integration under sterile surgical theatre illumination.",
    badgeTone: "navy",
    badge: "Surgical",
    title: "Hair Transplant",
    description:
      "Advanced FUE & DHI micro-follicular restoration for hairline precision.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBSJm3AlQYa0vZPlkrCB4u_1t2K-SXsNPVkQdFtF3ZBhVg9jtKWyN8_evp-2-ZASvIABHFiLMBGt3bPl8T10lC6rVwa83vUNt6I2dHxEFKHIOWCg26_4bQ-wZSLFPeWE3jRVkWyqAMD6NwWisa-6T-JzKDDPioPF_GZmBneTG3oG4syTiEdBhe-zlP118vAV-wVN-e5tznWr39y37FhQ96tSaLBXxzSZIU2w8nT8fF6bHEzmN99Jrel",
    imageAlt:
      "Close-up monochrome profile view of refined aesthetic nasal contours, demonstrating subtle natural projection and dorsal balance from corrective cosmetic rhinoplasty.",
    badgeTone: "blue",
    badge: "Signature",
    title: "Rhinoplasty",
    description:
      "Preservation and structural nose reshaping in balance with facial symmetry.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ2-MQSRy69b6404EJkeTsuzBxer6yYI5hK77uZ_CU4YiZJDEC0XDkOMUQ8ijcI0A5PX8NmIYqm-bEGRaMLUXXBkSDk6--5aYKLmU5wKVe4NyuuUcbDIi7b6pIznb-WHpuEwbu4kF04wZuGXiFi8k1Q_l9I0wowL4xzRaUlMYtj_uHL6b1zgUmibORDmM3xpXryPswAS_LRadR3bfr9KoJEeknuZW0fhplyzYaUYOe7ugHPoVryOEtWtYMNu0BApVkbQ",
    imageAlt: "Face & Neck Lift",
    badgeTone: "navy",
    badge: "Surgical",
    title: "Face & Neck Lift",
    description:
      "Deep-plane SMAS suspension restoring jawline sharpness and cervical tone.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWgd_3MOHl2j8_T8qjNDLv64mxL7Shq8nFEP4Uv-jo4MF4mD38UAQfZNhMneaJe1eKYSqbsBvy1OsOjJbycBYZorI4mflN8D3iYzGb73NSRjkLVz12cL5eI6TsfcUWhW_7E7qyZAb_mnTofdzVo3A6zaA06T-7CGNUXLRDj17pxj7R4FKIaih1uwqDwWcIz0KzDTucMga2a9HW6R6jBNYehDFqhWIs29nHGv6QXRN09miNHxXRX9K56tY6lH0Ucc_stA",
    imageAlt: "Blepharoplasty",
    badgeTone: "slate",
    badge: "Oculoplastic",
    title: "Blepharoplasty",
    description:
      "Upper & lower eyelid surgery removing redundant tissue and tired bags.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBc6v1qKCAgZis0JIuQWAP8apT6frTguHQGe4jxKkO4gtWZmREzfSaBF-7dhR4aQic57OM37Sm-yF7NYzV-MTD_y-Gpnkib62VIu2uuUwqXPetnpkZ9wlLNXRPQMYUTMiGR2mrhZg-fYFMcNdiHqv3I5bccYeC04PlM3GYAyszkvxeDnqD_anN8g1optHLa7YB8Xblf4H90iVzGlBqakvId7T0-ci0ULMvcDVSEBkvnn1SLY_t6kdNRx4Qn__Xyg7IQqQ",
    imageAlt: "Otoplasty",
    badgeTone: "slate",
    badge: "Aesthetic",
    title: "Otoplasty",
    description:
      "Cosmetic ear pinning and structural cartilage remodeling for symmetry.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZmb9NTDqa5oytzVBdCOSxC-Urexwz-HIqtRHUR5gPIhJtzZM0Qk0UIezj_9-ZhN47h1g7Gc4jG2nnHZpPFo35UoXL7W7DpBNTKbWBZDdzoEK6mp7NTLUV4oq5K4ILJSN-Ulv2eGsJScP9netI55viM1WyvbsPP8lUs-NA_fIfJmuVrRlWIlGzfBPSExG-7g-Kf9ygtondP-8tbx84npYDrJhsPTrfo3zOFU3SydqP-QPtkqTtv6Z5vmo1sIKhAZMwoA",
    imageAlt: "Ear Lobe Repair",
    badgeTone: "slate",
    badge: "Day Care",
    title: "Ear Lobe Repair",
    description:
      "Surgical restoration of torn, split, or elongated ear lobes with sutureless finish.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO59nI70B2iUn9Zs4cio7QrpZxIYAzYA6jF9-c06zkSv1O_09tFuMEGEU2xMb8Sjs4kG4f7ZqRCPilpb4coLM8aSD-D1mcSP7NodKEW3IV_i1CTjq2oZcZg6YXAY82w1TpZHrqBtBHUrYt-HmcwuYv012Xm7xB2Fmnmxk21MegjFJ71r2UHSWmC9e0Hpmfda8H7kczrUubPsEFT7HJ3nvCA-ssstetvxGOiJkQ9_xc07Gh52oHFncKeu-rKcaaKoZ7jA",
    imageAlt: "Dimple Creation",
    badgeTone: "mint",
    badge: "Minimally Invasive",
    title: "Dimple Creation",
    description:
      "Bespoke dynamic cheek dimpleplasty created from internal mucosal approach.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0wuPWJjN26zOGfL6aZwu057wzIDdsV2LKf5QsiU5Us_wu46zJCnpYj86p3Y0oCCMVZNzPR9lW5IelbziY6c7ACh0G5qBpYgLpA8W3ipPAbIFhKBw8oCTFVEYEWafLbkBJdIY2LbUcF06fSwF0CEDg_MLnAiqRE_HJ5leKYurCIslbpbnvBSSTERiuj05TSNfZKr8wTaNiz-88oKfg52wOmaEJThUhoCWNVfl2obx-8kNgm7F3ASXcE8kg4LC68VbmuQ",
    imageAlt: "Liposuction & 6-Pack Sculpting",
    badgeTone: "solid",
    badge: "High Definition",
    title: "Liposuction & 6-Pack",
    description:
      "VASER ultrasound-assisted 4D abdominal definition and muscular etching.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMOpq-1YRxFWD3A93sPqLGudmv0s9pJPCX7NAo959fLp9xzvGqfHJ34XlrQdqkwMaW1DCnljSA_sBF_B7PIx-zyR0eoUYwN7FL24vJ4t7BnZ_-dPdrMJ8OHUeLyyV2071M5DhEUVbe4JmrDAEeU26E-eSOkvKTScQ45arvKVNF9AaojjAQznKXa5cR_a0SUbCFMMa9j_i3LvVsWi29Aa65EhnV34_h5ZYfrC0JDTKicoC4nv4dq8IX3KJm98p7bxDbpQ",
    imageAlt: "Buttock Enhancement",
    badgeTone: "slate",
    badge: "Contouring",
    title: "Buttock Enhancement",
    description:
      "Brazilian Butt Lift (BBL) and natural autologous micro-fat grafting.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiL2AHN7sSiiXUOAXKKdGxUFbfIAwewB3R4Nr7TdAeHdWUoFtYpggrRZtAct4z7y7jsjfO0RqGQtF8jduOreB3c8pSZc4Hr5JfbccPwGl_ej6_YpSganOH8yX-3m1gjVAcUbOWiWrjO-FaVO9nVCUPdV5tJHqwgR6J6VAEgRn6Xtxg3nyKN1XIS_QrjyFQhs50ciiBDmzzqV6A3QtKeRO9mzvm-eV1XP_Pi3lclvp6NTRPbMQUYUFAE-yY8YxTEiyk3A",
    imageAlt: "Abdominoplasty",
    badgeTone: "navy",
    badge: "Surgical",
    title: "Abdominoplasty",
    description:
      "Tummy tuck with muscle diastasis repair and complete waistline tapering.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0qBragSOskMTGIUzMwt_8bWhZjlc9Dsw_vbsPKLaY-KdrizK4RIArwmI2VzLw4qnhfo9b7VnQgfat_G8ztGQygfWwHrWS4Ol1AbwRtwRwRN2EQh-QCQZmgEqDFs1N0GVewtbD0aVcTXRpREWKezt1dSITCbGbfKj5KCdtHSOJKRfdVtfgbgJw-Ha4Zfrqp6gQuAE1evzYAi0nU2O7xB9oxRbSFl24z2htFkRFLpa6fIMcBBOx-mzB-axj843XSBb7bg",
    imageAlt: "Gynecomastia",
    badgeTone: "slate",
    badge: "Men's Aesthetic",
    title: "Gynecomastia",
    description:
      "Male chest reduction combining glandular excision & laser lipolysis.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6sqF7vI-Mms_6uwLgGfY7byDLVebSmfFsA92iNxHmjEiqEe7QehWWmcndEc8sRhFdUS11z8d2DvKyKoBdeR154MsDmxoztfmwwEnTs977YIYEjTEgrGy0PEAxmVEQ2ZvAaVRY1T3BuPRE-eLWBfmbrsFwJ7DFxlCDIzQmmHIdTECHBSEm6na12MTpFwqUTZLy3SJ_ncocasq0DLhj0mR-PgnGN-ygIZeoCMXbjZqbhMTZTfVb6N8MyhAkr0N42sxuiw",
    imageAlt: "Breast Augmentation",
    badgeTone: "slate",
    badge: "Cosmetic",
    title: "Breast Augmentation",
    description:
      "US-FDA cohesive silicone implants and mastopexy for voluptuous lift.",
  },
  {
    cardTone: "blue",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALSkfUcESg5Q--od5VgukBgrU5l5BOcfzylm6X3j9HyyB0fJ5kFNMg7VzmfrL02PN7AcpkH33BNeZLTrYovldkgeg0Ot_gpsJsIlBM9jeeSu8REORpw6WFkkCBUoy21IL2PtpTCBVHQf9j9QdPRbFrLP9Jzyu5Iab-nd0FFTZFWLt1u3VGawX-RypHqGMbswlgorU_w6LtOaM5Oa6lutLADRoilac8K1s1MbbZly-hsXPWPHpaiFsY4QXdmH753cxplg",
    imageAlt: "Gender Affirmation Surgery",
    badgeTone: "slate",
    badge: "Affirming",
    title: "Gender Affirmation",
    description:
      "Facial feminization/masculinization and top surgery with absolute empathy.",
  },
  {
    cardTone: "emerald",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdqj8izpkN5MLHu3aZqahM2NVIrhPkgwoTdDo8wlGJogoQs2iA7rBga4FCbcI1WYZ76A7cU6FUTdOiS8YNC8v-glKCV2daFmtoFjES6o2oboeC_PDyKKkdTWa2GTH-16s02BRjkj2kN8mpfKi6ykuQX6ErZF2uICmy46dYFuxu2wSpPaE4CCyPBseW9QiTZ-zZ9Yv8mfqHVzNbxJJ6gU-anIEkgu03eF6It0pNYBZQjq476Unct_LuDcalM18iAL6s4w",
    imageAlt: "Botox",
    badgeTone: "mint",
    badge: "Non-Surgical",
    title: "Botox & Neurotoxins",
    description:
      "Expression-preserving micro-dosing for crow's feet, forehead, and masseter.",
  },
  {
    cardTone: "emerald",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBk6Tlgubf8LuAsU8dIcbm6FOVTf_on18PUKhqqlfCL4lGRrhjgwTQsqH6_ww0NVsjrhthfw62xmhrBX7RxcrxOZ1_OIBYm576kPGgsEILDoy9Lvk8wYOlGCJvfhmCnu1gRfKfy-IfQ6i25V4n4GcixCQajmTfGTMovwuEh9TXyeXwxlLetEhyCTPo4tZO0P8zNBikbX_pQ4I4X2r9iuVOSGwaOMkjfq-mbITLusrYmEXP8Z9lowV2nYRwi0U2-XzYwlw",
    imageAlt: "Dermal Fillers",
    badgeTone: "mint",
    badge: "Non-Surgical",
    title: "Dermal Fillers",
    description:
      "Hyaluronic acid volumization for lips, tear troughs, cheekbones, and chin.",
  },
  {
    cardTone: "emerald",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXOlK46aCJv92vFMzeDlyDa5V5IDHZw6QsbvccHTx4dyCEuwK1QiHpNN-FYPeVrMDSXU8NnNPoQRZKPCmQGO8mzKktbVpibVhYGC9P9Ut0i7x6bB_POWvG8DZYK4ADT3dU1oo3nb4yEdXqS6ado78zIBxdcdM8JwsLVpFLWT2sw4t5mVTANls-H2OseZPfLic4-e3OsnuXaRRf5lkzMkChk_ufbGVIKaNMEANBL_MMOQ_n7ORft5-iCyNAAO1c6_gcRg",
    imageAlt: "RF Microneedling",
    badgeTone: "blue",
    badge: "Collagen",
    title: "RF Microneedling",
    description:
      "Deep dermal fractional radiofrequency delivering instant tightening & scar reduction.",
  },
  {
    cardTone: "emerald",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAB4xXjHoE69UIb2J2V7mScrmszlMicrFlCDrusVfv2t7tpKof_EixToqqIvIENhkoHXxjMd6yQ6fZXQ9BgT0r2k5uE9ik7RG_0PjMDox9815XuMgKau0ecNb7laS_cP0s_Of3GO6bxHPNwf_oR8gAn-psvZi8wv_--2epJU9uBIekfREMbIiu3eEdGMRJ2v0Y374VY328znk87_P_Ba_TMPsZwbWWkZPF0Tm9qytDYBb-QwVC1OWRpXREs_cdKyg67w",
    imageAlt: "Microdermabrasion",
    badgeTone: "blue",
    badge: "Medi-Facial",
    title: "Microdermabrasion",
    description:
      "Medical hydra-exfoliation infused with peptide serums for glass skin radiance.",
  },
  {
    cardTone: "emerald",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCqkhSR1-yQTb0BN8mV4MqPZ0UsZ23NfhjoG19w7gNezWjG81OPM8VL6Va3MMc-bhrL8GYndLgmxRC70CpqhucgIFJrApP8Y0jUQyLXXUK9Ks6FNAqSXzRnS_BAFu9PfFEvKN1CD05xNAIzGDOFpg2K6oPstaqSsGYhK9L2_cuDw9SBCtL6evgwpB8m0eXj2WUzIhE-iUiu1p8j0GN9F69sC8GwHlli0LAOBl6clVlD1Db3Xa4BmpprVMBcKxVNzOq1IQ",
    imageAlt: "Laser Skin Resurfacing",
    badgeTone: "blue",
    badge: "Technology",
    title: "Laser Resurfacing",
    description:
      "Fractional CO2 and Q-Switched Nd:YAG laser systems for pigmentation & pores.",
  },
  {
    cardTone: "emerald",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj-1Cx3vC6RZM7dTLNyhcndtMnBVv6VSmFcQXHQxCm0WPIK16az34lZmkxzHGkzHdMoM1ye_eH07wdNlo-Q5tdnJfV8i-OW043N5NgHjOlz7Xu-xNGUgBaOueZynWIHj7JYF3LFfPvIpNXbD6WDLV6-uG1eh_8Di_Nxrc_o77e-gaLV8KaUBw9wPdNnMN-6GI764dvV8_led-HNByaUFszFuNmSbSDFbeMG9_jKqeiieTWMmAbT3fi",
    imageAlt:
      "High-end dermatological procedure showing delicate placement of bio-absorbable polydioxanone PDO threads along the midface vector for skin tension lifting.",
    badgeTone: "mint",
    badge: "Non-Surgical",
    title: "PDO Thread Lift",
    description:
      "Barbed bio-absorbable threads repositioning sagging cheek fat pads instantly.",
  },
  {
    cardTone: "emerald",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDe19KFiOlQmrwsGYDNRXQsGxduYPgQOuuVTssazCNaQrerlsRel6ca9bXR9Ak6oFz5UE4R9D8VjtPu4yWvQCzdlUuxsc4XzsdKFkxDkQOAFKJ4oMvbIBkYDfgz816OY9tD7H3X6knVscEIg6sFdmdhsHhuWaEK8PDper4CWCzlU3WVn-zONIY3ySUaSi5tfj1-Bjx3mRvzErm50jY9OfdEfQ3nvITjQ0wOLiHwbhntE2C7NGut1jrH",
    imageAlt:
      "Clinical sterile preparation and micro-injection of autologous Platelet-Rich Plasma PRP into the scalp dermis with precision gold micro-cannula needles.",
    badgeTone: "mint",
    badge: "Regenerative",
    title: "PRP Scalp Therapy",
    description:
      "High-concentration autologous growth factors stimulating dormant hair follicles.",
  },
];
