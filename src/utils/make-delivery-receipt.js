import { fontSize } from '@mui/system';
import pdfMake, { fonts } from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export async function makeDeliveryReceipt(order) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const senderInfo = order.senderInfo;
    const recipientInfo = order.recipientInfo;
    const goodsType = order.goodsType;
    const weightInfo = order.weightInfo;
    const costInfo = order.costInfo;
    const recipientFees = order.recipientFees;

    const logo = `<svg height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 511.999 511.999" xml:space="preserve">
<path style="fill:#8CC1EA;" d="M379.931,357.533h-29.75V134.815h77.591c42,0,76.041,34.041,76.041,76.03v146.688h-36.541"/>
<polyline style="fill:#F2CA7F;" points="160.215,357.533 127.462,357.533 127.462,111.888 350.18,111.888 350.18,134.815 
	350.18,357.533 247.555,357.533 "/>
<circle style="fill:#898686;" cx="203.885" cy="357.538" r="43.67"/>
<circle style="fill:#EDEBEB;" cx="203.885" cy="357.538" r="12.922"/>
<circle style="fill:#898686;" cx="423.601" cy="357.538" r="43.67"/>
<path style="fill:#CEE5F2;" d="M471.059,244.536v-33.692c0-23.862-19.419-43.277-43.288-43.277h-44.838v76.969H471.059z"/>
<circle style="fill:#EDEBEB;" cx="423.601" cy="357.538" r="12.922"/>
<path d="M30.023,169.165h63.864c4.522,0,8.188-3.666,8.188-8.188s-3.666-8.188-8.188-8.188H30.023c-4.522,0-8.188,3.666-8.188,8.188
	S25.501,169.165,30.023,169.165z"/>
<path d="M99.346,267.417H40.941c-4.522,0-8.188,3.666-8.188,8.188c0,4.522,3.666,8.188,8.188,8.188h58.406
	c4.522,0,8.188-3.666,8.188-8.188C107.535,271.083,103.868,267.417,99.346,267.417z"/>
<path d="M8.188,234.667h69.323c4.522,0,8.188-3.666,8.188-8.188c0-4.522-3.666-8.188-8.188-8.188H8.188
	c-4.522,0-8.188,3.666-8.188,8.188C0,231.001,3.666,234.667,8.188,234.667z"/>
<path d="M77.511,332.919h-6.715c-4.522,0-8.188,3.666-8.188,8.188s3.666,8.188,8.188,8.188h6.715c4.522,0,8.188-3.666,8.188-8.188
	S82.033,332.919,77.511,332.919z"/>
<path d="M43.502,332.919H8.188c-4.522,0-8.188,3.666-8.188,8.188s3.666,8.188,8.188,8.188h35.314c4.522,0,8.188-3.666,8.188-8.188
	S48.024,332.919,43.502,332.919z"/>
<path d="M427.771,126.081h-69.403v-14.739c0-4.522-3.666-8.188-8.188-8.188h-126.93c-4.522,0-8.188,3.666-8.188,8.188
	s3.666,8.188,8.188,8.188h118.741v179.341c0,4.522,3.666,8.188,8.188,8.188c4.522,0,8.188-3.666,8.188-8.188V142.457h69.403
	c37.414,0,67.853,30.434,67.853,67.842v138.5h-20.818c-3.938-24.717-25.397-43.67-51.205-43.67s-47.267,18.953-51.205,43.67h-14.027
	v-11.716c0-4.522-3.666-8.188-8.188-8.188c-4.522,0-8.188,3.666-8.188,8.188v11.716h-86.901
	c-3.938-24.717-25.397-43.67-51.205-43.67s-47.268,18.953-51.205,43.67H135.65V119.53h54.848c4.522,0,8.188-3.666,8.188-8.188
	c0-4.522-3.666-8.188-8.188-8.188h-63.036c-4.522,0-8.188,3.666-8.188,8.188v245.645c0,4.522,3.666,8.188,8.188,8.188h25.217
	c3.938,24.717,25.397,43.67,51.205,43.67s47.268-18.953,51.205-43.67h117.304c3.938,24.717,25.397,43.67,51.205,43.67
	s47.267-18.953,51.205-43.67h29.006c4.522,0,8.188-3.666,8.188-8.188V210.299C512,163.861,474.215,126.081,427.771,126.081z
	 M203.885,392.469c-19.564,0-35.482-15.917-35.482-35.482s15.918-35.482,35.482-35.482s35.482,15.917,35.482,35.482
	S223.449,392.469,203.885,392.469z M423.601,392.469c-19.562,0-35.478-15.913-35.482-35.475c0-0.002,0-0.004,0-0.007
	s0-0.004,0-0.007c0.004-19.562,15.92-35.475,35.482-35.475c19.564,0,35.482,15.917,35.482,35.482S443.165,392.469,423.601,392.469z"
	/>
<path d="M479.247,210.299c0-28.378-23.092-51.465-51.476-51.465h-44.838c-4.522,0-8.188,3.666-8.188,8.188v76.969
	c0,4.522,3.666,8.188,8.188,8.188h88.126c4.522,0,8.188-3.666,8.188-8.188V210.299z M462.871,235.802h-71.75V175.21h36.65
	c19.355,0,35.1,15.741,35.1,35.089V235.802z"/>
<path d="M203.885,335.877c-11.64,0-21.11,9.47-21.11,21.11s9.47,21.11,21.11,21.11s21.11-9.47,21.11-21.11
	S215.525,335.877,203.885,335.877z M203.885,361.721c-2.61,0-4.734-2.123-4.734-4.734s2.123-4.734,4.734-4.734
	c2.61,0,4.734,2.123,4.734,4.734S206.496,361.721,203.885,361.721z"/>
<path d="M423.601,335.877c-11.64,0-21.11,9.47-21.11,21.11s9.47,21.11,21.11,21.11s21.11-9.47,21.11-21.11
	S435.241,335.877,423.601,335.877z M423.601,361.721c-2.61,0-4.734-2.123-4.734-4.734s2.123-4.734,4.734-4.734
	s4.734,2.123,4.734,4.734S426.21,361.721,423.601,361.721z"/>
<path d="M471.059,274.559c-4.522,0-8.188,3.666-8.188,8.188v20.743c0,4.522,3.666,8.188,8.188,8.188s8.188-3.666,8.188-8.188
	v-20.743C479.247,278.225,475.581,274.559,471.059,274.559z"/>
</svg>`

    const documentDefinition = {
        pageOrientation: 'landscape',
        content: [
            {
                columns: [
                    {
                        columns: [
                            {
                                svg: `${logo}`,
                                width: 'auto',
                                fit: [150, 100],
                                alignment: 'left',
                                margin: [0, -30, 0, 0],
                            }, 
                            {
                                text: 'MAGIC POST',
                                width: '*',
                                fontSize: 40,
                                margin: [0, 0, 0, 0],
                                alignment: 'left',
                            }
                        ],
                        columnGap: 10,
                        width: '70%',
                    },
                    {
                        qr: 'https://google.com/', fit: '90' ,
                        width: '30%',
                        alignment: 'right',
                        margin: [0, -20, 17, 0], 
                    },
                ],
            },
            {
                text: `${order.orderId}\n\n`,
                alignment: 'right',
                margin: [0, -8, 20, 0],
            },
            {
                table: {
                    widths: ['*', '*'],
                    body: [
                        [
                            {
                                text: [
                                    {
                                        text: `1. Họ tên địa chỉ người gửi:\n`,
                                        bold: true
                                    },
                                    `${senderInfo.fullName}
                                    ${senderInfo.address} - ${senderInfo.ward} - ${senderInfo.district} - ${senderInfo.province}\n\n`,
                                    { text: `Điện thoại: `, bold: true } ,
                                    `${senderInfo.phoneNumber}`
                                ],
                                fontSize: 11,
                            },
                            {
                                text: [
                                    {
                                        text: `2. Họ tên địa chỉ người nhận:\n`,
                                        bold: true
                                    },
                                    `${recipientInfo.fullName}
                                    ${recipientInfo.address} - ${recipientInfo.ward} - ${recipientInfo.district} - ${recipientInfo.province}\n\n`,
                                    { text: `Điện thoại: `, bold: "true"},
                                    `${recipientInfo.phoneNumber}`
                                ],
                                fontSize: 11
                            },
                        ],
                        [
                            {
                                text: [
                                    {
                                        text: `3. Loại hàng gửi:\n`,
                                        bold: true
                                    },
                                    `${goodsType === 'document'?"Tài liệu":"Hàng hóa"}`,
                                ],
                                fontSize: 11
                            },
                            [
                                { text: '4. Khối lượng (kg):\n', bold: true, fontSize: 11},
                                {
                                    columns: [
                                        {
                                            text: `Khối lượng thực tế: ${weightInfo.real}\n`
                                        },
                                        {
                                            text: `Khối lượng quy đổi: ${weightInfo.exchanged}\n`
                                        },
                                    ],
                                    fontSize: 11
                                },
                            ],
                        ],
                        [
                            [
                                { text: '5. Cước:\n', bold: true, fontSize: 11},
                                {
                                    columns: [
                                        {
                                            text: `a. Cước chính: ${costInfo.main}
                                                b. Phụ phí: ${costInfo.additional}
                                                c. Cước GTGT: ${costInfo.gtgt}`,
                                            width: 'auto',
                                        },
                                        {
                                            text: [
                                                `d. Tổng cước (gồm VAT): ${costInfo.main + costInfo.additional + costInfo.gtgt}\n`,
                                                `e. Thu khác: 0\n`,
                                                { text: `f. Tổng thu: `, bold: true }, `${costInfo.main + costInfo.additional + costInfo.gtgt}`
                                            ],
                                            width: '*',
                                        },
                                    ],
                                    columnGap: 60,
                                    fontSize: 11
                                },
                            ],
                            {
                                text: [
                                    {
                                        text: `6. Thu của người nhận:\n`,
                                        bold: true
                                    },
                                    `COD: ${recipientFees.cod}
                                    Thu khác: ${recipientFees.additional}\n`,
                                    { text: `Tổng thu: `, bold: true }, `${recipientFees.cod + recipientFees.additional}`
                                ],
                                fontSize: 11
                            }
                        ],
                        [
                            {
                                text: [
                                    {
                                        text: `7. Cam kết của người gửi:\n`,
                                        bold: true
                                    },
                                    `Tôi chấp nhận các điều khoản tại mặt sau phiếu gửi và cam đoan bưu gửi này không chứa những mặt hàng nguy hiểm, cấm gửi. Trường hợp không phát được tôi sẽ trả cước chuyển khoản`
                                ],
                                fontSize: 11
                            },
                            {
                                text: [
                                    {
                                        text: `8. Bưu cục chấp nhận\n`,
                                        alignment: 'center',
                                        bold: true
                                    },
                                    {
                                        text: `Chữ ký GDV nhận\n\n\n\n\n\n\n\n`,
                                        alignment: 'center',
                                    }
                                ],
                                fontSize: 11
                            }
                        ],
                        [
                            {
                                columns: [
                                    { 
                                        text: [
                                            {
                                                text: `9. Ngày giờ gửi:\n`,
                                                bold: true
                                            },
                                            `${order.createdDate}`
                                        ],
                                        fontSize: 11
                                    },
                                    { 
                                        text: [
                                            {
                                                text: `Chữ ký của người gửi:\n`,
                                                bold: true
                                            },
                                        ],
                                        fontSize: 11
                                    },
                                ]
                            },
                            {
                                columns: [
                                    { 
                                        text: [
                                            {
                                                text: `10. Ngày giờ nhận:\n`,
                                                bold: true
                                            },
                                            `...../...../20....., ...........` 
                                        ],
                                        width: 'auto',
                                        fontSize: 11
                                    },
                                    { 
                                        text: `Người nhận/Người được ủy quyển nhận
                                            (Ký, ghi rõ họ tên)\n\n\n\n\n\n\n\n`,
                                        width: '*',
                                        alignment: "center",
                                        fontSize: 11
                                    },
                                ]
                            },
                        ]
                    ]
                }
            },
	    ]
    }

    pdfMake.createPdf(documentDefinition).open();
}