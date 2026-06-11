import { PressRelease, Advertisement, Announcement, Circular } from './types';

export const PRESS_RELEASES: PressRelease[] = [
  {
    year: 2024,
    releases: [
      {
        title: "Deposit Protection Corporation releases its Annual Report FY2023-24",
        date: "13.12.2024",
        englishUrl: "#",
        urduUrl: "#"
      },
      {
        title: "Deposit Protection Corporation enhances the Guarantee Amount up to PKR 1,000,000",
        date: "01.10.2024",
        englishUrl: "#",
        urduUrl: "#"
      }
    ]
  },
  {
    year: 2023,
    releases: [
      {
        title: "Deposit Protection Corporation releases Annual Report for FY2022-23",
        date: "01.12.2023",
        englishUrl: "#",
        urduUrl: "#"
      }
    ]
  },
  {
    year: 2022,
    releases: [
      {
        title: "Deposit Protection Corporation Issues Annual Report for FY22",
        date: "23.12.2022",
        englishUrl: "#",
        urduUrl: "#"
      }
    ]
  },
  {
    year: 2021,
    releases: [
      {
        title: "Deposit Protection Corporation enhances the Guarantee Amount up to PKR 500,000; 95 percent of the eligible depositors are now fully protected",
        date: "24.09.2021",
        englishUrl: "#",
        urduUrl: "#"
      },
      {
        title: "Deposit Protection Corporation issues its Annual Report 2020-21",
        date: "14.10.2021",
        englishUrl: "#",
        urduUrl: "#"
      }
    ]
  },
  {
    year: 2020,
    releases: [
      {
        title: "Deposit Protection Corporation launches its website",
        date: "20.10.2020",
        englishUrl: "#",
        urduUrl: "#"
      }
    ]
  },
  {
    year: 2019,
    releases: [
      {
        title: "Deposit Protection Corporation becomes a member of International Association of Deposit Insurer",
        date: "15.02.2019",
        englishUrl: "#",
        urduUrl: "#"
      }
    ]
  },
  {
    year: 2018,
    releases: [
      {
        title: "Deposit Protection Mechanism for Banking Companies",
        date: "22.06.2018",
        englishUrl: "#",
        urduUrl: "#"
      }
    ]
  }
];

export const ADVERTISEMENTS: Advertisement[] = [
  {
    title: "Publication of Revision in the Protected Deposit Amount",
    date: "December 08, 2024",
    urls: [{ label: "Urdu", url: "#" }]
  },
  {
    title: "Announcement of Revision in Guarantee Amount",
    date: "November 21, 2021",
    urls: [
      { label: "Eng", url: "#" },
      { label: "Urdu", url: "#" }
    ]
  },
  {
    title: "Announcement of Guarantee Amount",
    date: "29 August 2018",
    urls: [{ label: "Link", url: "#" }]
  },
  {
    title: "Notice for the Eligible Depositors of the SME Bank Limited",
    date: "June 11, 2023",
    urls: [{ label: "Link", url: "#" }]
  },
  {
    title: "Request for Proposals - Procurement of Services of External Auditor for FY 2019-20 to FY 2023-24 for DPC",
    date: "31 March 2020",
    urls: [{ label: "Link", url: "#" }]
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    title: "Appointment of MD DPC",
    url: "https://www.dpc.org.pk/Circulars/2023/CL1.pdf",
    isPdf: true
  },
  {
    title: "Notification for Enhancement of Guarantee Amount (Protected Deposit) From Rs. 250,000/- to Rs. 500,000/-",
    url: "https://www.dpc.org.pk/Circulars/2021/CL1.pdf",
    isPdf: true
  },
  {
    title: "Appointment of MD DPC (Legacy)",
    url: "https://www.dpc.org.pk/Circulars/CL2.pdf",
    isPdf: true
  }
];

export const CIRCULARS: Circular[] = [
  {
    year: 2026,
    items: [
      { type: 'Letter', title: "DPC Circular Letter No. 2 of 2026 - Member Institutions of Deposit Protection Corporation (DPC)", url: "#" },
      { type: 'Letter', title: "DPC Circular Letter No. 1 of 2026 - Notification", url: "#" }
    ]
  },
  {
    year: 2025,
    items: [
      { type: 'Circular', title: "DPC Circular No. 01 of 2025 - Deposit Protection Mechanism for Digital Banks", url: "#" },
      { type: 'Letter', title: "DPC Circular Letter No. 03 of 2025 - Member Institutions... (DPC)", url: "#" },
      { type: 'Letter', title: "DPC Circular Letter No. 02 of 2025 - Member Institutions... (DPC)", url: "#" },
      { type: 'Letter', title: "DPC Circular Letter No. 01 of 2025 - Member Institutions... (DPC)", url: "#" }
    ]
  },
  {
    year: 2024,
    items: [
      { type: 'Letter', title: "Notification for Enhancement of Guarantee Amount (Protected Deposit)", url: "#" },
      { type: 'Letter', title: "Member Institutions of Deposit Protection Corporation (DPC)", url: "#" },
      { type: 'Letter', title: "DPC Circular Letter No. 01 of 2024 - Data Reporting through Data Acquisition Portal (DAP)", url: "#" }
    ]
  },
  {
    year: 2023,
    items: [
      { type: 'Letter', title: "DPC Circular Letter No. 01 of 2023 - Notification", url: "#" },
      { type: 'Letter', title: "DPC Circular Letter No. 02 of 2023 - Revision of Data Reporting Formats for Banks", url: "#" }
    ]
  },
  {
    year: 2022,
    items: [
      { type: 'Letter', title: "DPC Circular Letter No. 01 of 2022 - Single Depositor View Information System of Member Banks - Review Mechanism", url: "#" }
    ]
  },
  {
    year: 2021,
    items: [
      { type: 'Letter', title: "DPC Circular Letter No. 01 of 2021 - Notification for Enhancement of Guarantee Amount (Protected Deposit) From Rs. 250,000/- to Rs. 500,000/-", url: "#" }
    ]
  },
  {
    year: 2020,
    items: [
      { type: 'Letter', title: "DPC Circular Letter No. 01 of 2020 - Member Institutions... (DPC)", url: "#", annexures: [{ label: 'Annexure-A', url: '#' }] },
      { type: 'Letter', title: "DPC Circular Letter No. 02 of 2020 - Notification", url: "#" }
    ]
  },
  {
    year: 2019,
    items: [
      { type: 'Circular', title: "DPC Circular No. 01 of 2019 - Information System for Protected Depositors of Member Banks", url: "#", annexures: [{ label: 'Annexure-A', url: '#' }, { label: 'Annexure-B', url: '#' }] },
      { type: 'Letter', title: "DPC Circular Letter No. 01 of 2019 - Information System for Protected Depositors of Member Banks", url: "#", annexures: [{ label: 'Annexure-A', url: '#' }, { label: 'Annexure-B', url: '#' }] }
    ]
  },
  {
    year: 2018,
    items: [
      { type: 'Circular', title: "DPC Circular No. 02 of 2018 - Declaration of Commencement of Business of Deposit Protection Corporation", url: "#" },
      { type: 'Circular', title: "DPC Circular No. 3 of 2018 - Member Institutions... (DPC)", url: "#", annexures: [{ label: 'Annexure-A', url: '#' }] },
      { type: 'Circular', title: "DPC Circular No. 4 of 2018 - Deposit Protection Mechanism for Banking Companies", url: "#", annexures: [{ label: 'Annexure-A', url: '#' }] },
      { type: 'Circular', title: "DPC Circular No. 5 of 2018 - Shariah Compliant Deposit Protection Mechanism... ", url: "#", annexures: [{ label: 'Annexure-A', url: '#' }] },
      { type: 'Letter', title: "DPC Circular Letter No. 01 of 2018 - Exclusion of Deposits of Various Institutions from Protected Deposits", url: "#", annexures: [{ label: 'Annexure-A', url: '#' }] }
    ]
  }
];
