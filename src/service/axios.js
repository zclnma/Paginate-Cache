import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://atr-test-dh1.aiam-dh.com/atr-gateway/ticket-management/api/v1',
    timeout: 4000,
    headers: {
        'apiToken': 'eyJhbGciOiJSUzUxMiIsInppcCI6IkRFRiJ9.eNqUkt1qg0AQhd9lrqWYYIL1qlsdZdG4sm4qpRQxui1C_WFVWhDfvZv2qqXE9PbMd2aGw5lhmE7gwIvq2lG21SiHEQwopqqWbSn15F2etFAqWYyyAmezs7Zbe7c3rf3GNqCXqqmHoe7aAZynGdqiOZs4Ei8_kCShcaDdveo0ONZSQ_OyGD854gr6gLnAQxIRgZd4VxsE5hnjoR-xbHW1oG6IIk_ZkbuYruIxE9SnLhGUxZdgwWkQIL_-D-phLKh4XAV9ipF3VRRf-D-DWMXCmGURegHek3T9Oj9Gf4X6bMCr6qb-3AgggufHFDloVX703wWyb03LtLTQFPXbr_bdFWUp23FS8qbsGlg-AQAA__8.B0wzp8YRSLU6sc-b09qb_LV0mvq7h48bS1HWwIvaGxs2tAAPPO-zI5VvAWPhqk2CgF_Qr0RRHUK-e08KHdgb8_eYxhLC61Ff_oQoGK8oZuopqAfb8sbu-nTGWuqLSW9zMXZq-A2YyzXo63hW-Bzjo7Z-GARWeL9a1Xzx9FWlQL0',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default instance;